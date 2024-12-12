import{bz as We,bv as Be,w as Ge,V as u,bA as y,bB as T,a7 as Pe,bC as Oe,b as m,d as qe}from"./mapSource-90889b65.js";const we={type:"change"},$={type:"start"},Me={type:"end"},F=new We,je=new Be,Qe=Math.cos(70*qe.DEG2RAD);class ve extends Ge{constructor(I,V){super(),this.object=I,this.domElement=V,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new u,this.cursor=new u,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:y.ROTATE,MIDDLE:y.DOLLY,RIGHT:y.PAN},this.touches={ONE:T.ROTATE,TWO:T.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",J),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",J),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(we),e.update(),r=a.NONE},this.update=function(){const t=new u,o=new Pe().setFromUnitVectors(I.up,new u(0,1,0)),n=o.clone().invert(),i=new u,l=new Pe,E=new u,d=2*Math.PI;return function(Ve=null){const Ee=e.object.position;t.copy(Ee).sub(e.target),t.applyQuaternion(o),s.setFromVector3(t),e.autoRotate&&r===a.NONE&&Y(Le(Ve)),e.enableDamping?(s.theta+=p.theta*e.dampingFactor,s.phi+=p.phi*e.dampingFactor):(s.theta+=p.theta,s.phi+=p.phi);let h=e.minAzimuthAngle,f=e.maxAzimuthAngle;isFinite(h)&&isFinite(f)&&(h<-Math.PI?h+=d:h>Math.PI&&(h-=d),f<-Math.PI?f+=d:f>Math.PI&&(f-=d),h<=f?s.theta=Math.max(h,Math.min(f,s.theta)):s.theta=s.theta>(h+f)/2?Math.max(h,s.theta):Math.min(f,s.theta)),s.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,s.phi)),s.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(L,e.dampingFactor):e.target.add(L),e.target.sub(e.cursor),e.target.clampLength(e.minTargetRadius,e.maxTargetRadius),e.target.add(e.cursor);let _=!1;if(e.zoomToCursor&&H||e.object.isOrthographicCamera)s.radius=Q(s.radius);else{const b=s.radius;s.radius=Q(s.radius*P),_=b!=s.radius}if(t.setFromSpherical(s),t.applyQuaternion(n),Ee.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(p.theta*=1-e.dampingFactor,p.phi*=1-e.dampingFactor,L.multiplyScalar(1-e.dampingFactor)):(p.set(0,0,0),L.set(0,0,0)),e.zoomToCursor&&H){let b=null;if(e.object.isPerspectiveCamera){const K=t.length();b=Q(K*P);const X=K-b;e.object.position.addScaledVector(ee,X),e.object.updateMatrixWorld(),_=!!X}else if(e.object.isOrthographicCamera){const K=new u(g.x,g.y,0);K.unproject(e.object);const X=e.object.zoom;e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/P)),e.object.updateProjectionMatrix(),_=X!==e.object.zoom;const Te=new u(g.x,g.y,0);Te.unproject(e.object),e.object.position.sub(Te).add(K),e.object.updateMatrixWorld(),b=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;b!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(b).add(e.object.position):(F.origin.copy(e.object.position),F.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(F.direction))<Qe?I.lookAt(e.target):(je.setFromNormalAndCoplanarPoint(e.object.up,e.target),F.intersectPlane(je,e.target))))}else if(e.object.isOrthographicCamera){const b=e.object.zoom;e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/P)),b!==e.object.zoom&&(e.object.updateProjectionMatrix(),_=!0)}return P=1,H=!1,_||i.distanceToSquared(e.object.position)>W||8*(1-l.dot(e.object.quaternion))>W||E.distanceToSquared(e.target)>W?(e.dispatchEvent(we),i.copy(e.object.position),l.copy(e.object.quaternion),E.copy(e.target),!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",ye),e.domElement.removeEventListener("pointerdown",me),e.domElement.removeEventListener("pointercancel",z),e.domElement.removeEventListener("wheel",pe),e.domElement.removeEventListener("pointermove",v),e.domElement.removeEventListener("pointerup",z),e.domElement.getRootNode().removeEventListener("keydown",he,{capture:!0}),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",J),e._domElementKeyEvents=null)};const e=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=a.NONE;const W=1e-6,s=new Oe,p=new Oe;let P=1;const L=new u,O=new m,w=new m,D=new m,M=new m,j=new m,R=new m,x=new m,N=new m,A=new m,ee=new u,g=new m;let H=!1;const c=[],C={};let B=!1;function Le(t){return t!==null?2*Math.PI/60*e.autoRotateSpeed*t:2*Math.PI/60/60*e.autoRotateSpeed}function U(t){const o=Math.abs(t*.01);return Math.pow(.95,e.zoomSpeed*o)}function Y(t){p.theta-=t}function Z(t){p.phi-=t}const te=function(){const t=new u;return function(n,i){t.setFromMatrixColumn(i,0),t.multiplyScalar(-n),L.add(t)}}(),oe=function(){const t=new u;return function(n,i){e.screenSpacePanning===!0?t.setFromMatrixColumn(i,1):(t.setFromMatrixColumn(i,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(n),L.add(t)}}(),k=function(){const t=new u;return function(n,i){const l=e.domElement;if(e.object.isPerspectiveCamera){const E=e.object.position;t.copy(E).sub(e.target);let d=t.length();d*=Math.tan(e.object.fov/2*Math.PI/180),te(2*n*d/l.clientHeight,e.object.matrix),oe(2*i*d/l.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(te(n*(e.object.right-e.object.left)/e.object.zoom/l.clientWidth,e.object.matrix),oe(i*(e.object.top-e.object.bottom)/e.object.zoom/l.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function G(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?P/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ne(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?P*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function q(t,o){if(!e.zoomToCursor)return;H=!0;const n=e.domElement.getBoundingClientRect(),i=t-n.left,l=o-n.top,E=n.width,d=n.height;g.x=i/E*2-1,g.y=-(l/d)*2+1,ee.set(g.x,g.y,1).unproject(e.object).sub(e.object.position).normalize()}function Q(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function ae(t){O.set(t.clientX,t.clientY)}function De(t){q(t.clientX,t.clientX),x.set(t.clientX,t.clientY)}function ie(t){M.set(t.clientX,t.clientY)}function Re(t){w.set(t.clientX,t.clientY),D.subVectors(w,O).multiplyScalar(e.rotateSpeed);const o=e.domElement;Y(2*Math.PI*D.x/o.clientHeight),Z(2*Math.PI*D.y/o.clientHeight),O.copy(w),e.update()}function xe(t){N.set(t.clientX,t.clientY),A.subVectors(N,x),A.y>0?G(U(A.y)):A.y<0&&ne(U(A.y)),x.copy(N),e.update()}function Ne(t){j.set(t.clientX,t.clientY),R.subVectors(j,M).multiplyScalar(e.panSpeed),k(R.x,R.y),M.copy(j),e.update()}function ke(t){q(t.clientX,t.clientY),t.deltaY<0?ne(U(t.deltaY)):t.deltaY>0&&G(U(t.deltaY)),e.update()}function Se(t){let o=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?Z(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):k(0,e.keyPanSpeed),o=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?Z(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):k(0,-e.keyPanSpeed),o=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?Y(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):k(e.keyPanSpeed,0),o=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?Y(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):k(-e.keyPanSpeed,0),o=!0;break}o&&(t.preventDefault(),e.update())}function se(t){if(c.length===1)O.set(t.pageX,t.pageY);else{const o=S(t),n=.5*(t.pageX+o.x),i=.5*(t.pageY+o.y);O.set(n,i)}}function re(t){if(c.length===1)M.set(t.pageX,t.pageY);else{const o=S(t),n=.5*(t.pageX+o.x),i=.5*(t.pageY+o.y);M.set(n,i)}}function ce(t){const o=S(t),n=t.pageX-o.x,i=t.pageY-o.y,l=Math.sqrt(n*n+i*i);x.set(0,l)}function Ie(t){e.enableZoom&&ce(t),e.enablePan&&re(t)}function Ce(t){e.enableZoom&&ce(t),e.enableRotate&&se(t)}function le(t){if(c.length==1)w.set(t.pageX,t.pageY);else{const n=S(t),i=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);w.set(i,l)}D.subVectors(w,O).multiplyScalar(e.rotateSpeed);const o=e.domElement;Y(2*Math.PI*D.x/o.clientHeight),Z(2*Math.PI*D.y/o.clientHeight),O.copy(w)}function ue(t){if(c.length===1)j.set(t.pageX,t.pageY);else{const o=S(t),n=.5*(t.pageX+o.x),i=.5*(t.pageY+o.y);j.set(n,i)}R.subVectors(j,M).multiplyScalar(e.panSpeed),k(R.x,R.y),M.copy(j)}function de(t){const o=S(t),n=t.pageX-o.x,i=t.pageY-o.y,l=Math.sqrt(n*n+i*i);N.set(0,l),A.set(0,Math.pow(N.y/x.y,e.zoomSpeed)),G(A.y),x.copy(N);const E=(t.pageX+o.x)*.5,d=(t.pageY+o.y)*.5;q(E,d)}function Ye(t){e.enableZoom&&de(t),e.enablePan&&ue(t)}function ze(t){e.enableZoom&&de(t),e.enableRotate&&le(t)}function me(t){e.enabled!==!1&&(c.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",v),e.domElement.addEventListener("pointerup",z)),!Fe(t)&&(Ze(t),t.pointerType==="touch"?be(t):_e(t)))}function v(t){e.enabled!==!1&&(t.pointerType==="touch"?Ue(t):Ke(t))}function z(t){switch(Xe(t),c.length){case 0:e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",v),e.domElement.removeEventListener("pointerup",z),e.dispatchEvent(Me),r=a.NONE;break;case 1:const o=c[0],n=C[o];be({pointerId:o,pageX:n.x,pageY:n.y});break}}function _e(t){let o;switch(t.button){case 0:o=e.mouseButtons.LEFT;break;case 1:o=e.mouseButtons.MIDDLE;break;case 2:o=e.mouseButtons.RIGHT;break;default:o=-1}switch(o){case y.DOLLY:if(e.enableZoom===!1)return;De(t),r=a.DOLLY;break;case y.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;ie(t),r=a.PAN}else{if(e.enableRotate===!1)return;ae(t),r=a.ROTATE}break;case y.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;ae(t),r=a.ROTATE}else{if(e.enablePan===!1)return;ie(t),r=a.PAN}break;default:r=a.NONE}r!==a.NONE&&e.dispatchEvent($)}function Ke(t){switch(r){case a.ROTATE:if(e.enableRotate===!1)return;Re(t);break;case a.DOLLY:if(e.enableZoom===!1)return;xe(t);break;case a.PAN:if(e.enablePan===!1)return;Ne(t);break}}function pe(t){e.enabled===!1||e.enableZoom===!1||r!==a.NONE||(t.preventDefault(),e.dispatchEvent($),ke(He(t)),e.dispatchEvent(Me))}function He(t){const o=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(o){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!B&&(n.deltaY*=10),n}function he(t){t.key==="Control"&&(B=!0,e.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(t){t.key==="Control"&&(B=!1,e.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function J(t){e.enabled===!1||e.enablePan===!1||Se(t)}function be(t){switch(ge(t),c.length){case 1:switch(e.touches.ONE){case T.ROTATE:if(e.enableRotate===!1)return;se(t),r=a.TOUCH_ROTATE;break;case T.PAN:if(e.enablePan===!1)return;re(t),r=a.TOUCH_PAN;break;default:r=a.NONE}break;case 2:switch(e.touches.TWO){case T.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ie(t),r=a.TOUCH_DOLLY_PAN;break;case T.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ce(t),r=a.TOUCH_DOLLY_ROTATE;break;default:r=a.NONE}break;default:r=a.NONE}r!==a.NONE&&e.dispatchEvent($)}function Ue(t){switch(ge(t),r){case a.TOUCH_ROTATE:if(e.enableRotate===!1)return;le(t),e.update();break;case a.TOUCH_PAN:if(e.enablePan===!1)return;ue(t),e.update();break;case a.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ye(t),e.update();break;case a.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ze(t),e.update();break;default:r=a.NONE}}function ye(t){e.enabled!==!1&&t.preventDefault()}function Ze(t){c.push(t.pointerId)}function Xe(t){delete C[t.pointerId];for(let o=0;o<c.length;o++)if(c[o]==t.pointerId){c.splice(o,1);return}}function Fe(t){for(let o=0;o<c.length;o++)if(c[o]==t.pointerId)return!0;return!1}function ge(t){let o=C[t.pointerId];o===void 0&&(o=new m,C[t.pointerId]=o),o.set(t.pageX,t.pageY)}function S(t){const o=t.pointerId===c[0]?c[1]:c[0];return C[o]}e.domElement.addEventListener("contextmenu",ye),e.domElement.addEventListener("pointerdown",me),e.domElement.addEventListener("pointercancel",z),e.domElement.addEventListener("wheel",pe,{passive:!1}),e.domElement.getRootNode().addEventListener("keydown",he,{passive:!0,capture:!0}),this.update()}}class tt extends ve{constructor(I,V){super(I,V),this.screenSpacePanning=!1,this.mouseButtons={LEFT:y.PAN,MIDDLE:y.DOLLY,RIGHT:y.ROTATE},this.touches={ONE:T.PAN,TWO:T.DOLLY_ROTATE}}}export{tt as M};