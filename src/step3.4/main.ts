import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
// import * as tt from "../dist/three-tile";
import {
	AnimationMixer,
	CameraHelper,
	DirectionalLight,
	Mesh,
	MeshPhongMaterial,
	PCFSoftShadowMap,
	Vector2,
	Vector3,
} from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import TWEEN, { Tween } from "three/examples/jsm/libs/tween.module";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as ms from "../mapSource";
import * as util from "../util";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(87.3, 28.3, 3);
// 摄像机经纬度高度
const cameraGeo = new Vector3(87.3, 28.2, 6);

// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

// 防止摄像机碰撞地面
util.limitCameraHeight(viewer, map);
//-----------------------------------------------------------------------------------------------------
map.receiveShadow = true;
viewer.renderer.shadowMap.enabled = true;
viewer.renderer.shadowMap.type = PCFSoftShadowMap;

viewer.ambLight.intensity = 0.5;
viewer.dirLight.intensity = 0.5;
//-----------------------------------------------------------------------------------------
const loader = new GLTFLoader();

// 加载模型并初始化
loader.loadAsync("../model/Soldier.glb").then((gltf) => {
	initSoldier(gltf);
	initBird(gltf);
	initText(gltf);
	initLight(gltf);
	initGui(gltf);
});

//-----------------------------------------------------------------------------------------
// 模型上添加灯光
const initLight = (gltf: GLTF) => {
	const model = gltf.scene;
	const light = new DirectionalLight(0xffffff, 1);
	light.target = model;
	light.position.set(5, 10, -5);
	light.castShadow = true;
	light.shadow.camera.visible = true;

	const shadowCamera = light.shadow.camera;
	shadowCamera.far = 30;
	shadowCamera.near = 0.1;
	shadowCamera.left = -2;
	shadowCamera.right = 2;
	shadowCamera.top = 2;
	shadowCamera.bottom = -2;
	model.add(light);
	// viewer.scene.add(new DirectionalLightHelper(light));
	viewer.scene.add(new CameraHelper(light.shadow.camera));
};
//-----------------------------------------------------------------------------------------
const initSoldier = (gltf: GLTF) => {
	const model = gltf.scene;
	map.add(model);
	model.traverse((child) => {
		child.receiveShadow = true;
		child.castShadow = true;
	});

	// model.rotateX(-Math.PI / 2);
	// model.rotateY(Math.PI);

	model.scale.setScalar(0.5);

	const mixer = new AnimationMixer(gltf.scene);
	mapclick(gltf, mixer);

	viewer.addEventListener("update", (evt) => {
		TWEEN.update();
		mixer.update(evt.delta);
	});
};

//-----------------------------------------------------------------------------------------
// 鸟模型
const initBird = (gltf: GLTF) => {
	const model = gltf.scene;
	loader.loadAsync("../model/Stork.glb").then((stork) => {
		const bird = stork.scene;
		bird.scale.setScalar(0.005);
		bird.rotateY(Math.PI);
		bird.traverse((child) => {
			child.castShadow = true;
		});
		bird.position.set(0, 2, 2);
		model.add(bird);
		const mixer = new AnimationMixer(bird);
		mixer.clipAction(stork.animations[0]).play();
		viewer.addEventListener("update", (evt) => {
			TWEEN.update();
			mixer.update(evt.delta);
		});
	});
};
//-----------------------------------------------------------------------------------------
const initText = (gltf: GLTF) => {
	const loader = new FontLoader();

	loader.load("../fonts/helvetiker_regular.typeface.json", function (font) {
		const geometry = new TextGeometry("Hit Points 99.9%", {
			font: font,
			size: 80,
			height: 5,
			curveSegments: 12,
			bevelEnabled: true,
			bevelThickness: 10,
			bevelSize: 8,
			bevelSegments: 5,
		});
		const materials = [
			new MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
			new MeshPhongMaterial({ color: 0xcccccc }), // side
		];
		const textMesh = new Mesh(geometry, materials);
		textMesh.geometry.center();
		textMesh.scale.setScalar(0.002);
		textMesh.position.setY(2);
		textMesh.rotation.set(0, Math.PI, 0);
		gltf.scene.add(textMesh);
	});
};
//-----------------------------------------------------------------------------------------
const mapclick = (gltf: GLTF, mixer: AnimationMixer) => {
	const model = gltf.scene;
	let tween = new Tween(model.position);
	viewer.container.addEventListener("click", (evt) => {
		const camera = viewer.camera;
		const pointer = new Vector2();
		// 鼠标点击的屏幕坐标（-0.5到+0.5范围）
		pointer.x = (evt.clientX / viewer.container.clientWidth) * 2 - 1;
		pointer.y = 1 - (evt.clientY / viewer.container.clientHeight) * 2;
		// 取得目标点坐标（光标处地面坐标）
		const endPostion = map.getLocalInfoFromScreen(camera, pointer)?.point;
		if (!endPostion) {
			return;
		}
		// 开始点与目标点距离
		tween = runTo(gltf, mixer, map.worldToLocal(endPostion.clone()), tween);
	});
};

