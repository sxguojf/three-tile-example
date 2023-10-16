var vt = Object.defineProperty;
var Tt = (s, r, t) => r in s ? vt(s, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[r] = t;
var a = (s, r, t) => (Tt(s, typeof r != "symbol" ? r + "" : r, t), t);
import { Vector3 as g, PlaneGeometry as K, MeshBasicMaterial as re, Mesh as Be, Box3 as wt, Matrix4 as Lt, Frustum as Et, ShaderMaterial as St, UniformsUtils as Mt, ShaderLib as Pt, Color as Ye, BufferGeometry as We, Float32BufferAttribute as le, Loader as ue, Cache as De, DefaultLoadingManager as Dt, LoadingManager as jt, MeshLambertMaterial as At, Vector2 as w, Texture as Xe, Box2 as It, CanvasTexture as Ot, Raycaster as Ze, Clock as He, SRGBColorSpace as Ct, EventDispatcher as Ke, MOUSE as N, TOUCH as U, Quaternion as je, Spherical as Ae, Object3D as Rt, DirectionalLight as kt, AmbientLight as Nt, FogExp2 as Ie, PerspectiveCamera as Ut, Scene as $t, WebGLRenderer as Ft } from "three";
function B(s, r, t, e, n) {
  const o = new X(s, r, t);
  return o.position.copy(e), o.scale.copy(n), o.updateMatrix(), o;
}
function zt(s, r = !1) {
  if (s.isLeaf) {
    const t = s.level + 1, e = s.x * 2, n = 0, o = 1 / 4;
    if (s.level === 0 && r) {
      const l = s.y, c = new g(0.5, 1, 1);
      s.add(B(t, e, l, new g(-o, 0, n), c)), s.add(B(t, e + 1, l, new g(o, 0, n), c));
    } else {
      const l = s.y * 2, c = new g(0.5, 0.5, 1);
      s.add(B(t, e, l + 1, new g(-o, -o, n), c)), s.add(
        B(t, e + 1, l + 1, new g(o, -o, n), c)
      ), s.add(B(t, e, l, new g(-o, o, n), c)), s.add(B(t, e + 1, l, new g(o, o, n), c));
    }
  } else
    console.error("重复创建子瓦片");
  return s.children;
}
const Oe = 1, Ce = new g();
function Gt(s, r) {
  const t = s.position.clone(), e = s.geometry.userData.avg || 1;
  t.setZ(e), t.applyMatrix4(s.matrixWorld);
  let n = r.getWorldPosition(Ce).distanceTo(t);
  const o = Ce.setFromMatrixScale(s.matrixWorld), l = Math.hypot(o.x, o.y);
  return n / l;
}
var de = /* @__PURE__ */ ((s) => (s[s.none = 0] = "none", s[s.create = 1] = "create", s[s.remove = 2] = "remove", s))(de || {});
function Bt(s, r, t, e) {
  const n = Gt(s, r);
  if ((s.level < t || n < Oe) && s.level < e && s.isLeafInFrustum)
    return 1;
  const o = Oe + 1.5 + s.level / 10;
  return (s.level > e || n > o) && s.level > t && s.index === 0 ? 2 : 0;
}
const ce = new K(), Q = new re({
  visible: !1,
  transparent: !0
});
class X extends Be {
  /**
   * constructor
   * 构造函数
   * @param level 瓦片级别 tile level
   * @param x 瓦片x坐标 X-coordinate
   * @param y 瓦片y坐标 X-coordinate
   */
  constructor(t = 0, e = 0, n = 0) {
    super(ce, [Q]);
    // 层级、行坐标、列坐标
    a(this, "level");
    a(this, "x");
    a(this, "y");
    // 父瓦片
    /**
     * tile's parent，a tile have at most one parent.
     */
    a(this, "parent", null);
    // 子瓦片
    /**
     * Array with tile's children，a tile have four children
     */
    a(this, "children", []);
    // 数据加载时间戳，用于判断前次加载与本次加载时间差，防止频繁加载删除造成的抖动
    a(this, "_loadedTime", Date.now());
    // 瓦片数据加载状
    a(this, "_loadState", "empty");
    a(this, "_toLoad", !1);
    a(this, "_inFrustum", !1);
    this.level = t, this.x = e, this.y = n, this.name = `Tile: ${this.level}-${this.x}-${this.y}`, this.matrixAutoUpdate = !1, this.matrixWorldAutoUpdate = !1;
  }
  // 瓦片索引，用以确定在父瓦片中的位置（0:左下、1:右下、2:左上、3:右上、-1:无父瓦片）
  /**
   * get the index in it's Indicates it's position at the parent tile
   * (0:left-bottom, 1:right-bottom, 2:left-top, 3:right-top, -1:no parent)
   */
  get index() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  /**
   * get the tile load state
   */
  get loadState() {
    return this._loadState;
  }
  // 是否需要加载
  /**
   * get Whether tile needs to be loaded
   */
  get needLoad() {
    return this.inFrustum && this._toLoad && this.loadState === "empty";
  }
  // 瓦片是否在可视化范围
  /**
   * get whether the tile is in the frustum
   */
  get inFrustum() {
    return this._inFrustum;
  }
  /**
   * set whether the tile is in the frustum
   */
  set inFrustum(t) {
    this._inFrustum != t && (t ? this._toLoad = this.isLeaf : Date.now() - this._loadedTime > 1e3 && this.dispose(!0), this._inFrustum = t);
  }
  // 是否为可视的叶子瓦片
  /**
   * get Whether the tile is leaf and is inFrustm
   */
  get isLeafInFrustum() {
    return this.inFrustum && this.isLeaf;
  }
  // 临时显示
  /**
   * set the tile to temp (transparent)
   */
  set temp(t) {
    this.loadState != "empty" && this.material.forEach((e) => {
      e.wireframe = t || e.userData.wireframe;
    });
  }
  // 是否为叶子瓦片
  /**
   * get the tile is a leaf
   */
  get isLeaf() {
    return this.children.length === 0;
  }
  /**
   * 瓦片是否显示
   */
  get showing() {
    return this.material.some((t) => t.visible);
  }
  /**
   * 显示或隐藏瓦片
   */
  set showing(t) {
    this.material.forEach((e) => {
      e != Q && (e.visible = t);
    });
  }
  /**
   * overwrite Obejct3D.traverse, Modified the callback function param's type to Tile
   * 覆盖Obejct3D.traverse，修改了参数类型
   * @param callback 回调函数，参数改为了this
   */
  traverse(t) {
    t(this), this.children.forEach((e) => {
      e.traverse(t);
    });
  }
  /**
   * orverwrit Mesh.raycast， only loaded tile to checked
   * 重载mesh的raycast，仅检测已加载的瓦片
   * @param raycaster
   * @param intersects
   */
  raycast(t, e) {
    this.loadState === "loaded" && super.raycast(t, e);
  }
  /**
   * reloade tile data
   * 重新加载瓦片数据
   */
  _reload() {
    return this.dispose(!1), this._toLoad = this.isLeaf || this.loadState != "empty", this;
  }
  /**
   * 瓦片LOD
   * @param camera
   * @param loader
   * @returns 新创建的瓦片
   */
  _lod(t, e, n, o) {
    let l = null;
    if (!this.inFrustum)
      return l;
    const c = Bt(this, t, e, n);
    if (c === de.create)
      this._toLoad = !1, l = zt(this, o);
    else if (c === de.remove && this.loadState != "loading") {
      const d = this.parent;
      d instanceof X && !d._toLoad && (d._toLoad = !0, l = []);
    }
    return l;
  }
  /**
   * load the tile data, include geometry and material
   * 加载瓦片数据
   * @param loader tile data loader
   * @returns data loaded. Promise<boolean>
   */
  _load(t) {
    return new Promise((e, n) => {
      this.needLoad ? (this._loadedTime = Date.now(), this._loadState = "loading", t.load(
        this,
        (o) => e(this._onLoad(o))
      )) : e(!1);
    });
  }
  /**
   * 瓦片数据加载完成回调函数
   * @param data 瓦片数据
   * @returns 是否需要清理瓦片树
   */
  _onLoad(t) {
    return this.parent ? this.loadState === "empty" ? (this._toLoad = !1, !1) : (this.material.forEach((e) => {
      e.userData.wireframe = e.wireframe;
    }), this.temp = this._hasLoadedParent(), this._loadState = "loaded", !this.isLeaf && this._toLoad && (this.children.forEach((e) => e.dispose(!0)), this.clear(), this.temp = !1), this._toLoad = !1, !0) : (this.dispose(!0), !1);
  }
  // 递归判断是否有已加载的父瓦片（用于判断：有已加载的父瓦片，暂时不显示）
  _hasLoadedParent() {
    const t = this.parent;
    return t instanceof X ? t.loadState === "loaded" ? !0 : t._hasLoadedParent() : !1;
  }
  /**
   * free the tile resource.
   * 释放瓦片资源
   * @param removeChildren 是否移除子瓦片
   */
  dispose(t) {
    return this.loadState === "loading" && this.dispatchEvent({ type: "abort" }), this._toLoad = !1, this._loadState = "empty", this.material.forEach((e) => {
      e != Q && (e.dispose(), e = Q);
    }), this.geometry != ce && (this.geometry.dispose(), this.geometry.groups = [], this.geometry = ce), this.dispatchEvent({ type: "dispose" }), t && (this.children.forEach((e) => {
      e.dispose(t), e.clear();
    }), this.clear()), this;
  }
}
const J = 0.6, Yt = new wt(
  new g(-J, -J, 0),
  new g(J, J, 8)
), Wt = new Lt(), Re = new Et();
class ke extends X {
  /**
   * constructor
   * 构造函数
   * @param level 瓦片级别 tile level
   * @param x 瓦片x坐标 X-coordinate
   * @param y 瓦片y坐标 X-coordinate
   */
  constructor(t, e = 0, n = 0, o = 0) {
    super(e, n, o);
    // 瓦片树构造完成次数，控制瓦片数据延迟加载
    a(this, "_treeReadyCount", 0);
    a(this, "_updateDataEnable", !0);
    a(this, "_loader");
    a(this, "_minLevel", 0);
    a(this, "_maxLevel", 18);
    a(this, "isWGS", !1);
    this._loader = t, this.matrixAutoUpdate = !0, this.matrixWorldAutoUpdate = !0;
  }
  get minLevel() {
    return this._minLevel;
  }
  set minLevel(t) {
    this._minLevel = t;
  }
  get maxLevel() {
    return this._maxLevel;
  }
  set maxLevel(t) {
    this._maxLevel = t;
  }
  /**
   * set the tile loader
   * 取得瓦片加载器
   */
  get loader() {
    return this._loader;
  }
  /**
   * get the tile loader
   * 设置瓦片加载器
   */
  set loader(t) {
    this._loader = t;
  }
  /**
   * get whether to allow tile data to be updated
   * 是否允许更新瓦片数据
   */
  get updateDataEnable() {
    return this._updateDataEnable && this._treeReadyCount > 20;
  }
  /**
   * set whether to allow tile data to be updated
   */
  set updateDataEnable(t) {
    this._updateDataEnable = t;
  }
  /**
   * update the QuadTree
   * 更新瓦片树并加载数据（每帧渲染前调用）
   * @param camera 摄像机
   */
  update(t) {
    return this._updateTileTree(t) || this._treeReadyCount++, this.updateDataEnable && (this._updateTileData(), this._treeReadyCount = 0), this;
  }
  /**
   * reload data, Called to take effect after provider is modified
   * 重新加载瓦片数据
   */
  reload() {
    return this.traverse((t) => t._reload()), this;
  }
  /**
   * 更新瓦片树
   * @param cameraWorldPosition 摄像机世界坐标
   * @returns 瓦片树是否改变
   */
  _updateTileTree(t) {
    let e = !1;
    return Re.setFromProjectionMatrix(
      Wt.multiplyMatrices(
        t.projectionMatrix,
        t.matrixWorldInverse
      )
    ), this.traverse((n) => {
      const o = n._lod(
        t,
        this.minLevel,
        this.maxLevel,
        this.isWGS
      );
      e = !!o, o == null || o.forEach((l) => {
        this.dispatchEvent({ type: "created", tile: l });
      }), n.inFrustum = Re.intersectsBox(
        Yt.clone().applyMatrix4(n.matrixWorld)
      );
    }), e;
  }
  /**
   *  更新瓦片树数据
   */
  _updateTileData() {
    return this.traverse((t) => {
      t._load(this.loader).then((e) => {
        e && (this.dispatchEvent({ type: "loaded", tile: t }), this._checkTileTree());
      });
    }), this;
  }
  /**
   * 更新瓦片生命周期，超出生命值释放资源
   */
  // private _updateLife() {
  //     this.traverse((tile) => {
  //         tile._checkDispose(1000 * 10);
  //     });
  // }
  /**
   * 清理瓦片树
   * 检查所有瓦片是否都下载完成，全部完成显示所有叶子瓦片，释放所有非叶子瓦片
   */
  _checkTileTree() {
    const t = [];
    this.traverse((o) => t.push(o));
    const n = t.filter((o) => o.isLeafInFrustum).every((o) => o.loadState === "loaded");
    return n && t.filter((o) => o.inFrustum).forEach((o) => {
      o.isLeaf ? (this.dispatchEvent({ type: "tile-show", child: o }), o.temp = !1) : o.dispose(!1);
    }), n;
  }
}
const Xt = `\r
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
}`, Zt = `\r
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
}`;
class hn extends St {
  constructor(r) {
    super({
      uniforms: Mt.merge([
        Pt.lambert.uniforms,
        {
          map1: { value: null },
          diffuse: { value: new Ye(16777215) }
        }
      ]),
      vertexShader: Zt,
      fragmentShader: Xt,
      lights: !0,
      transparent: r.transparent || !0,
      wireframe: r.wireframe || !1,
      fog: !0
    }), this.uniforms.map.value = r.map, this.uniforms.map1.value = r.map1, this.defineProperty("map1"), this.defineProperty("diffuse"), this.defineProperty("opacity");
  }
  dispose() {
    var r, t;
    (r = this.uniforms.map.value) == null || r.dispose(), (t = this.uniforms.map1.value) == null || t.dispose(), super.dispose();
  }
  // public onBeforeCompile = (shader: Shader, _renderer: WebGLRenderer) => {
  //     shader.vertexShader = vert;
  //     shader.fragmentShader = frag;
  //     // console.log(shader.vertexShader);
  //     // console.log(shader.fragmentShader);
  // };
  /**
   * 设置高程数据
   * @param dem 高程数据
   * @returns
   */
  // public setDemData(dem: TexImageSource | null) {
  //     if (dem) {
  //         this.displacementMap = new Texture(dem);
  //         this.displacementMap.minFilter = LinearFilter;
  //         // material.displacementMap.magFilter = LinearFilter;
  //         this.displacementMap.needsUpdate = true;
  //     }
  //     return this;
  // }
  // public dispose(): void {
  //     this.map?.dispose();
  //     this.map = null;
  //     this.aoMap?.dispose();
  //     this.aoMap = null;
  //     this.displacementMap?.dispose();
  //     this.displacementMap = null;
  //     super.dispose();
  // }
  defineProperty(r) {
    Object.defineProperty(this, r, {
      get: function() {
        return this.uniforms[r].value;
      },
      set: function(t) {
        this.uniforms[r].value = t;
      }
    });
  }
}
class Ve extends We {
  // protected _min = Infinity;
  // // 最低高程
  // public get min() {
  //     return this._min;
  // }
  // protected _max = -Infinity;
  // //最高高程
  // public get max() {
  //     return this._max;
  // }
  // protected _avg = 0;
  // // 平均高程
  // public get avg() {
  //     return this._avg;
  // }
  constructor() {
    super(), this.copy(new K());
  }
  build(r) {
    this.dispose(), this.copy(new K(1, 1, r - 1, r - 1));
  }
  // RGB像素值换算为海拔高度
  // 使用 Mapbox Terrain-RGB v1
  // https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-rgb-v1/
  getZ(r, t) {
    const e = r[t * 4], n = r[t * 4 + 1], o = r[t * 4 + 2];
    return (((e << 16) + (n << 8) + o) * 0.1 - 1e4) / 1e3;
  }
  setDemData(r) {
    const t = Math.sqrt(r.length / 4);
    this.build(t);
    const e = this.getAttribute("position");
    let n = 0;
    for (let o = 0; o < e.count; o++) {
      const l = this.getZ(r, o);
      e.setZ(o, l), n += l;
    }
    return this.userData.avg = n / (r.length / 4), this.computeBoundingBox(), this.computeBoundingSphere(), this.computeVertexNormals(), e.needsUpdate = !0, this;
  }
}
function ee(s, r, t) {
  return Math.max(r, Math.min(t, s));
}
class Ht extends Ve {
  constructor() {
    super(...arguments);
    a(this, "type", "TileRGBGeometry");
  }
  build(t) {
    this.dispose();
    const e = 1, n = 1, o = t - 1, l = t - 1, c = e / 2, d = n / 2;
    let p = Math.floor(o), u = Math.floor(l);
    const y = e / p, f = n / u;
    p += 2, u += 2;
    const v = p + 1, E = u + 1, M = [], A = [], I = [], O = [];
    for (let b = 0; b < E; b++)
      for (let _ = 0; _ < v; _++) {
        let m = 0;
        (b === 0 || b === E - 1 || _ === 0 || _ === v - 1) && (m = -1);
        let P = (_ - 1) * y - c, F = (b - 1) * f - d, D = (_ - 1) / (p - 2), C = 1 - (b - 1) / (u - 2);
        P = ee(P, -0.5, 0.5), F = ee(F, -0.5, 0.5), D = ee(D, 0, 1), C = ee(C, 0, 1), A.push(P, -F, m), I.push(0, 0, 1), O.push(D, C);
      }
    for (let b = 0; b < u; b++)
      for (let _ = 0; _ < p; _++) {
        const m = _ + v * b, P = _ + v * (b + 1), F = _ + 1 + v * (b + 1), D = _ + 1 + v * b;
        M.push(m, P, D), M.push(P, F, D);
      }
    this.setIndex(M), this.setAttribute("position", new le(A, 3)), this.setAttribute("normal", new le(I, 3)), this.setAttribute("uv", new le(O, 2));
  }
  setDemData(t) {
    const e = Math.sqrt(t.length / 4);
    this.build(e);
    const n = this.attributes.position;
    let o = 0, l = 0;
    for (let c = 0; c < n.count; c++)
      if (n.getZ(c) === 0) {
        const d = this.getZ(t, o);
        n.setZ(c, d), l += d, o++;
      } else
        n.setZ(c, -1.5);
    return this.userData.avg = l / (t.length / 4), this.computeBoundingBox(), this.computeBoundingSphere(), this.computeVertexNormals(), n.needsUpdate = !0, this;
  }
  // 计算裙边处法向量
  // 瓦片边缘法向量计算比较复杂，需要根据相邻瓦片高程计算，暂未实现
  // 考虑使用Mapbox Terrain-DEM v1格式地形 https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/
  computeVertexNormals() {
    super.computeVertexNormals();
    const t = this.index, e = this.getAttribute("position");
    let n = this.getAttribute("normal");
    const o = new g(), l = new g(), c = new g(), d = new g(0, 0, 1);
    function p(u) {
      return n.setXYZ(
        u,
        d.x,
        d.y,
        d.z
      );
    }
    if (t)
      for (let u = 0, y = t.count; u < y; u += 3) {
        const f = t.getX(u + 0), v = t.getX(u + 1), E = t.getX(u + 2);
        o.fromBufferAttribute(e, f), l.fromBufferAttribute(e, v), c.fromBufferAttribute(e, E), (o.z < -0.1 || l.z < -0.1 || c.z < -0.1) && (p(f), p(v), p(E));
      }
    n.needsUpdate = !0;
  }
}
class dn extends Ve {
  build(r) {
    this.dispose();
    const t = (r + 1) / r;
    this.copy(new K(t, t, r - 1, r - 1));
  }
  setDemData(r) {
    const t = Math.sqrt(r.length / 4);
    this.build(t);
    const e = this.attributes.position;
    let n = 0;
    for (let o = 0; o < e.count; o++) {
      const l = this.getZ(r, o);
      e.setZ(o, l), this.userData._avg = n / (r.length / 4);
    }
    return this.userData._avg = n / e.count, this.computeBoundingBox(), this.computeBoundingSphere(), this.computeVertexNormals(), e.needsUpdate = !0, this;
  }
}
class qe extends ue {
  load(r, t, e, n, o) {
    this.path !== void 0 && (r = this.path + r), r = this.manager.resolveURL(r);
    const l = De.get(r);
    if (l !== void 0)
      return this.manager.itemStart(r), setTimeout(() => {
        t && t(l), this.manager.itemEnd(r);
      }, 0), l;
    const c = new Image(), d = (f) => {
      u(), f.target instanceof HTMLImageElement && (De.add(r, f.target), t && t(f.target)), this.manager.itemEnd(r);
    }, p = (f) => {
      u(), n && n(f), this.manager.itemError(r), this.manager.itemEnd(r);
    }, u = () => {
      c.removeEventListener("load", d, !1), c.removeEventListener("error", p, !1);
    };
    c.addEventListener("load", d, !1), c.addEventListener("error", p, !1);
    const y = {};
    return y.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", y.headers = this.requestHeader, y.signal = o, fetch(r, y).then((f) => {
      if (!f.ok)
        throw `tile load error: ${f.statusText}!`;
      return f.blob();
    }).then((f) => {
      c.src = URL.createObjectURL(f);
    }).catch((f) => {
      f.name === "AbortError" ? console.log("download abort") : (console.error(`Download tile error: ${f}!`, r), this.manager.itemError(r)), this.manager.itemEnd(r), u(), n && n(f);
    }), this.manager.itemStart(r), c;
  }
}
function Qe(s) {
  const r = new AbortController(), t = () => r.abort();
  return s.addEventListener("abort", () => {
    t(), s.removeEventListener("abort", t);
  }), r;
}
const Y = class {
  /**
   * 注册瓦片纹理加载器
   * @param loader 纹理加载器
   */
  static registerTextureLoader(r) {
    Y.imgLoaderMap.set(r.dataType, r), console.log(`* image Loader: ${r.dataType}`);
  }
  /**
   * 注册瓦片几何体加载器
   * @param loader 几何体加载器
   */
  static registerGeometryLoader(r) {
    Y.demLoaderMap.set(r.dataType, r), console.log(`* terrain Loader: ${r.dataType}`);
  }
  /**
   * 取得瓦片纹理加载器
   * @param source 数据源
   * @returns 纹理加载器
   */
  static getTextureLoader(r) {
    const t = Y.imgLoaderMap.get(r.dataType);
    if (t)
      return t;
    throw `${r.constructor.name}.dataType:${r.dataType} is not support!`;
  }
  /**
   * 取得瓦片几何体加载器
   * @param source 数据源
   * @returns 几何体加载器
   */
  static getGeometryLoader(r) {
    const t = Y.demLoaderMap.get(r.dataType);
    if (t)
      return t;
    throw `${r.constructor.name}.dataType:${r.dataType} is not support!`;
  }
};
let L = Y;
a(L, "manager", Dt), // 地形数据加载器字典
a(L, "demLoaderMap", /* @__PURE__ */ new Map()), // 影像数据加载器字典
a(L, "imgLoaderMap", /* @__PURE__ */ new Map());
const ne = class extends ue {
  /**
   *
   * @param imgSource 影像数据源
   * @param demSource 地形数据源
   */
  constructor(t, e, n = 0) {
    super(new jt());
    a(this, "projectCenterLon", 0);
    // 是否标记正在加载的瓦片
    a(this, "_showLoading", !0);
    // 影像层瓦片源
    a(this, "_imgSource");
    // 高程瓦片源
    a(this, "_demSource");
    this.imgSource = t, this.demSource = e, this.projectCenterLon = n;
  }
  get showLoading() {
    return this._showLoading;
  }
  set showLoading(t) {
    this._showLoading = t;
  }
  get imgSource() {
    return this._imgSource;
  }
  set imgSource(t) {
    t && t.length > 2 && console.warn("supports only tow images provider on map"), this._imgSource = t;
  }
  get demSource() {
    return this._demSource;
  }
  set demSource(t) {
    this._demSource = t;
  }
  /**
   * 加载瓦片几何体和纹理
   * @param tile 瓦片
   * @param onLoad 加载完成回调函数
   * @returns
   */
  load(t, e) {
    const n = () => {
      if (o && l) {
        const p = d.findIndex(
          (u) => u === ne.tempMaterail
        );
        p >= 0 && d.splice(p, 1), c.groups = [];
        for (let u = 0; u < d.length; u++)
          d[u].visible = !0, c.addGroup(0, 1 / 0, u);
        e({ geometry: c, material: d });
      }
    };
    let o = !1, l = !1;
    const c = this.loadGeometry(t, (p) => {
      o = !0, n();
    }), d = this.loadMaterial(t, (p) => {
      l = !0, n();
    });
    return this.showLoading && (d.push(ne.tempMaterail), c.addGroup(0, 1 / 0, 0)), t.geometry = c, t.material = d, { geometry: c, material: d };
  }
  /**
   * 加载几何体
   * @param tile 要加载数据的瓦片
   * @param onLoad 加载完成回调
   * @returns 几何体
   */
  loadGeometry(t, e) {
    if (this.demSource)
      return L.getGeometryLoader(this.demSource).load(
        t,
        this.demSource,
        this.projectCenterLon,
        e
      );
    {
      const n = new K();
      return setTimeout(() => e(n), 1), n;
    }
  }
  /**
   * 加载纹理
   * @param tile 要加载数据的瓦片
   * @param onLoad 加载完成回调
   * @returns 纹理
   */
  loadMaterial(t, e) {
    if (this.imgSource.length === 0)
      throw new Error("no imgProvide!");
    const n = [];
    for (let l = 0; l < this.imgSource.length; l++) {
      const c = this.imgSource[l], d = L.getTextureLoader(c), p = new Promise((u, y) => {
        d.load(
          t,
          c,
          this.projectCenterLon,
          (f) => u(f)
        );
      });
      n.push(p);
    }
    const o = [];
    return Promise.all(n).then((l) => {
      l.forEach((c) => {
        c.needsUpdate = !0;
        const d = new At({
          map: c,
          transparent: !0
        });
        d.addEventListener("dispose", () => {
          c.image instanceof ImageBitmap && c.image.close(), c.dispose();
        }), o.push(d);
      }), e(o);
    }), o;
  }
};
let W = ne;
// 临时材质，在纹理未加载完成前时使用
a(W, "tempMaterail", new re({
  wireframe: !0,
  color: 3355443
}));
class un extends W {
  /**
   * 加载几何体
   * @param tile 要加载数据的瓦片
   * @param onLoad 加载完成回调
   * @returns 几何体
   */
  // public loadGeometry(_tile: Tile, onLoad: (geometry: BufferGeometry) => void) {
  //     const geometry = new PlaneGeometry();
  //     setTimeout(() => onLoad(geometry), 1);
  //     return geometry;
  // }
  /**
   * 加载纹理
   * @param tile 要加载数据的瓦片
   * @param onLoad 加载完成回调
   * @returns 纹理
   */
  loadMaterial(r, t) {
    const e = new re({ wireframe: !0, color: 13421772 });
    return setTimeout(() => t([e]), 1), [e];
  }
}
function Kt(s, r, t) {
  const n = new OffscreenCanvas(r, r).getContext("2d");
  n.imageSmoothingEnabled = !1;
  const o = s.width;
  t.translate(new w(0.5, 0.5));
  const l = Math.floor(t.min.x * o), c = Math.floor(t.min.y * o), d = Math.floor((t.max.x - t.min.x) * o), p = Math.floor((t.max.y - t.min.y) * o);
  return n.drawImage(s, l, c, d, p, 0, 0, r, r), n.getImageData(0, 0, r, r).data;
}
function Je(s, r, t, e, n) {
  function o(c, d, p) {
    const u = Math.pow(2, d);
    let y = c + Math.round(u / 360 * p);
    return y >= u ? y -= u : y < 0 && (y += u), y;
  }
  const l = o(r, e, n);
  return s.getUrl(l, t, e);
}
function Vt(s, r, t) {
  const n = new OffscreenCanvas(256, 256), o = n.getContext("2d");
  return o.scale(1, -1), o.translate(0, -256), o && (o.strokeStyle = "#ccc", o.lineWidth = 4, o.strokeRect(5, 5, 256 - 10, 256 - 10), o.fillStyle = "white", o.shadowColor = "black", o.shadowBlur = 5, o.shadowOffsetX = 1, o.shadowOffsetY = 1, o.font = "bold 20px arial", o.textAlign = "center", o.fillText(`Tile Test - level: ${t}`, 256 / 2, 50), o.fillText(`[${s}, ${r}]`, 256 / 2, 80)), n.transferToImageBitmap();
}
const Ne = new Xe();
class qt {
  constructor() {
    // 加载器能够解析的数据类型（来源于Source）
    a(this, "dataType", "image");
    // 加载器名称
    a(this, "name", "Image map loader");
    a(this, "loader", new qe(L.manager));
  }
  /**
   * 加载瓦片纹理
   * @param tile 要加载纹理的瓦片
   * @param source 瓦片数据源
   * @param projectCenterLon 投影中心经度
   * @param onLoad 加载完成（包括异常）回调函数
   * @returns 纹理
   */
  load(r, t, e, n) {
    const o = Je(
      t,
      r.x,
      r.y,
      r.level,
      e
    );
    if (!o)
      return setTimeout(() => n(Ne), 1), Ne;
    const l = new Xe();
    return l.image = this.loader.load(
      o,
      (c) => {
        l.colorSpace = t.colorSpace, n(l);
      },
      void 0,
      (c) => n(l),
      Qe(r).signal
    ), l;
  }
}
L.registerTextureLoader(new qt());
const Ue = new We();
class Qt extends ue {
  constructor() {
    super(...arguments);
    a(this, "dataType", "mapbox-rgb");
    a(this, "name", "MapboxTerrainRGB v1.0  loader");
    // 图像加载器
    a(this, "imageLoader", new qe(L.manager));
  }
  // 加载瓦片几何体
  load(t, e, n, o) {
    const { url: l, rect: c } = this.getUrl(t, e, n);
    if (!l)
      return setTimeout(() => o(Ue), 1), Ue;
    let d = (t.level + 1) * 2;
    d = Math.min(d, 32);
    const p = new Ht();
    return this.imageLoader.load(
      l,
      (u) => {
        const y = Kt(u, d, c);
        p.setDemData(y), o(p);
      },
      void 0,
      (u) => {
        o(p);
      },
      Qe(t).signal
    ), p;
  }
  getUrl(t, e, n) {
    const o = this._getMaxLevelTileAndRect(
      t,
      e.maxLevel || 18
    );
    return { url: Je(
      e,
      o.tile.x,
      o.tile.y,
      o.tile.level,
      n
    ), rect: o.box };
  }
  /**
   * 取出数据源最大级别瓦片和当前瓦片在最大瓦片中的位置
   *
   * 因为瓦片数据并未覆盖所有级别瓦片，如MapBox地形瓦片最高只到15级，如果要显示15级以上瓦片，只能从最高级别瓦片里截取一部分来显示
   * @param tile 瓦片
   * @param provider 数据源
   * @returns 最大瓦片和大小
   */
  _getMaxLevelTileAndRect(t, e) {
    let n = new g(), o = new w(1, 1);
    for (; t.level > e; )
      n.applyMatrix4(t.matrix), o.multiplyScalar(0.5), t = t.parent;
    n.setY(-n.y);
    let l = new It().setFromCenterAndSize(
      new w(n.x, n.y),
      o
    );
    return { tile: t, box: l };
  }
}
L.registerGeometryLoader(new Qt());
class Jt {
  constructor() {
    a(this, "dataType", "test");
    a(this, "name", "Test image loader");
  }
  load(r, t, e, n) {
    const o = Vt(r.x, r.y, r.level);
    let l = new Ot(o);
    return this._listenDispose(r, l), setTimeout(() => n(l), 1), l;
  }
  _listenDispose(r, t) {
    const e = () => {
      t.image instanceof ImageBitmap && t.image.close(), t.dispose();
    };
    r.addEventListener("dispose", () => {
      e();
    });
  }
}
L.registerTextureLoader(new Jt());
class mn extends W {
  /**
   * 加载纹理
   * @param tile 要加载数据的瓦片
   * @param onLoad 加载完成回调
   * @returns 纹理
   */
  loadMaterial(r, t) {
    const e = [new re({ wireframe: !0 })];
    return setTimeout(() => t(e), 1), e;
  }
}
class $ {
  constructor(r = 0) {
    a(this, "centerLon", 0);
    // 是否为经纬度投影
    a(this, "isWGS", !1);
    this.centerLon = r;
  }
  static createFromID(r = "3857", t = 0) {
    let e;
    switch (r) {
      case "3857":
        e = new te(t);
        break;
      case "4326":
        e = new en(t);
        break;
    }
    return e;
  }
  static createFromSource(r, t = 0) {
    let e = "3857";
    return r && (e = (Array.isArray(r) ? r[0].projection : r.projection) || "3857"), $.createFromID(e, t);
  }
}
const $e = 6378, H = class extends $ {
  constructor() {
    super(...arguments);
    a(this, "ID", "3857");
    a(this, "isWGS", !1);
    a(this, "mapWidth", 2 * Math.PI * $e);
    //地球周长(公里)
    a(this, "mapHeight", this.mapWidth);
    //地球周长(公里)
    a(this, "mapDepth", 1);
  }
  //高度不拉伸
  /**
   * 经纬度转投影坐标
   * @param lon 经度
   * @param lat 纬度
   * @returns 投影坐标
   */
  project(t, e) {
    let n = t * Math.PI / 180 * H.earthRad;
    n -= this._getOffsetX();
    let o = e * Math.PI / 180;
    const l = Math.sin(o);
    return o = H.earthRad / 2 * Math.log((1 + l) / (1 - l)), { x: n, y: o };
  }
  /**
   * 投影坐标转经纬度
   * @param x
   * @param y
   * @returns
   */
  unProject(t, e) {
    t += this._getOffsetX();
    const n = H.earthRad * Math.PI;
    let o = t / n * 180, l = e / n * 180;
    return l = 180 / Math.PI * (2 * Math.atan(Math.exp(l * Math.PI / 180)) - Math.PI / 2), { lon: o, lat: l };
  }
  _getOffsetX() {
    return this.mapWidth / 360 * this.centerLon;
  }
};
let te = H;
// 地球半径
a(te, "earthRad", $e);
class en extends $ {
  constructor() {
    super(...arguments);
    a(this, "ID", "4326");
    a(this, "isWGS", !0);
    a(this, "mapWidth", 36e3);
    //东西拉伸到36000个单位（360°）
    a(this, "mapHeight", 18e3);
    //南北拉伸到18000个单位（180°）
    a(this, "mapDepth", 1);
  }
  //垂直不拉伸
  project(t, e) {
    return { x: (t - this.centerLon) * 100, y: e * 100 };
  }
  unProject(t, e) {
    return { lon: t / 100 + this.centerLon, lat: e / 100 };
  }
}
function et(s, r) {
  const t = r.intersectObjects([s.rootTile]);
  for (const e of t)
    if (e.object instanceof X) {
      const n = e.point.applyMatrix4(s.matrixWorld.clone().invert()), o = s.unProject(n.x, n.y);
      return Object.assign(e, {
        location: new g(o.lon, o.lat, n.z)
      });
    }
  return null;
}
function Fe(s, r) {
  const t = new g(r.x, r.y, 100), e = new Ze(t, new g(0, 0, -1));
  return et(s, e);
}
function tn(s, r, t) {
  const e = new Ze();
  return e.setFromCamera(t, s), et(r, e);
}
class tt extends Be {
  /**
   * map mesh constructor
   *
   * 构造函数
   * @param params 地图构造参数 {@link MapContructParams}     *
   * @example
   * ``` typescript
   *  const imgSource = [Source.mapBoxImgSource, new tt.TestSource()];
   *  const demSource = Source.mapBoxDemSource;
   *  const loader = new tt.TileLoader(imgSource, demSource, 2, 18);
   *  const map = new TileMap({ loader, projCenterLon: 90 });
   * ```
   */
  constructor(t) {
    super();
    // 渲染时钟计时器
    a(this, "_clock", new He());
    // 是否为LOD模型（LOD模型，当autoUpdate为真时渲染时会自动调用update方法）
    a(this, "isLOD", !0);
    a(this, "autoUpdate", !0);
    /**
     * root tile
     * 根瓦片
     */
    a(this, "rootTile");
    /**
     * 地图数据加载器
     * map data loader
     */
    a(this, "loader");
    a(this, "_projection");
    this.loader = t.loader, this.rootTile = t.rootTile || new ke(this.loader), this.rootTile.minLevel = t.minLevel || 0, this.rootTile.maxLevel = t.maxLevel || 18, this.projection = $.createFromSource(
      this.loader.imgSource,
      t.projCenterLon
    ), this.loader.projectCenterLon != 0 && this.rootTile.minLevel < 1 && console.warn(
      `Map projection is ${this.loader.projectCenterLon}, minLevel must > 0`
    ), this._attachEvent(), this.add(this.rootTile), this.rootTile.updateMatrix(), this.rootTile.updateMatrixWorld();
  }
  /**
   * get whether to allow tile data to be updated
   * 取得是否允许更新瓦片数据
   */
  get loadeEnable() {
    return this.rootTile.updateDataEnable;
  }
  /**
   * set whether to allow tile data to be updated
   * 设置是否允许更新瓦片数据
   */
  set loadEnable(t) {
    this.rootTile.updateDataEnable = t;
  }
  /**
   * 取得地图投影对象
   * set the map projection object
   */
  get projection() {
    return this._projection;
  }
  /**
   * 设置地图投影对象
   * get the map projection object
   */
  set projection(t) {
    var n;
    const e = (n = this._projection) == null ? void 0 : n.ID;
    this._projection = t, this.loader.projectCenterLon = t.centerLon, this.rootTile.isWGS = this._projection.isWGS, this.rootTile.scale.set(
      this._projection.mapWidth,
      this._projection.mapHeight,
      this._projection.mapDepth
    ), e && e != t.ID && (this.rebuild(), console.log("Map Projection Changed:", t.ID), this.dispatchEvent({
      type: "projection-changed",
      projection: t
    }));
  }
  /**
   * 取得影像数据源
   * get the image data source object
   */
  get imgSource() {
    return this.loader.imgSource;
  }
  /**
   * 设置影像数据源
   * set the image data source object
   */
  set imgSource(t) {
    this.loader.imgSource = t ? Array.isArray(t) ? t : [t] : [], console.log(this.attributions);
    let e = "3857";
    t && (e = (Array.isArray(t) ? t[0].projection : t.projection) || "3857"), this.projection = $.createFromID(
      e,
      this.projection.centerLon
    ), this.dispatchEvent({ type: "source-changed", source: t });
  }
  /**
   * get the terrain data source
   * 设置地形数据源
   */
  get demSource() {
    return this.loader.demSource;
  }
  /**
   * set the terrain data source
   * 取得地形数据源
   */
  set demSource(t) {
    this.loader.demSource = t, this.dispatchEvent({ type: "source-changed", source: t });
  }
  /**
   * map create factory
   * create a map map from params
   * 
   * 地图创建工厂函数
     @param params 地图参数 {@link MapParams}
     @returns 地图模型
     @example
     ``` typescript
      TileMap.create({
          // 影像数据源
          imgSource: [source.mapBoxImgSource, new TestSource()],
          // 高程数据源
          demSource: source.mapBoxDemSource,
          // 地图投影中心经度
          projCenterLon: 90,
          // 最小缩放级别
          minLevel: 1,
          // 最大缩放级别
          maxLevel: 18,
      });
     ```
   */
  static create(t) {
    let e = t.imgSource;
    Array.isArray(e) || (e = [e]);
    const n = new W(
      e,
      t.demSource,
      t.projCenterLon
    ), o = new ke(n, 0, 0, 0);
    return new tt({
      loader: n,
      rootTile: o,
      projCenterLon: t.projCenterLon,
      minLevel: t.minLevel,
      maxLevel: t.maxLevel
    });
  }
  /**
   * update the map, It is automatically called after adding a scene
   * 模型更新回调函数，地图加入场景后会在每帧更新时被调用
   * @param camera 摄像机
   */
  update(t) {
    this.rootTile.update(t), this.dispatchEvent({ type: "update", delta: this._clock.getDelta() });
  }
  /**
   * reload the map data
   * call this after the source has changed
   * 重新加载地图，在改变地图数据源后调用它才能生效
   */
  reload() {
    this.rootTile.reload();
  }
  /**
   * rebuild th map
   * It is generally used when changing the projection of a map
   * 重新构建瓦片树，一般在改变投影时用它
   */
  rebuild() {
    this.rootTile.dispose(!0);
  }
  /**
   * get map data attributions information
   * 取得地图数据归属信息
   * @returns Attributions 版权信息数组
   */
  get attributions() {
    const t = [];
    let e = this.imgSource;
    if (e && (Array.isArray(e) || (e = [e]), e.forEach((n) => {
      const o = n.attribution;
      o && t.indexOf(o) < 0 && t.push(o);
    })), this.demSource) {
      const n = this.demSource.attribution;
      n && t.indexOf(n) < 0 && t.push(n);
    }
    return t;
  }
  /**
   * Latitude and longitude (4326) converted to scene projection coordinates (3857)
   * 经纬度(4326)转换为场景投影坐标(3857)
   * @param lon 经度
   * @param lat 纬度
   * @returns 投影坐标
   */
  project(t, e) {
    return this._projection.project(t, e);
  }
  /**
   * Scene projection coordinates (3857) converted to latitude and longitude (4326)
   * 场景投影坐标（3857）转换为经纬度(4326)
   * @param x 投影x坐标
   * @param y 投影y坐标
   * @returns 经纬度
   */
  unProject(t, e) {
    return this._projection.unProject(t, e);
  }
  /**
   * get the ground elevation for the specified latitude and longitude
   * 获取指定经纬度的地面信息（法向量、高度等）
   * @param lon 经度
   * @param lat 纬度
   * @returns 海拔高度（km）
   */
  getLocalInfoFromLocation(t, e) {
    const n = this.project(t, e);
    return Fe(this, new w(n.x, n.y));
  }
  getLocalInfoFromWorld(t) {
    return Fe(this, t);
  }
  /**
   * get the loacation infomation from screen point
   * @param camera 摄像机
   * @param pointer 点的屏幕坐标（-0.5~0.5）
   * @returns 位置信息（经纬度、高度等）
   */
  getLocationFromScreen(t, e) {
    return tn(t, this, e);
  }
  /**
   * get map tiles statistics to debug
   * @returns 取得瓦片统计信息，用于调试性能
   */
  getTileCount() {
    let t = 0, e = 0, n = 0, o = 0;
    return this.rootTile.traverse((l) => {
      t++, l.isLeafInFrustum && e++, l.isLeaf && o++, n = Math.max(n, l.level);
    }), { sum: t, visible: e, leaf: o, maxLevle: n };
  }
  // public clampToGround(obj: Object3D) {
  //     const worldPosition = obj.getWorldPosition(tempVec3);
  //     // 取得海拔高度
  //     const h = this.getAltitudeFromWorldPostion(worldPosition);
  //     // obj.geometry.center()
  //     obj.position.setZ(h);
  // }
  /**
   * 监听将瓦片数据加载事件
   */
  _attachEvent() {
    const t = L.manager;
    return t.onStart = (e, n, o) => {
      this.dispatchEvent({
        type: "loading-start",
        itemsLoaded: n,
        itemsTotal: o
      });
    }, t.onError = (e) => {
      this.dispatchEvent({ type: "loading-error", url: e });
    }, t.onLoad = () => {
      this.dispatchEvent({ type: "loading-complete" });
    }, t.onProgress = (e, n, o) => {
      this.dispatchEvent({
        type: "loading-progress",
        url: e,
        itemsLoaded: n,
        itemsTotal: o
      });
    }, this.rootTile.addEventListener("created", (e) => {
      this.dispatchEvent({ type: "tile-created", tile: e.tile });
    }), this.rootTile.addEventListener("loaded", (e) => {
      this.dispatchEvent({ type: "tile-loaded", tile: e.tile });
    }), this;
  }
}
class S {
  constructor(r) {
    a(this, "dataType", "unknown");
    a(this, "attribution", "ThreeTile");
    a(this, "minLevel", 0);
    a(this, "maxLevel", 18);
    a(this, "projection", "3857");
    a(this, "urlTemplate", "");
    a(this, "bounds", [
      -180,
      -85.05112877980659,
      -180,
      85.05112877980659
    ]);
    a(this, "projectionBounds");
    // 纹理颜色空间
    a(this, "colorSpace", Ct);
    this.dataType = (r == null ? void 0 : r.dataType) || "unknown", this.attribution = (r == null ? void 0 : r.attribution) || "ThreeTile", this.projection = (r == null ? void 0 : r.projection) || "3857", (r == null ? void 0 : r.url) instanceof Function ? this.getUrl = r.url : this.urlTemplate = r == null ? void 0 : r.url;
    const t = $.createFromID(this.projection).project(
      this.bounds[0],
      this.bounds[1]
    ), e = $.createFromID(this.projection).project(
      this.bounds[2],
      this.bounds[3]
    );
    this.projectionBounds = [t.x, t.y, e.x, e.y];
  }
  getAxisBounds(r) {
    const t = Math.pow(2, r), e = Math.pow(2, r);
    return { x: t, y: e };
  }
  getUrl(r, t, e) {
    if (this.urlTemplate) {
      const n = Object.assign({}, this, { x: r, y: t, z: e });
      return nn(this.urlTemplate, n);
    }
  }
  static create(r) {
    return new S(r);
  }
}
function nn(s, r) {
  const t = /\{ *([\w_ -]+) *\}/g;
  return s.replace(t, (e, n) => {
    let o = r[n];
    if (o === void 0)
      throw new Error(`No value provided for variable ${e}`);
    return typeof o == "function" && (o = o(r)), o;
  });
}
class nt extends S {
  constructor(t, e) {
    super(e);
    a(this, "token", "");
    a(this, "format", "webp");
    a(this, "style", "mapbox.satellite");
    a(this, "attribution", "MapBox");
    this.token = t;
  }
  getUrl(t, e, n) {
    return `https://api.mapbox.com/v4/${this.style}/${n}/${t}/${e}.${this.format}?access_token=${this.token}`;
  }
}
class pn extends nt {
  constructor() {
    super(...arguments);
    a(this, "style", "mapbox.satellite");
    a(this, "dataType", "image");
  }
}
class fn extends nt {
  constructor() {
    super(...arguments);
    a(this, "style", "mapbox.terrain-rgb");
    a(this, "dataType", "mapbox-rgb");
  }
}
class gn extends S {
  constructor(t = "s") {
    super();
    a(this, "dataType", "image");
    a(this, "attribution", "Google");
    a(this, "style");
    this.style = t;
  }
  getUrl(t, e, n) {
    return `https://gac-geo.googlecnapps.cn/maps/vt?lyrs=${this.style}&x=${t}&y=${e}&z=${n}`;
  }
}
class yn extends S {
  constructor(t = "A,RL") {
    super();
    a(this, "dataType", "image");
    a(this, "attribution", "bing地图[GS(2021)1731]");
    a(this, "style", "A,RL");
    this.style = t;
  }
  getUrl(t, e, n) {
    return `https://t1.dynamic.tiles.ditu.live.com/comp/ch/${rn(n, t, e)}?mkt=zh-CN&ur=CN&it=${this.style}&n=z&og=804&cstl=vb`;
  }
}
function rn(s, r, t) {
  let e = "";
  for (let n = s; n > 0; n--) {
    const o = 1 << n - 1;
    let l = 0;
    r & o && l++, t & o && (l += 2), e += l;
  }
  return e;
}
class bn extends S {
  constructor(t = "World_Imagery") {
    super();
    a(this, "dataType", "image");
    a(this, "attribution", "ArcGIS");
    a(this, "style", "World_Imagery");
    this.style = t;
  }
  getUrl(t, e, n) {
    return `https://services.arcgisonline.com/arcgis/rest/services/${this.style}/MapServer/tile/${n}/${e}/${t}`;
  }
}
class _n extends S {
  constructor(t = "8") {
    super();
    a(this, "dataType", "image");
    a(this, "attribution", "高德[GS(2021)6375号]");
    a(this, "style", "8");
    this.style = t;
  }
  getUrl(t, e, n) {
    return `https://webst04.is.autonavi.com/appmaptile?style=${this.style}&x=${t}&y=${e}&z=${n}`;
  }
}
class rt extends S {
  constructor(t, e = "img") {
    super();
    a(this, "attribution", "中科星图[GS(2022)3995号]");
    a(this, "token", "");
    a(this, "style", "img");
    a(this, "format", "webp");
    this.token = t, this.style = e;
  }
  getUrl(t, e, n) {
    return `https://tiles2.geovisearth.com/base/v1/${this.style}/${n}/${t}/${e}?format=${this.format}&tmsIds=w&token=${this.token}`;
  }
}
class xn extends rt {
  constructor() {
    super(...arguments);
    a(this, "dataType", "image");
    a(this, "maxLevel", 18);
    a(this, "format", "webp");
  }
}
class vn extends rt {
  constructor() {
    super(...arguments);
    a(this, "dataType", "mapbox-rgb");
    a(this, "style", "terrain_rgb");
    a(this, "maxLevel", 10);
    a(this, "format", "png");
  }
}
class ot extends S {
  // constructor(token = "1wQipi7ObKhiPRyTYgl6", id = "hybrid", format = "jpg") {
  constructor(t = "get_your_own_key_QmavnBrQwNGsQ8YvPzZg", e = "terrain-rgb", n = "png") {
    super();
    a(this, "attribution", "MapTiler");
    a(this, "token");
    a(this, "format");
    a(this, "style");
    this.token = t, this.format = n, this.style = e;
  }
  getUrl(t, e, n) {
    return `https://api.maptiler.com/tiles/${this.style}/${n}/${t}/${e}.${this.format}?key=${this.token}`;
  }
}
class Tn extends ot {
  constructor() {
    super(...arguments);
    a(this, "dataType", "image");
    a(this, "format", "jpg");
    a(this, "style", "satellite-v2");
  }
}
class wn extends ot {
  constructor() {
    super(...arguments);
    a(this, "dataType", "mapbox-rgb");
    a(this, "style", "terrain-rgb-v2");
    a(this, "format", "webp");
    a(this, "maxLevel", 12);
  }
}
class Ln extends S {
  constructor() {
    super(...arguments);
    a(this, "dataType", "image");
    a(this, "attribution", "腾讯[GS(2023)1号]");
  }
  getUrl(t, e, n) {
    const o = t >> 4, l = (1 << n) - e >> 4, c = Math.pow(2, n) - 1 - e;
    return `https://p0.map.gtimg.com/sateTiles/${n}/${o}/${l}/${t}_${c}.jpg`;
  }
}
class on extends S {
  constructor(t, e = "img_w") {
    super();
    a(this, "dataType", "image");
    a(this, "attribution", "天地图[GS(2023)336号]");
    a(this, "token", "");
    a(this, "style");
    this.style = e, this.token = t;
  }
  getUrl(t, e, n) {
    const o = this.projection === "3857" ? "w" : "c";
    return `https://t0.tianditu.gov.cn/${this.style}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=${o}&FORMAT=tiles&TILEMATRIX=${n}&TILEROW=${e}&TILECOL=${t}&tk=${this.token}`;
  }
}
class En extends on {
  constructor() {
    super(...arguments);
    a(this, "projection", "4326");
  }
}
class Sn extends S {
  constructor(t = "pl") {
    super();
    a(this, "dataType", "image");
    a(this, "attribution", "百度[GS(2021)6026号]");
    a(this, "style", "pl");
    this.style = t;
  }
  // todo: 瓦片计算有问题
  getUrl(t, e, n) {
    return `https://online0.map.bdimg.com/tile/?qt=tile&x=${t}&y=${e}&z=${n}&v=020`;
  }
}
const ze = { type: "change" }, he = { type: "start" }, Ge = { type: "end" };
class an extends Ke {
  constructor(r, t) {
    super(), this.object = r, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new g(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: N.ROTATE, MIDDLE: N.DOLLY, RIGHT: N.PAN }, this.touches = { ONE: U.ROTATE, TWO: U.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return c.phi;
    }, this.getAzimuthalAngle = function() {
      return c.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(i) {
      i.addEventListener("keydown", ae), this._domElementKeyEvents = i;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", ae), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(ze), e.update(), o = n.NONE;
    }, this.update = function() {
      const i = new g(), h = new je().setFromUnitVectors(r.up, new g(0, 1, 0)), x = h.clone().invert(), T = new g(), j = new je(), G = 2 * Math.PI;
      return function() {
        const Pe = e.object.position;
        i.copy(Pe).sub(e.target), i.applyQuaternion(h), c.setFromVector3(i), e.autoRotate && o === n.NONE && C(F()), e.enableDamping ? (c.theta += d.theta * e.dampingFactor, c.phi += d.phi * e.dampingFactor) : (c.theta += d.theta, c.phi += d.phi);
        let R = e.minAzimuthAngle, k = e.maxAzimuthAngle;
        return isFinite(R) && isFinite(k) && (R < -Math.PI ? R += G : R > Math.PI && (R -= G), k < -Math.PI ? k += G : k > Math.PI && (k -= G), R <= k ? c.theta = Math.max(R, Math.min(k, c.theta)) : c.theta = c.theta > (R + k) / 2 ? Math.max(R, c.theta) : Math.min(k, c.theta)), c.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, c.phi)), c.makeSafe(), c.radius *= p, c.radius = Math.max(e.minDistance, Math.min(e.maxDistance, c.radius)), e.enableDamping === !0 ? e.target.addScaledVector(u, e.dampingFactor) : e.target.add(u), i.setFromSpherical(c), i.applyQuaternion(x), Pe.copy(e.target).add(i), e.object.lookAt(e.target), e.enableDamping === !0 ? (d.theta *= 1 - e.dampingFactor, d.phi *= 1 - e.dampingFactor, u.multiplyScalar(1 - e.dampingFactor)) : (d.set(0, 0, 0), u.set(0, 0, 0)), p = 1, y || T.distanceToSquared(e.object.position) > l || 8 * (1 - j.dot(e.object.quaternion)) > l ? (e.dispatchEvent(ze), T.copy(e.object.position), j.copy(e.object.quaternion), y = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", Se), e.domElement.removeEventListener("pointerdown", Le), e.domElement.removeEventListener("pointercancel", Z), e.domElement.removeEventListener("wheel", Ee), e.domElement.removeEventListener("pointermove", ie), e.domElement.removeEventListener("pointerup", Z), e._domElementKeyEvents !== null && (e._domElementKeyEvents.removeEventListener("keydown", ae), e._domElementKeyEvents = null);
    };
    const e = this, n = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let o = n.NONE;
    const l = 1e-6, c = new Ae(), d = new Ae();
    let p = 1;
    const u = new g();
    let y = !1;
    const f = new w(), v = new w(), E = new w(), M = new w(), A = new w(), I = new w(), O = new w(), b = new w(), _ = new w(), m = [], P = {};
    function F() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function D() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function C(i) {
      d.theta -= i;
    }
    function V(i) {
      d.phi -= i;
    }
    const me = function() {
      const i = new g();
      return function(x, T) {
        i.setFromMatrixColumn(T, 0), i.multiplyScalar(-x), u.add(i);
      };
    }(), pe = function() {
      const i = new g();
      return function(x, T) {
        e.screenSpacePanning === !0 ? i.setFromMatrixColumn(T, 1) : (i.setFromMatrixColumn(T, 0), i.crossVectors(e.object.up, i)), i.multiplyScalar(x), u.add(i);
      };
    }(), z = function() {
      const i = new g();
      return function(x, T) {
        const j = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const G = e.object.position;
          i.copy(G).sub(e.target);
          let q = i.length();
          q *= Math.tan(e.object.fov / 2 * Math.PI / 180), me(2 * x * q / j.clientHeight, e.object.matrix), pe(2 * T * q / j.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (me(x * (e.object.right - e.object.left) / e.object.zoom / j.clientWidth, e.object.matrix), pe(T * (e.object.top - e.object.bottom) / e.object.zoom / j.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function oe(i) {
      e.object.isPerspectiveCamera ? p /= i : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * i)), e.object.updateProjectionMatrix(), y = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function fe(i) {
      e.object.isPerspectiveCamera ? p *= i : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / i)), e.object.updateProjectionMatrix(), y = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function ge(i) {
      f.set(i.clientX, i.clientY);
    }
    function it(i) {
      O.set(i.clientX, i.clientY);
    }
    function ye(i) {
      M.set(i.clientX, i.clientY);
    }
    function at(i) {
      v.set(i.clientX, i.clientY), E.subVectors(v, f).multiplyScalar(e.rotateSpeed);
      const h = e.domElement;
      C(2 * Math.PI * E.x / h.clientHeight), V(2 * Math.PI * E.y / h.clientHeight), f.copy(v), e.update();
    }
    function st(i) {
      b.set(i.clientX, i.clientY), _.subVectors(b, O), _.y > 0 ? oe(D()) : _.y < 0 && fe(D()), O.copy(b), e.update();
    }
    function lt(i) {
      A.set(i.clientX, i.clientY), I.subVectors(A, M).multiplyScalar(e.panSpeed), z(I.x, I.y), M.copy(A), e.update();
    }
    function ct(i) {
      i.deltaY < 0 ? fe(D()) : i.deltaY > 0 && oe(D()), e.update();
    }
    function ht(i) {
      let h = !1;
      switch (i.code) {
        case e.keys.UP:
          i.ctrlKey || i.metaKey || i.shiftKey ? V(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : z(0, e.keyPanSpeed), h = !0;
          break;
        case e.keys.BOTTOM:
          i.ctrlKey || i.metaKey || i.shiftKey ? V(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : z(0, -e.keyPanSpeed), h = !0;
          break;
        case e.keys.LEFT:
          i.ctrlKey || i.metaKey || i.shiftKey ? C(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : z(e.keyPanSpeed, 0), h = !0;
          break;
        case e.keys.RIGHT:
          i.ctrlKey || i.metaKey || i.shiftKey ? C(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : z(-e.keyPanSpeed, 0), h = !0;
          break;
      }
      h && (i.preventDefault(), e.update());
    }
    function be() {
      if (m.length === 1)
        f.set(m[0].pageX, m[0].pageY);
      else {
        const i = 0.5 * (m[0].pageX + m[1].pageX), h = 0.5 * (m[0].pageY + m[1].pageY);
        f.set(i, h);
      }
    }
    function _e() {
      if (m.length === 1)
        M.set(m[0].pageX, m[0].pageY);
      else {
        const i = 0.5 * (m[0].pageX + m[1].pageX), h = 0.5 * (m[0].pageY + m[1].pageY);
        M.set(i, h);
      }
    }
    function xe() {
      const i = m[0].pageX - m[1].pageX, h = m[0].pageY - m[1].pageY, x = Math.sqrt(i * i + h * h);
      O.set(0, x);
    }
    function dt() {
      e.enableZoom && xe(), e.enablePan && _e();
    }
    function ut() {
      e.enableZoom && xe(), e.enableRotate && be();
    }
    function ve(i) {
      if (m.length == 1)
        v.set(i.pageX, i.pageY);
      else {
        const x = se(i), T = 0.5 * (i.pageX + x.x), j = 0.5 * (i.pageY + x.y);
        v.set(T, j);
      }
      E.subVectors(v, f).multiplyScalar(e.rotateSpeed);
      const h = e.domElement;
      C(2 * Math.PI * E.x / h.clientHeight), V(2 * Math.PI * E.y / h.clientHeight), f.copy(v);
    }
    function Te(i) {
      if (m.length === 1)
        A.set(i.pageX, i.pageY);
      else {
        const h = se(i), x = 0.5 * (i.pageX + h.x), T = 0.5 * (i.pageY + h.y);
        A.set(x, T);
      }
      I.subVectors(A, M).multiplyScalar(e.panSpeed), z(I.x, I.y), M.copy(A);
    }
    function we(i) {
      const h = se(i), x = i.pageX - h.x, T = i.pageY - h.y, j = Math.sqrt(x * x + T * T);
      b.set(0, j), _.set(0, Math.pow(b.y / O.y, e.zoomSpeed)), oe(_.y), O.copy(b);
    }
    function mt(i) {
      e.enableZoom && we(i), e.enablePan && Te(i);
    }
    function pt(i) {
      e.enableZoom && we(i), e.enableRotate && ve(i);
    }
    function Le(i) {
      e.enabled !== !1 && (m.length === 0 && (e.domElement.setPointerCapture(i.pointerId), e.domElement.addEventListener("pointermove", ie), e.domElement.addEventListener("pointerup", Z)), _t(i), i.pointerType === "touch" ? yt(i) : ft(i));
    }
    function ie(i) {
      e.enabled !== !1 && (i.pointerType === "touch" ? bt(i) : gt(i));
    }
    function Z(i) {
      xt(i), m.length === 0 && (e.domElement.releasePointerCapture(i.pointerId), e.domElement.removeEventListener("pointermove", ie), e.domElement.removeEventListener("pointerup", Z)), e.dispatchEvent(Ge), o = n.NONE;
    }
    function ft(i) {
      let h;
      switch (i.button) {
        case 0:
          h = e.mouseButtons.LEFT;
          break;
        case 1:
          h = e.mouseButtons.MIDDLE;
          break;
        case 2:
          h = e.mouseButtons.RIGHT;
          break;
        default:
          h = -1;
      }
      switch (h) {
        case N.DOLLY:
          if (e.enableZoom === !1)
            return;
          it(i), o = n.DOLLY;
          break;
        case N.ROTATE:
          if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (e.enablePan === !1)
              return;
            ye(i), o = n.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            ge(i), o = n.ROTATE;
          }
          break;
        case N.PAN:
          if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (e.enableRotate === !1)
              return;
            ge(i), o = n.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            ye(i), o = n.PAN;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && e.dispatchEvent(he);
    }
    function gt(i) {
      switch (o) {
        case n.ROTATE:
          if (e.enableRotate === !1)
            return;
          at(i);
          break;
        case n.DOLLY:
          if (e.enableZoom === !1)
            return;
          st(i);
          break;
        case n.PAN:
          if (e.enablePan === !1)
            return;
          lt(i);
          break;
      }
    }
    function Ee(i) {
      e.enabled === !1 || e.enableZoom === !1 || o !== n.NONE || (i.preventDefault(), e.dispatchEvent(he), ct(i), e.dispatchEvent(Ge));
    }
    function ae(i) {
      e.enabled === !1 || e.enablePan === !1 || ht(i);
    }
    function yt(i) {
      switch (Me(i), m.length) {
        case 1:
          switch (e.touches.ONE) {
            case U.ROTATE:
              if (e.enableRotate === !1)
                return;
              be(), o = n.TOUCH_ROTATE;
              break;
            case U.PAN:
              if (e.enablePan === !1)
                return;
              _e(), o = n.TOUCH_PAN;
              break;
            default:
              o = n.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case U.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              dt(), o = n.TOUCH_DOLLY_PAN;
              break;
            case U.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              ut(), o = n.TOUCH_DOLLY_ROTATE;
              break;
            default:
              o = n.NONE;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && e.dispatchEvent(he);
    }
    function bt(i) {
      switch (Me(i), o) {
        case n.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          ve(i), e.update();
          break;
        case n.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          Te(i), e.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          mt(i), e.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          pt(i), e.update();
          break;
        default:
          o = n.NONE;
      }
    }
    function Se(i) {
      e.enabled !== !1 && i.preventDefault();
    }
    function _t(i) {
      m.push(i);
    }
    function xt(i) {
      delete P[i.pointerId];
      for (let h = 0; h < m.length; h++)
        if (m[h].pointerId == i.pointerId) {
          m.splice(h, 1);
          return;
        }
    }
    function Me(i) {
      let h = P[i.pointerId];
      h === void 0 && (h = new w(), P[i.pointerId] = h), h.set(i.pageX, i.pageY);
    }
    function se(i) {
      const h = i.pointerId === m[0].pointerId ? m[1] : m[0];
      return P[h.pointerId];
    }
    e.domElement.addEventListener("contextmenu", Se), e.domElement.addEventListener("pointerdown", Le), e.domElement.addEventListener("pointercancel", Z), e.domElement.addEventListener("wheel", Ee, { passive: !1 }), this.update();
  }
}
class sn extends an {
  constructor(r, t) {
    super(r, t), this.screenSpacePanning = !1, this.mouseButtons = { LEFT: N.PAN, MIDDLE: N.DOLLY, RIGHT: N.ROTATE }, this.touches = { ONE: U.PAN, TWO: U.DOLLY_ROTATE };
  }
}
Rt.DEFAULT_UP.set(0, 0, 1);
class Mn extends Ke {
  constructor(t, e = new g(0, 3e3, 0), n = new g(0, -1e3, 1e4)) {
    super();
    a(this, "scene");
    a(this, "renderer");
    a(this, "camera");
    a(this, "controls");
    a(this, "ambLight");
    a(this, "dirLight");
    a(this, "container");
    a(this, "_clock", new He());
    a(this, "_fogFactor", 1);
    this.container = t, this.renderer = this._createRenderer(), this.scene = this._createScene(), this.camera = this._createCamera(n), this.controls = this._createControls(e, this.camera, t), this.ambLight = this._createAmbLight(), this.scene.add(this.ambLight), this.dirLight = this._createDirLight(), this.scene.add(this.dirLight), this.container.appendChild(this.renderer.domElement), window.addEventListener("resize", this.resize.bind(this)), this.resize(), this.animate();
  }
  get fogFactor() {
    return this._fogFactor;
  }
  set fogFactor(t) {
    this._fogFactor = t, this.controls.dispatchEvent({ type: "change", target: this.controls });
  }
  _createDirLight() {
    const t = new kt(16777215, 0.5);
    return t.target.position.copy(this.controls.target), t.position.set(-1e3, -2e3, 1e4), t;
  }
  _createAmbLight() {
    return new Nt(16777215, 0.7);
  }
  _createControls(t, e, n) {
    const o = new sn(e, n);
    return o.target.copy(t), o.minDistance = 0.1, o.maxDistance = 15e3, o.zoomSpeed = 3, o.maxPolarAngle = 1.2, o.enableDamping = !0, o.listenToKeyEvents(window), o.addEventListener("change", () => {
      const l = Math.max(this.controls.getPolarAngle(), 0.1), c = Math.max(this.controls.getDistance(), 0.1);
      o.zoomSpeed = Math.max(Math.log(c), 1.8), this.camera.far = Math.max(
        Math.min(c / l * 8, 5e4),
        100
      ), this.camera.near = this.camera.far / 1e3, this.camera.updateProjectionMatrix(), this.scene.fog instanceof Ie && (this.scene.fog.density = l / (c + 5) / 4 * this.fogFactor);
    }), o.saveState(), o;
  }
  _createCamera(t) {
    const e = new Ut(80, 1, 0.1, 5e4);
    return e.position.copy(t), e;
  }
  _createScene() {
    const e = new $t();
    return e.background = new Ye(14414079), e.fog = new Ie(14414079, 0), e;
  }
  _createRenderer() {
    const t = new Ft({
      antialias: !0,
      alpha: !0,
      logarithmicDepthBuffer: !0,
      precision: "highp"
    });
    return t.sortObjects = !0, t.setPixelRatio(window.devicePixelRatio), t;
  }
  //浏览器窗口大小变化重置状态
  resize() {
    const t = this.container.clientWidth, e = this.container.clientHeight;
    return this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(t, e), this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this;
  }
  animate() {
    this.renderer.render(this.scene, this.camera), this.controls.update(), this.dispatchEvent({ type: "update", delta: this._clock.getDelta() }), requestAnimationFrame(this.animate.bind(this));
  }
}
export {
  qe as AbortImageLoader,
  bn as ArcGisSource,
  Sn as BaiduSource,
  yn as BingSource,
  _n as GDSource,
  Mn as GLViewer,
  gn as GoogleSource,
  L as LoaderFactory,
  fn as MapBoxDemSource,
  pn as MapBoxImgSource,
  wn as MapTilerDemSource,
  Tn as MapTilerImgSource,
  ot as MapTilerSource,
  te as ProjMCT,
  en as ProjWGS,
  $ as Projection,
  ke as RootTile,
  S as Source,
  on as TDTSource,
  En as TDTSourceC,
  Ln as TXSource,
  un as TestLoader,
  X as Tile,
  dn as TileDEMGeometry,
  Ve as TileGeometry,
  Qt as TileGeometryLoader,
  W as TileLoader,
  tt as TileMap,
  hn as TileMaterial,
  Ht as TileRGBGeometry,
  qt as TileTextureLoader,
  Jt as TileTextureTestLoader,
  mn as WireframeLoader,
  xn as ZKXTImgSource,
  vn as ZKXtDemSource,
  Vt as drawTile,
  Qe as getAbortController,
  Kt as getImageData,
  Je as getProjectionUrl,
  nn as strTemplate
};
