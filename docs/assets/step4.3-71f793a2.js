import"./modulepreload-polyfill-3cfb730f.js";import{b7 as i,P as l,i as d,r as m,c as w,V as a,Q as u,s as f,a as x,m as g}from"./mapSource-a5b9536a.js";class h extends i{loadGeometry(o,t){const s=new l;return setTimeout(()=>t(s)),s}loadMaterial(o,t){const s=new d;return s.map=new m(z(o.coord.x,o.coord.y,o.coord.z)),setTimeout(()=>t([s])),[s]}}function z(n,o,t){const c=new OffscreenCanvas(256,256),e=c.getContext("2d");return e&&(e.strokeStyle="#ccc",e.lineWidth=2,e.strokeRect(5,5,256-10,256-10),e.fillStyle="#ccc",e.shadowColor="black",e.shadowBlur=5,e.shadowOffsetX=1,e.shadowOffsetY=1,e.font="bold 20px arial",e.textAlign="center",e.fillText("一块瓦片",256/2,60),e.fillText(`坐标(${n}, ${o}, ${t})`,256/2,100),e.fillText("采用googles scheme",256/2,140)),c}function T(){const n=x,o=g,t=new w({loader:new h,imgSource:n,demSource:o,lon0:90,minLevel:2,maxLevel:20});return t.rotateX(-Math.PI/2),t}function p(n,o){const t=new a(110,35,0),s=new a(110,34.9,10),c=o.localToWorld(o.geo2pos(t)),e=o.localToWorld(o.geo2pos(s)),r=new u.GLViewer(n,{centerPostion:c,cameraPosition:e});return r.scene.add(o),r.scene.background=new f(0),r}const y=T();p("#map",y);
