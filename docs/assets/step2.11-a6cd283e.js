import"./modulepreload-polyfill-3cfb730f.js";import{g}from"./lil-gui.module.min-a1e98589.js";import{V as r,aj as f,m as h,a as C,ak as d}from"./mapSource-6ce90261.js";import{S as y}from"./Sky-1a0dd325.js";import{c as w,a as v,b as x,s as M}from"./util-f7379211.js";const s=w(C,h),m=s.geo2pos(new r(109,35)),S=new r(m.x,m.y,0),b=new r(0,-10,4),o=v("#map",S,b);o.scene.add(s);o.controls.maxPolarAngle=Math.PI;var l;(l=o.scene.fog)==null||l.color.set(8947848);o.renderer.useLegacyLights=!1;o.renderer.toneMapping=f;o.renderer.toneMappingExposure=.7;D();function D(){const t=new y;t.material.uniforms.up.value=new r(0,0,1),t.scale.setScalar(45e4),o.scene.add(t);const c=new r,e={turbidity:10,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7,elevation:85,azimuth:15,exposure:o.renderer.toneMappingExposure};function a(){const i=t.material.uniforms;i.turbidity.value=e.turbidity,i.rayleigh.value=e.rayleigh,i.mieCoefficient.value=e.mieCoefficient,i.mieDirectionalG.value=e.mieDirectionalG;const u=d.degToRad(e.azimuth),p=d.degToRad(e.elevation);c.setFromSphericalCoords(1e4,u,p),i.sunPosition.value.copy(c),o.renderer.toneMappingExposure=e.exposure,o.renderer.render(o.scene,o.camera)}const n=new g;n.add(e,"turbidity",0,20,.1).onChange(a),n.add(e,"rayleigh",0,4,.001).onChange(a),n.add(e,"mieCoefficient",0,.1,.001).onChange(a),n.add(e,"mieDirectionalG",0,1,.001).onChange(a),n.add(e,"elevation",0,100,1).onChange(a),n.add(e,"azimuth",-180,180,1).onChange(a),n.add(e,"exposure",0,1,1e-4).onChange(a),n.addColor(o.scene.fog,"color").name("FogColor"),a()}x(s);M(o,s);
