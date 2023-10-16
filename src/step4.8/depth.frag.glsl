varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform sampler2D tDepth;
uniform float cameraNear;
uniform float cameraFar;
uniform mat4 cameraInverseMatrix;
uniform mat4 cameraProjectionMatrix;
uniform mat4 cameraInverseProjectionMatrix;

#include <packing>
#include <common>

// float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
// 	// maps perspective depth in [ 0, 1 ] to viewZ
// 	return ( near * far ) / ( ( far - near ) * depth - far );
// }

// // NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

// float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
// 	// -near maps to 0; -far maps to 1
// 	return ( viewZ + near ) / ( near - far );
// }


 float readDepth( sampler2D depthSampler, vec2 coord ) {
	// fragCoordZ:0.0-1.0
	float fragCoordZ = texture2D( depthSampler, coord ).x;	
	// 透视深度Z转换为摄像机坐标的Z
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar );
	return viewZToOrthographicDepth(viewZ, cameraNear, cameraFar ) * 1000.0;
	// return fragCoordZ;
	// return -viewZ;
	// return ( 1.0-viewZ - cameraNear ) / (  cameraFar -cameraNear);
}

float getDepth( const in vec2 screenPosition ) {
	#if DEPTH_PACKING == 1
		return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
	#else
		return texture2D( tDepth, screenPosition ).x;
	#endif
}

float getViewZ( const in float depth ) {
	#if PERSPECTIVE_CAMERA == 1
	return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
	#else
	return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
	#endif
}

vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
	float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
	vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
	clipPosition *= clipW; // unprojection.

	return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
}

vec3 getWorldPositionFromDepth(vec2 uv, float depth) {
  vec4 ndc = vec4(uv * 2. - 1., depth * 2. - 1., 1.);
  vec4 wp = cameraInverseMatrix * cameraInverseProjectionMatrix * ndc;
  wp.xyz /= wp.w;
  return wp.xyz;
}

void main() {
	// vec3 diffuse = texture2D( tDiffuse, vUv ).rgb;
	float depth = readDepth( tDepth, vUv );
	gl_FragColor.rgb = vec3(depth);

	// float depth = getDepth( vUv );
	// float centerViewZ = getViewZ( centerDepth );
	// vec3 viewPosition = getViewPosition( vUv, centerDepth, centerViewZ );
	//gl_FragColor.rgb = (viewPosition + 0.5) * 0.5;
	//gl_FragColor.rgb = diffuse * (1.0 - vec3( depth ));
	// gl_FragColor.rgb = diffuse;
	// gl_FragColor.a = 1.0;

  	// gl_FragColor.rgb = getWorldPositionFromDepth(vUv,depth);

}

// uniform sampler2D tDiffuse;
// uniform sampler2D tDepth;
// uniform float cameraNear;
// uniform float cameraFar;
// uniform mat4 cameraInverseProjectionMatrix;
// varying vec2 vUv;

// void main() {
//   float depth = texture2D(tDepth, vUv).r;
//   float z = cameraNear * cameraFar / ((cameraFar - cameraNear) * depth - cameraFar);
//   vec4 clipPosition = vec4(vUv * 2.0 - 1.0, z, 1.0);
//   vec4 worldPosition = cameraInverseProjectionMatrix * clipPosition;
//   worldPosition /= worldPosition.w;

//   // worldPosition现在包含了世界坐标  
//   // gl_FragColor = vec4(worldPosition.xyz * 0.5 + 0.5, 1.0);
//   vec4 c = (worldPosition+0.5)*0.5;
//   gl_FragColor = c;
  
// }