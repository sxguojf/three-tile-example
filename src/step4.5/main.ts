import { Vector3 } from "three";
import * as tt from "three-tile";
import * as ms from "../mapSource";
import "./style.css";

// 取得地图dom容器（div）
const glContainer = document.querySelector<HTMLElement>("#map");
// 初始化三维场景
const viewer = new tt.plugin.GLViewer(glContainer!);

// mapbox法向量数据源
const normalSource = new tt.plugin.MapBoxSource({
	token: ms.MAPBOXKEY,
	dataType: "normal",
	style: "mapbox.terrain-rgb",
	maxLevel: 15,
});

// 调试瓦片加载器
const debugSource = new tt.BaseSource({ attribution: "three-tile-debug", dataType: "debug" });

// 创建地图
const map = tt.TileMap.create({
	imgSource: [normalSource, debugSource],
	demSource: ms.mapBoxDemSource,
	centralMeridian: 90,
	minLevel: 2,
});

// 将地图加入三维场景
viewer.scene.add(map);

// 经纬度转为场景坐标
const center = map.geo2pos(new Vector3(95, 29.65));
// 控制中心对准地图中心
viewer.controls.target.set(center.x, center.y, 0);
// 摄像机位置
viewer.camera.position.set(center.x, center.y - 20, 15);
