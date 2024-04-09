import { Vector3 } from "three";
import * as tt from "three-tile";
import * as ms from "../mapSource";
import "./style.css";

import * as util from "../util";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap([ms.mapBoxImgSource, ms.xtCiaSource]);
// 地图中心经纬度，转换为场景坐标
const center = map.geo2pos(new Vector3(105, 34));

// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -3e3, 4e3);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

/*----------------------------------------更新罗盘----------------------------------------*/
function updateCompass(viewer: tt.plugin.GLViewer) {
    viewer.addEventListener("update", (_evt) => {
        const plane = document.querySelector<SVGElement>("#compass-plane");
        if (plane) {
            plane.style.transform = `rotateX(${viewer.controls.getPolarAngle()}rad)`;
        }
        const text = document.querySelector<HTMLSpanElement>("#compass-text");
        if (text) {
            text.style.transform = `rotate(${viewer.controls.getAzimuthalAngle()}rad)`;
        }
    });
}
updateCompass(viewer);
//-------------------------------------------
util.showLocation(viewer, map);
util.showLoadstate(map);
