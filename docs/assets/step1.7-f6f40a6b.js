import"./modulepreload-polyfill-3cfb730f.js";import{V as s,g as w,P as x,h as l,T as d,b as i,m as y,a as g,f as h}from"./mapSource-79b5020f.js";import{c as M,a as u,s as L,b as f}from"./util-cacefa19.js";const a=M(g,y),V=new s(108,34,0),b=new s(108,0,1e4),E=u("#map",a,V,b);a.addEventListener("tile-loaded",e=>{e.tile.material.forEach(t=>{var o;return(o=t.color)==null?void 0:o.set(8947848)})});const G=(e,t,o)=>{const n=a.geo2pos(new s(e.x,e.y)),r=a.geo2pos(new s(t.x,t.y)),c=new s(r.x-n.x,r.y-n.y,1),p=new s(n.x+c.x/2,r.y-c.y/2,o),m=new h;return m.setPosition(p),m.scale(c),m};(()=>{const e=new w(new x,new l({map:new d().load("../image/ACHN_QREF_20210725_100000.png"),transparent:!0})),t=new i(67,11),o=new i(140,57);e.applyMatrix4(G(t,o,6)),e.renderOrder=10,a.add(e)})();L(E,a);f(a);
