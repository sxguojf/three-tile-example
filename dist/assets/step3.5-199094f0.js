var te=Object.defineProperty;var re=(i,t,e)=>t in i?te(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var h=(i,t,e)=>(re(i,typeof t!="symbol"?t+"":t,e),e);import"./modulepreload-polyfill-3cfb730f.js";import{l as ae,V as n,C as D,aI as ie,aJ as oe,k as E,Y as H,aK as ne,aL as j,aM as U,aN as se,ad as G,O as ce,U as le,a0 as de,$ as ue,Z as me,W as fe,a3 as he,X as ge,c as pe,ay as ve,P as xe,T as we,aO as ye,j as Ce,s as Se,m as Me,e as be,z as _e,az as B}from"./util-bf818b98.js";import{g as Le}from"./lil-gui.module.min-a1e98589.js";import{S as De}from"./Sky-92263fd6.js";import{M as Pe}from"./MapControls-9c73ad79.js";class ze extends ae{constructor(t,e={}){super(t),this.isWater=!0;const r=this,s=e.textureWidth!==void 0?e.textureWidth:512,a=e.textureHeight!==void 0?e.textureHeight:512,c=e.clipBias!==void 0?e.clipBias:0,l=e.alpha!==void 0?e.alpha:1,v=e.time!==void 0?e.time:0,x=e.waterNormals!==void 0?e.waterNormals:null,O=e.sunDirection!==void 0?e.sunDirection:new n(.70707,.70707,0),q=new D(e.sunColor!==void 0?e.sunColor:16777215),X=new D(e.waterColor!==void 0?e.waterColor:8355711),T=e.eye!==void 0?e.eye:new n(0,0,0),K=e.distortionScale!==void 0?e.distortionScale:20,J=e.side!==void 0?e.side:ie,Y=e.fog!==void 0?e.fog:!1,C=new oe,w=new n,S=new n,R=new n,b=new E,P=new n(0,0,-1),p=new G,_=new n,z=new n,L=new G,F=new E,u=new H,A=new ne(s,a),k={uniforms:j.merge([U.fog,U.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new E},sunColor:{value:new D(8355711)},sunDirection:{value:new n(.70707,.70707,0)},eye:{value:new n},waterColor:{value:new D(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <fog_fragment>
				}`},m=new se({fragmentShader:k.fragmentShader,vertexShader:k.vertexShader,uniforms:j.clone(k.uniforms),lights:!0,side:J,fog:Y});m.uniforms.mirrorSampler.value=A.texture,m.uniforms.textureMatrix.value=F,m.uniforms.alpha.value=l,m.uniforms.time.value=v,m.uniforms.normalSampler.value=x,m.uniforms.sunColor.value=q,m.uniforms.waterColor.value=X,m.uniforms.sunDirection.value=O,m.uniforms.distortionScale.value=K,m.uniforms.eye.value=T,r.material=m,r.onBeforeRender=function(d,Z,M){if(S.setFromMatrixPosition(r.matrixWorld),R.setFromMatrixPosition(M.matrixWorld),b.extractRotation(r.matrixWorld),w.set(0,0,1),w.applyMatrix4(b),_.subVectors(S,R),_.dot(w)>0)return;_.reflect(w).negate(),_.add(S),b.extractRotation(M.matrixWorld),P.set(0,0,-1),P.applyMatrix4(b),P.add(R),z.subVectors(S,P),z.reflect(w).negate(),z.add(S),u.position.copy(_),u.up.set(0,1,0),u.up.applyMatrix4(b),u.up.reflect(w),u.lookAt(z),u.far=M.far,u.updateMatrixWorld(),u.projectionMatrix.copy(M.projectionMatrix),F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),F.multiply(u.projectionMatrix),F.multiply(u.matrixWorldInverse),C.setFromNormalAndCoplanarPoint(w,S),C.applyMatrix4(u.matrixWorldInverse),p.set(C.normal.x,C.normal.y,C.normal.z,C.constant);const f=u.projectionMatrix;L.x=(Math.sign(p.x)+f.elements[8])/f.elements[0],L.y=(Math.sign(p.y)+f.elements[9])/f.elements[5],L.z=-1,L.w=(1+f.elements[10])/f.elements[14],p.multiplyScalar(2/p.dot(L)),f.elements[2]=p.x,f.elements[6]=p.y,f.elements[10]=p.z+1-c,f.elements[14]=p.w,T.setFromMatrixPosition(M.matrixWorld);const $=d.getRenderTarget(),Q=d.xr.enabled,ee=d.shadowMap.autoUpdate;r.visible=!1,d.xr.enabled=!1,d.shadowMap.autoUpdate=!1,d.setRenderTarget(A),d.state.buffers.depth.setMask(!0),d.autoClear===!1&&d.clear(),d.render(Z,u),r.visible=!0,d.xr.enabled=Q,d.shadowMap.autoUpdate=ee,d.setRenderTarget($);const N=M.viewport;N!==void 0&&d.state.viewport(N)}}}ce.DEFAULT_UP.set(0,1,0);class Fe extends le{constructor(e,r=new n(0,3e3,0),s=new n(0,-1e3,1e4)){super();h(this,"scene");h(this,"renderer");h(this,"camera");h(this,"controls");h(this,"ambLight");h(this,"dirLight");h(this,"container");h(this,"_clock",new de);h(this,"_fogFactor",1);this.container=e,this.renderer=this._createRenderer(),this.scene=this._createScene(),this.camera=this._createCamera(s),this.controls=this._createControls(r,this.camera,e),this.ambLight=this._createAmbLight(),this.scene.add(this.ambLight),this.dirLight=this._createDirLight(),this.scene.add(this.dirLight),this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.animate()}get fogFactor(){return this._fogFactor}set fogFactor(e){this._fogFactor=e,this.controls.dispatchEvent({type:"change",target:this.controls})}_createDirLight(){const e=new ue(16777215,.5);return e.target.position.copy(this.controls.target),e.position.set(-1e3,-2e3,1e4),e}_createAmbLight(){return new me(16777215,.7)}_createControls(e,r,s){const a=new Pe(r,s);return a.target.copy(e),a.minDistance=.1,a.maxDistance=15e3,a.zoomSpeed=3,a.maxPolarAngle=1.2,a.enableDamping=!0,a.listenToKeyEvents(window),a.addEventListener("change",()=>{const c=Math.max(this.controls.getPolarAngle(),.1),l=Math.max(this.controls.getDistance(),.1);a.zoomSpeed=Math.max(Math.log(l),1.8),this.camera.far=Math.max(Math.min(l/c*8,5e4),100),this.camera.near=this.camera.far/1e3,this.camera.updateProjectionMatrix()}),a.saveState(),a}_createCamera(e){const r=new H(80,1,.1,5e4);return r.position.copy(e),r}_createScene(){const r=new fe;return r.background=new D(14414079),r.fog=new he(14414079,0),r}_createRenderer(){const e=new ge({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0,precision:"highp"});return e.sortObjects=!0,e.setPixelRatio(window.devicePixelRatio),e}resize(){const e=this.container.clientWidth,r=this.container.clientHeight;return this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,r),this.camera.aspect=e/r,this.camera.updateProjectionMatrix(),this}animate(){this.renderer.render(this.scene,this.camera),this.controls.update(),this.dispatchEvent({type:"update",delta:this._clock.getDelta()}),requestAnimationFrame(this.animate.bind(this))}}const g=pe([be,_e],Me),W=g.project(89.4,42.7),V=new n(W.x,0,-W.y),We=new n(0,10,50),o=new Fe(document.querySelector("#map"),V,V.clone().add(We));g.loader.showLoading=!1;g.rotateX(-Math.PI/2);o.scene.add(g);o.controls.maxPolarAngle=Math.PI;o.scene.fog=null;o.renderer.toneMapping=ve;o.renderer.toneMappingExposure=.7;o.dirLight.intensity=.5;o.ambLight.intensity=.5;const I=ke(),y=Re();Ee();function Re(){const i=new xe(300,300),t=new ze(i,{textureWidth:512,textureHeight:512,waterNormals:new we().load("../../image/waternormals.jpg",function(s){s.wrapS=s.wrapT=ye}),sunDirection:new n,sunColor:16777215,waterColor:7695,distortionScale:1,alpha:1});t.material.transparent=!0,t.material.uniforms.size.value=6,t.position.set(W.x,W.y+5,.2);const e=t.onBeforeRender,r=t.onAfterRender;return t.onBeforeRender=(s,a,c,l,v,x)=>{g.autoUpdate=!1,e.call(t,s,a,c,l,v,x)},t.onAfterRender=(s,a,c,l,v,x)=>{g.autoUpdate=!0,r.call(t,s,a,c,l,v,x)},g.add(t),o.addEventListener("update",()=>{t.material.uniforms.time.value+=1/60}),t}function ke(){const i=new De;return i.scale.setScalar(45e4),g.add(i),i}function Ee(){const i=new n,t={turbidity:10,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7,elevation:.5,azimuth:180,exposure:o.renderer.toneMappingExposure};function e(){const l=I.material.uniforms;l.turbidity.value=t.turbidity,l.rayleigh.value=t.rayleigh,l.mieCoefficient.value=t.mieCoefficient,l.mieDirectionalG.value=t.mieDirectionalG;const v=B.degToRad(90-t.elevation),x=B.degToRad(t.azimuth);i.setFromSphericalCoords(1,v,x),l.sunPosition.value.copy(i),o.dirLight.position.copy(i),y.material.uniforms.sunDirection.value.copy(i).normalize(),o.renderer.toneMappingExposure=t.exposure,o.renderer.render(o.scene,o.camera)}const r=new Le,s=r.addFolder("环境");s.add(o.ambLight,"intensity",0,5).name("环境光"),s.add(o.dirLight,"intensity",0,5).name("直射光");const a=r.addFolder("天空");a.add(I,"visible"),a.add(t,"turbidity",0,20,.1).onChange(e),a.add(t,"rayleigh",0,4,.001).onChange(e),a.add(t,"mieCoefficient",0,.1,.001).onChange(e),a.add(t,"mieDirectionalG",0,1,.001).onChange(e),a.add(t,"elevation",0,90,.1).onChange(e),a.add(t,"azimuth",-180,180,.1).onChange(e),a.add(t,"exposure",0,1,1e-4).onChange(e);const c=r.addFolder("水体");c.add(y,"visible"),c.add(y.position,"z",-1,5,.01).name("水面高度"),c.add(y.scale,"x",.1,10).name("东西宽度"),c.add(y.scale,"y",.1,10).name("南北宽度"),c.add(y.material.uniforms.size,"value",.1,10,.1).name("size"),c.add(y.material.uniforms.alpha,"value",.1,1,.1).name("alpha"),e()}Ce(g);Se(o,g);
