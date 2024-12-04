import"./modulepreload-polyfill-3cfb730f.js";import{g as Y}from"./lil-gui.module.min-a1e98589.js";import{g as Z,V as a,t as P,bn as ee,bv as te,f as T,H as re,aP as oe,bw as E,bx as G,aJ as ae,$ as B,af as ie,P as ne,T as le,aL as se,m as ce,a as ue,d as j}from"./mapSource-90889b65.js";import{S as de}from"./Sky-160df77f.js";import{c as me,a as fe,b as ve,s as pe}from"./util-26f9c1ca.js";class ge extends Z{constructor(t,e={}){super(t),this.isWater=!0;const s=this,w=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,c=e.clipBias!==void 0?e.clipBias:0,u=e.alpha!==void 0?e.alpha:1,v=e.time!==void 0?e.time:0,p=e.waterNormals!==void 0?e.waterNormals:null,M=e.sunDirection!==void 0?e.sunDirection:new a(.70707,.70707,0),H=new P(e.sunColor!==void 0?e.sunColor:16777215),I=new P(e.waterColor!==void 0?e.waterColor:8355711),N=e.eye!==void 0?e.eye:new a(0,0,0),q=e.distortionScale!==void 0?e.distortionScale:20,J=e.side!==void 0?e.side:ee,X=e.fog!==void 0?e.fog:!1,y=new te,g=new a,C=new a,R=new a,b=new T,z=new a(0,0,-1),f=new B,D=new a,L=new a,_=new B,W=new T,i=new re,k=new oe(w,r),F={name:"MirrorShader",uniforms:E.merge([G.fog,G.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new T},sunColor:{value:new P(8355711)},sunDirection:{value:new a(.70707,.70707,0)},eye:{value:new a},waterColor:{value:new P(5592405)}}]),vertexShader:`
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
				}`},d=new ae({name:F.name,uniforms:E.clone(F.uniforms),vertexShader:F.vertexShader,fragmentShader:F.fragmentShader,lights:!0,side:J,fog:X});d.uniforms.mirrorSampler.value=k.texture,d.uniforms.textureMatrix.value=W,d.uniforms.alpha.value=u,d.uniforms.time.value=v,d.uniforms.normalSampler.value=p,d.uniforms.sunColor.value=H,d.uniforms.waterColor.value=I,d.uniforms.sunDirection.value=M,d.uniforms.distortionScale.value=q,d.uniforms.eye.value=N,s.material=d,s.onBeforeRender=function(o,$,S){if(C.setFromMatrixPosition(s.matrixWorld),R.setFromMatrixPosition(S.matrixWorld),b.extractRotation(s.matrixWorld),g.set(0,0,1),g.applyMatrix4(b),D.subVectors(C,R),D.dot(g)>0)return;D.reflect(g).negate(),D.add(C),b.extractRotation(S.matrixWorld),z.set(0,0,-1),z.applyMatrix4(b),z.add(R),L.subVectors(C,z),L.reflect(g).negate(),L.add(C),i.position.copy(D),i.up.set(0,1,0),i.up.applyMatrix4(b),i.up.reflect(g),i.lookAt(L),i.far=S.far,i.updateMatrixWorld(),i.projectionMatrix.copy(S.projectionMatrix),W.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),W.multiply(i.projectionMatrix),W.multiply(i.matrixWorldInverse),y.setFromNormalAndCoplanarPoint(g,C),y.applyMatrix4(i.matrixWorldInverse),f.set(y.normal.x,y.normal.y,y.normal.z,y.constant);const m=i.projectionMatrix;_.x=(Math.sign(f.x)+m.elements[8])/m.elements[0],_.y=(Math.sign(f.y)+m.elements[9])/m.elements[5],_.z=-1,_.w=(1+m.elements[10])/m.elements[14],f.multiplyScalar(2/f.dot(_)),m.elements[2]=f.x,m.elements[6]=f.y,m.elements[10]=f.z+1-c,m.elements[14]=f.w,N.setFromMatrixPosition(S.matrixWorld);const K=o.getRenderTarget(),O=o.xr.enabled,Q=o.shadowMap.autoUpdate;s.visible=!1,o.xr.enabled=!1,o.shadowMap.autoUpdate=!1,o.setRenderTarget(k),o.state.buffers.depth.setMask(!0),o.autoClear===!1&&o.clear(),o.render($,i),s.visible=!0,o.xr.enabled=O,o.shadowMap.autoUpdate=Q,o.setRenderTarget(K);const U=S.viewport;U!==void 0&&o.state.viewport(U)}}}const h=me(ue,ce),V=new a(89.4,42.7),xe=new a(89.2,42.3,10),n=fe("#map",h,V,xe);n.scene.fog.color=new P(9332837);n.renderer.toneMapping=ie;const A=we(),x=he();ye();function he(){const l=h.geo2pos(V),t=new ne(300,300),e=new ge(t,{textureWidth:512,textureHeight:512,waterNormals:new le().load("../image/waternormals.jpg",function(r){r.wrapS=r.wrapT=se}),sunDirection:new a,sunColor:16777215,waterColor:7695,distortionScale:1,alpha:1});e.material.transparent=!0,e.material.uniforms.size.value=6,e.position.set(l.x,l.y+5,.2);const s=e.onBeforeRender,w=e.onAfterRender;return e.onBeforeRender=(r,c,u,v,p,M)=>{h.autoUpdate=!1,s.call(e,r,c,u,v,p,M)},e.onAfterRender=(r,c,u,v,p,M)=>{h.autoUpdate=!0,w.call(e,r,c,u,v,p,M)},h.add(e),n.addEventListener("update",()=>{e.material.uniforms.time.value+=1/60}),e}function we(){const l=new de;return l.scale.setScalar(45e4),n.scene.add(l),l}function ye(){const l=new a,t={turbidity:10,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7,elevation:.5,azimuth:180,exposure:n.renderer.toneMappingExposure};function e(){const u=A.material.uniforms;u.turbidity.value=t.turbidity,u.rayleigh.value=t.rayleigh,u.mieCoefficient.value=t.mieCoefficient,u.mieDirectionalG.value=t.mieDirectionalG;const v=j.degToRad(90-t.elevation),p=j.degToRad(t.azimuth);l.setFromSphericalCoords(1,v,p),u.sunPosition.value.copy(l),n.dirLight.position.copy(l),x.material.uniforms.sunDirection.value.copy(l).normalize(),n.renderer.toneMappingExposure=t.exposure,n.renderer.render(n.scene,n.camera)}const s=new Y,w=s.addFolder("环境");w.add(n.ambLight,"intensity",0,5).name("环境光"),w.add(n.dirLight,"intensity",0,5).name("直射光");const r=s.addFolder("天空");r.add(A,"visible"),r.add(t,"turbidity",0,20,.1).onChange(e),r.add(t,"rayleigh",0,4,.001).onChange(e),r.add(t,"mieCoefficient",0,.1,.001).onChange(e),r.add(t,"mieDirectionalG",0,1,.001).onChange(e),r.add(t,"elevation",0,90,.1).onChange(e),r.add(t,"azimuth",-180,180,.1).onChange(e),r.add(t,"exposure",0,1,1e-4).onChange(e);const c=s.addFolder("水体");c.add(x,"visible"),c.add(x.position,"z",-1,5,.01).name("水面高度"),c.add(x.scale,"x",.1,10).name("东西宽度"),c.add(x.scale,"y",.1,10).name("南北宽度"),c.add(x.material.uniforms.size,"value",.1,10,.1).name("size"),c.add(x.material.uniforms.alpha,"value",.1,1,.1).name("alpha"),e()}ve(h);pe(n,h);
