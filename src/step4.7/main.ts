import { Vector3 } from "three";
// import * as tt from "../dist/three-tile";
import * as util from "../util";
import "./style.css";
import * as tt from "../../src/three-tile";
import "./MyTextureLoader";

/*----------------------------------------创建地图----------------------------------------*/

const uvSource = new tt.Source({ dataType: "uv" });

const map = util.createMap([uvSource]);
// 地图中心经纬度，转换为场景坐标
const center = map.project(105, 30);
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -1e4, 1e4);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

//---------------------------------------------------------------
util.showLoadstate(map);
util.showLocation(viewer, map);
