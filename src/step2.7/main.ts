import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
// import * as tt from "../dist/three-tile";
import { CubeTextureLoader, Vector3 } from "three";
import * as util from "../util";
import "./style.css";
import * as ms from "../mapSource";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.geo2pos(new Vector3(109, 34));
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(-5, 10, 4);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

//-----------------------------------------------------------------------------------------

const bk = new CubeTextureLoader()
	.setPath("../image/skybox/")
	.load(["skybox_nx.png", "skybox_px.png", "skybox_ny.png", "skybox_py.png", "skybox_nz.png", "skybox_pz.png"]);
// bk.colorSpace = SRGBColorSpace;
viewer.scene.background = bk;

const vm = {
	sky: true,
};

const gui = new GUI();
const envFolder = gui.addFolder("环境设置");
envFolder.add(viewer.ambLight, "intensity", 0, 1, 0.1).name("环境光强度");
envFolder.addColor(viewer.ambLight, "color").name("环境光颜色");
envFolder.add(viewer.dirLight, "intensity", 0, 1, 0.1).name("直射光强度");
envFolder.addColor(viewer.dirLight, "color").name("直射光光颜色");
envFolder.add(viewer, "fogFactor", 0.1, 3, 0.1).listen().name("雾(能见度系数)");
envFolder
	.add(vm, "sky")
	.name("云")
	.onChange((value: boolean) => {
		viewer.scene.background = value ? bk : viewer.scene.fog!.color;
	});

//-----------------------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer, map);
