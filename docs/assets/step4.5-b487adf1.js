import"./modulepreload-polyfill-3cfb730f.js";import{Q as t,M as r,u as c,V as e,m as n}from"./mapSource-e82aaabe.js";import{c as s,a as m}from"./util-a27d2d6b.js";const p=new t.MapBoxSource({token:r,dataType:"normal",style:"mapbox.terrain-rgb",maxLevel:15}),i=new c({attribution:"three-tile-debug",dataType:"debug"}),a=s([p,i],n),u=new e(108,34,0),d=new e(108,34.08,10),o=m("#map",a,u,d);o.scene.add(a);o.controls.saveState();
