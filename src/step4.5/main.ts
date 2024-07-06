import { Vector3 } from "three";
import * as tt from "three-tile";
import * as ms from "../mapSource";
import * as util from "../util";
import "./style.css";

// mapbox法向量数据源
const normalSource = new tt.plugin.MapBoxSource({
	token: ms.MAPBOXKEY,
	dataType: "normal",
	style: "mapbox.terrain-rgb",
	maxLevel: 15,
});

// 调试瓦片加载器
const debugSource = new tt.TileSource({ attribution: "three-tile-debug", dataType: "debug" });

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap([normalSource, debugSource], ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 34.08, 10);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);
// 地图加入viewer
viewer.scene.add(map);

// 保存控制器参数，以便复位
viewer.controls.saveState();
