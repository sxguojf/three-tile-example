import "./style.css";
import * as tt from "three-tile";
import * as util from "../util";
import * as ms from "../mapSource";
// threejs内置了tween库
import TWEEN from "three/examples/jsm/libs/tween.module.js";
import { Vector3 } from "three";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.geo2pos(new Vector3(108, 34));
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机坐标相对于地图中心的偏移量
const offset = new Vector3(0, -2e3, 5e3);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

/*----------------------------------------调整位置大小----------------------------------------*/

// 不动画，直接跳转定位
document.querySelector("#jump")!.addEventListener("click", () => {
	// 摄像机中心对准地图中心
	viewer.controls.target.set(center.x, center.y, 0);
	// 摄像机位置
	viewer.camera.position.set(center.x, center.y - 300, 500);
});

// 使用定时器进行地图漫游动画定位
document.querySelector("#timer")!.addEventListener("click", () => {
	// 摄像机中心对准地图中心
	viewer.controls.target.set(center.x, center.y, 0);
	const camerPos = viewer.camera.position;
	camerPos.set(center.x, center.y, 1e4);
	const timer = setInterval(() => {
		camerPos.add(new Vector3(0, -30, -200));
		if (camerPos.z < 2000) {
			clearInterval(timer);
		}
	}, 20);
});

// 使用tween进行地图漫游动画定位
document.querySelector("#tween")!.addEventListener("click", () => {
	flyTo(viewer, map, 138.732, 35.35);
});

// 复位
document.querySelector("#reset")!.addEventListener("click", () => {
	viewer.controls.reset();
});

/*---------------------------------------------------------------------------*/
// 用tween写一个简单的flyTo函数
function flyTo(viewer: tt.plugin.GLViewer, map: tt.TileMap, lon: number, lat: number) {
	// 目标位置
	const targetPos = map.geo2pos(new Vector3(lon, lat));
	viewer.controls.target.set(targetPos.x, targetPos.y, 0);

	const camera = viewer.camera;

	// 第一步动画调整摄像机位置到8km高空
	const tween1 = new TWEEN.Tween(camera.position);
	tween1.to({ x: camera.position.x, y: 0, z: 8000 }, 1000);

	// 第二步动画调整摄像机位置6km高空，并位于目标位置以南6公里
	const tween2 = new TWEEN.Tween(camera.position);
	tween2.to({ x: targetPos.x, y: targetPos.y - 10, z: 6 }, 1500).easing(TWEEN.Easing.Quartic.Out);

	// 将两个动画串起来播放
	tween1.chain(tween2);
	viewer.controls.enabled = false;
	tween1.start().onComplete(() => {
		viewer.controls.enabled = true;
	});
}
/*---------------------------------------------------------------------------*/
viewer.addEventListener("update", () => TWEEN.update());
