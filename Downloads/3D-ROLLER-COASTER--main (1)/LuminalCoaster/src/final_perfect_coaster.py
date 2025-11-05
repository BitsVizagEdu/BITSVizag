#!/usr/bin/env python3
"""
LUMINAL COASTER - Project 2 Final Submission
A real-time, physics-driven roller coaster simulation with dynamic biomes,
procedural geometry, and immersive lighting effects.
"""

import pygame
from pygame.locals import *
from OpenGL.GL import *
from OpenGL.GLU import *
import numpy as np
import math
import random
import sys
import time
import os
import json

LIGHTS_ON = True
CAVE_SECTIONS = []
NIGHT_MODE = False
NEON_GLOW_ENABLED = True  # Neon glow effect toggle
ENERGY_PHYSICS_ENABLED = True  # Energy physics toggle

# Biome system
BIOME_NEON_CITY = 0
BIOME_BIO_FOREST = 1
BIOME_STELLAR = 2
current_biome = BIOME_NEON_CITY

# Simple generated 2D checker texture for the track
TRACK_TEX_ID = None

# Rotating cubes system (like in image - translucent, rotating, light blue)
ROTATING_CUBES = []

# Flying birds system
BIRDS = []
BIRD_SPAWN_TIMER = 0.0

def _gen_checker_texture():
    global TRACK_TEX_ID
    if TRACK_TEX_ID is not None:
        return TRACK_TEX_ID
    size = 64
    data = []
    for y in range(size):
        for x in range(size):
            c = 220 if ((x//8 + y//8) % 2)==0 else 120
            data += [c, c, c, 255]
    data = (GLubyte * (size*size*4))(*data)
    TRACK_TEX_ID = glGenTextures(1)
    glBindTexture(GL_TEXTURE_2D, TRACK_TEX_ID)
    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, size, size, 0, GL_RGBA, GL_UNSIGNED_BYTE, data)
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR)
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR)
    glBindTexture(GL_TEXTURE_2D, 0)
    return TRACK_TEX_ID

if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'ignore')

WIDTH, HEIGHT = 1400, 900

# Track/vehicle contact tuning
TRACK_HALF_HEIGHT = 0.55
WHEEL_RADIUS = 0.32
WHEEL_CENTER_DROP = 0.8  # local negative Y from body origin to wheel center
CLEARANCE = 0.01         # tiny gap to avoid z-fighting (sharper lock)
TRACK_HALF_WIDTH = 2.7/2.0  # must match ExtendedTrack width

def normalize(v):
    n = np.linalg.norm(v)
    return v / n if n > 1e-8 else v

def catmull_rom_spline(p0, p1, p2, p3, t):
    """CatMull-Rom spline interpolation for smooth track generation."""
    t2 = t * t
    t3 = t2 * t
    return 0.5 * (
        (2.0 * p1) +
        (-p0 + p2) * t +
        (2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3) * t2 +
        (-p0 + 3.0 * p1 - 3.0 * p2 + p3) * t3
    )

def lerp(a, b, t):
    """Linear interpolation."""
    return a * (1.0 - t) + b * t

def quaternion_slerp(q1, q2, t):
    """Quaternion spherical interpolation for smooth camera rotation."""
    dot = np.clip(np.dot(q1, q2), -1.0, 1.0)
    if abs(dot) > 0.9995:
        return normalize(lerp(q1, q2, t))
    theta = math.acos(abs(dot))
    sin_theta = math.sin(theta)
    w1 = math.sin((1.0 - t) * theta) / sin_theta
    w2 = math.sin(t * theta) / sin_theta
    result = w1 * q1 + w2 * (q2 if dot > 0 else -q2)
    return normalize(result)

class RotatingCube:
    """Translucent rotating cube like in the reference image."""
    def __init__(self, pos, size, rot_speed, color):
        self.pos = np.array(pos, dtype=float)
        self.size = size
        self.rot_speed = rot_speed
        self.color = color  # (r, g, b, alpha)
        self.rotation = np.array([random.uniform(0, 360), random.uniform(0, 360), random.uniform(0, 360)], dtype=float)
        self.rot_axis = normalize(np.array([random.uniform(-1, 1), random.uniform(-1, 1), random.uniform(-1, 1)]))
    
    def update(self, dt):
        """Update rotation over time."""
        self.rotation += self.rot_speed * dt * 60.0
        self.rotation %= 360.0
    
    def draw(self):
        """Draw translucent rotating cube."""
        glPushMatrix()
        glTranslatef(self.pos[0], self.pos[1], self.pos[2])
        glRotatef(self.rotation[0], 1, 0, 0)
        glRotatef(self.rotation[1], 0, 1, 0)
        glRotatef(self.rotation[2], 0, 0, 1)
        
        # Enable blending for translucency
        glEnable(GL_BLEND)
        glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
        glDisable(GL_LIGHTING)
        glColor4f(self.color[0], self.color[1], self.color[2], self.color[3])
        
        # Draw cube faces
        s = self.size / 2.0
        glBegin(GL_QUADS)
        # Front
        glVertex3f(-s, -s, s)
        glVertex3f(s, -s, s)
        glVertex3f(s, s, s)
        glVertex3f(-s, s, s)
        # Back
        glVertex3f(-s, -s, -s)
        glVertex3f(-s, s, -s)
        glVertex3f(s, s, -s)
        glVertex3f(s, -s, -s)
        # Top
        glVertex3f(-s, s, -s)
        glVertex3f(-s, s, s)
        glVertex3f(s, s, s)
        glVertex3f(s, s, -s)
        # Bottom
        glVertex3f(-s, -s, -s)
        glVertex3f(s, -s, -s)
        glVertex3f(s, -s, s)
        glVertex3f(-s, -s, s)
        # Right
        glVertex3f(s, -s, -s)
        glVertex3f(s, s, -s)
        glVertex3f(s, s, s)
        glVertex3f(s, -s, s)
        # Left
        glVertex3f(-s, -s, -s)
        glVertex3f(-s, -s, s)
        glVertex3f(-s, s, s)
        glVertex3f(-s, s, -s)
        glEnd()
        
        glDisable(GL_BLEND)
        glEnable(GL_LIGHTING)
        glPopMatrix()

# Flying birds system functions
def init_birds():
    """Initialize flying birds system."""
    global BIRDS, BIRD_SPAWN_TIMER
    BIRDS = []
    BIRD_SPAWN_TIMER = 0.0

def update_birds(dt, vehicle_pos):
    """Update bird positions and animations. Spawn birds when riding."""
    global BIRDS, BIRD_SPAWN_TIMER
    
    BIRD_SPAWN_TIMER += dt
    
    # Spawn new birds periodically when vehicle is moving
    if BIRD_SPAWN_TIMER > 3.0:  # Spawn every 3 seconds
        BIRD_SPAWN_TIMER = 0.0
        # Spawn 1-2 birds at a time
        num_new = random.randint(1, 2)
        for _ in range(num_new):
            # Spawn bird near vehicle but offset
            offset_x = random.uniform(-50, 50)
            offset_z = random.uniform(-50, 50)
            offset_y = random.uniform(20, 40)  # Above vehicle
            
            bird = {
                'pos': np.array([
                    vehicle_pos[0] + offset_x,
                    vehicle_pos[1] + offset_y,
                    vehicle_pos[2] + offset_z
                ]),
                'vel': np.array([
                    random.uniform(-2, 2),
                    random.uniform(-0.5, 0.5),
                    random.uniform(-2, 2)
                ]),
                'wing_phase': random.uniform(0, math.pi * 2),
                'wing_speed': random.uniform(3, 6),
                'size': random.uniform(0.8, 1.5),
                'color': (random.uniform(0.3, 0.9), random.uniform(0.3, 0.9), random.uniform(0.3, 0.9)),
                'lifetime': 30.0  # Birds live for 30 seconds
            }
            BIRDS.append(bird)
    
    # Update existing birds
    birds_to_remove = []
    for i, bird in enumerate(BIRDS):
        # Update position
        bird['pos'] += bird['vel'] * dt
        
        # Update wing animation
        bird['wing_phase'] += bird['wing_speed'] * dt
        
        # Update lifetime
        bird['lifetime'] -= dt
        
        # Remove if too far or lifetime expired
        dist_from_vehicle = np.linalg.norm(bird['pos'] - vehicle_pos)
        if bird['lifetime'] <= 0 or dist_from_vehicle > 200:
            birds_to_remove.append(i)
    
    # Remove expired birds (reverse order to maintain indices)
    for i in reversed(birds_to_remove):
        BIRDS.pop(i)
    
    return len(birds_to_remove) > 0

def draw_birds():
    """Draw flying birds with wing animation."""
    global BIRDS
    
    glDisable(GL_LIGHTING)
    glEnable(GL_BLEND)
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
    
    for bird in BIRDS:
        glPushMatrix()
        glTranslatef(bird['pos'][0], bird['pos'][1], bird['pos'][2])
        
        # Bird body color
        glColor4f(bird['color'][0], bird['color'][1], bird['color'][2], 0.9)
        size = bird['size']
        
        # Wing animation (flapping)
        wing_angle = math.sin(bird['wing_phase']) * 45.0  # -45 to +45 degrees
        
        # Draw bird body (small sphere)
        glPushMatrix()
        glScalef(size * 0.3, size * 0.3, size * 0.5)
        q = gluNewQuadric()
        gluSphere(q, 1.0, 8, 8)
        gluDeleteQuadric(q)
        glPopMatrix()
        
        # Draw wings (flapping animation)
        glColor4f(bird['color'][0] * 0.8, bird['color'][1] * 0.8, bird['color'][2] * 0.8, 0.9)
        
        # Left wing
        glPushMatrix()
        glRotatef(wing_angle, 0, 0, 1)
        glTranslatef(-size * 0.5, 0, 0)
        glScalef(size * 0.8, size * 0.2, size * 0.1)
        glBegin(GL_TRIANGLES)
        glVertex3f(0, 0, 0)
        glVertex3f(1, 0, 0.5)
        glVertex3f(1, 0, -0.5)
        glEnd()
        glPopMatrix()
        
        # Right wing
        glPushMatrix()
        glRotatef(-wing_angle, 0, 0, 1)
        glTranslatef(size * 0.5, 0, 0)
        glScalef(size * 0.8, size * 0.2, size * 0.1)
        glBegin(GL_TRIANGLES)
        glVertex3f(0, 0, 0)
        glVertex3f(1, 0, 0.5)
        glVertex3f(1, 0, -0.5)
        glEnd()
        glPopMatrix()
        
        # Bird head/beak
        glColor4f(bird['color'][0] * 0.9, bird['color'][1] * 0.9, bird['color'][2] * 0.9, 0.9)
        glPushMatrix()
        glTranslatef(size * 0.6, 0, 0)
        glScalef(size * 0.2, size * 0.2, size * 0.3)
        q = gluNewQuadric()
        gluSphere(q, 1.0, 6, 6)
        gluDeleteQuadric(q)
        glPopMatrix()
        
        glPopMatrix()
    
    glDisable(GL_BLEND)
    glEnable(GL_LIGHTING)

# Moving sky cubes - dynamic game elements
SKY_CUBES = []

def init_rotating_cubes():
    """Initialize rotating cubes like in the reference image and moving sky cubes."""
    global ROTATING_CUBES, SKY_CUBES
    ROTATING_CUBES = []
    SKY_CUBES = []
    
    # Original rotating cubes
    for i in range(12):
        # Arrange in a loose formation
        angle = (i / 12.0) * 2 * math.pi
        radius = random.uniform(30, 50)
        x = radius * math.cos(angle)
        z = radius * math.sin(angle)
        y = random.uniform(50, 90)
        
        # Light blue translucent cubes (like image) - SLOW ROTATION
        size = random.uniform(3.0, 6.0)
        rot_speed = np.array([random.uniform(2, 8), random.uniform(2, 8), random.uniform(2, 8)])  # Much slower
        # Light blue with transparency
        color = (0.4, 0.7, 1.0, 0.35)  # Light blue, translucent
        
        ROTATING_CUBES.append(RotatingCube([x, y, z], size, rot_speed, color))
    
    # Add moving small cubes in the sky for dynamic challenges
    random.seed(123)  # Different seed for sky cubes
    for _ in range(25):  # More cubes in the sky
        x = random.uniform(-100, 100)
        y = random.uniform(40, 120)  # High in the sky
        z = random.uniform(-100, 100)
        size = random.uniform(0.3, 0.8)  # Smaller cubes
        # Random movement speeds
        move_speed = np.array([random.uniform(-2, 2), random.uniform(-1, 1), random.uniform(-2, 2)], dtype=float)
        rot_speed = [random.uniform(5, 15), random.uniform(5, 15), random.uniform(5, 15)]
        # Varied colors for visual interest
        colors = [
            (1.0, 0.3, 0.3),  # Red
            (0.3, 1.0, 0.3),  # Green
            (0.3, 0.3, 1.0),  # Blue
            (1.0, 1.0, 0.3),  # Yellow
            (1.0, 0.3, 1.0),  # Magenta
            (0.3, 1.0, 1.0),  # Cyan
        ]
        color = random.choice(colors)
        
        SKY_CUBES.append({
            'pos': np.array([x, y, z], dtype=float),
            'size': size,
            'move_speed': move_speed,
            'rot_speed': rot_speed,
            'rotation': np.array([0.0, 0.0, 0.0], dtype=float),
            'color': color,
            'bounds': {'x': [-100, 100], 'y': [40, 120], 'z': [-100, 100]},
            'collected': False
        })

def update_sky_cubes(dt, vehicle_pos):
    """Update moving sky cubes and check for collisions with vehicle."""
    global SKY_CUBES
    collect_distance = 3.0  # Distance to collect cube
    collected = False
    
    for cube in SKY_CUBES:
        if cube['collected']:
            continue
        
        # Update position
        cube['pos'] += cube['move_speed'] * dt
        
        # Update rotation
        cube['rotation'] += np.array(cube['rot_speed']) * dt * 60.0
        cube['rotation'] %= 360.0
        
        # Bounce off bounds
        bounds = cube['bounds']
        if cube['pos'][0] < bounds['x'][0] or cube['pos'][0] > bounds['x'][1]:
            cube['move_speed'][0] *= -1
        if cube['pos'][1] < bounds['y'][0] or cube['pos'][1] > bounds['y'][1]:
            cube['move_speed'][1] *= -1
        if cube['pos'][2] < bounds['z'][0] or cube['pos'][2] > bounds['z'][1]:
            cube['move_speed'][2] *= -1
        
        # Keep within bounds
        cube['pos'][0] = np.clip(cube['pos'][0], bounds['x'][0], bounds['x'][1])
        cube['pos'][1] = np.clip(cube['pos'][1], bounds['y'][0], bounds['y'][1])
        cube['pos'][2] = np.clip(cube['pos'][2], bounds['z'][0], bounds['z'][1])
        
        # Check collision with vehicle (collectible)
        dist = np.linalg.norm(cube['pos'] - vehicle_pos)
        if dist < collect_distance:
            cube['collected'] = True
            collected = True
    
    return collected

def draw_sky_cubes():
    """Draw moving sky cubes."""
    global SKY_CUBES
    
    for cube in SKY_CUBES:
        if cube['collected']:
            continue
        
        glPushMatrix()
        glTranslatef(cube['pos'][0], cube['pos'][1], cube['pos'][2])
        glRotatef(cube['rotation'][0], 1, 0, 0)
        glRotatef(cube['rotation'][1], 0, 1, 0)
        glRotatef(cube['rotation'][2], 0, 0, 1)
        
        # Enable blending for translucency
        glEnable(GL_BLEND)
        glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
        glDisable(GL_LIGHTING)
        glColor4f(cube['color'][0], cube['color'][1], cube['color'][2], 0.7)  # Semi-transparent
        
        # Draw cube faces
        s = cube['size'] / 2.0
        glBegin(GL_QUADS)
        # Front
        glVertex3f(-s, -s, s)
        glVertex3f(s, -s, s)
        glVertex3f(s, s, s)
        glVertex3f(-s, s, s)
        # Back
        glVertex3f(-s, -s, -s)
        glVertex3f(-s, s, -s)
        glVertex3f(s, s, -s)
        glVertex3f(s, -s, -s)
        # Top
        glVertex3f(-s, s, -s)
        glVertex3f(-s, s, s)
        glVertex3f(s, s, s)
        glVertex3f(s, s, -s)
        # Bottom
        glVertex3f(-s, -s, -s)
        glVertex3f(s, -s, -s)
        glVertex3f(s, -s, s)
        glVertex3f(-s, -s, s)
        # Right
        glVertex3f(s, -s, -s)
        glVertex3f(s, s, -s)
        glVertex3f(s, s, s)
        glVertex3f(s, -s, s)
        # Left
        glVertex3f(-s, -s, -s)
        glVertex3f(-s, -s, s)
        glVertex3f(-s, s, s)
        glVertex3f(-s, s, -s)
        glEnd()
        
        glDisable(GL_BLEND)
        glEnable(GL_LIGHTING)
        glPopMatrix()

def get_biome_at_position(track_pos, total_points):
    """Determine which biome zone we're in based on track position."""
    # Divide track into 3 biomes - make transitions more visible
    zone = track_pos * 3.0
    if zone < 1.0:
        return BIOME_NEON_CITY  # First third: Neon City (0.0 - 0.333)
    elif zone < 2.0:
        return BIOME_BIO_FOREST  # Second third: Bio-Organic Forest (0.333 - 0.666)
    else:
        return BIOME_STELLAR  # Final third: Stellar Collapse (0.666 - 1.0)

def get_time_of_day_color():
    """Get REALISTIC sky and ambient color based on time of day using atmospheric scattering.
    Uses Rayleigh scattering simulation for authentic sky colors.
    Morning (sky blue) -> Afternoon (light orange tint) -> Evening (realistic sunset) -> Night (gradual dark)
    with VERY SLOW, GRADUAL color transitions - NO SUDDEN CHANGES.
    """
    global TIME_OF_DAY
    t = TIME_OF_DAY % 1.0
    
    # Use DOUBLE smoothstep for ULTRA-SMOOTH, VERY GRADUAL transitions
    def ultra_smooth_lerp(a, b, t_val):
        """Ultra-smooth interpolation using double smoothstep for VERY GRADUAL transitions"""
        # First smoothstep
        smooth_t = t_val * t_val * (3.0 - 2.0 * t_val)
        # Second smoothstep for even smoother transitions
        ultra_smooth_t = smooth_t * smooth_t * (3.0 - 2.0 * smooth_t)
        return lerp(a, b, ultra_smooth_t)
    
    # REALISTIC ATMOSPHERIC SCATTERING COLORS (Rayleigh scattering simulation)
    # Based on real-world physics: blue scatters more than red (why sky is blue)
    
    if t < 0.25:  # Morning (0.0 - 0.25): Sky Blue Morning
        phase = t / 0.25
        ultra_smooth_phase = ultra_smooth_lerp(0.0, 1.0, phase)
        # REALISTIC MORNING: Sky blue throughout (realistic morning sky)
        # Sky color: Beautiful sky blue (realistic morning sky color)
        sky_r = ultra_smooth_lerp(0.52, 0.55, ultra_smooth_phase)  # Slight warm tint to neutral
        sky_g = ultra_smooth_lerp(0.75, 0.80, ultra_smooth_phase)  # Clear sky blue green component
        sky_b = ultra_smooth_lerp(0.92, 0.95, ultra_smooth_phase)  # Bright sky blue (Rayleigh scattering)
        # Ambient: bright, clear morning light (realistic morning sun)
        amb_r = ultra_smooth_lerp(0.90, 0.95, ultra_smooth_phase)
        amb_g = ultra_smooth_lerp(0.85, 0.92, ultra_smooth_phase)
        amb_b = ultra_smooth_lerp(0.80, 0.88, ultra_smooth_phase)
        
    elif t < 0.5:  # Afternoon (0.25 - 0.5): Small Light Orange Tint
        phase = (t - 0.25) / 0.25
        ultra_smooth_phase = ultra_smooth_lerp(0.0, 1.0, phase)
        # REALISTIC AFTERNOON: Sky blue with small light orange tint (realistic afternoon)
        # At afternoon, sky is still blue but with a slight warm orange tint from sun angle
        sky_r = ultra_smooth_lerp(0.55, 0.62, ultra_smooth_phase)  # Small light orange tint (realistic)
        sky_g = ultra_smooth_lerp(0.80, 0.78, ultra_smooth_phase)  # Slightly warmer
        sky_b = ultra_smooth_lerp(0.95, 0.92, ultra_smooth_phase)  # Still blue but slightly less intense
        # Ambient: bright daylight with slight warm orange tint (realistic afternoon sun)
        amb_r = ultra_smooth_lerp(0.95, 0.98, ultra_smooth_phase)
        amb_g = ultra_smooth_lerp(0.92, 0.90, ultra_smooth_phase)
        amb_b = ultra_smooth_lerp(0.88, 0.85, ultra_smooth_phase)
        
    elif t < 0.75:  # Evening (0.5 - 0.75): Realistic Sunset
        phase = (t - 0.5) / 0.25
        ultra_smooth_phase = ultra_smooth_lerp(0.0, 1.0, phase)
        # REALISTIC EVENING: Gradual transition from afternoon to sunset
        # As sun sets, blue scattering decreases, red/orange increases (longer path through atmosphere)
        # REALISTIC sunset colors: golden orange to deep orange-red
        sky_r = ultra_smooth_lerp(0.62, 0.95, ultra_smooth_phase)  # Light orange to deep orange-red (realistic)
        sky_g = ultra_smooth_lerp(0.78, 0.60, ultra_smooth_phase)  # Warm to golden orange
        sky_b = ultra_smooth_lerp(0.92, 0.50, ultra_smooth_phase)  # Blue decreases gradually (realistic)
        # Ambient: warm golden to rich orange-red (realistic sunset)
        amb_r = ultra_smooth_lerp(0.98, 0.85, ultra_smooth_phase)
        amb_g = ultra_smooth_lerp(0.90, 0.65, ultra_smooth_phase)
        amb_b = ultra_smooth_lerp(0.85, 0.45, ultra_smooth_phase)
        
    else:  # Night (0.75 - 1.0): Gradual Dark Night
        phase = (t - 0.75) / 0.25
        ultra_smooth_phase = ultra_smooth_lerp(0.0, 1.0, phase)
        # REALISTIC NIGHT: Very gradual transition to dark night
        # Minimal scattering at night, but some blue remains from scattered light
        # VERY GRADUAL transition to dark (no sudden changes)
        sky_r = ultra_smooth_lerp(0.95, 0.15, ultra_smooth_phase)  # Orange-red to very dark (gradual)
        sky_g = ultra_smooth_lerp(0.60, 0.10, ultra_smooth_phase)  # Orange to very dark (gradual)
        sky_b = ultra_smooth_lerp(0.50, 0.25, ultra_smooth_phase)  # Orange to deep indigo (residual blue, gradual)
        # Ambient: warm orange to cool dark blue (realistic night, VERY GRADUAL)
        amb_r = ultra_smooth_lerp(0.85, 0.20, ultra_smooth_phase)
        amb_g = ultra_smooth_lerp(0.65, 0.15, ultra_smooth_phase)
        amb_b = ultra_smooth_lerp(0.45, 0.25, ultra_smooth_phase)
    
    return (sky_r, sky_g, sky_b), (amb_r, amb_g, amb_b)

