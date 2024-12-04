import"./modulepreload-polyfill-3cfb730f.js";import{a6 as It,V as l,O as ot,a7 as M,f as ft,K as yt,a8 as Qt,k as y,B as u,Y as rt,a9 as lt,g as s,q as V,aa as X,S as Xt,r as q,P as At,ab as Yt,ac as Zt,ad as Tt,J as Ht,ae as Lt,m as zt,a as Dt}from"./mapSource-1655f2b2.js";import{g as jt}from"./lil-gui.module.min-a1e98589.js";import{D as kt}from"./DRACOLoader-281fe04a.js";import{G as qt}from"./GLTFLoader-de2e2134.js";import{c as Ct,a as Ot,d as Rt,b as Gt,s as Wt,g as Ft,h as Bt,f as Ut}from"./util-242b0d7f.js";const T=new It,d=new l,A=new l,c=new M,ht={X:new l(1,0,0),Y:new l(0,1,0),Z:new l(0,0,1)},it={type:"change"},ct={type:"mouseDown",mode:null},pt={type:"mouseUp",mode:null},dt={type:"objectChange"};class Nt extends ot{constructor(e,n){super(),n===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),n=document),this.isTransformControls=!0,this.visible=!1,this.domElement=n,this.domElement.style.touchAction="none";const o=new ee;this._gizmo=o,this.add(o);const i=new ie;this._plane=i,this.add(i);const r=this;function t(m,g){let z=g;Object.defineProperty(r,m,{get:function(){return z!==void 0?z:g},set:function(Z){z!==Z&&(z=Z,i[m]=Z,o[m]=Z,r.dispatchEvent({type:m+"-changed",value:Z}),r.dispatchEvent(it))}}),r[m]=g,i[m]=g,o[m]=g}t("camera",e),t("object",void 0),t("enabled",!0),t("axis",null),t("mode","translate"),t("translationSnap",null),t("rotationSnap",null),t("scaleSnap",null),t("space","world"),t("size",1),t("dragging",!1),t("showX",!0),t("showY",!0),t("showZ",!0);const p=new l,b=new l,Y=new M,L=new M,j=new l,k=new M,st=new l,W=new l,v=new l,E=0,P=new l;t("worldPosition",p),t("worldPositionStart",b),t("worldQuaternion",Y),t("worldQuaternionStart",L),t("cameraPosition",j),t("cameraQuaternion",k),t("pointStart",st),t("pointEnd",W),t("rotationAxis",v),t("rotationAngle",E),t("eye",P),this._offset=new l,this._startNorm=new l,this._endNorm=new l,this._cameraScale=new l,this._parentPosition=new l,this._parentQuaternion=new M,this._parentQuaternionInv=new M,this._parentScale=new l,this._worldScaleStart=new l,this._worldQuaternionInv=new M,this._worldScale=new l,this._positionStart=new l,this._quaternionStart=new M,this._scaleStart=new l,this._getPointer=Vt.bind(this),this._onPointerDown=Kt.bind(this),this._onPointerHover=Jt.bind(this),this._onPointerMove=$t.bind(this),this._onPointerUp=te.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(e){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(e)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&T.setFromCamera(e,this.camera);const n=nt(this._gizmo.picker[this.mode],T);n?this.axis=n.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&T.setFromCamera(e,this.camera);const n=nt(this._plane,T,!0);n&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(n.point).sub(this.worldPositionStart)),this.dragging=!0,ct.mode=this.mode,this.dispatchEvent(ct)}}pointerMove(e){const n=this.axis,o=this.mode,i=this.object;let r=this.space;if(o==="scale"?r="local":(n==="E"||n==="XYZE"||n==="XYZ")&&(r="world"),i===void 0||n===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&T.setFromCamera(e,this.camera);const t=nt(this._plane,T,!0);if(t){if(this.pointEnd.copy(t.point).sub(this.worldPositionStart),o==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&n!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),n.indexOf("X")===-1&&(this._offset.x=0),n.indexOf("Y")===-1&&(this._offset.y=0),n.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&n!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(i.position.applyQuaternion(c.copy(this._quaternionStart).invert()),n.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),r==="world"&&(i.parent&&i.position.add(d.setFromMatrixPosition(i.parent.matrixWorld)),n.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(d.setFromMatrixPosition(i.parent.matrixWorld))));else if(o==="scale"){if(n.search("XYZ")!==-1){let p=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(p*=-1),A.set(p,p,p)}else d.copy(this.pointStart),A.copy(this.pointEnd),d.applyQuaternion(this._worldQuaternionInv),A.applyQuaternion(this._worldQuaternionInv),A.divide(d),n.search("X")===-1&&(A.x=1),n.search("Y")===-1&&(A.y=1),n.search("Z")===-1&&(A.z=1);i.scale.copy(this._scaleStart).multiply(A),this.scaleSnap&&(n.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(o==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const p=20/this.worldPosition.distanceTo(d.setFromMatrixPosition(this.camera.matrixWorld));let b=!1;n==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(d.copy(this.rotationAxis).cross(this.eye))*p):(n==="X"||n==="Y"||n==="Z")&&(this.rotationAxis.copy(ht[n]),d.copy(ht[n]),r==="local"&&d.applyQuaternion(this.worldQuaternion),d.cross(this.eye),d.length()===0?b=!0:this.rotationAngle=this._offset.dot(d.normalize())*p),(n==="E"||b)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&n!=="E"&&n!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(c.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(c.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(it),this.dispatchEvent(dt)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(pt.mode=this.mode,this.dispatchEvent(pt)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(it),this.dispatchEvent(dt),this.pointStart.copy(this.pointEnd))}getRaycaster(){return T}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function Vt(a){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:a.button};{const e=this.domElement.getBoundingClientRect();return{x:(a.clientX-e.left)/e.width*2-1,y:-(a.clientY-e.top)/e.height*2+1,button:a.button}}}function Jt(a){if(this.enabled)switch(a.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(a));break}}function Kt(a){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(a)),this.pointerDown(this._getPointer(a)))}function $t(a){this.enabled&&this.pointerMove(this._getPointer(a))}function te(a){this.enabled&&(this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(a)))}function nt(a,e,n){const o=e.intersectObject(a,!0);for(let i=0;i<o.length;i++)if(o[i].object.visible||n)return o[i];return!1}const J=new Zt,h=new l(0,1,0),mt=new l(0,0,0),ut=new ft,K=new M,tt=new M,x=new l,wt=new ft,R=new l(1,0,0),H=new l(0,1,0),G=new l(0,0,1),$=new l,C=new l,O=new l;class ee extends ot{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new yt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=new Qt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),o=e.clone();o.opacity=.15;const i=n.clone();i.opacity=.5;const r=e.clone();r.color.setHex(16711680);const t=e.clone();t.color.setHex(65280);const p=e.clone();p.color.setHex(255);const b=e.clone();b.color.setHex(16711680),b.opacity=.5;const Y=e.clone();Y.color.setHex(65280),Y.opacity=.5;const L=e.clone();L.color.setHex(255),L.opacity=.5;const j=e.clone();j.opacity=.25;const k=e.clone();k.color.setHex(16776960),k.opacity=.25,e.clone().color.setHex(16776960);const W=e.clone();W.color.setHex(7895160);const v=new y(0,.04,.1,12);v.translate(0,.05,0);const E=new u(.08,.08,.08);E.translate(0,.04,0);const P=new rt;P.setAttribute("position",new lt([0,0,0,1,0,0],3));const m=new y(.0075,.0075,.5,3);m.translate(0,.25,0);function g(_,F){const S=new q(_,.0075,3,64,F*Math.PI*2);return S.rotateY(Math.PI/2),S.rotateX(Math.PI/2),S}function z(){const _=new rt;return _.setAttribute("position",new lt([0,0,0,1,1,1],3)),_}const Z={X:[[new s(v,r),[.5,0,0],[0,0,-Math.PI/2]],[new s(v,r),[-.5,0,0],[0,0,Math.PI/2]],[new s(m,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new s(v,t),[0,.5,0]],[new s(v,t),[0,-.5,0],[Math.PI,0,0]],[new s(m,t)]],Z:[[new s(v,p),[0,0,.5],[Math.PI/2,0,0]],[new s(v,p),[0,0,-.5],[-Math.PI/2,0,0]],[new s(m,p),null,[Math.PI/2,0,0]]],XYZ:[[new s(new V(.1,0),j.clone()),[0,0,0]]],XY:[[new s(new u(.15,.15,.01),L.clone()),[.15,.15,0]]],YZ:[[new s(new u(.15,.15,.01),b.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new s(new u(.15,.15,.01),Y.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},bt={X:[[new s(new y(.2,0,.6,4),o),[.3,0,0],[0,0,-Math.PI/2]],[new s(new y(.2,0,.6,4),o),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new s(new y(.2,0,.6,4),o),[0,.3,0]],[new s(new y(.2,0,.6,4),o),[0,-.3,0],[0,0,Math.PI]]],Z:[[new s(new y(.2,0,.6,4),o),[0,0,.3],[Math.PI/2,0,0]],[new s(new y(.2,0,.6,4),o),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new s(new V(.2,0),o)]],XY:[[new s(new u(.2,.2,.01),o),[.15,.15,0]]],YZ:[[new s(new u(.2,.2,.01),o),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new s(new u(.2,.2,.01),o),[.15,0,.15],[-Math.PI/2,0,0]]]},_t={START:[[new s(new V(.01,2),i),null,null,null,"helper"]],END:[[new s(new V(.01,2),i),null,null,null,"helper"]],DELTA:[[new X(z(),i),null,null,null,"helper"]],X:[[new X(P,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new X(P,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new X(P,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},gt={XYZE:[[new s(g(.5,1),W),null,[0,Math.PI/2,0]]],X:[[new s(g(.5,.5),r)]],Y:[[new s(g(.5,.5),t),null,[0,0,-Math.PI/2]]],Z:[[new s(g(.5,.5),p),null,[0,Math.PI/2,0]]],E:[[new s(g(.75,1),k),null,[0,Math.PI/2,0]]]},St={AXIS:[[new X(P,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},Pt={XYZE:[[new s(new Xt(.25,10,8),o)]],X:[[new s(new q(.5,.1,4,24),o),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new s(new q(.5,.1,4,24),o),[0,0,0],[Math.PI/2,0,0]]],Z:[[new s(new q(.5,.1,4,24),o),[0,0,0],[0,0,-Math.PI/2]]],E:[[new s(new q(.75,.1,2,24),o)]]},xt={X:[[new s(E,r),[.5,0,0],[0,0,-Math.PI/2]],[new s(m,r),[0,0,0],[0,0,-Math.PI/2]],[new s(E,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new s(E,t),[0,.5,0]],[new s(m,t)],[new s(E,t),[0,-.5,0],[0,0,Math.PI]]],Z:[[new s(E,p),[0,0,.5],[Math.PI/2,0,0]],[new s(m,p),[0,0,0],[Math.PI/2,0,0]],[new s(E,p),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new s(new u(.15,.15,.01),L),[.15,.15,0]]],YZ:[[new s(new u(.15,.15,.01),b),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new s(new u(.15,.15,.01),Y),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new s(new u(.1,.1,.1),j.clone())]]},Mt={X:[[new s(new y(.2,0,.6,4),o),[.3,0,0],[0,0,-Math.PI/2]],[new s(new y(.2,0,.6,4),o),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new s(new y(.2,0,.6,4),o),[0,.3,0]],[new s(new y(.2,0,.6,4),o),[0,-.3,0],[0,0,Math.PI]]],Z:[[new s(new y(.2,0,.6,4),o),[0,0,.3],[Math.PI/2,0,0]],[new s(new y(.2,0,.6,4),o),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new s(new u(.2,.2,.01),o),[.15,.15,0]]],YZ:[[new s(new u(.2,.2,.01),o),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new s(new u(.2,.2,.01),o),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new s(new u(.2,.2,.2),o),[0,0,0]]]},vt={X:[[new X(P,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new X(P,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new X(P,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function I(_){const F=new ot;for(const S in _)for(let D=_[S].length;D--;){const f=_[S][D][0].clone(),B=_[S][D][1],U=_[S][D][2],N=_[S][D][3],Et=_[S][D][4];f.name=S,f.tag=Et,B&&f.position.set(B[0],B[1],B[2]),U&&f.rotation.set(U[0],U[1],U[2]),N&&f.scale.set(N[0],N[1],N[2]),f.updateMatrix();const at=f.geometry.clone();at.applyMatrix4(f.matrix),f.geometry=at,f.renderOrder=1/0,f.position.set(0,0,0),f.rotation.set(0,0,0),f.scale.set(1,1,1),F.add(f)}return F}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=I(Z)),this.add(this.gizmo.rotate=I(gt)),this.add(this.gizmo.scale=I(xt)),this.add(this.picker.translate=I(bt)),this.add(this.picker.rotate=I(Pt)),this.add(this.picker.scale=I(Mt)),this.add(this.helper.translate=I(_t)),this.add(this.helper.rotate=I(St)),this.add(this.helper.scale=I(vt)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const o=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:tt;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let r=0;r<i.length;r++){const t=i[r];t.visible=!0,t.rotation.set(0,0,0),t.position.copy(this.worldPosition);let p;if(this.camera.isOrthographicCamera?p=(this.camera.top-this.camera.bottom)/this.camera.zoom:p=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),t.scale.set(1,1,1).multiplyScalar(p*this.size/4),t.tag==="helper"){t.visible=!1,t.name==="AXIS"?(t.visible=!!this.axis,this.axis==="X"&&(c.setFromEuler(J.set(0,0,0)),t.quaternion.copy(o).multiply(c),Math.abs(h.copy(R).applyQuaternion(o).dot(this.eye))>.9&&(t.visible=!1)),this.axis==="Y"&&(c.setFromEuler(J.set(0,0,Math.PI/2)),t.quaternion.copy(o).multiply(c),Math.abs(h.copy(H).applyQuaternion(o).dot(this.eye))>.9&&(t.visible=!1)),this.axis==="Z"&&(c.setFromEuler(J.set(0,Math.PI/2,0)),t.quaternion.copy(o).multiply(c),Math.abs(h.copy(G).applyQuaternion(o).dot(this.eye))>.9&&(t.visible=!1)),this.axis==="XYZE"&&(c.setFromEuler(J.set(0,Math.PI/2,0)),h.copy(this.rotationAxis),t.quaternion.setFromRotationMatrix(ut.lookAt(mt,h,H)),t.quaternion.multiply(c),t.visible=this.dragging),this.axis==="E"&&(t.visible=!1)):t.name==="START"?(t.position.copy(this.worldPositionStart),t.visible=this.dragging):t.name==="END"?(t.position.copy(this.worldPosition),t.visible=this.dragging):t.name==="DELTA"?(t.position.copy(this.worldPositionStart),t.quaternion.copy(this.worldQuaternionStart),d.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),d.applyQuaternion(this.worldQuaternionStart.clone().invert()),t.scale.copy(d),t.visible=this.dragging):(t.quaternion.copy(o),this.dragging?t.position.copy(this.worldPositionStart):t.position.copy(this.worldPosition),this.axis&&(t.visible=this.axis.search(t.name)!==-1));continue}t.quaternion.copy(o),this.mode==="translate"||this.mode==="scale"?(t.name==="X"&&Math.abs(h.copy(R).applyQuaternion(o).dot(this.eye))>.99&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="Y"&&Math.abs(h.copy(H).applyQuaternion(o).dot(this.eye))>.99&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="Z"&&Math.abs(h.copy(G).applyQuaternion(o).dot(this.eye))>.99&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="XY"&&Math.abs(h.copy(G).applyQuaternion(o).dot(this.eye))<.2&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="YZ"&&Math.abs(h.copy(R).applyQuaternion(o).dot(this.eye))<.2&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),t.name==="XZ"&&Math.abs(h.copy(H).applyQuaternion(o).dot(this.eye))<.2&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1)):this.mode==="rotate"&&(K.copy(o),h.copy(this.eye).applyQuaternion(c.copy(o).invert()),t.name.search("E")!==-1&&t.quaternion.setFromRotationMatrix(ut.lookAt(this.eye,mt,H)),t.name==="X"&&(c.setFromAxisAngle(R,Math.atan2(-h.y,h.z)),c.multiplyQuaternions(K,c),t.quaternion.copy(c)),t.name==="Y"&&(c.setFromAxisAngle(H,Math.atan2(h.x,h.z)),c.multiplyQuaternions(K,c),t.quaternion.copy(c)),t.name==="Z"&&(c.setFromAxisAngle(G,Math.atan2(h.y,h.x)),c.multiplyQuaternions(K,c),t.quaternion.copy(c))),t.visible=t.visible&&(t.name.indexOf("X")===-1||this.showX),t.visible=t.visible&&(t.name.indexOf("Y")===-1||this.showY),t.visible=t.visible&&(t.name.indexOf("Z")===-1||this.showZ),t.visible=t.visible&&(t.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),t.material._color=t.material._color||t.material.color.clone(),t.material._opacity=t.material._opacity||t.material.opacity,t.material.color.copy(t.material._color),t.material.opacity=t.material._opacity,this.enabled&&this.axis&&(t.name===this.axis||this.axis.split("").some(function(b){return t.name===b}))&&(t.material.color.setHex(16776960),t.material.opacity=1)}super.updateMatrixWorld(e)}}class ie extends s{constructor(){super(new At(1e5,1e5,2,2),new yt({visible:!1,wireframe:!0,side:Yt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let n=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(n="local"),$.copy(R).applyQuaternion(n==="local"?this.worldQuaternion:tt),C.copy(H).applyQuaternion(n==="local"?this.worldQuaternion:tt),O.copy(G).applyQuaternion(n==="local"?this.worldQuaternion:tt),h.copy(C),this.mode){case"translate":case"scale":switch(this.axis){case"X":h.copy(this.eye).cross($),x.copy($).cross(h);break;case"Y":h.copy(this.eye).cross(C),x.copy(C).cross(h);break;case"Z":h.copy(this.eye).cross(O),x.copy(O).cross(h);break;case"XY":x.copy(O);break;case"YZ":x.copy($);break;case"XZ":h.copy(O),x.copy(C);break;case"XYZ":case"E":x.set(0,0,0);break}break;case"rotate":default:x.set(0,0,0)}x.length()===0?this.quaternion.copy(this.cameraQuaternion):(wt.lookAt(d.set(0,0,0),x,h),this.quaternion.setFromRotationMatrix(wt)),super.updateMatrixWorld(e)}}const Q=Ct(Dt,zt),et=new l(108.9507,34.1915,.5),ne=new l(et.x-.005,et.y-.005,.6),w=Ot("#map",Q,et,ne);w.renderer.shadowMap.enabled=!0;Q.receiveShadow=!0;w.ambLight.intensity=.5;w.dirLight.intensity=.5;w.controls.saveState();(()=>{const a=new kt;a.setDecoderPath("../lib/draco/gltf/");const e=new qt;e.setDRACOLoader(a);let n;e.load("../model/LittlestTokyo.glb",function(o){n=o.scene,n.traverse(r=>{r.castShadow=!0,r.receiveShadow=!0}),n.castShadow=!0,w.scene.add(n);const i=new Tt(n);i.clipAction(o.animations[0]).play(),Q.addEventListener("update",r=>{i.update(r.delta)}),ae(n),oe(n)})})();const oe=a=>{const e=new Ht(16777215,3);e.target=a,e.position.set(500,1e4,1e4),e.castShadow=!0,e.shadow.camera.near=.1,e.shadow.camera.far=10,e.shadow.camera.left=-1,e.shadow.camera.right=1,e.shadow.camera.top=1,e.shadow.camera.bottom=-1,e.shadow.mapSize.setScalar(1024),a.add(e),w.scene.add(new Lt(e.shadow.camera))},se=a=>{const e=new Nt(w.camera,w.renderer.domElement);return e.attach(a),e.addEventListener("dragging-changed",function(n){w.controls.enabled=!n.value}),e.enabled=!1,e.visible=!1,w.scene.add(e),e},ae=a=>{const e=Q.localToWorld(Q.geo2pos(et));e.setY(.55);const n={reset:()=>{a.scale.setScalar(5e-4),a.position.copy(e),w.controls.reset()}};n.reset();const o=se(a),i=new jt;i.add(w,"fogFactor",.1,5,.1).listen().name("雾(能见度系数)"),i.add(o,"enabled").onChange(r=>o.visible=r).name("模型编辑"),i.add(o,"mode",{平移:"translate",旋转:"rotate",缩放:"scale"}).name("编辑方式"),i.add(n,"reset").name("复位")};Rt(Q);Gt(Q);Wt(w,Q);Ft(Q);Bt(w);Ut(w);
