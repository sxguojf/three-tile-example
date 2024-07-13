import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
// import * as tt from "../dist/three-tile";
import { Vector3 } from "three";
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

// 添加地球遮罩
util.addFakeEarth(viewer, map);

// 防止摄像机碰撞地面
util.limitCameraHeight(viewer, map);
/*----------------------------------------选项gui----------------------------------------*/
const gui = new GUI();
const mapSetupFolder = gui.addFolder("地图控制");
mapSetupFolder.add(map.scale, "z", 1, 3, 0.1).name("地形拉伸倍数").listen();
mapSetupFolder.add(map.position, "y", -3, 3, 0.01).name("地图模型高度偏移").listen();
mapSetupFolder.add(map, "autoPosition").name("自动调整地图模型高度");
mapSetupFolder.add(viewer.controls, "maxPolarAngle", 0, Math.PI / 2, 0.1).name("倾角限制");
mapSetupFolder.add(viewer.controls, "enableDamping").name("惯性控制");
mapSetupFolder.add(viewer.controls, "autoRotate").name("自动旋转");
mapSetupFolder.add(map, "reload").name("重建瓦片树");

const envFolder = gui.addFolder("环境设置");
envFolder.add(viewer.ambLight, "intensity", 0, 5, 0.1).name("环境光强度");
envFolder.addColor(viewer.ambLight, "color").name("环境光颜色");
envFolder.add(viewer.dirLight, "intensity", 0, 5, 0.1).name("直射光强度");
envFolder.addColor(viewer.dirLight, "color").name("直射光光颜色");

//-----------------------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer, map);
