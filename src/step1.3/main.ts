import { Vector2, Vector3 } from "three";
import * as tt from "three-tile";
import * as util from "../util";
import * as ms from "../mapSource";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(
    [ms.mapBoxImgSource, ms.xtCiaSource],
    ms.mapBoxDemSource
);
// 地图中心经纬度，转换为场景坐标
const center = map.geo2pos(new Vector3(108.95, 34.2));
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
function showLocation(viewer: tt.plugin.GLViewer, map: tt.TileMap): void {
    const pointer = new Vector2();
    viewer.container.addEventListener("pointermove", (evt) => {
        // 计算屏幕坐标（-0.5到+0.5范围）
        pointer.x =
            (evt.clientX / viewer.renderer.domElement.clientWidth) * 2 - 1;
        pointer.y =
            -(evt.clientY / viewer.renderer.domElement.clientHeight) * 2 + 1;
        // 取得该坐标的信息
        const info = map.getLocalInfoFromScreen(viewer.camera, pointer);
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
function showCameraInfo(viewer: tt.plugin.GLViewer): void {
    const show = () => {
        const el = document.querySelector("#camera-info");
        if (el) {
            el.innerHTML = `摄像机:(${viewer.camera.position.x.toFixed(1)},
                               ${viewer.camera.position.y.toFixed(1)},
                               ${viewer.camera.position.z.toFixed(1)}),
                        near:${viewer.camera.near.toFixed(1)},
                        far:${viewer.camera.far.toFixed(1)},
                        方位角:${(
                            (viewer.controls.getAzimuthalAngle() * 180) /
                            Math.PI
                        ).toFixed(1)}°, 
                        俯仰角:${(
                            (viewer.controls.getPolarAngle() * 180) /
                            Math.PI
                        ).toFixed(1)}°,
                        距离:${viewer.controls.getDistance().toFixed(1)}km`;
        }
    };
    viewer.controls.addEventListener("change", show);
    show();
}

showLocation(viewer, map);
showCameraInfo(viewer);
