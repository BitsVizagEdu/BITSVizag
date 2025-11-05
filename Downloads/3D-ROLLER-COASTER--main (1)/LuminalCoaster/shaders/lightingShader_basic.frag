#version 330 core
// LUMINAL COASTER - Basic Lighting Shader (Fragment)
// Implements Lambertian reflection: color = textureColor * max(dot(normal, lightDir), 0.0)
// Adds ambient term with dynamic hue shift based on biome color temperature

in vec3 fragPos;
in vec3 fragNormal;
in vec2 fragTexCoord;

out vec4 fragColor;

uniform sampler2D texture0;
uniform vec3 lightDir;
uniform vec3 lightColor;
uniform vec3 ambientColor;
uniform float ambientStrength;
uniform vec3 biomeColorShift;  // Dynamic hue shift based on biome

void main() {
    // Sample texture
    vec4 textureColor = texture(texture0, fragTexCoord);
    
    // Normalize normal
    vec3 normal = normalize(fragNormal);
    vec3 light = normalize(-lightDir);
    
    // Lambertian diffuse reflection
    float diff = max(dot(normal, light), 0.0);
    vec3 diffuse = diff * lightColor;
    
    // Ambient term with biome color shift
    vec3 ambient = ambientStrength * ambientColor * biomeColorShift;
    
    // Final color
    vec3 result = (ambient + diffuse) * textureColor.rgb;
    fragColor = vec4(result, textureColor.a);
}

