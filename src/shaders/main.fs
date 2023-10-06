#version 330 core
out vec4 FragColor;
  
in vec3 normal;
in vec2 TexCoord;

uniform sampler2D ourTexture;

void main()
{
//FragColor = vec4(normal,1.0);
   FragColor = texture(ourTexture, TexCoord);
}