import"./modulepreload-polyfill-3cfb730f.js";import{V as s,g as d,P as x,h as l,T as y,b as i,m as g,a as h,f as M}from"./mapSource-a5b9536a.js";import{c as u,a as L,s as f,b as V}from"./util-8e2a1d86.js";const a=u(h,g),b=new s(108,34,0),E=new s(108,0,1e4),p=L("#map",a,b,E);p.scene.add(a);a.addEventListener("tile-loaded",e=>{e.tile.material.forEach(t=>{var o;return(o=t.color)==null?void 0:o.set(8947848)})});const G=(e,t,o)=>{const n=a.geo2pos(new s(e.x,e.y)),r=a.geo2pos(new s(t.x,t.y)),c=new s(r.x-n.x,r.y-n.y,1),w=new s(n.x+c.x/2,r.y-c.y/2,o),m=new M;return m.setPosition(w),m.scale(c),m};(()=>{const e=new d(new x,new l({map:new y().load("../image/ACHN_QREF_20210725_100000.png"),transparent:!0})),t=new i(67,11),o=new i(140,57);e.applyMatrix4(G(t,o,6)),e.renderOrder=10,a.add(e)})();f(p,a);V(a);