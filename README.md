# **three-tile V0.5**

<p align='right'>郭江峰  hz_gjf@163.com  SXMB</p>

## 1 简介

three-tile 是一个基于 [threejs](https://threejs.org/) 的轻量级三维瓦片地图框架，具有使用简单、资源占用少等优点，适用于基于 threejs 开发三维地图应用。

-   three-tile 本质上是一个动态 LOD 模型，核心代码与地图是无关的，适用范围并不仅限于地图，但最典型的应用还是三维地图。

-   three-tile 不是一个 GIS 框架，它并不提供图层管理、空间分析等 GIS 相关功能。正因为如此，它的核心可以做的很轻量级，能轻松集成到已有项目中。

-   three-tile 参考了大量开源 GIS 的开发思路，但仅仅是思路，除了数据源定义，未 copy 一行代码，更不是 Cesium、MapBox 等套壳。

免责声明：

-   本框架不含任何地图数据，Example 中使用的地图均为直接调用第三方数据，使用中请遵循法律法规要求。
-   Example 中使用的图片和模型，均来自互联网，若涉及版权问题请通知我。

### 1.1 优点

-   体积小：仅 60 多 k 的包（不含 example），十分小巧，开箱即用。
-   轻量级：地图以一个三维模型方式提供，不会对你的程序架构产生任何影响。
-   依赖少：整个框架仅有 threejs（R152）一个依赖。
-   速度快：对资源占用做极致优化，核显也能轻松跑到 60FPS。
-   使用简单：熟悉 threejs 基本上没有学习成本。
-   扩展性强：数据、模型、纹理、材质、渲染过程均能根据自己需要扩展和替换。

### 1.3 开发环境

-   语言：TypeScript 100%

-   IDE： VSCode

-   打包：Vite 4.0

-   依赖：three^0.152

---

## 2 安装

建议使用 typescript 开发，原生 JavaScript 写的代码 BUG 防不胜防，至少使用 ES6。

### 2.1 直接引用

```
<script src="./three.js"></script>
<script src="./three-tile.umd.js"></script>
```

### 2.2 npm

```sh
npm i three-tile -S
```

https://www.npmjs.com/package/three-tile

---

## 3 使用

和一般 threejs 应用一样，初始化 threejs 三维场景后，将地图模型加入场景即可完成地图的显示。

TileMap 类是 three-tile 地图模型，它是一个 Mesh，按 threejs 的套路初始化场景，并将 TileMap 的实例加入场景即可。

为了便于使用，three-tile 还提供一个 GLViewer 类，它封装了场景初始化过程，一般可直接使用它进行初始化。但如果你熟悉 threejs，最好自己写，跟普通 threejs 程序并无太大差异。

### 3.1 约定和限制

-   坐标轴：地图模型为东北上坐标系，即 X 轴指向东，Y 轴指向北，Z 轴指向上。与 threejs 默认坐标不同需要注意。
-   坐标单位：角度单位为弧度，经纬度为度，3857 投影（默认）距离单位为公里，4326 投影距离单位为 0.01 度，高度单位均为公里。
-   瓦片数据：内建的地图影像和地形数据均使用图片格式（jpg、png、webp 等），支持 3854 和 4326 投影，暂不支持矢量瓦片。
-   瓦片属性：默认情况瓦片模型纹理透明属性开启，请注意渲染顺序。
-   地图清晰度：清晰度与本框架无关，取决数据源精度。
-   地图标注源：大部分国内厂商地图数据的地名、边界、道路有一定偏移，与地形无法完全匹配。
-   地图 token：大部分厂商的地图数据需要申请开发 key 才能使用，three-tile 示例包含一些厂商的 token，访问的人多了厂商会封掉它们，使用者一定要自己申请（又不要钱）避免直接使用。

### 3.2 地图创建

一般应用，可使用 TileMap 的工厂方法 create 创建地图，用 GLViewer 初始化三维场景，并将地图加入场景：

```typescript
import * as tt from "three-tile";

// 取得地图dom容器
const glContainer = document.querySelector<HTMLElement>("#map");
// 初始化三维场景(调用three-tile内置的初始化类)
const viewer = new tt.plugin.GLViewer(glContainer!);

// MapBoxToken 请更换为你自己申请的key
const MAPBOXKEY = "xxxxxxxxxx";

// mapbox 影像数据源
const mapBoxImgSource = new tt.plugin.MapBoxSource({
    token: MAPBOXKEY,
    dataType: "image",
    style: "mapbox.satellite",
});

// mapbox 高程数据源
export const mapBoxDemSource = new tt.plugin.MapBoxSource({
    token: MAPBOXKEY,
    dataType: "terrain-rgb",
    style: "mapbox.terrain-rgb",
    maxLevel: 15,
});

// 创建地图
const map = tt.TileMap.create({
    // 影像数据源
    imgSource: mapBoxImgSource,
    // 地形数据源
    demSource: mapBoxDemSource,
    // 地图投影中心经度
    centralMeridian: 90,
    // 最小缩放级别
    minLevel: 2,
    // 最大缩放级别
    maxLevel: 18,
});

// 将地图加入三维场景
viewer.scene.add(map);
```

### 3.3 三维场景

三维场景的初始化与 threejs 的没有太大区别，但以下部分需要注意：

-   为了使地图坐标系与一般人类理解一致，地图坐标方向采用东(x)北(y)上(z)方向，即地面在 x-y 平面上，海拔高度在 z 轴。而 threejs 一般平面在 xz 平面上，高度为 y 轴，所以初始化时需要使场景默认 up 指向 z 轴，可添加：Object3D.DEFAULT_UP.set(0, 0, 1) 即可。如果你的应用不能调整 up 值，可以将地图旋转-π/2° 完成。
-   地图添加光照才能显示。一般至少要有一个环境光，另外最好加一个直射光以通过地形法向量增强凹凸感。
-   场景控制器一般应用可使用 threejs 内置的 MapControls，其它控制器如 OrbitControls、FlyControls、PointerLockControls、TransformControls、FirstPersonControls 都能完美支持。

更多使用方法见 example
