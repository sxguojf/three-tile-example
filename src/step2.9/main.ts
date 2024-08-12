import {
	Group,
	Mesh,
	MeshLambertMaterial,
	PCFSoftShadowMap,
	SpotLight,
	SpotLightHelper,
	TorusKnotGeometry,
	Vector3,
} from "three";
// import * as tt from "../dist/three-tile";
import { TeapotGeometry } from "three/examples/jsm/geometries/TeapotGeometry";
import TWEEN from "three/examples/jsm/libs/tween.module.js";
import * as ms from "../mapSource";
import * as util from "../util";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(105, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(105, 20, 5000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

// 调暗默认灯光使用聚光灯
viewer.ambLight.intensity = 0.2;
viewer.dirLight.intensity = 0.5;
viewer.dirLight.castShadow = true;

//---------------------------------------------------------------
// 开启阴影
map.receiveShadow = true;
viewer.renderer.shadowMap.enabled = true;
viewer.renderer.shadowMap.type = PCFSoftShadowMap;

//---------------------------------------------------------------
// 添加灯光以产生阴影
const spotLight = (() => {
	const spotLight = new SpotLight(0xffffff, 10, 5000, Math.PI / 4, 0.5, 0);
	const pos = map.localToWorld(map.geo2pos(new Vector3(105, 30)));
	spotLight.position.set(pos.x, 3000, pos.z);
	spotLight.target.position.copy(pos);
	spotLight.castShadow = true;
	return spotLight;
})();

viewer.scene.add(spotLight);
viewer.scene.add(new SpotLightHelper(spotLight));

//---------------------------------------------------------------

// viewer.scene.add(new DirectionalLightHelper(viewer.dirLight));
// viewer.scene.add(new CameraHelper(viewer.dirLight.shadow.camera));

//---------------------------------------------------------------
// 创建两个几何体
const objGroup = new Group();
const mat = new MeshLambertMaterial({ color: 0x0088aa });
const teap = (() => {
	const pos = map.localToWorld(map.geo2pos(new Vector3(100, 40)));
	const geo = new TeapotGeometry(200);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, 2000, pos.z);
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	objGroup.add(mesh);
	return mesh;
})();
const torus = (() => {
	const pos = map.localToWorld(map.geo2pos(new Vector3(110, 40)));
	const geo = new TorusKnotGeometry(200, 50);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, 2000, pos.z);
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	objGroup.add(mesh);
	return mesh;
})();

viewer.scene.add(objGroup);

//---------------------------------------------------------------
util.addFakeEarth(viewer, map);
//---------------------------------------------------------------
// 地图动画
(() => {
	const tween = new TWEEN.Tween(viewer.camera.position);
	tween.to({ y: 1000, z: 1000 }, 5000).easing(TWEEN.Easing.Bounce.Out).start(500);
})();

// 几何体动画
(() => {
	const tween1 = new TWEEN.Tween(teap.position);
	tween1.to({ y: 200 }, 1000).easing(TWEEN.Easing.Bounce.Out).start(6000);

	const tween2 = new TWEEN.Tween(torus.position);
	tween2.to({ y: 250 }, 1000).easing(TWEEN.Easing.Bounce.Out).start(7000);
})();

//---------------------------------------------------------------
// 动画选项按钮
(() => {
	const anim = document.querySelector("#anim") as HTMLInputElement;
	viewer.addEventListener("update", (evt: any) => {
		TWEEN.update();
		if (anim.checked) {
			teap.rotation.y += evt.delta;
			torus.rotation.y += evt.delta;
		}
	});
})();
//---------------------------------------------------------------
// 阴影选项按钮
(() => {
	const el = document.querySelector("#shadow") as HTMLInputElement;
	el.addEventListener("click", () => {
		viewer.renderer.shadowMap.enabled = el.checked;
		viewer.dirLight.castShadow = el.checked;
		viewer.renderer.shadowMap.needsUpdate = true;
	});
})();
//---------------------------------------------------------------
// 聚光灯选项按钮
(() => {
	const el = document.querySelector("#light") as HTMLInputElement;
	el.addEventListener("click", () => {
		spotLight.visible = el.checked;
	});
})();

//---------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer, map);
util.addSky(viewer);
