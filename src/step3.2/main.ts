import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
// import * as tt from "../dist/three-tile";
import { AnimationMixer, DirectionalLight, Group, Vector3 } from "three";
import TWEEN from "three/examples/jsm/libs/tween.module";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as ms from "../mapSource";
import * as util from "../util";
import { MyViewer } from "./MyViewer";
import "./style.css";

// 创建地图
//-----------------------------------------------------------------------------------------------------
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心
const centerPostion = map.localToWorld(map.geo2pos(new Vector3(86, 28, 3)));
const cameraPosition = map.localToWorld(map.geo2pos(new Vector3(86.45, 27.6, 15)));
// 使用自定义类初始化三维场景
const viewer = new MyViewer("#map", { centerPostion, cameraPosition });
// 将地图加入三维场景
viewer.scene.add(map);
// 启用阴影
viewer.renderer.shadowMap.enabled = true;
map.receiveShadow = true;
//-----------------------------------------------------------------------------------------------------

const loader = new GLTFLoader();
loader.loadAsync("../model/Flamingo.glb").then((gltf) => {
	const model = gltf.scene;
	model.scale.setScalar(0.01);
	viewer.scene.add(model);
	model.traverse((child) => {
		child.receiveShadow = true;
		child.castShadow = true;
	});
	initLight(model);
	intiGui(model);
	update(gltf);
});

// 添加灯光以显示模型阴影
const initLight = (model: Group) => {
	const dirLight = new DirectionalLight(0xffffff, 1.5);
	dirLight.target = model;
	dirLight.position.set(-2, 3, -10);
	dirLight.castShadow = true;
	dirLight.shadow.camera.near = 0.1;
	dirLight.shadow.camera.far = 1000;
	dirLight.shadow.camera.left = -10;
	dirLight.shadow.camera.right = 10;
	dirLight.shadow.camera.top = 10;
	dirLight.shadow.camera.bottom = -10;
	dirLight.shadow.mapSize.setScalar(1024);
	model.add(dirLight);
};

//--------------------------------------模型位置更新--------------------------------------------------
const update = (gltf: GLTF) => {
	const model = gltf.scene;
	const mixer = new AnimationMixer(model);
	mixer.clipAction(gltf.animations[0]).play();
	viewer.addEventListener("update", (evt) => {
		// 固定在摄像机前面
		model.position.set(0, -0.5, -3);
		model.applyMatrix4(viewer.camera.matrixWorld);

		// 小鸟正下方地面高度（世界坐标）
		const groundInfo = map.getLocalInfoFromWorld(model.position);
		if (groundInfo) {
			vm.modelHeight = model.position.y - groundInfo.point.y;
		}
		// 小鸟距地高度<0.2km撞死，否则动画飞行
		if (groundInfo && vm.modelHeight <= 0.2) {
			// 撞地死了
			model.rotateZ(evt.delta * Math.PI);
			viewer.controls.movementSpeed = 0;
		} else {
			fly(evt.delta);
		}

		TWEEN.update();
	});

	const fly = (delta: number) => {
		// 摄像机坐标转模型坐标
		const target = new Vector3(0, 0, -10).applyMatrix4(viewer.camera.matrixWorld);
		model.lookAt(target);
		viewer.controls.movementSpeed = 2;
		mixer.update(delta);
	};
};

//--------------------------------------位置------------------------------------------------------
const vm = {
	modelHeight: 0,
	// rotate: 0,

	mapbox: () => {
		map.imgSource = ms.mapBoxImgSource;
		map.reload();
	},
	google: () => {
		map.imgSource = ms.googleSource;
		map.reload();
	},
	bing: () => {
		map.imgSource = ms.bingSource;
		map.reload();
	},
	toXmly: () => {
		const pos = map.localToWorld(map.geo2pos(new Vector3(86, 28, 15)));
		viewer.camera.position.copy(pos);
	},
	toXian: () => {
		const pos = map.localToWorld(map.geo2pos(new Vector3(109, 34.7, 8)));
		viewer.camera.position.copy(pos);
	},
	toBeijing: () => {
		const pos = map.localToWorld(map.geo2pos(new Vector3(116.4, 40, 10)));
		viewer.camera.position.copy(pos);
	},
	toXiangGang: () => {
		const pos = map.localToWorld(map.geo2pos(new Vector3(114.18, 22.3, 5)));
		viewer.camera.position.copy(pos);
	},
};

//--------------------------------------gui------------------------------------------------------
const intiGui = (model: Group) => {
	const gui = new GUI();

	const mapSetupFolder = gui.addFolder("环境");
	mapSetupFolder.add(viewer.scene.fog!, "density", 0.0001, 0.01, 0.00001).name("能见度系数");
	mapSetupFolder.add(viewer.ambLight, "intensity", 0.1, 2.0, 0.1).name("环境光强度");
	const mapPorviderFolder = gui.addFolder("地图源");
	mapPorviderFolder.add(vm, "mapbox");
	mapPorviderFolder.add(vm, "google").name("google(有偏移)");
	mapPorviderFolder.add(vm, "bing").name("bing(有偏移)");

	const modelFolder = gui.addFolder("小鸟");
	modelFolder.add(model, "visible").name("显示");
	modelFolder.add(viewer.controls, "autoForward").name("自动前进");
	modelFolder.add(model.position, "y").listen().name("飞行海拔高度km");
	modelFolder.add(vm, "modelHeight").listen().name("飞行距地高度km");

	const locationFolder = gui.addFolder("定位");
	locationFolder.add(vm, "toXian").name("西安");
	locationFolder.add(vm, "toBeijing").name("北京");
	locationFolder.add(vm, "toXmly").name("喜马拉雅");
};
//--------------------------------------------------------------------------------------
util.addSky(viewer as any);
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer as any, map);
