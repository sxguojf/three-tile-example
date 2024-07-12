import { Color, Vector3 } from "three";
import * as tt from "three-tile";
import * as ms from "../mapSource";
import "./WaterMarkLoader";
import "./style.css";

// 创建水印数据源
const watermarkSource = tt.TileSource.create({
	attribution: "three-tile",
	dataType: "watermark",
});

// 创建地图
function createMap() {
	// 影像数据源
	const imgSource = [ms.mapBoxImgSource, watermarkSource];
	// 地形数据源
	const demSource = ms.mapBoxDemSource;

	// 创建地图对象
	const map = new tt.TileMap({
		// 影像数据源
		imgSource: imgSource,
		// 高程数据源
		demSource: demSource,
		// 地图投影中央经线经度
		lon0: 90,
		// 最小缩放级别
		minLevel: 2,
		// 最大缩放级别
		maxLevel: 20,
	});

	// 地图旋转到xz平面
	map.rotateX(-Math.PI / 2);
	return map;
}

// 初始化三维场景
function initViewer(id: string, map: tt.TileMap) {
	// 地图中心坐标(经度，纬度，高度)
	const centerGeo = new Vector3(110, 35, 0);
	// 摄像坐标(经度，纬度，高度)
	const camersGeo = new Vector3(110, 34.9, 10);
	// 地图中心转为世界坐标
	const centerPostion = map.localToWorld(map.geo2pos(centerGeo));
	// 摄像机转为世界坐标
	const cameraPosition = map.localToWorld(map.geo2pos(camersGeo));
	// 初始化场景
	const viewer = new tt.plugin.GLViewer(id, { centerPostion, cameraPosition });
	// 地图添加到场景
	viewer.scene.add(map);

	viewer.scene.background = new Color(0);

	return viewer;
}

const map = createMap();
initViewer("#map", map);
