var l=Object.defineProperty;var d=(a,e,o)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o;var t=(a,e,o)=>(d(a,typeof e!="symbol"?e+"":e,o),o);import"./modulepreload-polyfill-3cfb730f.js";import{b8 as i,q as p,t as w,V as s,a as y}from"./mapSource-1769961f.js";import{c as b,a as u,b as G,s as L}from"./util-a377a475.js";class T{constructor(){t(this,"dataType","ball");t(this,"name","ball loader")}load(e,o,n,_){const m=new p(.35,.15);return setTimeout(n),m}}i.registerGeometryLoader(new T);const g=new w({dataType:"ball"}),r=b(y,g),S=new s(108,34,0),V=new s(108,0,1e4),c=u("#map",r,S,V);c.scene.add(r);G(r);L(c,r);