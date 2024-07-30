import"./modulepreload-polyfill-3cfb730f.js";import{V as r,a2 as u,a3 as m,a4 as l,G as g,h as S,g as i,o as y,m as L,a as M}from"./mapSource-50ea1ccb.js";import{T as k}from"./TeapotGeometry-60caea30.js";import{e as n}from"./tween.module-e5a426a4.js";import{c as T,a as b,e as f,d as v,b as E,s as G,f as x}from"./util-0d1e0617.js";const o=T(M,L),B=new r(105,34,0),z=new r(105,20,5e3),t=b("#map",o,B,z);t.ambLight.intensity=.2;t.dirLight.intensity=.5;t.dirLight.castShadow=!0;o.receiveShadow=!0;t.renderer.shadowMap.enabled=!0;t.renderer.shadowMap.type=u;const c=(()=>{const e=new m(16777215,10,5e3,Math.PI/4,.5,0),a=o.localToWorld(o.geo2pos(new r(105,30)));return e.position.set(a.x,3e3,a.z),e.target.position.copy(a),e.castShadow=!0,e})();t.scene.add(c);t.scene.add(new l(c));const d=new g,p=new S({color:34986}),w=(()=>{const e=o.localToWorld(o.geo2pos(new r(100,40))),a=new k(200),s=new i(a,p);return s.position.set(e.x,2e3,e.z),s.castShadow=!0,s.receiveShadow=!0,d.add(s),s})(),h=(()=>{const e=o.localToWorld(o.geo2pos(new r(110,40))),a=new y(200,50),s=new i(a,p);return s.position.set(e.x,2e3,e.z),s.castShadow=!0,s.receiveShadow=!0,d.add(s),s})();t.scene.add(d);f(t,o);new n.Tween(t.camera.position).to({y:1e3,z:1e3},5e3).easing(n.Easing.Bounce.Out).start(500);new n.Tween(w.position).to({y:200},1e3).easing(n.Easing.Bounce.Out).start(6e3),new n.Tween(h.position).to({y:250},1e3).easing(n.Easing.Bounce.Out).start(7e3);(()=>{const e=document.querySelector("#anim");t.addEventListener("update",a=>{n.update(),e.checked&&(w.rotation.y+=a.delta,h.rotation.y+=a.delta)})})();(()=>{const e=document.querySelector("#shadow");e.addEventListener("click",()=>{t.renderer.shadowMap.enabled=e.checked,t.dirLight.castShadow=e.checked,t.renderer.shadowMap.needsUpdate=!0})})();(()=>{const e=document.querySelector("#light");e.addEventListener("click",()=>{c.visible=e.checked})})();v(o);E(o);G(t,o);x(t);
