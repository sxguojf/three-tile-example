import"./modulepreload-polyfill-3cfb730f.js";import{V as n,m as i,a as m}from"./mapSource-ec449248.js";import{c as d,a as p,u,s as f,b as h}from"./util-bfcdfc22.js";const c=d(m,i),g=new n(82.4,30,0),w=new n(82.41,29.9,5),r=p("#map",c,g,w);L(r,c);function L(a,o){function l(){const t=a.camera.near,e=a.camera.localToWorld(new n(0,0,-t)),s=o.getLocalInfoFromWorld(e);return s?o.worldToLocal(e).z-o.worldToLocal(s.point).z:10}a.controls.addEventListener("change",()=>{const t=l();if(t<.2){const e=o.localToWorld(o.up.clone()).multiplyScalar(.201-t);a.camera.position.add(e)}})}u(r);f(r,c);h(c);
