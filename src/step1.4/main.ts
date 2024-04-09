import { Vector3 } from "three";
import * as tt from "three-tile";
import * as util from "../util";
import * as ms from "../mapSource";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.geo2pos(new Vector3(138.732, 35.35));
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -8, 5);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

/*-------------------------------------------------------------------------*/
// 显示地图加载进度
((map: tt.TileMap) => {
    const el = document.querySelector("#loading");
    if (el) {
        map.addEventListener("loading-start", (evt) => {
            el.innerHTML =
                "Started: " +
                evt.itemsLoaded +
                " of " +
                evt.itemsTotal +
                " files.";
        });
        map.addEventListener("loading-progress", (evt) => {
            el.innerHTML =
                "Loading: " +
                evt.itemsLoaded +
                " of " +
                evt.itemsTotal +
                " files.";
        });
        map.addEventListener("loading-complete", () => {
            el.innerHTML = "Loading complete!";
        });
        map.addEventListener("loading-error", (url) => {
            el.innerHTML = "There was an error loading " + url;
        });
    }
})(map);

/*-------------------------------------------------------------------------*/
util.showLocation(viewer, map);
