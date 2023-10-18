import"./modulepreload-polyfill-3cfb730f.js";import{l as F,a4 as q,V as g,a5 as I,a6 as W,a7 as C,C as M,h as B,a8 as J,a9 as K,aa as Q,ab as Z,ac as G,ad as $,c as ee,b as te,T as ie,ae as ne,I as oe,j as se,s as ae,m as re,d as le}from"./util-7385d603.js";import{g as ce}from"./lil-gui.module.min-a1e98589.js";class x extends F{constructor(){super(x.Geometry,new q({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const t=new g,a=new g,r=new I(16,16,W),i=new I(16,16,W),c=x.Geometry,P=new C({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),V=new C({uniforms:{map:{value:r},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),z=new F(c,P),u=[],A=l.Shader,v=new C({uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new M(16777215)},scale:{value:new B},screenPosition:{value:new g}},vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,blending:J,transparent:!0,depthWrite:!1}),R=new F(c,v);this.addElement=function(s){u.push(s)};const D=new B,f=new B,L=new K,e=new $;this.onBeforeRender=function(s,T,d){s.getCurrentViewport(e);const H=e.w/e.z,U=e.z/2,E=e.w/2;let p=16/e.w;if(D.set(p*H,p),L.min.set(e.x,e.y),L.max.set(e.x+(e.z-16),e.y+(e.w-16)),a.setFromMatrixPosition(this.matrixWorld),a.applyMatrix4(d.matrixWorldInverse),!(a.z>0)&&(t.copy(a).applyMatrix4(d.projectionMatrix),f.x=e.x+t.x*U+U-8,f.y=e.y+t.y*E+E-8,L.containsPoint(f))){s.copyFramebufferToTexture(f,r);let m=P.uniforms;m.scale.value=D,m.screenPosition.value=t,s.renderBufferDirect(d,null,c,P,z,null),s.copyFramebufferToTexture(f,i),m=V.uniforms,m.scale.value=D,m.screenPosition.value=t,s.renderBufferDirect(d,null,c,V,z,null);const N=-t.x*2,O=-t.y*2;for(let S=0,X=u.length;S<X;S++){const h=u[S],y=v.uniforms;y.color.value.copy(h.color),y.map.value=h.texture,y.screenPosition.value.x=t.x+N*h.distance,y.screenPosition.value.y=t.y+O*h.distance,p=h.size/e.w;const Y=e.w/e.z;y.scale.value.set(p*Y,p),v.uniformsNeedUpdate=!0,s.renderBufferDirect(d,null,c,v,R,null)}}},this.dispose=function(){P.dispose(),V.dispose(),v.dispose(),r.dispose(),i.dispose();for(let s=0,T=u.length;s<T;s++)u[s].texture.dispose()}}}class l{constructor(t,a=1,r=0,i=new M(16777215)){this.texture=t,this.size=a,this.distance=r,this.color=i}}l.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};x.Geometry=function(){const n=new Q,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),a=new Z(t,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new G(a,3,0,!1)),n.setAttribute("uv",new G(a,2,3,!1)),n}();const w=ee(le,re),_=w.project(100,35),ue=new g(_.x,_.y,0),ve=new g(0,-1e4,3e3),o=te("#map",ue,ve);o.scene.add(w);o.ambLight.intensity=.1;o.dirLight.intensity=.1;const j=new M(0);o.scene.background=j;o.scene.fog.color=j;const k=(()=>{const n=new ie,t=n.load("../../image/lensflare/lensflare0.png"),a=n.load("../../image/lensflare/lensflare1.png"),r=n.load("../../image/lensflare/lensflare3.png"),i=new x;return i.addElement(new l(t,512)),i.addElement(new l(a,256,0)),i.addElement(new l(r,60,.4)),i.addElement(new l(r,100,.6)),i.addElement(new l(r,200,.8)),i.addElement(new l(r,70,.9)),i.position.set(5e3,2e4,3e3),i.frustumCulled=!1,i})();o.scene.add(k);const fe=(()=>{const n=new ne(new M(16777215),3);return n.position.copy(k.position),n.frustumCulled=!1,n})();o.scene.add(fe);const de=new ce,b=de.addFolder("环境设置");b.addColor(o.ambLight,"color").name("环境光颜色");b.add(o.ambLight,"intensity",0,1,.1).name("环境光强度");b.addColor(o.dirLight,"color").name("直射光颜色");b.add(o.dirLight,"intensity",0,1,.1).name("直射光强度");b.addColor(o.scene,"background").name("天空颜色");oe(w);se(w);ae(o,w);
