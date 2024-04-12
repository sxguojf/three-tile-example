import * as tt from "three-tile";
import { Vector3 } from "three";
import * as util from "../util";
import "./style.css";
import * as ms from "../mapSource";
import { WaterMarkLoader } from "./WaterMarkLoader";

//---------------------------------------------------------------
// 注册水印加载器
tt.LoaderFactory.registerMaterialLoader(new WaterMarkLoader());
// 创建水印数据源
const waterMarkSource = tt.BaseSource.create({
	attribution: "three-tile",
	dataType: "watermark",
});
//---------------------------------------------------------------

// 取得地图dom容器（div）
const glContainer = document.querySelector<HTMLElement>("#map");
// 初始化三维场景
const viewer = new tt.plugin.GLViewer(glContainer!);

// 创建地图
const map = tt.TileMap.create({
	imgSource: [ms.mapBoxImgSource, waterMarkSource], //增加水印层
	centralMeridian: 90,
	minLevel: 2,
});

// 将地图加入三维场景
viewer.scene.add(map);

// 经纬度转为场景坐标
const center = map.geo2pos(new Vector3(100, 34));
// 控制中心对准地图中心
viewer.controls.target.set(center.x, center.y, 0);
// 摄像机位置
viewer.camera.position.set(center.x, center.y - 1000, 3000);

//---------------------------------------------------------------

util.showLoadstate(map);
util.showLocation(viewer, map);
