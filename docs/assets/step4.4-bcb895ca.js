var m=Object.defineProperty;var w=(r,t,a)=>t in r?m(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var c=(r,t,a)=>(w(r,typeof t!="symbol"?t+"":t,a),a);import"./modulepreload-polyfill-3cfb730f.js";import{aY as d,J as u,ba as p,X as h,q as f,Y as x,a as g,V as y}from"./mapSource-6ce90261.js";import{b as M,s as k}from"./util-bb19db88.js";class _{constructor(){c(this,"dataType","watermark");c(this,"_texture")}load(t,a,s,e){this._texture||(this._texture=new d(this.drawWaterMark(t.attribution)),this._texture.needsUpdate=!0);const l=new u({transparent:!0,map:this._texture,opacity:t.opacity});return setTimeout(s),l}drawWaterMark(t){const s=new OffscreenCanvas(256,256),e=s.getContext("2d");return e.scale(1,-1),e.translate(0,-256),e&&(e.fillStyle="white",e.shadowColor="black",e.shadowBlur=5,e.shadowOffsetX=1,e.shadowOffsetY=1,e.font="bold 14px arial",e.textAlign="center",e.translate(256/2,256/2),e.rotate(30*Math.PI/180),e.fillText(`${t}`,0,0)),s.transferToImageBitmap()}}p.registerMaterialLoader(new _);const b=h.create({attribution:"three-tile",dataType:"watermark"}),z=document.querySelector("#map"),i=new f.GLViewer(z),n=x.create({imgSource:[g,b],lon0:90,minLevel:2});i.scene.add(n);const o=n.geo2pos(new y(100,34));i.controls.target.set(o.x,o.y,0);i.camera.position.set(o.x,o.y-1e3,3e3);M(n);k(i,n);