var w=Object.defineProperty;var x=(n,i,e)=>i in n?w(n,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[i]=e;var a=(n,i,e)=>(x(n,typeof i!="symbol"?i+"":i,e),e);import"./modulepreload-polyfill-3cfb730f.js";import{g as D}from"./lil-gui.module.min-a1e98589.js";import{O as P,U as C,a0 as M,W as g,V as d,$ as F,Z as b,a3 as f,Y as _,C as T,X as Z,bt as y,aK as S,bf as v,bu as L,bv as E,ba as j,aN as R,P as N,l as u,a2 as z,c as I,x as V,o as A,s as U,K as k,j as W,m as G,e as O}from"./util-bf818b98.js";import{M as K}from"./MapControls-9c73ad79.js";const H=`varying vec2 vUv;\r
uniform sampler2D tDiffuse;\r
uniform sampler2D tDepth;\r
uniform float cameraNear;\r
uniform float cameraFar;\r
uniform mat4 cameraInverseMatrix;\r
uniform mat4 cameraProjectionMatrix;\r
uniform mat4 cameraInverseProjectionMatrix;\r
\r
#include <packing>\r
#include <common>\r
\r
// float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\r
// 	// maps perspective depth in [ 0, 1 ] to viewZ\r
// 	return ( near * far ) / ( ( far - near ) * depth - far );\r
// }\r
\r
// // NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera\r
\r
// float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\r
// 	// -near maps to 0; -far maps to 1\r
// 	return ( viewZ + near ) / ( near - far );\r
// }\r
\r
\r
 float readDepth( sampler2D depthSampler, vec2 coord ) {\r
	// fragCoordZ:0.0-1.0\r
	float fragCoordZ = texture2D( depthSampler, coord ).x;	\r
	// 透视深度Z转换为摄像机坐标的Z\r
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar );\r
	return viewZToOrthographicDepth(viewZ, cameraNear, cameraFar ) * 1000.0;\r
	// return fragCoordZ;\r
	// return -viewZ;\r
	// return ( 1.0-viewZ - cameraNear ) / (  cameraFar -cameraNear);\r
}\r
\r
float getDepth( const in vec2 screenPosition ) {\r
	#if DEPTH_PACKING == 1\r
		return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );\r
	#else\r
		return texture2D( tDepth, screenPosition ).x;\r
	#endif\r
}\r
\r
float getViewZ( const in float depth ) {\r
	#if PERSPECTIVE_CAMERA == 1\r
	return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );\r
	#else\r
	return orthographicDepthToViewZ( depth, cameraNear, cameraFar );\r
	#endif\r
}\r
\r
vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {\r
	float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];\r
	vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );\r
	clipPosition *= clipW; // unprojection.\r
\r
	return ( cameraInverseProjectionMatrix * clipPosition ).xyz;\r
}\r
\r
vec3 getWorldPositionFromDepth(vec2 uv, float depth) {\r
  vec4 ndc = vec4(uv * 2. - 1., depth * 2. - 1., 1.);\r
  vec4 wp = cameraInverseMatrix * cameraInverseProjectionMatrix * ndc;\r
  wp.xyz /= wp.w;\r
  return wp.xyz;\r
}\r
\r
void main() {\r
	// vec3 diffuse = texture2D( tDiffuse, vUv ).rgb;\r
	float depth = readDepth( tDepth, vUv );\r
	gl_FragColor.rgb = vec3(depth);\r
\r
	// float depth = getDepth( vUv );\r
	// float centerViewZ = getViewZ( centerDepth );\r
	// vec3 viewPosition = getViewPosition( vUv, centerDepth, centerViewZ );\r
	//gl_FragColor.rgb = (viewPosition + 0.5) * 0.5;\r
	//gl_FragColor.rgb = diffuse * (1.0 - vec3( depth ));\r
	// gl_FragColor.rgb = diffuse;\r
	// gl_FragColor.a = 1.0;\r
\r
  	// gl_FragColor.rgb = getWorldPositionFromDepth(vUv,depth);\r
\r
}\r
\r
// uniform sampler2D tDiffuse;\r
// uniform sampler2D tDepth;\r
// uniform float cameraNear;\r
// uniform float cameraFar;\r
// uniform mat4 cameraInverseProjectionMatrix;\r
// varying vec2 vUv;\r
\r
// void main() {\r
//   float depth = texture2D(tDepth, vUv).r;\r
//   float z = cameraNear * cameraFar / ((cameraFar - cameraNear) * depth - cameraFar);\r
//   vec4 clipPosition = vec4(vUv * 2.0 - 1.0, z, 1.0);\r
//   vec4 worldPosition = cameraInverseProjectionMatrix * clipPosition;\r
//   worldPosition /= worldPosition.w;\r
\r
//   // worldPosition现在包含了世界坐标  \r
//   // gl_FragColor = vec4(worldPosition.xyz * 0.5 + 0.5, 1.0);\r
//   vec4 c = (worldPosition+0.5)*0.5;\r
//   gl_FragColor = c;\r
  \r
// }`;P.DEFAULT_UP.set(0,0,1);class q extends C{constructor(e,r=new d(0,3e3,0),s=new d(0,-1e3,1e4)){super();a(this,"scene");a(this,"renderer");a(this,"camera");a(this,"controls");a(this,"ambLight");a(this,"dirLight");a(this,"container");a(this,"_clock",new M);a(this,"depthRenderTarget");a(this,"depthCamera");a(this,"depthScene",new g);a(this,"depthMesh");a(this,"_fogFactor",1);this.container=e,this.renderer=this._createRenderer(),this.scene=this._createScene(),this.camera=this._createCamera(r),this.controls=this._createControls(r,this.camera,e),this.ambLight=this._createAmbLight(),this.scene.add(this.ambLight),this.dirLight=this._createDirLight(),this.scene.add(this.dirLight),this.depthMesh=this.createDepth(),this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.animate()}get fogFactor(){return this._fogFactor}set fogFactor(e){this._fogFactor=e,this.controls.dispatchEvent({type:"change",target:this.controls})}_createDirLight(){const e=new F(16777215,.5);return e.target.position.copy(this.controls.target),e.position.set(-1e3,-2e3,1e4),e}_createAmbLight(){return new b(16777215,.7)}_createControls(e,r,s){const t=new K(r,s);return t.target.copy(e),t.minDistance=.1,t.maxDistance=15e3,t.zoomSpeed=3,t.maxPolarAngle=1.2,t.enableDamping=!0,t.listenToKeyEvents(window),t.addEventListener("change",()=>{const h=Math.max(this.controls.getPolarAngle(),.1),c=Math.max(this.controls.getDistance(),.1);t.zoomSpeed=Math.max(Math.log(c),1.8),this.camera.far=Math.max(Math.min(c/h*8,5e4),10),this.camera.near=this.camera.far/1e3,this.camera.updateProjectionMatrix(),this.scene.fog instanceof f&&(this.scene.fog.density=h/(c+5)/4*this.fogFactor)}),t.saveState(),t}_createCamera(e){const r=new _(80,1,.1,5e4);return r.position.set(e.x-10,e.y-20,e.z),r}_createScene(){const r=new g;return r.background=new T(14414079),r.fog=new f(14414079,0),r}_createRenderer(){const e=new Z({antialias:!0,alpha:!0,logarithmicDepthBuffer:!1,precision:"highp",depth:!0});return e.sortObjects=!0,e.setPixelRatio(window.devicePixelRatio),e.autoClear=!1,e}resize(){const e=this.container.clientWidth,r=this.container.clientHeight;return this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,r),this.camera.aspect=e/r,this.camera.updateProjectionMatrix(),this}animate(){requestAnimationFrame(this.animate.bind(this)),this.renderer.setRenderTarget(this.depthRenderTarget),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.render(this.depthScene,this.depthCamera),this.controls.update(),this.dispatchEvent({type:"update",delta:this._clock.getDelta()})}createDepth(){const e=this.container.clientWidth,r=this.container.clientHeight,s=new y(e,r),t=new S(e,r);t.texture.minFilter=v,t.texture.magFilter=v,t.texture.generateMipmaps=!1,t.depthTexture=s,t.depthTexture.format=L,t.depthTexture.type=E,this.depthRenderTarget=t,this.depthCamera=new j(-1,1,1,-1,0,1);const h=new R({vertexShader:document.querySelector("#post-vert").textContent.trim(),fragmentShader:H,defines:{PERSPECTIVE_CAMERA:1,DEPTH_PACKING:0},uniforms:{cameraNear:{value:this.camera.near},cameraFar:{value:this.camera.far},cameraInverseMatrix:{value:this.camera.matrixWorld},cameraProjectionMatrix:{value:this.camera.projectionMatrix},cameraInverseProjectionMatrix:{value:this.camera.projectionMatrixInverse},tDiffuse:{value:t.texture},tDepth:{value:s}}}),c=new N(2,2),l=new u(c,h);return this.depthScene.add(l),this.depthScene.add(new z(this.depthCamera)),l}}const o=I(O,G),B=document.querySelector("#map"),m=o.project(86.92,27.95),p=new q(B,new d(m.x,m.y,10));p.scene.add(o);const X=(()=>{const n=new u(new V(1,.3,128,16),new A({color:3355443,shininess:30,specular:13421772,emissive:0}));return n.position.set(m.x,m.y-5,8),n.castShadow=!0,n})();o.add(X);(()=>{const n=new D;n.add(p.camera,"near",.1,100,.1).listen(),n.add(p.camera,"far",.1,1e4,.1).listen()})();U(p,o);k(o);W(o);