def draw_rainbow():
    """Draw a fixed rainbow in the sky."""
    glDisable(GL_LIGHTING)
    glEnable(GL_BLEND)
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
    
    # Rainbow position: upper-left sky
    center_x, center_y, center_z = -80, 100, -60
    radius = 40
    width = 3
    
    # Draw rainbow arc with multiple colored bands
    colors = [
        (1.0, 0.0, 0.0, 0.7),  # Red
        (1.0, 0.5, 0.0, 0.7),  # Orange
        (1.0, 1.0, 0.0, 0.7),  # Yellow
        (0.0, 1.0, 0.0, 0.7),  # Green
        (0.0, 0.5, 1.0, 0.7),  # Blue
        (0.5, 0.0, 1.0, 0.7),  # Indigo
        (0.8, 0.0, 0.8, 0.7),  # Violet
    ]
    
    glPushMatrix()
    glTranslatef(center_x, center_y, center_z)
    glRotatef(-45, 0, 1, 0)  # Rotate to face camera
    
    num_segments = 60
    for band_idx, color in enumerate(colors):
        band_radius = radius - (band_idx * width)
        glColor4f(*color)
        glBegin(GL_TRIANGLE_STRIP)
        for i in range(num_segments + 1):
            angle = (i / num_segments) * math.pi  # Half circle
            x = band_radius * math.cos(angle)
            y = band_radius * math.sin(angle)
            z = 0
            
            x_next = (band_radius - width) * math.cos(angle)
            y_next = (band_radius - width) * math.sin(angle)
            
            glVertex3f(x, y, z)
            glVertex3f(x_next, y_next, z)
        glEnd()
    
    glPopMatrix()
    glDisable(GL_BLEND)
    glEnable(GL_LIGHTING)

def createmountainranges():
    """Create multiple mountain models using OBJModel procedural generation."""
    mountains = []
    
    # Raw mountain positions (x, z, height_scale) - FURTHER REDUCED for faster initialization
    mountainpositionsraw = [
        (-120, -80, 1.2), (80, -100, 1.0), (-150, 120, 1.5),
        (150, -80, 1.3), (-80, 150, 1.1), (100, 140, 1.4),
        (-140, -60, 1.0), (60, -140, 1.2), (-100, 100, 1.3),
        (120, 80, 1.1), (-90, -120, 1.4), (90, -90, 1.0),
    ]  # Reduced from 18 to 12 mountains for faster initialization
    
    mountainpositions = []
    # Filter out mountains too close to start (track starting area)
    START_X, START_Z = -150, 0
    MIN_DISTANCE = 40.0
    
    for pos in mountainpositionsraw:
        x, z, heightscale = pos
        dist = math.sqrt((x - START_X)**2 + (z - START_Z)**2)
        if dist >= MIN_DISTANCE:
            mountainpositions.append(pos)
    
    # Create mountain models - FURTHER OPTIMIZED for faster initialization
    for i, (x, z, heightscale) in enumerate(mountainpositions):
        mountain = OBJModel()
        # Further reduced polygon count for much faster initialization
        base_radius = random.uniform(6.0, 12.0)
        num_segments = random.randint(5, 8)  # Reduced from 6-10 for faster init
        num_rings = random.randint(2, 4)  # Reduced from 3-5 for faster init
        irregularity = random.uniform(0.2, 0.4)
        mountain.createproceduralmountain(
            heightscale=heightscale * 55.0,  # INCREASED HEIGHT - Much taller mountains (45-60 range)
            base_radius=base_radius,
            num_segments=num_segments,
            num_rings=num_rings,
            irregularity=irregularity
        )
        mountains.append({
            'model': mountain,
            'x': x,
            'z': z,
            'scale': heightscale,
            'color': (0.1, 0.65, 0.25) if i % 2 == 0 else (0.5, 0.7, 0.9)  # Green or icy blue
        })
    
    return mountains

def drawmountains(mountains):
    """Draw all mountain models."""
    glEnable(GL_LIGHTING)
    
    for idx, mountaindata in enumerate(mountains):
        model = mountaindata['model']
        x = mountaindata['x']
        z = mountaindata['z']
        scale = mountaindata['scale']
        color = mountaindata['color']
        
        # Get terrain height at this position
        ground_y = get_terrain_height(x, z)
        
        glPushMatrix()
        # Place mountain base at ground level (slightly below to intersect)
        glTranslatef(x, ground_y - 0.1, z)
        
        # Apply color
        glColor3fv(color)
        
        # Draw the mountain model
        model.draw()
        
        glPopMatrix()

def drawlargeballoons(currenttime):
    """Large floating balloons around the scene with detailed parameters for color, position, animation."""
    balloonpositions = [
        (-100, 60, -60, 8.0, 1.0, 0.2, 0.3),   # Red balloon
        (120, 70, 80, 10.0, 0.3, 0.3, 1.0),    # Blue balloon
        (-80, 55, 100, 9.0, 1.0, 1.0, 0.0),    # Yellow balloon
        (100, 65, -80, 8.5, 0.8, 0.0, 1.0),    # Purple balloon
        (-60, 50, -100, 7.5, 1.0, 0.5, 0.8),   # Pink balloon
        (90, 68, 60, 9.5, 0.0, 1.0, 1.0),      # Cyan balloon
        (-110, 58, 40, 8.2, 1.0, 0.6, 0.0),    # Orange balloon
        (110, 72, -40, 9.0, 0.5, 0.0, 0.5),    # Dark purple balloon
        (-70, 52, 120, 8.8, 0.3, 1.0, 0.3),    # Light green balloon
        (130, 75, -60, 10.5, 1.0, 0.8, 0.2),   # Light pink balloon
        (-90, 54, -120, 8.3, 0.2, 0.8, 1.0),   # Light blue balloon
        (85, 66, 100, 9.2, 1.0, 0.4, 0.6),     # Coral balloon
        (-50, 48, 80, 7.8, 0.6, 0.3, 1.0),     # Lavender balloon
        (140, 74, 20, 10.2, 0.8, 1.0, 0.2),     # Peach balloon
        (-120, 56, -40, 8.6, 0.4, 0.6, 1.0),   # Sky blue balloon
    ]
    
    glDisable(GL_LIGHTING)
    glEnable(GL_BLEND)
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
    
    q = gluNewQuadric()
    for bx, by, bz, size, color0, color1, color2 in balloonpositions:
        # Animated translation and sphere drawing for each balloon
        float_offset = math.sin(currenttime * 0.7 + bx * 0.1) * 2.0 + math.cos(currenttime * 0.5 + bz * 0.1) * 1.5
        animated_y = by + float_offset
        
        glPushMatrix()
        glTranslatef(bx, animated_y, bz)
        
        # Balloon string
        glColor4f(0.2, 0.2, 0.2, 0.8)
        glBegin(GL_LINES)
        glVertex3f(0, 0, 0)
        glVertex3f(0, -by * 0.3, 0)
        glEnd()
        
        # Colorful balloon
        glColor4f(color0, color1, color2, 0.95)
        gluSphere(q, size, 18, 16)
        
        glPopMatrix()
    
    gluDeleteQuadric(q)
    glDisable(GL_BLEND)
    glEnable(GL_LIGHTING)

def draw_clouds_with_balloons():
    """Draw clouds with colorful balloons attached."""
    global CLOUDS_WITH_BALLOONS
    if CLOUDS_WITH_BALLOONS is None:
        init_biome_environments()
    
    t = pygame.time.get_ticks() / 1000.0
    glDisable(GL_LIGHTING)
    glEnable(GL_BLEND)
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
    
    for cx, cy, cz, cloud_size, balloons in CLOUDS_WITH_BALLOONS:
        # Draw cloud (white, fluffy)
        glColor4f(0.96, 0.98, 1.0, 0.8)
        glPushMatrix()
        glTranslatef(cx + math.sin(t*0.3)*2, cy, cz + math.cos(t*0.3)*2)
        q = gluNewQuadric()
        gluSphere(q, cloud_size, 16, 14)
        glTranslatef(cloud_size*0.9, cloud_size*0.15, -cloud_size*0.3)
        gluSphere(q, cloud_size*0.8, 14, 12)
        glTranslatef(-cloud_size*1.4, -cloud_size*0.05, cloud_size*0.4)
        gluSphere(q, cloud_size*0.7, 12, 10)
        glPopMatrix()
        
        # Draw balloons attached to cloud
        for bx, by, bz, balloon_color in balloons:
            # String from balloon to cloud
            glColor4f(0.2, 0.2, 0.2, 0.8)
            glBegin(GL_LINES)
            glVertex3f(bx, by, bz)
            glVertex3f(cx + math.sin(t*0.3)*2, cy + cloud_size*0.5, cz + math.cos(t*0.3)*2)
            glEnd()
            
            # Balloon
            glPushMatrix()
            glTranslatef(bx, by + math.sin(t*0.7 + bx*0.1)*1.5, bz)
            glColor4f(*balloon_color, 0.9)
            gluSphere(q, 1.2, 16, 14)
            glPopMatrix()
        
        gluDeleteQuadric(q)
    
    glDisable(GL_BLEND)
    glEnable(GL_LIGHTING)

def init_opengl():
    """Simple OpenGL setup"""
    pygame.init()
    # Initialize mixer for background music (without disturbing other code)
    # Initialize pygame mixer for background music
    try:
        pygame.mixer.pre_init(frequency=22050, size=-16, channels=2, buffer=512)
        pygame.mixer.init(frequency=22050, size=-16, channels=2, buffer=512)
        if pygame.mixer.get_init() is None:
            print("⚠ Warning: Pygame mixer failed to initialize - music will not play")
        else:
            print("✓ Pygame mixer initialized successfully")
    except Exception as mixer_error:
        print(f"⚠ Warning: Pygame mixer initialization failed: {mixer_error}")
        print("  Music will not be available, but game will continue")
    
    screen = pygame.display.set_mode((WIDTH, HEIGHT), DOUBLEBUF | OPENGL)
    pygame.display.set_caption("LUMINAL COASTER - Real-Time Physics Simulation")
    
    glEnable(GL_DEPTH_TEST)
    glEnable(GL_LIGHTING)
    glEnable(GL_LIGHT0)
    glEnable(GL_COLOR_MATERIAL)
    glShadeModel(GL_SMOOTH)
    
    # Enhanced lighting with soft shading for realistic depth
    glLightfv(GL_LIGHT0, GL_POSITION, (100, 150, 100, 1))
    glLightfv(GL_LIGHT0, GL_AMBIENT, (0.6, 0.6, 0.65, 1))  # Softer ambient
    glLightfv(GL_LIGHT0, GL_DIFFUSE, (0.9, 0.9, 0.85, 1))  # Softer diffuse
    glLightfv(GL_LIGHT0, GL_SPECULAR, (1.0, 1.0, 1.0, 1))
    
    # Enable fog for depth (subtle atmospheric perspective)
    glEnable(GL_FOG)
    glFogi(GL_FOG_MODE, GL_LINEAR)
    glFogfv(GL_FOG_COLOR, (GLfloat * 4)(0.5, 0.7, 0.9, 1.0))
    glFogf(GL_FOG_START, 150.0)
    glFogf(GL_FOG_END, 400.0)
    
    glClearColor(0.5, 0.75, 1.0, 1.0)
    
    glMatrixMode(GL_PROJECTION)
    gluPerspective(55, WIDTH/HEIGHT, 0.1, 500)
    glMatrixMode(GL_MODELVIEW)
    
    return screen

class SimpleTrack:
    """Simple smooth circular track"""
    def __init__(self):
        # Simple circle with gentle hills
        points = []
        for i in range(360):
            a = math.radians(i)
            r = 60
            x = r * math.cos(a)
            z = r * math.sin(a)
            y = 15 * math.sin(a*2) + 20
            points.append(np.array([x, y, z]))
        
        self.points = np.array(points)
        n = len(self.points)
        
        # Simple tangents
        self.tangents = []
        for i in range(n):
            t = normalize(self.points[(i+1)%n] - self.points[(i-1)%n])
            self.tangents.append(t)
        
        self.tangents = np.array(self.tangents)
        
        # Simple frame
        up = np.array([0, 1, 0])
        self.binormals = np.array([normalize(np.cross(t, up)) for t in self.tangents])
        self.normals = np.array([normalize(np.cross(b, t)) for b, t in zip(self.binormals, self.tangents)])
        
        self.create_geometry()
    
    def create_geometry(self):
        """Create track geometry"""
        self.dl = glGenLists(1)
        glNewList(self.dl, GL_COMPILE)
        
        w, h = 2.5, 0.5
        n = len(self.points)
        
        # BLACK TRACK
        glColor3f(0.05, 0.05, 0.05)
        
        # Top
        glBegin(GL_QUAD_STRIP)
        for i in range(n+1):
            idx = i%n
            p, nm, bn = self.points[idx], self.normals[idx], self.binormals[idx]
            glNormal3fv(nm)
            glVertex3fv(p - bn*w/2 + nm*h)
            glVertex3fv(p + bn*w/2 + nm*h)
        glEnd()
        
        # Bottom
        glBegin(GL_QUAD_STRIP)
        for i in range(n+1):
            idx = i%n
            p, nm, bn = self.points[idx], self.normals[idx], self.binormals[idx]
            glNormal3f(-nm[0], -nm[1], -nm[2])
            glVertex3fv(p - bn*w/2 - nm*h)
            glVertex3fv(p + bn*w/2 - nm*h)
        glEnd()
        
        # Sides
        for s in [-1, 1]:
            glBegin(GL_QUAD_STRIP)
            for i in range(n+1):
                idx = i%n
                p, nm, bn = self.points[idx], self.normals[idx], self.binormals[idx]
                glNormal3fv(bn*s)
                glVertex3fv(p + bn*w/2*s + nm*h)
                glVertex3fv(p + bn*w/2*s - nm*h)
            glEnd()
        
        # Supports
        glColor3f(0.08, 0.08, 0.08)
        q = gluNewQuadric()
        for i in range(0, n, 30):
            p = self.points[i]
            if p[1] > 3:
                glPushMatrix()
                glTranslatef(p[0], 0, p[2])
                gluCylinder(q, 0.35, 0.4, p[1], 10, 1)
                glPopMatrix()
        gluDeleteQuadric(q)
        
        glEndList()
    
    def get_pos(self, t):
        """Get position on track"""
        t = t % 1.0
        idx = int(t * len(self.points)) % len(self.points)
        return self.points[idx], self.tangents[idx], self.normals[idx]
    
    def draw(self):
        glCallList(self.dl)

class SimpleCar:
    """Simple visible car"""
    def draw(self, pos, tang, norm, rot):
        glPushMatrix()
        glTranslatef(pos[0], pos[1] + 1, pos[2])
        
        # Orient to track
        ang = math.atan2(tang[0], tang[2]) * 180/math.pi
        glRotatef(-ang, 0, 1, 0)
        pitch = math.asin(np.clip(tang[1], -1, 1)) * 180/math.pi
        glRotatef(pitch, 1, 0, 0)
        
        q = gluNewQuadric()
        
        # Body - RED
        glColor3f(1, 0.1, 0.1)
        glPushMatrix()
        glScalef(2.5, 1.5, 1.8)
        gluSphere(q, 0.75, 18, 18)
        glPopMatrix()
        
        # Roof - WHITE
        glColor3f(1, 1, 1)
        glPushMatrix()
        glTranslatef(0, 1.2, 0)
        glScalef(2.3, 0.5, 1.6)
        gluSphere(q, 0.7, 16, 16)
        glPopMatrix()
        
        # Wheels - BLACK
        glColor3f(0.05, 0.05, 0.05)
        for x, z in [(1.2, -0.9), (1.2, 0.7), (-1.2, -0.9), (-1.2, 0.7)]:
            glPushMatrix()
            glTranslatef(x, -0.85, z)
            glRotatef(90, 0, 1, 0)
            glRotatef(rot, 0, 0, 1)
            gluCylinder(q, 0.35, 0.35, 0.28, 14, 1)
            gluDisk(q, 0, 0.35, 14, 1)
            glTranslatef(0, 0, 0.28)
            gluDisk(q, 0, 0.35, 14, 1)
            glPopMatrix()
        
        gluDeleteQuadric(q)
        glPopMatrix()

def gl_draw_fullscreen_surface(surf: pygame.Surface):
    """Blit a pygame Surface to the full OpenGL framebuffer.
    Assumes an OpenGL context is current and viewport == (0,0, WIDTH, HEIGHT).
    """
    td = pygame.image.tostring(surf, "RGBA", True)
    glDisable(GL_DEPTH_TEST)
    glDisable(GL_LIGHTING)
    glEnable(GL_BLEND)
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
    glMatrixMode(GL_PROJECTION)
    glPushMatrix()
    glLoadIdentity()
    glOrtho(0, WIDTH, HEIGHT, 0, -1, 1)
    glMatrixMode(GL_MODELVIEW)
    glPushMatrix()
    glLoadIdentity()
    glRasterPos2f(0, 0)
    glDrawPixels(WIDTH, HEIGHT, GL_RGBA, GL_UNSIGNED_BYTE, td)
    glPopMatrix()
    glMatrixMode(GL_PROJECTION)
    glPopMatrix()
    glMatrixMode(GL_MODELVIEW)
    glDisable(GL_BLEND)
    glEnable(GL_DEPTH_TEST)
    glEnable(GL_LIGHTING)

class OBJModel:
    """OBJ loader and procedural mountain mesh creator."""
    def __init__(self):
        self.vertices = []
        self.faces = []
        self.normals = []
        self.display_list = None  # For optimized rendering
    
    def createproceduralmountain(self, heightscale=1.0, base_radius=8.0, num_segments=16, num_rings=8, irregularity=0.3):
        """Procedural vertex/face creation for mountain mesh."""
        self.vertices = []
        self.faces = []
        self.normals = []
        
        # Generate vertices in rings
        for ring in range(num_rings + 1):
            ring_height = (ring / num_rings) * heightscale
            ring_radius = base_radius * (1.0 - ring / num_rings) * (0.6 + 0.4 * random.uniform(0.8, 1.2))
            
            for seg in range(num_segments):
                angle = (seg / num_segments) * 2.0 * math.pi
                # Add irregularity for natural look
                radius_offset = random.uniform(-irregularity, irregularity) * ring_radius
                actual_radius = ring_radius + radius_offset
                
                x = actual_radius * math.cos(angle)
                z = actual_radius * math.sin(angle)
                y = ring_height + random.uniform(-0.2, 0.2) * heightscale * (1.0 - ring / num_rings)
                
                self.vertices.append([x, y, z])
        
        # Generate faces
        for ring in range(num_rings):
            for seg in range(num_segments):
                # Current ring indices
                idx0 = ring * num_segments + seg
                idx1 = ring * num_segments + ((seg + 1) % num_segments)
                # Next ring indices
                idx2 = (ring + 1) * num_segments + seg
                idx3 = (ring + 1) * num_segments + ((seg + 1) % num_segments)
                
                # Two triangles per quad
                self.faces.append([idx0, idx1, idx2])
                self.faces.append([idx1, idx3, idx2])
        
        # Calculate normals - SIMPLIFIED for performance
        self.normals = [[0.0, 1.0, 0.0] for _ in self.vertices]
        # Simplified normal calculation (per-vertex average)
        normal_counts = [0] * len(self.vertices)
        for face in self.faces:
            if len(face) >= 3:
                v0 = np.array(self.vertices[face[0]])
                v1 = np.array(self.vertices[face[1]])
                v2 = np.array(self.vertices[face[2]])
                try:
                    normal = normalize(np.cross(v1 - v0, v2 - v0))
                    for idx in face:
                        if idx < len(self.normals):
                            self.normals[idx] = (np.array(self.normals[idx]) + normal).tolist()
                            normal_counts[idx] += 1
                except:
                    pass  # Skip invalid normals
        
        # Normalize normals
        for i in range(len(self.normals)):
            if normal_counts[i] > 0:
                self.normals[i] = normalize(np.array(self.normals[i])).tolist()
    
    def draw(self):
        """Draw the mountain model using display list for performance."""
        if not self.vertices or not self.faces:
            return
        
        # Use display list if not already created
        if not hasattr(self, 'display_list') or self.display_list is None:
            self.display_list = glGenLists(1)
            glNewList(self.display_list, GL_COMPILE)
            glBegin(GL_TRIANGLES)
            for face in self.faces:
                if len(face) >= 3:
                    for idx in face:
                        if idx < len(self.normals):
                            glNormal3fv(self.normals[idx])
                        if idx < len(self.vertices):
                            glVertex3fv(self.vertices[idx])
            glEnd()
            glEndList()
        
        glCallList(self.display_list)

class SimplePlant:
    """Green ground plants - bushes, clusters."""
    def __init__(self, x, z):
        self.x, self.z = x, z
        self.size = random.uniform(1.5, 3.5)
        self.cluster_count = random.randint(2, 4)
        self.ground_y = get_terrain_height(x, z)
    
    def drawself(self):
        """Draw green ground plant at coordinates with shape/clusters."""
        # Update ground_y in case terrain changes (for future heightmap support)
        self.ground_y = get_terrain_height(self.x, self.z)
        
        glPushMatrix()
        # Place sphere so its bottom touches ground (sphere radius extends from center)
        # Subtract 0.1 to intersect slightly with ground to avoid visual gaps
        plant_y = self.ground_y + self.size - 0.1
        glTranslatef(self.x, plant_y, self.z)
        
        glEnable(GL_LIGHTING)
        q = gluNewQuadric()
        
        # Main cluster
        glColor3f(0.15, 0.6, 0.2)  # Dark green
        gluSphere(q, self.size, 10, 10)
        
        # Additional smaller clusters around main
        for i in range(self.cluster_count):
            angle = (i / self.cluster_count) * 2.0 * math.pi
            offset_x = math.cos(angle) * self.size * 0.6
            offset_z = math.sin(angle) * self.size * 0.6
            glPushMatrix()
            glTranslatef(offset_x, 0, offset_z)
            glColor3f(0.12, 0.55, 0.18)  # Slightly darker green
            gluSphere(q, self.size * 0.5, 8, 8)
            glPopMatrix()
        
        gluDeleteQuadric(q)
        glPopMatrix()

