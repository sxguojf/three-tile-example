import { Color, Vector3 } from "three";
import * as tt from "three-tile";
import * as ms from "../mapSource";
import "./style.css";

import * as util from "../util";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap([ms.mapBoxImgSource]);
// 地图中心经纬度，转换为场景坐标
const center = map.geo2pos(new Vector3(105, 34));

// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -5e3, 1e4);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
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
