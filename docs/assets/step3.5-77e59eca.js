import"./modulepreload-polyfill-3cfb730f.js";import{g as Z}from"./lil-gui.module.min-a1e98589.js";import{g as $,V as a,s as z,aV as ee,b1 as te,f as T,y as re,b2 as oe,b3 as B,b4 as E,b5 as ae,_ as G,ai as ie,P as ne,T as le,aB as se,m as ce,a as ue,d as V}from"./mapSource-a5b9536a.js";import{S as de}from"./Sky-2a3f8404.js";import{c as me,a as fe,b as ve,s as pe}from"./util-8e2a1d86.js";class ge extends ${constructor(t,e={}){super(t),this.isWater=!0;const s=this,w=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,c=e.clipBias!==void 0?e.clipBias:0,u=e.alpha!==void 0?e.alpha:1,p=e.time!==void 0?e.time:0,g=e.waterNormals!==void 0?e.waterNormals:null,M=e.sunDirection!==void 0?e.sunDirection:new a(.70707,.70707,0),H=new z(e.sunColor!==void 0?e.sunColor:16777215),I=new z(e.waterColor!==void 0?e.waterColor:8355711),N=e.eye!==void 0?e.eye:new a(0,0,0),q=e.distortionScale!==void 0?e.distortionScale:20,X=e.side!==void 0?e.side:ee,J=e.fog!==void 0?e.fog:!1,y=new te,x=new a,C=new a,R=new a,b=new T,P=new a(0,0,-1),f=new G,D=new a,W=new a,_=new G,L=new T,n=new re,k=new oe(w,r),F={name:"MirrorShader",uniforms:B.merge([E.fog,E.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new T},sunColor:{value:new z(8355711)},sunDirection:{value:new a(.70707,.70707,0)},eye:{value:new a},waterColor:{value:new z(5592405)}}]),vertexShader:`
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
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},d=new ae({name:F.name,uniforms:B.clone(F.uniforms),vertexShader:F.vertexShader,fragmentShader:F.fragmentShader,lights:!0,side:X,fog:J});d.uniforms.mirrorSampler.value=k.texture,d.uniforms.textureMatrix.value=L,d.uniforms.alpha.value=u,d.uniforms.time.value=p,d.uniforms.normalSampler.value=g,d.uniforms.sunColor.value=H,d.uniforms.waterColor.value=I,d.uniforms.sunDirection.value=M,d.uniforms.distortionScale.value=q,d.uniforms.eye.value=N,s.material=d,s.onBeforeRender=function(o,K,S){if(C.setFromMatrixPosition(s.matrixWorld),R.setFromMatrixPosition(S.matrixWorld),b.extractRotation(s.matrixWorld),x.set(0,0,1),x.applyMatrix4(b),D.subVectors(C,R),D.dot(x)>0)return;D.reflect(x).negate(),D.add(C),b.extractRotation(S.matrixWorld),P.set(0,0,-1),P.applyMatrix4(b),P.add(R),W.subVectors(C,P),W.reflect(x).negate(),W.add(C),n.position.copy(D),n.up.set(0,1,0),n.up.applyMatrix4(b),n.up.reflect(x),n.lookAt(W),n.far=S.far,n.updateMatrixWorld(),n.projectionMatrix.copy(S.projectionMatrix),L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),L.multiply(n.projectionMatrix),L.multiply(n.matrixWorldInverse),y.setFromNormalAndCoplanarPoint(x,C),y.applyMatrix4(n.matrixWorldInverse),f.set(y.normal.x,y.normal.y,y.normal.z,y.constant);const m=n.projectionMatrix;_.x=(Math.sign(f.x)+m.elements[8])/m.elements[0],_.y=(Math.sign(f.y)+m.elements[9])/m.elements[5],_.z=-1,_.w=(1+m.elements[10])/m.elements[14],f.multiplyScalar(2/f.dot(_)),m.elements[2]=f.x,m.elements[6]=f.y,m.elements[10]=f.z+1-c,m.elements[14]=f.w,N.setFromMatrixPosition(S.matrixWorld);const O=o.getRenderTarget(),Q=o.xr.enabled,Y=o.shadowMap.autoUpdate;s.visible=!1,o.xr.enabled=!1,o.shadowMap.autoUpdate=!1,o.setRenderTarget(k),o.state.buffers.depth.setMask(!0),o.autoClear===!1&&o.clear(),o.render(K,n),s.visible=!0,o.xr.enabled=Q,o.shadowMap.autoUpdate=Y,o.setRenderTarget(O);const U=S.viewport;U!==void 0&&o.state.viewport(U)}}}const v=me(ue,ce),A=new a(89.4,42.7),xe=new a(89.2,42.3,10),i=fe("#map",v,A,xe);i.scene.add(v);i.scene.fog.color=new z(9332837);i.renderer.toneMapping=ie;const j=we(),h=he();ye();function he(){const l=v.geo2pos(A),t=new ne(300,300),e=new ge(t,{textureWidth:512,textureHeight:512,waterNormals:new le().load("../image/waternormals.jpg",function(r){r.wrapS=r.wrapT=se}),sunDirection:new a,sunColor:16777215,waterColor:7695,distortionScale:1,alpha:1});e.material.transparent=!0,e.material.uniforms.size.value=6,e.position.set(l.x,l.y+5,.2);const s=e.onBeforeRender,w=e.onAfterRender;return e.onBeforeRender=(r,c,u,p,g,M)=>{v.autoUpdate=!1,s.call(e,r,c,u,p,g,M)},e.onAfterRender=(r,c,u,p,g,M)=>{v.autoUpdate=!0,w.call(e,r,c,u,p,g,M)},v.add(e),i.addEventListener("update",()=>{e.material.uniforms.time.value+=1/60}),e}function we(){const l=new de;return l.scale.setScalar(45e4),i.scene.add(l),l}function ye(){const l=new a,t={turbidity:10,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7,elevation:.5,azimuth:180,exposure:i.renderer.toneMappingExposure};function e(){const u=j.material.uniforms;u.turbidity.value=t.turbidity,u.rayleigh.value=t.rayleigh,u.mieCoefficient.value=t.mieCoefficient,u.mieDirectionalG.value=t.mieDirectionalG;const p=V.degToRad(90-t.elevation),g=V.degToRad(t.azimuth);l.setFromSphericalCoords(1,p,g),u.sunPosition.value.copy(l),i.dirLight.position.copy(l),h.material.uniforms.sunDirection.value.copy(l).normalize(),i.renderer.toneMappingExposure=t.exposure,i.renderer.render(i.scene,i.camera)}const s=new Z,w=s.addFolder("环境");w.add(i.ambLight,"intensity",0,5).name("环境光"),w.add(i.dirLight,"intensity",0,5).name("直射光");const r=s.addFolder("天空");r.add(j,"visible"),r.add(t,"turbidity",0,20,.1).onChange(e),r.add(t,"rayleigh",0,4,.001).onChange(e),r.add(t,"mieCoefficient",0,.1,.001).onChange(e),r.add(t,"mieDirectionalG",0,1,.001).onChange(e),r.add(t,"elevation",0,90,.1).onChange(e),r.add(t,"azimuth",-180,180,.1).onChange(e),r.add(t,"exposure",0,1,1e-4).onChange(e);const c=s.addFolder("水体");c.add(h,"visible"),c.add(h.position,"z",-1,5,.01).name("水面高度"),c.add(h.scale,"x",.1,10).name("东西宽度"),c.add(h.scale,"y",.1,10).name("南北宽度"),c.add(h.material.uniforms.size,"value",.1,10,.1).name("size"),c.add(h.material.uniforms.alpha,"value",.1,1,.1).name("alpha"),e()}ve(v);pe(i,v);
