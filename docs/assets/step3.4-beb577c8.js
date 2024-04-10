import"./modulepreload-polyfill-3cfb730f.js";import{g as E}from"./lil-gui.module.min-a1e98589.js";import{af as P,a4 as z,a5 as C,ag as I,V as S,ah as B,r as G,t as H,u as _,a8 as F,e as v,c as q,a as V}from"./three.module-31477d3d.js";import{T as L,a as T}from"./tween.module-97c976ec.js";import{G as W}from"./GLTFLoader-cca1aafe.js";import{c as D,a as N,f as O,d as R,b as j,s as J}from"./util-f3e58d78.js";import{m as U,a as M,g as X,d as Z}from"./mapSource-de628f72.js";class K extends P{constructor(t,e={}){const o=e.font;if(o===void 0)super();else{const s=o.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}class Q extends z{constructor(t){super(t)}load(t,e,o,s){const a=this,i=new C(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(t,function(r){const p=a.parse(JSON.parse(r));e&&e(p)},o,s)}parse(t){return new $(t)}}class ${constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const o=[],s=Y(t,e,this.data);for(let a=0,i=s.length;a<i;a++)o.push(...s[a].toShapes());return o}}function Y(n,t,e){const o=Array.from(n),s=t/e.resolution,a=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,i=[];let r=0,p=0;for(let u=0;u<o.length;u++){const g=o[u];if(g===`
`)r=0,p-=a;else{const m=ee(g,s,r,p,e);r+=m.offsetX,i.push(m.path)}}return i}function ee(n,t,e,o,s){const a=s.glyphs[n]||s.glyphs["?"];if(!a){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}const i=new I;let r,p,u,g,m,y,b,f;if(a.o){const d=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let l=0,A=d.length;l<A;)switch(d[l++]){case"m":r=d[l++]*t+e,p=d[l++]*t+o,i.moveTo(r,p);break;case"l":r=d[l++]*t+e,p=d[l++]*t+o,i.lineTo(r,p);break;case"q":u=d[l++]*t+e,g=d[l++]*t+o,m=d[l++]*t+e,y=d[l++]*t+o,i.quadraticCurveTo(m,y,u,g);break;case"b":u=d[l++]*t+e,g=d[l++]*t+o,m=d[l++]*t+e,y=d[l++]*t+o,b=d[l++]*t+e,f=d[l++]*t+o,i.bezierCurveTo(m,y,b,f,u,g);break}}return{offsetX:a.ha*t,path:i}}const h=D(M,U),x=h.geo2pos(new S(86,30)),te=new S(x.x,x.y,0),oe=new S(0,-12,8),c=N("#map",te,oe);c.scene.add(h);h.addEventListener("tile-created",n=>{n.tile.receiveShadow=!0});c.renderer.shadowMap.enabled=!0;c.renderer.shadowMap.type=B;c.ambLight.intensity=.3;c.dirLight.intensity=.1;const k=new W;k.loadAsync("../model/Soldier.glb").then(n=>{se(n),ae(n),ie(n),ne(n),de(n)});const ne=n=>{const t=n.scene,e=new G;e.target=t,e.position.set(5,10,-5),e.castShadow=!0;const o=e.shadow.camera;o.far=30,o.near=.1,o.left=-2,o.right=2,o.top=2,o.bottom=-2,t.add(e),c.scene.add(new H(e)),c.scene.add(new _(e.shadow.camera))},se=n=>{const t=n.scene;c.scene.add(t),t.traverse(o=>{o.receiveShadow=!0,o.castShadow=!0}),t.rotateX(Math.PI/2),t.scale.setScalar(.5);const e=new F(n.scene);ce(n,e),c.addEventListener("update",o=>{L.update(),e.update(o.delta)})},ae=n=>{const t=n.scene;k.loadAsync("../model/Stork.glb").then(e=>{const o=e.scene;o.rotateY(Math.PI),o.scale.setScalar(.005),o.traverse(a=>{a.castShadow=!0}),o.position.set(0,2,2),t.add(o);const s=new F(o);s.clipAction(e.animations[0]).play(),c.addEventListener("update",a=>{L.update(),s.update(a.delta)})})},ie=n=>{new Q().load("../fonts/helvetiker_regular.typeface.json",function(e){const o=new K("I'm a soldier",{font:e,size:80,height:5,curveSegments:12,bevelEnabled:!0,bevelThickness:10,bevelSize:8,bevelSegments:5}),s=[new v({color:16777215,flatShading:!0}),new v({color:13421772})],a=new q(o,s);a.geometry.center(),a.scale.setScalar(.002),a.position.setY(2),a.rotation.set(0,Math.PI,0),n.scene.add(a)})},ce=(n,t)=>{const e=n.scene;let o=new T(e.position);c.container.addEventListener("click",s=>{var p;const a=c.camera,i=new V;i.x=s.clientX/c.container.clientWidth*2-1,i.y=1-s.clientY/c.container.clientHeight*2;const r=(p=h.getLocalInfoFromScreen(a,i))==null?void 0:p.point;r&&(o=re(n,t,r,o))})},re=(n,t,e,o)=>{const s=n.scene,a=n.animations;o.stop(),o=new T(s.position);const i=e.clone();i.setZ(s.position.z),s.lookAt(i),s.rotateY(Math.PI);const r=e.distanceTo(s.position);if(r<30){const p=r<3?3:1;o.to(e,r*p*400).start().onStart(()=>{t.stopAllAction(),t.clipAction(a[p]).play()}).onUpdate((u,g)=>{var y;const m=(y=h.getLocalInfoFromWorld(new S(u.x,u.y)))==null?void 0:y.point;m&&s.position.copy(m)}).onComplete(()=>{t.stopAllAction(),t.clipAction(a[0]).play()})}else s.position.copy(e),t.stopAllAction();return o},w={mapbox:()=>{h.imgSource=M,h.reload()},google:()=>{h.imgSource=X,h.reload()},bing:()=>{h.imgSource=Z,h.reload()},toXian:()=>{const n=h.geo2pos(new S(108.94,34.3));c.camera.position.set(n.x,n.y-3,2),c.controls.target.set(n.x,n.y,0)},toFushishan:()=>{const n=h.geo2pos(new S(138.7322,35.35356));c.camera.position.set(n.x,n.y+10,8),c.controls.target.set(n.x,n.y,0)},modelSize:.5},de=n=>{const t=new E,e=t.addFolder("环境");e.add(c.ambLight,"intensity",.1,2,.1).name("环境光强度"),e.add(c.dirLight,"intensity",.1,2,.1).name("直射光强度");const o=t.addFolder("地图源");o.add(w,"mapbox"),o.add(w,"google").name("google(有偏移)"),o.add(w,"bing").name("bing(有偏移)");const s=t.addFolder("定位");s.add(w,"toXian").name("西安"),s.add(w,"toFushishan").name("富士山"),t.addFolder("控制").add(w,"modelSize",.01,2,.01).name("模型大小").onChange(i=>n.scene.scale.setScalar(i))};O(c);R(h);j(h);J(c,h);
