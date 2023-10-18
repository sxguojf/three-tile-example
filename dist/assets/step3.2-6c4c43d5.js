var z=Object.defineProperty;var F=(o,t,i)=>t in o?z(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var c=(o,t,i)=>(F(o,typeof t!="symbol"?t+"":t,i),i);import"./modulepreload-polyfill-3cfb730f.js";import{g as j}from"./lil-gui.module.min-a1e98589.js";import{U as x,V as p,al as y,O as D,W as A,X as M,Y as k,Z as K,$ as V,a0 as _,C,a3 as W,c as P,av as T,h as U,e as R,d as H,aE as X,ag as Q,K as q,j as I,s as G,m as B}from"./util-bf818b98.js";import{G as O}from"./GLTFLoader-f7aeb6b5.js";import{T as Y}from"./tween.module-97c976ec.js";import{S as Z}from"./stats.module-8826aad6.js";const N={type:"change"};class $ extends x{constructor(t,i){super(),this.object=t,this.domElement=i,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const e=this,r=1e-6,h=new y,w=new p;this.tmpQuaternion=new y,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new p(0,0,0),this.rotationVector=new p(0,0,0),this.keydown=function(s){if(!s.altKey){switch(s.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(s){switch(s.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(s){if(this.dragToLook)this.status++;else{switch(s.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(s){if(!this.dragToLook||this.status>0){const m=this.getContainerDimensions(),l=m.size[0]/2,b=m.size[1]/2;this.moveState.yawLeft=-(s.pageX-m.offset[0]-l)/l,this.moveState.pitchDown=(s.pageY-m.offset[1]-b)/b,this.updateRotationVector()}},this.pointerup=function(s){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(s.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(s){const m=s*e.movementSpeed,l=s*e.rollSpeed;e.object.translateX(e.moveVector.x*m),e.object.translateY(e.moveVector.y*m),e.object.translateZ(e.moveVector.z*m),e.tmpQuaternion.set(e.rotationVector.x*l,e.rotationVector.y*l,e.rotationVector.z*l,1).normalize(),e.object.quaternion.multiply(e.tmpQuaternion),(w.distanceToSquared(e.object.position)>r||8*(1-h.dot(e.object.quaternion))>r)&&(e.dispatchEvent(N),h.copy(e.object.quaternion),w.copy(e.object.position))},this.updateMovementVector=function(){const s=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-s+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",L),this.domElement.removeEventListener("pointerdown",v),this.domElement.removeEventListener("pointermove",u),this.domElement.removeEventListener("pointerup",S),window.removeEventListener("keydown",g),window.removeEventListener("keyup",f)};const u=this.pointermove.bind(this),v=this.pointerdown.bind(this),S=this.pointerup.bind(this),g=this.keydown.bind(this),f=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",L),this.domElement.addEventListener("pointerdown",v),this.domElement.addEventListener("pointermove",u),this.domElement.addEventListener("pointerup",S),window.addEventListener("keydown",g),window.addEventListener("keyup",f),this.updateMovementVector(),this.updateRotationVector()}}function L(o){o.preventDefault()}D.DEFAULT_UP.set(0,0,1);class J extends x{constructor(i,e){super();c(this,"scene",new A);c(this,"renderer",new M({antialias:!0,logarithmicDepthBuffer:!0}));c(this,"camera",new k(80,1,.1,1e3));c(this,"controls");c(this,"ambLight",new K(16777215,.1));c(this,"dirLight",new V(16777215,1));c(this,"container");c(this,"_stats",new Z);c(this,"_clock",new _);this.container=i,this.renderer.sortObjects=!0,this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement);const r=14414079;this.scene.background=new C(r),this.scene.fog=new W(r,.003),this.renderer.shadowMap.enabled=!0,this.camera=new k(50,1,.1,1e3),this.camera.position.set(e.x,e.y+20,e.z+10),this.camera.lookAt(e.x,e.y,e.z),this.scene.add(this.ambLight),this._stats.dom.style.left="",this._stats.dom.style.top="",this._stats.dom.style.right="0px",this._stats.dom.style.bottom="0px",this._stats.dom.style.zIndex="100",i.appendChild(this._stats.dom),this.controls=this.createControls(),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.animate()}createControls(){const i=new $(this.camera,this.container);return i.domElement=this.container,i.autoForward=!1,i.movementSpeed=2,i.rollSpeed=.05,i}resize(){const i=this.container.clientWidth,e=this.container.clientHeight;return this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(i,e),this.camera.aspect=i/e,this.camera.updateProjectionMatrix(),this}animate(){this._stats.update();const i=this._clock.getDelta();this.controls.update(i),this.renderer.render(this.scene,this.camera),this.dispatchEvent({type:"update",delta:i}),requestAnimationFrame(this.animate.bind(this))}}const a=P(R,B),tt=document.querySelector("#map"),E=a.project(86.92,28.5),n=new J(tt,new p(E.x,E.y,10));n.scene.add(a);a.addEventListener("tile-created",o=>{o.tile.receiveShadow=!0});const et=new O;et.loadAsync("../../model/Flamingo.glb").then(o=>{const t=o.scene;t.scale.setScalar(.01),n.scene.add(t),t.traverse(i=>{i.receiveShadow=!0,i.castShadow=!0}),ot(t),at(t),it(o)});const ot=o=>{const t=new V;t.target=o,t.position.set(-2,3,-10),t.castShadow=!0,t.shadow.camera.near=.1,t.shadow.camera.far=1e3,t.shadow.camera.left=-10,t.shadow.camera.right=10,t.shadow.camera.top=10,t.shadow.camera.bottom=-10,t.shadow.mapSize.setScalar(1024),o.add(t)},it=o=>{const t=o.scene,i=new T(t);i.clipAction(o.animations[0]).play(),n.addEventListener("update",e=>{var h;t.position.set(0,-.5,-3),t.applyMatrix4(n.camera.matrixWorld);const r=((h=a.getLocalInfoFromWorld(new U(t.position.x,t.position.y)))==null?void 0:h.location.z)||0;if(d.modelHeight=t.position.z-r,d.modelHeight<=.2)t.rotateZ(e.delta*Math.PI),n.controls.movementSpeed=0;else{const w=new p(0,0,-10).applyMatrix4(n.camera.matrixWorld);t.lookAt(w),n.controls.movementSpeed=2,i.update(e.delta)}Y.update()})},d={modelHeight:0,mapbox:()=>{a.imgSource=R,a.reload()},google:()=>{a.imgSource=H,a.reload()},bing:()=>{a.imgSource=X,a.reload()},toXmly:()=>{const o=a.project(86.92,28.4);n.camera.position.set(o.x,o.y,15)},toXian:()=>{const o=a.project(109,34.7);n.camera.position.set(o.x,o.y,8)},toBeijing:()=>{const o=a.project(116.4,40);n.camera.position.set(o.x,o.y,10)},toXiangGang:()=>{const o=a.project(114.18,22.3);n.camera.position.set(o.x,o.y,5)}},at=o=>{const t=new j,i=t.addFolder("环境");i.add(n.scene.fog,"density",1e-4,.01,1e-4).name("能见度系数"),i.add(n.ambLight,"intensity",.1,2,.1).name("环境光强度");const e=t.addFolder("地图源");e.add(d,"mapbox"),e.add(d,"google").name("google(有偏移)"),e.add(d,"bing").name("bing(有偏移)");const r=t.addFolder("小鸟");r.add(o,"visible").name("显示"),r.add(n.controls,"autoForward").name("自动前进"),r.add(o.position,"z").listen().name("飞行海拔高度km"),r.add(d,"modelHeight").listen().name("飞行距地高度km");const h=t.addFolder("定位");h.add(d,"toXian").name("西安"),h.add(d,"toBeijing").name("北京"),h.add(d,"toXmly").name("喜马拉雅")};Q(n);q(a);I(a);G(n,a);
