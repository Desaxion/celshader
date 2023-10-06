#version 330 core
layout(triangles) in;
layout(triangle_strip, max_vertices = 3) out;

in vec3 gNormal[3];
in vec2 gTexCoord[3];

out vec3 normal;
out vec2 TexCoord;

void main()
{




for(int i = 0; i < gl_in.length(); i++)
{
gl_Position = gl_in[i].gl_Position;
normal = gNormal[i];
TexCoord = gTexCoord[i];
EmitVertex();
}
EndPrimitive();
}