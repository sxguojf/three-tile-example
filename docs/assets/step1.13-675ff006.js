import"./modulepreload-polyfill-3cfb730f.js";import{V as l,b as d,g as m,B as x,h as F,m as p,a as $,d as s}from"./mapSource-aa63c091.js";import{c as g,a as f,l as h}from"./util-20863b21.js";const c=g($,p),y=new l(108.990338,34.170739,0),L=new l(108.979247,34.16483,1.371867),a=f("#map",c,y,L);a.controls.saveState();a.container.addEventListener("click",o=>{var t;const i=a.camera,e=new d;e.x=o.clientX/a.container.clientWidth*2-1,e.y=1-o.clientY/a.container.clientHeight*2;const n=(t=c.getLocalInfoFromScreen(i,e))==null?void 0:t.point;if(n){const r=new m(new x(.1,.1,.1),new F);r.position.copy(n),a.scene.add(r)}});function u(o,i){const e=new d;o.container.addEventListener("pointermove",n=>{e.x=n.clientX/o.renderer.domElement.clientWidth*2-1,e.y=-(n.clientY/o.renderer.domElement.clientHeight)*2+1;const t=i.getLocalInfoFromScreen(o.camera,e);if(t){const r=document.querySelector("#local-info");r.innerHTML=`经度:${t.location.x.toFixed(6)}°  
                            纬度:${t.location.y.toFixed(6)}°  
                            海拔:${t.location.z.toFixed(6)}km
                           </br> `,r.innerHTML+=`地图坐标:(${t.point.x.toFixed(6)},${t.point.x.toFixed(6)},${t.point.x.toFixed(6)})`,t.normal&&(r.innerHTML+=`</br>法向量:(${t.normal.x.toFixed(1)},
                ${t.normal.y.toFixed(1)},
                ${t.normal.z.toFixed(1)})(可用于坡向计算)`)}})}function M(o){const i=()=>{const e=document.querySelector("#camera-info");if(e){const n=c.pos2geo(c.worldToLocal(o.camera.position.clone())),t=c.pos2geo(c.worldToLocal(o.controls.target.clone()));e.innerHTML=`摄像机: 世界坐标(${o.camera.position.x.toFixed(1)},
                               ${o.camera.position.y.toFixed(6)},
                               ${o.camera.position.z.toFixed(6)}),
                               地理坐标:(${n.x.toFixed(6)},
                               ${n.y.toFixed(6)},
                               ${n.z.toFixed(6)}),<br/>                        
                        控制器: 世界坐标(${o.controls.target.x.toFixed(6)},
                               ${o.controls.target.y.toFixed(6)},
                               ${o.controls.target.z.toFixed(6)}),
                               地理坐标:(${t.x.toFixed(6)},
                               ${t.y.toFixed(6)},
                               ${t.z.toFixed(6)}),<br/>                        
                        地图: 方位角:${s.radToDeg(o.controls.getAzimuthalAngle()).toFixed(6)}°, 
                        俯仰角:${s.radToDeg(o.controls.getPolarAngle()).toFixed(6)}°,
                        距离:${o.controls.getDistance().toFixed(6)}km`}};o.controls.addEventListener("change",i),i()}u(a,c);M(a);h(a,c);
