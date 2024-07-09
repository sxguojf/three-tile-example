import { AnimationMixer, CameraHelper, DirectionalLight, Group, Vector3 } from "three";
// import * as tt from "../dist/three-tile";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as util from "../util";
import * as ms from "../mapSource";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/

const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108.9507, 34.1915, 0.5);
// 摄像机经纬度高度
const cameraGeo = new Vector3(centerGeo.x - 0.005, centerGeo.y - 0.005, 0.6);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);
// 地图加入viewer
viewer.scene.add(map);

// 开启阴影
viewer.renderer.shadowMap.enabled = true;
map.receiveShadow = true;

//---------------------------------------------------------------
viewer.ambLight.intensity = 0.5;
viewer.dirLight.intensity = 0.5;

const cameraHelper = new CameraHelper(viewer.dirLight.shadow.camera);
viewer.scene.add(cameraHelper);

// 调整大仰角控制
viewer.controls.maxPolarAngle = Math.PI / 2.4;
viewer.controls.saveState();

//---------------------------------------------------------------
// 加载gltf模型，使用threejs示例里的建筑物模型，西安南三环找了块工地放上去
(() => {
	const dracoLoader = new DRACOLoader();
	dracoLoader.setDecoderPath("../lib/draco/gltf/");
	const loader = new GLTFLoader();
	loader.setDRACOLoader(dracoLoader);
	let model: Group;

	loader.load("../model/LittlestTokyo.glb", function (gltf) {
		model = gltf.scene;
		model.traverse((e) => {
			e.castShadow = true;
			e.receiveShadow = true;
		});
		model.castShadow = true;

		viewer.scene.add(model);
		const mixer = new AnimationMixer(model);
		mixer.clipAction(gltf.animations[0]).play();
		map.addEventListener("update", (evt) => {
			mixer.update(evt.delta);
		});
		initGui(model);
		initLight(model);
	});
})();

const initLight = (model: Group) => {
	const dirLight = new DirectionalLight(0xffffff, 3);
	dirLight.target = model;
	dirLight.position.set(500, 10000, 10000);
	dirLight.castShadow = true;
	dirLight.shadow.camera.near = 0.1;
	dirLight.shadow.camera.far = 10;
	dirLight.shadow.camera.left = -1;
	dirLight.shadow.camera.right = 1;
	dirLight.shadow.camera.top = 1;
	dirLight.shadow.camera.bottom = -1;
	dirLight.shadow.mapSize.setScalar(1024);
	model.add(dirLight);
	viewer.scene.add(new CameraHelper(dirLight.shadow.camera));
};

//---------------------------------------------------------------
// 创建模型编辑控制器
const createTransControl = (model: Group) => {
	const modelControls = new TransformControls(viewer.camera, viewer.renderer.domElement);
	modelControls.attach(model);
	modelControls.addEventListener("dragging-changed", function (event) {
		viewer.controls.enabled = !event.value;
	});
	modelControls.enabled = false;
	modelControls.visible = false;
	viewer.scene.add(modelControls);
	return modelControls;
};

/*----------------------------------------选项gui----------------------------------------*/
const initGui = (model: Group) => {
	const center = map.localToWorld(map.geo2pos(centerGeo));
	center.setY(0.55);
	// const position = map.localToWorld(map.getLocalInfoFromGeo(centerGeo)!.point);
	const vm = {
		initModel: () => {
			model.scale.setScalar(5e-4);
			model.position.copy(center);
			viewer.controls.reset();
		},
	};
	vm.initModel();

	const modelControls = createTransControl(model);

	const gui = new GUI();
	gui.add(viewer, "fogFactor", 0.1, 5, 0.1).listen().name("雾(能见度系数)");
	gui.add(modelControls, "enabled")
		.onChange((value: boolean) => (modelControls.visible = value))
		.name("模型编辑");
	gui.add(modelControls, "mode", {
		平移: "translate",
		旋转: "rotate",
		缩放: "scale",
	}).name("编辑方式");
	gui.add(vm, "initModel").name("复位");
};

//---------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer, map);
util.showAttribution(map);
util.showCameraInfo(viewer);
util.addSky(viewer);
