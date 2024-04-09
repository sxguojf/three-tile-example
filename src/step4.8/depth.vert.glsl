
varying vec4 vWorldPosition;
varying vec2 vUv;
void main() {
    vUv = uv;
    vWorldPosition = modelMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * viewMatrix * vWorldPosition;
}