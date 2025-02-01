import { Vector3 } from "three";
// import * as tt from "../dist/three-tile";
import TWEEN from "three/examples/jsm/libs/tween.module.js";
import * as ms from "../mapSource";
import * as util from "../util";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 33, 3000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

viewer.addEventListener("update", () => TWEEN.update());
//---------------------------------------------------------------

util.addFakeEarth(viewer, map);
//---------------------------------------------------------------------------------------

const reset = () => {
	const center = map.geo2world(centerGeo);
	const tween = new TWEEN.Tween(viewer.camera.position);
	return tween.to({ x: center.x, y: 1e4, z: center.y + 1e3 }, 500);
};
// 地图动画
const anim1 = () => {
	const tween = new TWEEN.Tween(viewer.camera.position);
	reset()
		.chain(tween.to({ y: 1000, z: -2000 }, 1000).easing(TWEEN.Easing.Back.In))
		.start();
};

const anim2 = () => {
	const tween = new TWEEN.Tween(viewer.camera.position);
	reset()
		.chain(tween.to({ y: 1000, z: -2000 }, 3000).easing(TWEEN.Easing.Bounce.Out))
		.start();
};
const anim3 = () => {
	const tween = new TWEEN.Tween(viewer.camera.position);
	reset()
		.chain(tween.to({ y: 1000, z: -2000 }, 3000).easing(TWEEN.Easing.Circular.In))
		.start();
};

const anim4 = () => {
	const tween = new TWEEN.Tween(viewer.camera.position);
	reset()
		.chain(tween.to({ y: 1000, z: -2000 }, 3000).easing(TWEEN.Easing.Elastic.In))
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
