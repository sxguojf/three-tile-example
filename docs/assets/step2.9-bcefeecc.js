import"./modulepreload-polyfill-3cfb730f.js";import{V as r,a2 as u,a3 as m,a4 as g,G as l,g as S,f as i,o as y,m as L,a as M}from"./mapSource-ec449248.js";import{T as k}from"./TeapotGeometry-38da5ea0.js";import{e as s}from"./tween.module-26270d87.js";import{c as f,a as b,e as v,d as E,b as G,s as x,f as B}from"./util-bfcdfc22.js";const n=f(M,L),T=new r(105,34,0),z=new r(105,20,5e3),t=b("#map",n,T,z);t.ambLight.intensity=.2;t.dirLight.intensity=.5;t.dirLight.castShadow=!0;n.receiveShadow=!0;t.renderer.shadowMap.enabled=!0;t.renderer.shadowMap.type=u;const c=(()=>{const e=new m(16777215,10,5e3,Math.PI/4,.5,0),o=n.geo2world(new r(105,30));return e.position.set(o.x,3e3,o.z),e.target.position.copy(o),e.castShadow=!0,e})();t.scene.add(c);t.scene.add(new g(c));const d=new l,w=new S({color:34986}),p=(()=>{const e=n.geo2world(new r(100,40)),o=new k(200),a=new i(o,w);return a.position.set(e.x,2e3,e.z),a.castShadow=!0,a.receiveShadow=!0,d.add(a),a})(),h=(()=>{const e=n.geo2world(new r(110,40)),o=new y(200,50),a=new i(o,w);return a.position.set(e.x,2e3,e.z),a.castShadow=!0,a.receiveShadow=!0,d.add(a),a})();t.scene.add(d);v(t,n);new s.Tween(t.camera.position).to({y:1e3,z:1e3},5e3).easing(s.Easing.Bounce.Out).start(500);new s.Tween(p.position).to({y:200},1e3).easing(s.Easing.Bounce.Out).start(6e3),new s.Tween(h.position).to({y:250},1e3).easing(s.Easing.Bounce.Out).start(7e3);(()=>{const e=document.querySelector("#anim");t.addEventListener("update",o=>{s.update(),e.checked&&(p.rotation.y+=o.delta,h.rotation.y+=o.delta)})})();(()=>{const e=document.querySelector("#shadow");e.addEventListener("click",()=>{t.renderer.shadowMap.enabled=e.checked,t.dirLight.castShadow=e.checked,t.renderer.shadowMap.needsUpdate=!0})})();(()=>{const e=document.querySelector("#light");e.addEventListener("click",()=>{c.visible=e.checked})})();E(n);G(n);x(t,n);B(t);
