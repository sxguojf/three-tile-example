import"./modulepreload-polyfill-3cfb730f.js";import{d as C,v as q,V as x,w as _,x as T,p as P,a as z,y as Q,z as Z,H as k,I as $,J as ee,K as R,L as te,T as ie,N as ne}from"./three-tile-7bc2cf71.js";import{g as oe}from"./lil-gui.module.min-a1e98589.js";import{c as se,a as re,e as ae,b as le,s as ce}from"./util-f061981c.js";import{m as ue,a as ve}from"./mapSource-3d628d77.js";class g extends C{constructor(){super(g.Geometry,new q({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const i=new x,r=new x,s=new _(16,16),e=new _(16,16);let E=k;const c=g.Geometry,b=new T({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),U=new C(c,b),u=[],D=l.Shader,v=new T({name:D.name,uniforms:{map:{value:null},occlusionMap:{value:e},color:{value:new P(16777215)},scale:{value:new z},screenPosition:{value:new x}},vertexShader:D.vertexShader,fragmentShader:D.fragmentShader,blending:Q,transparent:!0,depthWrite:!1}),j=new C(c,v);this.addElement=function(o){u.push(o)};const S=new z,p=new z,F=new Z,t=new te;this.onBeforeRender=function(o,A,f){o.getCurrentViewport(t);const I=o.getRenderTarget(),L=I!==null?I.texture.type:k;E!==L&&(s.dispose(),e.dispose(),s.type=e.type=L,E=L);const J=t.w/t.z,G=t.z/2,W=t.w/2;let d=16/t.w;if(S.set(d*J,d),F.min.set(t.x,t.y),F.max.set(t.x+(t.z-16),t.y+(t.w-16)),r.setFromMatrixPosition(this.matrixWorld),r.applyMatrix4(f.matrixWorldInverse),!(r.z>0)&&(i.copy(r).applyMatrix4(f.projectionMatrix),p.x=t.x+i.x*G+G-8,p.y=t.y+i.y*W+W-8,F.containsPoint(p))){o.copyFramebufferToTexture(s,p);let m=b.uniforms;m.scale.value=S,m.screenPosition.value=i,o.renderBufferDirect(f,null,c,b,U,null),o.copyFramebufferToTexture(e,p),m=V.uniforms,m.scale.value=S,m.screenPosition.value=i,o.renderBufferDirect(f,null,c,V,U,null);const K=-i.x*2,O=-i.y*2;for(let B=0,X=u.length;B<X;B++){const y=u[B],h=v.uniforms;h.color.value.copy(y.color),h.map.value=y.texture,h.screenPosition.value.x=i.x+K*y.distance,h.screenPosition.value.y=i.y+O*y.distance,d=y.size/t.w;const Y=t.w/t.z;h.scale.value.set(d*Y,d),v.uniformsNeedUpdate=!0,o.renderBufferDirect(f,null,c,v,j,null)}}},this.dispose=function(){b.dispose(),V.dispose(),v.dispose(),s.dispose(),e.dispose();for(let o=0,A=u.length;o<A;o++)u[o].texture.dispose()}}}class l{constructor(i,r=1,s=0,e=new P(16777215)){this.texture=i,this.size=r,this.distance=s,this.color=e}}l.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};g.Geometry=function(){const n=new $,i=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),r=new ee(i,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new R(r,3,0,!1)),n.setAttribute("uv",new R(r,2,3,!1)),n}();const M=se(ve,ue),pe=new x(108,34,0),fe=new x(108,-10,3e3),a=re("#map",M,pe,fe),H=new P(0);a.scene.background=H;a.scene.fog.color=H;const N=(()=>{const n=new ie,i=n.load("../image/lensflare/lensflare0.png"),r=n.load("../image/lensflare/lensflare1.png"),s=n.load("../image/lensflare/lensflare3.png"),e=new g;return e.addElement(new l(i,512)),e.addElement(new l(r,256,0)),e.addElement(new l(s,60,.4)),e.addElement(new l(s,100,.6)),e.addElement(new l(s,200,.8)),e.addElement(new l(s,70,.9)),e.position.set(5e3,3e3,-2e4),e.frustumCulled=!1,e})();a.scene.add(N);const de=(()=>{const n=new ne(new P(16777215),3);return n.position.copy(N.position),n.frustumCulled=!1,n})();a.scene.add(de);ae(a,M);const me=new oe,w=me.addFolder("环境设置");w.addColor(a.ambLight,"color").name("环境光颜色");w.add(a.ambLight,"intensity",0,5,.1).name("环境光强度");w.addColor(a.dirLight,"color").name("直射光颜色");w.add(a.dirLight,"intensity",0,4,.1).name("直射光强度");w.addColor(a.scene,"background").name("天空颜色");le(M);ce(a,M);
