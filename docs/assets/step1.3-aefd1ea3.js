import"./modulepreload-polyfill-3cfb730f.js";import{V as l,m as d,a as m,b as x,d as s}from"./mapSource-bbe48df7.js";import{c as F,a as $}from"./util-5a34c843.js";const a=F(m,d),p=new l(108,34,0),g=new l(108,0,1e4),i=$("#map",a,p,g);i.controls.saveState();function f(o,c){const e=new x;o.container.addEventListener("pointermove",n=>{e.x=n.clientX/o.renderer.domElement.clientWidth*2-1,e.y=-(n.clientY/o.renderer.domElement.clientHeight)*2+1;const t=c.getLocalInfoFromScreen(o.camera,e);if(t){const r=document.querySelector("#local-info");r.innerHTML=`经度:${t.location.x.toFixed(6)}°  
                            纬度:${t.location.y.toFixed(6)}°  
                            海拔:${t.location.z.toFixed(6)}km
                         	</br> `,r.innerHTML+=`世界坐标:(${t.point.x.toFixed(6)},${t.point.x.toFixed(6)},${t.point.x.toFixed(6)})`,t.normal&&(r.innerHTML+=`</br>法向量:(${t.normal.x.toFixed(1)},
                ${t.normal.y.toFixed(1)},
                ${t.normal.z.toFixed(1)})(可用于坡向计算)`)}})}function y(o){const c=()=>{const e=document.querySelector("#camera-info");if(e){const n=a.pos2geo(a.worldToLocal(o.camera.position.clone())),t=a.pos2geo(a.worldToLocal(o.controls.target.clone()));e.innerHTML=`摄像机: 世界坐标(${o.camera.position.x.toFixed(1)},
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
                        距离:${o.controls.getDistance().toFixed(6)}km`}};o.controls.addEventListener("change",c),c()}f(i,a);y(i);
