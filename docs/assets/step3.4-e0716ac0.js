import"./modulepreload-polyfill-3cfb730f.js";import{g as A}from"./lil-gui.module.min-a1e98589.js";import{aY as P,ag as E,ah as C,aZ as G,V as S,a2 as z,J as H,ae as W,ad as T,i as v,g as B,b as I,m as _,a as x,aW as q,aX as V}from"./mapSource-90889b65.js";import{e as L,T as F}from"./tween.module-e5a426a4.js";import{G as O}from"./GLTFLoader-eeddc756.js";import{c as R,a as D,l as J,f as N,d as j,b as U,s as Z}from"./util-26f9c1ca.js";class K extends P{constructor(t,e={}){const o=e.font;if(o===void 0)super();else{const s=o.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}class Q extends E{constructor(t){super(t)}load(t,e,o,s){const a=this,i=new C(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(t,function(r){const p=a.parse(JSON.parse(r));e&&e(p)},o,s)}parse(t){return new Y(t)}}class Y{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const o=[],s=$(t,e,this.data);for(let a=0,i=s.length;a<i;a++)o.push(...s[a].toShapes());return o}}function $(n,t,e){const o=Array.from(n),s=t/e.resolution,a=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,i=[];let r=0,p=0;for(let u=0;u<o.length;u++){const g=o[u];if(g===`
`)r=0,p-=a;else{const m=X(g,s,r,p,e);r+=m.offsetX,i.push(m.path)}}return i}function X(n,t,e,o,s){const a=s.glyphs[n]||s.glyphs["?"];if(!a){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const i=new G;let r,p,u,g,m,w,b,f;if(a.o){const d=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let l=0,M=d.length;l<M;)switch(d[l++]){case"m":r=d[l++]*t+e,p=d[l++]*t+o,i.moveTo(r,p);break;case"l":r=d[l++]*t+e,p=d[l++]*t+o,i.lineTo(r,p);break;case"q":u=d[l++]*t+e,g=d[l++]*t+o,m=d[l++]*t+e,w=d[l++]*t+o,i.quadraticCurveTo(m,w,u,g);break;case"b":u=d[l++]*t+e,g=d[l++]*t+o,m=d[l++]*t+e,w=d[l++]*t+o,b=d[l++]*t+e,f=d[l++]*t+o,i.bezierCurveTo(m,w,b,f,u,g);break}}return{offsetX:a.ha*t,path:i}}const c=R(x,_),ee=new S(87.3,28.3,3),te=new S(87.3,28.2,6),h=D("#map",c,ee,te);J(h,c);c.receiveShadow=!0;h.renderer.shadowMap.enabled=!0;h.renderer.shadowMap.type=z;h.ambLight.intensity=.5;h.dirLight.intensity=.5;const k=new O;k.loadAsync("../model/Soldier.glb").then(n=>{ne(n),ae(n),se(n),oe(n),re(n)});const oe=n=>{const t=n.scene,e=new H(16777215,1);e.target=t,e.position.set(5,10,-5),e.castShadow=!0,e.shadow.camera.visible=!0;const o=e.shadow.camera;o.far=30,o.near=.1,o.left=-2,o.right=2,o.top=2,o.bottom=-2,t.add(e),h.scene.add(new W(e.shadow.camera))},ne=n=>{const t=n.scene;c.add(t),t.traverse(o=>{o.receiveShadow=!0,o.castShadow=!0}),t.scale.setScalar(.5);const e=new T(n.scene);ie(n,e),h.addEventListener("update",o=>{L.update(),e.update(o.delta)})},ae=n=>{const t=n.scene;k.loadAsync("../model/Stork.glb").then(e=>{const o=e.scene;o.scale.setScalar(.005),o.rotateY(Math.PI),o.traverse(a=>{a.castShadow=!0}),o.position.set(0,2,2),t.add(o);const s=new T(o);s.clipAction(e.animations[0]).play(),h.addEventListener("update",a=>{L.update(),s.update(a.delta)})})},se=n=>{new Q().load("../fonts/helvetiker_regular.typeface.json",function(e){const o=new K("Hit Points 99.9%",{font:e,size:80,height:5,curveSegments:12,bevelEnabled:!0,bevelThickness:10,bevelSize:8,bevelSegments:5}),s=[new v({color:16777215,flatShading:!0}),new v({color:13421772})],a=new B(o,s);a.geometry.center(),a.scale.setScalar(.002),a.position.setY(2),a.rotation.set(0,Math.PI,0),n.scene.add(a)})},ie=(n,t)=>{const e=n.scene;let o=new F(e.position);h.container.addEventListener("click",s=>{var p;const a=h.camera,i=new I;i.x=s.clientX/h.container.clientWidth*2-1,i.y=1-s.clientY/h.container.clientHeight*2;const r=(p=c.getLocalInfoFromScreen(a,i))==null?void 0:p.point;r&&(o=ce(n,t,c.worldToLocal(r.clone()),o))})},ce=(n,t,e,o)=>{const s=n.scene,a=n.animations;o.stop(),o=new F(s.position);const i=c.localToWorld(e.clone());i.y=s.getWorldPosition(new S).y,s.lookAt(i),s.rotateY(Math.PI);const r=e.distanceTo(s.position);if(r<30){const p=r<3?3:1;o.to(e,r*p*400).start().onStart(()=>{t.stopAllAction(),t.clipAction(a[p]).play()}).onUpdate((u,g)=>{var w;const m=(w=c.getLocalInfoFromWorld(c.localToWorld(u.clone())))==null?void 0:w.point;m&&s.position.copy(c.worldToLocal(m.clone()))}).onComplete(()=>{t.stopAllAction(),t.clipAction(a[0]).play()})}else s.position.copy(e),t.stopAllAction();return o},y={mapbox:()=>{c.imgSource=x,c.reload()},google:()=>{c.imgSource=q,c.reload()},bing:()=>{c.imgSource=V,c.reload()},modelSize:.5},re=n=>{const t=new A,e=t.addFolder("环境");e.add(h.ambLight,"intensity",.1,2,.1).name("环境光强度"),e.add(h.dirLight,"intensity",.1,2,.1).name("直射光强度");const o=t.addFolder("地图源");o.add(y,"mapbox"),o.add(y,"google").name("google(有偏移)"),o.add(y,"bing").name("bing(有偏移)"),t.addFolder("控制").add(y,"modelSize",.01,2,.01).name("模型大小").onChange(a=>n.scene.scale.setScalar(a))};N(h);j(c);U(c);Z(h,c);
