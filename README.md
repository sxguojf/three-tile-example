# **three-tile V0.4**

<p align='right'>郭江峰  hz_gjf@163.com  SXMB</p>

---

市场上开源三维 WEBGIS 框架不少，Cesium、Mapbox、ITown、three-geo、geo-three、MapLibre 等，效果炫酷功能强大。在这些地图框架使用中，逐渐有了一些自己的思路和改进方法，但很多想法涉及到底层架构，修修补补无济于事，干脆自己动手写一套。虽然暂时还不能这些 NB 的项目直接竞争，但它有其独特的设计思路和应用场景，也算是给开发者多一种选择。

Source： https://github.com/sxguojf/three-tile-example

Examples: https://sxguojf.github.io/three-tile-example

免责声明：

-   本框架不含任何地图数据，Example 中使用的地图均为直接调用第三方数据，使用中请遵循法律法规要求。
-   Example 中使用的图片和模型，均来自互联网，若涉及版权问题请通知我。

## 1 简介

three-tile 是一个基于 [threejs](https://threejs.org/) 的轻量级三维瓦片地图框架，具有使用简单、资源占用少等优点，适用于基于 threejs 开发三维地图应用。

-   three-tile 本质上是一个动态 LOD 模型，核心代码与地图是无关的，适用范围并不仅限于地图。针对地图应用，增加了地图投影和坐标转换部分，利用坐标转换函数，可以把模型、图像等叠加到模型上指定的地理坐标（经纬度或公里网），于是它就成了三维地图。（是不是跟 3DTiles 的说法很像？是的，三维瓦片地图抽象到头就是 3D 瓦片，只是给 3D 瓦片增加了地理坐标）

-   three-tile 不是一个 GIS 框架，它并不提供图层管理、空间分析等 GIS 相关功能。正因为如此，它的核心可以做的很轻量级，能轻松集成到已有项目中。

-   three-tile 参考了大量开源 GIS 的开发思路，但仅仅是思路，除了数据源定义，未 copy 一行代码，更不是 Cesium、MapBox 等套壳。



![demo1.jpeg (1744×868) (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/image/demo/demo1.jpeg)


![demo2.jpeg (1744×868) (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/image/demo/demo2.jpeg)


![demo3.jpeg (1744×868) (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/image/demo/demo3.jpeg)


![demo4.jpeg (1744×868) (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/image/demo/demo4.jpeg)


![demo5.jpeg (1744×868) (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/image/demo/demo5.jpeg)


![demo6.jpeg (1744×868) (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/image/demo/demo6.jpeg)


![demo7.jpeg (1744×868) (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/image/demo/demo7.jpeg)

![demo8.jpeg (1744×868) (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/image/demo/demo8.jpeg)

![demo9.jpeg (1744×868) (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/image/demo/demo9.jpeg)


### 1.1 优点

-   体积小：仅 60 多 k 的包（不含 example），十分小巧，开箱即用。
-   轻量级：地图以一个三维模型方式提供，不会对程序架构产生任何影响。
-   依赖少：整个框架仅有 threejs（R152）一个依赖。
-   速度快：对资源占用做极致优化，核显也能轻松跑到 60FPS。
-   使用简单：可以把地图看做一个三维模型，熟悉 threejs 基本上没有学习成本。
-   扩展性强：数据、模型、纹理、材质、渲染过程均能根据自己需要扩展。
-   适用性广：内置 mapbox、bing、arcgis、google、maptiler、中科星图、高德、天地图等主流瓦片地图支持，也可轻松扩展已读取自己的地图数据。

### 1.2 缺点和问题

-   地球不是个球：基准面以平面展示，不做成球的原因不是实现不了，而是球状地面上叠加的几何体均要根据地球曲率做相应修改，意味着 threejs 提供的几何体、材质等均不能直接使用，无法利用 threejs 生态，增加开发者者难度。
-   渲染效果略差：在性能和效果两者间，优先考虑了前者，牺牲了部分效果，相比 Cesium，地形精度略低、无法向量纹理等。
-   缩放时会出现空白块：为了减少资源占用，瓦片在离开可视范围会立即释放，进入可视范围再加载，数据加载过程中就会出现空白。解决办法是延迟释放资源，但这样做会占用大量内存，不符合开发初衷。目前可以自行给地图加一张静态影像背景图以缓解。
-   几何体无法自动贴地：这个是 three-tile 的最大短板（特别是贴地线），原计划使用射线法取地面高程后调整模型位置以贴地，无奈此法效率太低，数据大时运行出现卡顿，计划通过深度缓存计算地面高度（https://www.cnblogs.com/fuckgiser/p/6216050.html ）。目前加载几何体必须要提供模型的海拔高度。
-   可能出现瓦片抖动：地形几何误差使用了简单的经验公式，未经理论证明，不敢保证瓦片任何地形任何摄像机角度正确计算，可能会出现瓦片低模高模反复切换抖动。该问题只是有可能出现，如出现抖动需要放宽误差阈值，副作用是放宽阈值瓦片的缩放不会很及时。
-   瓦片接缝处法向量存在问题：修补瓦片接缝需要取相邻瓦片高程，目前地形数据采用 mapbox 的 Terrain-RGB v1 格式，取相邻瓦片高程很麻烦，所以瓦片接缝法向量直接取了固定值，在山区雪地（雪山）处能隐约能看到接缝纹理，影响效果。计划增加 Terrain-DEM v1 格式支持（[Mapbox Terrain-DEM v1](https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-dem-v1/)），该数据在瓦片边缘有一圈缓冲区保存相邻瓦片高程。
-   地形网格构建效率还有提升空间：地形网格使用了矩形网格，算法简单速度很快，但由于矩形网格过于简单，不能根据地形起伏程度精简顶点，有一定资源浪费。准备试试 MARTINI 算法创建地形（ https://github.com/mapbox/martini ），不知道该算法对速度影响有多大，可能需要启动 worker 来构建。
-   架构问题：早期因为偷懒，没有自己定义瓦片树结构，直接使用了 threejs 的 Mesh 进行扩展，造成核心与 threejs 严重耦合。目前代码规模已经很大，更改几乎需要推到重来。如果有必要用其它三维引擎如 Unity3d、Babylon.js 重写，会采用全新架构。

> 对普通用户，这些缺点并不会对你的应用造成多大影响，之所以都说出来是希望有更多人参与改进，也避免使用者采坑。

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

暂未上传 npmjs

---

## 3 使用

和一般 threejs 应用一样，初始化 threejs 三维场景后，将地图模型加入场景即可完成地图的显示。

为了便于使用，three-tile 还提供一个 GLViewer 类，它封装了场景初始化过程，一般可直接使用它进行初始化。但如果你熟悉 threejs，最好自己写，跟普通 threejs 程序并无太大差异。

### 3.1 约定和限制

-   坐标轴：地图模型为东北上坐标系，即 X 轴指向东，Y 轴指向北，Z 轴指向上。与 threejs 默认坐标不同需要注意。
-   坐标单位：角度单位为弧度，经纬度为度，3857 投影（默认）距离单位为公里，4326 投影距离单位为 0.01 度，高度单位均为公里。
-   瓦片数据：内建地图影像和地形数据均使用图片格式（jpg、png、webp 等），支持 3854 和 4326 投影，暂不支持矢量瓦片。
-   瓦片属性：默认情况瓦片模型纹理透明属性开启，请注意渲染顺序。
-   地图清晰度：清晰度与本框架无关，取决数据源精度。
-   地图标注源：大部分国内厂商地图数据的地名、边界、道路有偏移，与地形无法完全匹配。
-   地图 token：大部分厂商的地图数据需要申请开发 key 才能使用，three-tile 示例包含一些厂商的 token，访问的人多了厂商会封掉它们，使用者一定要自己申请（又不要钱）避免直接使用。

### 3.2 地图创建

一般应用，可使用 TileMap 的工厂方法 create 创建地图，用 GLViewer 初始化三维场景，并将地图加入场景：

```typescript
import * as tt from "three-tile";

// MapBoxToken 请更换为你自己申请的key
const MAPBOXKEY = "xxxxxxxxxxxxxx";
// 创建地图
const map = tt.TileMap.create({
    // 影像数据源（可以是一个数组，表示多层影像叠加）
    imgSource: new tt.MapBoxImgSource(MAPBOXKEY),
    // 地形数据源
    demSource: new tt.MapBoxDemSource(MAPBOXKEY),
    // 地图投影中心经度
    projCenterLon: 90,
    // 最小缩放级别
    minLevel: 2,
    // 最大缩放级别
    maxLevel: 18,
});

// 取得地图dom容器
const glContainer = document.querySelector<HTMLElement>("#map");
// 初始化三维场景(调用three-tile内置的初始化类)
const viewer = new tt.GLViewer(glContainer!);

// 将地图加入三维场景
viewer.scene.add(map);
```

也可使用TileMap的构造函数创建地图实例，构造函数可传入地图数据加载器。可用编写自己的加载器实现瓦片的创建，以完全控制瓦片模型的创建过程。

```typescript
import * as tt from "three-tile";

// MapBoxToken 请更换为你自己申请的key
const MAPBOXKEY = "xxxxxxxxxxxxxx";

// 自定义地图数据加载器
// const loader = new MyLoader(
//    [new tt.MapBoxImgSource(MAPBOXKEY)],
//    new tt.MapBoxDemSource(MAPBOXKEY)
//);

// 内置地图数据加载器
const loader = new tt.TileLoader(
    [new tt.MapBoxImgSource(MAPBOXKEY)],
    new tt.MapBoxDemSource(MAPBOXKEY)
);

// 创建地图
const map = new tt.TileMap({
    // 瓦片加载器
    loader,
    // 地图投影中心经度
    projCenterLon: 90,
    // 最小缩放级别
    minLevel: 2,
    // 最大缩放级别
    maxLevel: 18,
});

// 取得地图dom容器（div）
const glContainer = document.querySelector<HTMLElement>("#map");
// 初始化三维场景
const viewer = new tt.GLViewer(glContainer!);

// 将地图加入三维场景
viewer.scene.add(map);
```

关于自定义加载器，可见：example/4

### 3.3 三维场景

三维场景的初始化与threejs的没有太大区别，但以下部分需要注意：

* 为了使地图坐标系与一般人类理解一致，地图模型的坐标方向采用东(x)北(y)上(z)方向，即地面在x-y平面上，海拔高度在z轴。而threejs一般平面在xz平面上，高度为y轴，所以初始化时需要将默认up指向z轴，添加：Object3D.DEFAULT_UP.set(0, 0, 1) 即可。如果你的应用不能调整up值，那么就要将地图旋转-π/2°。
* 地图添加光照才能显示，无光照地图将不能显示。一般至少要有一个环境光，另外最好加一个直射光以通过地形法向量体现凹凸感。
* 场景控制器一般应用可使用threejs内置的MapControls，其它控制器如OrbitControls、FlyControls、PointerLockControls、TransformControls、FirstPersonControls都能完美支持。

更多使用方法见 example

---

## 4 架构

### 4.1 代码结构

three-tile 参考了 threejs 的代码组织结构，即模型+几何体+材质+纹理+加载器的套路，并且充分利用 typescript 优势，将这几部分用接口进行组合，各部分均可独立替换，从而具有良好的扩展性。

框架主要包含：瓦片 tile、数据源 source、加载器 loader、几何体 geometry、材质 material、地图 map 等六大部分，各部分相对独立，保存在不同的文件夹，使用接口进行解耦：

### 4.2 瓦片 tile

瓦片地图顾名思义，就是地图由多个图块拼接组成，每块瓦片就是一个 Mesh。three-tile 使用四叉树结构保存这些 Mesh。在的渲染过程中。根据瓦片离摄像机距离，动态创建和销毁，按需加载瓦片数据。

瓦片是 three-tile 的核心，实现了一个动态 LOD 模型，其它功能均是围绕其上的扩展。

### 4.3 数据源 source

数据源用来定义地图服务商的数据 url 规则，还包括版权信息、范围、层级、投影、数据类型等元数据。three-tile 内置了部分主流地图服务商的数据源，用户也可根据厂商提供的文档自定义新的地图数据源。

数据源包含一个 dataType 属性，它表示地图数据类型，地图请求数据时会根据此属性使用与之对应的加载器下载、解析瓦片。

### 4.4 加载器 loader

加载器实现瓦片数据的下载、解析以及瓦片几何体、纹理、材质的创建，内部分为几何体加载器和纹理加载器，分别用于地形和影像数据的下载解析生成，地图的渲染质量完全取决于他们。如果对效果不满意或想实现一些特效，可以增加或替换自定义加载器。

加载器内置一个 TileFactory 工厂类，用户可将自定义几何体、纹理加载器注册到瓦片工厂，地图请求数据时，会根据数据源的 dataType 属性，自动从工厂类取得相应的加载器下载解析数据。

### 4.5 几何体 geometry

几何体为瓦片的 geometry，加载器内部使用它创建地形几何体。

### 4.6 材质 material

材质为瓦片的 material，加载器内部使用它来处理影像数据创建材质。

### 4.4 地图 map

为了便于地图应用，three-tile 将瓦片、加载器、数据源进一步封装，增加投影类和地理坐标转换、拾取等函数，形成 一个 TileMap 类，该类继承于 Mesh，普通开发者仅需使用 TileMap 类即可完成绝大部分地图操作。

### 4.5 整体流程

瓦片处理包括两个相对独立的过程：

-   瓦片树更新：在每帧渲染过程中，根据摄像机与可视区域内每块瓦片的距离进行 LOD。
-   瓦片数据加载：遍历树上每块瓦片，使用加载器加载地图数据并创建几何体和材质。

地图本质上是一个 LOD 模型，该模型使用四叉树结构管理。为了减少数据下载处理量，数据采用了懒加载方式（延迟加载），在渲染过程中，先用 LOD 对瓦片树进行更新，待瓦片树稳定后（不在增加或删除瓦片），再加载可视瓦片数据。在瓦片离开可视化范围或缩放级别后，立即进行销毁并释放资源（非隐藏），此举能大幅减少内存消耗，但也会造成新进入可视范围的瓦片在数据加载完成前为空白，为了性能牺牲了这部分效果。

### 4.6 外围

其它三维效果均使用 threejs 自有功能实现，如三维场景、摄像机、渲染器、灯光、控制器、模型等，地图的使用与 threejs 的三维模型无太大差异，利用 threejs 生态，可实现 threejs所有功能在三维地图上的应用。如可以使用 threejs 的各种控制器对地图模型进行操作，向地图上添加元素，甚至能实现基于真实三维地形的似游戏开发（见 example 3.1-3 ）。

---

## 5 扩展

three-tile 各部分功能界定非常清晰，自身就是以扩展方式开发的，开发者可以按照同样的方法扩展功能。

### 5.1 扩展方式

为了适应不同开发习惯的，可采用 接口式扩展、继承式扩展、工厂方法式扩展、装饰器扩展等方式。

-   工厂方法扩展：不喜欢面向对象的同学，可直接使用工厂方法创建对象，将参数传入方法即可，简单但功能有限。如扩展数据源，可将瓦片 url 模板传入 Source.create()即可。
-   接口式扩展：如果你对内置的类用着十分不爽，可以自己实现其接口，完全控制业务逻辑，但需要自己实现全部属性方法比较麻烦。如扩展数据源，可以自己实现 ISource 接口，重写各属性和方法。
-   继承式扩展：如果你即想完全控制，又想偷懒少写代码，可以继承内置的基类，仅重写有特殊需求的属性和方法，效果和代码复用较均衡，但有面向对象继承的高耦合缺点。如扩展数据源，可继承 Source，仅重写 getUrl 函数，实现自己的 url 生成逻辑。
-   装饰器扩展：装饰器本身与 three-tile 无关，属于设计模式概念，是目前比较流行的方式。创建一个类实现相应接口，属性和方法直接调用其内部对象属性方法，并添加自己的逻辑。装饰器可以有效避免继承的高耦合，同时具有较高的代码复用性。JavaScript 的装饰器目前还处在提案阶段，在 typescript 中也属于实验性内容，three-tile 暂不直接支持，但可通过传统设计模式方式实现。如扩展数据源，可创建一个类实现 ISource 接口，内部添加一个 Source 实例作为其属性，ISource 接口上各属性方法可调用它，并添加或重写自己的逻辑。待 JavaScript 正式支持装饰器后，会给它增加装饰器支持，届时扩展数据源仅需给数据源类前增加@xxx 即可。

本人是面向对象和设计模式的极度推崇者，代码结构组合优先，尽量避免继承。受不了近几年一些一知半解者对面向对象的盲目批判，所以同时以接口、抽象类、组合多种模式解耦，用户可以选择自己喜好的方式扩展。

### 5.2 数据源扩展

数据源对象的功能是根据瓦片坐标计算瓦片数据的 ur，加载器会调用数据源根据瓦片坐标取得数据 url。

three-tile 内置了 Mapbox、google、arcgis、中科星图、高德等主流地图数据源。如果你想扩展支持新的地图数据，仅需要提供一个地图瓦片 url 模板即可，模板与 Cesium、leaflet 等格式一致，直接拿来用即可。瓦片默认坐标使用[Google tile scheme](http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/)，部分瓦片未采用 google 坐标方案的瓦片需要换算（如 bing、百度等），url 模板可以是一个函数，将换算过程放进此函数即可。

数据源除 url 生成外，还包含一些元数据信息，如数据版权、地图级别、投影方式、范围等，比较重要的是 dataType 属性，为数据类型标志，系统会根据此标志决定采用哪种加载器下载、解析地图数据。

见 example2.1

### 5.3 加载器扩展

加载器的功能是下载、解析地图数据，并生成瓦片几何体和材质，即地形和图像。加载器有三类：

-   瓦片几何体加载器：下载地形数据，并根据地形生成瓦片几何体。
-   瓦片纹理加载器：下载影像数据，并根据影像生成瓦片纹理。
-   瓦片数据加载器：将几何体加载器、纹理加载器封装合成，返回瓦片几何体和材质。

threejs 内置了基于着色器、基于 Canvas、基于图像的的纹理加载器，以及矩形网格几何体加载器。默认使用图像纹理和矩形网格几何体。

目前主流的瓦片数据均以图像方式提供，但还有一些瓦片数据使用其它数据格式，如 MapBox 的矢量瓦片(\*.mvt)，Cesium 的 heightMap（\*.hgt）和 Quantized-Mesh(\*.terrain)，目前尚不支持。你可以通过编写加载器的方式来扩展。

three-tile 内置一个加载器工厂类，你可以将你自己实现的加载器注册到工厂，请求数据时会根据数据源的 dataType 属性，动态决定使用哪个加载器加载数据并生成几何体和材质。

见 example4.1-4

### 5.4 地图投影扩展

地图投影作用主要是做地图坐标转换，即经纬度与场景坐标间的转换。

three-tile 内置了兰布托和经纬度两种投影支持，与 Cesium 等不同的是，three-tile 的投影直接会改变地图外观，而 Cesium 使用不同投影数据外观一直保持一个球，它内部会对瓦片数据做投影后进行渲染。

three-tile 的投影取决于数据源，使用哪种投影的数据源地图就是哪种投影，如天地图提供兰布托和经纬度两种投影的地图。目前市面上也就这两种投影的地图数据，甚至没有经纬度投影的地形数据，所有对它进行扩展意义不大。

由于将地球展开成一个平面，那么就存在一个地图中心经度的问题。默认会以 0° 为中心，但 0° 为中心你关注的区域可能到地图边缘或者被分割为两半，所以给地图增加了投影中心经度属性，加载器在请求瓦片 url 时会根据地图中心调整瓦片坐标。

## 6 后记

 three-tile最初的目的仅是想给我的基于threejs的应用加上底图。

三维地图，最强大的非cesium莫属，但很多时候我只是想要个底图而已，cesium作为重量级框架占用较多资源，拖慢了真正的数据可视化引用，并且cesium对三维操作封装很深，一些特殊效果实现难度较大，试了其它一些三维GIS框架也不尽人意，干脆自己写一套吧。

三维地图在理论上已经很成熟，GoogleEarth、WorldWind已经推出十多年，但理论是理论，真正自己从头实现一套难度还是挺大，一堆的坑等着你填。特别是运行效率，三维瓦片地图由于数据量极大，要做到渲染效果好，并且占用资源少运行速度快，难度很大。





