import"./modulepreload-polyfill-3cfb730f.js";import{e as S,L as Q,V as c,N as W,Q as _,U as B,r as M,b as C,X as Z,Y as $,Z as q,_ as J,$ as G,a0 as K,T as ee,a1 as te,m as ie,a2 as ne}from"./mapSource-9a4d2911.js";import{g as oe}from"./lil-gui.module.min-a1e98589.js";import{c as se,a as re,e as ae,b as le,s as ce}from"./util-bcbf6958.js";class x extends S{constructor(){super(x.Geometry,new Q({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const t=new c,r=new c,a=new W(16,16,_),i=new W(16,16,_),u=x.Geometry,P=new B({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),z=new S(u,P),v=[],A=l.Shader,f=new B({uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new M(16777215)},scale:{value:new C},screenPosition:{value:new c}},vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,blending:Z,transparent:!0,depthWrite:!1}),N=new S(u,f);this.addElement=function(s){v.push(s)};const D=new C,p=new C,F=new $,e=new K;this.onBeforeRender=function(s,U,d){s.getCurrentViewport(e);const X=e.w/e.z,E=e.z/2,T=e.w/2;let m=16/e.w;if(D.set(m*X,m),F.min.set(e.x,e.y),F.max.set(e.x+(e.z-16),e.y+(e.w-16)),r.setFromMatrixPosition(this.matrixWorld),r.applyMatrix4(d.matrixWorldInverse),!(r.z>0)&&(t.copy(r).applyMatrix4(d.projectionMatrix),p.x=e.x+t.x*E+E-8,p.y=e.y+t.y*T+T-8,F.containsPoint(p))){s.copyFramebufferToTexture(p,a);let h=P.uniforms;h.scale.value=D,h.screenPosition.value=t,s.renderBufferDirect(d,null,u,P,z,null),s.copyFramebufferToTexture(p,i),h=V.uniforms,h.scale.value=D,h.screenPosition.value=t,s.renderBufferDirect(d,null,u,V,z,null);const Y=-t.x*2,j=-t.y*2;for(let L=0,H=v.length;L<H;L++){const y=v[L],g=f.uniforms;g.color.value.copy(y.color),g.map.value=y.texture,g.screenPosition.value.x=t.x+Y*y.distance,g.screenPosition.value.y=t.y+j*y.distance,m=y.size/e.w;const O=e.w/e.z;g.scale.value.set(m*O,m),f.uniformsNeedUpdate=!0,s.renderBufferDirect(d,null,u,f,N,null)}}},this.dispose=function(){P.dispose(),V.dispose(),f.dispose(),a.dispose(),i.dispose();for(let s=0,U=v.length;s<U;s++)v[s].texture.dispose()}}}class l{constructor(t,r=1,a=0,i=new M(16777215)){this.texture=t,this.size=r,this.distance=a,this.color=i}}l.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};x.Geometry=function(){const o=new q,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),r=new J(t,5);return o.setIndex([0,1,2,0,2,3]),o.setAttribute("position",new G(r,3,0,!1)),o.setAttribute("uv",new G(r,2,3,!1)),o}();const w=se(ne,ie),I=w.geo2pos(new c(100,35)),ue=new c(I.x,I.y,0),ve=new c(0,-1e4,3e3),n=re("#map",ue,ve);n.scene.add(w);n.ambLight.intensity=.1;n.dirLight.intensity=.1;const k=new M(0);n.scene.background=k;n.scene.fog.color=k;const R=(()=>{const o=new ee,t=o.load("../image/lensflare/lensflare0.png"),r=o.load("../image/lensflare/lensflare1.png"),a=o.load("../image/lensflare/lensflare3.png"),i=new x;return i.addElement(new l(t,512)),i.addElement(new l(r,256,0)),i.addElement(new l(a,60,.4)),i.addElement(new l(a,100,.6)),i.addElement(new l(a,200,.8)),i.addElement(new l(a,70,.9)),i.position.set(5e3,2e4,3e3),i.frustumCulled=!1,i})();n.scene.add(R);const fe=(()=>{const o=new te(new M(16777215),3);return o.position.copy(R.position),o.frustumCulled=!1,o})();n.scene.add(fe);ae(n,w);const pe=new oe,b=pe.addFolder("环境设置");b.addColor(n.ambLight,"color").name("环境光颜色");b.add(n.ambLight,"intensity",0,1,.1).name("环境光强度");b.addColor(n.dirLight,"color").name("直射光颜色");b.add(n.dirLight,"intensity",0,1,.1).name("直射光强度");b.addColor(n.scene,"background").name("天空颜色");le(w);ce(n,w);
