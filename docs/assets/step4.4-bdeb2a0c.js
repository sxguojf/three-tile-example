var l=Object.defineProperty;var m=(r,e,a)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var i=(r,e,a)=>(m(r,typeof e!="symbol"?e+"":e,a),a);import"./modulepreload-polyfill-3cfb730f.js";import{bM as w,bx as u,I as d,X as h,U as x,V as c,h as f,s as p,a as g,m as M}from"./mapSource-0f357340.js";class b{constructor(){i(this,"dataType","watermark");i(this,"_texture")}load(e,a,s,t,n){this._texture||(this._texture=new u(this.drawWaterMark(e.attribution)),this._texture.needsUpdate=!0);const o=new d({transparent:!0,map:this._texture,opacity:e.opacity});return setTimeout(n),o}drawWaterMark(e){const s=new OffscreenCanvas(256,256),t=s.getContext("2d");return t.scale(1,-1),t.translate(0,-256),t&&(t.fillStyle="white",t.shadowColor="black",t.shadowBlur=5,t.shadowOffsetX=1,t.shadowOffsetY=1,t.font="bold 14px arial",t.textAlign="center",t.translate(256/2,256/2),t.rotate(30*Math.PI/180),t.fillText(`${e}`,0,0)),s.transferToImageBitmap()}}w.registerMaterialLoader(new b);const k=h.create({attribution:"three-tile",dataType:"watermark"});function _(){const r=[g,k],e=M,a=new x({imgSource:r,demSource:e,lon0:90,minLevel:2,maxLevel:20});return a.rotateX(-Math.PI/2),a}function y(r,e){const a=new c(110,35,0),s=new c(110,34.9,10),t=e.geo2world(a),n=e.geo2world(s),o=new f.GLViewer(r,{centerPostion:t,cameraPosition:n});return o.scene.add(e),o.scene.background=new p(0),o}const z=_();y("#map",z);
