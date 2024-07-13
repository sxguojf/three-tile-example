import { Vector3 } from "three";
import * as tt from "three-tile";
import * as util from "../util";
import * as ms from "../mapSource";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(100, 30, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(100, 0, 5000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

//----------------------------------------------------------------------------------

document.querySelector("#arcgis")?.addEventListener("click", () => {
	// 用Source的create方法创建数据源
	const imgSource = tt.TileSource.create({
		dataType: "image",
		attribution: "ArcGIS",
		url: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
	});
	map.imgSource = imgSource;
	map.reload();
});

document.querySelector("#gd")?.addEventListener("click", () => {
	// 创建Source类实例生成数据源（跟工厂方法一样）
	const p1 = new tt.TileSource({
		url: "https://webst04.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
		attribution: "GAODE",
		dataType: "image",
	});
	const p2 = new tt.TileSource({
		url: "https://webst04.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",
		attribution: "GAODE",
		dataType: "image",
	});
	// map.imgSource可以是一个数组
	map.imgSource = [p1, p2];
	map.reload();
});

document.querySelector("#google")?.addEventListener("click", () => {
	// 继承Source写一个新类，对bing、百度等非google瓦片方案的数据建议用这种方式。
	class GoogleSource extends tt.TileSource {
		public attribution = "Google";
		public dataType = "image";
		public getUrl(x: number, y: number, z: number): string {
			return `https://gac-geo.googlecnapps.cn/maps/vt?lyrs=y&x=${x}&y=${y}&z=${z}`;
		}
	}
	map.imgSource = new GoogleSource();
	map.reload();
});

document.querySelector("#debug")?.addEventListener("click", () => {
	map.imgSource = [ms.mapBoxImgSource, new tt.TileSource({ attribution: "TileTest", dataType: "debug" })];
	map.reload();
});

//--------------------------------------------------------------------
// 显示地图源的所有者信息
const showAttribution = () => {
	const dom = document.querySelector("#attribution");
	if (dom) {
		dom.innerHTML = "© " + map.attributions.join(" | © ");
	}
};
map.addEventListener("source-changed", () => showAttribution());
showAttribution();

//--------------------------------------------------------------------
util.addMapBackground(map);
util.showLocation(viewer, map);
util.showLoadstate(map);
