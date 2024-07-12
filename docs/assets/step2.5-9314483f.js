import"./modulepreload-polyfill-3cfb730f.js";import{g as C,J as Z,V as g,K as _,L as T,s as M,b as z,N as $,U as q,X as k,Y as Q,Z as ee,_ as R,$ as te,T as ie,a0 as ne,m as oe,a as se}from"./mapSource-e82aaabe.js";import{g as ae}from"./lil-gui.module.min-a1e98589.js";import{c as re,a as le,e as ce,b as ue,s as ve}from"./util-a27d2d6b.js";class x extends C{constructor(){super(x.Geometry,new Z({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const i=new g,r=new g,s=new _(16,16),e=new _(16,16);let U=k;const c=x.Geometry,P=new T({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),V=new T({uniforms:{map:{value:s},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),E=new C(c,P),u=[],D=l.Shader,v=new T({name:D.name,uniforms:{map:{value:null},occlusionMap:{value:e},color:{value:new M(16777215)},scale:{value:new z},screenPosition:{value:new g}},vertexShader:D.vertexShader,fragmentShader:D.fragmentShader,blending:$,transparent:!0,depthWrite:!1}),Y=new C(c,v);this.addElement=function(o){u.push(o)};const S=new z,p=new z,F=new q,t=new te;this.onBeforeRender=function(o,A,f){o.getCurrentViewport(t);const G=o.getRenderTarget(),L=G!==null?G.texture.type:k;U!==L&&(s.dispose(),e.dispose(),s.type=e.type=L,U=L);const j=t.w/t.z,I=t.z/2,W=t.w/2;let d=16/t.w;if(S.set(d*j,d),F.min.set(t.x,t.y),F.max.set(t.x+(t.z-16),t.y+(t.w-16)),r.setFromMatrixPosition(this.matrixWorld),r.applyMatrix4(f.matrixWorldInverse),!(r.z>0)&&(i.copy(r).applyMatrix4(f.projectionMatrix),p.x=t.x+i.x*I+I-8,p.y=t.y+i.y*W+W-8,F.containsPoint(p))){o.copyFramebufferToTexture(s,p);let m=P.uniforms;m.scale.value=S,m.screenPosition.value=i,o.renderBufferDirect(f,null,c,P,E,null),o.copyFramebufferToTexture(e,p),m=V.uniforms,m.scale.value=S,m.screenPosition.value=i,o.renderBufferDirect(f,null,c,V,E,null);const H=-i.x*2,J=-i.y*2;for(let B=0,K=u.length;B<K;B++){const y=u[B],h=v.uniforms;h.color.value.copy(y.color),h.map.value=y.texture,h.screenPosition.value.x=i.x+H*y.distance,h.screenPosition.value.y=i.y+J*y.distance,d=y.size/t.w;const O=t.w/t.z;h.scale.value.set(d*O,d),v.uniformsNeedUpdate=!0,o.renderBufferDirect(f,null,c,v,Y,null)}}},this.dispose=function(){P.dispose(),V.dispose(),v.dispose(),s.dispose(),e.dispose();for(let o=0,A=u.length;o<A;o++)u[o].texture.dispose()}}}class l{constructor(i,r=1,s=0,e=new M(16777215)){this.texture=i,this.size=r,this.distance=s,this.color=e}}l.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};x.Geometry=function(){const n=new Q,i=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),r=new ee(i,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new R(r,3,0,!1)),n.setAttribute("uv",new R(r,2,3,!1)),n}();const w=re(se,oe),pe=new g(108,34,0),fe=new g(108,-10,3e3),a=le("#map",w,pe,fe);a.scene.add(w);const N=new M(0);a.scene.background=N;a.scene.fog.color=N;const X=(()=>{const n=new ie,i=n.load("../image/lensflare/lensflare0.png"),r=n.load("../image/lensflare/lensflare1.png"),s=n.load("../image/lensflare/lensflare3.png"),e=new x;return e.addElement(new l(i,512)),e.addElement(new l(r,256,0)),e.addElement(new l(s,60,.4)),e.addElement(new l(s,100,.6)),e.addElement(new l(s,200,.8)),e.addElement(new l(s,70,.9)),e.position.set(5e3,3e3,-2e4),e.frustumCulled=!1,e})();a.scene.add(X);const de=(()=>{const n=new ne(new M(16777215),3);return n.position.copy(X.position),n.frustumCulled=!1,n})();a.scene.add(de);ce(a,w);const me=new ae,b=me.addFolder("环境设置");b.addColor(a.ambLight,"color").name("环境光颜色");b.add(a.ambLight,"intensity",0,5,.1).name("环境光强度");b.addColor(a.dirLight,"color").name("直射光颜色");b.add(a.dirLight,"intensity",0,4,.1).name("直射光强度");b.addColor(a.scene,"background").name("天空颜色");ue(w);ve(a,w);
