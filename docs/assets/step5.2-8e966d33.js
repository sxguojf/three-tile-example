import"./modulepreload-polyfill-3cfb730f.js";import{c as x,V as l,b as g,C as h,G as b,bw as S,l as p,B as f,q as v,h as i,P as M,T as C,o as y,bm as B,ap as L,s as z,j as G,m as D,e as F,z as P}from"./util-bf818b98.js";import{g as V}from"./lil-gui.module.min-a1e98589.js";const n=x([F,P],D),m=n.project(105,34),_=new l(m.x,m.y,0),j=new l(0,-3e3,4e3),r=g("#map",_,j);r.scene.add(n);r.scene.background=new h(0);const o=((a,t)=>{const e=new b;e.applyMatrix4(S(n,a,t,1)),e.scale.setZ(200),e.translateZ(100),e.renderOrder=10;const d=new p(new f),w=new v(d,16711935);return e.add(w),e})(new i(67,11),new i(140,57)),u=(()=>{const a=new p(new M(1,1,529,420),k({scale:.5}));return T(a,"../../image/ACHN_QREF_20210725_100000.png"),a.renderOrder=10,a})();o.add(u);r.scene.add(o);function T(a,t){var e;return(e=a.material.map)==null||e.dispose(),a.material.map=new C().load(t,d=>{d.needsUpdate=!0}),a}function k(a={scale:1}){const t=new y({displacementMap:new B,transparent:!0,displacementScale:a.scale,displacementBias:0,side:L});return t.onBeforeCompile=e=>{e.vertexShader=`uniform sampler2D map;
        `+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <displacementmap_vertex>","transformed += normalize( objectNormal ) * ( texture2D(map, vMapUv ).a * displacementScale + displacementBias );")},t}const c=new V;c.add(o.scale,"z",100,500,1).name("雷达图垂直拉伸").onChange(a=>o.position.z=a/2);c.add(u.material,"wireframe").name("雷达图网格");const s=c.addFolder("环境设置");s.addColor(r.ambLight,"color").name("环境光颜色");s.add(r.ambLight,"intensity",0,1,.1).name("环境光强度");s.addColor(r.dirLight,"color").name("直射光颜色");s.add(r.dirLight,"intensity",0,1,.1).name("直射光强度");z(r,n);G(n);