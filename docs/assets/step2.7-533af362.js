import"./modulepreload-polyfill-3cfb730f.js";import{g as r}from"./lil-gui.module.min-a1e98589.js";import{V as n,a1 as c,m as d,a as m}from"./mapSource-90889b65.js";import{c as g,a as i,d as p,b as l,s as u}from"./util-26f9c1ca.js";const e=g(m,d),b=new n(109,34,0),h=new n(109,34.1,2),a=i("#map",e,b,h),t=new c().setPath("../image/skybox/").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);a.scene.background=t;const w={sky:!0},y=new r,o=y.addFolder("环境设置");o.add(a.ambLight,"intensity",0,5,.1).name("环境光强度");o.addColor(a.ambLight,"color").name("环境光颜色");o.add(a.dirLight,"intensity",0,5,.1).name("直射光强度");o.addColor(a.dirLight,"color").name("直射光光颜色");o.add(a,"fogFactor",.1,3,.1).listen().name("雾(能见度系数)");o.add(w,"sky").name("云").onChange(s=>{a.scene.background=s?t:a.scene.fog.color});p(e);l(e);u(a,e);