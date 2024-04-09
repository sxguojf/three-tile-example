import"./modulepreload-polyfill-3cfb730f.js";import{V as a,m as d,a as l,x,b as f}from"./mapSource-9a4d2911.js";import{c as F,a as $}from"./util-bcbf6958.js";const c=F([l,x],d),m=c.geo2pos(new a(108.95,34.2)),p=new a(m.x,m.y,0),g=new a(0,-50,40),i=$("#map",p,g);i.scene.add(c);function u(o,n){const e=new f;o.container.addEventListener("pointermove",r=>{e.x=r.clientX/o.renderer.domElement.clientWidth*2-1,e.y=-(r.clientY/o.renderer.domElement.clientHeight)*2+1;const t=n.getLocalInfoFromScreen(o.camera,e);if(t){const s=document.querySelector("#local-info");s.innerHTML=`经度:${t.location.x.toFixed(2)}°  
                            纬度:${t.location.y.toFixed(2)}°  
                            海拔:${t.location.z.toFixed(2)}km
                            距离:${t.distance.toFixed(2)}km `,t.normal&&(s.innerHTML+=`法向量:(${t.normal.x.toFixed(1)},
                ${t.normal.y.toFixed(1)},
                ${t.normal.z.toFixed(1)})(可用于坡向计算)`)}})}function h(o){const n=()=>{const e=document.querySelector("#camera-info");e&&(e.innerHTML=`摄像机:(${o.camera.position.x.toFixed(1)},
                               ${o.camera.position.y.toFixed(1)},
                               ${o.camera.position.z.toFixed(1)}),
                        near:${o.camera.near.toFixed(1)},
                        far:${o.camera.far.toFixed(1)},
                        方位角:${(o.controls.getAzimuthalAngle()*180/Math.PI).toFixed(1)}°, 
                        俯仰角:${(o.controls.getPolarAngle()*180/Math.PI).toFixed(1)}°,
                        距离:${o.controls.getDistance().toFixed(1)}km`)};o.controls.addEventListener("change",n),n()}u(i,c);h(i);
