import { Color, Vector3 } from "three";
import * as tt from "three-tile";
import * as ms from "../mapSource";
import "./style.css";

import * as util from "../util";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(82.4, 30.0, 0.0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(82.41, 29.9, 5.0);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);
// 地图加入viewer
viewer.scene.add(map);
// 防止摄像机碰撞地面
limitCameraHeight(viewer, map);

/**
 * 限制摄像机g进入地下
 * 计算摄像机视线与近剪裁面交点的距地面高度，太低则向天顶上移相机。
 * @param viewer 视图
 * @param map  地图
 */
function limitCameraHeight(viewer: tt.plugin.GLViewer, map: tt.TileMap) {
	function getHightFromCamera() {
		// 取摄像机下方点
		const dist = viewer.camera.near;
		const checkPoint = viewer.camera.localToWorld(new Vector3(0, 0, -dist));
		// 取该点下方的地面高度
		const info = map.getLocalInfoFromWorld(checkPoint);
		if (info) {
			// 地面高度与摄像机高度差
			return map.worldToLocal(checkPoint).z - map.worldToLocal(info.point).z;
		} else {
			return 10;
		}
	}

	viewer.controls.addEventListener("change", () => {
		const h = getHightFromCamera();
		if (h < 0.2) {
			const dv = map.localToWorld(map.up.clone()).multiplyScalar(0.201 - h);
			viewer.camera.position.add(dv);
		}
	});
}

//-------------------------------------------
util.updateCompass(viewer);
util.showLocation(viewer, map);
util.showLoadstate(map);
