uniform sampler2D texture;
varying vec3 vColor;
void main() {
	gl_FragColor = vec4( vColor, 1.0 );
	gl_FragColor = gl_FragColor * texture( texture, gl_PointCoord );
}