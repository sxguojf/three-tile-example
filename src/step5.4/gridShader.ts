import { DoubleSide, MeshLambertMaterial } from "three";

// 将MeshLambertMaterial的alpha通道作为高度，实现二维图片拉伸成三维
export function craetGridShader(options = { scale: 1 }) {
    const material = new MeshLambertMaterial({
        transparent: true,
        vertexColors: true,
        opacity: 0.6,
        side: DoubleSide,
        // wireframe: true,
        displacementScale: options.scale,
    });

    // 未重新计算法向量，无法实现凹凸阴影
    material.onBeforeCompile = (shader) => {
        shader.vertexShader =
            `varying vec3 vPosition;
            ` + shader.vertexShader;

        shader.vertexShader = shader.vertexShader.replace(
            "#include <fog_vertex>",
            `
                #include <fog_vertex>
                vPosition = position;
                // transformed += normalize( objectNormal ) * ( texture2D(map, vUv ).a * displacementScale + displacementBias );
            `
        );
        // console.log(shader.vertexShader);
        shader.fragmentShader =
            `varying vec3 vPosition;
            ` + shader.fragmentShader;

        shader.fragmentShader = shader.fragmentShader.replace(
            "#include <dithering_fragment>",
            `
                #include <dithering_fragment>
                float h = vPosition.z;

                // 等值线
                float step = h*20.0 ; // 分析20条等值线
                float f  = fract(step);// 小数部分
                float width = fwidth(step);// 相邻像素的差
                float aa = smoothstep(width, width/1.1, f);//两个值之间插值
                float inv = 1.0 - aa;
                if(inv<1.0){
                    gl_FragColor = vec4(0.0,0.0,0.3,1.0);
                }
            `
        );
        // console.log(shader.fragmentShader);
    };

    return material;
}
