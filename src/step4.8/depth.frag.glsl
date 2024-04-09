// varying vec2 vUv;
// uniform sampler2D tDiffuse;
// uniform sampler2D tDepth;
// uniform float cameraNear;
// uniform float cameraFar;
// uniform mat4 cameraInverseMatrix;
// uniform mat4 cameraProjectionMatrix;
// uniform mat4 cameraInverseProjectionMatrix;

// #include <packing>
// #include <common>

// // float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
// // 	// maps perspective depth in [ 0, 1 ] to viewZ
// // 	return ( near * far ) / ( ( far - near ) * depth - far );
// // }

// // // NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

// // float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
// // 	// -near maps to 0; -far maps to 1
// // 	return ( viewZ + near ) / ( near - far );
// // }


//  float readDepth( sampler2D depthSampler, vec2 coord ) {
// 	// fragCoordZ:0.0-1.0
// 	float fragCoordZ = texture2D( depthSampler, coord ).x;	
// 	// 透视深度Z转换为摄像机坐标系的Z
// 	float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar );
// 	// 将摄像机坐标系的Z映射到0-1范围
// 	return viewZToOrthographicDepth(viewZ, cameraNear, cameraFar );
// }


// vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
// 	float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
// 	vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
// 	clipPosition *= clipW; // unprojection.

// 	return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
// }

// vec3 getWorldPositionFromDepth(vec2 uv, float depth) {
// 	// 取得摄像机坐标系[0,1]的ndc坐标[-1,1]
// 	vec4 ndc = vec4(uv * 2. - 1., depth * 2. - 1., 1.);
// 	// 转换为世界坐标
// 	vec4 wp =  cameraInverseMatrix *  cameraInverseProjectionMatrix * ndc;
// 	wp.xyz /= wp.w;
// 	wp.xyz /= 6378.0;
// 	return wp.xyz;
// }

// void main() {
// 	// vec3 diffuse = texture2D( tDiffuse, vUv ).rgb;
// 	float depth = readDepth( tDepth, vUv );
// 	// float depth = texture2D(tDepth, vUv ).r;	
// 	// vec3 worldPosition = getWorldPositionFromDepth(vUv,depth);
// 	// gl_FragColor.rgb = worldPosition;
// 	gl_FragColor = vec4(vec3(depth), 1.0);
// 	// gl_FragColor = vec4(worldPosition.xyz * 0.5 + 0.5, 1.0);
// }


// varying vec2 vUv;
// uniform sampler2D tDiffuse;
// uniform sampler2D tDepth;
// uniform float cameraNear;
// uniform float cameraFar;
// uniform mat4 cameraInverseMatrix;
// uniform mat4 cameraProjectionMatrix;
// uniform mat4 cameraInverseProjectionMatrix;

 uniform sampler2D tDepth;
    varying vec4 vWorldPosition;
    void main() {
      // 从深度纹理中获取深度
      float depth = texture2D(tDepth, gl_FragCoord.xy).r;
      // 根据深度反算世界坐标
      vec3 worldPosition = vWorldPosition.xyz / vWorldPosition.w;
      worldPosition = worldPosition * 2.0 * depth;
      gl_FragColor = vec4(worldPosition, 1.0);
    }