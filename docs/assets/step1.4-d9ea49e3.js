import"./modulepreload-polyfill-3cfb730f.js";import{V as r,m as t,a as i}from"./mapSource-aa63c091.js";import{c as s,a as d,s as c}from"./util-20863b21.js";const a=s(i,t),m=new r(108,34,0),l=new r(108,0,1e4),L=d("#map",a,m,l);(n=>{const o=document.querySelector("#loading");o&&(n.addEventListener("loading-start",e=>{o.innerHTML="Started: "+e.itemsLoaded+" of "+e.itemsTotal+" files."}),n.addEventListener("loading-progress",e=>{o.innerHTML="Loading: "+e.itemsLoaded+" of "+e.itemsTotal+" files."}),n.addEventListener("loading-complete",()=>{o.innerHTML="Loading complete!"}),n.addEventListener("loading-error",e=>{o.innerHTML="There was an error loading "+e}))})(a);c(L,a);
