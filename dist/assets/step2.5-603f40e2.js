import"./modulepreload-polyfill-3cfb730f.js";import{c as S,v as X,V as c,w as I,x as W,y as B,n as M,a as C,z as Y,H as q,I as Q,J as Z,K as G,L as $,T as ee,N as te}from"./three.module-31477d3d.js";import{g as ie}from"./lil-gui.module.min-a1e98589.js";import{c as ne,a as oe,e as se,b as re,s as ae}from"./util-f3e58d78.js";import{m as le,g as ce}from"./mapSource-de628f72.js";class x extends S{constructor(){super(x.Geometry,new X({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const t=new c,r=new c,a=new I(16,16,W),i=new I(16,16,W),u=x.Geometry,P=new B({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),V=new B({uniforms:{map:{value:a},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),z=new S(u,P),v=[],A=l.Shader,f=new B({uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new M(16777215)},scale:{value:new C},screenPosition:{value:new c}},vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,blending:Y,transparent:!0,depthWrite:!1}),H=new S(u,f);this.addElement=function(s){v.push(s)};const D=new C,p=new C,F=new q,e=new $;this.onBeforeRender=function(s,E,d){s.getCurrentViewport(e);const N=e.w/e.z,T=e.z/2,U=e.w/2;let m=16/e.w;if(D.set(m*N,m),F.min.set(e.x,e.y),F.max.set(e.x+(e.z-16),e.y+(e.w-16)),r.setFromMatrixPosition(this.matrixWorld),r.applyMatrix4(d.matrixWorldInverse),!(r.z>0)&&(t.copy(r).applyMatrix4(d.projectionMatrix),p.x=e.x+t.x*T+T-8,p.y=e.y+t.y*U+U-8,F.containsPoint(p))){s.copyFramebufferToTexture(p,a);let h=P.uniforms;h.scale.value=D,h.screenPosition.value=t,s.renderBufferDirect(d,null,u,P,z,null),s.copyFramebufferToTexture(p,i),h=V.uniforms,h.scale.value=D,h.screenPosition.value=t,s.renderBufferDirect(d,null,u,V,z,null);const j=-t.x*2,J=-t.y*2;for(let L=0,K=v.length;L<K;L++){const y=v[L],g=f.uniforms;g.color.value.copy(y.color),g.map.value=y.texture,g.screenPosition.value.x=t.x+j*y.distance,g.screenPosition.value.y=t.y+J*y.distance,m=y.size/e.w;const O=e.w/e.z;g.scale.value.set(m*O,m),f.uniformsNeedUpdate=!0,s.renderBufferDirect(d,null,u,f,H,null)}}},this.dispose=function(){P.dispose(),V.dispose(),f.dispose(),a.dispose(),i.dispose();for(let s=0,E=v.length;s<E;s++)v[s].texture.dispose()}}}class l{constructor(t,r=1,a=0,i=new M(16777215)){this.texture=t,this.size=r,this.distance=a,this.color=i}}l.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};x.Geometry=function(){const o=new Q,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),r=new Z(t,5);return o.setIndex([0,1,2,0,2,3]),o.setAttribute("position",new G(r,3,0,!1)),o.setAttribute("uv",new G(r,2,3,!1)),o}();const w=ne(ce,le),_=w.geo2pos(new c(100,35)),ue=new c(_.x,_.y,0),ve=new c(0,-1e4,3e3),n=oe("#map",ue,ve);n.scene.add(w);n.ambLight.intensity=.1;n.dirLight.intensity=.1;const k=new M(0);n.scene.background=k;n.scene.fog.color=k;const R=(()=>{const o=new ee,t=o.load("../image/lensflare/lensflare0.png"),r=o.load("../image/lensflare/lensflare1.png"),a=o.load("../image/lensflare/lensflare3.png"),i=new x;return i.addElement(new l(t,512)),i.addElement(new l(r,256,0)),i.addElement(new l(a,60,.4)),i.addElement(new l(a,100,.6)),i.addElement(new l(a,200,.8)),i.addElement(new l(a,70,.9)),i.position.set(5e3,2e4,3e3),i.frustumCulled=!1,i})();n.scene.add(R);const fe=(()=>{const o=new te(new M(16777215),3);return o.position.copy(R.position),o.frustumCulled=!1,o})();n.scene.add(fe);se(n,w);const pe=new ie,b=pe.addFolder("环境设置");b.addColor(n.ambLight,"color").name("环境光颜色");b.add(n.ambLight,"intensity",0,1,.1).name("环境光强度");b.addColor(n.dirLight,"color").name("直射光颜色");b.add(n.dirLight,"intensity",0,1,.1).name("直射光强度");b.addColor(n.scene,"background").name("天空颜色");re(w);ae(n,w);
