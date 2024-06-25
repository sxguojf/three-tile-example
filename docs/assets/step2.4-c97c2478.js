var l=Object.defineProperty;var g=(a,s,e)=>s in a?l(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var i=(a,s,e)=>(g(a,typeof s!="symbol"?s+"":s,e),e);import"./modulepreload-polyfill-3cfb730f.js";import{g as p}from"./lil-gui.module.min-a1e98589.js";import{O as w,E as u,u as x,W as f,v as y,w as M,y as b,z as L,F as S,H as C,r as P,I as h,V as m,e as D,l as v,g as F,m as _,a as z}from"./mapSource-8a728109.js";import{c as E,d as k,b as R}from"./util-937bd86c.js";import{M as A}from"./MapControls-967f1521.js";import{S as I}from"./stats.module-8826aad6.js";w.DEFAULT_UP.set(0,0,1);class j extends u{constructor(e,t){super();i(this,"scene",new x);i(this,"renderer",new f({antialias:!0,logarithmicDepthBuffer:!0}));i(this,"camera",new y(50,1,.1,1e3));i(this,"controls");i(this,"ambLight",new M(16777215,.1));i(this,"dirLight",new b(16777215,.8));i(this,"container");i(this,"_stats",new I);i(this,"_clock",new L);i(this,"_fogFactor",1);this.container=e,this.setRender(),this.setScene(),this.setCamera(t),this.controls=this.createControls(t),this.scene.add(this.ambLight),this.setDirLight(),this.setState(e),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.animate()}get fogFactor(){return this._fogFactor}set fogFactor(e){this._fogFactor=e,this.controls.dispatchEvent({type:"change",target:this.controls})}setState(e){this._stats.dom.style.left="",this._stats.dom.style.top="",this._stats.dom.style.right="0px",this._stats.dom.style.bottom="0px",this._stats.dom.style.zIndex="100",e.appendChild(this._stats.dom)}setDirLight(){const e=this.dirLight;e.target.position.copy(this.controls.target),e.position.set(e.target.position.x,e.target.position.y-100,100),e.castShadow=!0,e.shadow.camera.near=.1,e.shadow.camera.far=200,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,e.shadow.mapSize.setScalar(2048),this.scene.add(e),this.scene.add(new S(e)),this.scene.add(new C(e.shadow.camera))}setCamera(e){this.camera.position.set(e.x-10,e.y-20,e.z)}setScene(){this.scene.background=new P(11184810),this.scene.fog=new h(11184810)}setRender(){this.renderer.sortObjects=!0,this.renderer.shadowMap.enabled=!0,this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement)}createControls(e){const t=new A(this.camera,this.container);return t.domElement=this.container,t.target.set(e.x,e.y,3),t.minDistance=.1,t.maxDistance=1e4,t.zoomSpeed=3,t.minPolarAngle=1,t.enableDamping=!0,t.listenToKeyEvents(window),t.addEventListener("change",()=>{const d=Math.max(t.getPolarAngle(),.2),c=Math.max(t.getDistance(),1);t.zoomSpeed=Math.max(Math.log(c),1.2),this.scene.fog instanceof h&&(this.scene.fog.density=d/c/4*this.fogFactor),this.camera.far=Math.min(c/d*8,6e4),this.camera.near=Math.min(Math.max(this.camera.far/100,.1),1),this.camera.updateProjectionMatrix()}),t}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;return this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this}animate(){this.controls.update(),this._stats.update(),this.renderer.render(this.scene,this.camera);const e=this._clock.getDelta();this.dispatchEvent({type:"update",delta:e}),requestAnimationFrame(this.animate.bind(this))}}const r=E(z,_),B=document.querySelector("#map"),n=r.geo2pos(new m(86.92,27.95)),o=new j(B,new m(n.x,n.y,10));o.scene.add(r);r.addEventListener("tile-created",a=>{a.tile.receiveShadow=!0,a.tile.castShadow=!0});const H=(()=>{const a=new D(new v(1,.3,128,16),new F({color:3355443,shininess:30,specular:13421772,emissive:0}));return a.position.set(n.x,n.y-5,8),a.castShadow=!0,a})();o.scene.add(H);(()=>{const a=new p,s=a.addFolder("地图控制");s.add(r.scale,"z",1,10,.1).name("高度拉伸倍数"),s.add(r.position,"z",-1,1,.01).name("高度偏移"),s.add(o.controls,"minPolarAngle",Math.PI/4,Math.PI/2,.1).name("最小倾角限制"),s.add(o.controls,"maxPolarAngle",Math.PI/4,Math.PI/2,.1).name("最大倾角限制"),s.add(o.controls,"enableDamping").name("惯性控制"),s.add(o.controls,"autoRotate").name("自动旋转"),s.add(r,"reload").name("重建瓦片树");const e=a.addFolder("环境设置");e.addColor(o.ambLight,"color").name("环境光颜色"),e.add(o.ambLight,"intensity",0,5,.1).name("环境光强度"),e.addColor(o.dirLight,"color").name("直射光颜色"),e.add(o.dirLight,"intensity",0,5,.1).name("直射光强度")})();k(r);R(r);