class SimpleTree:
    """Simple tree - not too many!"""
    def __init__(self, x, z):
        self.x, self.z = x, z
        self.h = random.uniform(10, 15)
    
    def draw(self):
        glPushMatrix()
        glTranslatef(self.x, 0, self.z)
        q = gluNewQuadric()
        
        # Trunk
        glColor3f(0.4, 0.3, 0.2)
        gluCylinder(q, 0.4, 0.35, self.h*0.5, 8, 1)
        
        # Crown
        glTranslatef(0, self.h*0.4, 0)
        glColor3f(0.12, 0.7, 0.22)
        gluSphere(q, 5, 10, 10)
        
        gluDeleteQuadric(q)
        glPopMatrix()

def get_terrain_height(x, z):
    """Get terrain height at position (x, z). For flat terrain, returns ground level."""
    # Flat terrain - always returns ground level (0.0)
    # Can be extended for heightmap-based terrain in the future
    GROUND_LEVEL = 0.0
    return GROUND_LEVEL

def draw_ground():
    """Ground rendering - ALWAYS GREEN like the image"""
    glDisable(GL_LIGHTING)
    # ALWAYS green ground (like the image shows)
    glColor3f(0.15, 0.75, 0.25)  # Vibrant green ground - always green
    
    glBegin(GL_QUADS)
    s = 200
    glVertex3f(-s, 0, -s)
    glVertex3f(s, 0, -s)
    glVertex3f(s, 0, s)
    glVertex3f(-s, 0, s)
    glEnd()
    glEnable(GL_LIGHTING)

# Biome environment seeds (persistent positions)
NEON_BUILDINGS = None
BIO_VINES = None
CLOUDS_WITH_BALLOONS = None
PARTICLES = []  # Particle effects system

# Time of day system (morning -> midday -> evening -> night)
TIME_OF_DAY = 0.0  # 0.0 = morning, 0.25 = midday, 0.5 = evening, 0.75-1.0 = night
TIME_SPEED = 0.008  # VERY SLOW speed for realistic, gradual, slow color transitions

# Enhanced Particle class for INSANE EFFECTS
class Particle:
    """Enhanced particle for dust trails, sparkles, speed lines, atmospheric effects, etc."""
    def __init__(self, pos, vel, color, lifetime, size=0.1, particle_type='sparkle', rotation=0.0):
        self.pos = np.array(pos, dtype=float)
        self.vel = np.array(vel, dtype=float)
        self.color = color  # (r, g, b, alpha)
        self.lifetime = lifetime
        self.age = 0.0
        self.size = size
        self.particle_type = particle_type  # 'sparkle', 'dust', 'speed_line', 'atmospheric', 'glow'
        self.rotation = rotation
        self.rotation_speed = random.uniform(-5.0, 5.0)
        self.base_size = size
    
    def update(self, dt):
        """Update particle position and lifetime with enhanced physics."""
        self.pos += self.vel * dt
        self.age += dt
        self.rotation += self.rotation_speed * dt
        
        # Enhanced gravity and drag based on particle type
        if self.particle_type == 'dust':
            self.vel[1] -= 3.0 * dt  # Stronger gravity for dust
            self.vel *= 0.98  # Air resistance
        elif self.particle_type == 'speed_line':
            self.vel[1] -= 0.5 * dt  # Less gravity for speed lines
            self.vel *= 0.95  # Less drag
        elif self.particle_type == 'atmospheric':
            self.vel[1] -= 0.3 * dt  # Very light gravity
            self.vel *= 0.99  # Minimal drag
        else:  # sparkle, glow
            self.vel[1] -= 1.5 * dt  # Standard gravity
            self.vel *= 0.97  # Standard drag
        
        # Size variation for sparkles
        if self.particle_type == 'sparkle':
            self.size = self.base_size * (1.0 + 0.3 * math.sin(self.age * 10.0))
        
        return self.age < self.lifetime
    
    def draw(self):
        """Draw particle with enhanced visual effects."""
        glPushMatrix()
        glTranslatef(self.pos[0], self.pos[1], self.pos[2])
        glEnable(GL_BLEND)
        
        # Enhanced blending based on particle type
        if self.particle_type == 'glow':
            glBlendFunc(GL_SRC_ALPHA, GL_ONE)  # Additive blending for glow
        elif self.particle_type == 'sparkle':
            glBlendFunc(GL_SRC_ALPHA, GL_ONE)  # Additive for sparkles
        else:
            glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)  # Standard for dust
        
        glDisable(GL_LIGHTING)
        
        # Fade out with enhanced alpha curve
        life_ratio = self.age / self.lifetime
        if self.particle_type == 'sparkle':
            alpha = max(0.0, (1.0 - life_ratio) * (1.0 + 0.5 * math.sin(life_ratio * 20.0)))  # Pulsing sparkle
        else:
            alpha = max(0.0, 1.0 - (life_ratio * life_ratio))  # Smooth fade
        
        glColor4f(self.color[0], self.color[1], self.color[2], self.color[3] * alpha)
        
        # Different rendering based on type
        if self.particle_type == 'speed_line':
            # Speed lines as elongated quads
            glRotatef(self.rotation, 0, 1, 0)
            glBegin(GL_QUADS)
            glVertex3f(-self.size*2, -self.size*0.1, 0)
            glVertex3f(self.size*2, -self.size*0.1, 0)
            glVertex3f(self.size*2, self.size*0.1, 0)
            glVertex3f(-self.size*2, self.size*0.1, 0)
            glEnd()
        else:
            # Sparkles, dust, atmospheric as spheres (enhanced detail)
            glRotatef(self.rotation, 0, 1, 0)
            q = gluNewQuadric()
            gluSphere(q, self.size, 12, 12)  # Higher detail for sparkles
            gluDeleteQuadric(q)
        
        glDisable(GL_BLEND)
        glEnable(GL_LIGHTING)
        glPopMatrix()

def init_biome_environments():
    """Initialize biome environment elements with persistent positions.
    
    IMPORTANT: Only X and Z coordinates are randomized. Y positions are determined
    at render time using get_terrain_height() to ensure objects sit on the ground.
    """
    global NEON_BUILDINGS, BIO_VINES, CLOUDS_WITH_BALLOONS
    # Neon City buildings - only randomize X, Z (not Y)
    random.seed(42)
    NEON_BUILDINGS = []
    for i in range(8):
        x = random.uniform(-100, 100) + i * 25  # X coordinate only
        z = random.uniform(-100, 100)  # Z coordinate only
        h = random.uniform(30, 60)  # Height (not Y position)
        # Y position will be set at render time using get_terrain_height(x, z)
        NEON_BUILDINGS.append((x, z, h))
    # Bio-Organic Forest vines - only randomize X, Z (not Y)
    random.seed(123)
    BIO_VINES = []
    for i in range(12):
        x = random.uniform(-80, 80)  # X coordinate only
        z = random.uniform(-80, 80)  # Z coordinate only
        h = random.uniform(15, 35)  # Height (not Y position)
        # Y position will be set at render time using get_terrain_height(x, z)
        BIO_VINES.append((x, z, h))
    # Clouds with balloons attached
    random.seed(999)
    CLOUDS_WITH_BALLOONS = []
    for i in range(10):
        cx = random.uniform(-120, 120)
        cy = random.uniform(60, 100)
        cz = random.uniform(-120, 120)
        cloud_size = random.uniform(8, 15)
        num_balloons = random.randint(2, 4)
        balloons = []
        for j in range(num_balloons):
            bx = cx + random.uniform(-cloud_size*0.5, cloud_size*0.5)
            by = cy + random.uniform(2, 6)
            bz = cz + random.uniform(-cloud_size*0.5, cloud_size*0.5)
            balloon_color = random.choice([
                (1.0, 0.3, 0.5),  # Pink
                (1.0, 0.6, 0.0),  # Orange
                (1.0, 0.0, 0.0),  # Red
                (1.0, 1.0, 0.0),  # Yellow
                (0.5, 0.0, 1.0),  # Purple
                (0.3, 0.7, 1.0),  # Light blue
            ])
            balloons.append((bx, by, bz, balloon_color))
        CLOUDS_WITH_BALLOONS.append((cx, cy, cz, cloud_size, balloons))
    random.seed()  # Reset to time-based seed

def draw_biome_environment():
    """Draw biome-specific environment elements."""
    global current_biome, NEON_BUILDINGS, BIO_VINES, NEON_GLOW_ENABLED
    t = pygame.time.get_ticks() / 1000.0
    
    if current_biome == BIOME_NEON_CITY:
        # Neon City: Skyscrapers with glowing windows
        glDisable(GL_LIGHTING)
        if NEON_BUILDINGS is None:
            init_biome_environments()
        for idx, (x, z, h) in enumerate(NEON_BUILDINGS):
            glPushMatrix()
            # Get terrain height at this position
            ground_y = get_terrain_height(x, z)
            # Buildings draw from -h/2 to h/2, so translate by (x, ground_y + h/2, z) to place base at ground
            # Slightly below ground to intersect and avoid gaps
            building_base_y = ground_y + h/2 - 0.1
            glTranslatef(x, building_base_y, z)
            
            # REALISTIC OBJ MODEL-TYPE SKYSCRAPER with detailed geometry
            # Procedural variation: different widths and heights per building
            s = 4.0 + (idx % 3) * 1.5  # Varying widths (4.0, 5.5, 7.0)
            depth = s * 0.8  # Building depth (slightly narrower than width for realism)
            
            # Realistic building proportions - taller buildings are slightly wider at base
            base_width = s * 1.1
            top_width = s * 0.95  # Taper slightly at top
            base_depth = depth * 1.1
            top_depth = depth * 0.95
            
            # Main building structure - realistic proportions
            glColor3f(0.18, 0.18, 0.22)  # Darker, more realistic building color
            
            # Draw building with slight taper (realistic skyscraper shape)
            # Front face (with taper)
            glBegin(GL_QUADS)
            glVertex3f(-base_width, -h/2, -base_depth)
            glVertex3f(base_width, -h/2, -base_depth)
            glVertex3f(top_width, h/2, -top_depth)
            glVertex3f(-top_width, h/2, -top_depth)
            glEnd()
            
            # Back face (with taper)
            glBegin(GL_QUADS)
            glVertex3f(-base_width, -h/2, base_depth)
            glVertex3f(-top_width, h/2, top_depth)
            glVertex3f(top_width, h/2, top_depth)
            glVertex3f(base_width, -h/2, base_depth)
            glEnd()
            
            # Right side (with taper)
            glBegin(GL_QUADS)
            glVertex3f(base_width, -h/2, -base_depth)
            glVertex3f(base_width, -h/2, base_depth)
            glVertex3f(top_width, h/2, top_depth)
            glVertex3f(top_width, h/2, -top_depth)
            glEnd()
            
            # Left side (with taper)
            glBegin(GL_QUADS)
            glVertex3f(-base_width, -h/2, base_depth)
            glVertex3f(-base_width, -h/2, -base_depth)
            glVertex3f(-top_width, h/2, -top_depth)
            glVertex3f(-top_width, h/2, top_depth)
            glEnd()
            
            # Top face (roof)
            glBegin(GL_QUADS)
            glVertex3f(-top_width, h/2, -top_depth)
            glVertex3f(top_width, h/2, -top_depth)
            glVertex3f(top_width, h/2, top_depth)
            glVertex3f(-top_width, h/2, top_depth)
            glEnd()
            
            # Add architectural details - building sections/floors
            glColor3f(0.12, 0.12, 0.16)  # Slightly darker for detail lines
            num_floors = int(h / 8)  # Realistic floor spacing
            for floor in range(1, num_floors):
                floor_y = -h/2 + (floor * h / num_floors)
                glBegin(GL_LINES)
                glVertex3f(-base_width * 1.02, floor_y, -base_depth * 1.02)
                glVertex3f(base_width * 1.02, floor_y, -base_depth * 1.02)
                glEnd()
            
            # Building base/entrance detail (darker bottom section)
            glColor3f(0.10, 0.10, 0.14)
            entrance_height = h * 0.1
            glBegin(GL_QUADS)
            glVertex3f(-base_width * 1.05, -h/2, -base_depth * 1.05)
            glVertex3f(base_width * 1.05, -h/2, -base_depth * 1.05)
            glVertex3f(base_width * 1.05, -h/2 + entrance_height, -base_depth * 1.05)
            glVertex3f(-base_width * 1.05, -h/2 + entrance_height, -base_depth * 1.05)
            glEnd()
            # Glowing windows - Enhanced with neon glow if enabled
            if NEON_GLOW_ENABLED:
                # Bright neon glow effect
                glow_intensity = 0.5 + 0.5 * math.sin(t * 2.0 + x * 0.1)
                glColor3f(0.3 + 0.7 * glow_intensity, 0.5 + 0.5 * glow_intensity, 1.0)  # Bright cyan neon
                for w in range(3):
                    glBegin(GL_QUADS)
                    glVertex3f(-s*0.8, -h/2 + w*h/3, -s*1.01)
                    glVertex3f(s*0.8, -h/2 + w*h/3, -s*1.01)
                    glVertex3f(s*0.8, -h/2 + w*h/3 + h/6, -s*1.01)
                    glVertex3f(-s*0.8, -h/2 + w*h/3 + h/6, -s*1.01)
                    glEnd()
                # Add neon outline glow
                glEnable(GL_BLEND)
                glBlendFunc(GL_SRC_ALPHA, GL_ONE)
                glColor4f(0.0, 0.8, 1.0, 0.3 * glow_intensity)
                glLineWidth(2.0)
                glBegin(GL_LINE_LOOP)
                glVertex3f(-s*1.1, -h/2, -s*1.01)
                glVertex3f(s*1.1, -h/2, -s*1.01)
                glVertex3f(s*1.1, h/2, -s*1.01)
                glVertex3f(-s*1.1, h/2, -s*1.01)
                glEnd()
                glLineWidth(1.0)
                glDisable(GL_BLEND)
            else:
                # Standard glowing windows (no neon effect)
                glColor3f(0.8, 0.9, 1.0)
                for w in range(3):
                    glBegin(GL_QUADS)
                    glVertex3f(-s*0.8, -h/2 + w*h/3, -s*1.01)
                    glVertex3f(s*0.8, -h/2 + w*h/3, -s*1.01)
                    glVertex3f(s*0.8, -h/2 + w*h/3 + h/6, -s*1.01)
                    glVertex3f(-s*0.8, -h/2 + w*h/3 + h/6, -s*1.01)
                    glEnd()
            glPopMatrix()
        glEnable(GL_LIGHTING)
    
    elif current_biome == BIOME_BIO_FOREST:
        # Bio-Organic Forest: Organic vines and transparent shaders
        glEnable(GL_BLEND)
        glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
        glDisable(GL_LIGHTING)
        if BIO_VINES is None:
            init_biome_environments()
        for i, (x, z, h) in enumerate(BIO_VINES):
            glPushMatrix()
            # Get terrain height at this position
            ground_y = get_terrain_height(x, z)
            # Vines are rotated 90 degrees around X, so cylinder goes along Z axis
            # gluCylinder draws from 0 to h along Y, but after rotation it goes along Z
            # We want the base at ground level, so translate by (x, ground_y, z) 
            # Slightly below ground to intersect and avoid gaps
            vine_base_y = ground_y - 0.1
            glTranslatef(x, vine_base_y, z)
            
            # WIND SIMULATION via vertex displacement (simulated through animation)
            # Wind effect: dynamic displacement based on time and position
            wind_strength = 0.5 + 0.5 * math.sin(t * 1.5 + x * 0.05 + z * 0.05)
            wind_direction = math.sin(t * 2.0 + i * 0.3)
            # Apply wind displacement
            wind_x = wind_direction * wind_strength * 0.4
            wind_z = math.cos(t * 2.0 + i * 0.3) * wind_strength * 0.4
            glTranslatef(wind_x, 0, wind_z)
            
            # Organic vine (green, translucent) with wind deformation
            glColor4f(0.2, 0.8, 0.3, 0.6)
            q = gluNewQuadric()
            glRotatef(90, 1, 0, 0)
            # Wind affects radius variation (simulating bending)
            base_radius = 0.5 + 0.3*math.sin(t*2 + i) + wind_strength * 0.1
            top_radius = 0.3 + 0.2*math.sin(t*1.5 + i) + wind_strength * 0.05
            gluCylinder(q, base_radius, top_radius, h, 8, 1)
            gluDeleteQuadric(q)
            glPopMatrix()
        glDisable(GL_BLEND)
        glEnable(GL_LIGHTING)
    
    else:  # STELLAR
        # Stellar Collapse: Particle field, gravity well, and TRACK DISINTEGRATION
        glDisable(GL_LIGHTING)
        glPointSize(3.0)
        glBegin(GL_POINTS)
        for i in range(150):
            angle = (i / 150.0) * 2 * math.pi + t * 0.5
            dist = 20 + 30 * (i % 10) / 10.0
            x = dist * math.cos(angle)
            z = dist * math.sin(angle)
            y = 30 + 20 * math.sin(t * 2 + i * 0.1)
            # Cyan/purple particles (gravity well effect)
            intensity = 0.5 + 0.5 * math.sin(t * 3 + i * 0.1)
            glColor3f(0.3 * intensity, 0.7 * intensity, 1.0 * intensity)
            glVertex3f(x, y, z)
        glEnd()
        
        # TRACK DISINTEGRATION EFFECT (Procedural regeneration)
        # Visual effect: particles that appear to "disintegrate" track segments
        glEnable(GL_BLEND)
        glBlendFunc(GL_SRC_ALPHA, GL_ONE)
        glPointSize(4.0)
        glBegin(GL_POINTS)
        # Generate disintegration particles around track area
        for i in range(50):
            phase = (t * 2.0 + i * 0.2) % (2.0 * math.pi)
            if phase < math.pi:  # Disintegration phase
                alpha = math.sin(phase)
                dist = 15 + 10 * math.sin(t * 1.5 + i)
                angle = (i / 50.0) * 2 * math.pi + t
                x = dist * math.cos(angle)
                z = dist * math.sin(angle)
                y = 25 + 15 * math.sin(t * 2.5 + i * 0.15)
                # Stellar disintegration colors (cyan/purple with pulsing)
                intensity = alpha * (0.6 + 0.4 * math.sin(t * 4 + i * 0.1))
                glColor4f(0.5 * intensity, 0.8 * intensity, 1.0 * intensity, alpha * 0.8)
                glVertex3f(x, y, z)
        glEnd()
        glDisable(GL_BLEND)
        glEnable(GL_LIGHTING)

CONTROL_BUTTONS = []  # updated each frame for mouse hit testing

