import"./modulepreload-polyfill-3cfb730f.js";import{a7 as Dt,V as h,O as at,a8 as D,d as _t,J as Pt,a9 as Ct,i as A,B as E,Z as rt,aa as ct,e as a,n as J,ab as X,S as Rt,o as j,P as Xt,ac as Qt,ad as Ht,ae as Yt,af as ht,ag as dt,ah as Zt,a6 as pt,r as Ot,H as St,ai as zt,y as jt,m as Gt,a as Ft}from"./mapSource-6ce90261.js";import{g as qt}from"./lil-gui.module.min-a1e98589.js";import{G as Ut}from"./GLTFLoader-a2adb710.js";import{c as Wt,a as Bt,e as Nt,b as Vt,s as Jt,g as Kt,h as $t,f as te}from"./util-f7379211.js";const Z=new Dt,M=new h,Q=new h,u=new D,ut={X:new h(1,0,0),Y:new h(0,1,0),Z:new h(0,0,1)},it={type:"change"},mt={type:"mouseDown",mode:null},ft={type:"mouseUp",mode:null},wt={type:"objectChange"};class ee extends at{constructor(e,o){super(),o===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),o=document),this.isTransformControls=!0,this.visible=!1,this.domElement=o,this.domElement.style.touchAction="none";const i=new re;this._gizmo=i,this.add(i);const n=new le;this._plane=n,this.add(n);const s=this;function t(f,S){let C=S;Object.defineProperty(s,f,{get:function(){return C!==void 0?C:S},set:function(Y){C!==Y&&(C=Y,n[f]=Y,i[f]=Y,s.dispatchEvent({type:f+"-changed",value:Y}),s.dispatchEvent(it))}}),s[f]=S,n[f]=S,i[f]=S}t("camera",e),t("object",void 0),t("enabled",!0),t("axis",null),t("mode","translate"),t("translationSnap",null),t("rotationSnap",null),t("scaleSnap",null),t("space","world"),t("size",1),t("dragging",!1),t("showX",!0),t("showY",!0),t("showZ",!0);const r=new h,c=new h,w=new D,m=new D,y=new h,d=new D,g=new h,v=new h,_=new h,P=0,x=new h;t("worldPosition",r),t("worldPositionStart",c),t("worldQuaternion",w),t("worldQuaternionStart",m),t("cameraPosition",y),t("cameraQuaternion",d),t("pointStart",g),t("pointEnd",v),t("rotationAxis",_),t("rotationAngle",P),t("eye",x),this._offset=new h,this._startNorm=new h,this._endNorm=new h,this._cameraScale=new h,this._parentPosition=new h,this._parentQuaternion=new D,this._parentQuaternionInv=new D,this._parentScale=new h,this._worldScaleStart=new h,this._worldQuaternionInv=new D,this._worldScale=new h,this._positionStart=new h,this._quaternionStart=new D,this._scaleStart=new h,this._getPointer=ne.bind(this),this._onPointerDown=oe.bind(this),this._onPointerHover=ie.bind(this),this._onPointerMove=se.bind(this),this._onPointerUp=ae.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(e){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(e)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Z.setFromCamera(e,this.camera);const o=ot(this._gizmo.picker[this.mode],Z);o?this.axis=o.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Z.setFromCamera(e,this.camera);const o=ot(this._plane,Z,!0);o&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(o.point).sub(this.worldPositionStart)),this.dragging=!0,mt.mode=this.mode,this.dispatchEvent(mt)}}pointerMove(e){const o=this.axis,i=this.mode,n=this.object;let s=this.space;if(i==="scale"?s="local":(o==="E"||o==="XYZE"||o==="XYZ")&&(s="world"),n===void 0||o===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Z.setFromCamera(e,this.camera);const t=ot(this._plane,Z,!0);if(t){if(this.pointEnd.copy(t.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&o!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),o.indexOf("X")===-1&&(this._offset.x=0),o.indexOf("Y")===-1&&(this._offset.y=0),o.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&o!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),n.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(n.position.applyQuaternion(u.copy(this._quaternionStart).invert()),o.search("X")!==-1&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),o.search("Y")!==-1&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),o.search("Z")!==-1&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.position.applyQuaternion(this._quaternionStart)),s==="world"&&(n.parent&&n.position.add(M.setFromMatrixPosition(n.parent.matrixWorld)),o.search("X")!==-1&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),o.search("Y")!==-1&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),o.search("Z")!==-1&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.parent&&n.position.sub(M.setFromMatrixPosition(n.parent.matrixWorld))));else if(i==="scale"){if(o.search("XYZ")!==-1){let r=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(r*=-1),Q.set(r,r,r)}else M.copy(this.pointStart),Q.copy(this.pointEnd),M.applyQuaternion(this._worldQuaternionInv),Q.applyQuaternion(this._worldQuaternionInv),Q.divide(M),o.search("X")===-1&&(Q.x=1),o.search("Y")===-1&&(Q.y=1),o.search("Z")===-1&&(Q.z=1);n.scale.copy(this._scaleStart).multiply(Q),this.scaleSnap&&(o.search("X")!==-1&&(n.scale.x=Math.round(n.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),o.search("Y")!==-1&&(n.scale.y=Math.round(n.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),o.search("Z")!==-1&&(n.scale.z=Math.round(n.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const r=20/this.worldPosition.distanceTo(M.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;o==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(M.copy(this.rotationAxis).cross(this.eye))*r):(o==="X"||o==="Y"||o==="Z")&&(this.rotationAxis.copy(ut[o]),M.copy(ut[o]),s==="local"&&M.applyQuaternion(this.worldQuaternion),M.cross(this.eye),M.length()===0?c=!0:this.rotationAngle=this._offset.dot(M.normalize())*r),(o==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&o!=="E"&&o!=="XYZE"?(n.quaternion.copy(this._quaternionStart),n.quaternion.multiply(u.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),n.quaternion.copy(u.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),n.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(it),this.dispatchEvent(wt)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(ft.mode=this.mode,this.dispatchEvent(ft)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(it),this.dispatchEvent(wt),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Z}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function ne(l){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:l.button};{const e=this.domElement.getBoundingClientRect();return{x:(l.clientX-e.left)/e.width*2-1,y:-(l.clientY-e.top)/e.height*2+1,button:l.button}}}function ie(l){if(this.enabled)switch(l.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(l));break}}function oe(l){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(l.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(l)),this.pointerDown(this._getPointer(l)))}function se(l){this.enabled&&this.pointerMove(this._getPointer(l))}function ae(l){this.enabled&&(this.domElement.releasePointerCapture(l.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(l)))}function ot(l,e,o){const i=e.intersectObject(l,!0);for(let n=0;n<i.length;n++)if(i[n].object.visible||o)return i[n];return!1}const K=new Ht,p=new h(0,1,0),yt=new h(0,0,0),bt=new _t,$=new D,et=new D,k=new h,gt=new _t,q=new h(1,0,0),O=new h(0,1,0),U=new h(0,0,1),tt=new h,G=new h,F=new h;class re extends at{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Pt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),o=new Ct({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const n=o.clone();n.opacity=.5;const s=e.clone();s.color.setHex(16711680);const t=e.clone();t.color.setHex(65280);const r=e.clone();r.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const w=e.clone();w.color.setHex(65280),w.opacity=.5;const m=e.clone();m.color.setHex(255),m.opacity=.5;const y=e.clone();y.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const v=e.clone();v.color.setHex(7895160);const _=new A(0,.04,.1,12);_.translate(0,.05,0);const P=new E(.08,.08,.08);P.translate(0,.04,0);const x=new rt;x.setAttribute("position",new ct([0,0,0,1,0,0],3));const f=new A(.0075,.0075,.5,3);f.translate(0,.25,0);function S(T,W){const L=new j(T,.0075,3,64,W*Math.PI*2);return L.rotateY(Math.PI/2),L.rotateX(Math.PI/2),L}function C(){const T=new rt;return T.setAttribute("position",new ct([0,0,0,1,1,1],3)),T}const Y={X:[[new a(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new a(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new a(f,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new a(_,t),[0,.5,0]],[new a(_,t),[0,-.5,0],[Math.PI,0,0]],[new a(f,t)]],Z:[[new a(_,r),[0,0,.5],[Math.PI/2,0,0]],[new a(_,r),[0,0,-.5],[-Math.PI/2,0,0]],[new a(f,r),null,[Math.PI/2,0,0]]],XYZ:[[new a(new J(.1,0),y.clone()),[0,0,0]]],XY:[[new a(new E(.15,.15,.01),m.clone()),[.15,.15,0]]],YZ:[[new a(new E(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new a(new E(.15,.15,.01),w.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},xt={X:[[new a(new A(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new a(new A(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new a(new A(.2,0,.6,4),i),[0,.3,0]],[new a(new A(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new a(new A(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new a(new A(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new a(new J(.2,0),i)]],XY:[[new a(new E(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new a(new E(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new a(new E(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},Mt={START:[[new a(new J(.01,2),n),null,null,null,"helper"]],END:[[new a(new J(.01,2),n),null,null,null,"helper"]],DELTA:[[new X(C(),n),null,null,null,"helper"]],X:[[new X(x,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new X(x,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new X(x,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},Et={XYZE:[[new a(S(.5,1),v),null,[0,Math.PI/2,0]]],X:[[new a(S(.5,.5),s)]],Y:[[new a(S(.5,.5),t),null,[0,0,-Math.PI/2]]],Z:[[new a(S(.5,.5),r),null,[0,Math.PI/2,0]]],E:[[new a(S(.75,1),d),null,[0,Math.PI/2,0]]]},vt={AXIS:[[new X(x,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},It={XYZE:[[new a(new Rt(.25,10,8),i)]],X:[[new a(new j(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new a(new j(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new a(new j(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new a(new j(.75,.1,2,24),i)]]},At={X:[[new a(P,s),[.5,0,0],[0,0,-Math.PI/2]],[new a(f,s),[0,0,0],[0,0,-Math.PI/2]],[new a(P,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new a(P,t),[0,.5,0]],[new a(f,t)],[new a(P,t),[0,-.5,0],[0,0,Math.PI]]],Z:[[new a(P,r),[0,0,.5],[Math.PI/2,0,0]],[new a(f,r),[0,0,0],[Math.PI/2,0,0]],[new a(P,r),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new a(new E(.15,.15,.01),m),[.15,.15,0]]],YZ:[[new a(new E(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new a(new E(.15,.15,.01),w),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new a(new E(.1,.1,.1),y.clone())]]},Tt={X:[[new a(new A(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new a(new A(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new a(new A(.2,0,.6,4),i),[0,.3,0]],[new a(new A(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new a(new A(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new a(new A(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new a(new E(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new a(new E(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new a(new E(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new a(new E(.2,.2,.2),i),[0,0,0]]]},Lt={X:[[new X(x,n.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new X(x,n.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new X(x,n.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function R(T){const W=new at;for(const L in T)for(let z=T[L].length;z--;){const I=T[L][z][0].clone(),B=T[L][z][1],N=T[L][z][2],V=T[L][z][3],kt=T[L][z][4];I.name=L,I.tag=kt,B&&I.position.set(B[0],B[1],B[2]),N&&I.rotation.set(N[0],N[1],N[2]),V&&I.scale.set(V[0],V[1],V[2]),I.updateMatrix();const lt=I.geometry.clone();lt.applyMatrix4(I.matrix),I.geometry=lt,I.renderOrder=1/0,I.position.set(0,0,0),I.rotation.set(0,0,0),I.scale.set(1,1,1),W.add(I)}return W}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=R(Y)),this.add(this.gizmo.rotate=R(Et)),this.add(this.gizmo.scale=R(At)),this.add(this.picker.translate=R(xt)),this.add(this.picker.rotate=R(It)),this.add(this.picker.scale=R(Tt)),this.add(this.helper.translate=R(Mt)),this.add(this.helper.rotate=R(vt)),this.add(this.helper.scale=R(Lt)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:et;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let n=[];n=n.concat(this.picker[this.mode].children),n=n.concat(this.gizmo[this.mode].children),n=n.concat(this.helper[this.mode].children);for(let s=0;s<n.length;s++){const t=n[s];t.visible=!0,t.rotation.set(0,0,0),t.position.copy(this.worldPosition);let r;if(this.camera.isOrthographicCamera?r=(this.camera.top-this.camera.bottom)/this.camera.zoom:r=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),t.scale.set(1,1,1).multiplyScalar(r*this.size/4),t.tag==="helper"){t.visible=!1,t.name==="AXIS"?(t.visible=!!this.axis,this.axis==="X"&&(u.setFromEuler(K.set(0,0,0)),t.quaternion.copy(i).multiply(u),Math.abs(p.copy(q).applyQuaternion(i).dot(this.eye))>.9&&(t.visible=!1)),this.axis==="Y"&&(u.setFromEuler(K.set(0,0,Math.PI/2)),t.quaternion.copy(i).multiply(u),Math.abs(p.copy(O).applyQuaternion(i).dot(this.eye))>.9&&(t.visible=!1)),this.axis==="Z"&&(u.setFromEuler(K.set(0,Math.PI/2,0)),t.quaternion.copy(i).multiply(u),Math.abs(p.copy(U).applyQuaternion(i).dot(this.eye))>.9&&(t.visible=!1)),this.axis==="XYZE"&&(u.setFromEuler(K.set(0,Math.PI/2,0)),p.copy(this.rotationAxis),t.quaternion.setFromRotationMatrix(bt.lookAt(yt,p,O)),t.quaternion.multiply(u),t.visible=this.dragging),this.axis==="E"&&(t.visible=!1)):t.name==="START"?(t.position.copy(this.worldPositionStart),t.visible=this.dragging):t.name==="END"?(t.position.copy(this.worldPosition),t.visible=this.dragging):t.name==="DELTA"?(t.position.copy(this.worldPositionStart),t.quaternion.copy(this.worldQuaternionStart),M.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),M.applyQuaternion(this.worldQuaternionStart.clone().invert()),t.scale.copy(M),t.visible=this.dragging):(t.quaternion.copy(i),this.dragging?t.position.copy(this.worldPositionStart):t.position.copy(this.worldPosition),this.axis&&(t.visible=this.axis.search(t.name)!==-1));continue}t.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(t.name==="X"&&Math.abs(p.copy(q).applyQuaternion(i).dot(this.eye))>.99&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="Y"&&Math.abs(p.copy(O).applyQuaternion(i).dot(this.eye))>.99&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="Z"&&Math.abs(p.copy(U).applyQuaternion(i).dot(this.eye))>.99&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="XY"&&Math.abs(p.copy(U).applyQuaternion(i).dot(this.eye))<.2&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="YZ"&&Math.abs(p.copy(q).applyQuaternion(i).dot(this.eye))<.2&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="XZ"&&Math.abs(p.copy(O).applyQuaternion(i).dot(this.eye))<.2&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1)):this.mode==="rotate"&&($.copy(i),p.copy(this.eye).applyQuaternion(u.copy(i).invert()),t.name.search("E")!==-1&&t.quaternion.setFromRotationMatrix(bt.lookAt(this.eye,yt,O)),t.name==="X"&&(u.setFromAxisAngle(q,Math.atan2(-p.y,p.z)),u.multiplyQuaternions($,u),t.quaternion.copy(u)),t.name==="Y"&&(u.setFromAxisAngle(O,Math.atan2(p.x,p.z)),u.multiplyQuaternions($,u),t.quaternion.copy(u)),t.name==="Z"&&(u.setFromAxisAngle(U,Math.atan2(p.y,p.x)),u.multiplyQuaternions($,u),t.quaternion.copy(u))),t.visible=t.visible&&(t.name.indexOf("X")===-1||this.showX),t.visible=t.visible&&(t.name.indexOf("Y")===-1||this.showY),t.visible=t.visible&&(t.name.indexOf("Z")===-1||this.showZ),t.visible=t.visible&&(t.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),t.material._color=t.material._color||t.material.color.clone(),t.material._opacity=t.material._opacity||t.material.opacity,t.material.color.copy(t.material._color),t.material.opacity=t.material._opacity,this.enabled&&this.axis&&(t.name===this.axis||this.axis.split("").some(function(c){return t.name===c}))&&(t.material.color.setHex(16776960),t.material.opacity=1)}super.updateMatrixWorld(e)}}class le extends a{constructor(){super(new Xt(1e5,1e5,2,2),new Pt({visible:!1,wireframe:!0,side:Qt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let o=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(o="local"),tt.copy(q).applyQuaternion(o==="local"?this.worldQuaternion:et),G.copy(O).applyQuaternion(o==="local"?this.worldQuaternion:et),F.copy(U).applyQuaternion(o==="local"?this.worldQuaternion:et),p.copy(G),this.mode){case"translate":case"scale":switch(this.axis){case"X":p.copy(this.eye).cross(tt),k.copy(tt).cross(p);break;case"Y":p.copy(this.eye).cross(G),k.copy(G).cross(p);break;case"Z":p.copy(this.eye).cross(F),k.copy(F).cross(p);break;case"XY":k.copy(F);break;case"YZ":k.copy(tt);break;case"XZ":p.copy(F),k.copy(G);break;case"XYZ":case"E":k.set(0,0,0);break}break;case"rotate":default:k.set(0,0,0)}k.length()===0?this.quaternion.copy(this.cameraQuaternion):(gt.lookAt(M.set(0,0,0),k,p),this.quaternion.setFromRotationMatrix(gt)),super.updateMatrixWorld(e)}}const st=new WeakMap;class ce extends Yt{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,o,i,n){const s=new ht(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,t=>{this.parse(t,o,n)},i,n)}parse(e,o,i=()=>{}){this.decodeDracoFile(e,o,null,null,dt,i).catch(i)}decodeDracoFile(e,o,i,n,s=Zt,t=()=>{}){const r={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(e,r).then(o).catch(t)}decodeGeometry(e,o){const i=JSON.stringify(o);if(st.has(e)){const c=st.get(e);if(c.key===i)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,t=e.byteLength,r=this._getWorker(s,t).then(c=>(n=c,new Promise((w,m)=>{n._callbacks[s]={resolve:w,reject:m},n.postMessage({type:"decode",id:s,taskConfig:o,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return r.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),st.set(e,{key:i,promise:r}),r}_createGeometry(e){const o=new rt;e.index&&o.setIndex(new pt(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i],s=n.name,t=n.array,r=n.itemSize,c=new pt(t,r);s==="color"&&(this._assignVertexColorSpace(c,n.vertexColorSpace),c.normalized=!(t instanceof Float32Array)),o.setAttribute(s,c)}return o}_assignVertexColorSpace(e,o){if(o!==dt)return;const i=new Ot;for(let n=0,s=e.count;n<s;n++)i.fromBufferAttribute(e,n).convertSRGBToLinear(),e.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(e,o){const i=new ht(this.manager);return i.setPath(this.decoderPath),i.setResponseType(o),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(e,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",o=[];return e?o.push(this._loadLibrary("draco_decoder.js","text")):(o.push(this._loadLibrary("draco_wasm_wrapper.js","text")),o.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(o).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=he.toString(),t=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([t]))}),this.decoderPending}_getWorker(e,o){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const t=s.data;switch(t.type){case"decode":n._callbacks[t.id].resolve(t);break;case"error":n._callbacks[t.id].reject(t);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+t.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=o,i._taskLoad+=o,i})}_releaseTask(e,o){e._taskLoad-=e._taskCosts[o],delete e._callbacks[o],delete e._taskCosts[o]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function he(){let l,e;onmessage=function(t){const r=t.data;switch(r.type){case"init":l=r.decoderConfig,e=new Promise(function(m){l.onModuleLoaded=function(y){m({draco:y})},DracoDecoderModule(l)});break;case"decode":const c=r.buffer,w=r.taskConfig;e.then(m=>{const y=m.draco,d=new y.Decoder;try{const g=o(y,d,new Int8Array(c),w),v=g.attributes.map(_=>_.array.buffer);g.index&&v.push(g.index.array.buffer),self.postMessage({type:"decode",id:r.id,geometry:g},v)}catch(g){console.error(g),self.postMessage({type:"error",id:r.id,error:g.message})}finally{y.destroy(d)}});break}};function o(t,r,c,w){const m=w.attributeIDs,y=w.attributeTypes;let d,g;const v=r.GetEncodedGeometryType(c);if(v===t.TRIANGULAR_MESH)d=new t.Mesh,g=r.DecodeArrayToMesh(c,c.byteLength,d);else if(v===t.POINT_CLOUD)d=new t.PointCloud,g=r.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!g.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+g.error_msg());const _={index:null,attributes:[]};for(const P in m){const x=self[y[P]];let f,S;if(w.useUniqueIDs)S=m[P],f=r.GetAttributeByUniqueId(d,S);else{if(S=r.GetAttributeId(d,t[m[P]]),S===-1)continue;f=r.GetAttribute(d,S)}const C=n(t,r,d,P,x,f);P==="color"&&(C.vertexColorSpace=w.vertexColorSpace),_.attributes.push(C)}return v===t.TRIANGULAR_MESH&&(_.index=i(t,r,d)),t.destroy(d),_}function i(t,r,c){const m=c.num_faces()*3,y=m*4,d=t._malloc(y);r.GetTrianglesUInt32Array(c,y,d);const g=new Uint32Array(t.HEAPF32.buffer,d,m).slice();return t._free(d),{array:g,itemSize:1}}function n(t,r,c,w,m,y){const d=y.num_components(),v=c.num_points()*d,_=v*m.BYTES_PER_ELEMENT,P=s(t,m),x=t._malloc(_);r.GetAttributeDataArrayForAllPoints(c,y,P,_,x);const f=new m(t.HEAPF32.buffer,x,v).slice();return t._free(x),{name:w,array:f,itemSize:d}}function s(t,r){switch(r){case Float32Array:return t.DT_FLOAT32;case Int8Array:return t.DT_INT8;case Int16Array:return t.DT_INT16;case Int32Array:return t.DT_INT32;case Uint8Array:return t.DT_UINT8;case Uint16Array:return t.DT_UINT16;case Uint32Array:return t.DT_UINT32}}}const H=Wt(Ft,Gt),nt=H.geo2pos(new h(108.9507,34.1915)),de=new h(nt.x,nt.y,.5),pe=new h(-.5,-.5,0),b=Bt("#map",de,pe);b.renderer.shadowMap.enabled=!0;H.receiveShadow=!0;b.scene.add(H);b.ambLight.intensity=.5;b.dirLight.intensity=.5;const ue=new St(b.dirLight.shadow.camera);b.scene.add(ue);b.controls.maxPolarAngle=Math.PI/2.4;b.controls.saveState();(()=>{const l=new ce;l.setDecoderPath("../lib/draco/gltf/");const e=new Ut;e.setDRACOLoader(l);let o;e.load("../model/LittlestTokyo.glb",function(i){o=i.scene,o.traverse(s=>{s.castShadow=!0,s.receiveShadow=!0}),o.castShadow=!0,b.scene.add(o);const n=new zt(o);n.clipAction(i.animations[0]).play(),H.addEventListener("update",s=>{n.update(s.delta)}),we(o),me(o)})})();const me=l=>{const e=new jt(16777215,3);e.target=l,e.position.set(500,1e4,1e4),e.castShadow=!0,e.shadow.camera.near=.1,e.shadow.camera.far=10,e.shadow.camera.left=-1,e.shadow.camera.right=1,e.shadow.camera.top=1,e.shadow.camera.bottom=-1,e.shadow.mapSize.setScalar(1024),l.add(e),b.scene.add(new St(e.shadow.camera))},fe=l=>{const e=new ee(b.camera,b.renderer.domElement);return e.attach(l),e.addEventListener("dragging-changed",function(o){b.controls.enabled=!o.value}),e.enabled=!1,e.visible=!1,b.scene.add(e),e},we=l=>{const e={initModel:()=>{l.scale.setScalar(5e-4),l.position.set(nt.x,nt.y,.55),l.rotation.set(Math.PI/2,0,0),b.controls.reset()}};e.initModel();const o=fe(l),i=new qt;i.add(b,"fogFactor",.1,5,.1).listen().name("雾(能见度系数)"),i.add(o,"enabled").onChange(n=>o.visible=n).name("模型编辑"),i.add(o,"mode",{平移:"translate",旋转:"rotate",缩放:"scale"}).name("编辑方式"),i.add(e,"initModel").name("复位")};Nt(H);Vt(H);Jt(b,H);Kt(H);$t(b);te(b);
