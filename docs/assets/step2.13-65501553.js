var Vt=Object.defineProperty;var zt=(J,P,b)=>P in J?Vt(J,P,{enumerable:!0,configurable:!0,writable:!0,value:b}):J[P]=b;var it=(J,P,b)=>(zt(J,typeof P!="symbol"?P+"":P,b),b);import"./modulepreload-polyfill-3cfb730f.js";import{g as qt}from"./lil-gui.module.min-a1e98589.js";import{ah as Dt,ai as Ht,aU as dt,b as V,V as ft,aV as Ut,N as Xt,aW as Gt,aX as Pt,Y as vt,aa as Tt,aY as ht,aD as Yt,E as Zt,v as Qt,w as Jt,s as $t,F as Ot,W as Kt,y as _t,c as te,z as ee,H as ne,I as It,aZ as se,a_ as oe,a$ as re,b0 as ie,ac as ae,b1 as ce,b2 as St,L as le,k as fe,f as pt,G as Wt,a1 as ue,m as he,a as de,b3 as pe}from"./mapSource-ec449248.js";import{c as ye,d as me,b as ge,s as xe}from"./util-bfcdfc22.js";import{M as be}from"./MapControls-7d012d3d.js";const we=Yt;class Lt extends Dt{constructor(P){super(P),this.defaultDPI=90,this.defaultUnit="px"}load(P,b,p,I){const x=this,H=new Ht(x.manager);H.setPath(x.path),H.setRequestHeader(x.requestHeader),H.setWithCredentials(x.withCredentials),H.load(P,function(Q){try{b(x.parse(Q))}catch(U){I?I(U):console.error(U),x.manager.itemError(P)}},p,I)}parse(P){const b=this;function p(r,s){if(r.nodeType!==1)return;const e=T(r);let t=!1,a=null;switch(r.nodeName){case"svg":s=D(r,s);break;case"style":x(r);break;case"g":s=D(r,s);break;case"path":s=D(r,s),r.hasAttribute("d")&&(a=I(r));break;case"rect":s=D(r,s),a=U(r);break;case"polygon":s=D(r,s),a=Y(r);break;case"polyline":s=D(r,s),a=_(r);break;case"circle":s=D(r,s),a=F(r);break;case"ellipse":s=D(r,s),a=B(r);break;case"line":s=D(r,s),a=ct(r);break;case"defs":t=!0;break;case"use":s=D(r,s);const d=(r.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),m=r.viewportElement.getElementById(d);m?p(m,s):console.warn("SVGLoader: 'use node' references non-existent node id: "+d);break}a&&(s.fill!==void 0&&s.fill!=="none"&&a.color.setStyle(s.fill,we),C(a,ot),S.push(a),a.userData={node:r,style:s});const u=r.childNodes;for(let i=0;i<u.length;i++){const d=u[i];t&&d.nodeName!=="style"&&d.nodeName!=="defs"||p(d,s)}e&&(q.pop(),q.length>0?ot.copy(q[q.length-1]):ot.identity())}function I(r){const s=new ht,e=new V,t=new V,a=new V;let u=!0,i=!1;const d=r.getAttribute("d");if(d===""||d==="none")return null;const m=d.match(/[a-df-z][^a-df-z]*/ig);for(let g=0,c=m.length;g<c;g++){const l=m[g],w=l.charAt(0),k=l.slice(1).trim();u===!0&&(i=!0,u=!1);let o;switch(w){case"M":o=y(k);for(let n=0,A=o.length;n<A;n+=2)e.x=o[n+0],e.y=o[n+1],t.x=e.x,t.y=e.y,n===0?s.moveTo(e.x,e.y):s.lineTo(e.x,e.y),n===0&&a.copy(e);break;case"H":o=y(k);for(let n=0,A=o.length;n<A;n++)e.x=o[n],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&i===!0&&a.copy(e);break;case"V":o=y(k);for(let n=0,A=o.length;n<A;n++)e.y=o[n],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&i===!0&&a.copy(e);break;case"L":o=y(k);for(let n=0,A=o.length;n<A;n+=2)e.x=o[n+0],e.y=o[n+1],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&i===!0&&a.copy(e);break;case"C":o=y(k);for(let n=0,A=o.length;n<A;n+=6)s.bezierCurveTo(o[n+0],o[n+1],o[n+2],o[n+3],o[n+4],o[n+5]),t.x=o[n+2],t.y=o[n+3],e.x=o[n+4],e.y=o[n+5],n===0&&i===!0&&a.copy(e);break;case"S":o=y(k);for(let n=0,A=o.length;n<A;n+=4)s.bezierCurveTo(M(e.x,t.x),M(e.y,t.y),o[n+0],o[n+1],o[n+2],o[n+3]),t.x=o[n+0],t.y=o[n+1],e.x=o[n+2],e.y=o[n+3],n===0&&i===!0&&a.copy(e);break;case"Q":o=y(k);for(let n=0,A=o.length;n<A;n+=4)s.quadraticCurveTo(o[n+0],o[n+1],o[n+2],o[n+3]),t.x=o[n+0],t.y=o[n+1],e.x=o[n+2],e.y=o[n+3],n===0&&i===!0&&a.copy(e);break;case"T":o=y(k);for(let n=0,A=o.length;n<A;n+=2){const j=M(e.x,t.x),st=M(e.y,t.y);s.quadraticCurveTo(j,st,o[n+0],o[n+1]),t.x=j,t.y=st,e.x=o[n+0],e.y=o[n+1],n===0&&i===!0&&a.copy(e)}break;case"A":o=y(k,[3,4],7);for(let n=0,A=o.length;n<A;n+=7){if(o[n+5]==e.x&&o[n+6]==e.y)continue;const j=e.clone();e.x=o[n+5],e.y=o[n+6],t.x=e.x,t.y=e.y,H(s,o[n],o[n+1],o[n+2],o[n+3],o[n+4],j,e),n===0&&i===!0&&a.copy(e)}break;case"m":o=y(k);for(let n=0,A=o.length;n<A;n+=2)e.x+=o[n+0],e.y+=o[n+1],t.x=e.x,t.y=e.y,n===0?s.moveTo(e.x,e.y):s.lineTo(e.x,e.y),n===0&&a.copy(e);break;case"h":o=y(k);for(let n=0,A=o.length;n<A;n++)e.x+=o[n],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&i===!0&&a.copy(e);break;case"v":o=y(k);for(let n=0,A=o.length;n<A;n++)e.y+=o[n],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&i===!0&&a.copy(e);break;case"l":o=y(k);for(let n=0,A=o.length;n<A;n+=2)e.x+=o[n+0],e.y+=o[n+1],t.x=e.x,t.y=e.y,s.lineTo(e.x,e.y),n===0&&i===!0&&a.copy(e);break;case"c":o=y(k);for(let n=0,A=o.length;n<A;n+=6)s.bezierCurveTo(e.x+o[n+0],e.y+o[n+1],e.x+o[n+2],e.y+o[n+3],e.x+o[n+4],e.y+o[n+5]),t.x=e.x+o[n+2],t.y=e.y+o[n+3],e.x+=o[n+4],e.y+=o[n+5],n===0&&i===!0&&a.copy(e);break;case"s":o=y(k);for(let n=0,A=o.length;n<A;n+=4)s.bezierCurveTo(M(e.x,t.x),M(e.y,t.y),e.x+o[n+0],e.y+o[n+1],e.x+o[n+2],e.y+o[n+3]),t.x=e.x+o[n+0],t.y=e.y+o[n+1],e.x+=o[n+2],e.y+=o[n+3],n===0&&i===!0&&a.copy(e);break;case"q":o=y(k);for(let n=0,A=o.length;n<A;n+=4)s.quadraticCurveTo(e.x+o[n+0],e.y+o[n+1],e.x+o[n+2],e.y+o[n+3]),t.x=e.x+o[n+0],t.y=e.y+o[n+1],e.x+=o[n+2],e.y+=o[n+3],n===0&&i===!0&&a.copy(e);break;case"t":o=y(k);for(let n=0,A=o.length;n<A;n+=2){const j=M(e.x,t.x),st=M(e.y,t.y);s.quadraticCurveTo(j,st,e.x+o[n+0],e.y+o[n+1]),t.x=j,t.y=st,e.x=e.x+o[n+0],e.y=e.y+o[n+1],n===0&&i===!0&&a.copy(e)}break;case"a":o=y(k,[3,4],7);for(let n=0,A=o.length;n<A;n+=7){if(o[n+5]==0&&o[n+6]==0)continue;const j=e.clone();e.x+=o[n+5],e.y+=o[n+6],t.x=e.x,t.y=e.y,H(s,o[n],o[n+1],o[n+2],o[n+3],o[n+4],j,e),n===0&&i===!0&&a.copy(e)}break;case"Z":case"z":s.currentPath.autoClose=!0,s.currentPath.curves.length>0&&(e.copy(a),s.currentPath.currentPoint.copy(e),u=!0);break;default:console.warn(l)}i=!1}return s}function x(r){if(!(!r.sheet||!r.sheet.cssRules||!r.sheet.cssRules.length))for(let s=0;s<r.sheet.cssRules.length;s++){const e=r.sheet.cssRules[s];if(e.type!==1)continue;const t=e.selectorText.split(/,/gm).filter(Boolean).map(a=>a.trim());for(let a=0;a<t.length;a++){const u=Object.fromEntries(Object.entries(e.style).filter(([,i])=>i!==""));X[t[a]]=Object.assign(X[t[a]]||{},u)}}}function H(r,s,e,t,a,u,i,d){if(s==0||e==0){r.lineTo(d.x,d.y);return}t=t*Math.PI/180,s=Math.abs(s),e=Math.abs(e);const m=(i.x-d.x)/2,g=(i.y-d.y)/2,c=Math.cos(t)*m+Math.sin(t)*g,l=-Math.sin(t)*m+Math.cos(t)*g;let w=s*s,k=e*e;const o=c*c,n=l*l,A=o/w+n/k;if(A>1){const xt=Math.sqrt(A);s=xt*s,e=xt*e,w=s*s,k=e*e}const j=w*n+k*o,st=(w*k-j)/j;let rt=Math.sqrt(Math.max(0,st));a===u&&(rt=-rt);const K=rt*s*l/e,lt=-rt*e*c/s,mt=Math.cos(t)*K-Math.sin(t)*lt+(i.x+d.x)/2,Nt=Math.sin(t)*K+Math.cos(t)*lt+(i.y+d.y)/2,gt=Q(1,0,(c-K)/s,(l-lt)/e),At=Q((c-K)/s,(l-lt)/e,(-c-K)/s,(-l-lt)/e)%(Math.PI*2);r.currentPath.absellipse(mt,Nt,s,e,gt,gt+At,u===0,t)}function Q(r,s,e,t){const a=r*e+s*t,u=Math.sqrt(r*r+s*s)*Math.sqrt(e*e+t*t);let i=Math.acos(Math.max(-1,Math.min(1,a/u)));return r*t-s*e<0&&(i=-i),i}function U(r){const s=h(r.getAttribute("x")||0),e=h(r.getAttribute("y")||0),t=h(r.getAttribute("rx")||r.getAttribute("ry")||0),a=h(r.getAttribute("ry")||r.getAttribute("rx")||0),u=h(r.getAttribute("width")),i=h(r.getAttribute("height")),d=1-.551915024494,m=new ht;return m.moveTo(s+t,e),m.lineTo(s+u-t,e),(t!==0||a!==0)&&m.bezierCurveTo(s+u-t*d,e,s+u,e+a*d,s+u,e+a),m.lineTo(s+u,e+i-a),(t!==0||a!==0)&&m.bezierCurveTo(s+u,e+i-a*d,s+u-t*d,e+i,s+u-t,e+i),m.lineTo(s+t,e+i),(t!==0||a!==0)&&m.bezierCurveTo(s+t*d,e+i,s,e+i-a*d,s,e+i-a),m.lineTo(s,e+a),(t!==0||a!==0)&&m.bezierCurveTo(s,e+a*d,s+t*d,e,s+t,e),m}function Y(r){function s(u,i,d){const m=h(i),g=h(d);a===0?t.moveTo(m,g):t.lineTo(m,g),a++}const e=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,t=new ht;let a=0;return r.getAttribute("points").replace(e,s),t.currentPath.autoClose=!0,t}function _(r){function s(u,i,d){const m=h(i),g=h(d);a===0?t.moveTo(m,g):t.lineTo(m,g),a++}const e=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,t=new ht;let a=0;return r.getAttribute("points").replace(e,s),t.currentPath.autoClose=!1,t}function F(r){const s=h(r.getAttribute("cx")||0),e=h(r.getAttribute("cy")||0),t=h(r.getAttribute("r")||0),a=new Pt;a.absarc(s,e,t,0,Math.PI*2);const u=new ht;return u.subPaths.push(a),u}function B(r){const s=h(r.getAttribute("cx")||0),e=h(r.getAttribute("cy")||0),t=h(r.getAttribute("rx")||0),a=h(r.getAttribute("ry")||0),u=new Pt;u.absellipse(s,e,t,a,0,Math.PI*2);const i=new ht;return i.subPaths.push(u),i}function ct(r){const s=h(r.getAttribute("x1")||0),e=h(r.getAttribute("y1")||0),t=h(r.getAttribute("x2")||0),a=h(r.getAttribute("y2")||0),u=new ht;return u.moveTo(s,e),u.lineTo(t,a),u.currentPath.autoClose=!1,u}function D(r,s){s=Object.assign({},s);let e={};if(r.hasAttribute("class")){const i=r.getAttribute("class").split(/\s/).filter(Boolean).map(d=>d.trim());for(let d=0;d<i.length;d++)e=Object.assign(e,X["."+i[d]])}r.hasAttribute("id")&&(e=Object.assign(e,X["#"+r.getAttribute("id")]));function t(i,d,m){m===void 0&&(m=function(c){return c.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),c}),r.hasAttribute(i)&&(s[d]=m(r.getAttribute(i))),e[i]&&(s[d]=m(e[i])),r.style&&r.style[i]!==""&&(s[d]=m(r.style[i]))}function a(i){return Math.max(0,Math.min(1,h(i)))}function u(i){return Math.max(0,h(i))}return t("fill","fill"),t("fill-opacity","fillOpacity",a),t("fill-rule","fillRule"),t("opacity","opacity",a),t("stroke","stroke"),t("stroke-opacity","strokeOpacity",a),t("stroke-width","strokeWidth",u),t("stroke-linejoin","strokeLineJoin"),t("stroke-linecap","strokeLineCap"),t("stroke-miterlimit","strokeMiterLimit",u),t("visibility","visibility"),s}function M(r,s){return r-(s-r)}function y(r,s,e){if(typeof r!="string")throw new TypeError("Invalid input: "+typeof r);const t={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},a=0,u=1,i=2,d=3;let m=a,g=!0,c="",l="";const w=[];function k(j,st,rt){const K=new SyntaxError('Unexpected character "'+j+'" at index '+st+".");throw K.partial=rt,K}function o(){c!==""&&(l===""?w.push(Number(c)):w.push(Number(c)*Math.pow(10,Number(l)))),c="",l=""}let n;const A=r.length;for(let j=0;j<A;j++){if(n=r[j],Array.isArray(s)&&s.includes(w.length%e)&&t.FLAGS.test(n)){m=u,c=n,o();continue}if(m===a){if(t.WHITESPACE.test(n))continue;if(t.DIGIT.test(n)||t.SIGN.test(n)){m=u,c=n;continue}if(t.POINT.test(n)){m=i,c=n;continue}t.COMMA.test(n)&&(g&&k(n,j,w),g=!0)}if(m===u){if(t.DIGIT.test(n)){c+=n;continue}if(t.POINT.test(n)){c+=n,m=i;continue}if(t.EXP.test(n)){m=d;continue}t.SIGN.test(n)&&c.length===1&&t.SIGN.test(c[0])&&k(n,j,w)}if(m===i){if(t.DIGIT.test(n)){c+=n;continue}if(t.EXP.test(n)){m=d;continue}t.POINT.test(n)&&c[c.length-1]==="."&&k(n,j,w)}if(m===d){if(t.DIGIT.test(n)){l+=n;continue}if(t.SIGN.test(n)){if(l===""){l+=n;continue}l.length===1&&t.SIGN.test(l)&&k(n,j,w)}}t.WHITESPACE.test(n)?(o(),m=a,g=!1):t.COMMA.test(n)?(o(),m=a,g=!0):t.SIGN.test(n)?(o(),m=u,c=n):t.POINT.test(n)?(o(),m=i,c=n):k(n,j,w)}return o(),w}const E=["mm","cm","in","pt","pc","px"],G={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function h(r){let s="px";if(typeof r=="string"||r instanceof String)for(let t=0,a=E.length;t<a;t++){const u=E[t];if(r.endsWith(u)){s=u,r=r.substring(0,r.length-u.length);break}}let e;return s==="px"&&b.defaultUnit!=="px"?e=G.in[b.defaultUnit]/b.defaultDPI:(e=G[s][b.defaultUnit],e<0&&(e=G[s].in*b.defaultDPI)),e*parseFloat(r)}function T(r){if(!(r.hasAttribute("transform")||r.nodeName==="use"&&(r.hasAttribute("x")||r.hasAttribute("y"))))return null;const s=L(r);return q.length>0&&s.premultiply(q[q.length-1]),ot.copy(s),q.push(s),s}function L(r){const s=new dt,e=nt;if(r.nodeName==="use"&&(r.hasAttribute("x")||r.hasAttribute("y"))){const t=h(r.getAttribute("x")),a=h(r.getAttribute("y"));s.translate(t,a)}if(r.hasAttribute("transform")){const t=r.getAttribute("transform").split(")");for(let a=t.length-1;a>=0;a--){const u=t[a].trim();if(u==="")continue;const i=u.indexOf("("),d=u.length;if(i>0&&i<d){const m=u.slice(0,i),g=y(u.slice(i+1));switch(e.identity(),m){case"translate":if(g.length>=1){const c=g[0];let l=0;g.length>=2&&(l=g[1]),e.translate(c,l)}break;case"rotate":if(g.length>=1){let c=0,l=0,w=0;c=g[0]*Math.PI/180,g.length>=3&&(l=g[1],w=g[2]),Z.makeTranslation(-l,-w),N.makeRotation(c),f.multiplyMatrices(N,Z),Z.makeTranslation(l,w),e.multiplyMatrices(Z,f)}break;case"scale":if(g.length>=1){const c=g[0];let l=c;g.length>=2&&(l=g[1]),e.scale(c,l)}break;case"skewX":g.length===1&&e.set(1,Math.tan(g[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":g.length===1&&e.set(1,0,0,Math.tan(g[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":g.length===6&&e.set(g[0],g[2],g[4],g[1],g[3],g[5],0,0,1);break}}s.premultiply(e)}}return s}function C(r,s){function e(i){v.set(i.x,i.y,1).applyMatrix3(s),i.set(v.x,v.y)}function t(i){const d=i.xRadius,m=i.yRadius,g=Math.cos(i.aRotation),c=Math.sin(i.aRotation),l=new ft(d*g,d*c,0),w=new ft(-m*c,m*g,0),k=l.applyMatrix3(s),o=w.applyMatrix3(s),n=nt.set(k.x,o.x,0,k.y,o.y,0,0,0,1),A=Z.copy(n).invert(),rt=N.copy(A).transpose().multiply(A).elements,K=et(rt[0],rt[1],rt[4]),lt=Math.sqrt(K.rt1),mt=Math.sqrt(K.rt2);if(i.xRadius=1/lt,i.yRadius=1/mt,i.aRotation=Math.atan2(K.sn,K.cs),!((i.aEndAngle-i.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const gt=Z.set(lt,0,0,0,mt,0,0,0,1),At=N.set(K.cs,K.sn,0,-K.sn,K.cs,0,0,0,1),xt=gt.multiply(At).multiply(n),Ct=Rt=>{const{x:Ft,y:Bt}=new ft(Math.cos(Rt),Math.sin(Rt),0).applyMatrix3(xt);return Math.atan2(Bt,Ft)};i.aStartAngle=Ct(i.aStartAngle),i.aEndAngle=Ct(i.aEndAngle),W(s)&&(i.aClockwise=!i.aClockwise)}}function a(i){const d=O(s),m=z(s);i.xRadius*=d,i.yRadius*=m;const g=d>Number.EPSILON?Math.atan2(s.elements[1],s.elements[0]):Math.atan2(-s.elements[3],s.elements[4]);i.aRotation+=g,W(s)&&(i.aStartAngle*=-1,i.aEndAngle*=-1,i.aClockwise=!i.aClockwise)}const u=r.subPaths;for(let i=0,d=u.length;i<d;i++){const g=u[i].curves;for(let c=0;c<g.length;c++){const l=g[c];l.isLineCurve?(e(l.v1),e(l.v2)):l.isCubicBezierCurve?(e(l.v0),e(l.v1),e(l.v2),e(l.v3)):l.isQuadraticBezierCurve?(e(l.v0),e(l.v1),e(l.v2)):l.isEllipseCurve&&($.set(l.aX,l.aY),e($),l.aX=$.x,l.aY=$.y,R(s)?t(l):a(l))}}}function W(r){const s=r.elements;return s[0]*s[4]-s[1]*s[3]<0}function R(r){const s=r.elements,e=s[0]*s[3]+s[1]*s[4];if(e===0)return!1;const t=O(r),a=z(r);return Math.abs(e/(t*a))>Number.EPSILON}function O(r){const s=r.elements;return Math.sqrt(s[0]*s[0]+s[1]*s[1])}function z(r){const s=r.elements;return Math.sqrt(s[3]*s[3]+s[4]*s[4])}function et(r,s,e){let t,a,u,i,d;const m=r+e,g=r-e,c=Math.sqrt(g*g+4*s*s);return m>0?(t=.5*(m+c),d=1/t,a=r*d*e-s*d*s):m<0?a=.5*(m-c):(t=.5*c,a=-.5*c),g>0?u=g+c:u=g-c,Math.abs(u)>2*Math.abs(s)?(d=-2*s/u,i=1/Math.sqrt(1+d*d),u=d*i):Math.abs(s)===0?(u=1,i=0):(d=-.5*u/s,u=1/Math.sqrt(1+d*d),i=d*u),g>0&&(d=u,u=-i,i=d),{rt1:t,rt2:a,cs:u,sn:i}}const S=[],X={},q=[],nt=new dt,Z=new dt,N=new dt,f=new dt,$=new V,v=new ft,ot=new dt,ut=new DOMParser().parseFromString(P,"image/svg+xml");return p(ut.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:S,xml:ut.documentElement}}static createShapes(P){const p={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},I={loc:p.ORIGIN,t:0};function x(M,y,E,G){const h=M.x,T=y.x,L=E.x,C=G.x,W=M.y,R=y.y,O=E.y,z=G.y,et=(C-L)*(W-O)-(z-O)*(h-L),S=(T-h)*(W-O)-(R-W)*(h-L),X=(z-O)*(T-h)-(C-L)*(R-W),q=et/X,nt=S/X;if(X===0&&et!==0||q<=0||q>=1||nt<0||nt>1)return null;if(et===0&&X===0){for(let Z=0;Z<2;Z++)if(H(Z===0?E:G,M,y),I.loc==p.ORIGIN){const N=Z===0?E:G;return{x:N.x,y:N.y,t:I.t}}else if(I.loc==p.BETWEEN){const N=+(h+I.t*(T-h)).toPrecision(10),f=+(W+I.t*(R-W)).toPrecision(10);return{x:N,y:f,t:I.t}}return null}else{for(let f=0;f<2;f++)if(H(f===0?E:G,M,y),I.loc==p.ORIGIN){const $=f===0?E:G;return{x:$.x,y:$.y,t:I.t}}const Z=+(h+q*(T-h)).toPrecision(10),N=+(W+q*(R-W)).toPrecision(10);return{x:Z,y:N,t:q}}}function H(M,y,E){const G=E.x-y.x,h=E.y-y.y,T=M.x-y.x,L=M.y-y.y,C=G*L-T*h;if(M.x===y.x&&M.y===y.y){I.loc=p.ORIGIN,I.t=0;return}if(M.x===E.x&&M.y===E.y){I.loc=p.DESTINATION,I.t=1;return}if(C<-Number.EPSILON){I.loc=p.LEFT;return}if(C>Number.EPSILON){I.loc=p.RIGHT;return}if(G*T<0||h*L<0){I.loc=p.BEHIND;return}if(Math.sqrt(G*G+h*h)<Math.sqrt(T*T+L*L)){I.loc=p.BEYOND;return}let W;G!==0?W=T/G:W=L/h,I.loc=p.BETWEEN,I.t=W}function Q(M,y){const E=[],G=[];for(let h=1;h<M.length;h++){const T=M[h-1],L=M[h];for(let C=1;C<y.length;C++){const W=y[C-1],R=y[C],O=x(T,L,W,R);O!==null&&E.find(z=>z.t<=O.t+Number.EPSILON&&z.t>=O.t-Number.EPSILON)===void 0&&(E.push(O),G.push(new V(O.x,O.y)))}}return G}function U(M,y,E){const G=new V;y.getCenter(G);const h=[];return E.forEach(T=>{T.boundingBox.containsPoint(G)&&Q(M,T.points).forEach(C=>{h.push({identifier:T.identifier,isCW:T.isCW,point:C})})}),h.sort((T,L)=>T.point.x-L.point.x),h}function Y(M,y,E,G,h){(h==null||h==="")&&(h="nonzero");const T=new V;M.boundingBox.getCenter(T);const L=[new V(E,T.y),new V(G,T.y)],C=U(L,M.boundingBox,y);C.sort((S,X)=>S.point.x-X.point.x);const W=[],R=[];C.forEach(S=>{S.identifier===M.identifier?W.push(S):R.push(S)});const O=W[0].point.x,z=[];let et=0;for(;et<R.length&&R[et].point.x<O;)z.length>0&&z[z.length-1]===R[et].identifier?z.pop():z.push(R[et].identifier),et++;if(z.push(M.identifier),h==="evenodd"){const S=z.length%2===0,X=z[z.length-2];return{identifier:M.identifier,isHole:S,for:X}}else if(h==="nonzero"){let S=!0,X=null,q=null;for(let nt=0;nt<z.length;nt++){const Z=z[nt];S?(q=y[Z].isCW,S=!1,X=Z):q!==y[Z].isCW&&(q=y[Z].isCW,S=!0)}return{identifier:M.identifier,isHole:S,for:X}}else console.warn('fill-rule: "'+h+'" is currently not implemented.')}let _=999999999,F=-999999999,B=P.subPaths.map(M=>{const y=M.getPoints();let E=-999999999,G=999999999,h=-999999999,T=999999999;for(let L=0;L<y.length;L++){const C=y[L];C.y>E&&(E=C.y),C.y<G&&(G=C.y),C.x>h&&(h=C.x),C.x<T&&(T=C.x)}return F<=h&&(F=h+1),_>=T&&(_=T-1),{curves:M.curves,points:y,isCW:Ut.isClockWise(y),identifier:-1,boundingBox:new Xt(new V(T,G),new V(h,E))}});B=B.filter(M=>M.points.length>1);for(let M=0;M<B.length;M++)B[M].identifier=M;const ct=B.map(M=>Y(M,B,_,F,P.userData?P.userData.style.fillRule:void 0)),D=[];return B.forEach(M=>{if(!ct[M.identifier].isHole){const E=new Gt;E.curves=M.curves,ct.filter(h=>h.isHole&&h.for===M.identifier).forEach(h=>{const T=B[h.identifier],L=new Pt;L.curves=T.curves,E.holes.push(L)}),D.push(E)}}),D}static getStrokeStyle(P,b,p,I,x){return P=P!==void 0?P:1,b=b!==void 0?b:"#000",p=p!==void 0?p:"miter",I=I!==void 0?I:"butt",x=x!==void 0?x:4,{strokeColor:b,strokeWidth:P,strokeLineJoin:p,strokeLineCap:I,strokeMiterLimit:x}}static pointsToStroke(P,b,p,I){const x=[],H=[],Q=[];if(Lt.pointsToStrokeWithBuffers(P,b,p,I,x,H,Q)===0)return null;const U=new vt;return U.setAttribute("position",new Tt(x,3)),U.setAttribute("normal",new Tt(H,3)),U.setAttribute("uv",new Tt(Q,2)),U}static pointsToStrokeWithBuffers(P,b,p,I,x,H,Q,U){const Y=new V,_=new V,F=new V,B=new V,ct=new V,D=new V,M=new V,y=new V,E=new V,G=new V,h=new V,T=new V,L=new V,C=new V,W=new V,R=new V,O=new V;p=p!==void 0?p:12,I=I!==void 0?I:.001,U=U!==void 0?U:0,P=g(P);const z=P.length;if(z<2)return 0;const et=P[0].equals(P[z-1]);let S,X=P[0],q;const nt=b.strokeWidth/2,Z=1/(z-1);let N=0,f,$,v,ot,ut=!1,kt=0,r=U*3,s=U*2;e(P[0],P[1],Y).multiplyScalar(nt),y.copy(P[0]).sub(Y),E.copy(P[0]).add(Y),G.copy(y),h.copy(E);for(let c=1;c<z;c++){S=P[c],c===z-1?et?q=P[1]:q=void 0:q=P[c+1];const l=Y;if(e(X,S,l),F.copy(l).multiplyScalar(nt),T.copy(S).sub(F),L.copy(S).add(F),f=N+Z,$=!1,q!==void 0){e(S,q,_),F.copy(_).multiplyScalar(nt),C.copy(S).sub(F),W.copy(S).add(F),v=!0,F.subVectors(q,X),l.dot(F)<0&&(v=!1),c===1&&(ut=v),F.subVectors(q,S),F.normalize();const w=Math.abs(l.dot(F));if(w>Number.EPSILON){const k=nt/w;F.multiplyScalar(-k),B.subVectors(S,X),ct.copy(B).setLength(k).add(F),R.copy(ct).negate();const o=ct.length(),n=B.length();B.divideScalar(n),D.subVectors(q,S);const A=D.length();switch(D.divideScalar(A),B.dot(R)<n&&D.dot(R)<A&&($=!0),O.copy(ct).add(S),R.add(S),ot=!1,$?v?(W.copy(R),L.copy(R)):(C.copy(R),T.copy(R)):u(),b.strokeLineJoin){case"bevel":i(v,$,f);break;case"round":d(v,$),v?a(S,T,C,f,0):a(S,W,L,f,1);break;case"miter":case"miter-clip":default:const j=nt*b.strokeMiterLimit/o;if(j<1)if(b.strokeLineJoin!=="miter-clip"){i(v,$,f);break}else d(v,$),v?(D.subVectors(O,T).multiplyScalar(j).add(T),M.subVectors(O,C).multiplyScalar(j).add(C),t(T,f,0),t(D,f,0),t(S,f,.5),t(S,f,.5),t(D,f,0),t(M,f,0),t(S,f,.5),t(M,f,0),t(C,f,0)):(D.subVectors(O,L).multiplyScalar(j).add(L),M.subVectors(O,W).multiplyScalar(j).add(W),t(L,f,1),t(D,f,1),t(S,f,.5),t(S,f,.5),t(D,f,1),t(M,f,1),t(S,f,.5),t(M,f,1),t(W,f,1));else $?(v?(t(E,N,1),t(y,N,0),t(O,f,0),t(E,N,1),t(O,f,0),t(R,f,1)):(t(E,N,1),t(y,N,0),t(O,f,1),t(y,N,0),t(R,f,0),t(O,f,1)),v?C.copy(O):W.copy(O)):v?(t(T,f,0),t(O,f,0),t(S,f,.5),t(S,f,.5),t(O,f,0),t(C,f,0)):(t(L,f,1),t(O,f,1),t(S,f,.5),t(S,f,.5),t(O,f,1),t(W,f,1)),ot=!0;break}}else u()}else u();!et&&c===z-1&&m(P[0],G,h,v,!0,N),N=f,X=S,y.copy(C),E.copy(W)}if(!et)m(S,T,L,v,!1,f);else if($&&x){let c=O,l=R;ut!==v&&(c=R,l=O),v?(ot||ut)&&(l.toArray(x,0*3),l.toArray(x,3*3),ot&&c.toArray(x,1*3)):(ot||!ut)&&(l.toArray(x,1*3),l.toArray(x,3*3),ot&&c.toArray(x,0*3))}return kt;function e(c,l,w){return w.subVectors(l,c),w.set(-w.y,w.x).normalize()}function t(c,l,w){x&&(x[r]=c.x,x[r+1]=c.y,x[r+2]=0,H&&(H[r]=0,H[r+1]=0,H[r+2]=1),r+=3,Q&&(Q[s]=l,Q[s+1]=w,s+=2)),kt+=3}function a(c,l,w,k,o){Y.copy(l).sub(c).normalize(),_.copy(w).sub(c).normalize();let n=Math.PI;const A=Y.dot(_);Math.abs(A)<1&&(n=Math.abs(Math.acos(A))),n/=p,F.copy(l);for(let j=0,st=p-1;j<st;j++)B.copy(F).rotateAround(c,n),t(F,k,o),t(B,k,o),t(c,k,.5),F.copy(B);t(B,k,o),t(w,k,o),t(c,k,.5)}function u(){t(E,N,1),t(y,N,0),t(T,f,0),t(E,N,1),t(T,f,0),t(L,f,1)}function i(c,l,w){l?c?(t(E,N,1),t(y,N,0),t(T,f,0),t(E,N,1),t(T,f,0),t(R,f,1),t(T,w,0),t(C,w,0),t(R,w,.5)):(t(E,N,1),t(y,N,0),t(L,f,1),t(y,N,0),t(R,f,0),t(L,f,1),t(L,w,1),t(R,w,0),t(W,w,1)):c?(t(T,w,0),t(C,w,0),t(S,w,.5)):(t(L,w,1),t(W,w,0),t(S,w,.5))}function d(c,l){l&&(c?(t(E,N,1),t(y,N,0),t(T,f,0),t(E,N,1),t(T,f,0),t(R,f,1),t(T,N,0),t(S,f,.5),t(R,f,1),t(S,f,.5),t(C,N,0),t(R,f,1)):(t(E,N,1),t(y,N,0),t(L,f,1),t(y,N,0),t(R,f,0),t(L,f,1),t(L,N,1),t(R,f,0),t(S,f,.5),t(S,f,.5),t(R,f,0),t(W,N,1)))}function m(c,l,w,k,o,n){switch(b.strokeLineCap){case"round":o?a(c,w,l,n,.5):a(c,l,w,n,.5);break;case"square":if(o)Y.subVectors(l,c),_.set(Y.y,-Y.x),F.addVectors(Y,_).add(c),B.subVectors(_,Y).add(c),k?(F.toArray(x,1*3),B.toArray(x,0*3),B.toArray(x,3*3)):(F.toArray(x,1*3),Q[3*2+1]===1?B.toArray(x,3*3):F.toArray(x,3*3),B.toArray(x,0*3));else{Y.subVectors(w,c),_.set(Y.y,-Y.x),F.addVectors(Y,_).add(c),B.subVectors(_,Y).add(c);const A=x.length;k?(F.toArray(x,A-1*3),B.toArray(x,A-2*3),B.toArray(x,A-4*3)):(B.toArray(x,A-2*3),F.toArray(x,A-1*3),B.toArray(x,A-4*3))}break}}function g(c){let l=!1;for(let k=1,o=c.length-1;k<o;k++)if(c[k].distanceTo(c[k+1])<I){l=!0;break}if(!l)return c;const w=[];w.push(c[0]);for(let k=1,o=c.length-1;k<o;k++)c[k].distanceTo(c[k+1])>=I&&w.push(c[k]);return w.push(c[c.length-1]),w}}}class Me extends Zt{constructor(b,p={}){super();it(this,"scene");it(this,"renderer");it(this,"camera");it(this,"controls");it(this,"ambLight");it(this,"dirLight");it(this,"container");it(this,"_clock",new Qt);it(this,"_fogFactor",1);const I=typeof b=="string"?document.querySelector(b):b;if(I instanceof HTMLElement){const{centerPostion:x=new ft(0,0,-3e3),cameraPosition:H=new ft(0,3e4,0),antialias:Q=!1,logarithmicDepthBuffer:U=!0}=p;this.container=I,this.renderer=this._createRenderer(Q,U),this.scene=this._createScene(),this.camera=this._createCamera(H),this.controls=this._createControls(x),this.ambLight=this._createAmbLight(),this.scene.add(this.ambLight),this.dirLight=this._createDirLight(x),this.scene.add(this.dirLight),this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.renderer.setAnimationLoop(this.animate.bind(this))}else throw`${b} not found!}`}get fogFactor(){return this._fogFactor}set fogFactor(b){this._fogFactor=b,this.controls.dispatchEvent({type:"change"})}get width(){return this.container.clientWidth}get height(){return this.container.clientHeight}_createScene(){const b=new Jt,p=14414079;return b.background=new $t(p),b.fog=new Ot(p,0),b}_createRenderer(b,p){const I=new Kt({antialias:b,logarithmicDepthBuffer:p,stencil:!0,depth:!0,alpha:!0,precision:"highp"});return I.setPixelRatio(window.devicePixelRatio),I}_createCamera(b){const p=new _t(70,1,.1,5e4);return p.position.copy(b),p}_createControls(b){const p=new be(this.camera,this.container);return p.target.copy(b),p.screenSpacePanning=!1,p.minDistance=.1,p.maxDistance=3e4,p.maxPolarAngle=1.2,p.enableDamping=!0,p.dampingFactor=.05,p.keyPanSpeed=5,p.listenToKeyEvents(window),p.addEventListener("change",()=>{const I=Math.max(this.controls.getPolarAngle(),.1),x=Math.max(this.controls.getDistance(),.1);p.zoomSpeed=Math.max(Math.log(x),1.8),this.camera.far=te.clamp(x/I*8,100,5e4),this.camera.near=this.camera.far/1e3,this.camera.updateProjectionMatrix(),this.scene.fog instanceof Ot&&(this.scene.fog.density=I/(x+5)*this.fogFactor*.25),x>8e3?(p.minAzimuthAngle=0,p.maxAzimuthAngle=0):(p.minAzimuthAngle=-1/0,p.maxAzimuthAngle=1/0),p.maxPolarAngle=Math.min(Math.pow(1e4,4)/Math.pow(x,4),1.2)}),p}_createAmbLight(){return new ee(16777215,1)}_createDirLight(b){const p=new ne(16777215,1);return p.position.set(0,2e3,1e3),p.target.position.copy(b),p}resize(){const b=this.width,p=this.height;return this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(b,p),this.camera.aspect=b/p,this.camera.updateProjectionMatrix(),this}animate(){this.controls.update(),this.renderer.render(this.scene,this.camera),this.dispatchEvent({type:"update",delta:this._clock.getDelta()})}}const at=ye(de,he),ke=at.geo2world(new ft(86,28,0)),Ae=at.geo2world(new ft(86,27.8,10)),tt=new Me("#map",{centerPostion:ke,cameraPosition:Ae});tt.scene.add(at);tt.ambLight.intensity=.5;tt.dirLight.intensity=.5;const bt={backMat:new It({side:se,transparent:!0,depthWrite:!1,colorWrite:!1,stencilWrite:!0,stencilZFail:oe,fog:!1}),frontMat:new It({side:re,transparent:!0,depthWrite:!1,colorWrite:!1,stencilWrite:!0,stencilZFail:ie,fog:!1}),surfaceMat:new It({color:16776960,opacity:.2,transparent:!0,side:ae,depthTest:!1,stencilWrite:!0,stencilRef:0,stencilFunc:ce,stencilFail:St,stencilZFail:St,stencilZPass:St,blending:le,fog:!1})},wt=new fe(3,3,10);wt.rotateX(Math.PI/2);const Pe=new pt(wt,bt.backMat),Te=new pt(wt,bt.frontMat),Ie=new pt(wt,bt.surfaceMat),Mt=new Wt;Mt.add(Pe,Te,Ie);Mt.renderOrder=14;at.add(Mt);const Et=new V;tt.container.addEventListener("pointermove",J=>{Et.x=J.clientX/tt.renderer.domElement.clientWidth*2-1,Et.y=-(J.clientY/tt.renderer.domElement.clientHeight)*2+1;const P=at.getLocalInfoFromScreen(tt.camera,Et);if(P){const b=at.worldToLocal(P.point);Mt.position.set(b.x,b.y,b.z)}});function Se(J){const P=new Gt(J);return new pe(P,{steps:J.length*2,bevelEnabled:!1,depth:10})}function Ee(J){const P=Se(J);P.rotateX(Math.PI),P.scale(2.43,2.43,1),P.translate(690,5200,9);const{backMat:b,frontMat:p,surfaceMat:I}=bt,x=new pt(P,b);x.renderOrder=10;const H=new pt(P,p);H.renderOrder=11;const Q=new pt(P,I);Q.renderOrder=12;const U=new Wt;return U.add(x,H,Q),U}function Le(J,P){new Lt().load(J,function(p){const I=p.paths[0].subPaths[0].getPoints(),x=Ee(I);x.renderOrder=13,P.add(x)})}Le("../image/shanxi.svg",at);const jt=new ue().setPath("../image/skybox/").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);tt.scene.background=jt;const Ne={sky:!0},Ce=new qt,yt=Ce.addFolder("环境设置");yt.add(tt.ambLight,"intensity",0,5,.1).name("环境光强度");yt.addColor(tt.ambLight,"color").name("环境光颜色");yt.add(tt.dirLight,"intensity",0,5,.1).name("直射光强度");yt.addColor(tt.dirLight,"color").name("直射光光颜色");yt.add(tt,"fogFactor",.1,3,.1).listen().name("雾(能见度系数)");yt.add(Ne,"sky").name("云").onChange(J=>{tt.scene.background=J?jt:tt.scene.fog.color});me(at);ge(at);xe(tt,at);
