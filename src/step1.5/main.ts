import { ArrowHelper, AxesHelper, Group, Vector3 } from "three";
import {
    CSS2DObject,
    CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import "./style.css";

import * as util from "../util";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(util.mapboxImgSource, util.mapboxDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.project(95, 25);
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -2e3, 3e3);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

/*----------------------------------------------------------------*/
// 添加标签容器
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(
    viewer.container.clientWidth,
    viewer.container.clientHeight
);
labelRenderer.domElement.style.position = "absolute";
viewer.container.appendChild(labelRenderer.domElement);
viewer.addEventListener("update", () => {
    labelRenderer.render(viewer.scene, viewer.camera);
});
window.addEventListener("resize", () =>
    labelRenderer.setSize(
        viewer.container.clientWidth,
        viewer.container.clientHeight
    )
);
// 标签在地图中心离摄像机<10000公里才显示
viewer.controls.addEventListener("change", () => {
    labelRenderer.domElement.style.display =
        viewer.controls.getDistance() < 1e4 ? "inline" : "none";
});

/*-----------------------------------------------------------------------------------------*/
// 添加坐标轴
(() => {
    const axis = new AxesHelper(3000);
    axis.position.set(center.x, center.y, 10);
    viewer.scene.add(axis);
})();

/*-----------------------------------------------------------------------------------------*/
const labelGroup = new Group();
map.add(labelGroup);

// 添加标签
(() => {
    // 先画一堆地面垂直向上的箭头
    const dir = new Vector3(0, 0, 1);
    for (let x = 60; x < 140; x += 10) {
        for (let y = 0; y < 70; y += 10) {
            // 经纬度转换为场景坐标
            const pos = map.project(x, y);
            const arrow = new ArrowHelper(
                dir,
                new Vector3(pos.x, pos.y, -1),
                50
            );
            labelGroup.add(arrow);
        }
    }
    // 遍历箭头加上标签
    labelGroup.traverse((obj) => {
        if (obj instanceof ArrowHelper) {
            const label = document.createElement("span");
            label.className = "label";

            // 场景坐标转换为经纬度（用于验证转换）
            const lonlat = map.unProject(obj.position.x, obj.position.y);
            label.innerHTML = `${lonlat.lon.toFixed(0)},${lonlat.lat.toFixed(
                0
            )}`;

            // 取得该经纬度处地面信息
            label.addEventListener("mouseenter", () => {
                const info = map.getLocalInfoFromLocation(
                    lonlat.lon,
                    lonlat.lat
                );
                if (info) {
                    label.title = `场景坐标：\nx: ${info.point.x.toFixed(
                        3
                    )}\ny: ${info.point.y.toFixed(
                        3
                    )}\nz: ${info.point.z.toFixed(3)}`;
                }
            });
            // 创建css2dObj加入场景
            const css = new CSS2DObject(label);
            css.position.copy(obj.position.clone().add(new Vector3(0, 0, 10)));
            labelGroup.add(css);
        }
    });
})();

/*-----------------------------------------------------------------------------------------*/
// 添加左下角坐标轴指示器
(() => {
    const axis = new AxesHelper();
    viewer.scene.add(axis);
    viewer.controls.addEventListener("change", () => {
        viewer.camera.updateMatrixWorld();
        // 屏幕坐标(左下角)转标准设备坐标
        const scrVec = new Vector3(-0.9, -0.85, 0).unproject(viewer.camera);
        axis.position.copy(scrVec);
        // 调整大小使其不随场景缩放变化
        axis.scale.setScalar(
            axis.position.distanceTo(viewer.camera.position) / 50
        );
    });
})();

/*-----------------------------------------------------------------------------------------*/
util.showLocation(viewer, map);
util.showLoadstate(map);
