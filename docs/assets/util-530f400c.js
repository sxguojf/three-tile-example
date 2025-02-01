import{U as l,a as d,h as i,V as c,b as g,a1 as m,f as u,P as f,I as p,T as L,aD as x,s as h}from"./mapSource-dadc50e7.js";const T=(o=d,e)=>{const t=new l({imgSource:o,demSource:e,lon0:90,minLevel:2,maxLevel:20});return t.rotateX(-Math.PI/2),t},F=(o,e,t=new c(110,30,0),n=new c(110,0,1e4))=>{const a=e.geo2world(t),s=e.geo2world(n),r=new i.GLViewer(o,{centerPostion:a,cameraPosition:s});return r.scene.add(e),r},M=(o,e="#load-state")=>{const t=document.querySelector(e);t&&(o.addEventListener("loading-start",n=>{t.innerHTML="Started: "+n.itemsLoaded+" of "+n.itemsTotal+" files."}),o.addEventListener("loading-progress",n=>{t.innerHTML="Loading: "+n.itemsLoaded+" of "+n.itemsTotal+" files."}),o.addEventListener("loading-complete",()=>{t.innerHTML="Loading complete!"}),o.addEventListener("loading-error",n=>{t.innerHTML="There was an error loading "+n}))},S=(o,e="#camera")=>{const t=document.querySelector(e);t&&o.controls.addEventListener("change",()=>{t.innerHTML=`摄像机:(${o.camera.position.x.toFixed(2)},
                               ${o.camera.position.y.toFixed(2)},
                               ${o.camera.position.z.toFixed(2)}) 
                           焦点:(${o.controls.target.x.toFixed(2)},
                                ${o.controls.target.y.toFixed(2)},
                                ${o.controls.target.z.toFixed(2)}) 
                          方位角:${o.controls.getAzimuthalAngle().toFixed(2)}° 
                          俯仰角:${o.controls.getPolarAngle().toFixed(2)}°`})},$=(o,e,t="#location")=>{const n=document.querySelector(t);if(n){const a=new g;o.container.addEventListener("pointermove",s=>{a.x=s.clientX/o.container.clientWidth*2-1,a.y=-(s.clientY/o.container.clientHeight)*2+1;const r=e.getLocalInfoFromScreen(o.camera,a);r?n.innerHTML=`经度:${r.location.x.toFixed(3)}°  
                            纬度:${r.location.y.toFixed(3)}°  
                            海拔:${(r.location.z*1e3).toFixed(1)}m
                            离摄像机距离:${r.distance.toFixed(3)}km `:n.innerHTML=""})}},E=(o,e="#attribution")=>{const t=document.querySelector(e);if(t){const n=()=>t.innerHTML="© "+o.attributions.join(" | © ");o.addEventListener("source-changed",n),n()}},k=o=>{o.scene.background=new m().setPath("../image/skybox/").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"])},b=o=>{const e=new u(new f,new p({map:new L().load("../image/tile0.png",t=>t.colorSpace=x)}));e.name="background",e.material.polygonOffsetFactor=10,e.material.polygonOffsetUnits=1,e.material.polygonOffset=!0,e.renderOrder=-1,e.translateZ(-.1),e.applyMatrix4(o.rootTile.matrix),o.add(e)};function H(o,e){var n;const t=new i.FakeEarth(((n=o.scene.fog)==null?void 0:n.color)||new h(0));t.name="fakeearth",t.applyMatrix4(e.rootTile.matrix),o.controls.addEventListener("change",()=>{t.visible=o.controls.getDistance()>3e3}),e.add(t)}function z(o){o.addEventListener("update",()=>{const e=document.querySelector("#compass-plane");e&&(e.style.transform=`rotateX(${o.controls.getPolarAngle()}rad)`);const t=document.querySelector("#compass-text");t&&(t.style.transform=`rotate(${o.controls.getAzimuthalAngle()}rad)`)})}function P(o,e){function t(){const n=o.camera.near,a=o.camera.localToWorld(new c(0,0,-n)),s=e.getLocalInfoFromWorld(a);return s?e.worldToLocal(a).z-e.worldToLocal(s.point).z:10}o.controls.addEventListener("change",()=>{const n=t();if(n<.2){const a=e.localToWorld(e.up.clone()).multiplyScalar(.201-n);o.camera.position.add(a)}})}export{F as a,M as b,T as c,b as d,H as e,k as f,E as g,S as h,P as l,$ as s,z as u};
