import"./modulepreload-polyfill-3cfb730f.js";import{g as c}from"./lil-gui.module.min-a1e98589.js";import{V as n,a2 as d,m,a as i}from"./mapSource-8a728109.js";import{c as g,a as p,d as y,b,s as k}from"./util-937bd86c.js";const a=g(i,m),s=a.geo2pos(new n(109,34)),x=new n(s.x,s.y,0),l=new n(-5,10,4),o=p("#map",x,l);o.scene.add(a);const t=new d().setPath("../image/skybox/").load(["skybox_nx.png","skybox_px.png","skybox_ny.png","skybox_py.png","skybox_nz.png","skybox_pz.png"]);o.scene.background=t;const u={sky:!0},w=new c,e=w.addFolder("环境设置");e.add(o.ambLight,"intensity",0,5,.1).name("环境光强度");e.addColor(o.ambLight,"color").name("环境光颜色");e.add(o.dirLight,"intensity",0,5,.1).name("直射光强度");e.addColor(o.dirLight,"color").name("直射光光颜色");e.add(o,"fogFactor",.1,3,.1).listen().name("雾(能见度系数)");e.add(u,"sky").name("云").onChange(r=>{o.scene.background=r?t:o.scene.fog.color});y(a);b(a);k(o,a);
