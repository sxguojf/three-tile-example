import"./modulepreload-polyfill-3cfb730f.js";import{V as a,G as y,i as w,T as l,B as d,f as c,j as m,S as x,R as f,C as G,k as u,l as T,n as M,D as C,o as P,p as I,q as S,P as v,r as B,m as X,a as L}from"./mapSource-0f357340.js";import{T as b}from"./TeapotGeometry-49caef3f.js";import{c as D,a as O,b as R,s as V}from"./util-093ada9b.js";const t=D(L,X),g=new a(108,34,0),j=new a(108,0,1e4),E=O("#map",t,g,j);t.addEventListener("tile-loaded",o=>{o.tile.material.forEach(s=>{var e;return(e=s.color)==null?void 0:e.set(8947848)})});const i=t.geo2pos(g),n=new y;n.renderOrder=10;const r=new w({map:new l().load("../image/test.jpg"),shininess:30});(()=>{const o=new d(8e3,8e3,1e3),s=new c(o);s.position.set(i.x,i.y,510),n.add(new m(s))})();(()=>{const o=t.geo2pos(new a(80,40)),s=new d(500,500,300),e=new c(s,r);e.position.set(o.x,o.y,150),n.add(e)})();(()=>{const o=t.geo2pos(new a(90,40)),s=new x(300),e=new c(s,r);e.position.set(o.x,o.y,150),n.add(e)})();(()=>{const o=t.geo2pos(new a(100,40)),s=new f(100,300),e=new c(s,r);e.position.set(o.x,o.y,150),n.add(e)})();(()=>{const o=t.geo2pos(new a(110,40)),s=new b(200),e=new c(s,r);e.position.set(o.x,o.y,100),e.rotateX(Math.PI/2),n.add(e)})();(()=>{const o=t.geo2pos(new a(120,40)),s=new G(300,500),e=new c(s,r);e.position.set(o.x,o.y,150),e.rotateX(Math.PI/2),n.add(e)})();(()=>{const o=t.geo2pos(new a(130,40)),s=new u(200,300,300),e=new c(s,r);e.position.set(o.x,o.y,150),e.rotateX(Math.PI/2),n.add(e)})();(()=>{const o=t.geo2pos(new a(80,30)),s=new T(150,200),e=new c(s,r);e.position.set(o.x,o.y,100),e.rotateX(Math.PI/2),n.add(e)})();(()=>{const o=t.geo2pos(new a(90,30)),s=new M(200),e=new c(s,r);e.position.set(o.x,o.y,100),n.add(e)})();(()=>{const o=t.geo2pos(new a(100,30)),s=new C(200),e=new c(s,r);e.position.set(o.x,o.y,100),n.add(e)})();(()=>{const o=t.geo2pos(new a(110,30)),s=new P(200,50),e=new c(s,r);e.position.set(o.x,o.y,100),n.add(e)})();(()=>{const o=t.geo2pos(new a(120,30)),s=new I(200),e=new c(s,r);e.position.set(o.x,o.y,100),n.add(e)})();(()=>{const o=t.geo2pos(new a(130,30)),s=new S(200,80),e=new c(s,r);e.position.set(o.x,o.y,100),n.add(e)})();(()=>{const o=new v(8e3,2e3),s=new OffscreenCanvas(2400,600),e=s.getContext("2d");e.fillStyle="#0033ff88",e.fillRect(0,0,s.width,s.height),e.fillStyle="#ffffff",e.font="bold 96px arial",e.textAlign="center",e==null||e.fillText("Three-Tile 几何体演示",1200,200);const h=new w({map:new B(s),transparent:!0}),p=new c(o,h);p.position.set(i.x,i.y+3e3,0),p.rotateX(Math.PI/2),n.add(new m(p)),n.add(p)})();t.add(n);R(t);V(E,t);
