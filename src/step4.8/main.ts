import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
// import * as tt from "../dist/three-tile";
import { ArrowHelper, Mesh, MeshPhongMaterial, TorusKnotGeometry, Vector3 } from "three";
import * as util from "../util";
import * as ms from "../mapSource";

import "./style.css";

// 自定义场景初始化类
import { MyViewer } from "./MyViewer";

// 创建地图
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// map.rotateX(-Math.PI / 2);
//-----------------------------------------------------------------------------------------------------
// 取得地图dom容器
const glContainer = document.querySelector<HTMLElement>("#map");
// 地图中心
const center = map.geo2pos(new Vector3(86.92, 27.95));
// 使用自定义类初始化三维场景
const viewer = new MyViewer(glContainer!, new Vector3(center.x, center.y, 10));
// 将地图加入三维场景
// viewer.scene.add(map);

//-----------------------------------------------------------------------------------------------------

// 瓦片默认不接受阴影，监听瓦片创建事件给瓦片添加阴影
// map.addEventListener("tile-created", (evt) => {
//     evt.tile.receiveShadow = true;
//     evt.tile.castShadow = true;
// });
//-----------------------------------------------------------------------------------------------------
const ball = (() => {
	const mesh = new Mesh(
		new TorusKnotGeometry(1, 0.3, 128, 16),
		new MeshPhongMaterial({
			color: 0x333333,
			shininess: 30,
			specular: 0xcccccc,
			emissive: 0,
		}),
	);
	mesh.position.set(center.x, center.y - 5, 8);
	mesh.castShadow = true;
	return mesh;
})();
map.add(ball);

//--------------------------------------地图控制gui------------------------------------------------------
(() => {
	const gui = new GUI();

	gui.add(viewer.camera, "near", 0.1, 100, 0.1).listen();
	gui.add(viewer.camera, "far", 0.1, 1e4, 0.1).listen();
	gui.add(viewer.depthMesh.material.uniforms.scale, "value", 0.0, 10, 0.000001);

	// gui.add(viewer.depthPlane, "visible");
})();
//--------------------------------------------------------------------------------------
util.showLocation(viewer as any, map);
util.addMapBackground(map);
util.showLoadstate(map);

const arrowHelper = new ArrowHelper(new Vector3(), viewer.camera.position);
arrowHelper.setLength(100);
map.add(arrowHelper);
const depthEl = document.querySelector("#depth") as HTMLDivElement;
viewer.container.addEventListener("pointermove", (evt) => {
	viewer.camera.updateMatrixWorld();
	const index = (viewer.height - evt.clientY) * viewer.width + evt.clientX;
	if (depthEl) {
		const r = viewer.depthPixelBuffer[index * 4 + 0];
		const g = viewer.depthPixelBuffer[index * 4 + 1];
		const b = viewer.depthPixelBuffer[index * 4 + 2];

		// vec.set(
		//     (evt.clientX / viewer.width) * 2 - 1,
		//     -(evt.clientY / viewer.height) * 2 + 1,
		//     // (b / 255) * 2 - 1
		//     0.5
		// );

		// // ndc坐标转换为世界坐标
		// vec.unproject(viewer.camera);

		// let cameraDirection: THREE.Vector3 = new Vector3();
		// viewer.camera.getWorldDirection(cameraDirection);

		// let distance: number =
		//     (b / 255) * (viewer.camera.far - viewer.camera.near);
		// let point: THREE.Vector3 = new Vector3();

		// point.addVectors(
		//     viewer.camera.position,
		//     cameraDirection.multiplyScalar(distance)
		// );

		// const lonlat = map.unProject(point.x, point.y);

		// depthEl.innerHTML = `${lonlat.lon.toFixed(3)},${lonlat.lat.toFixed(
		//     3
		// )},${distance.toFixed(3)}`;
		depthEl.innerHTML = `${r},${g},${b}`;
	}
});
