import"./modulepreload-polyfill-3cfb730f.js";import{c as d,V as m,b as l,m as x,e as F,z as $,h as f}from"./util-7385d603.js";const c=d([F,$],x),s=c.project(108.95,34.2),p=new m(s.x,s.y,0),u=new m(0,-50,40),a=l("#map",p,u);a.scene.add(c);function g(o,n){const t=new f;o.container.addEventListener("pointermove",i=>{t.x=i.clientX/o.renderer.domElement.clientWidth*2-1,t.y=-(i.clientY/o.renderer.domElement.clientHeight)*2+1;const e=n.getLocationFromScreen(o.camera,t);if(e){const r=document.querySelector("#local-info");r.innerHTML=`经度:${e.location.x.toFixed(2)}°  
                            纬度:${e.location.y.toFixed(2)}°  
                            海拔:${e.location.z.toFixed(2)}km
                            距离:${e.distance.toFixed(2)}km `,e.normal&&(r.innerHTML+=`法向量:(${e.normal.x.toFixed(1)},
                ${e.normal.y.toFixed(1)},
                ${e.normal.z.toFixed(1)})(可用于坡向计算)`)}})}function h(o){const n=()=>{const t=document.querySelector("#camera-info");t.innerHTML=`摄像机:(${o.camera.position.x.toFixed(1)},
                               ${o.camera.position.y.toFixed(1)},
                               ${o.camera.position.z.toFixed(1)}),
                        near:${o.camera.near.toFixed(1)},
                        far:${o.camera.far.toFixed(1)},
                        方位角:${o.controls.getAzimuthalAngle().toFixed(1)}°, 
                        俯仰角:${o.controls.getPolarAngle().toFixed(1)}°,
                        距离:${o.controls.getDistance().toFixed(1)}km`};o.controls.addEventListener("change",n),n()}g(a,c);h(a);
