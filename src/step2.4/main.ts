import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
// import * as tt from "../dist/three-tile";
import { Mesh, MeshPhongMaterial, TorusKnotGeometry, Vector3 } from "three";
import * as ms from "../mapSource";
import * as util from "../util";

import "./style.css";

// 自定义场景初始化类
import { MyViewer } from "./MyViewer";

// 创建地图
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
//-----------------------------------------------------------------------------------------------------
// 取得地图dom容器
const glContainer = document.querySelector<HTMLElement>("#map");
// 地图中心
const center = map.geo2pos(new Vector3(86.92, 27.95));
// 使用自定义类初始化三维场景
const viewer = new MyViewer(glContainer!, new Vector3(center.x, center.y, 10));
// 将地图加入三维场景
viewer.scene.add(map);

//-----------------------------------------------------------------------------------------------------

// 瓦片默认不接受阴影，监听瓦片创建事件给瓦片添加阴影
map.addEventListener("tile-created", (evt) => {
	evt.tile.receiveShadow = true;
	evt.tile.castShadow = true;
});
//-----------------------------------------------------------------------------------------------------
const ball = (() => {
	const mesh = new Mesh(
		new TorusKnotGeometry(1, 0.3, 128, 16),
		new MeshPhongMaterial({
			color: 0x333333,
			shininess: 30,
			specular: 0xcccccc,
			emissive: 0,
		}),
	);
	mesh.position.set(center.x, center.y - 5, 8);
	mesh.castShadow = true;
	return mesh;
})();
viewer.scene.add(ball);

//--------------------------------------地图控制gui------------------------------------------------------
(() => {
	const gui = new GUI();
	const mapSetupFolder = gui.addFolder("地图控制");
	mapSetupFolder.add(map.scale, "z", 1, 10, 0.1).name("高度拉伸倍数");
	mapSetupFolder.add(map.position, "z", -1, 1, 0.01).name("高度偏移");
	mapSetupFolder.add(viewer.controls, "minPolarAngle", Math.PI / 4, Math.PI / 2, 0.1).name("最小倾角限制");
	mapSetupFolder.add(viewer.controls, "maxPolarAngle", Math.PI / 4, Math.PI / 2, 0.1).name("最大倾角限制");
	mapSetupFolder.add(viewer.controls, "enableDamping").name("惯性控制");
	mapSetupFolder.add(viewer.controls, "autoRotate").name("自动旋转");
	mapSetupFolder.add(map, "reload").name("重建瓦片树");
	const envFolder = gui.addFolder("环境设置");
	envFolder.addColor(viewer.ambLight, "color").name("环境光颜色");
	envFolder.add(viewer.ambLight, "intensity", 0, 5, 0.1).name("环境光强度");
	envFolder.addColor(viewer.dirLight, "color").name("直射光颜色");
	envFolder.add(viewer.dirLight, "intensity", 0, 5, 0.1).name("直射光强度");
})();
//--------------------------------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
