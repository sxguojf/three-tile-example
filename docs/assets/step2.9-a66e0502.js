import"./modulepreload-polyfill-3cfb730f.js";import{V as r,a3 as m,a4 as g,a5 as l,G as y,f as S,e as w,l as L,m as M,a as f}from"./mapSource-2c762b60.js";import{T as k}from"./TeapotGeometry-eb533028.js";import{e as n}from"./tween.module-e5a426a4.js";import{c as b,a as v,d as x,e as E,b as B,s as T,f as G}from"./util-e741174c.js";const s=b(f,M);s.receiveShadow=!0;const i=s.geo2pos(new r(105,30)),P=new r(i.x,i.y,0),I=new r(0,-10,1e4),t=v("#map",P,I);t.ambLight.intensity=.2;t.dirLight.intensity=.5;t.dirLight.castShadow=!0;t.scene.add(s);t.renderer.shadowMap.enabled=!0;t.renderer.shadowMap.type=m;const c=(()=>{const e=new g(16777215,10,5e3,Math.PI/4,.5,0),a=s.geo2pos(new r(105,30));return e.position.set(a.x,a.y+2e3,3e3),e.target.position.set(a.x,a.y,0),e.castShadow=!0,e.shadow.camera.visible=!0,e})();t.scene.add(c);t.scene.add(new l(c));const d=new y,p=new S({color:34986}),h=(()=>{const e=s.geo2pos(new r(100,40)),a=new k(200),o=new w(a,p);return o.position.set(e.x,e.y,2e3),o.rotateX(Math.PI/2),o.castShadow=!0,o.receiveShadow=!0,d.add(o),o})(),u=(()=>{const e=s.geo2pos(new r(110,40)),a=new L(200,50),o=new w(a,p);return o.position.set(e.x,e.y,2e3),o.rotateX(Math.PI/2),o.castShadow=!0,o.receiveShadow=!0,d.add(o),o})();t.scene.add(d);x(t,s);new n.Tween(t.camera.position).to({y:1e3,z:1e3},5e3).easing(n.Easing.Bounce.Out).start(500);new n.Tween(h.position).to({z:200},1e3).easing(n.Easing.Bounce.Out).start(6e3),new n.Tween(u.position).to({z:250},1e3).easing(n.Easing.Bounce.Out).start(7e3);(()=>{const e=document.querySelector("#anim");t.addEventListener("update",a=>{n.update(),e.checked&&(h.rotation.y+=a.delta,u.rotation.y+=a.delta)})})();(()=>{const e=document.querySelector("#shadow");e.addEventListener("click",()=>{t.renderer.shadowMap.enabled=e.checked,t.dirLight.castShadow=e.checked,t.renderer.shadowMap.needsUpdate=!0})})();(()=>{const e=document.querySelector("#light");e.addEventListener("click",()=>{c.visible=e.checked})})();E(s);B(s);T(t,s);G(t);
