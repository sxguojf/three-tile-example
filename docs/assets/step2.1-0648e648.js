var S=Object.defineProperty;var b=(e,o,a)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a;var c=(e,o,a)=>(b(e,typeof o!="symbol"?o+"":o,a),a);import"./modulepreload-polyfill-3cfb730f.js";import{V as u,X as r,a as m,m as w}from"./mapSource-0a7b7d5e.js";import{c as v,a as x,d as h,s as L,b as T}from"./util-122e1262.js";const t=v(m,w),E=new u(100,30,0),G=new u(100,0,5e3),z=x("#map",t,E,G);var i;(i=document.querySelector("#arcgis"))==null||i.addEventListener("click",()=>{const e=r.create({dataType:"image",attribution:"ArcGIS",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"});t.imgSource=e,t.reload()});var s;(s=document.querySelector("#gd"))==null||s.addEventListener("click",()=>{const e=new r({url:"https://webst04.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",attribution:"GAODE",dataType:"image"}),o=new r({url:"https://webst04.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",attribution:"GAODE",dataType:"image"});t.imgSource=[e,o],t.reload()});var n;(n=document.querySelector("#google"))==null||n.addEventListener("click",()=>{class e extends r{constructor(){super(...arguments);c(this,"attribution","Google");c(this,"dataType","image")}getUrl(p,g,y){return`https://gac-geo.googlecnapps.cn/maps/vt?lyrs=y&x=${p}&y=${g}&z=${y}`}}t.imgSource=new e,t.reload()});var d;(d=document.querySelector("#debug"))==null||d.addEventListener("click",()=>{t.imgSource=[m,new r({attribution:"TileTest",dataType:"debug"})],t.reload()});const l=()=>{const e=document.querySelector("#attribution");e&&(e.innerHTML="© "+t.attributions.join(" | © "))};t.addEventListener("source-changed",()=>l());l();h(t);L(z,t);T(t);
