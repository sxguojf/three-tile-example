import"./modulepreload-polyfill-3cfb730f.js";import{V as r,m as n,a as m,h as i,s as p}from"./mapSource-ec449248.js";import{c as h,a as l,u as d,s as f,b as u}from"./util-bfcdfc22.js";const a=h(m,n),w=new r(100,30,0),g=new r(100,0,3e4),t=l("#map",a,w,g);d(t);function k(o,c){var s;const e=new i.FakeEarth(((s=o.scene.fog)==null?void 0:s.color)||new p(0));return e.name="fakeearth",e.applyMatrix4(c.rootTile.matrix),o.controls.addEventListener("change",()=>{e.visible=o.controls.getDistance()>3e3}),e}a.add(k(t,a));f(t,a);u(a);
