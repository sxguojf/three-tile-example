import { Vector3 } from "three";
// import * as tt from "../dist/three-tile";
import TWEEN from "three/examples/jsm/libs/tween.module.js";
import * as util from "../util";
import "./style.css";
import * as ms from "../mapSource";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.geo2pos(new Vector3(105, 40));
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -1, 1e3);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

viewer.addEventListener("update", () => TWEEN.update());
//---------------------------------------------------------------

util.addFakeEarth(viewer, map);
//---------------------------------------------------------------------------------------

const reset = () => {
	const tween = new TWEEN.Tween(viewer.camera.position);
	return tween.to({ x: center.x, y: center.y - 1e3, z: 1e4 }, 500);
};
// 地图动画
const anim1 = () => {
	const tween = new TWEEN.Tween(viewer.camera.position);
	reset()
		.chain(tween.to({ y: 1000, z: 1500 }, 1000).easing(TWEEN.Easing.Back.In))
		.start();
};

const anim2 = () => {
	const tween = new TWEEN.Tween(viewer.camera.position);
	reset()
		.chain(tween.to({ y: 1000, z: 1500 }, 3000).easing(TWEEN.Easing.Bounce.Out))
		.start();
};
const anim3 = () => {
	const tween = new TWEEN.Tween(viewer.camera.position);
	reset()
		.chain(tween.to({ y: 1000, z: 1500 }, 3000).easing(TWEEN.Easing.Circular.In))
		.start();
};

const anim4 = () => {
	const tween = new TWEEN.Tween(viewer.camera.position);
	reset()
		.chain(tween.to({ y: 1000, z: 1500 }, 3000).easing(TWEEN.Easing.Elastic.In))
		.start();
};

const anim5 = () => {
	const tween = new TWEEN.Tween(map.rotation);
	reset()
		.chain(tween.to({ z: 4 * Math.PI }, 3000).easing(TWEEN.Easing.Quartic.Out))
		.start()
		.onComplete(() => {
			map.rotation.z = 0;
		});
};

anim1();

document.querySelector("#anim1")?.addEventListener("click", () => anim1());
document.querySelector("#anim2")?.addEventListener("click", () => anim2());
document.querySelector("#anim3")?.addEventListener("click", () => anim3());
document.querySelector("#anim4")?.addEventListener("click", () => anim4());
document.querySelector("#anim5")?.addEventListener("click", () => anim5());
//---------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer, map);
util.addSky(viewer);
