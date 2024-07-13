import { ArrowHelper, AxesHelper, Group, Vector3 } from "three";
import * as ms from "../mapSource";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import "./style.css";

import * as util from "../util";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 0, 8000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

/*----------------------------------------------------------------*/
// 添加标签容器
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(viewer.container.clientWidth, viewer.container.clientHeight);
labelRenderer.domElement.style.position = "absolute";
viewer.container.appendChild(labelRenderer.domElement);

viewer.addEventListener("update", () => {
	labelRenderer.render(viewer.scene, viewer.camera);
});

window.addEventListener("resize", () =>
	labelRenderer.setSize(viewer.container.clientWidth, viewer.container.clientHeight),
);

// 标签在地图中心离摄像机<10000公里才显示
viewer.controls.addEventListener("change", () => {
	labelRenderer.domElement.style.display = viewer.controls.getDistance() < 1e4 ? "inline" : "none";
});

/*-----------------------------------------------------------------------------------------*/
// 添加坐标轴
(() => {
	const axis = new AxesHelper(3000);
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
			// 经纬度转换为模型坐标
			const pos = map.geo2pos(new Vector3(x, y));
			const arrow = new ArrowHelper(dir, new Vector3(pos.x, pos.y, -1), 50);
			labelGroup.add(arrow);
		}
	}
	// 遍历箭头加上标签
	labelGroup.traverse((obj) => {
		if (obj instanceof ArrowHelper) {
			const label = document.createElement("span");
			label.className = "label";

			// 模型坐标转换为经纬度（用于验证转换）
			const lonlat = map.pos2geo(new Vector3(obj.position.x, obj.position.y));
			label.innerHTML = `${lonlat.x.toFixed(0)},${lonlat.y.toFixed(0)}`;

			// 创建css2dObj加入场景
			const css = new CSS2DObject(label);
			css.position.copy(obj.position.clone().add(new Vector3(0, 0, 10)));
			labelGroup.add(css);
		}
	});
})();

// 地图加载完成时，调整标签位置使它贴地
map.addEventListener("loading-complete", () => {
	labelGroup.traverseVisible((obj) => {
		if (obj instanceof CSS2DObject) {
			const ground = map.getLocalInfoFromWorld(map.localToWorld(obj.position.clone()));
			obj.position.setZ(ground?.location.z || 0);
		}
	});
});

/*-----------------------------------------------------------------------------------------*/
// 添加左下角坐标轴指示器
// (() => {
// 	const axis = new AxesHelper();
// 	viewer.scene.add(axis);
// 	viewer.controls.addEventListener("change", () => {
// 		viewer.camera.updateMatrixWorld();
// 		// 屏幕坐标(左下角)转标准设备坐标
// 		const scrVec = new Vector3(-0.9, -0.85, 0).unproject(viewer.camera);
// 		axis.position.copy(scrVec);
// 		// 调整大小使其不随场景缩放变化
// 		axis.scale.setScalar(axis.position.distanceTo(viewer.camera.position) / 50);
// 	});
// })();

/*-----------------------------------------------------------------------------------------*/
util.showLocation(viewer, map);
util.showLoadstate(map);
