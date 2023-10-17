import { Vector2, Vector3 } from "three";
import * as tt from "../three-tile/three-tile.es";
import "./style.css";

import * as util from "../util";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(
    [util.mapboxImgSource, util.zkxtCiaSource],
    util.mapboxDemSource
);
// 地图中心经纬度，转换为场景坐标
const center = map.project(108.95, 34.2);
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机坐标相对于地图中心的偏移量
const offset = new Vector3(0, -50, 40);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

/*----------------------------------------------------------------*/
// 显示地理位置信息
function showLocation(viewer: tt.GLViewer, map: tt.TileMap): void {
    const pointer = new Vector2();
    viewer.container.addEventListener("pointermove", (evt) => {
        // 计算屏幕坐标（-0.5到+0.5范围）
        pointer.x =
            (evt.clientX / viewer.renderer.domElement.clientWidth) * 2 - 1;
        pointer.y =
            -(evt.clientY / viewer.renderer.domElement.clientHeight) * 2 + 1;
        // 取得该坐标的信息
        const info = map.getLocationFromScreen(viewer.camera, pointer);
        if (info) {
            const el = document.querySelector("#local-info")!;
            el.innerHTML = `经度:${info.location.x.toFixed(2)}°  
                            纬度:${info.location.y.toFixed(2)}°  
                            海拔:${info.location.z.toFixed(2)}km
                            距离:${info.distance.toFixed(2)}km `;
            if (info.normal) {
                el.innerHTML += `法向量:(${info.normal.x.toFixed(1)},
                ${info.normal.y.toFixed(1)},
                ${info.normal.z.toFixed(1)})(可用于坡向计算)`;
            }
        }
    });
}

// 显示摄像机及控制器信息
function showCameraInfo(viewer: tt.GLViewer): void {
    const show = () => {
        const el = document.querySelector("#camera-info")!;
        el.innerHTML = `摄像机:(${viewer.camera.position.x.toFixed(1)},
                               ${viewer.camera.position.y.toFixed(1)},
                               ${viewer.camera.position.z.toFixed(1)}),
                        near:${viewer.camera.near.toFixed(1)},
                        far:${viewer.camera.far.toFixed(1)},
                        方位角:${viewer.controls
                            .getAzimuthalAngle()
                            .toFixed(1)}°, 
                        俯仰角:${viewer.controls.getPolarAngle().toFixed(1)}°,
                        距离:${viewer.controls.getDistance().toFixed(1)}km`;
    };
    viewer.controls.addEventListener("change", show);
    show();
}

showLocation(viewer, map);
showCameraInfo(viewer);
