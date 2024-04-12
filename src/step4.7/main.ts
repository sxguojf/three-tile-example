import { Vector3 } from "three";
import * as util from "../util";
import "./style.css";
import * as tt from "three-tile";
import * as ms from "../mapSource";
import { UVLoader } from "./UVLoader";

// 注册uv图片加载器
tt.LoaderFactory.registerMaterialLoader(new UVLoader());
// 创建uv数据源
const uvSource = new tt.BaseSource({ dataType: "uv" });

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap([uvSource], ms.arcGisDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.geo2pos(new Vector3(105, 30));
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -5e2, 1e2);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

//---------------------------------------------------------------
util.showLocation(viewer, map);
