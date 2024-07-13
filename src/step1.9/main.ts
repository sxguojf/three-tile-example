import { Vector3 } from "three";
import * as tt from "three-tile";
import * as ms from "../mapSource";
import "./style.css";

import * as util from "../util";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 0, 10000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

/*----------------------------------------更新罗盘----------------------------------------*/
function updateCompass(viewer: tt.plugin.GLViewer) {
	viewer.addEventListener("update", (_evt) => {
		const plane = document.querySelector<SVGElement>("#compass-plane");
		if (plane) {
			plane.style.transform = `rotateX(${viewer.controls.getPolarAngle()}rad)`;
		}
		const text = document.querySelector<HTMLSpanElement>("#compass-text");
		if (text) {
			text.style.transform = `rotate(${viewer.controls.getAzimuthalAngle()}rad)`;
		}
	});
}
updateCompass(viewer);
//-------------------------------------------
util.showLocation(viewer, map);
util.showLoadstate(map);
