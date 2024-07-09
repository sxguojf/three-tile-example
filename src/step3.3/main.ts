import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
// import * as tt from "../dist/three-tile";
import {
	CubeTextureLoader,
	Group,
	Mesh,
	MeshPhongMaterial,
	SphereGeometry,
	TextureLoader,
	Vector2,
	Vector3,
} from "three";
import TWEEN, { Tween } from "three/examples/jsm/libs/tween.module";
import * as util from "../util";
import * as ms from "../mapSource";
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

// 增加瓦片视图缓冲区，使离开视野的瓦片不立即释放，以减少瓦片加过程中的空白块。当然它会增加内存占用。
map.viewerBufferSize = 3;
map.receiveShadow = true;

//-----------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
// const gun = new Mesh(
//     new CapsuleGeometry(0.1, 1, 16, 16),
//     new MeshPhongMaterial({ color: 0, shininess: 10 })
// );
// gun.position.set(0, -1, -1);
// gun.rotateX(Math.PI / 2);
// viewer.camera.add(gun);
//-----------------------------------------------------------------------------------------
const bombGroup = new Group();
map.add(bombGroup);

const ball = new Mesh(
	new SphereGeometry(),
	new MeshPhongMaterial({
		map: new TextureLoader().load("../image/test.jpg"),
		// shininess: 3,
		transparent: true,
	}),
);
ball.castShadow = true;
ball.receiveShadow = true;

//----------------------------------射击-----------------------------------------------------
viewer.container.addEventListener("click", (evt) => {
	if (!viewer.controls.isLocked || evt.button != 0) {
		return;
	}

	const camera = viewer.controls.getObject();

	// 取得目标点坐标（光标处地面坐标）
	const endPostion = map.getLocalInfoFromScreen(camera, new Vector2(0, 0))?.point;
	if (!endPostion) {
		return;
	}

	const aBall = ball.clone();
	aBall.scale.setScalar(viewer.cameraZ / 40);
	bombGroup.add(aBall);
	// 摄像机坐标转换为地图坐标
	const startPosition = camera.position.clone().applyMatrix4(map.matrixWorld.clone().invert());
	aBall.position.copy(startPosition);

	// 球飞行动画
	const delay = 1000;
	new Tween(aBall.position)
		.to({ x: endPostion.x, y: endPostion.y }, delay)
		.easing(TWEEN.Easing.Quadratic.Out)
		.start();
	new Tween(aBall.position)
		.to({ z: endPostion.z }, delay)
		.easing(TWEEN.Easing.Quadratic.In)
		.start()
		.onComplete(() => {
			setTimeout(() => {
				aBall.removeFromParent();
				aBall.geometry.dispose();
				aBall.material.dispose();
			}, 10 * delay);
		});
	new Tween(aBall.rotation).to({ x: Math.PI, y: Math.PI, z: Math.PI }, delay).start();

	// 后坐力
	camera.position.y += 2;
});

viewer.container.addEventListener("mousewheel", (evt) => {
	if (viewer.controls.isLocked) {
		if (evt instanceof WheelEvent) {
			viewer.cameraZ += evt.deltaY / 500;
		}
	}
});

viewer.addEventListener("update", () => TWEEN.update());

//--------------------------------------位置------------------------------------------------------
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
(() => {
	const gui = new GUI();

	const mapSetupFolder = gui.addFolder("环境");
	mapSetupFolder.add(viewer.scene.fog!, "density", 0.0001, 0.1, 0.0001).name("能见度系数");
	mapSetupFolder.add(viewer.ambLight, "intensity", 0.1, 2.0, 0.1).name("环境光强度");
	mapSetupFolder.add(viewer.dirLight, "intensity", 0.1, 2.0, 0.1).name("直射光强度");

	const mapPorviderFolder = gui.addFolder("地图源");
	mapPorviderFolder.add(vm, "mapbox");
	mapPorviderFolder.add(vm, "google").name("google(有偏移)");
	mapPorviderFolder.add(vm, "bing").name("bing(有偏移)");

	const locationFolder = gui.addFolder("定位");
	locationFolder.add(vm, "toXian").name("西安");
	locationFolder.add(vm, "toBeijing").name("北京");
	locationFolder.add(vm, "toXmly").name("喜马拉雅");

	const controlFolder = gui.addFolder("控制");
	controlFolder
		.add(viewer, "cameraZ", 0, 10, 0.1)
		.name("飞行海拔高度km")
		.listen()
		.onChange((value: number) => viewer.camera.position.setY(value));
	controlFolder.add(viewer, "autoForward").name("自动前进");
})();
//--------------------------------------------------------------------------------------

util.addSky(viewer as any);
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer as any, map);
