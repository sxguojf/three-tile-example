import"./modulepreload-polyfill-3cfb730f.js";import{V as m,m as r,a as d,v as n,x as s}from"./mapSource-50ea1ccb.js";import{g as c}from"./lil-gui.module.min-a1e98589.js";import{c as i,a as p,l,d as x,s as u,b as D}from"./util-0d1e0617.js";const e=i(d,r),S=new m(86.95,27.98,0),v=new m(86.81,27.956,9),t=p("#map",e,S,v);l(t,e);const o={noneDem:()=>{e.demSource=void 0,e.reload()},mapboxDem:()=>{e.demSource=r,e.reload()},mapTilerDem:()=>{e.demSource=n,e.reload()},zkxtDem:()=>{e.demSource=s,e.reload()}},a=new c;a.add(o,"noneDem").name("无地形");a.add(o,"mapboxDem").name("MapBox地形瓦片(MaxLevel=15)");a.add(o,"mapTilerDem").name("MapTiler地形瓦片(MaxLevel=12)");a.add(o,"zkxtDem").name("中科星图地形瓦片(MaxLevel=10)");a.add(e.scale,"z",1,3,.1).name("地形拉伸倍数").listen();a.add(e.position,"y",-3,3,.01).name("地图模型高度偏移").listen();a.add(e,"autoPosition").name("自动调整地图模型高度");x(e);u(t,e);D(e);
