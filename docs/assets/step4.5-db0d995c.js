import"./modulepreload-polyfill-3cfb730f.js";import{h as a,M as o,X as t,V as e,m as r}from"./mapSource-0a7b7d5e.js";import{c,a as n}from"./util-122e1262.js";const s=new a.MapBoxSource({token:o,dataType:"normal",style:"mapbox.terrain-rgb",maxLevel:15}),m=new t({attribution:"three-tile-debug",dataType:"debug"}),p=c([s,m],r),i=new e(108,34,0),u=new e(108,34.08,10),l=n("#map",p,i,u);l.controls.saveState();
