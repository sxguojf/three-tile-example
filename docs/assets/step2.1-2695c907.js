var b=Object.defineProperty;var w=(t,a,o)=>a in t?b(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o;var c=(t,a,o)=>(w(t,typeof a!="symbol"?a+"":a,o),o);import"./modulepreload-polyfill-3cfb730f.js";import{V as u,t as r,a as m,m as v}from"./mapSource-1769961f.js";import{c as x,a as h,d as L,s as T,b as E}from"./util-a377a475.js";const e=x(m,v),G=new u(100,30,0),z=new u(100,0,5e3),l=h("#map",e,G,z);l.scene.add(e);var s;(s=document.querySelector("#arcgis"))==null||s.addEventListener("click",()=>{const t=r.create({dataType:"image",attribution:"ArcGIS",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"});e.imgSource=t,e.reload()});var i;(i=document.querySelector("#gd"))==null||i.addEventListener("click",()=>{const t=new r({url:"https://webst04.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",attribution:"GAODE",dataType:"image"}),a=new r({url:"https://webst04.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",attribution:"GAODE",dataType:"image"});e.imgSource=[t,a],e.reload()});var n;(n=document.querySelector("#google"))==null||n.addEventListener("click",()=>{class t extends r{constructor(){super(...arguments);c(this,"attribution","Google");c(this,"dataType","image")}getUrl(g,y,S){return`https://gac-geo.googlecnapps.cn/maps/vt?lyrs=y&x=${g}&y=${y}&z=${S}`}}e.imgSource=new t,e.reload()});var d;(d=document.querySelector("#debug"))==null||d.addEventListener("click",()=>{e.imgSource=[m,new r({attribution:"TileTest",dataType:"debug"})],e.reload()});const p=()=>{const t=document.querySelector("#attribution");t&&(t.innerHTML="© "+e.attributions.join(" | © "))};e.addEventListener("source-changed",()=>p());p();L(e);T(l,e);E(e);