import"./modulepreload-polyfill-3cfb730f.js";import{V as d,m as p,a as l}from"./mapSource-bbe48df7.js";import{e as n}from"./tween.module-e5a426a4.js";import{c as g,a as y,e as E,d as h,b as k,s as L,f as S}from"./util-5a34c843.js";const t=g(l,p),w=new d(108,34,0),v=new d(108,33,3e3),a=y("#map",t,w,v);a.addEventListener("update",()=>n.update());E(a,t);const o=()=>{const e=t.localToWorld(t.geo2pos(w));return new n.Tween(a.camera.position).to({x:e.x,y:1e4,z:e.y+1e3},500)},u=()=>{const e=new n.Tween(a.camera.position);o().chain(e.to({y:1e3,z:-2e3},1e3).easing(n.Easing.Back.In)).start()},z=()=>{const e=new n.Tween(a.camera.position);o().chain(e.to({y:1e3,z:-2e3},3e3).easing(n.Easing.Bounce.Out)).start()},T=()=>{const e=new n.Tween(a.camera.position);o().chain(e.to({y:1e3,z:-2e3},3e3).easing(n.Easing.Circular.In)).start()},q=()=>{const e=new n.Tween(a.camera.position);o().chain(e.to({y:1e3,z:-2e3},3e3).easing(n.Easing.Elastic.In)).start()},x=()=>{const e=new n.Tween(t.rotation);o().chain(e.to({z:4*Math.PI},3e3).easing(n.Easing.Quartic.Out)).start().onComplete(()=>{t.rotation.z=0})};u();var c;(c=document.querySelector("#anim1"))==null||c.addEventListener("click",()=>u());var s;(s=document.querySelector("#anim2"))==null||s.addEventListener("click",()=>z());var i;(i=document.querySelector("#anim3"))==null||i.addEventListener("click",()=>T());var r;(r=document.querySelector("#anim4"))==null||r.addEventListener("click",()=>q());var m;(m=document.querySelector("#anim5"))==null||m.addEventListener("click",()=>x());h(t);k(t);L(a,t);S(a);
