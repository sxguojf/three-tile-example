import"./modulepreload-polyfill-3cfb730f.js";import{Q as o,M as d,c as S,V as n}from"./mapSource-bbe48df7.js";const a=d,i=new o.MapBoxSource({token:a,dataType:"image",style:"mapbox.satellite"}),g=new o.MapBoxSource({token:a,dataType:"terrain-rgb",style:"mapbox.terrain-rgb",maxLevel:15});function w(){const r=new S({imgSource:i,demSource:g,lon0:90,minLevel:2,maxLevel:20});return r.rotateX(-Math.PI/2),r}function p(r,t){const s=new n(110,30,0),l=new n(110,0,1e4),u=t.localToWorld(t.geo2pos(s)),m=t.localToWorld(t.geo2pos(l)),c=new o.GLViewer(r,{centerPostion:u,cameraPosition:m});return c.scene.add(t),c}const e=w();p("#map",e);document.querySelector("#mapbox").addEventListener("click",()=>{e.imgSource=i,e.reload()});document.querySelector("#bing").addEventListener("click",()=>{e.imgSource=new o.BingSource,e.reload()});document.querySelector("#gd").addEventListener("click",()=>{e.imgSource=[new o.GDSource({style:"6"}),new o.GDSource({style:"8"})],e.reload()});document.querySelector("#tx").addEventListener("click",()=>{e.imgSource=[new o.TXSource,new o.GDSource({style:"8"})],e.reload()});
