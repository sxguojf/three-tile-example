import"./modulepreload-polyfill-3cfb730f.js";import{r as l,N as m,a as d,m as f,V as w}from"./mapSource-de628f72.js";import{P as x,e as u,m as p,V as y}from"./three.module-31477d3d.js";class g extends l{loadGeometry(o,s){const t=new x;return setTimeout(()=>s(t)),t}loadMaterial(o,s){const t=new u;return t.map=new p(z(o.coord.x,o.coord.y,o.coord.z)),setTimeout(()=>s([t])),[t]}}function z(n,o,s){const c=new OffscreenCanvas(256,256),e=c.getContext("2d");return e&&(e.strokeStyle="#ccc",e.lineWidth=2,e.strokeRect(5,5,256-10,256-10),e.fillStyle="#ccc",e.shadowColor="black",e.shadowBlur=5,e.shadowOffsetX=1,e.shadowOffsetY=1,e.font="bold 20px arial",e.textAlign="center",e.fillText("一块瓦片",256/2,60),e.fillText(`坐标(${n}, ${o}, ${s})`,256/2,100),e.fillText("采用googles scheme",256/2,140)),c}const h=document.querySelector("#map"),a=new m.GLViewer(h),T=new g([d],f),i=new w({loader:T,centralMeridian:90,minLevel:2});a.scene.add(i);const r=i.geo2pos(new y(95,29.65));a.controls.target.set(r.x,r.y,0);a.camera.position.set(r.x,r.y-80,50);