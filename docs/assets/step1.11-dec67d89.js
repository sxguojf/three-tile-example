import"./modulepreload-polyfill-3cfb730f.js";import{Q as l,M as d,V as m,s as F,t as $,b as g,d as s}from"./mapSource-e82aaabe.js";import{c as p,a as u}from"./util-a27d2d6b.js";const x=[108.60157012939453,30.64670562744141,108.65313291549683,30.69008231163025],y=new l.MapBoxSource({token:d,dataType:"image",style:"mapbox.satellite",bounds:x}),f=new l.MapBoxSource({token:d,dataType:"terrain-rgb",style:"mapbox.terrain-rgb",maxLevel:15,bounds:x}),e=p([y,$],f),L=new m(108.627984,30.66284,0),b=new m(108.627139,30.64138,3.309163),r=u("#map",e,L,b);r.scene.background=new F(0);r.scene.add(e);function M(o,c){const n=new g;o.container.addEventListener("pointermove",a=>{n.x=a.clientX/o.renderer.domElement.clientWidth*2-1,n.y=-(a.clientY/o.renderer.domElement.clientHeight)*2+1;const t=c.getLocalInfoFromScreen(o.camera,n);if(t){const i=document.querySelector("#local-info");i.innerHTML=`经度:${t.location.x.toFixed(2)}°  
                            纬度:${t.location.y.toFixed(2)}°  
                            海拔:${t.location.z.toFixed(2)}km
                            距离:${t.distance.toFixed(2)}km `,t.normal&&(i.innerHTML+=`法向量:(${t.normal.x.toFixed(1)},
                ${t.normal.y.toFixed(1)},
                ${t.normal.z.toFixed(1)})(可用于坡向计算)`)}})}function T(o){const c=()=>{const n=document.querySelector("#camera-info");if(n){const a=e.pos2geo(e.worldToLocal(o.camera.position.clone())),t=e.pos2geo(e.worldToLocal(o.controls.target.clone()));n.innerHTML=`摄像机: 世界坐标(${o.camera.position.x.toFixed(1)},
                               ${o.camera.position.y.toFixed(1)},
                               ${o.camera.position.z.toFixed(1)}),
                               地理坐标:(${a.x.toFixed(6)},
                               ${a.y.toFixed(6)},
                               ${a.z.toFixed(6)}),<br/>                        
                        控制器: 世界坐标(${o.controls.target.x.toFixed(1)},
                               ${o.controls.target.y.toFixed(1)},
                               ${o.controls.target.z.toFixed(1)}),
                               地理坐标:(${t.x.toFixed(6)},
                               ${t.y.toFixed(6)},
                               ${t.z.toFixed(6)}),<br/>                        
                        地图: 方位角:${s.radToDeg(o.controls.getAzimuthalAngle()).toFixed(1)}°, 
                        俯仰角:${s.radToDeg(o.controls.getPolarAngle()).toFixed(1)}°,
                        距离:${o.controls.getDistance().toFixed(1)}km`}};o.controls.addEventListener("change",c),c()}M(r,e);T(r);
