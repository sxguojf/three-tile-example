import"./modulepreload-polyfill-3cfb730f.js";import{g as d}from"./lil-gui.module.min-a1e98589.js";import{V as n,a2 as c,m,a as i}from"./mapSource-2c762b60.js";import{c as g,a as p,d as y,e as b,b as k,s as x}from"./util-e741174c.js";const e=g(i,m),s=e.geo2pos(new n(109,34)),l=new n(s.x,s.y,0),h=new n(-5,10,4),o=p("#map",l,h);o.scene.add(e);y(o,e);const t=new c().setPath("../image/skybox/").load(["skybox_nx.png","skybox_px.png","skybox_ny.png","skybox_py.png","skybox_nz.png","skybox_pz.png"]);o.scene.background=t;const u={sky:!0},w=new d,a=w.addFolder("环境设置");a.add(o.ambLight,"intensity",0,5,.1).name("环境光强度");a.addColor(o.ambLight,"color").name("环境光颜色");a.add(o.dirLight,"intensity",0,5,.1).name("直射光强度");a.addColor(o.dirLight,"color").name("直射光光颜色");a.add(o,"fogFactor",.1,3,.1).listen().name("雾(能见度系数)");a.add(u,"sky").name("云").onChange(r=>{o.scene.background=r?t:o.scene.fog.color});b(e);k(e);x(o,e);
