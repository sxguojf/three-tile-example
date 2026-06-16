import"./modulepreload-polyfill-3cfb730f.js";import{h as l,V as d,p as F,a as p,M as s}from"./three-tile-7bc2cf71.js";import{c as $,a as g}from"./util-f061981c.js";import{M as m,t as u}from"./mapSource-3d628d77.js";const x=[108.60157012939453,30.64670562744141,108.65313291549683,30.69008231163025],y=new l.MapBoxSource({token:m,dataType:"image",style:"mapbox.satellite",bounds:x}),f=new l.MapBoxSource({token:m,dataType:"terrain-rgb",style:"mapbox.terrain-rgb",maxLevel:15,bounds:x}),a=$([y,u],f),h=new d(108.627984,30.66284,0),L=new d(108.627139,30.64138,3.309163),r=g("#map",a,h,L);r.scene.background=new F(0);function M(o,c){const e=new p;o.container.addEventListener("pointermove",n=>{e.x=n.clientX/o.renderer.domElement.clientWidth*2-1,e.y=-(n.clientY/o.renderer.domElement.clientHeight)*2+1;const t=c.getLocalInfoFromScreen(o.camera,e);if(t){const i=document.querySelector("#local-info");i.innerHTML=`经度:${t.location.x.toFixed(2)}°  
                            纬度:${t.location.y.toFixed(2)}°  
                            海拔:${t.location.z.toFixed(2)}km
                            距离:${t.distance.toFixed(2)}km `,t.normal&&(i.innerHTML+=`法向量:(${t.normal.x.toFixed(1)},
                ${t.normal.y.toFixed(1)},
                ${t.normal.z.toFixed(1)})(可用于坡向计算)`)}})}function T(o){const c=()=>{const e=document.querySelector("#camera-info");if(e){const n=a.pos2geo(a.worldToLocal(o.camera.position.clone())),t=a.pos2geo(a.worldToLocal(o.controls.target.clone()));e.innerHTML=`摄像机: 世界坐标(${o.camera.position.x.toFixed(1)},
                               ${o.camera.position.y.toFixed(1)},
                               ${o.camera.position.z.toFixed(1)}),
                               地理坐标:(${n.x.toFixed(6)},
                               ${n.y.toFixed(6)},
                               ${n.z.toFixed(6)}),<br/>                        
                        控制器: 世界坐标(${o.controls.target.x.toFixed(1)},
                               ${o.controls.target.y.toFixed(1)},
                               ${o.controls.target.z.toFixed(1)}),
                               地理坐标:(${t.x.toFixed(6)},
                               ${t.y.toFixed(6)},
                               ${t.z.toFixed(6)}),<br/>                        
                        地图: 方位角:${s.radToDeg(o.controls.getAzimuthalAngle()).toFixed(1)}°, 
                        俯仰角:${s.radToDeg(o.controls.getPolarAngle()).toFixed(1)}°,
                        距离:${o.controls.getDistance().toFixed(1)}km`}};o.controls.addEventListener("change",c),c()}M(r,a);T(r);
