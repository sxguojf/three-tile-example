import"./modulepreload-polyfill-3cfb730f.js";import{V as w,T as M,aT as S,Y as v,a9 as x,aS as y,aB as P,aU as B,aV as z,t as g,m as A,a as C}from"./mapSource-90889b65.js";import{g as D}from"./lil-gui.module.min-a1e98589.js";import{c as F,a as I,b as T,s as G}from"./util-26f9c1ca.js";const t=F(C,A),b=new w(87.4,27.8,3),V=new w(87.35,27.7,8),e=I("#map",t,b,V),p=t.geo2pos(b),f=(()=>{const n=new M().load("../image/rain.png");n.rotation=.2;const a=new S({size:10,map:n,transparent:!0,depthTest:!1,fog:!1,sizeAttenuation:!1}),m=[],s=new v,c=5e3;for(let u=0;u<c;u++)m.push(0),m.push(0),m.push(-Math.random()*10);s.setAttribute("position",new x(m,3));const l=new y(s,a);return l.renderOrder=10,l.userData.speed=25,t.add(l),t.addEventListener("update",u=>{if(h.rain){const r=s.attributes.position;for(let o=0;o<r.count;o++)r.getZ(o)<0?r.setXYZ(o,p.x+Math.random()*100-50,p.y+Math.random()*100-80,Math.random()*30):r.setXYZ(o,r.getX(o)+.1,r.getY(o),r.getZ(o)-u.delta*l.userData.speed);s.attributes.position.needsUpdate=!0}}),l})();(()=>{const n=new M().load("../image/thunder.png");n.colorSpace=P;const a=new B(new z({map:n,fog:!1,depthTest:!1}));a.position.set(p.x,p.y+30,15),a.scale.setScalar(20),t.add(a),t.addEventListener("update",m=>{var s;if(h.thrund){let c=new g(4386);a.visible=!1,e.ambLight.intensity=.5,e.dirLight.intensity=.5,Math.round(Math.random()*10)%20===0&&(c=new g(8806),a.position.setX(p.x+Math.random()*100-50),a.visible=!0,e.ambLight.intensity=5,e.dirLight.intensity=3),(s=e.scene.fog)==null||s.color.set(c),e.scene.background=new g(c)}})})();const L=new D,h={rain:!0,thrund:!0},i=L.addFolder("地图控制");i.add(t.scale,"z",1,10,.1).name("高度拉伸倍数");i.add(t.position,"z",-1,1,.01).name("高度偏移");i.add(e.controls,"minPolarAngle",Math.PI/4,Math.PI/2,.1).name("最小倾角限制");i.add(e.controls,"maxPolarAngle",Math.PI/4,Math.PI/2,.1).name("最大倾角限制");i.add(e.controls,"enableDamping").name("惯性控制");i.add(e.controls,"autoRotate").name("自动旋转");i.add(t,"reload").name("重建瓦片树");const d=L.addFolder("环境设置");d.addColor(e.ambLight,"color").name("环境光颜色");d.addColor(e.dirLight,"color").name("直射光光颜色");d.add(h,"thrund").name("闪电特效");d.add(h,"rain").name("下雨特效").onChange(n=>f.visible=n);d.add(f.material,"size",5,20,.1).name("雨滴大小");d.add(f.userData,"speed",2,100,1).name("雨滴速度");T(t);G(e,t);