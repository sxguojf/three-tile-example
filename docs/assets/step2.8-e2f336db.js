import"./modulepreload-polyfill-3cfb730f.js";import{c as p,V as w,b as l,K as y,j as E,s as g,ag as h,m as k,e as L}from"./util-7385d603.js";import{T as e}from"./tween.module-97c976ec.js";const a=p(L,k),c=a.project(105,40),S=new w(c.x,c.y,0),T=new w(0,-1,1e3),t=l("#map",S,T);t.scene.add(a);t.addEventListener("update",()=>e.update());const o=()=>new e.Tween(t.camera.position).to({x:c.x,y:c.y-1e3,z:1e4},500),u=()=>{const n=new e.Tween(t.camera.position);o().chain(n.to({y:1e3,z:1500},1e3).easing(e.Easing.Back.In)).start()},v=()=>{const n=new e.Tween(t.camera.position);o().chain(n.to({y:1e3,z:1500},3e3).easing(e.Easing.Bounce.Out)).start()},z=()=>{const n=new e.Tween(t.camera.position);o().chain(n.to({y:1e3,z:1500},3e3).easing(e.Easing.Circular.In)).start()},q=()=>{const n=new e.Tween(t.camera.position);o().chain(n.to({y:1e3,z:1500},3e3).easing(e.Easing.Elastic.In)).start()},x=()=>{const n=new e.Tween(a.rotation);o().chain(n.to({z:4*Math.PI},3e3).easing(e.Easing.Quartic.Out)).start().onComplete(()=>{a.rotation.z=0})};u();var s;(s=document.querySelector("#anim1"))==null||s.addEventListener("click",()=>u());var i;(i=document.querySelector("#anim2"))==null||i.addEventListener("click",()=>v());var r;(r=document.querySelector("#anim3"))==null||r.addEventListener("click",()=>z());var m;(m=document.querySelector("#anim4"))==null||m.addEventListener("click",()=>q());var d;(d=document.querySelector("#anim5"))==null||d.addEventListener("click",()=>x());y(a);E(a);g(t,a);h(t);