import * as tt from "../three-tile/three-tile.es";

import { MyLoader } from "./MyLoader";
// import * as tt from "../dist/three-tile";
import "./style.css";
import * as util from "../util";

// 取得地图dom容器（div）
const glContainer = document.querySelector<HTMLElement>("#map");
// 初始化三维场景
const viewer = new tt.GLViewer(glContainer!);

// 创建地图
const loader = new MyLoader([util.mapboxImgSource], util.mapboxDemSource);
const map = new tt.TileMap({
    loader,
    projCenterLon: 90,
    minLevel: 2,
});

// 将地图加入三维场景
viewer.scene.add(map);

// 经纬度转为场景坐标
const center = map.project(100, 34);
// 控制中心对准地图中心
viewer.controls.target.set(center.x, center.y, 0);
// 摄像机位置
viewer.camera.position.set(center.x, center.y - 1000, 3000);

//---------------------------------------------------------------
util.showLoadstate(map);
util.showLocation(viewer, map);
