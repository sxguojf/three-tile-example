import"./modulepreload-polyfill-3cfb730f.js";import{N as r,V as s,a}from"./mapSource-de628f72.js";import{V as n}from"./three.module-31477d3d.js";import{b as c,s as m}from"./util-f3e58d78.js";const i=document.querySelector("#map"),o=new r.GLViewer(i),t=s.create({imgSource:a,centralMeridian:90,minLevel:2});o.scene.add(t);const e=t.geo2pos(new n(100,34));o.controls.target.set(e.x,e.y,0);o.camera.position.set(e.x,e.y-1e3,3e3);c(t);m(o,t);