import { Color, Vector3 } from "three";
import * as tt from "three-tile";
import * as ms from "../mapSource";
import "./style.css";

import * as util from "../util";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(100, 30, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(100, 0, 30000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);
// 地图加入viewer
viewer.scene.add(map);

/*----------------------------------------更新罗盘----------------------------------------*/

util.updateCompass(viewer);

/*----------------------------------------添加伪球体----------------------------------------*/
function createFakeEarth(viewer: tt.plugin.GLViewer, map: tt.TileMap) {
	const fakeEarth = new tt.plugin.FakeEarth(viewer.scene.fog?.color || new Color(0));
	fakeEarth.name = "fakeearth";
	fakeEarth.applyMatrix4(map.rootTile.matrix);

	viewer.controls.addEventListener("change", () => {
		// 地图距摄像机较远时再显示遮罩
		fakeEarth.visible = viewer.controls.getDistance() > 3000;
	});

	return fakeEarth;
}
map.add(createFakeEarth(viewer, map));

/*----------------------------------------动画----------------------------------------*/

// viewer.controls.target.set(center.x, center.y, 0);
// const camerPos = viewer.camera.position;
// camerPos.set(center.x, center.y, 1e4);
// const timer = setInterval(() => {
// 	camerPos.add(new Vector3(0, -30, -200));
// 	if (camerPos.z < 2000) {
// 		clearInterval(timer);
// 	}
// }, 20);

//-------------------------------------------
util.showLocation(viewer, map);
util.showLoadstate(map);
