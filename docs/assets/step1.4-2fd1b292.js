import"./modulepreload-polyfill-3cfb730f.js";import{V as r}from"./three.module-31477d3d.js";import{c as i,a as d,s as c}from"./util-f3e58d78.js";import{m,a as l}from"./mapSource-de628f72.js";const t=i(l,m),a=t.geo2pos(new r(138.732,35.35)),L=new r(a.x,a.y,0),g=new r(0,-8,5),s=d("#map",L,g);s.scene.add(t);(n=>{const o=document.querySelector("#loading");o&&(n.addEventListener("loading-start",e=>{o.innerHTML="Started: "+e.itemsLoaded+" of "+e.itemsTotal+" files."}),n.addEventListener("loading-progress",e=>{o.innerHTML="Loading: "+e.itemsLoaded+" of "+e.itemsTotal+" files."}),n.addEventListener("loading-complete",()=>{o.innerHTML="Loading complete!"}),n.addEventListener("loading-error",e=>{o.innerHTML="There was an error loading "+e}))})(t);c(s,t);