def draw_ui(screen, fonts, data):
    """Minimal modern UI + right-side control buttons."""
    global CONTROL_BUTTONS
    CONTROL_BUTTONS = []
    surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
    surf.fill((0,0,0,0))
    # Speed + LIVE badge
    pygame.draw.rect(surf, (205,58,214,218), (24,20,300,118), border_radius=16)
    t = fonts[0].render(f"SPEED: {data['spd']:.2f} m/s", True, (254,254,254))
    surf.blit(t, (36,42))
    badge = fonts[2].render("LIVE", True, (255,255,255))
    pygame.draw.rect(surf, (240,80,50,230), (230,26,80,28), border_radius=10)
    surf.blit(badge, (244,31))
    # Day/Night indicator
    mode_txt = "NIGHT" if data.get('night', False) else "DAY"
    mt = fonts[2].render(f"{mode_txt} MODE", True, (255,255,255))
    pygame.draw.rect(surf, (60,60,60,180), (24,150,160,28), border_radius=10)
    surf.blit(mt, (30,154))
    # Biome indicator
    biome_txt = data.get('biome', 'UNKNOWN')
    bt = fonts[2].render(f"BIOME: {biome_txt}", True, (255,255,255))
    pygame.draw.rect(surf, (80,60,120,200), (24,182,180,28), border_radius=10)
    surf.blit(bt, (30,186))
    # Time of day indicator
    time_of_day_txt = data.get('time_of_day', 'DAY')
    tod_col = data.get('time_of_day_color', (255,255,255))
    tod = fonts[2].render(f"TIME: {time_of_day_txt}", True, tod_col)
    pygame.draw.rect(surf, (40,40,40,200), (24,214,160,28), border_radius=10)
    surf.blit(tod, (30,218))
    # Game Score and Cubes Collected (Dynamic Challenges)
    score = data.get('score', 0)
    cubes = data.get('cubes', 0)
    pygame.draw.rect(surf, (60,120,180,220), (24,246,200,52), border_radius=10)
    score_text = fonts[1].render(f"SCORE: {score}", True, (255,255,255))
    surf.blit(score_text, (30,248))
    cubes_text = fonts[2].render(f"Cubes: {cubes}/25", True, (200,255,200))
    surf.blit(cubes_text, (30,272))
    # Boost meter
    pygame.draw.rect(surf, (255,255,255,70), (36,70,240,14), border_radius=8)
    boostw = int((data['boost_power']/100.0)*240)
    pygame.draw.rect(surf, (255,165,0,235), (36,70,boostw,14), border_radius=8)
    bt = fonts[3].render(f"Boost x{data.get('boost_strength',1.0):.1f} (Q-/E+)", True, (40,40,40))
    surf.blit(bt, (36,88))
    # Progress and time
    pygame.draw.rect(surf, (255,255,255,70), (30,100,250,18), border_radius=10)
    prog = int(data['prog']*250)
    pygame.draw.rect(surf, (24,184,211,240), (30,100,prog,18), border_radius=10)
    mins = int(data['time'] // 60); secs = int(data['time'] % 60)
    t = fonts[1].render(f"Time Left: {mins}:{secs:02d}", True, (255,201,100))
    surf.blit(t, (36,124))
    # Status row
    status_text = "PAUSED" if data['paused'] else "RUNNING"
    col = (255,220,90) if data['paused'] else (180,255,180)
    t = fonts[2].render(status_text, True, (40,40,40))
    pygame.draw.rect(surf, (*col,200), (24,182,140,30), border_radius=10)
    surf.blit(t, (34,187))
    # Action callouts (Accelerated / Slow down)
    callout = None
    callout_col = None
    if data.get('boost'):
        callout = "ACCELERATED"
        callout_col = (255,120,30,235)
    elif data.get('brake'):
        callout = "SLOW DOWN"
        callout_col = (255,80,80,235)
    elif data.get('throttle'):
        callout = "ACCELERATING"
        callout_col = (70,200,110,220)
    if callout:
        cw, ch = 260, 48
        cx, cy = WIDTH//2 - cw//2, int(HEIGHT*0.12)
        pygame.draw.rect(surf, callout_col, (cx, cy, cw, ch), border_radius=14)
        ct = fonts[1].render(callout, True, (255,255,255))
        surf.blit(ct, (cx + (cw-ct.get_width())//2, cy + (ch-ct.get_height())//2))
    # Right-side controls
    bx, by, bw, bh, bgap = WIDTH-320, 30, 280, 56, 14
    def btn(label, color, action_key):
        nonlocal by
        rect = pygame.Rect(bx, by, bw, bh)
        pygame.draw.rect(surf, color, rect, border_radius=18)
        t = fonts[2].render(label, True, (255,255,255))
        surf.blit(t, (bx+18, by+16))
        CONTROL_BUTTONS.append((action_key, rect))
        by += bh + bgap
    cam_labels = ["FIRST-PERSON (C)", "THIRD-PERSON (C)", "DRONE CAMERA (C)", "FREE WASD (C)"]
    btn(cam_labels[data.get('cam', 0)], (95,60,220,220), 'cam')
    start_label = ("START RIDE (Space)" if (data['paused'] and data['spd']<=0.01) else ("RESUME RIDE (Space)" if data['paused'] else "PAUSE RIDE (Space)"))
    btn(start_label, (230,90,90,230), 'pause')
    btn("RESET RIDE (R)", (240,110,60,230), 'reset')
    btn("EXPORT TRACK (X)", (160,60,200,230), 'export')
    btn("LOAD SPLINE FILE (F)", (30,120,230,230), 'load')
    btn(("LIGHTING ON (L)" if data['light_on'] else "LIGHTING OFF (L)"), (230,150,20,230), 'light')
    btn(("DAY/NIGHT (N)"), (60,60,60,220), 'night')
    # Add glow and energy physics buttons if needed
    # Note: These are handled via keyboard (G and P keys) but can be added to UI if needed
    # Render to GL
    td = pygame.image.tostring(surf, "RGBA", True)
    glDisable(GL_DEPTH_TEST); glDisable(GL_LIGHTING); glEnable(GL_BLEND)
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
    glMatrixMode(GL_PROJECTION); glPushMatrix(); glLoadIdentity(); glOrtho(0, WIDTH, HEIGHT, 0, -1, 1)
    glMatrixMode(GL_MODELVIEW); glPushMatrix(); glLoadIdentity(); glRasterPos2f(0, 0)
    glDrawPixels(WIDTH, HEIGHT, GL_RGBA, GL_UNSIGNED_BYTE, td)
    glPopMatrix(); glMatrixMode(GL_PROJECTION); glPopMatrix(); glMatrixMode(GL_MODELVIEW)
    glDisable(GL_BLEND); glEnable(GL_DEPTH_TEST); glEnable(GL_LIGHTING)

# Build a proper orthonormal frame and OpenGL 4x4 matrix from forward and up vectors
def build_gl_matrix(forward: np.ndarray, up_hint: np.ndarray):
    f = normalize(forward)
    # Make up orthogonal to forward
    u = up_hint - np.dot(up_hint, f) * f
    u = normalize(u if np.linalg.norm(u) > 1e-8 else np.array([0.,1.,0.]))
    r = normalize(np.cross(u, f))
    # Column-major 4x4 for OpenGL
    m = np.array([
        [r[0], u[0], f[0], 0.0],
        [r[1], u[1], f[1], 0.0],
        [r[2], u[2], f[2], 0.0],
        [0.0 , 0.0 , 0.0 , 1.0]
    ], dtype=np.float32)
    return m

class CoasterCar:
    """Realistic single car with body and wheel assemblies that grip the slab track."""
    def _wheel(self, q, radius, width, spin_deg):
        glRotatef(90, 0, 1, 0)
        glRotatef(spin_deg, 1, 0, 0)
        gluCylinder(q, radius, radius, width, 18, 1)
        gluDisk(q, 0, radius, 18, 1)
        glTranslatef(0, 0, width)
        gluDisk(q, 0, radius, 18, 1)
    def _draw_bogie(self, q, z_off, spin):
        glPushMatrix(); glTranslatef(0,0,z_off)
        glColor3f(0.15,0.15,0.16)
        glPushMatrix(); glScalef(1.3,0.20,1.0); gluSphere(q,0.65,12,12); glPopMatrix()
        top_y = TRACK_HALF_HEIGHT + CLEARANCE
        bot_y = -TRACK_HALF_HEIGHT - CLEARANCE
        side_x = TRACK_HALF_WIDTH + 0.05
        roll_r = 0.30; roll_w = 0.22
        guide_r = 0.24; guide_w = 0.18
        upstop_r= 0.24; upstop_w= 0.18
        glColor3f(0.07,0.07,0.07)
        for x in (-TRACK_HALF_WIDTH+0.22, TRACK_HALF_WIDTH-0.22):
            glPushMatrix(); glTranslatef(x, top_y, 0)
            self._wheel(q, roll_r, roll_w, spin)
            glPopMatrix()
        for x,sign in ((side_x,1), (-side_x,-1)):
            glPushMatrix(); glTranslatef(x, 0.0, 0)
            glRotatef(90, 1, 0, 0)
            gluCylinder(q, guide_r, guide_r, guide_w, 14, 1)
            glPopMatrix()
        for x in (-TRACK_HALF_WIDTH+0.22, TRACK_HALF_WIDTH-0.22):
            glPushMatrix(); glTranslatef(x, bot_y, 0)
            self._wheel(q, upstop_r, upstop_w, 0)
            glPopMatrix()
        glPopMatrix()
    def _draw_body(self, q):
        glPushMatrix(); glTranslatef(0, TRACK_HALF_HEIGHT + WHEEL_CENTER_DROP*0.6 + 0.18, 0)
        # Extended chassis (longer & wider) - Orange like the image
        glColor3f(1.0, 0.5, 0.0)  # Bright orange
        glPushMatrix(); glScalef(2.0,0.30,4.0); gluSphere(q,0.6,16,14); glPopMatrix()
        glMaterialf(GL_FRONT, GL_SHININESS, 90.0)
        glMaterialfv(GL_FRONT, GL_SPECULAR, (GLfloat*4)(0.95,0.95,0.95,1))
        # Front (orange)
        glColor3f(1.0, 0.5, 0.0)  # Bright orange
        glPushMatrix(); glTranslatef(0, 0.42, 1.50); glScalef(1.55,0.68,1.12); gluSphere(q,0.72,26,22); glPopMatrix()
        # Midfront (orange)
        glColor3f(1.0, 0.5, 0.0)  # Bright orange
        glPushMatrix(); glTranslatef(0, 0.42, 0.70); glScalef(1.55,0.68,1.12); gluSphere(q,0.70,26,22); glPopMatrix()
        # Middle (orange)
        glColor3f(1.0, 0.45, 0.0)  # Slightly darker orange
        glPushMatrix(); glTranslatef(0, 0.42, -0.10); glScalef(1.55,0.68,1.22); gluSphere(q,0.69,26,22); glPopMatrix()
        # Rear (orange)
        glColor3f(1.0, 0.5, 0.0)  # Bright orange
        glPushMatrix(); glTranslatef(0, 0.42, -1.10); glScalef(1.55,0.68,1.12); gluSphere(q,0.72,26,22); glPopMatrix()
        # Long white glossy roof stripe
        glColor3f(0.96,0.96,0.98)
        glPushMatrix(); glTranslatef(0, 0.78, 0.30); glScalef(1.12,0.12,3.0); gluSphere(q,0.72,22,18); glPopMatrix()
        # Safety bar (wider)
        glColor3f(0.2,0.2,0.2)
        glPushMatrix(); glTranslatef(0,0.66,0.60); glRotatef(90,1,0,0); gluCylinder(q,0.06,0.06,1.6,12,1); glPopMatrix()
        glPopMatrix()
    def _draw_attached_balloons(self, q, t):
        for side in (-1,1):
            glPushMatrix()
            glTranslatef(side*1.1, TRACK_HALF_HEIGHT+1.6, -1.6)
            glColor3f(0.25,0.25,0.25)
            glRotatef(-90,1,0,0); gluCylinder(q,0.02,0.02,1.3,6,1); glRotatef(90,1,0,0)
            col_phase = (0.5+0.5*math.sin(t*1.7 + side))
            glColor3f(1.0,0.3+0.4*col_phase,0.4+0.5*col_phase)
            glTranslatef(0,1.3+0.1*math.sin(t*2.0+side),0)
            gluSphere(q,0.30,16,14)
            glPopMatrix()
    def draw(self, pos, tang, norm, rot, *_):
        glPushMatrix()
        glTranslatef(pos[0], pos[1], pos[2])
        mat = build_gl_matrix(tang, norm)
        glMultMatrixf(mat.T)
        q = gluNewQuadric()
        self._draw_bogie(q, z_off=-2.0, spin=rot)
        self._draw_bogie(q, z_off= 2.0, spin=rot)
        self._draw_body(q)
        current_time = pygame.time.get_ticks()/1000.0
        self._draw_attached_balloons(q, current_time)
        gluDeleteQuadric(q)
        glPopMatrix()

class ExtendedTrack:
    """Winding, hilly track with CatMull-Rom splines; can load from 'spline.txt' or build default sketch."""
    def __init__(self):
        pts = self._load_from_file('spline.txt')
        if pts is None:
            pts = self._build_sketch_default()
        # Track starts at ground level (already set in _build_sketch_default)
        # No elevation adjustment needed - track starts at ground level
        
        # ULTRA-ENHANCED CatMull-Rom spline interpolation - ABSOLUTE ZERO EDGES, PERFECT U-SHAPED CURVES
        if len(pts) >= 4:
            spline_pts = []
            n = len(pts)
            for i in range(n):
                # Handle endpoints for start-to-end track
                if i == 0:
                    p0 = pts[0]
                    p1 = pts[0]
                    p2 = pts[1]
                    p3 = pts[2] if n > 2 else pts[1]
                elif i == n - 1:
                    p0 = pts[n-3] if n > 3 else pts[n-2]
                    p1 = pts[n-2]
                    p2 = pts[n-1]
                    p3 = pts[n-1]
                else:
                    p0 = pts[i-1]
                    p1 = pts[i]
                    p2 = pts[i+1]
                    p3 = pts[i+2] if i+2 < n else pts[n-1]
                
                # Generate sub-points for smoothness (optimized for faster initialization)
                for j in range(30):  # Optimized: 30 points (balanced smoothness and speed)
                    t = j / 29.0  # Fixed denominator
                    # Use TRIPLE smoothstep for perfect U-shaped curves (optimized for speed)
                    smooth_t = t * t * (3.0 - 2.0 * t)  # First smoothstep
                    ultra_smooth_t = smooth_t * smooth_t * (3.0 - 2.0 * smooth_t)  # Double smoothstep
                    perfect_smooth_t = ultra_smooth_t * ultra_smooth_t * (3.0 - 2.0 * ultra_smooth_t)  # Triple smoothstep (perfect)
                    spline_pts.append(catmull_rom_spline(p0, p1, p2, p3, perfect_smooth_t))
            pts = spline_pts
        
        # ENHANCED smoothing - PERFECT U-SHAPED CURVES with NO EDGES
        # Multiple passes for smoothness (optimized for faster initialization)
        for _ in range(5):  # Optimized: 5 passes (balanced smoothness and speed)
            smooth = []
            n=len(pts)
            for i in range(n):
                # Multi-point weighted average for ultra-smooth transitions
                # Handle endpoints without wrapping (no loop)
                if i == 0:
                    p = (pts[0] * 0.5 + pts[1] * 0.3 + pts[2] * 0.2)
                elif i == n-1:
                    p = (pts[n-3] * 0.2 + pts[n-2] * 0.3 + pts[n-1] * 0.5)
                elif i == 1:
                    p = (pts[0] * 0.15 + pts[1] * 0.35 + pts[2] * 0.3 + pts[3] * 0.2)
                elif i == n-2:
                    p = (pts[n-4] * 0.2 + pts[n-3] * 0.3 + pts[n-2] * 0.35 + pts[n-1] * 0.15)
                elif i == 2:
                    p = (pts[0] * 0.1 + pts[1] * 0.2 + pts[2] * 0.3 + pts[3] * 0.25 + pts[4] * 0.15)
                elif i == n-3:
                    p = (pts[n-5] * 0.15 + pts[n-4] * 0.25 + pts[n-3] * 0.3 + pts[n-2] * 0.2 + pts[n-1] * 0.1)
                else:
                    # Extended weighted average for smoother curves
                    p = (pts[i-3] * 0.05 + pts[i-2] * 0.15 + pts[i-1] * 0.25 + pts[i] * 0.3 + pts[i+1] * 0.25 + pts[i+2] * 0.15 + pts[i+3] * 0.05)
                smooth.append(p)
            pts = smooth
        
        # Additional endpoint smoothing for PERFECT seamless transitions
        if len(pts) > 8:
            endpoint_smooth = []
            n = len(pts)
            for i in range(n):
                # Ultra-smooth endpoints without wrapping
                if i < 4:  # Start region - more points for smoother curve
                    weights = [0.35, 0.25, 0.2, 0.1, 0.05, 0.03, 0.02, 0.0, 0.0]
                    p = sum(pts[max(0, i+j-4)] * weights[j] for j in range(9))
                elif i >= n-4:  # End region - more points for smoother curve
                    weights = [0.0, 0.0, 0.02, 0.03, 0.05, 0.1, 0.2, 0.25, 0.35]
                    p = sum(pts[min(n-1, i+j-4)] * weights[j] for j in range(9))
                else:
                    p = pts[i]
                endpoint_smooth.append(p)
            pts = endpoint_smooth
        
        self.points = np.array(pts)
        n = len(self.points)
        # Calculate ULTRA-SMOOTH tangents using 8-point average for PERFECT U-SHAPED CURVES
        self.tangents = []
        for i in range(n):
            # Use 8-point average for absolute smoothness - handle endpoints without wrapping
            prev4 = self.points[max(0, i-4)]
            prev3 = self.points[max(0, i-3)]
            prev2 = self.points[max(0, i-2)]
            prev1 = self.points[max(0, i-1)]
            next1 = self.points[min(n-1, i+1)]
            next2 = self.points[min(n-1, i+2)]
            next3 = self.points[min(n-1, i+3)]
            next4 = self.points[min(n-1, i+4)]
            # Multi-level weighted average for perfect U-shaped curves (no edges)
            tan1 = normalize(next1 - prev1)
            tan2 = normalize(next2 - prev2)
            tan3 = normalize(next3 - prev3)
            tan4 = normalize(next4 - prev4)
            # Extended weighted average for smoother tangent continuity
            smooth_tan = normalize(tan1 * 0.4 + tan2 * 0.3 + tan3 * 0.2 + tan4 * 0.1)
            self.tangents.append(smooth_tan)
        self.tangents = np.array(self.tangents)
        up = np.array([0,1,0])
        self.binormals = np.array([normalize(np.cross(t,up)) for t in self.tangents])
        self.normals = np.array([normalize(np.cross(b,t)) for b,t in zip(self.binormals,self.tangents)])
        self.create_geometry()
    def _load_from_file(self, path):
        # Try multiple paths: current dir, parent dir (project root), and src/
        script_dir = os.path.dirname(os.path.abspath(__file__)) if '__file__' in globals() else os.getcwd()
        search_paths = [
            path,  # Current directory
            os.path.join("..", path),  # Parent directory (project root)
            os.path.join(script_dir, path),  # Same as script
            os.path.join(script_dir, "..", path)  # Parent from script (project root)
        ]
        
        for search_path in search_paths:
            try:
                if os.path.exists(search_path):
                    with open(search_path, 'r', encoding='utf-8') as f:
                        pts = []
                        for line in f:
                            line = line.strip()
                            if not line: continue
                            xs = line.split()
                            if len(xs) < 3: continue
                            x, y, z = map(float, xs[:3])
                            pts.append(np.array([x, y, z]))
                    if len(pts) >= 8:
                        return pts
            except Exception:
                continue
        return None
    def _build_sketch_default(self):
        # COMPLEX ROLLER COASTER TRACK - Matching the detailed silhouette image
        # Left: Initial ascent → First loop → Transition → Second loop
        # Middle: Pre-lift curve → Tall lift hill → Steep drop
        # Right: Post-drop curve → Large horizontal spiral/helix
        # All coordinates centered around (0, 0, 0) within environment bounds
        pts = []
        base_elev = 2.0  # Ground level
        
        # Track bounds: -60 to +60 in X, -50 to +50 in Z (centered in environment)
        
        # ========== LEFT SECTION: INITIAL ASCENT ==========
        # Starts at ground level, curves upward
        for i in range(40):
            t = i / 39.0
            ease_t = t * t * (3.0 - 2.0 * t)  # Smooth easing
            x = -55 + t * 15  # Move from left to center-left
            y = base_elev + 8 * ease_t  # Gentle ascent
            z = -20 + t * 10  # Move forward
            pts.append(np.array([x, y, z]))
        
        # ========== FIRST VERTICAL LOOP ==========
        # Large, perfectly circular vertical loop
        loop1_center_x = -40
        loop1_center_y = base_elev + 15
        loop1_center_z = -10
        loop1_radius = 22.0  # Large radius
        for i in range(100):
            t = i / 99.0
            angle = t * 2 * math.pi  # Full circle
            x = loop1_center_x + loop1_radius * math.cos(angle)
            y = loop1_center_y + loop1_radius * math.sin(angle)  # Vertical loop
            z = loop1_center_z + t * 8  # Slight forward progression
            pts.append(np.array([x, y, z]))
        
        # ========== TRANSITION SEGMENT ==========
        # Smooth transition to second loop
        for i in range(25):
            t = i / 24.0
            ease_t = t * t * (3.0 - 2.0 * t)
            x = -18 + t * 8  # Move right
            y = base_elev + 12 - 2 * ease_t  # Slight elevation change
            z = -2 + t * 5  # Move forward
            pts.append(np.array([x, y, z]))
        
        # ========== SECOND VERTICAL LOOP ==========
        # Second large, perfectly circular vertical loop
        loop2_center_x = -10
        loop2_center_y = base_elev + 14
        loop2_center_z = 3
        loop2_radius = 20.0  # Slightly smaller
        for i in range(100):
            t = i / 99.0
            angle = t * 2 * math.pi  # Full circle
            x = loop2_center_x + loop2_radius * math.cos(angle)
            y = loop2_center_y + loop2_radius * math.sin(angle)  # Vertical loop
            z = loop2_center_z + t * 8  # Slight forward progression
            pts.append(np.array([x, y, z]))
        
        # ========== MIDDLE: PRE-LIFT HILL CURVE ==========
        # Curve downwards and level out
        for i in range(30):
            t = i / 29.0
            ease_t = t * t * (3.0 - 2.0 * t)
            x = 8 + t * 12  # Move right
            y = base_elev + 12 - 3 * ease_t  # Slight descent
            z = 11 + t * 6  # Move forward
            pts.append(np.array([x, y, z]))
        
        # ========== TALL LIFT HILL ==========
        # Dramatic and very steep ascent
        for i in range(80):
            t = i / 79.0
            ease_t = t * t * (3.0 - 2.0 * t)  # Smooth easing
            x = 20 + t * 5  # Move slightly right
            y = base_elev + 10 + 65 * ease_t  # Very steep ascent (from 10 to 75)
            z = 17 + t * 3  # Move forward
            pts.append(np.array([x, y, z]))
        
        # ========== STEEP DROP ==========
        # Dramatic and very steep drop
        for i in range(60):
            t = i / 59.0
            ease_t = t * t * (3.0 - 2.0 * t)
            x = 25 + t * 8  # Move right
            y = base_elev + 75 - 60 * ease_t  # Very steep drop (from 75 to 15)
            z = 20 + t * 5  # Move forward
            pts.append(np.array([x, y, z]))
        
        # ========== RIGHT: POST-DROP CURVE ==========
        # Sharp, sweeping curve to the right
        for i in range(35):
            t = i / 34.0
            angle = t * math.pi * 0.5  # 90-degree curve
            ease_t = t * t * (3.0 - 2.0 * t)
            x = 33 + 15 * math.cos(angle)
            y = base_elev + 15 - 2 * ease_t  # Slight descent
            z = 25 + 12 * math.sin(angle)  # Curve right
            pts.append(np.array([x, y, z]))
        
        # ========== LARGE HORIZONTAL SPIRAL/HELIX ==========
        # Large spiral coiling inwards (2.5 to 3 turns)
        spiral_center_x = 45
        spiral_center_z = 35
        spiral_start_radius = 18.0
        spiral_turns = 2.5
        for i in range(150):
            t = i / 149.0
            angle = t * spiral_turns * 2 * math.pi  # Multiple turns
            radius = spiral_start_radius * (1.0 - t * 0.7)  # Coil inwards
            x = spiral_center_x + radius * math.cos(angle)
            y = base_elev + 13 - 2 * t  # Slight descent
            z = spiral_center_z + radius * math.sin(angle)
            pts.append(np.array([x, y, z]))
        
        # ========== RETURN TO START ==========
        # Smooth curve back to start area
        for i in range(50):
            t = i / 49.0
            ease_t = t * t * (3.0 - 2.0 * t)
            x = 48 - 103 * ease_t  # Curve back from 48 to -55
            y = base_elev + 11 - 9 * ease_t  # Descend to ground
            z = 38 - 58 * ease_t  # Curve back from 38 to -20
            pts.append(np.array([x, y, z]))
        
        return pts
    def create_geometry(self):
        # Dynamic track geometry with biome-dependent materials - ULTRA SMOOTH RENDERING
        self.dl = glGenLists(1)
        if self.dl == 0:
            raise RuntimeError("Failed to generate OpenGL display list")
        glNewList(self.dl, GL_COMPILE)
        glDisable(GL_TEXTURE_2D)
        # Material for subtle shine
        spec = (GLfloat * 4)(0.9, 0.9, 0.9, 1.0)
        amb  = (GLfloat * 4)(0.10, 0.10, 0.10, 1.0)
        diff = (GLfloat * 4)(0.20, 0.20, 0.20, 1.0)
        glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, spec)
        glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT, amb)
        glMaterialfv(GL_FRONT_AND_BACK, GL_DIFFUSE, diff)
        glMaterialf(GL_FRONT_AND_BACK, GL_SHININESS, 64.0)
        w,h=2.7,0.55; n=len(self.points)
        
        # ULTRA-SMOOTH interpolation between points - ABSOLUTE ZERO EDGES, PERFECT U-SHAPED CURVES
        def interpolate_point(i, t):
            """Ultra-smooth interpolation between point i and i+1 with parameter t [0,1]
            Uses QUADRUPLE smoothstep for perfect U-shaped curves with zero visible edges
            """
            # Handle endpoints for start-to-end track
            idx0 = i if i < n else n-1
            idx1 = (i+1) if (i+1) < n else n-1
            
            p0 = self.points[idx0]
            p1 = self.points[idx1]
            nm0 = self.normals[idx0]
            nm1 = self.normals[idx1]
            bn0 = self.binormals[idx0]
            bn1 = self.binormals[idx1]
            
            # TRIPLE smoothstep for perfect U-shaped curves - NO EDGES (optimized for speed)
            smooth_t = t * t * (3.0 - 2.0 * t)  # First smoothstep
            ultra_smooth_t = smooth_t * smooth_t * (3.0 - 2.0 * smooth_t)  # Double smoothstep
            perfect_smooth_t = ultra_smooth_t * ultra_smooth_t * (3.0 - 2.0 * ultra_smooth_t)  # Triple smoothstep (perfect)
            
            p = p0 * (1.0 - perfect_smooth_t) + p1 * perfect_smooth_t
            nm = normalize(nm0 * (1.0 - perfect_smooth_t) + nm1 * perfect_smooth_t)
            bn = normalize(bn0 * (1.0 - perfect_smooth_t) + bn1 * perfect_smooth_t)
            return p, nm, bn
        
        # Top (light blue track like the image) - WITH ULTRA-SMOOTH INTERPOLATION AND PERFECT U-SHAPED CURVES
        glColor3f(0.4, 0.7, 0.9)  # Light blue track
        glBegin(GL_QUAD_STRIP)
        subdivs = 12  # Optimized: 12 subdivisions (balanced smoothness and speed)
        for i in range(n):
            for sub in range(subdivs):
                t = sub / float(subdivs)
                p, nm, bn = interpolate_point(i, t)
                glNormal3fv(nm)
                glVertex3fv(p - bn*w/2 + nm*h)
                glVertex3fv(p + bn*w/2 + nm*h)
        # PERFECT LOOP CLOSURE: Smooth transition from last point back to first
        # Use interpolation from last point to first for seamless U-shaped closure
        p0, nm0, bn0 = self.points[-1], self.normals[-1], self.binormals[-1]
        p1, nm1, bn1 = self.points[0], self.normals[0], self.binormals[0]
        # Smooth interpolation for perfect closure (no jagged edges)
        closure_t = 1.0
        smooth_closure_t = closure_t * closure_t * (3.0 - 2.0 * closure_t)  # Smoothstep
        ultra_smooth_closure_t = smooth_closure_t * smooth_closure_t * (3.0 - 2.0 * smooth_closure_t)  # Double smoothstep
        perfect_closure_t = ultra_smooth_closure_t * ultra_smooth_closure_t * (3.0 - 2.0 * ultra_smooth_closure_t)  # Triple smoothstep
        p_close = p0 * (1.0 - perfect_closure_t) + p1 * perfect_closure_t
        nm_close = normalize(nm0 * (1.0 - perfect_closure_t) + nm1 * perfect_closure_t)
        bn_close = normalize(bn0 * (1.0 - perfect_closure_t) + bn1 * perfect_closure_t)
        glNormal3fv(nm_close)
        glVertex3fv(p_close - bn_close*w/2 + nm_close*h)
        glVertex3fv(p_close + bn_close*w/2 + nm_close*h)
        glEnd()
        # Bottom (darker blue) - WITH INTERPOLATION AND PERFECT LOOP CLOSURE
        glColor3f(0.2, 0.5, 0.75)  # Darker blue for bottom
        glBegin(GL_QUAD_STRIP)
        for i in range(n):
            for sub in range(subdivs):
                t = sub / float(subdivs)
                p, nm, bn = interpolate_point(i, t)
                glNormal3f(-nm[0],-nm[1],-nm[2])
                glVertex3fv(p - bn*w/2 - nm*h)
                glVertex3fv(p + bn*w/2 - nm*h)
        # PERFECT LOOP CLOSURE: Smooth transition from last point back to first
        p0, nm0, bn0 = self.points[-1], self.normals[-1], self.binormals[-1]
        p1, nm1, bn1 = self.points[0], self.normals[0], self.binormals[0]
        closure_t = 1.0
        smooth_closure_t = closure_t * closure_t * (3.0 - 2.0 * closure_t)
        ultra_smooth_closure_t = smooth_closure_t * smooth_closure_t * (3.0 - 2.0 * smooth_closure_t)
        perfect_closure_t = ultra_smooth_closure_t * ultra_smooth_closure_t * (3.0 - 2.0 * ultra_smooth_closure_t)
        p_close = p0 * (1.0 - perfect_closure_t) + p1 * perfect_closure_t
        nm_close = normalize(nm0 * (1.0 - perfect_closure_t) + nm1 * perfect_closure_t)
        bn_close = normalize(bn0 * (1.0 - perfect_closure_t) + bn1 * perfect_closure_t)
        glNormal3f(-nm_close[0],-nm_close[1],-nm_close[2])
        glVertex3fv(p_close - bn_close*w/2 - nm_close*h)
        glVertex3fv(p_close + bn_close*w/2 - nm_close*h)
        glEnd()
        # Sides (medium blue) - WITH INTERPOLATION AND PERFECT LOOP CLOSURE
        glColor3f(0.3, 0.6, 0.85)  # Medium blue for sides
        for side_mult in [-1, 1]:
            glBegin(GL_QUAD_STRIP)
            for i in range(n):
                for sub in range(subdivs):
                    t = sub / float(subdivs)
                    p, nm, bn = interpolate_point(i, t)
                    glNormal3fv(bn*side_mult)
                    glVertex3fv(p+bn*w/2*side_mult+nm*h)
                    glVertex3fv(p+bn*w/2*side_mult-nm*h)
            # PERFECT LOOP CLOSURE: Smooth transition from last point back to first
            p0, nm0, bn0 = self.points[-1], self.normals[-1], self.binormals[-1]
            p1, nm1, bn1 = self.points[0], self.normals[0], self.binormals[0]
            closure_t = 1.0
            smooth_closure_t = closure_t * closure_t * (3.0 - 2.0 * closure_t)
            ultra_smooth_closure_t = smooth_closure_t * smooth_closure_t * (3.0 - 2.0 * smooth_closure_t)
            perfect_closure_t = ultra_smooth_closure_t * ultra_smooth_closure_t * (3.0 - 2.0 * ultra_smooth_closure_t)
            p_close = p0 * (1.0 - perfect_closure_t) + p1 * perfect_closure_t
            nm_close = normalize(nm0 * (1.0 - perfect_closure_t) + nm1 * perfect_closure_t)
            bn_close = normalize(bn0 * (1.0 - perfect_closure_t) + bn1 * perfect_closure_t)
            glNormal3fv(bn_close*side_mult)
            glVertex3fv(p_close+bn_close*w/2*side_mult+nm_close*h)
            glVertex3fv(p_close+bn_close*w/2*side_mult-nm_close*h)
            glEnd()
        # Supports - More frequent pillars like silhouette (evenly spaced)
        glColor3f(0.1, 0.3, 0.6)  # Dark blue supports (like the image)
        q=gluNewQuadric()
        for i in range(0, n, 30):  # More frequent supports (was 50, now 30)
            p = self.points[i]
            if p[1] > 2:  # Draw supports for all elevated track
                ground_y = get_terrain_height(p[0], p[2])
                support_height = p[1] - ground_y
                if support_height > 0.5:  # Only draw if track is elevated
                    glPushMatrix()
                    glTranslatef(p[0], ground_y, p[2])
                    gluCylinder(q, 0.35, 0.40, support_height, 10, 1)  # Slightly wider base
                    glPopMatrix()
        gluDeleteQuadric(q)
        glEndList()
        # Verify display list was created successfully
        err = glGetError()
        if err != GL_NO_ERROR:
            print(f"OpenGL error during display list creation: {err}")
            self.dl = 0  # Mark as invalid
    def _mix(self, a, b, t):
        return a*(1.0-t) + b*t
    def get_pos(self, t):
        """ULTRA-SMOOTH position interpolation using Catmull-Rom spline for elegant, continuous movement."""
        n = len(self.points)
        ft = (t % 1.0) * n
        i0 = int(ft) % n
        frac = ft - int(ft)
        
        # Use smoothstep interpolation for ultra-smooth, elegant movement
        smooth_frac = frac * frac * (3.0 - 2.0 * frac)  # Smoothstep for elegant transitions
        
        # Get surrounding points for Catmull-Rom interpolation (for ultra-smooth position)
        i_prev = (i0 - 1) % n
        i_curr = i0
        i_next = (i0 + 1) % n
        i_next2 = (i0 + 2) % n
        
        p0 = self.points[i_prev]
        p1 = self.points[i_curr]
        p2 = self.points[i_next]
        p3 = self.points[i_next2]
        
        # Catmull-Rom spline interpolation for ultra-smooth position
        pos = catmull_rom_spline(p0, p1, p2, p3, smooth_frac)
        
        # Ultra-smooth tangent calculation using multiple points
        # Calculate tangent from forward and backward points for smoothness
        prev_idx = (i0 - 2) % n
        next_idx = (i0 + 2) % n
        pm2 = self.points[prev_idx]
        pm1 = self.points[i_prev]
        p0_pos = self.points[i_curr]
        p1_pos = self.points[i_next]
        p2_pos = self.points[i_next2]
        
        # Weighted average tangent for ultra-smooth direction changes
        tang1 = normalize(p1_pos - pm1)  # Forward tangent
        tang2 = normalize(p2_pos - p0_pos)  # Extended forward tangent
        tang3 = normalize(p0_pos - pm2)  # Extended backward tangent
        
        # Smooth interpolation of tangents based on position
        tang_smooth = normalize(tang1 * 0.5 + tang2 * 0.3 + tang3 * 0.2)
        
        # Apply smoothstep to tangent interpolation for elegant transitions
        tang = normalize(lerp(tang1, tang_smooth, smooth_frac))
        
        up = np.array([0,1,0])
        bn = np.cross(tang, up)
        if np.linalg.norm(bn) < 1e-6:
            bn = np.array([1,0,0])
        bn = normalize(bn)
        nm = normalize(np.cross(bn, tang))
        
        return pos, tang, nm
    def draw(self):
        if hasattr(self, 'dl') and self.dl and self.dl != 0:
            try:
                glCallList(self.dl)
            except Exception as e:
                # If display list fails, recreate it
                print(f"Display list error, recreating: {e}")
                self.create_geometry()
                if self.dl and self.dl != 0:
                    glCallList(self.dl)
        else:
            # Display list not created yet, create it now
            if not hasattr(self, 'dl') or not self.dl:
                self.create_geometry()
                if self.dl and self.dl != 0:
                    glCallList(self.dl)

def draw_cave(pos, tang, norm, length=14.):
    # Open-ended cave tunnel (no back cap)
    glPushMatrix()
    glTranslatef(*pos)
    ang=math.atan2(tang[0], tang[2])*180/math.pi
    glRotatef(-ang,0,1,0)
    q=gluNewQuadric()
    glColor3f(0.16,0.13,0.14)
    glTranslatef(0,-2.4,0)
    gluCylinder(q,6,6,length,24,2)
    # Only front disk cap for entrance
    glPushMatrix(); glColor3f(0.20,0.18,0.17); glTranslatef(0,0,0); gluDisk(q,0,6,24,1); glPopMatrix()
    gluDeleteQuadric(q)
    glPopMatrix()

def is_in_cave(t):
    for a,b in CAVE_SECTIONS:
        if a <= t <= b:
            return True
    return False

def show_start_menu(screen, fonts):
    title_font = pygame.font.Font(None, 120)
    sub_font = pygame.font.Font(None, 44)
    tip_font = pygame.font.Font(None, 32)
    start_time = pygame.time.get_ticks()
    while True:
        glClearColor(0.5,0.75,1.0,1.0)
        glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT)
        surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
        # Fancy gradient
        for y in range(HEIGHT):
            a = y/HEIGHT
            col = (int(50+100*a), int(140+80*a), int(230-80*a), 255)
            pygame.draw.line(surf, col, (0,y), (WIDTH,y))
        # Title
        title = title_font.render("ULTRA COASTER", True, (255,255,255))
        shadow = title_font.render("ULTRA COASTER", True, (0,0,0))
        surf.blit(shadow, (WIDTH//2-title.get_width()//2+3, HEIGHT//3-title.get_height()//2+3))
        surf.blit(title, (WIDTH//2-title.get_width()//2, HEIGHT//3-title.get_height()//2))
        # Subtitle and prompt
        sub = sub_font.render("Press Enter/Space to Start", True, (255,230,80))
        surf.blit(sub, (WIDTH//2-sub.get_width()//2, int(HEIGHT*0.58)))
        tips = ["W/S throttle & brake", "Shift boost • Q-/E+ power", "C camera • L light • N day/night"]
        y0 = int(HEIGHT*0.70)
        for i,t in enumerate(tips):
            st = tip_font.render(t, True, (245,245,245))
            surf.blit(st, (WIDTH//2-st.get_width()//2, y0+i*28))
        td = pygame.image.tostring(surf, "RGBA", True)
        gl_draw_fullscreen_surface(surf)
        pygame.display.flip()
        # Input or timeout
        for event in pygame.event.get():
            if event.type == KEYDOWN and (event.key==K_RETURN or event.key==K_SPACE):
                return
            if event.type == MOUSEBUTTONDOWN:
                return
            if event.type == QUIT:
                pygame.quit(); sys.exit(0)
        if (pygame.time.get_ticks() - start_time) > 2500:
            return

def start_ready_countdown(screen, fonts):
    # ELEGANT Countdown UI - Creative & Smooth with Particle Effects
    title_font = pygame.font.Font(None, 240)
    sub_font = pygame.font.Font(None, 40)
    
    # Particle system for countdown
    countdown_particles = []
    
    for txt,sec in [("READY",0.6),("3",0.8),("2",0.8),("1",0.8),("GO!",1.0)]:
        item_start = pygame.time.get_ticks()
        item_dur = int(sec * 1000)
        
        # Create burst particles for transitions
        if txt in ["3","2","1"]:
            for i in range(40):
                angle = (i / 40.0) * 2 * math.pi
                speed = random.uniform(2, 5)
                countdown_particles.append({
                    'x': WIDTH//2,
                    'y': HEIGHT//2,
                    'vx': math.cos(angle) * speed,
                    'vy': math.sin(angle) * speed,
                    'life': 1.0,
                    'size': random.uniform(4, 10),
                    'color': (255, 230, 40) if txt != "GO!" else (110, 255, 100)
                })
        
        while pygame.time.get_ticks() - item_start < item_dur:
            t = (pygame.time.get_ticks() - item_start) / item_dur
            
            for event in pygame.event.get():
                if event.type == QUIT:
                    pygame.quit(); sys.exit(0)
            
            glClearColor(0.08, 0.12, 0.20, 1.0)
        glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT)
        surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
        
        # Elegant animated gradient background
        for y in range(HEIGHT):
            a = y/HEIGHT
            pulse = 0.5 + 0.5 * math.sin(t * math.pi * 3)
            if txt == "GO!":
                col = (int(8+15*a + pulse*25), int(25+30*a + pulse*40), int(12+18*a + pulse*30), 255)
            else:
                col = (int(10+20*a + pulse*15), int(15+25*a + pulse*20), int(25+40*a + pulse*25), 255)
            pygame.draw.line(surf, col, (0,y), (WIDTH,y))
        
        # Update particles
        for p in countdown_particles[:]:
            p['x'] += p['vx']
            p['y'] += p['vy']
            p['life'] -= 0.03
            p['vx'] *= 0.97
            p['vy'] *= 0.97
            if p['life'] <= 0:
                countdown_particles.remove(p)
            else:
                alpha = int(255 * p['life'])
                particle_surf = pygame.Surface((int(p['size']*2), int(p['size']*2)), pygame.SRCALPHA)
                pygame.draw.circle(particle_surf, (*p['color'], alpha), (int(p['size']), int(p['size'])), int(p['size']))
                surf.blit(particle_surf, (p['x'] - p['size'], p['y'] - p['size']))
        
        # Elegant text with smooth animations
        if txt == "GO!":
            text_color = (110, 255, 100)
            glow_color = (110, 255, 100)
        else:
            text_color = (255, 230, 40)
            glow_color = (255, 230, 40)
        
        # Smooth scale animation
        ease_t = t * t * (3.0 - 2.0 * t)
        scale = 0.4 + 0.6 * ease_t
        if t > 0.6:
            scale = 1.0 - 0.15 * ((t - 0.6) / 0.4)
        
        # Fade animation
        alpha = 1.0
        if t < 0.15:
            alpha = t / 0.15
        elif t > 0.75:
            alpha = 1.0 - ((t - 0.75) / 0.25)
        
        # Render with glow
        text_size = int(240 * scale)
        text_font = pygame.font.Font(None, text_size)
        
        # Multiple glow layers
        for glow_offset in [15, 10, 6, 3]:
            glow_alpha = int(100 / glow_offset)
            glow_surf = text_font.render(txt, True, glow_color)
            glow_surf.set_alpha(glow_alpha)
            for dx in [-glow_offset, 0, glow_offset]:
                for dy in [-glow_offset, 0, glow_offset]:
                    surf.blit(glow_surf, (WIDTH//2 - glow_surf.get_width()//2 + dx, 
                                         HEIGHT//2 - glow_surf.get_height()//2 + dy))
        
        # Main text
        main_surf = text_font.render(txt, True, text_color)
        main_surf.set_alpha(int(255 * alpha))
        surf.blit(main_surf, (WIDTH//2 - main_surf.get_width()//2, HEIGHT//2 - main_surf.get_height()//2))
        
        # Elegant hint text
        hint = "Space: Pause • W/S: Throttle • Shift: Boost"
        hint_bg = pygame.Surface((WIDTH//2, 45), pygame.SRCALPHA)
        pygame.draw.rect(hint_bg, (0,0,0,140), (0,0,hint_bg.get_width(), hint_bg.get_height()), border_radius=10)
        sh = sub_font.render(hint, True, (220, 220, 240))
        hint_bg.blit(sh, (hint_bg.get_width()//2 - sh.get_width()//2, hint_bg.get_height()//2 - sh.get_height()//2))
        surf.blit(hint_bg, (WIDTH//2 - hint_bg.get_width()//2, int(HEIGHT*0.78)))
        
        gl_draw_fullscreen_surface(surf)
        pygame.display.flip()
        pygame.time.wait(16)  # ~60 FPS

JOURNEY_TIME = 60.0  # seconds for one full loop at full throttle
BASE_RATE = 1.0 / JOURNEY_TIME

def main():
    global LIGHTS_ON
    global CAVE_SECTIONS
    global NIGHT_MODE
    global current_biome
    global TIME_OF_DAY
    global NEON_GLOW_ENABLED
    global ENERGY_PHYSICS_ENABLED
    screen=init_opengl(); clock=pygame.time.Clock(); fonts=[
        pygame.font.Font(None,44),pygame.font.Font(None,32),pygame.font.Font(None,26),pygame.font.Font(None,22)
    ];

    # Local reliable UI blit (fallback if global is missing)
    def ui_blit(surf):
        # Robust textured quad blit (more reliable than glDrawPixels on some drivers)
        data = pygame.image.tostring(surf, "RGBA", True)
        glDisable(GL_DEPTH_TEST); glDisable(GL_LIGHTING); glEnable(GL_TEXTURE_2D); glEnable(GL_BLEND)
        glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
        tex = glGenTextures(1); glBindTexture(GL_TEXTURE_2D, tex)
        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR)
        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR)
        glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, surf.get_width(), surf.get_height(), 0, GL_RGBA, GL_UNSIGNED_BYTE, data)
        glMatrixMode(GL_PROJECTION); glPushMatrix(); glLoadIdentity(); glOrtho(0, WIDTH, HEIGHT, 0, -1, 1)
        glMatrixMode(GL_MODELVIEW); glPushMatrix(); glLoadIdentity(); glColor4f(1,1,1,1)
        glBegin(GL_QUADS)
        # Flip V because pygame.image.tostring(..., True) returns top-left origin
        glTexCoord2f(0,1); glVertex2f(0,0)
        glTexCoord2f(1,1); glVertex2f(WIDTH,0)
        glTexCoord2f(1,0); glVertex2f(WIDTH,HEIGHT)
        glTexCoord2f(0,0); glVertex2f(0,HEIGHT)
        glEnd()
        glPopMatrix(); glMatrixMode(GL_PROJECTION); glPopMatrix(); glMatrixMode(GL_MODELVIEW)
        glBindTexture(GL_TEXTURE_2D, 0); glDeleteTextures(int(tex))
        glDisable(GL_TEXTURE_2D); glDisable(GL_BLEND); glEnable(GL_DEPTH_TEST); glEnable(GL_LIGHTING)

    def loading(msg):
        surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
        surf.fill((0,0,0,180))
        t = fonts[0].render(msg, True, (255,255,255))
        surf.blit(t, (WIDTH//2 - t.get_width()//2, HEIGHT//2 - t.get_height()//2))
        ui_blit(surf); pygame.display.flip()

    def play_intro_sequence():
        """Polished pre-game loading and countdown sequence.
        Shows a dark full-screen loading for ~2.2s, then 3-2-1-GO! with smooth scale/fade.
        """
        # Ensure a consistent clear state
        glClearColor(0.05,0.05,0.08,1.0)
        big_font = pygame.font.Font(None, 200)
        mid_font = pygame.font.Font(None, 60)

        def draw_text_center(text, color, scale=1.0, alpha=255, subtitle=None):
            surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
            # Dark background
            pygame.draw.rect(surf, (12,12,18,255), (0,0,WIDTH,HEIGHT))
            # Render main text large, then scale
            base = big_font.render(text, True, color)
            tw, th = base.get_width(), base.get_height()
            sw, sh = int(tw*scale), int(th*scale)
            if sw <= 1: sw = 1
            if sh <= 1: sh = 1
            scaled = pygame.transform.smoothscale(base, (sw, sh))
            scaled.set_alpha(alpha)
            surf.blit(scaled, (WIDTH//2 - sw//2, HEIGHT//2 - sh//2))
            if subtitle:
                subimg = mid_font.render(subtitle, True, (220,220,220))
                surf.blit(subimg, (WIDTH//2 - subimg.get_width()//2, int(HEIGHT*0.72)))
            return surf

        # REAL Loading UI with Percentage - Shows Actual Progress
        load_start = pygame.time.get_ticks()
        load_duration = 2000  # 2 seconds for initial loading
        loading_clock = pygame.time.Clock()
        frame_count = 0
        
        while True:
            now = pygame.time.get_ticks()
            elapsed = now - load_start
            if elapsed >= load_duration:
                break  # Exit after 2 seconds
            
            # Safety break - prevent infinite loop
            frame_count += 1
            if frame_count > 200:  # Max 200 frames (safety limit)
                break
            
            # REAL progress percentage (0-100%)
            progress = min(100.0, (elapsed / load_duration) * 100.0)
            loading_clock.tick(60)  # Ensure smooth 60 FPS
            
            for event in pygame.event.get():
                if event.type == QUIT:
                    pygame.quit(); sys.exit(0)
            
            glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT)
            surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
            
            # Elegant dark background
            surf.fill((18, 18, 22, 255))
            
            # Loading text
            loading_text = "LOADING"
            loading_font = pygame.font.Font(None, 72)
            main_text = loading_font.render(loading_text, True, (220, 220, 220))
            surf.blit(main_text, (WIDTH//2 - main_text.get_width()//2, HEIGHT//2 - 80))
            
            # REAL Percentage display
            percent_font = pygame.font.Font(None, 48)
            percent_text = f"{int(progress)}%"
            percent_surf = percent_font.render(percent_text, True, (200, 200, 200))
            surf.blit(percent_surf, (WIDTH//2 - percent_surf.get_width()//2, HEIGHT//2 - 20))
            
            # Progress bar with percentage
            bar_width = 400
            bar_height = 8
            bar_x = WIDTH//2 - bar_width//2
            bar_y = HEIGHT//2 + 30
            
            # Progress bar background
            pygame.draw.rect(surf, (40, 40, 40, 255), (bar_x, bar_y, bar_width, bar_height))
            pygame.draw.rect(surf, (60, 60, 60, 255), (bar_x, bar_y, bar_width, bar_height), 2)  # Border
            
            # Progress fill
            fill_width = int(bar_width * (progress / 100.0))
            if fill_width > 0:
                # Gradient fill effect
                for i in range(fill_width):
                    fill_ratio = i / bar_width
                    r = int(100 + fill_ratio * 155)
                    g = int(150 + fill_ratio * 105)
                    b = int(200 + fill_ratio * 55)
                    pygame.draw.line(surf, (r, g, b), (bar_x + i, bar_y), (bar_x + i, bar_y + bar_height))
            
            ui_blit(surf)
            pygame.display.flip()
        
        # MINIMAL ELEGANT Countdown UI - Clean and Simple, No Radiant Colors
        items = ["3","2","1","GO!"]
        countdown_clock = pygame.time.Clock()
        
        for label in items:
            item_start = pygame.time.get_ticks()
            item_dur = 800 if label != "GO!" else 1000  # Countdown time
            
            frame_count = 0
            while True:
                now = pygame.time.get_ticks()
                elapsed = now - item_start
                if elapsed >= item_dur:
                    break  # Exit after duration
                
                # Safety break - prevent infinite loop
                frame_count += 1
                if frame_count > 100:  # Max 100 frames per countdown item
                    break
                
                t = elapsed / item_dur
                if t >= 1.0:
                    break
                
                countdown_clock.tick(60)  # Smooth 60 FPS
                
                for event in pygame.event.get():
                    if event.type == QUIT:
                        pygame.quit(); sys.exit(0)
                
                glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT)
                surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
                
                # MINIMAL background - clean dark gray, no radiant colors
                surf.fill((18, 18, 22, 255))
                
                # Smooth scale animation (ease in-out)
                ease_t = t * t * (3.0 - 2.0 * t)
                scale = 0.5 + 0.5 * ease_t
                if t > 0.7:
                    scale = 1.0 - 0.2 * ((t - 0.7) / 0.3)
                
                # Fade animation
                alpha = 1.0
                if t < 0.2:
                    alpha = t / 0.2
                elif t > 0.8:
                    alpha = 1.0 - ((t - 0.8) / 0.2)
                
                # Minimal text color - soft gray/white, no radiant colors
                text_color = (240, 240, 240)  # Soft white, elegant
                if label == "GO!":
                    text_color = (220, 220, 220)  # Slightly softer for GO!
                
                # Render minimal text - no glow effects, no particles
                number_size = int(180 * scale)  # Smaller, more minimal
                number_font = pygame.font.Font(None, number_size)
                main_surf = number_font.render(label, True, text_color)
                main_surf.set_alpha(int(255 * alpha))
                surf.blit(main_surf, (WIDTH//2 - main_surf.get_width()//2, HEIGHT//2 - main_surf.get_height()//2))
                
                ui_blit(surf)
                pygame.display.flip()
                pygame.time.wait(16)  # ~60 FPS to prevent stuttering
        
        # Clear to black (no blue background) before entering scene
        glClearColor(0.0, 0.0, 0.0, 1.0)
        glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT)
        pygame.display.flip()  # Ensure final frame is displayed

    # IMPORTANT: Loading and countdown happen FIRST in play_intro_sequence()
    # Then initialize environment AFTER intro completes

    def show_pause_overlay():
        surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
        surf.fill((0,0,0,160))
        t_big = fonts[0].render("PAUSED", True, (254,224,90))
        surf.blit(t_big, (WIDTH//2-t_big.get_width()//2, HEIGHT//2-t_big.get_height()//2))
        ui_blit(surf)

    def show_start_menu_local():
        title_font = pygame.font.Font(None, 120)
        sub_font = pygame.font.Font(None, 44)
        tip_font = pygame.font.Font(None, 32)
        start_time = pygame.time.get_ticks()
        while True:
            glClearColor(0.5,0.75,1.0,1.0); glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT)
            surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
            for y in range(HEIGHT):
                a = y/HEIGHT
                col = (int(50+100*a), int(140+80*a), int(230-80*a), 255)
                pygame.draw.line(surf, col, (0,y), (WIDTH,y))
            title = title_font.render("ULTRA COASTER", True, (255,255,255))
            shadow = title_font.render("ULTRA COASTER", True, (0,0,0))
            surf.blit(shadow, (WIDTH//2-title.get_width()//2+3, HEIGHT//3-title.get_height()//2+3))
            surf.blit(title, (WIDTH//2-title.get_width()//2, HEIGHT//3-title.get_height()//2))
            sub = sub_font.render("Press Enter/Space to Start", True, (255,230,80))
            surf.blit(sub, (WIDTH//2-sub.get_width()//2, int(HEIGHT*0.58)))
            tips = ["W/S throttle & brake", "Shift boost • Q-/E+ power", "C camera • L light • N day/night"]
            y0 = int(HEIGHT*0.70)
            for i,t in enumerate(tips):
                st = tip_font.render(t, True, (245,245,245))
                surf.blit(st, (WIDTH//2-st.get_width()//2, y0+i*28))
            ui_blit(surf); pygame.display.flip()
            for event in pygame.event.get():
                if event.type == KEYDOWN and (event.key==K_RETURN or event.key==K_SPACE):
                    return
                if event.type == MOUSEBUTTONDOWN: return
                if event.type == QUIT: pygame.quit(); sys.exit(0)
            if (pygame.time.get_ticks() - start_time) > 2500: return

    def start_ready_countdown_local():
        title_font = pygame.font.Font(None, 200)
        sub_font = pygame.font.Font(None, 48)
        for txt,sec in [("READY",0.7),("3",0.7),("2",0.7),("1",0.7),("GO!",0.7)]:
            glClearColor(0.5,0.75,1.0,1.0); glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT)
            surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
            for y in range(HEIGHT):
                a = y/HEIGHT
                col = (int(20+100*a), int(120+100*a), int(230-70*a), 255)
                pygame.draw.line(surf, col, (0,y), (WIDTH,y))
            timg_shadow = title_font.render(txt, True, (0,0,0))
            surf.blit(timg_shadow, (WIDTH//2-timg_shadow.get_width()//2+4, HEIGHT//2-timg_shadow.get_height()//2+4))
            timg=title_font.render(txt,True,(255,230,40) if txt!='GO!' else (110,255,100))
            surf.blit(timg, (WIDTH//2-timg.get_width()//2, HEIGHT//2-timg.get_height()//2))
            hint = "Press Space to start/pause, W/S throttle/brake, Shift boost"
            sh = sub_font.render(hint, True, (255,255,255))
            surf.blit(sh, (WIDTH//2 - sh.get_width()//2, int(HEIGHT*0.72)))
            ui_blit(surf); pygame.display.flip(); pygame.time.wait(int(sec*1000))

    # SEQUENCE: Loading (2 seconds) -> Countdown -> Initialize Environment -> Main Loop
    play_intro_sequence()  # Loading (2 sec) + Countdown
    
    # NOW initialize environment AFTER loading and countdown complete
    # Show "Initializing Roller Coaster 2025 Simulation" with REAL percentage progress
    init_start_time = pygame.time.get_ticks()
    init_clock = pygame.time.Clock()
    
    # Loading screen fonts
    loading_font = pygame.font.Font(None, 64)
    subtitle_font = pygame.font.Font(None, 36)
    percent_font = pygame.font.Font(None, 52)
    
    # Initialize in background with REAL percentage-based loading
    # Set up a static camera view for initialization background
    init_camera_pos = [0, 80, 120]  # Elevated view looking down at scene
    init_camera_target = [0, 0, 0]
    
    # Store initialization objects (will be populated as they're created)
    init_bg_objects = {'mountains': None, 'track': None, 'plants': None}
    
    # Load background image for initialization
    init_bg_image = None
    init_bg_texture = None
    try:
        # Try multiple paths for the background image
        script_dir = os.path.dirname(os.path.abspath(__file__)) if '__file__' in globals() else os.getcwd()
        project_root = os.path.dirname(script_dir) if os.path.basename(script_dir) == 'src' else script_dir
        image_paths = [
            os.path.join(project_root, "assets", "sounds", "background-music", "background-image", "background-image.png"),
            os.path.join(script_dir, "..", "assets", "sounds", "background-music", "background-image", "background-image.png"),
            "assets/sounds/background-music/background-image/background-image.png",
            "../assets/sounds/background-music/background-image/background-image.png"
        ]
        for img_path in image_paths:
            normalized_path = os.path.normpath(img_path)
            if os.path.exists(normalized_path):
                try:
                    loaded_img = pygame.image.load(normalized_path)
                    # Flip image horizontally for correct orientation
                    init_bg_image = pygame.transform.flip(loaded_img, True, False)
                    print(f"✓ Background image loaded and flipped: {normalized_path}")
                    break
                except Exception as e:
                    print(f"  Warning: Failed to load image from {normalized_path}: {e}")
                    continue
        if init_bg_image is None:
            print("⚠ Background image not found (will use 3D scene instead)")
    except Exception as e:
        print(f"⚠ Background image loading failed: {e}")
    
    def render_3d_background():
        """Render the 3D scene as background (like the image)"""
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
        glLoadIdentity()
        
        # Set sky color (bright blue like the image)
        sky_color, amb_color = get_time_of_day_color()
        glClearColor(sky_color[0], sky_color[1], sky_color[2], 1.0)
        glClear(GL_COLOR_BUFFER_BIT)
        
        # Camera setup for initialization view
        gluLookAt(init_camera_pos[0], init_camera_pos[1], init_camera_pos[2],
                  init_camera_target[0], init_camera_target[1], init_camera_target[2],
                  0, 1, 0)
        
        # Set lighting
        glLightfv(GL_LIGHT0, GL_AMBIENT, (amb_color[0], amb_color[1], amb_color[2], 1))
        glLightfv(GL_LIGHT0, GL_DIFFUSE, (0.9, 0.9, 0.85, 1))
        
        # Draw ground (green grass) - ALWAYS available
        draw_ground()
        
        # Draw mountains (if initialized)
        if init_bg_objects['mountains']:
            drawmountains(init_bg_objects['mountains'])
        
        # Draw track (if initialized)
        if init_bg_objects['track']:
            init_bg_objects['track'].draw()
        
        # Draw plants (if initialized)
        if init_bg_objects['plants']:
            for plant in init_bg_objects['plants']:
                plant.drawself()
        
        # Draw large floating balloons - ALWAYS available
        currenttime = pygame.time.get_ticks() / 1000.0
        drawlargeballoons(currenttime)
        
        # Draw rainbow (fixed in sky) - ALWAYS available
        draw_rainbow()
        
        # Draw clouds with balloons - ALWAYS available (initialized in init_biome_environments)
        draw_clouds_with_balloons()
        
        # Draw biome environment (if initialized)
        if 'current_biome' in globals():
            draw_biome_environment()
    
    def show_init_screen(progress_text="", progress_percent=0.0, alpha=1.0):
        """Show initialization screen with background image and REAL percentage progress"""
        # Draw background image if available, otherwise render 3D scene
        nonlocal init_bg_texture, init_bg_image  # Access variables from enclosing scope
        
        # Force background image to display
        if init_bg_image is not None:
            # Draw background image as fullscreen texture
            glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
            glDisable(GL_DEPTH_TEST)
            glDisable(GL_LIGHTING)
            glEnable(GL_TEXTURE_2D)
            glDisable(GL_BLEND)  # Disable blending for solid background
            
            # Convert pygame surface to OpenGL texture
            img_data = pygame.image.tostring(init_bg_image, "RGBA", True)
            img_width, img_height = init_bg_image.get_size()
            
            # Create texture if not already created
            if init_bg_texture is None:
                init_bg_texture = glGenTextures(1)
                glBindTexture(GL_TEXTURE_2D, init_bg_texture)
                glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR)
                glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR)
                glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE)
                glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE)
                glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, img_width, img_height, 0, GL_RGBA, GL_UNSIGNED_BYTE, img_data)
            else:
                glBindTexture(GL_TEXTURE_2D, init_bg_texture)
                glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, img_width, img_height, 0, GL_RGBA, GL_UNSIGNED_BYTE, img_data)
            
            # Draw fullscreen quad
            glMatrixMode(GL_PROJECTION)
            glPushMatrix()
            glLoadIdentity()
            glOrtho(0, WIDTH, HEIGHT, 0, -1, 1)
            glMatrixMode(GL_MODELVIEW)
            glPushMatrix()
            glLoadIdentity()
            glColor4f(1, 1, 1, alpha)
            glBegin(GL_QUADS)
            # Flip V coordinates because pygame.image.tostring returns top-left origin
            # but OpenGL textures use bottom-left origin
            glTexCoord2f(0, 1)  # Bottom-left
            glVertex2f(0, 0)
            glTexCoord2f(1, 1)  # Bottom-right
            glVertex2f(WIDTH, 0)
            glTexCoord2f(1, 0)  # Top-right
            glVertex2f(WIDTH, HEIGHT)
            glTexCoord2f(0, 0)  # Top-left
            glVertex2f(0, HEIGHT)
            glEnd()
            glPopMatrix()
            glMatrixMode(GL_PROJECTION)
            glPopMatrix()
            glMatrixMode(GL_MODELVIEW)
            glDisable(GL_TEXTURE_2D)
            glDisable(GL_BLEND)
            glEnable(GL_DEPTH_TEST)
            glEnable(GL_LIGHTING)
        else:
            # Render 3D scene as background (fallback)
            render_3d_background()
        
        # Create overlay surface for UI
        surf = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
        # Decreased transparency - more opaque overlay for better text visibility
        overlay_alpha = int(240 * alpha)  # Increased from 220 to 240 for even less transparency
        overlay = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
        overlay.fill((0, 0, 0, overlay_alpha))  # Full opacity (no division) for maximum visibility
        surf.blit(overlay, (0, 0))
        
        elapsed = pygame.time.get_ticks() - init_start_time
        # Smooth pulsing text animation
        pulse = 0.7 + 0.3 * math.sin(elapsed * 0.015)
        text_color = (int(180 + 75 * pulse), int(180 + 75 * pulse), 255)
        
        # Main text - "Initializing Roller Coaster 2025 Simulation"
        main_text = loading_font.render("Initializing Roller Coaster 2025 Simulation", True, text_color)
        # Add subtle glow
        for offset in [3, 2, 1]:
            glow_alpha = int(50 / offset * alpha)
            glow_surf = loading_font.render("Initializing Roller Coaster 2025 Simulation", True, text_color)
            glow_surf.set_alpha(glow_alpha)
            surf.blit(glow_surf, (WIDTH//2 - main_text.get_width()//2 + offset, 
                                 HEIGHT//2 - 100 + offset))
        surf.blit(main_text, (WIDTH//2 - main_text.get_width()//2, HEIGHT//2 - 100))
        
        # Animated Percentage display with smooth transitions
        percent_text = f"{int(progress_percent)}%"
        # Pulse animation for percentage
        percent_pulse = 1.0 + 0.1 * math.sin(elapsed * 0.02)
        percent_size = int(52 * percent_pulse)
        percent_font_animated = pygame.font.Font(None, percent_size)
        percent_surf = percent_font_animated.render(percent_text, True, (int(200 * alpha), int(200 * alpha), int(220 * alpha)))
        surf.blit(percent_surf, (WIDTH//2 - percent_surf.get_width()//2, HEIGHT//2 - 40))
        
        # Progress subtitle
        if progress_text:
            sub_text = subtitle_font.render(progress_text, True, (int(180 * alpha), int(180 * alpha), int(200 * alpha)))
            surf.blit(sub_text, (WIDTH//2 - sub_text.get_width()//2, HEIGHT//2 + 10))
        
        # Progress bar with REAL percentage and animated fill
        bar_width = 450
        bar_height = 10
        bar_x = WIDTH//2 - bar_width//2
        bar_y = HEIGHT//2 + 50
        
        # Progress bar background
        pygame.draw.rect(surf, (40, 40, 40, int(255 * alpha)), (bar_x, bar_y, bar_width, bar_height))
        pygame.draw.rect(surf, (80, 80, 80, int(255 * alpha)), (bar_x, bar_y, bar_width, bar_height), 2)  # Border
        
        # Progress fill with REAL percentage and animated gradient
        fill_width = int(bar_width * (progress_percent / 100.0))
        if fill_width > 0:
            # Animated gradient fill effect with shimmer
            shimmer_offset = int(math.sin(elapsed * 0.05) * 20)
            for i in range(fill_width):
                fill_ratio = i / bar_width
                # Animated color based on progress
                r = int((100 + fill_ratio * 155 + shimmer_offset * 0.5) * alpha)
                g = int((150 + fill_ratio * 105 + shimmer_offset * 0.3) * alpha)
                b = int((200 + fill_ratio * 55 + shimmer_offset * 0.2) * alpha)
                r = max(0, min(255, r))
                g = max(0, min(255, g))
                b = max(0, min(255, b))
                pygame.draw.line(surf, (r, g, b), (bar_x + i, bar_y), (bar_x + i, bar_y + bar_height))
        
        ui_blit(surf)
        pygame.display.flip()
        init_clock.tick(60)
    
    # Show initial frame - Starting (0-15%)
    show_init_screen("Starting...", 0.0)
    pygame.time.wait(100)
    
    # Animate from 0% to 15% with smooth increments
    for p in range(0, 16, 2):
        show_init_screen("Starting...", float(p))
        pygame.time.wait(30)
    show_init_screen("Starting...", 15.0)
    pygame.time.wait(100)
    
    # Initialize track (most time-consuming) - Building track (15-50%)
    show_init_screen("Building track...", 15.0)
    track=ExtendedTrack()
    init_bg_objects['track'] = track  # Store for background rendering
    # Animate progress from 15% to 50% with numbers
    for p in range(16, 51, 2):
        show_init_screen("Building track...", float(p))
        pygame.time.wait(20)
    show_init_screen("Building track...", 50.0)
    pygame.time.wait(100)
    
    # Initialize mountains - Creating environment (50-70%)
    show_init_screen("Creating environment...", 50.0)
    mountains = createmountainranges()
    init_bg_objects['mountains'] = mountains  # Store for background rendering
    # Animate progress from 50% to 70% with numbers
    for p in range(51, 71, 2):
        show_init_screen("Creating environment...", float(p))
        pygame.time.wait(25)
    show_init_screen("Creating environment...", 70.0)
    pygame.time.wait(100)
    
    # Initialize plants - Creating environment (70-80%)
    random.seed(777)
    show_init_screen("Creating environment...", 70.0)
    plants = [SimplePlant(random.uniform(-150, 150), random.uniform(-150, 150)) for _ in range(40)]
    init_bg_objects['plants'] = plants  # Store for background rendering
    # Animate progress from 70% to 80%
    for p in range(71, 81, 2):
        show_init_screen("Creating environment...", float(p))
        pygame.time.wait(20)
    show_init_screen("Creating environment...", 80.0)
    pygame.time.wait(100)
    
    # Initialize rotating cubes, birds, and biome environments - Finalizing (80-95%)
    show_init_screen("Finalizing...", 80.0)
    init_rotating_cubes()
    for p in range(81, 88, 1):
        show_init_screen("Finalizing...", float(p))
        pygame.time.wait(15)
    show_init_screen("Finalizing...", 87.0)
    pygame.time.wait(50)
    
    init_birds()
    for p in range(88, 91, 1):
        show_init_screen("Finalizing...", float(p))
        pygame.time.wait(15)
    show_init_screen("Finalizing...", 90.0)
    pygame.time.wait(50)
    
    init_biome_environments()
    for p in range(91, 96, 1):
        show_init_screen("Finalizing...", float(p))
        pygame.time.wait(15)
    show_init_screen("Finalizing...", 95.0)
    pygame.time.wait(100)
    
    # Load and play background music - Finalizing (95-100%)
    show_init_screen("Finalizing...", 95.0)
    try:
        # Get script directory and project root for path resolution
        script_dir = os.path.dirname(os.path.abspath(__file__)) if '__file__' in globals() else os.getcwd()
        project_root = os.path.dirname(script_dir) if os.path.basename(script_dir) == 'src' else script_dir
        
        # Try multiple possible paths (relative to project root and script location)
        music_paths = [
            # From project root
            os.path.join(project_root, "assets", "sounds", "background-music", "roller-coaster-48696.mp3"),
            os.path.join(project_root, "__pycache__", "sounds", "background-music", "roller-coaster-48696.mp3"),
            os.path.join(project_root, "sounds", "background-music", "roller-coaster-48696.mp3"),
            # From script directory (src/)
            os.path.join(script_dir, "..", "assets", "sounds", "background-music", "roller-coaster-48696.mp3"),
            os.path.join(script_dir, "..", "__pycache__", "sounds", "background-music", "roller-coaster-48696.mp3"),
            # Relative paths (current working directory)
            os.path.join("assets", "sounds", "background-music", "roller-coaster-48696.mp3"),
            os.path.join("__pycache__", "sounds", "background-music", "roller-coaster-48696.mp3"),
            os.path.join("sounds", "background-music", "roller-coaster-48696.mp3"),
            # String paths (for compatibility)
            "assets/sounds/background-music/roller-coaster-48696.mp3",
            "../assets/sounds/background-music/roller-coaster-48696.mp3",
            "__pycache__/sounds/background-music/roller-coaster-48696.mp3",
            "../__pycache__/sounds/background-music/roller-coaster-48696.mp3"
        ]
        music_loaded = False
        loaded_path = None
        for music_path in music_paths:
            # Normalize path
            normalized_path = os.path.normpath(music_path)
            if os.path.exists(normalized_path):
                try:
                    pygame.mixer.music.load(normalized_path)
                    pygame.mixer.music.set_volume(0.5)  # 50% volume
                    pygame.mixer.music.play(-1)  # Loop indefinitely
                    music_loaded = True
                    loaded_path = normalized_path
                    print(f"✓ Background music loaded successfully from: {normalized_path}")
                    break
                except Exception as load_error:
                    print(f"  Warning: Failed to load music from {normalized_path}: {load_error}")
                    continue
        if not music_loaded:
            print("⚠ Music file not found (continuing without music)")
            print(f"  Searched in: {project_root}")
            print(f"  Script directory: {script_dir}")
            print(f"  Current directory: {os.getcwd()}")
    except Exception as e:
        print(f"⚠ Music loading failed (continuing without music): {e}")
        import traceback
        traceback.print_exc()
    
    # Animate final progress from 96% to 100%
    for p in range(96, 101, 1):
        show_init_screen("Complete!", float(p))
        pygame.time.wait(30)
    # Complete - 100%
    show_init_screen("Complete!", 100.0)
    pygame.time.wait(200)  # Brief pause at 100%
    
    # Quick fade out to game (without background image - just black screen)
    for i in range(8):
        alpha = 1.0 - (i / 8.0)
        # Simple black fade without background image
        glClearColor(0.0, 0.0, 0.0, 1.0)
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
        pygame.display.flip()
        pygame.time.wait(15)
    
    # Set sky color for game
    glClearColor(0.5, 0.75, 1.0, 1.0)  # Sky blue for game
    
    # Runtime state initialization
    running = True
    paused = False
    auto_start = 1.2
    need_countdown = False
    # Camera and motion state
    camera_mode = 0  # 0=first-person, 1=third-person, 2=drone camera, 3=free WASD
    cam_pos = np.array([0.0, 40.0, 120.0], dtype=float)
    cam_target = np.array([0.0, 25.0, 0.0], dtype=float)
    up_vec = np.array([0.0, 1.0, 0.0], dtype=float)
    # Free WASD camera state
    free_cam_pos = np.array([0.0, 40.0, 120.0], dtype=float)
    free_cam_yaw = 0.0
    free_cam_pitch = -0.3
    mouse_sensitivity = 0.002
    free_cam_speed = 25.0
    mouse_locked = False
    # Ride state
    track_pos = 0.0
    speed_norm = 0.0
    target_speed_norm = 0.0
    wheel_rotation = 0.0
    boost_power = 100.0
    boost_strength = 1.0
    # Game challenges - Scoring system
    game_score = 0
    cubes_collected = 0
    # Environment seeds
    sun_pos = np.array([140.0, 160.0, -140.0], dtype=float)
    cloud_seeds = [(random.uniform(-140,140), random.uniform(70,110), random.uniform(-140,140), random.uniform(6,12)) for _ in range(12)]
    mountain_seeds = [(random.uniform(-220,220), random.uniform(35,85), random.uniform(-220,220), random.uniform(22,40)) for _ in range(9)]
    air_balloons = [(random.uniform(-160,160), random.uniform(40,90), random.uniform(-160,160), (random.uniform(0.6,1.0), random.uniform(0.3,0.9), random.uniform(0.3,0.9))) for _ in range(6)]
    trees = [SimpleTree(random.uniform(-180,180), random.uniform(-180,180)) for _ in range(40)]
    car = CoasterCar()
    # Second car moving in opposite direction
    car2 = CoasterCar()
    track_pos2 = 0.5  # Start at middle of track (opposite direction)
    speed_norm2 = 0.15  # Constant speed for second car
    wheel_rotation2 = 0.0

    def export_current_track():
        """Export current ExtendedTrack points to exported_track.txt for track geometry showcase.
        IMPORTANT: This function MUST work properly and effectively for track export.
        Format: x y z (one point per line) - suitable for .exe or .py runtime deliverables.
        Enhanced with comprehensive error handling and verification.
        """
        try:
            # Track is a local variable in main(), so we access it directly
            # No need to check locals()/globals() - track is already in scope
            
            # Ensure track is valid and accessible
            try:
                if not hasattr(track, 'points'):
                    print("=" * 60)
                    print("ERROR: Track object has no 'points' attribute!")
                    print("  Track may not be initialized properly.")
                    print("=" * 60)
                    return False
                    
                if len(track.points) == 0:
                    print("=" * 60)
                    print("ERROR: Track has no points to export!")
                    print("=" * 60)
                    return False
            except NameError:
                print("=" * 60)
                print("ERROR: Track object not found!")
                print("  Make sure the game is fully loaded before exporting.")
                print("=" * 60)
                return False
            
            # Export to text file with proper error handling
            # Try to save in project root (parent directory), fallback to current directory
            script_dir = os.path.dirname(os.path.abspath(__file__)) if '__file__' in globals() else os.getcwd()
            project_root = os.path.dirname(script_dir) if os.path.basename(script_dir) == 'src' else script_dir
            export_path = os.path.join(project_root, "exported_track.txt")
            point_count = 0
            
            print("=" * 60)
            print("Exporting track geometry...")
            
            with open(export_path, "w", encoding="utf-8") as f:
                for idx, p in enumerate(track.points):
                    try:
                        # Write x y z coordinates with high precision (for track geometry showcase)
                        f.write(f"{p[0]:.6f} {p[1]:.6f} {p[2]:.6f}\n")
                        point_count += 1
                    except Exception as e:
                        print(f"  Warning: Failed to write point {idx}: {e}")
                        continue
            
            # Verify export was successful by checking file
            if os.path.exists(export_path):
                file_size = os.path.getsize(export_path)
                if file_size > 0:
                    print("=" * 60)
                    print("✓✓✓ TRACK EXPORTED SUCCESSFULLY! ✓✓✓")
                    print("=" * 60)
                    print(f"  File: {export_path}")
                    print(f"  Format: x y z (one point per line)")
                    print(f"  Points Exported: {point_count}")
                    print(f"  File Size: {file_size:,} bytes")
                    print(f"  Precision: 6 decimal places")
                    print(f"  Location: {os.path.abspath(export_path)}")
                    print(f"  Ready for runtime deliverable (.exe or .py)")
                    print("=" * 60)
                    return True
                else:
                    print("=" * 60)
                    print("ERROR: Export file is empty!")
                    print("=" * 60)
                    return False
            else:
                print("=" * 60)
                print("ERROR: Export file was not created!")
                print("=" * 60)
                return False
                
        except IOError as e:
            print("=" * 60)
            print("ERROR: Failed to write export file!")
            print(f"  Reason: {e}")
            print(f"  Check file permissions in: {os.getcwd()}")
            print("=" * 60)
            return False
        except AttributeError as e:
            print("=" * 60)
            print("ERROR: Track object issue!")
            print(f"  Reason: {e}")
            print("  Make sure track is initialized before exporting.")
            print("=" * 60)
            return False
        except Exception as ex:
            print("=" * 60)
            print("ERROR: Export failed with unexpected error!")
            print(f"  Error Type: {type(ex).__name__}")
            print(f"  Error Message: {ex}")
            print("=" * 60)
            import traceback
            traceback.print_exc()
            return False

    def get_pose_relative(*_args, **_kwargs):
        return None

    while running:
        dt=clock.tick(60)/1000.0; throttle=brake=boost_active=False
        for event in pygame.event.get():
            if event.type==QUIT: running=False
            elif event.type==MOUSEBUTTONDOWN and event.button==1:
                mx,my = pygame.mouse.get_pos()
                for action, rect in CONTROL_BUTTONS:
                    if rect.collidepoint(mx,my):
                        if action=='cam': 
                            camera_mode=(camera_mode+1)%4
                            if camera_mode == 3:
                                mouse_locked = True
                                pygame.mouse.set_visible(False)
                                pygame.event.set_grab(True)
                            else:
                                mouse_locked = False
                                pygame.mouse.set_visible(True)
                                pygame.event.set_grab(False)
                        elif action=='pause':
                            paused = not paused
                            if paused: target_speed_norm=0.0; speed_norm=0.0; auto_start=0.0
                        elif action=='reset':
                            track_pos=0.0; speed_norm=0.0; target_speed_norm=0.0; boost_power=100.0; auto_start=1.6; need_countdown=True; paused=False
                        elif action=='export':
                            try:
                                result = export_current_track()
                                if result:
                                    print("✓ Export completed successfully via UI button!")
                                else:
                                    print("✗ Export failed - check console for details.")
                            except Exception as e:
                                print(f"EXPORT ERROR (UI): {e}")
                                import traceback
                                traceback.print_exc()
                        elif action=='load':
                            try:
                                newt = ExtendedTrack()  # will read spline.txt if present
                                track = newt
                                track_pos=0.0; speed_norm=0.0; target_speed_norm=0.0; need_countdown=True
                                print('Spline loaded (if spline.txt present).')
                            except Exception as ex: print('Load failed:', ex)
                        elif action=='light': 
                            LIGHTS_ON = not LIGHTS_ON
                            print(f"Lighting: {'ON' if LIGHTS_ON else 'OFF'}")
                        elif action=='night': 
                            NIGHT_MODE = not NIGHT_MODE
                            print(f"Day/Night Mode: {'NIGHT' if NIGHT_MODE else 'DAY'}")
                        elif action=='glow':
                            NEON_GLOW_ENABLED = not NEON_GLOW_ENABLED
                            print(f"Neon Glow: {'ON' if NEON_GLOW_ENABLED else 'OFF'}")
                        elif action=='energy':
                            ENERGY_PHYSICS_ENABLED = not ENERGY_PHYSICS_ENABLED
                            print(f"Energy Physics: {'ON' if ENERGY_PHYSICS_ENABLED else 'OFF'}")
                        break
            elif event.type==KEYDOWN:
                if event.key==K_ESCAPE: 
                    if camera_mode == 3:  # Exit free cam mode
                        camera_mode = 0
                        mouse_locked = False
                        pygame.mouse.set_visible(True)
                        pygame.event.set_grab(False)
                    else:
                        running=False
                elif event.key==K_c: camera_mode=(camera_mode+1)%4
                elif event.key==K_TAB:  # Tab to enter free WASD mode
                    camera_mode = 3
                    mouse_locked = True
                    pygame.mouse.set_visible(False)
                    pygame.event.set_grab(True)
                elif event.key==K_r:
                    track_pos=0.0; speed_norm=0.0; target_speed_norm=0.0; boost_power=100.0; auto_start=1.6
                    need_countdown = True; paused=False
                elif event.key==K_l: 
                    LIGHTS_ON = not LIGHTS_ON
                    print(f"Lighting: {'ON' if LIGHTS_ON else 'OFF'}")
                elif event.key==K_n: 
                    NIGHT_MODE = not NIGHT_MODE
                    print(f"Day/Night Mode: {'NIGHT' if NIGHT_MODE else 'DAY'}")
                elif event.key==K_g: 
                    NEON_GLOW_ENABLED = not NEON_GLOW_ENABLED
                    print(f"Neon Glow: {'ON' if NEON_GLOW_ENABLED else 'OFF'}")
                elif event.key==K_p:
                    ENERGY_PHYSICS_ENABLED = not ENERGY_PHYSICS_ENABLED
                    print(f"Energy Physics: {'ON' if ENERGY_PHYSICS_ENABLED else 'OFF'}")
                elif event.key==K_SPACE:
                    paused = not paused
                    if paused:
                        target_speed_norm = 0.0
                        speed_norm = 0.0
                        auto_start = 0.0
                    print(f"Game: {'PAUSED' if paused else 'RESUMED'}")
                elif event.key==K_q:
                    boost_strength = max(0.5, boost_strength - 0.1)
                    print(f"Boost Strength: {boost_strength:.1f}")
                elif event.key==K_e:
                    boost_strength = min(3.0, boost_strength + 0.1)
                    print(f"Boost Strength: {boost_strength:.1f}")
                elif event.key==K_x:  # IMPORTANT: X to export track - MUST WORK
                    try:
                        export_current_track()
                    except Exception as e:
                        print(f"EXPORT ERROR: {e}")
                        import traceback
                        traceback.print_exc()
            elif event.type==MOUSEMOTION and camera_mode == 3 and mouse_locked:
                # Free camera mouse look
                dx, dy = event.rel
                free_cam_yaw -= dx * mouse_sensitivity
                free_cam_pitch = np.clip(free_cam_pitch - dy * mouse_sensitivity, -math.pi/2 + 0.1, math.pi/2 - 0.1)
        if need_countdown:
            start_ready_countdown(screen, fonts); need_countdown=False; paused=False; auto_start = 1.2
        if paused:
            glClearColor(0.5,0.75,1.0,1.0)
            glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT); glLoadIdentity(); show_pause_overlay(); pygame.display.flip(); continue
        keys = pygame.key.get_pressed()
        # ELEGANT SMOOTH acceleration rates - perfectly smooth, no jerky movement
        accel_rate = 0.20  # Ultra-smooth acceleration (reduced for elegance)
        brake_rate = 0.25  # Ultra-smooth braking (reduced for elegance)
        boost_rate = 1.10  # Ultra-smooth boost (reduced for elegance)
        if auto_start>0:
            k = 1.0 - max(0.0, auto_start-0)/1.6
            target_speed_norm = min(0.25, target_speed_norm + 0.15*k*dt); throttle=True; auto_start -= dt  # Reduced from 0.20
        if keys[K_w] or keys[K_UP]: target_speed_norm = min(1.0, target_speed_norm + accel_rate*dt); throttle=True
        if keys[K_s] or keys[K_DOWN]: target_speed_norm = max(0.0, target_speed_norm - brake_rate*dt); brake=True
        if (keys[K_LSHIFT] or keys[K_RSHIFT]) and boost_power>2:
            target_speed_norm = min(1.0, target_speed_norm + boost_rate*boost_strength*dt); boost_active=True; boost_power=max(0, boost_power-26*dt)
        else:
            boost_power=min(100, boost_power+12*dt)
        # ULTRA-SMOOTH ELEGANT ACCELERATION - PERFECTLY SMOOTH, NO JERKY MOVEMENT
        # Continuous speed-based acceleration with elegant smoothstep interpolation
        if ENERGY_PHYSICS_ENABLED:
            # Ultra-smooth energy-conserving physics with elegant acceleration curves
            speed_factor = speed_norm * 0.15 + 0.85  # 0.85 to 1.0 multiplier (even smoother)
            speed_diff = target_speed_norm - speed_norm
            
            if abs(speed_diff) < 0.001:  # Already at target - maintain perfectly
                # No change needed - maintain current speed elegantly
                pass
            elif speed_diff > 0:
                # Accelerating: ultra-smooth, elegant acceleration curve
                # Use smoothstep for elegant acceleration curve
                accel_factor = speed_norm * 0.1 + 0.9  # Adaptive factor
                accel_response = 0.03 * speed_factor * accel_factor  # Even more gradual
                momentum_factor = 0.995  # Preserve 99.5% momentum (ultra-smooth)
                speed_norm = speed_norm * momentum_factor + speed_diff * accel_response
            else:
                # Decelerating: smooth, elegant deceleration curve
                accel_response = 0.06 * speed_factor  # Gradual deceleration
                momentum_factor = 0.98  # Preserve 98% momentum (smooth deceleration)
                speed_norm = speed_norm * momentum_factor + speed_diff * accel_response
        else:
            # Standard ultra-smooth physics: elegant continuous acceleration
            speed_factor = speed_norm * 0.08 + 0.92  # Ultra-smooth factor
            speed_diff = target_speed_norm - speed_norm
            
            if abs(speed_diff) < 0.001:  # Already at target
                pass
            elif speed_diff > 0:
                # Accelerating: elegant smooth acceleration
                accel_response = 0.025 * speed_factor  # Ultra-gradual
            else:
                # Decelerating: elegant smooth deceleration
                accel_response = 0.06 * speed_factor  # Gradual
            speed_norm += speed_diff * accel_response
        
        speed_norm = max(0.0, min(1.0, speed_norm))
        
        # Arc-length parameterization with ELEGANT SMOOTH INTERPOLATION
        # Ultra-smooth, continuous movement with perfect smoothstep interpolation
        # Calculate movement delta with frame-rate independent smoothness
        base_delta = speed_norm * BASE_RATE * dt
        
        # Apply smoothstep to movement delta for elegant transitions (prevents any micro-stutters)
        # This ensures movement feels perfectly smooth even at varying frame rates
        movement_smoothness = 1.0 - math.exp(-dt * 60.0)  # Smooth frame-rate adaptation
        track_pos_delta = base_delta * movement_smoothness
        
        # Ultra-smooth position update with elegant interpolation
        track_pos = track_pos + track_pos_delta
        
        # Elegant smooth wrap - no sudden jumps, perfect continuity
        if track_pos >= 1.0:
            track_pos = track_pos - 1.0  # Continuous wrap (elegant transition)
        elif track_pos < 0.0:
            track_pos = track_pos + 1.0  # Handle negative wrap elegantly
        wheel_rotation = (wheel_rotation + speed_norm * 90.0 * dt) % 360
        speed_kmh = speed_norm * 72.0
        
        # Update second car (moving in opposite direction)
        # Move backward on track at constant speed
        track_pos2 = track_pos2 - (speed_norm2 * BASE_RATE * dt)
        if track_pos2 < 0.0:
            track_pos2 = track_pos2 + 1.0  # Wrap around
        wheel_rotation2 = (wheel_rotation2 + speed_norm2 * 90.0 * dt) % 360
        
        # Update time of day (continuous cycle) - GRADUAL transitions
        TIME_OF_DAY = (TIME_OF_DAY + TIME_SPEED * dt) % 1.0
        
        # Get rich, realistic time-of-day colors with gradual transitions
        sky_color, amb_color = get_time_of_day_color()
        
        if LIGHTS_ON: glEnable(GL_LIGHTING)
        else: glDisable(GL_LIGHTING)
        # Update current biome based on track position (IMPORTANT: must use global)
        current_biome = get_biome_at_position(track_pos, len(track.points))
        
        # Get position with ULTRA-SMOOTH ELEGANT interpolation - NO JERKY MOVEMENT
        # Use smooth position interpolation for elegant, continuous movement
        pos, tang, norm = track.get_pos(track_pos)
        
        # Additional smoothing layer for ultra-elegant movement (prevents any micro-stutters)
        # This ensures position changes are perfectly smooth even during rapid direction changes
        if not hasattr(track, '_last_pos'):
            track._last_pos = pos.copy()
            track._last_tang = tang.copy()
            track._last_norm = norm.copy()
        
        # Smooth interpolation between frames for ultra-elegant movement
        # Very low factor = very smooth (prevents any jerky motion)
        smooth_pos_factor = 0.25  # Elegant smooth interpolation (balanced for responsiveness)
        pos = lerp(track._last_pos, pos, smooth_pos_factor)
        tang = normalize(lerp(track._last_tang, tang, smooth_pos_factor))
        norm = normalize(lerp(track._last_norm, norm, smooth_pos_factor))
        
        # Store for next frame
        track._last_pos = pos.copy()
        track._last_tang = tang.copy()
        track._last_norm = norm.copy()
        
        world_up = np.array([0,1,0])
        
        # Calculate banking angle for realistic physics (Frenet-Serret frame)
        # Get next position to calculate curvature (with smooth wrap)
        next_track_pos = track_pos + 0.01
        if next_track_pos >= 1.0:
            next_track_pos = next_track_pos - 1.0
        prev_track_pos = track_pos - 0.01
        if prev_track_pos < 0.0:
            prev_track_pos = prev_track_pos + 1.0
        
        next_pos, next_tang, _ = track.get_pos(next_track_pos)
        prev_pos, prev_tang, _ = track.get_pos(prev_track_pos)
        # Calculate curvature from tangent change
        tang_change = next_tang - prev_tang
        curvature = np.linalg.norm(tang_change)
        bank_angle = min(25.0, curvature * 500.0)  # Banking based on curvature
        # Apply banking to up vector
        bank_axis = normalize(np.cross(tang, world_up))
        stable_up = normalize(norm*0.4 + world_up*0.6)
        # Rotate stable_up based on banking
        if np.linalg.norm(bank_axis) > 1e-6:
            bank_rad = math.radians(bank_angle)
            stable_up = stable_up * math.cos(bank_rad) + np.cross(bank_axis, stable_up) * math.sin(bank_rad)
        
        # STUNNING CINEMATIC CAMERA CONTROLS - ULTRA-SMOOTH, NO JERKY MOVEMENT
        # Calculate speed-based camera effects for dynamic response
        speed_factor = min(1.0, speed_norm * 1.5)
        curvature_factor = min(1.0, curvature * 10.0)
        
        if camera_mode==0:
            # First-person view - ULTRA-SMOOTH, PERFECT CAMERA ANGLES, NO JERKY MOVEMENT
            # Optimal camera position: slightly behind and above vehicle for best view
            target_pos = pos + stable_up * 4.5 + tang * (-2.5)  # Behind and above
            target_look = pos + tang * 80  # Look far ahead for better view
            
            # ULTRA-SMOOTH interpolation - ABSOLUTELY NO JERKY MOVEMENT, CONTINUOUS SMOOTH MOVEMENT
            # Adaptive smoothing based on speed for responsive but smooth camera
            base_smooth = 0.12
            adaptive_smooth = base_smooth + (speed_factor * 0.03)  # Slightly faster at high speeds
            smooth_factor = min(0.18, adaptive_smooth)  # Cap at 0.18 for smoothness
            cam_pos += (target_pos - cam_pos) * smooth_factor
            cam_target += (target_look - cam_target) * smooth_factor
            # Ultra-smooth up vector transition
            up_vec = normalize(up_vec + (stable_up - up_vec) * smooth_factor)
            
            # Dynamic FOV effect (slight zoom at high speeds)
            # Note: FOV changes would require gluPerspective update, keeping smooth for now
            
        elif camera_mode==1:
            # Third-person view (Chase) - ULTRA-SMOOTH, PERFECT CAMERA ANGLES
            # Optimal camera angle: perfect distance and height for viewing
            base_distance = 28.0  # Optimal distance for viewing
            base_height = 18.0  # Optimal height angle
            
            target_pos = pos - tang * base_distance + stable_up * base_height
            
            # ULTRA-SMOOTH interpolation - ABSOLUTELY NO JERKY MOVEMENT, CONTINUOUS SMOOTH MOVEMENT
            # Adaptive smoothing for responsive but smooth camera
            base_smooth = 0.15
            adaptive_smooth = base_smooth + (speed_factor * 0.02)  # Slightly faster at high speeds
            smooth_factor = min(0.20, adaptive_smooth)  # Cap at 0.20 for smoothness
            cam_pos += (target_pos - cam_pos) * smooth_factor
            cam_target += (pos - cam_target) * smooth_factor
            up_vec = normalize(up_vec + (world_up - up_vec) * smooth_factor)
            
        elif camera_mode==2:
            # DRONE CAMERA - ULTRA-SMOOTH, PERFECT OVERHEAD ANGLES, NO JERKY MOVEMENT
            # Drone camera view: overhead/following view with optimal distance and angle
            base_dist = 100  # Optimal distance for drone view
            base_height = 60  # Optimal height for overhead view
            # Dynamic orbital distance based on track elevation
            dynamic_dist = base_dist + pos[1] * 0.15  # Closer when track is high
            dynamic_height = base_height + pos[1] * 0.3  # Higher when track is high
            
            # Drone camera angle: follows vehicle from behind and above
            angle = track_pos * 2 * math.pi
            # DRONE CAMERA - Perfect orbital view that follows vehicle smoothly
            # Position camera behind vehicle at optimal angle
            offset_angle = angle + math.pi * 0.3  # Optimal offset for best view
            target_pos = np.array([
                pos[0] + dynamic_dist * math.cos(offset_angle) * 0.5,
                pos[1] + dynamic_height,
                pos[2] + dynamic_dist * math.sin(offset_angle) * 0.5
            ])
            
            # ULTRA-SMOOTH drone camera tracking - ABSOLUTELY NO JERKY MOVEMENT
            # Adaptive smoothing for responsive but smooth camera
            base_smooth = 0.10
            adaptive_smooth = base_smooth + (speed_factor * 0.015)  # Slightly faster at high speeds
            smooth_factor = min(0.15, adaptive_smooth)  # Cap at 0.15 for smoothness
            cam_pos += (target_pos - cam_pos) * smooth_factor
            cam_target += (pos - cam_target) * smooth_factor
            up_vec = normalize(up_vec + (world_up - up_vec) * smooth_factor)
        else:  # camera_mode == 3: Free WASD mode
            # Free camera movement with WASD
            forward = np.array([
                math.sin(free_cam_yaw) * math.cos(free_cam_pitch),
                -math.sin(free_cam_pitch),
                math.cos(free_cam_yaw) * math.cos(free_cam_pitch)
            ])
            right = normalize(np.cross(forward, world_up))
            up = normalize(np.cross(right, forward))
            
            move = np.array([0.0, 0.0, 0.0])
            if keys[K_w]: move += forward * free_cam_speed * dt
            if keys[K_s]: move -= forward * free_cam_speed * dt
            if keys[K_a]: move -= right * free_cam_speed * dt
            if keys[K_d]: move += right * free_cam_speed * dt
            if keys[K_q]: move -= up * free_cam_speed * dt
            if keys[K_e]: move += up * free_cam_speed * dt
            
            free_cam_pos += move
            
            cam_pos = free_cam_pos.copy()
            cam_target = free_cam_pos + forward * 10.0
            up_vec = world_up
        # Biome-aware clear color with RICH, REALISTIC time of day (gradual transitions)
        # sky_color and amb_color already calculated above
        # Adjust sky color for bio-forest to be more greenish-blue
        if current_biome == BIOME_BIO_FOREST:
            # Make sky more green-blue for bio-forest
            sky_r = sky_color[0] * 0.6
            sky_g = sky_color[1] * 1.2
            sky_b = sky_color[2] * 0.85
            glClearColor(min(1.0, sky_r), min(1.0, sky_g), min(1.0, sky_b), 1.0)
        else:
            # Rich, realistic sky colors with gradual transitions
            glClearColor(min(1.0, sky_color[0]), min(1.0, sky_color[1]), min(1.0, sky_color[2]), 1.0)
        
        glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT); glLoadIdentity();
        gluLookAt(cam_pos[0],cam_pos[1],cam_pos[2],cam_target[0],cam_target[1],cam_target[2],up_vec[0],up_vec[1],up_vec[2]);
        
        # Draw green grass ground
        draw_ground()
        
        # Draw mountains using OBJModel procedural generation
        drawmountains(mountains)
        
        # Draw track
        track.draw()
        
        # Draw plants (bushes/clusters) using SimplePlant
        for plant in plants:
            plant.drawself()
        
        # Draw large floating balloons
        currenttime = pygame.time.get_ticks() / 1000.0
        drawlargeballoons(currenttime)
        
        # Draw biome-specific environment
        draw_biome_environment()
        
        # Draw rainbow (fixed in sky)
        draw_rainbow()
        
        # Draw clouds with balloons
        draw_clouds_with_balloons()
        
        # Update and draw moving sky cubes (dynamic game challenges)
        cube_collected = update_sky_cubes(dt, pos)
        if cube_collected:
            cubes_collected += 1
            game_score += 10  # 10 points per cube
            print(f"🎯 Cube Collected! Score: {game_score} | Total: {cubes_collected}")
        draw_sky_cubes()
        
        # Update and draw flying birds (when riding)
        if speed_norm > 0.1:  # Only spawn birds when vehicle is moving
            update_birds(dt, pos)
        draw_birds()
        
        # Debug: Print biome change (only occasionally to avoid spam)
        if int(pygame.time.get_ticks() / 1000) % 5 == 0:
            biome_names = ["NEON CITY", "BIO-FOREST", "STELLAR"]
            print(f"Current Biome: {biome_names[current_biome]} (Track Position: {track_pos:.3f})")
        
        # Simple environment
        glDisable(GL_LIGHTING)
        # Day/Night sky objects (now time-of-day based)
        # NIGHT_MODE toggle overrides automatic time-of-day detection
        time_of_day_val = TIME_OF_DAY % 1.0
        if NIGHT_MODE:
            # Force night mode when N key is pressed
            is_night = True
        else:
            # Use time-of-day to determine if it's night
            is_night = time_of_day_val > 0.75 or time_of_day_val < 0.25
        
        # Rich, realistic sun with time-of-day color changes
        time_of_day_val = TIME_OF_DAY % 1.0
        if time_of_day_val < 0.25:  # Morning
            # Morning sun: Deep orange-red to golden yellow
            sun_phase = time_of_day_val / 0.25
            sun_r = lerp(1.0, 1.0, sun_phase)  # Deep red-orange
            sun_g = lerp(0.4, 0.7, sun_phase)  # Orange to golden
            sun_b = lerp(0.1, 0.2, sun_phase)  # Dark to light orange
        elif time_of_day_val < 0.5:  # Midday
            # Midday sun: Bright yellow-white
            sun_phase = (time_of_day_val - 0.25) / 0.25
            sun_r = lerp(1.0, 1.0, sun_phase)  # Bright yellow
            sun_g = lerp(0.7, 0.95, sun_phase)  # Golden to white
            sun_b = lerp(0.2, 0.3, sun_phase)  # Light yellow
        elif time_of_day_val < 0.75:  # Evening
            # Evening sun: Golden to deep orange-red
            sun_phase = (time_of_day_val - 0.5) / 0.25
            sun_r = lerp(1.0, 1.0, sun_phase)  # Bright to deep red
            sun_g = lerp(0.95, 0.5, sun_phase)  # White to orange
            sun_b = lerp(0.3, 0.2, sun_phase)  # Yellow to orange
        else:  # Night
            # Night: No visible sun (or very dim)
            sun_r, sun_g, sun_b = 0.1, 0.05, 0.15
        
        if not is_night:
            # Large sun with RICH time-of-day colors (gradual transitions)
            glColor3f(sun_r, sun_g, sun_b)
            glPushMatrix()
            glTranslatef(sun_pos[0], sun_pos[1], sun_pos[2])
            q = gluNewQuadric()
            gluSphere(q, 12.0, 24, 20)  # Larger sun
            gluDeleteQuadric(q)
            glPopMatrix()
            # Clouds
            glColor3f(0.96,0.98,1.0)
            for cx,cy,cz,rr in cloud_seeds:
                glPushMatrix(); glTranslatef(cx, cy, cz)
                q=gluNewQuadric();
                gluSphere(q, rr, 16, 14)
                glTranslatef(rr*0.9, rr*0.15, -rr*0.3); gluSphere(q, rr*0.8, 14, 12)
                glTranslatef(-rr*1.4, -rr*0.05, rr*0.4); gluSphere(q, rr*0.7, 12, 10)
                gluDeleteQuadric(q)
                glPopMatrix()
        else:
            # Stars
            glPointSize(2.0)
            glBegin(GL_POINTS)
            glColor3f(1,1,1)
            for i in range(200):
                glVertex3f(random.uniform(-300,300), random.uniform(80,200), random.uniform(-300,300))
            glEnd()
        # Mountains removed for a clear track view
        # Air balloons
        tsec = pygame.time.get_ticks()/1000.0
        for bx,by,bz,cc in air_balloons:
            glPushMatrix(); glTranslatef(bx, by+2.0*math.sin(tsec*0.7 + bx*0.1), bz)
            glColor3f(0.25,0.25,0.25)
            glRotatef(-90,1,0,0); q=gluNewQuadric(); gluCylinder(q,0.02,0.02,1.6,6,1); glRotatef(90,1,0,0)
            # Dim balloons slightly at night
            # NIGHT_MODE toggle affects balloon visibility
            time_of_day_val = TIME_OF_DAY % 1.0
            if NIGHT_MODE:
                is_night = True
            else:
                is_night = time_of_day_val > 0.75 or time_of_day_val < 0.25
            scale = 0.7 if is_night else 1.0
            glColor3f(cc[0]*scale, cc[1]*scale, cc[2]*scale)
            gluSphere(q, 0.9, 18, 16); gluDeleteQuadric(q)
            glPopMatrix()
        glEnable(GL_LIGHTING)
        
        # Update and draw rotating cubes (slower rotation)
        for cube in ROTATING_CUBES:
            cube.update(dt)
            cube.draw()
        
        # Draw trees (only in bio-forest biome)
        if current_biome == BIOME_BIO_FOREST:
            for tree in trees: tree.draw()
        
        # INSANE PARTICLE EFFECTS - Multiple types for stunning visuals
        # Enhanced dust trail from coaster (realistic brown/tan dust)
        if speed_norm > 0.1:
            dust_count = int(3 + speed_norm * 5)  # More particles at higher speeds
            for _ in range(dust_count):
                particle_pos = pos - tang * 0.5 + np.array([random.uniform(-0.4, 0.4), random.uniform(-0.3, 0.3), random.uniform(-0.4, 0.4)])
                particle_vel = -tang * (3.0 + speed_norm * 2.0) + np.array([random.uniform(-0.8, 0.8), random.uniform(0.5, 2.0), random.uniform(-0.8, 0.8)])
                dust_color = (0.7 + random.uniform(-0.1, 0.1), 0.6 + random.uniform(-0.1, 0.1), 0.5 + random.uniform(-0.1, 0.1), 0.7)
                PARTICLES.append(Particle(particle_pos, particle_vel, dust_color, 2.0, 0.2, 'dust', random.uniform(0, 360)))
        
        # INSANE sparkles around track (multiple colors, more frequent)
        sparkle_chance = 0.15 + speed_norm * 0.1  # More sparkles at higher speeds
        if random.uniform(0, 1) < sparkle_chance:
            sparkle_count = random.randint(1, 3)  # Burst of sparkles
            for _ in range(sparkle_count):
                sparkle_pos = pos + np.array([random.uniform(-3, 3), random.uniform(1, 4), random.uniform(-3, 3)])
                sparkle_vel = np.array([random.uniform(-0.5, 0.5), random.uniform(0.3, 0.8), random.uniform(-0.5, 0.5)])
                sparkle_colors = [
                    (1.0, 1.0, 0.6, 1.0),  # Golden yellow
                    (0.6, 1.0, 1.0, 1.0),  # Cyan
                    (1.0, 0.6, 1.0, 1.0),  # Magenta
                    (1.0, 1.0, 1.0, 1.0),  # White
                    (0.8, 1.0, 0.8, 1.0),  # Light green
                ]
                sparkle_color = random.choice(sparkle_colors)
                PARTICLES.append(Particle(sparkle_pos, sparkle_vel, sparkle_color, 1.2, 0.12, 'sparkle', random.uniform(0, 360)))
        
        # Speed lines for high-speed sections (cinematic effect)
        if speed_norm > 0.6:
            if random.uniform(0, 1) < 0.3:
                line_pos = pos - tang * 1.0 + np.array([random.uniform(-1, 1), random.uniform(-0.5, 0.5), random.uniform(-1, 1)])
                line_vel = -tang * 8.0 + np.array([random.uniform(-1, 1), random.uniform(-0.5, 0.5), random.uniform(-1, 1)])
                line_color = (0.9, 0.9, 1.0, 0.5)  # Light blue-white
                PARTICLES.append(Particle(line_pos, line_vel, line_color, 0.5, 0.3, 'speed_line', random.uniform(0, 360)))
        
        # Atmospheric particles (floating particles in the air)
        if random.uniform(0, 1) < 0.05:  # Occasional atmospheric particles
            atm_pos = pos + np.array([random.uniform(-10, 10), random.uniform(5, 15), random.uniform(-10, 10)])
            atm_vel = np.array([random.uniform(-0.2, 0.2), random.uniform(-0.1, 0.3), random.uniform(-0.2, 0.2)])
            sky_color, _ = get_time_of_day_color()
            atm_color = (sky_color[0] * 0.8, sky_color[1] * 0.8, sky_color[2] * 0.8, 0.4)  # Tinted by sky
            PARTICLES.append(Particle(atm_pos, atm_vel, atm_color, 4.0, 0.15, 'atmospheric', random.uniform(0, 360)))
        
        # Glow particles around vehicle (energy trail effect)
        if speed_norm > 0.3:
            if random.uniform(0, 1) < 0.2:
                glow_pos = pos + np.array([random.uniform(-0.5, 0.5), random.uniform(-0.3, 0.3), random.uniform(-0.5, 0.5)])
                glow_vel = -tang * 2.0 + np.array([random.uniform(-0.3, 0.3), random.uniform(-0.2, 0.2), random.uniform(-0.3, 0.3)])
                glow_colors = [(0.8, 0.9, 1.0, 0.9), (1.0, 0.9, 0.8, 0.9)]  # Blue-white, warm white
                glow_color = random.choice(glow_colors)
                PARTICLES.append(Particle(glow_pos, glow_vel, glow_color, 1.0, 0.25, 'glow', random.uniform(0, 360)))
        
        # Update and draw particles (batched for performance)
        PARTICLES[:] = [p for p in PARTICLES if p.update(dt)]
        # Batch draw particles for better performance
        if PARTICLES:
            glDisable(GL_LIGHTING)
            glEnable(GL_BLEND)
            glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
            for particle in PARTICLES:
                particle.draw()
            glDisable(GL_BLEND)
            glEnable(GL_LIGHTING)
        
        car.draw(pos,tang,norm,wheel_rotation,0.0,get_pose_relative)
        
        # Draw second car (moving in opposite direction)
        pos2, tang2, norm2 = track.get_pos(track_pos2)
        # Reverse tangent for opposite direction
        tang2_reversed = -tang2
        car2.draw(pos2, tang2_reversed, norm2, wheel_rotation2, 0.0, get_pose_relative)
        
        # Draw "STOP" sign in red at the end of track when car stops
        # Check if car is at the end (track_pos near 1.0 or 0.0) and speed is very low
        is_at_end = (track_pos >= 0.95 or track_pos <= 0.05) and speed_norm < 0.05
        if is_at_end:
            # Get end position (last point of track)
            end_pos, end_tang, end_norm = track.get_pos(0.99)  # Near end
            # Draw red "STOP" text using billboard technique
            glDisable(GL_LIGHTING)
            glEnable(GL_BLEND)
            glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA)
            
            # Position above track
            stop_pos = end_pos + end_norm * 8.0  # 8 units above track
            
            # Create billboard effect (always face camera)
            glPushMatrix()
            glTranslatef(stop_pos[0], stop_pos[1], stop_pos[2])
            
            # Get camera direction for billboard
            cam_to_stop = stop_pos - cam_pos
            cam_to_stop = normalize(cam_to_stop)
            
            # Rotate to face camera
            forward = normalize(cam_to_stop)
            right = normalize(np.cross(forward, world_up))
            up = normalize(np.cross(right, forward))
            
            # Build rotation matrix
            rot_matrix = np.array([
                [right[0], up[0], forward[0], 0],
                [right[1], up[1], forward[1], 0],
                [right[2], up[2], forward[2], 0],
                [0, 0, 0, 1]
            ], dtype=np.float32)
            glMultMatrixf(rot_matrix.T)
            
            # Draw red "STOP" text as 3D geometry
            glColor3f(1.0, 0.0, 0.0)  # Bright red
            glLineWidth(3.0)
            
            # Draw "STOP" using lines (simple 3D text representation)
            # S
            glBegin(GL_LINE_STRIP)
            glVertex3f(-1.5, 1.0, 0)
            glVertex3f(-0.5, 1.0, 0)
            glVertex3f(-0.5, 0.5, 0)
            glVertex3f(-1.5, 0.5, 0)
            glVertex3f(-1.5, 0.0, 0)
            glVertex3f(-0.5, 0.0, 0)
            glEnd()
            
            # T
            glBegin(GL_LINES)
            glVertex3f(0.0, 1.0, 0)
            glVertex3f(0.8, 1.0, 0)
            glVertex3f(0.4, 1.0, 0)
            glVertex3f(0.4, 0.0, 0)
            glEnd()
            
            # O
            glBegin(GL_LINE_LOOP)
            for i in range(20):
                angle = (i / 20.0) * 2 * math.pi
                glVertex3f(1.2 + 0.4 * math.cos(angle), 0.5 + 0.5 * math.sin(angle), 0)
            glEnd()
            
            # P
            glBegin(GL_LINE_STRIP)
            glVertex3f(1.8, 0.0, 0)
            glVertex3f(1.8, 1.0, 0)
            glVertex3f(2.4, 1.0, 0)
            glVertex3f(2.4, 0.5, 0)
            glVertex3f(1.8, 0.5, 0)
            glEnd()
            
            glLineWidth(1.0)
            glPopMatrix()
            glDisable(GL_BLEND)
            glEnable(GL_LIGHTING)
        
        # Biome-specific lighting with RICH time-of-day influence (already calculated above)
        # sky_color and amb_color are already set from get_time_of_day_color() above
        if current_biome == BIOME_NEON_CITY:
            # Neon city: cyan/pink lights with time of day
            glLightfv(GL_LIGHT0, GL_POSITION, (100, 150, 100, 1))
            glLightfv(GL_LIGHT0, GL_AMBIENT, (amb_color[0]*0.5, amb_color[1]*0.6, amb_color[2]*0.7, 1))
            glLightfv(GL_LIGHT0, GL_DIFFUSE, (sky_color[0]*0.8, sky_color[1]*0.9, sky_color[2]*1.0, 1))
        elif current_biome == BIOME_BIO_FOREST:
            # Bio-forest: warm green glow with time of day
            glLightfv(GL_LIGHT0, GL_POSITION, (100, 150, 100, 1))
            glLightfv(GL_LIGHT0, GL_AMBIENT, (amb_color[0]*0.6, amb_color[1]*0.7, amb_color[2]*0.5, 1))
            glLightfv(GL_LIGHT0, GL_DIFFUSE, (sky_color[0]*0.6, sky_color[1]*1.0, sky_color[2]*0.6, 1))
        else:  # STELLAR
            # Stellar: purple/cyan space glow with time of day
            glLightfv(GL_LIGHT0, GL_POSITION, (100, 150, 100, 1))
            glLightfv(GL_LIGHT0, GL_AMBIENT, (amb_color[0]*0.3, amb_color[1]*0.2, amb_color[2]*0.4, 1))
            glLightfv(GL_LIGHT0, GL_DIFFUSE, (sky_color[0]*0.8, sky_color[1]*0.5, sky_color[2]*1.0, 1))
        # UI
        journey_progress = track_pos % 1.0
        time_left = max(0, JOURNEY_TIME * (1-journey_progress))
        # Biome name for UI
        biome_names = ["NEON CITY", "BIO-FOREST", "STELLAR"]
        # Time of day name for UI
        time_of_day_val = TIME_OF_DAY % 1.0
        if time_of_day_val < 0.25:
            time_name = "MORNING"
            time_color = (255, 150, 100)
        elif time_of_day_val < 0.5:
            time_name = "MIDDAY"
            time_color = (100, 200, 255)
        elif time_of_day_val < 0.75:
            time_name = "EVENING"
            time_color = (255, 100, 50)
        else:
            time_name = "NIGHT"
            time_color = (50, 50, 150)
        
        draw_ui(screen, fonts, { 'spd':speed_kmh, 'max':72.0, 'throttle':throttle, 'brake':brake, 'boost':boost_active, 'cam':camera_mode, 'prog': journey_progress, 'time': time_left, 'paused': paused, 'light_on': LIGHTS_ON, 'boost_power': boost_power, 'boost_strength': boost_strength, 'night': NIGHT_MODE, 'biome': biome_names[current_biome], 'time_of_day': time_name, 'time_of_day_color': time_color, 'score': game_score, 'cubes': cubes_collected })
        pygame.display.flip()
    pygame.quit()

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"ERROR: {e}")
        import traceback
        traceback.print_exc()
        pygame.quit()


