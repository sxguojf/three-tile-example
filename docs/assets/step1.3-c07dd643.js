import"./modulepreload-polyfill-3cfb730f.js";import{V as d,m as l,a as m,b as x,d as s}from"./mapSource-a5b9536a.js";import{c as F,a as $}from"./util-8e2a1d86.js";const e=F(m,l),p=new d(108,34,0),g=new d(108,0,1e4),r=$("#map",e,p,g);r.scene.add(e);r.controls.saveState();function f(o,c){const n=new x;o.container.addEventListener("pointermove",a=>{n.x=a.clientX/o.renderer.domElement.clientWidth*2-1,n.y=-(a.clientY/o.renderer.domElement.clientHeight)*2+1;const t=c.getLocalInfoFromScreen(o.camera,n);if(t){const i=document.querySelector("#local-info");i.innerHTML=`经度:${t.location.x.toFixed(6)}°  
                            纬度:${t.location.y.toFixed(6)}°  
                            海拔:${t.location.z.toFixed(6)}km
                         	</br> `,i.innerHTML+=`世界坐标:(${t.point.x.toFixed(6)},${t.point.x.toFixed(6)},${t.point.x.toFixed(6)})`,t.normal&&(i.innerHTML+=`</br>法向量:(${t.normal.x.toFixed(1)},
                ${t.normal.y.toFixed(1)},
                ${t.normal.z.toFixed(1)})(可用于坡向计算)`)}})}function y(o){const c=()=>{const n=document.querySelector("#camera-info");if(n){const a=e.pos2geo(e.worldToLocal(o.camera.position.clone())),t=e.pos2geo(e.worldToLocal(o.controls.target.clone()));n.innerHTML=`摄像机: 世界坐标(${o.camera.position.x.toFixed(1)},
                               ${o.camera.position.y.toFixed(6)},
                               ${o.camera.position.z.toFixed(6)}),
                               地理坐标:(${a.x.toFixed(6)},
                               ${a.y.toFixed(6)},
                               ${a.z.toFixed(6)}),<br/>                        
                        控制器: 世界坐标(${o.controls.target.x.toFixed(6)},
                               ${o.controls.target.y.toFixed(6)},
                               ${o.controls.target.z.toFixed(6)}),
                               地理坐标:(${t.x.toFixed(6)},
                               ${t.y.toFixed(6)},
                               ${t.z.toFixed(6)}),<br/>                        
                        地图: 方位角:${s.radToDeg(o.controls.getAzimuthalAngle()).toFixed(6)}°, 
                        俯仰角:${s.radToDeg(o.controls.getPolarAngle()).toFixed(6)}°,
                        距离:${o.controls.getDistance().toFixed(6)}km`}};o.controls.addEventListener("change",c),c()}f(r,e);y(r);
