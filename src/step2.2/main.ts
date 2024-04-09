import { Vector3 } from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import * as util from "../util";
import * as ms from "../mapSource";

import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.geo2pos(new Vector3(95, 30));
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, 20, 2);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

//----------------------------------------------------------------------------------
const vm = {
	noneDem: () => {
		map.demSource = undefined;
		map.reload();
	},
	mapboxDem: () => {
		map.demSource = ms.mapBoxDemSource;
		map.reload();
	},
	mapTilerDem: () => {
		map.demSource = ms.mapTilerDemSource;
		map.reload();
	},
	zkxtDem: () => {
		map.demSource = ms.xtDemSource;
		map.reload();
	},
};
const gui = new GUI();
gui.add(vm, "noneDem").name("无地形");
gui.add(vm, "mapboxDem").name("MapBox地形瓦片(MaxLevel=15)");
gui.add(vm, "mapTilerDem").name("MapTiler地形瓦片(MaxLevel=12)");
gui.add(vm, "zkxtDem").name("中科星图地形瓦片(MaxLevel=10)");

gui.add(map.scale, "z", 1, 10, 0.1).name("地形拉伸倍数");
gui.add(viewer.controls.target, "z", -10, 10, 0.01).name("摄像机焦点高度偏移");
gui.add(map.position, "z", -1, 1, 0.01).name("地图模型高度偏移");

//--------------------------------------------------------------------
util.addMapBackground(map);
util.showLocation(viewer, map);
util.showLoadstate(map);
