import"./modulepreload-polyfill-3cfb730f.js";import{V as o,A as w,G as x,c as m,m as y,a as f}from"./mapSource-6ce90261.js";import{C as g,a as u}from"./CSS2DRenderer-1c73d5d9.js";import{c as h,a as E,s as L,b as S}from"./util-f7379211.js";const a=h(f,y),p=a.geo2pos(new o(95,25)),v=new o(p.x,p.y,0),F=new o(0,-2e3,3e3),e=E("#map",v,F);e.scene.add(a);const c=new g;c.setSize(e.container.clientWidth,e.container.clientHeight);c.domElement.style.position="absolute";e.container.appendChild(c.domElement);e.addEventListener("update",()=>{c.render(e.scene,e.camera)});window.addEventListener("resize",()=>c.setSize(e.container.clientWidth,e.container.clientHeight));e.controls.addEventListener("change",()=>{c.domElement.style.display=e.controls.getDistance()<1e4?"inline":"none"});(()=>{const t=new w(3e3);t.position.set(p.x,p.y,10),e.scene.add(t)})();const l=new x;a.add(l);(()=>{const t=new o(0,0,1);for(let n=60;n<140;n+=10)for(let s=0;s<70;s+=10){const i=a.geo2pos(new o(n,s)),r=new m(t,new o(i.x,i.y,-1),50);l.add(r)}l.traverse(n=>{if(n instanceof m){const s=document.createElement("span");s.className="label";const i=a.pos2geo(new o(n.position.x,n.position.y));s.innerHTML=`${i.x.toFixed(0)},${i.y.toFixed(0)}`,s.addEventListener("mouseenter",()=>{const d=a.getLocalInfoFromGeo(new o(i.x,i.y));d&&(s.title=`场景坐标：
x: ${d.point.x.toFixed(3)}
y: ${d.point.y.toFixed(3)}
z: ${d.point.z.toFixed(3)}`)});const r=new u(s);r.position.copy(n.position.clone().add(new o(0,0,10))),l.add(r)}})})();(()=>{const t=new w;e.scene.add(t),e.controls.addEventListener("change",()=>{e.camera.updateMatrixWorld();const n=new o(-.9,-.85,0).unproject(e.camera);t.position.copy(n),t.scale.setScalar(t.position.distanceTo(e.camera.position)/50)})})();L(e,a);S(a);
