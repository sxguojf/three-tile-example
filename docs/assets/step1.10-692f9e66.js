import"./modulepreload-polyfill-3cfb730f.js";import{V as r,m as n,a as m,Q as i,s as p}from"./mapSource-1769961f.js";import{c as d,a as l,u as h,s as f,b as u}from"./util-a377a475.js";const a=d(m,n),w=new r(100,30,0),g=new r(100,0,3e4),o=l("#map",a,w,g);o.scene.add(a);h(o);function k(t,c){var s;const e=new i.FakeEarth(((s=t.scene.fog)==null?void 0:s.color)||new p(0));return e.name="fakeearth",e.applyMatrix4(c.rootTile.matrix),t.controls.addEventListener("change",()=>{e.visible=t.controls.getDistance()>3e3}),e}a.add(k(o,a));f(o,a);u(a);