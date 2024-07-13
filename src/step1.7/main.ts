import { Matrix4, Mesh, MeshLambertMaterial, PlaneGeometry, TextureLoader, Vector2, Vector3 } from "three";
import * as ms from "../mapSource";
import "./style.css";

import * as util from "../util";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 0, 10000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

/*----------------------------------------------------------------*/
// 调暗地图以突出图片
map.addEventListener("tile-loaded", (evt) => {
	evt.tile.material.forEach((mat: any) => mat.color?.set(0x888888));
});
/*----------------------------------------------------------------*/

// 根据图片西南、东北角经纬度，计算图片的变换矩阵
const getMatrix = (sw: Vector2, ne: Vector2, alt: number) => {
	// 经纬度转换为世界坐标
	const p1 = map.geo2pos(new Vector3(sw.x, sw.y));
	const p2 = map.geo2pos(new Vector3(ne.x, ne.y));
	// 计算缩放和位置
	const scale = new Vector3(p2.x - p1.x, p2.y - p1.y, 1);
	const pos = new Vector3(p1.x + scale.x / 2, p2.y - scale.y / 2, alt);

	const matrix = new Matrix4();
	matrix.setPosition(pos);
	matrix.scale(scale);
	return matrix;
};

// 加载图片
(() => {
	const mesh = new Mesh(
		new PlaneGeometry(),
		new MeshLambertMaterial({
			map: new TextureLoader().load("../image/ACHN_QREF_20210725_100000.png"),
			transparent: true,
			// alphaTest: 0.2,
		}),
	);
	const sw = new Vector2(67, 11);
	const ne = new Vector2(140, 57);
	mesh.applyMatrix4(getMatrix(sw, ne, 6));
	mesh.renderOrder = 10;
	map.add(mesh);
})();

//-------------------------------------------
util.showLocation(viewer, map);
util.showLoadstate(map);
