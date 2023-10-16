import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
// import * as tt from "../dist/three-tile";
import { Vector3 } from "three";
import * as util from "../util";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(util.mapboxImgSource, util.mapboxDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.project(95.36, 30.3);
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(2, -10, 5);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

/*----------------------------------------选项gui----------------------------------------*/
const gui = new GUI();
const mapSetupFolder = gui.addFolder("地图控制");
mapSetupFolder.add(map.scale, "z", 1, 10, 0.1).name("地形拉伸倍数");
mapSetupFolder
    .add(viewer.controls.target, "z", -10, 10, 0.01)
    .name("地图控制高度偏移");
mapSetupFolder.add(map.position, "z", -1, 1, 0.01).name("地图模型高度偏移");
mapSetupFolder
    .add(viewer.controls, "maxPolarAngle", 0, Math.PI / 2, 0.1)
    .name("倾角限制");
mapSetupFolder.add(viewer.controls, "enableDamping").name("惯性控制");
mapSetupFolder.add(viewer.controls, "autoRotate").name("自动旋转");
mapSetupFolder.add(map.loader, "showLoading").name("标记加载中瓦片");
mapSetupFolder.add(map, "reload").name("重建瓦片树");
const envFolder = gui.addFolder("环境设置");
envFolder.add(viewer.ambLight, "intensity", 0, 1, 0.1).name("环境光强度");
envFolder.addColor(viewer.ambLight, "color").name("环境光颜色");
envFolder.add(viewer.dirLight, "intensity", 0, 1, 0.1).name("直射光强度");
envFolder.addColor(viewer.dirLight, "color").name("直射光光颜色");

//-----------------------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer, map);
