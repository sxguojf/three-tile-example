import { Vector3 } from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import * as util from "../util";
import * as ms from "../mapSource";

import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(86.95, 27.98, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(86.81, 27.956, 9);

// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);
// 地图加入viewer
viewer.scene.add(map);
// 防止摄像机碰撞地面
util.limitCameraHeight(viewer, map);

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

gui.add(map.scale, "z", 1, 3, 0.1).name("地形拉伸倍数").listen();
gui.add(map.position, "y", -3, 3, 0.01).name("地图模型高度偏移").listen();
gui.add(map, "autoPosition").name("自动调整地图模型高度");

//--------------------------------------------------------------------
util.addMapBackground(map);
util.showLocation(viewer, map);
util.showLoadstate(map);
