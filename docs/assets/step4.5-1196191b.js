import"./modulepreload-polyfill-3cfb730f.js";import{n as a,M as o,E as t,V as e,m as r}from"./mapSource-90889b65.js";import{c as n,a as c}from"./util-26f9c1ca.js";const s=new a.MapBoxSource({token:o,dataType:"normal",style:"mapbox.terrain-rgb",maxLevel:15}),m=new t({attribution:"three-tile-debug",dataType:"debug"}),p=n([s,m],r),i=new e(108,34,0),u=new e(108,34.08,10),l=c("#map",p,i,u);l.controls.saveState();
