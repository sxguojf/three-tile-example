var n=Object.defineProperty;var l=(a,e,o)=>e in a?n(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o;var t=(a,e,o)=>(l(a,typeof e!="symbol"?e+"":e,o),o);import"./modulepreload-polyfill-3cfb730f.js";import{bM as p,q as w,X as y,V as s,a as i}from"./mapSource-ec449248.js";import{c as b,a as d,b as u,s as G}from"./util-bfcdfc22.js";class L{constructor(){t(this,"dataType","ball");t(this,"name","ball loader")}load(e,o,V,f,c){const m=new w(.35,.15);return setTimeout(c),m}}p.registerGeometryLoader(new L);const T=new y({dataType:"ball"}),r=b(i,T),_=new s(108,34,0),g=new s(108,0,1e4),M=d("#map",r,_,g);u(r);G(M,r);
