import"./modulepreload-polyfill-3cfb730f.js";import{g as r}from"./lil-gui.module.min-a1e98589.js";import{V as d,m,a as s}from"./mapSource-8cec7301.js";import{c as i,a as c,e as l,l as p,d as g,b as h,s as u}from"./util-202ae443.js";const a=i(s,m),w=new d(86.95,27.98,0),L=new d(86.81,27.956,9),o=c("#map",a,w,L);l(o,a);p(o,a);const n=new r,e=n.addFolder("地图控制");e.add(a.scale,"z",1,3,.1).name("地形拉伸倍数").listen();e.add(a.position,"y",-3,3,.01).name("地图模型高度偏移").listen();e.add(a,"autoPosition").name("自动调整地图模型高度");e.add(o.controls,"maxPolarAngle",0,Math.PI/2,.1).name("倾角限制");e.add(o.controls,"enableDamping").name("惯性控制");e.add(o.controls,"autoRotate").name("自动旋转");e.add(a,"reload").name("重建瓦片树");const t=n.addFolder("环境设置");t.add(o.ambLight,"intensity",0,5,.1).name("环境光强度");t.addColor(o.ambLight,"color").name("环境光颜色");t.add(o.dirLight,"intensity",0,5,.1).name("直射光强度");t.addColor(o.dirLight,"color").name("直射光光颜色");g(a);h(a);u(o,a);
