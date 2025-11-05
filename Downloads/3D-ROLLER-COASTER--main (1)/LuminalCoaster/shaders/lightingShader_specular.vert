#version 330 core
// LUMINAL COASTER - Specular Lighting Shader (Vertex)
// Implements Blinn-Phong reflection with environment map support

layout(location = 0) in vec3 position;
layout(location = 1) in vec3 normal;
layout(location = 2) in vec2 texCoord;
layout(location = 3) in vec3 tangent;
layout(location = 4) in vec3 bitangent;

out vec3 fragPos;
out vec3 fragNormal;
out vec2 fragTexCoord;
out vec3 fragTangent;
out vec3 fragBitangent;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main() {
    fragPos = vec3(model * vec4(position, 1.0));
    fragNormal = mat3(transpose(inverse(model))) * normal;
    fragTexCoord = texCoord;
    fragTangent = mat3(transpose(inverse(model))) * tangent;
    fragBitangent = mat3(transpose(inverse(model))) * bitangent;
    
    gl_Position = projection * view * model * vec4(position, 1.0);
}

