import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
// import * as tt from "../dist/three-tile";
import { Color, Vector3 } from "three";
import * as util from "../util";
import "./style.css";
import * as ms from "../mapSource";

/*----------------------------------------创建地图----------------------------------------*/

const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 20, 1000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);
// 地图加入viewer
viewer.scene.add(map);

// 添加地球遮罩
util.addFakeEarth(viewer, map);
//-----------------------------------------------------------------------------------------

const gui = new GUI();
const envFolder = gui.addFolder("环境设置");
envFolder.add(viewer.ambLight, "intensity", 0, 5, 0.1).name("环境光强度");
envFolder.addColor(viewer.ambLight, "color").name("环境光颜色");
envFolder.add(viewer.dirLight, "intensity", 0, 5, 0.1).name("直射光强度");
envFolder.addColor(viewer.dirLight, "color").name("直射光光颜色");
envFolder.add(viewer, "fogFactor", 0.1, 3, 0.1).listen().name("雾(能见度系数)");
envFolder
	.addColor(viewer.scene, "background")
	.name("天空及大气颜色")
	.onChange((value: Color) => {
		viewer.scene.fog!.color = value;
	});

//-----------------------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer, map);
