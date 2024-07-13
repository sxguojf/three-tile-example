import * as ms from "../mapSource";
import * as util from "../util";
import "./style.css";
// threejs内置了tween库
import { Vector3 } from "three";
import TWEEN, { Tween } from "three/examples/jsm/libs/tween.module.js";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 0, 10000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

// 保存控制器参数，以便复位
viewer.controls.saveState();

/*----------------------------------------调整位置大小----------------------------------------*/

// 不动画，直接跳转定位
document.querySelector("#jump")!.addEventListener("click", () => {
	const newCenterPos = map.localToWorld(map.geo2pos(new Vector3(107.8, 34.0, 0)));
	const newCameraPos = map.localToWorld(map.geo2pos(new Vector3(107.9, 34.0, 7.8)));
	console.log(newCameraPos, newCenterPos);

	viewer.camera.position.copy(newCameraPos);
	viewer.controls.target.copy(newCenterPos);
	viewer.controls.dispatchEvent({ type: "change", target: viewer.controls });
});

// 使用定时器进行地图漫游动画定位
document.querySelector("#timer")!.addEventListener("click", () => {
	const newCenterPos = map.localToWorld(map.geo2pos(new Vector3(110, 34, 0)));
	viewer.controls.target.copy(newCenterPos);
	const camerPos = viewer.camera.position;
	camerPos.set(centerGeo.x, centerGeo.y, 1e4);
	const timer = setInterval(() => {
		camerPos.add(new Vector3(0, -200, 0));
		if (camerPos.y < 2000) {
			clearInterval(timer);
		}
	}, 20);
});

// 使用tween进行地图漫游动画定位
document.querySelector("#tween")!.addEventListener("click", () => {
	const newCameraGeo = new Vector3(138.7168714361765, 35.293034242886165, 4.138178498736728);
	const newCenterGeo = new Vector3(138.73205716638114, 35.35132576846971, 0);
	// 摄像机经纬度，地图中心经纬度
	flyToGeo(newCameraGeo, newCenterGeo);
});

// 复位
document.querySelector("#reset")!.addEventListener("click", () => {
	viewer.controls.reset();
});

/*---------------------------------------------------------------------------*/

/**
 * 飞行到某世界坐标
 * @param cameraPos 目标摄像机世界坐标
 * @param centerPos 目标地图中心坐标
 */
const flyToPos = (cameraPos: Vector3, centerPos: Vector3) => {
	viewer.controls.target.copy(centerPos);
	const start = viewer.camera.position;
	new Tween(start)
		// 先到10000km高空
		.to({ y: 10000, z: 0 }, 500)
		// 再到目标位置
		.chain(new Tween(start).to(cameraPos))
		.start();
};

/**
 * 飞行到某地理坐标
 * @param cameraGeo 目标摄像机经纬度坐标
 * @param centerGeo 目标地图中心经纬度坐标
 */
const flyToGeo = (cameraGeo: Vector3, centerGeo: Vector3) => {
	const getPos = (geo: Vector3) => {
		return map.localToWorld(map.geo2pos(geo));
	};

	const cameraPosition = getPos(cameraGeo);
	const centerPosition = getPos(centerGeo);
	flyToPos(cameraPosition, centerPosition);
};

// const getGeo = (pos: Vector3) => {
// 	return map.pos2geo(map.worldToLocal(pos.clone()));
// };

/*---------------------------------------------------------------------------*/
viewer.addEventListener("update", () => TWEEN.update());
