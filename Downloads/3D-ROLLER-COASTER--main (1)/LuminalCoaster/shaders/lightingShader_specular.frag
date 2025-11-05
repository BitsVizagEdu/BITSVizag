#version 330 core
// LUMINAL COASTER - Specular Lighting Shader (Fragment)
// Implements Blinn-Phong reflection: spec = pow(max(dot(normal, halfwayDir), 0.0), shininess)
// Environment map reflections integrated via cube mapping
// Each surface reflects biome light color (e.g., cyan glow in nebula, golden tone in desert zone)

in vec3 fragPos;
in vec3 fragNormal;
in vec2 fragTexCoord;
in vec3 fragTangent;
in vec3 fragBitangent;

out vec4 fragColor;

uniform sampler2D texture0;
uniform sampler2D normalMap;
uniform samplerCube environmentMap;
uniform vec3 lightDir;
uniform vec3 lightColor;
uniform vec3 viewPos;
uniform vec3 ambientColor;
uniform float ambientStrength;
uniform float shininess;
uniform vec3 biomeReflectionColor;  // Biome-specific reflection color

void main() {
    // Sample textures
    vec4 textureColor = texture(texture0, fragTexCoord);
    vec3 normalMapValue = texture(normalMap, fragTexCoord).rgb * 2.0 - 1.0;
    
    // Calculate TBN matrix for tangent-space normal mapping
    vec3 N = normalize(fragNormal);
    vec3 T = normalize(fragTangent);
    vec3 B = normalize(fragBitangent);
    mat3 TBN = mat3(T, B, N);
    vec3 normal = normalize(TBN * normalMapValue);
    
    // View direction
    vec3 viewDir = normalize(viewPos - fragPos);
    vec3 light = normalize(-lightDir);
    
    // Lambertian diffuse
    float diff = max(dot(normal, light), 0.0);
    vec3 diffuse = diff * lightColor;
    
    // Blinn-Phong specular
    vec3 halfwayDir = normalize(light + viewDir);
    float spec = pow(max(dot(normal, halfwayDir), 0.0), shininess);
    vec3 specular = spec * lightColor * biomeReflectionColor;
    
    // Environment map reflection
    vec3 reflectDir = reflect(-viewDir, normal);
    vec3 envColor = texture(environmentMap, reflectDir).rgb * biomeReflectionColor;
    
    // Ambient
    vec3 ambient = ambientStrength * ambientColor;
    
    // Final color with post-processing hints
    vec3 result = (ambient + diffuse) * textureColor.rgb + specular + envColor * 0.3;
    fragColor = vec4(result, textureColor.a);
}

