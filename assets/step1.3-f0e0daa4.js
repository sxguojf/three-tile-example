import"./modulepreload-polyfill-3cfb730f.js";import{a as s,V as d}from"./GLViewer-4908af8c.js";import{c as l,a as x,m as F,b as $,z as f}from"./util-54b1a14e.js";const a=l([$,f],F),m=a.project(108.95,34.2),p=new s(m.x,m.y,0),u=new s(0,-50,40),c=x("#map",p,u);c.scene.add(a);function g(o,n){const e=new d;o.container.addEventListener("pointermove",i=>{e.x=i.clientX/o.renderer.domElement.clientWidth*2-1,e.y=-(i.clientY/o.renderer.domElement.clientHeight)*2+1;const t=n.getLocationFromScreen(o.camera,e);if(t){const r=document.querySelector("#local-info");r.innerHTML=`经度:${t.location.x.toFixed(2)}°  
                            纬度:${t.location.y.toFixed(2)}°  
                            海拔:${t.location.z.toFixed(2)}km
                            距离:${t.distance.toFixed(2)}km `,t.normal&&(r.innerHTML+=`法向量:(${t.normal.x.toFixed(1)},
                ${t.normal.y.toFixed(1)},
                ${t.normal.z.toFixed(1)})(可用于坡向计算)`)}})}function y(o){const n=()=>{const e=document.querySelector("#camera-info");e.innerHTML=`摄像机:(${o.camera.position.x.toFixed(1)},
                               ${o.camera.position.y.toFixed(1)},
                               ${o.camera.position.z.toFixed(1)}),
                        near:${o.camera.near.toFixed(1)},
                        far:${o.camera.far.toFixed(1)},
                        方位角:${o.controls.getAzimuthalAngle().toFixed(1)}°, 
                        俯仰角:${o.controls.getPolarAngle().toFixed(1)}°,
                        距离:${o.controls.getDistance().toFixed(1)}km`};o.controls.addEventListener("change",n),n()}g(c,a);y(c);
