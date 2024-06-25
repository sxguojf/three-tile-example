import * as tt from "three-tile";
import * as ms from "../mapSource";
import "./style.css";

/*------------------------------初始化三维环境并创建地图加入场景-------------------------------*/
// 取得地图dom容器
const glContainer = document.querySelector<HTMLElement>("#map");
// 初始化三维场景(调用three-tile内置的初始化类)
const viewer = new tt.plugin.GLViewer(glContainer!);

// MapBoxToken 请更换为你自己申请的key
const MAPBOXKEY = ms.MAPBOXKEY;

// mapbox 影像数据源
const mapBoxImgSource = new tt.plugin.MapBoxSource({
	token: MAPBOXKEY,
	dataType: "image",
	style: "mapbox.satellite",
});

// mapbox 高程数据源
export const mapBoxDemSource = new tt.plugin.MapBoxSource({
	token: MAPBOXKEY,
	dataType: "terrain-rgb",
	style: "mapbox.terrain-rgb",
	maxLevel: 15,
});

// 创建地图
const map = tt.TileMap.create({
	// 影像数据源
	imgSource: mapBoxImgSource,
	// 地形数据源
	demSource: mapBoxDemSource,
	// 地图投影中心经度
	lon0: 90,
	// 最小缩放级别
	minLevel: 2,
	// 最大缩放级别
	maxLevel: 18,
});

// 将地图加入三维场景
viewer.scene.add(map);

/*-----------------------切换数据源-------------------------------*/

document.querySelector("#mapbox")!.addEventListener("click", () => {
	map.imgSource = mapBoxImgSource;
	map.reload();
});
document.querySelector("#bing")!.addEventListener("click", () => {
	map.imgSource = new tt.plugin.BingSource();
	map.reload();
});
document.querySelector("#gd")!.addEventListener("click", () => {
	map.imgSource = [new tt.plugin.GDSource({ style: "6" }), new tt.plugin.GDSource({ style: "8" })];
	map.reload();
});
document.querySelector("#tx")!.addEventListener("click", () => {
	map.imgSource = [new tt.plugin.TXSource(), new tt.plugin.GDSource({ style: "8" })];
	map.reload();
});
