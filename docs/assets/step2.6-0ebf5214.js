import"./modulepreload-polyfill-3cfb730f.js";import{g as r}from"./lil-gui.module.min-a1e98589.js";import{V as n,m as d,a as c}from"./mapSource-6ce90261.js";import{c as m,a as i,d as g,e as p,b as l,s as h}from"./util-f7379211.js";const a=m(c,d),t=a.geo2pos(new n(109,34)),w=new n(t.x,t.y,0),f=new n(-5,10,4),o=i("#map",w,f);o.scene.add(a);g(o,a);const L=new r,e=L.addFolder("环境设置");e.add(o.ambLight,"intensity",0,5,.1).name("环境光强度");e.addColor(o.ambLight,"color").name("环境光颜色");e.add(o.dirLight,"intensity",0,5,.1).name("直射光强度");e.addColor(o.dirLight,"color").name("直射光光颜色");e.add(o,"fogFactor",.1,3,.1).listen().name("雾(能见度系数)");e.addColor(o.scene,"background").name("天空及大气颜色").onChange(s=>{o.scene.fog.color=s});p(a);l(a);h(o,a);
