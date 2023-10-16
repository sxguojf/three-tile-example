import"./modulepreload-polyfill-3cfb730f.js";import{b0 as p,b1 as f,b2 as _,C as g,aP as v,aT as h,U as x,q as b,aQ as w,aR as C}from"./GLViewer-4908af8c.js";import{b as y,m as L,d as S,s as T}from"./util-54b1a14e.js";const P=`\r
// #define LAMBERT\r
\r
uniform vec3 diffuse;\r
uniform vec3 emissive;\r
uniform float opacity;\r
\r
uniform sampler2D map;\r
uniform sampler2D map1;\r
\r
varying vec2 vUv;\r
\r
#include <common>\r
#include <packing>\r
#include <dithering_pars_fragment>\r
#include <color_pars_fragment>\r
#include <uv_pars_fragment>\r
#include <map_pars_fragment>\r
#include <alphamap_pars_fragment>\r
#include <alphatest_pars_fragment>\r
#include <aomap_pars_fragment>\r
#include <lightmap_pars_fragment>\r
#include <emissivemap_pars_fragment>\r
#include <envmap_common_pars_fragment>\r
#include <envmap_pars_fragment>\r
#include <fog_pars_fragment>\r
#include <bsdfs>\r
#include <lights_pars_begin>\r
#include <normal_pars_fragment>\r
#include <lights_lambert_pars_fragment>\r
#include <shadowmap_pars_fragment>\r
#include <bumpmap_pars_fragment>\r
#include <normalmap_pars_fragment>\r
#include <specularmap_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
#include <clipping_planes_pars_fragment>\r
\r
void main() {\r
\r
	#include <clipping_planes_fragment>\r
\r
	vec4 diffuseColor = vec4( diffuse, opacity );\r
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\r
	vec3 totalEmissiveRadiance = emissive;\r
\r
	#include <logdepthbuf_fragment>\r
	#include <map_fragment>\r
	#include <color_fragment>\r
	#include <alphamap_fragment>\r
	\r
	\r
	#include <alphatest_fragment>\r
	#include <specularmap_fragment>\r
	#include <normal_fragment_begin>\r
	#include <normal_fragment_maps>\r
	#include <emissivemap_fragment>\r
\r
\r
	// 增加多图层混合\r
    diffuseColor *= texture2D( map, vUv );\r
	vec4 map1Color = texture2D(map1, vUv);\r
	diffuseColor.rgb = diffuseColor.rgb * (1.0 - map1Color.a) + map1Color.rgb * map1Color.a;\r
    diffuseColor.a = opacity;\r
    \r
	// 未加载纹理图片时显示白色（网格）\r
	vec2 size = vec2(textureSize(map, 0));\r
	if(size.x<2.0){\r
		diffuseColor = vec4(1.0, 1.0, 1.0, 0.3);		\r
	}\r
\r
	// accumulation\r
	#include <lights_lambert_fragment>\r
	#include <lights_fragment_begin>\r
	#include <lights_fragment_maps>\r
	#include <lights_fragment_end>\r
\r
	// modulation\r
	// #include <aomap_fragment>\r
\r
\r
\r
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\r
\r
	#include <envmap_fragment>\r
	#include <output_fragment>\r
	#include <tonemapping_fragment>\r
	#include <encodings_fragment>\r
	#include <fog_fragment>\r
	#include <premultiplied_alpha_fragment>\r
	#include <dithering_fragment>\r
\r
}`,U=`\r
#define LAMBERT\r
\r
varying vec3 vViewPosition;\r
varying vec2 vUv;\r
\r
#include <common>\r
#include <uv_pars_vertex>\r
#include <displacementmap_pars_vertex>\r
#include <envmap_pars_vertex>\r
#include <color_pars_vertex>\r
#include <fog_pars_vertex>\r
#include <normal_pars_vertex>\r
#include <morphtarget_pars_vertex>\r
#include <skinning_pars_vertex>\r
#include <shadowmap_pars_vertex>\r
#include <logdepthbuf_pars_vertex>\r
#include <clipping_planes_pars_vertex>\r
\r
void main() {\r
\r
	#include <uv_vertex>\r
\r
	vUv = vec3( uv, 1 ).xy;\r
\r
	#include <color_vertex>\r
	#include <morphcolor_vertex>\r
\r
	#include <beginnormal_vertex>\r
	#include <morphnormal_vertex>\r
	#include <skinbase_vertex>\r
	#include <skinnormal_vertex>\r
	#include <defaultnormal_vertex>\r
	#include <normal_vertex>\r
\r
	#include <begin_vertex>\r
	#include <morphtarget_vertex>\r
	#include <skinning_vertex>\r
	#include <displacementmap_vertex>\r
\r
	// 增加dem数据\r
	#ifdef USE_DISPLACEMENTMAP\r
		vec4 heightColor = texture2D(displacementMap, vUv);\r
		// mapBox高程\r
		float h = ((heightColor.r * 255.0 * 65536.0 + heightColor.g * 255.0 * 256.0 + heightColor.b * 255.0) * 0.1)*heightColor.a - 10000.0;\r
		transformed += normalize( objectNormal ) * h / 1000.0;\r
	#endif\r
\r
\r
	#include <project_vertex>\r
	#include <logdepthbuf_vertex>\r
	#include <clipping_planes_vertex>\r
\r
	vViewPosition = - mvPosition.xyz;\r
\r
	#include <worldpos_vertex>\r
	#include <envmap_vertex>\r
	#include <shadowmap_vertex>\r
	#include <fog_vertex>\r
\r
}`;class M extends p{constructor(r){super({uniforms:f.merge([_.lambert.uniforms,{map1:{value:null},diffuse:{value:new g(16777215)}}]),vertexShader:U,fragmentShader:P,lights:!0,transparent:r.transparent||!0,wireframe:r.wireframe||!1,fog:!0}),this.uniforms.map.value=r.map,this.uniforms.map1.value=r.map1,this.defineProperty("map1"),this.defineProperty("diffuse"),this.defineProperty("opacity")}dispose(){var r,e;(r=this.uniforms.map.value)==null||r.dispose(),(e=this.uniforms.map1.value)==null||e.dispose(),super.dispose()}defineProperty(r){Object.defineProperty(this,r,{get:function(){return this.uniforms[r].value},set:function(e){this.uniforms[r].value=e}})}}class D extends v{loadMaterial(r,e){let o=this.imgSource[0];const s=h.getTextureLoader(o).load(r,o,this.projectCenterLon,u=>{u.needsUpdate=!0,l.wireframe=!1,e([l])});s.colorSpace=x;const c=256,m=new OffscreenCanvas(c,c),d=R(m),l=new M({map:s,map1:new b(d),wireframe:!0});return[l]}}function R(n){const r=n.width,e=n.getContext("2d");return e&&(e.strokeStyle="#ccc",e.lineWidth=2,e.strokeRect(5,5,r-10,r-10),e.fillStyle="#ccc",e.shadowColor="black",e.shadowBlur=2,e.shadowOffsetX=1,e.shadowOffsetY=1,e.font="bold 20px arial",e.textAlign="center",e.fillText("一块瓦片",r/2,50),e.fillText("可以在瓦片上画点东西...",r/2,100)),n}const k=document.querySelector("#map"),a=new w(k),z=new D([y],L),i=new C({loader:z,projCenterLon:90,minLevel:2});a.scene.add(i);const t=i.project(100,34);a.controls.target.set(t.x,t.y,0);a.camera.position.set(t.x,t.y-1e3,3e3);S(i);T(a,i);
