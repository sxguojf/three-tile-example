import { Vector3 } from "three";
import * as tt from "three-tile";
import * as util from "../util";
import * as ms from "../mapSource";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 0, 10000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

/*-------------------------------------------------------------------------*/
// 显示地图加载进度
((map: tt.TileMap) => {
	const el = document.querySelector("#loading");
	if (el) {
		map.addEventListener("loading-start", (evt: any) => {
			el.innerHTML = "Started: " + evt.itemsLoaded + " of " + evt.itemsTotal + " files.";
		});
		map.addEventListener("loading-progress", (evt: any) => {
			el.innerHTML = "Loading: " + evt.itemsLoaded + " of " + evt.itemsTotal + " files.";
		});
		map.addEventListener("loading-complete", () => {
			el.innerHTML = "Loading complete!";
		});
		map.addEventListener("loading-error", (url) => {
			el.innerHTML = "There was an error loading " + url;
		});
	}
})(map);

/*-------------------------------------------------------------------------*/
util.showLocation(viewer, map);
