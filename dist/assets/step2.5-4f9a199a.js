import"./modulepreload-polyfill-3cfb730f.js";import{e as C,J as Z,V as c,K as k,L as T,r as M,b as z,N as $,Q as q,U as G,Z as ee,_ as te,$ as R,a0 as ie,T as ne,a1 as oe,m as se,a as re}from"./mapSource-8a728109.js";import{g as ae}from"./lil-gui.module.min-a1e98589.js";import{c as le,a as ce,e as ue,b as ve,s as pe}from"./util-937bd86c.js";class x extends C{constructor(){super(x.Geometry,new Z({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const i=new c,a=new c,r=new k(16,16),e=new k(16,16);let U=G;const u=x.Geometry,P=new T({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),V=new T({uniforms:{map:{value:r},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),E=new C(u,P),v=[],D=l.Shader,p=new T({name:D.name,uniforms:{map:{value:null},occlusionMap:{value:e},color:{value:new M(16777215)},scale:{value:new z},screenPosition:{value:new c}},vertexShader:D.vertexShader,fragmentShader:D.fragmentShader,blending:$,transparent:!0,depthWrite:!1}),J=new C(u,p);this.addElement=function(s){v.push(s)};const L=new z,f=new z,S=new q,t=new ie;this.onBeforeRender=function(s,A,d){s.getCurrentViewport(t);const I=s.getRenderTarget(),F=I!==null?I.texture.type:G;U!==F&&(r.dispose(),e.dispose(),r.type=e.type=F,U=F);const K=t.w/t.z,W=t.z/2,_=t.w/2;let m=16/t.w;if(L.set(m*K,m),S.min.set(t.x,t.y),S.max.set(t.x+(t.z-16),t.y+(t.w-16)),a.setFromMatrixPosition(this.matrixWorld),a.applyMatrix4(d.matrixWorldInverse),!(a.z>0)&&(i.copy(a).applyMatrix4(d.projectionMatrix),f.x=t.x+i.x*W+W-8,f.y=t.y+i.y*_+_-8,S.containsPoint(f))){s.copyFramebufferToTexture(r,f);let y=P.uniforms;y.scale.value=L,y.screenPosition.value=i,s.renderBufferDirect(d,null,u,P,E,null),s.copyFramebufferToTexture(e,f),y=V.uniforms,y.scale.value=L,y.screenPosition.value=i,s.renderBufferDirect(d,null,u,V,E,null);const O=-i.x*2,Q=-i.y*2;for(let B=0,X=v.length;B<X;B++){const h=v[B],g=p.uniforms;g.color.value.copy(h.color),g.map.value=h.texture,g.screenPosition.value.x=i.x+O*h.distance,g.screenPosition.value.y=i.y+Q*h.distance,m=h.size/t.w;const Y=t.w/t.z;g.scale.value.set(m*Y,m),p.uniformsNeedUpdate=!0,s.renderBufferDirect(d,null,u,p,J,null)}}},this.dispose=function(){P.dispose(),V.dispose(),p.dispose(),r.dispose(),e.dispose();for(let s=0,A=v.length;s<A;s++)v[s].texture.dispose()}}}class l{constructor(i,a=1,r=0,e=new M(16777215)){this.texture=i,this.size=a,this.distance=r,this.color=e}}l.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};x.Geometry=function(){const o=new ee,i=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),a=new te(i,5);return o.setIndex([0,1,2,0,2,3]),o.setAttribute("position",new R(a,3,0,!1)),o.setAttribute("uv",new R(a,2,3,!1)),o}();const w=le(re,se),N=w.geo2pos(new c(100,35)),fe=new c(N.x,N.y,0),de=new c(0,-1e4,3e3),n=ce("#map",fe,de);n.scene.add(w);n.ambLight.intensity=1;n.dirLight.intensity=1;const j=new M(0);n.scene.background=j;n.scene.fog.color=j;const H=(()=>{const o=new ne,i=o.load("../image/lensflare/lensflare0.png"),a=o.load("../image/lensflare/lensflare1.png"),r=o.load("../image/lensflare/lensflare3.png"),e=new x;return e.addElement(new l(i,512)),e.addElement(new l(a,256,0)),e.addElement(new l(r,60,.4)),e.addElement(new l(r,100,.6)),e.addElement(new l(r,200,.8)),e.addElement(new l(r,70,.9)),e.position.set(5e3,2e4,3e3),e.frustumCulled=!1,e})();n.scene.add(H);const me=(()=>{const o=new oe(new M(16777215),3);return o.position.copy(H.position),o.frustumCulled=!1,o})();n.scene.add(me);ue(n,w);const ye=new ae,b=ye.addFolder("环境设置");b.addColor(n.ambLight,"color").name("环境光颜色");b.add(n.ambLight,"intensity",0,5,.1).name("环境光强度");b.addColor(n.dirLight,"color").name("直射光颜色");b.add(n.dirLight,"intensity",0,4,.1).name("直射光强度");b.addColor(n.scene,"background").name("天空颜色");ve(w);pe(n,w);
