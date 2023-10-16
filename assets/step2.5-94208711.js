import"./modulepreload-polyfill-3cfb730f.js";import{e as F,Q,a as y,aH as I,aI as W,aJ as C,C as M,V as B,aK as X,aL as Y,B as Z,Z as q,as as G,c as $,T as ee,N as te}from"./GLViewer-4908af8c.js";import{g as ie}from"./lil-gui.module.min-a1e98589.js";import{c as ne,a as oe,e as se,d as ae,s as re,m as le,g as ce}from"./util-54b1a14e.js";class x extends F{constructor(){super(x.Geometry,new Q({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const t=new y,a=new y,r=new I(16,16,W),i=new I(16,16,W),c=x.Geometry,P=new C({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),z=new F(c,P),u=[],A=l.Shader,v=new C({uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new M(16777215)},scale:{value:new B},screenPosition:{value:new y}},vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,blending:X,transparent:!0,depthWrite:!1}),j=new F(c,v);this.addElement=function(s){u.push(s)};const D=new B,f=new B,L=new Y,e=new $;this.onBeforeRender=function(s,T,p){s.getCurrentViewport(e);const H=e.w/e.z,U=e.z/2,E=e.w/2;let d=16/e.w;if(D.set(d*H,d),L.min.set(e.x,e.y),L.max.set(e.x+(e.z-16),e.y+(e.w-16)),a.setFromMatrixPosition(this.matrixWorld),a.applyMatrix4(p.matrixWorldInverse),!(a.z>0)&&(t.copy(a).applyMatrix4(p.projectionMatrix),f.x=e.x+t.x*U+U-8,f.y=e.y+t.y*E+E-8,L.containsPoint(f))){s.copyFramebufferToTexture(f,r);let m=P.uniforms;m.scale.value=D,m.screenPosition.value=t,s.renderBufferDirect(p,null,c,P,z,null),s.copyFramebufferToTexture(f,i),m=V.uniforms,m.scale.value=D,m.screenPosition.value=t,s.renderBufferDirect(p,null,c,V,z,null);const N=-t.x*2,J=-t.y*2;for(let S=0,K=u.length;S<K;S++){const h=u[S],g=v.uniforms;g.color.value.copy(h.color),g.map.value=h.texture,g.screenPosition.value.x=t.x+N*h.distance,g.screenPosition.value.y=t.y+J*h.distance,d=h.size/e.w;const O=e.w/e.z;g.scale.value.set(d*O,d),v.uniformsNeedUpdate=!0,s.renderBufferDirect(p,null,c,v,j,null)}}},this.dispose=function(){P.dispose(),V.dispose(),v.dispose(),r.dispose(),i.dispose();for(let s=0,T=u.length;s<T;s++)u[s].texture.dispose()}}}class l{constructor(t,a=1,r=0,i=new M(16777215)){this.texture=t,this.size=a,this.distance=r,this.color=i}}l.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};x.Geometry=function(){const n=new Z,t=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),a=new q(t,5);return n.setIndex([0,1,2,0,2,3]),n.setAttribute("position",new G(a,3,0,!1)),n.setAttribute("uv",new G(a,2,3,!1)),n}();const w=ne(ce,le),_=w.project(100,35),ue=new y(_.x,_.y,0),ve=new y(0,-1e4,3e3),o=oe("#map",ue,ve);o.scene.add(w);o.ambLight.intensity=.1;o.dirLight.intensity=.1;const k=new M(0);o.scene.background=k;o.scene.fog.color=k;const R=(()=>{const n=new ee,t=n.load("../image/lensflare/lensflare0.png"),a=n.load("../image/lensflare/lensflare1.png"),r=n.load("../image/lensflare/lensflare3.png"),i=new x;return i.addElement(new l(t,512)),i.addElement(new l(a,256,0)),i.addElement(new l(r,60,.4)),i.addElement(new l(r,100,.6)),i.addElement(new l(r,200,.8)),i.addElement(new l(r,70,.9)),i.position.set(5e3,2e4,3e3),i.frustumCulled=!1,i})();o.scene.add(R);const fe=(()=>{const n=new te(new M(16777215),3);return n.position.copy(R.position),n.frustumCulled=!1,n})();o.scene.add(fe);const pe=new ie,b=pe.addFolder("环境设置");b.addColor(o.ambLight,"color").name("环境光颜色");b.add(o.ambLight,"intensity",0,1,.1).name("环境光强度");b.addColor(o.dirLight,"color").name("直射光颜色");b.add(o.dirLight,"intensity",0,1,.1).name("直射光强度");b.addColor(o.scene,"background").name("天空颜色");se(w);ae(w);re(o,w);
