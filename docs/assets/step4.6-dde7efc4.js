var i=Object.defineProperty;var p=(o,e,a)=>e in o?i(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a;var s=(o,e,a)=>(p(o,typeof e!="symbol"?e+"":e,a),a);import"./modulepreload-polyfill-3cfb730f.js";import{ba as w,o as d,X as y,V as r,a as b}from"./mapSource-6ce90261.js";import{c as u,a as f,b as g,s as L}from"./util-f7379211.js";class T{constructor(){s(this,"dataType","ball");s(this,"name","ball loader")}load(e,a,m,h){const l=new d(.35,.15);return setTimeout(m),l}}w.registerGeometryLoader(new T);const G=new y({dataType:"ball"}),t=u([b],G),n=t.geo2pos(new r(105,30)),V=new r(n.x,n.y,0),_=new r(0,-3,3),c=f("#map",V,_);c.scene.add(t);g(t);L(c,t);