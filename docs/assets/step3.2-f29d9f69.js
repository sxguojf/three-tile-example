var R=Object.defineProperty;var M=(i,t,e)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var d=(i,t,e)=>(M(i,typeof t!="symbol"?t+"":t,e),e);import"./modulepreload-polyfill-3cfb730f.js";import{g as _}from"./lil-gui.module.min-a1e98589.js";import{E,V as h,a7 as L,w as D,y as F,s as A,F as K,W,z,H as P,I as V,ah as T,a as x,ao as j,ap as C,m as H}from"./mapSource-50ea1ccb.js";import{e as Q}from"./tween.module-e5a426a4.js";import{G as X}from"./GLTFLoader-7b582adf.js";import{c as B,f as U,d as q,b as G,s as I}from"./util-0d1e0617.js";const Y={type:"change"};class Z extends E{constructor(t,e){super(),this.object=t,this.domElement=e,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const o=this,r=1e-6,c=new L,u=new h;this.tmpQuaternion=new L,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new h(0,0,0),this.rotationVector=new h(0,0,0),this.keydown=function(s){if(!(s.altKey||this.enabled===!1)){switch(s.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(s){if(this.enabled!==!1){switch(s.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(s){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(s.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(s){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const l=this.getContainerDimensions(),p=l.size[0]/2,k=l.size[1]/2;this.moveState.yawLeft=-(s.pageX-l.offset[0]-p)/p,this.moveState.pitchDown=(s.pageY-l.offset[1]-k)/k,this.updateRotationVector()}},this.pointerup=function(s){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(s.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(s){this.enabled!==!1&&s.preventDefault()},this.update=function(s){if(this.enabled===!1)return;const l=s*o.movementSpeed,p=s*o.rollSpeed;o.object.translateX(o.moveVector.x*l),o.object.translateY(o.moveVector.y*l),o.object.translateZ(o.moveVector.z*l),o.tmpQuaternion.set(o.rotationVector.x*p,o.rotationVector.y*p,o.rotationVector.z*p,1).normalize(),o.object.quaternion.multiply(o.tmpQuaternion),(u.distanceToSquared(o.object.position)>r||8*(1-c.dot(o.object.quaternion))>r)&&(o.dispatchEvent(Y),c.copy(o.object.quaternion),u.copy(o.object.position))},this.updateMovementVector=function(){const s=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-s+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",w),this.domElement.removeEventListener("pointerdown",f),this.domElement.removeEventListener("pointermove",v),this.domElement.removeEventListener("pointerup",g),this.domElement.removeEventListener("pointercancel",b),window.removeEventListener("keydown",S),window.removeEventListener("keyup",y)};const w=this.contextMenu.bind(this),v=this.pointermove.bind(this),f=this.pointerdown.bind(this),g=this.pointerup.bind(this),b=this.pointercancel.bind(this),S=this.keydown.bind(this),y=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",w),this.domElement.addEventListener("pointerdown",f),this.domElement.addEventListener("pointermove",v),this.domElement.addEventListener("pointerup",g),this.domElement.addEventListener("pointercancel",b),window.addEventListener("keydown",S),window.addEventListener("keyup",y),this.updateMovementVector(),this.updateRotationVector()}}class O extends E{constructor(e,o={centerPostion:new h(0,0,-3e3),cameraPosition:new h(0,3e4,0)}){super();d(this,"scene");d(this,"renderer");d(this,"camera");d(this,"controls");d(this,"ambLight");d(this,"dirLight");d(this,"container");d(this,"_clock",new D);const r=typeof e=="string"?document.querySelector(e):e;if(r instanceof HTMLElement)this.container=r,this.renderer=this._createRenderer(),this.scene=this._createScene(),this.camera=this._createCamera(o.cameraPosition),this.controls=this._createControls(),this.ambLight=this._createAmbLight(),this.scene.add(this.ambLight),this.dirLight=this._createDirLight(o.centerPostion),this.scene.add(this.dirLight),this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.renderer.setAnimationLoop(this.animate.bind(this));else throw`${e} not found!}`}get width(){return this.container.clientWidth}get height(){return this.container.clientHeight}_createScene(){const e=new F,o=14414079;return e.background=new A(o),e.fog=new K(o,.003),e}_createRenderer(){const e=new W({antialias:!1,alpha:!0,logarithmicDepthBuffer:!0,precision:"highp"});return e.debug.checkShaderErrors=!0,e.sortObjects=!0,e.setPixelRatio(window.devicePixelRatio),e}_createCamera(e){const o=new z(70,1,.1,5e4);return o.position.copy(e),o}_createControls(){const e=new Z(this.camera,this.container);return e.domElement=this.container,e.autoForward=!1,e.movementSpeed=2,e.rollSpeed=.05,e}_createAmbLight(){return new P(16777215,1)}_createDirLight(e){const o=new V(16777215,1);return o.position.set(0,2e3,1e3),o.target.position.copy(e),o}resize(){const e=this.width,o=this.height;return this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,o),this.camera.aspect=e/o,this.camera.updateProjectionMatrix(),this}animate(){const e=this._clock.getDelta();this.controls.update(e),this.renderer.render(this.scene,this.camera),this.dispatchEvent({type:"update",delta:e})}}const a=B(x,H),$=a.localToWorld(a.geo2pos(new h(86,28,3))),J=a.localToWorld(a.geo2pos(new h(86.45,27.6,15))),n=new O("#map",{centerPostion:$,cameraPosition:J});n.scene.add(a);n.renderer.shadowMap.enabled=!0;a.receiveShadow=!0;const N=new X;N.loadAsync("../model/Flamingo.glb").then(i=>{const t=i.scene;t.scale.setScalar(.01),n.scene.add(t),t.traverse(e=>{e.receiveShadow=!0,e.castShadow=!0}),ee(t),oe(t),te(i)});const ee=i=>{const t=new V(16777215,1.5);t.target=i,t.position.set(-2,3,-10),t.castShadow=!0,t.shadow.camera.near=.1,t.shadow.camera.far=1e3,t.shadow.camera.left=-10,t.shadow.camera.right=10,t.shadow.camera.top=10,t.shadow.camera.bottom=-10,t.shadow.mapSize.setScalar(1024),i.add(t)},te=i=>{const t=i.scene,e=new T(t);e.clipAction(i.animations[0]).play(),n.addEventListener("update",r=>{t.position.set(0,-.5,-3),t.applyMatrix4(n.camera.matrixWorld);const c=a.getLocalInfoFromWorld(t.position);c&&(m.modelHeight=t.position.y-c.point.y),c&&m.modelHeight<=.2?(t.rotateZ(r.delta*Math.PI),n.controls.movementSpeed=0):o(r.delta),Q.update()});const o=r=>{const c=new h(0,0,-10).applyMatrix4(n.camera.matrixWorld);t.lookAt(c),n.controls.movementSpeed=2,e.update(r)}},m={modelHeight:0,mapbox:()=>{a.imgSource=x,a.reload()},google:()=>{a.imgSource=j,a.reload()},bing:()=>{a.imgSource=C,a.reload()},toXmly:()=>{const i=a.localToWorld(a.geo2pos(new h(86,28,15)));n.camera.position.copy(i)},toXian:()=>{const i=a.localToWorld(a.geo2pos(new h(109,34.7,8)));n.camera.position.copy(i)},toBeijing:()=>{const i=a.localToWorld(a.geo2pos(new h(116.4,40,10)));n.camera.position.copy(i)},toXiangGang:()=>{const i=a.localToWorld(a.geo2pos(new h(114.18,22.3,5)));n.camera.position.copy(i)}},oe=i=>{const t=new _,e=t.addFolder("环境");e.add(n.scene.fog,"density",1e-4,.01,1e-5).name("能见度系数"),e.add(n.ambLight,"intensity",.1,2,.1).name("环境光强度");const o=t.addFolder("地图源");o.add(m,"mapbox"),o.add(m,"google").name("google(有偏移)"),o.add(m,"bing").name("bing(有偏移)");const r=t.addFolder("小鸟");r.add(i,"visible").name("显示"),r.add(n.controls,"autoForward").name("自动前进"),r.add(i.position,"y").listen().name("飞行海拔高度km"),r.add(m,"modelHeight").listen().name("飞行距地高度km");const c=t.addFolder("定位");c.add(m,"toXian").name("西安"),c.add(m,"toBeijing").name("北京"),c.add(m,"toXmly").name("喜马拉雅")};U(n);q(a);G(a);I(n,a);
