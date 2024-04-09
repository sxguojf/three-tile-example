// 创建一个着色器材质
const material = new THREE.ShaderMaterial({
    uniforms: {
        // depthTexture: { value: depthTexture },
        // cameraNear: { value: camera.near },
        // cameraFar: { value: camera.far },
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D depthTexture;
        uniform float cameraNear;
        uniform float cameraFar;
        varying vec2 vUv;
        void main() {
            float depth = texture2D(depthTexture, vUv).r;
            // 使用线性深度值重建世界坐标
            float z = cameraNear * cameraFar / ((cameraFar - cameraNear) * depth - cameraFar);
            gl_FragColor = vec4(vUv, z, 1.0);
        }
    `,
});
