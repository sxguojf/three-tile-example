import"./modulepreload-polyfill-3cfb730f.js";import{bD as i,P as l,i as m,r as w,U as d,V as c,h as u,s as f,a as x,m as g}from"./mapSource-dadc50e7.js";class h extends i{loadGeometry(t,o,a,s){const e=new l;return setTimeout(()=>s(e)),e}loadMaterial(t,o,a,s){const e=new m;return e.map=new w(z(t,o,a)),setTimeout(()=>s([e])),[e]}}function z(n,t,o){const s=new OffscreenCanvas(256,256),e=s.getContext("2d");return e&&(e.strokeStyle="#ccc",e.lineWidth=2,e.strokeRect(5,5,256-10,256-10),e.fillStyle="#ccc",e.shadowColor="black",e.shadowBlur=5,e.shadowOffsetX=1,e.shadowOffsetY=1,e.font="bold 20px arial",e.textAlign="center",e.fillText("一块瓦片",256/2,60),e.fillText(`坐标(${n}, ${t}, ${o})`,256/2,100),e.fillText("采用googles scheme",256/2,140)),s}function p(){const n=x,t=g,o=new d({loader:new h,imgSource:n,demSource:t,lon0:90,minLevel:2,maxLevel:20});return o.rotateX(-Math.PI/2),o}function y(n,t){const o=new c(110,35,0),a=new c(110,34.9,10),s=t.geo2world(o),e=t.geo2world(a),r=new u.GLViewer(n,{centerPostion:s,cameraPosition:e});return r.scene.add(t),r.scene.background=new f(0),r}const T=p();y("#map",T);
