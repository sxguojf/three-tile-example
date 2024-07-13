import { Vector3 } from "three";
// import * as tt from "../dist/three-tile";
import * as util from "../util";
import * as ms from "../mapSource";
import "./style.css";
import * as tt from "three-tile";
import "./MyGeometryLoader";

/*----------------------------------------自定义类型数据源----------------------------------------*/

const ballSource = new tt.TileSource({ dataType: "ball" });

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ballSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 0, 10000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);
//---------------------------------------------------------------
util.showLoadstate(map);
util.showLocation(viewer, map);
