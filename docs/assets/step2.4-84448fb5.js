var l=Object.defineProperty;var g=(i,a,e)=>a in i?l(i,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[a]=e;var o=(i,a,e)=>(g(i,typeof a!="symbol"?a+"":a,e),e);import"./modulepreload-polyfill-3cfb730f.js";import{g as p}from"./lil-gui.module.min-a1e98589.js";import{E as u,v as w,V as h,w as f,s as P,F as d,W as L,y as M,d as b,z as y,H as x,g as _,o as A,i as v,m as C,a as S}from"./mapSource-1769961f.js";import{c as z,l as D,d as F,b as E}from"./util-a377a475.js";import{M as k}from"./MapControls-d4dd3c51.js";class R extends u{constructor(e,t={centerPostion:new h(0,0,-3e3),cameraPosition:new h(0,3e4,0)}){super();o(this,"scene");o(this,"renderer");o(this,"camera");o(this,"controls");o(this,"ambLight");o(this,"dirLight");o(this,"container");o(this,"_clock",new w);o(this,"_fogFactor",1);const s=typeof e=="string"?document.querySelector(e):e;if(s instanceof HTMLElement)this.container=s,this.renderer=this._createRenderer(),this.scene=this._createScene(),this.camera=this._createCamera(t.cameraPosition),this.controls=this._createControls(t.centerPostion),this.ambLight=this._createAmbLight(),this.scene.add(this.ambLight),this.dirLight=this._createDirLight(t.centerPostion),this.scene.add(this.dirLight),this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.renderer.setAnimationLoop(this.animate.bind(this));else throw`${e} not found!}`}get fogFactor(){return this._fogFactor}set fogFactor(e){this._fogFactor=e,this.controls.dispatchEvent({type:"change",target:this.controls})}get width(){return this.container.clientWidth}get height(){return this.container.clientHeight}_createScene(){const e=new f,t=14414079;return e.background=new P(t),e.fog=new d(t,0),e}_createRenderer(){const e=new L({antialias:!1,alpha:!0,logarithmicDepthBuffer:!0,precision:"highp"});return e.debug.checkShaderErrors=!0,e.sortObjects=!0,e.setPixelRatio(window.devicePixelRatio),e}_createCamera(e){const t=new M(70,1,.1,5e4);return t.position.copy(e),t}_createControls(e){const t=new k(this.camera,this.container);return t.target.copy(e),t.screenSpacePanning=!1,t.minDistance=.1,t.maxDistance=3e4,t.enableDamping=!0,t.keyPanSpeed=5,t.listenToKeyEvents(window),t.addEventListener("change",()=>{const s=Math.max(this.controls.getPolarAngle(),.1),c=Math.max(this.controls.getDistance(),.1);t.zoomSpeed=Math.max(Math.log(c),1.8),this.camera.far=b.clamp(c/s*8,100,5e4),this.camera.near=this.camera.far/1e3,this.camera.updateProjectionMatrix(),this.scene.fog instanceof d&&(this.scene.fog.density=s/(c+5)*this.fogFactor*.25),c>8e3?(t.minAzimuthAngle=0,t.maxAzimuthAngle=0):(t.minAzimuthAngle=-1/0,t.maxAzimuthAngle=1/0),t.maxPolarAngle=Math.min(Math.pow(1e4,4)/Math.pow(c,4),1.2)}),t}_createAmbLight(){return new y(16777215,1)}_createDirLight(e){const t=new x(16777215,1);return t.position.set(0,2e3,1e3),t.target.position.copy(e),t}resize(){const e=this.width,t=this.height;return this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this}animate(){this.controls.update(),this.renderer.render(this.scene,this.camera),this.dispatchEvent({type:"update",delta:this._clock.getDelta()})}}const n=z(S,C),m=new h(86.95,27.98,0),I=new h(86.8,28,10),T=n.localToWorld(n.geo2pos(m)),W=n.localToWorld(n.geo2pos(I)),r=new R("#map",{centerPostion:T,cameraPosition:W});r.scene.add(n);D(r,n);const B=(()=>{const i=new _(new A(1,.3,128,16),new v({color:3355443,shininess:30,specular:13421772,emissive:0})),a=n.geo2pos(m);return i.position.set(a.x,a.y-5,8),i.castShadow=!0,i})();n.add(B);(()=>{const i=new p,a=i.addFolder("地图控制");a.add(n.scale,"z",1,3,.1).name("地形拉伸倍数").listen(),a.add(n.position,"y",-3,3,.01).name("地图模型高度偏移").listen(),a.add(n,"autoPosition").name("自动调整地图模型高度"),a.add(r.controls,"minPolarAngle",Math.PI/4,Math.PI/2,.1).name("最小倾角限制"),a.add(r.controls,"maxPolarAngle",Math.PI/4,Math.PI/2,.1).name("最大倾角限制"),a.add(r.controls,"enableDamping").name("惯性控制"),a.add(r.controls,"autoRotate").name("自动旋转"),a.add(n,"reload").name("重建瓦片树");const e=i.addFolder("环境设置");e.addColor(r.ambLight,"color").name("环境光颜色"),e.add(r.ambLight,"intensity",0,5,.1).name("环境光强度"),e.addColor(r.dirLight,"color").name("直射光颜色"),e.add(r.dirLight,"intensity",0,5,.1).name("直射光强度")})();F(n);E(n);
