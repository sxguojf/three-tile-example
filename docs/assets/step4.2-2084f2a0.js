import"./modulepreload-polyfill-3cfb730f.js";import{b7 as i,P as m,c as l,V as s,Q as u,s as d,a as w,m as g}from"./mapSource-1769961f.js";class p extends i{loadGeometry(e,o){const t=new m;return setTimeout(()=>o(t)),t}}function y(){const n=w,e=g,o=new l({loader:new p,imgSource:n,demSource:e,lon0:90,minLevel:2,maxLevel:20});return o.rotateX(-Math.PI/2),o}function G(n,e){const o=new s(110,35,0),t=new s(110,34.9,10),c=e.localToWorld(e.geo2pos(o)),a=e.localToWorld(e.geo2pos(t)),r=new u.GLViewer(n,{centerPostion:c,cameraPosition:a});return r.scene.add(e),r.scene.background=new d(0),r}const P=y();G("#map",P);
