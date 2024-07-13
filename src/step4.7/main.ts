import { Vector3 } from "three";
// import * as tt from "../dist/three-tile";
import * as util from "../util";
import * as ms from "../mapSource";
import "./style.css";
import * as tt from "three-tile";
import "./UVLoader";

/*----------------------------------------自定义类型数据源----------------------------------------*/
// 创建uv数据源
const uvSource = new tt.TileSource({ dataType: "uv" });

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(uvSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 33.9, 10);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);
//---------------------------------------------------------------
util.showLoadstate(map);
util.showLocation(viewer, map);