const runTo = (gltf: GLTF, mixer: AnimationMixer, endPostion: Vector3, tween: Tween<Vector3>) => {
	const model = gltf.scene;
	const anim = gltf.animations;

	tween.stop();
	tween = new Tween(model.position);

	// 修改模型朝向
	const lookPos = map.localToWorld(endPostion.clone());
	model.lookAt(lookPos);
	model.rotateY(Math.PI);

	// 离目标点距离
	const dist = endPostion.distanceTo(model.position);
	// 距离近走过去，太远直接跳转
	if (dist < 30) {
		const speed = dist < 3 ? 3 : 1;
		tween
			.to(endPostion, dist * speed * 400)
			.start()
			.onStart(() => {
				mixer.stopAllAction();
				mixer.clipAction(anim[speed]).play();
			})
			.onUpdate((currentPositon, _elapsed) => {
				const pos = map.getLocalInfoFromWorld(map.localToWorld(currentPositon.clone()))?.point;
				if (pos) {
					model.position.copy(map.worldToLocal(pos.clone()));
				}
			})
			.onComplete(() => {
				mixer.stopAllAction();
				mixer.clipAction(anim[0]).play();
			});
	} else {
		model.position.copy(endPostion);
		mixer.stopAllAction();
	}
	return tween;
};
//--------------------------------------位置gui.vm------------------------------------------------------
const vm = {
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
	modelSize: 0.5,
};
//--------------------------------------gui------------------------------------------------------
const initGui = (gltf: GLTF) => {
	const gui = new GUI();

	const mapSetupFolder = gui.addFolder("环境");
	mapSetupFolder.add(viewer.ambLight, "intensity", 0.1, 2.0, 0.1).name("环境光强度");
	mapSetupFolder.add(viewer.dirLight, "intensity", 0.1, 2.0, 0.1).name("直射光强度");
	// mapSetupFolder
	//     .add(viewer, "cameraZ", 0, 10, 0.1)
	//     .name("观察者海拔高度km")
	//     .listen()
	//     .onChange((value: number) => viewer.camera.position.setY(value));
	const mapPorviderFolder = gui.addFolder("地图源");
	mapPorviderFolder.add(vm, "mapbox");
	mapPorviderFolder.add(vm, "google").name("google(有偏移)");
	mapPorviderFolder.add(vm, "bing").name("bing(有偏移)");

	const controlFolder = gui.addFolder("控制");
	controlFolder
		.add(vm, "modelSize", 0.01, 2, 0.01)
		.name("模型大小")
		.onChange((value: number) => gltf.scene.scale.setScalar(value));
};
//--------------------------------------------------------------------------------------
util.addSky(viewer);
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer as any, map);
