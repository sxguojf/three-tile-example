import {
	BoxGeometry,
	BoxHelper,
	CanvasTexture,
	CapsuleGeometry,
	CircleGeometry,
	ConeGeometry,
	CylinderGeometry,
	DodecahedronGeometry,
	Group,
	Mesh,
	MeshPhongMaterial,
	OctahedronGeometry,
	PlaneGeometry,
	RingGeometry,
	SphereGeometry,
	TextureLoader,
	TorusGeometry,
	TorusKnotGeometry,
	Vector3,
} from "three";

import { TeapotGeometry } from "three/examples/jsm/geometries/TeapotGeometry";
import * as util from "../util";
import * as ms from "../mapSource";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, 0, 10000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);
// 地图加入viewer
viewer.scene.add(map);

/*----------------------------------------------------------------*/
// 调暗地图以突出图片
map.addEventListener("tile-loaded", (evt) => {
	evt.tile.material.forEach((mat: any) => mat.color?.set(0x888888));
});

//---------------------------------------------------------------
// 没啥好说的，把threejs的模型搬过来，放到指定位置即可

const center = map.geo2pos(centerGeo);
const geoGroup = new Group();
geoGroup.renderOrder = 10;
const mat = new MeshPhongMaterial({
	map: new TextureLoader().load("../image/test.jpg"),
	shininess: 30,
});

// 添加一个8000*8000*1000km的边框
(() => {
	const geo = new BoxGeometry(8000, 8000, 1000);
	const box = new Mesh(geo);
	box.position.set(center.x, center.y, 510);
	geoGroup.add(new BoxHelper(box));
})();

// 添加一个500*500*300km的立方体
(() => {
	const pos = map.geo2pos(new Vector3(80, 40));
	const geo = new BoxGeometry(500, 500, 300);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 150);
	geoGroup.add(mesh);
})();

// 添加一个半径为300km的圆
(() => {
	const pos = map.geo2pos(new Vector3(90, 40));
	const geo = new SphereGeometry(300);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 150);
	geoGroup.add(mesh);
})();

(() => {
	const pos = map.geo2pos(new Vector3(100, 40));
	const geo = new RingGeometry(100, 300);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 150);
	geoGroup.add(mesh);
})();

(() => {
	const pos = map.geo2pos(new Vector3(110, 40));
	const geo = new TeapotGeometry(200);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 100);
	mesh.rotateX(Math.PI / 2.0);
	geoGroup.add(mesh);
})();

(() => {
	const pos = map.geo2pos(new Vector3(120, 40));
	const geo = new ConeGeometry(300, 500);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 150);
	mesh.rotateX(Math.PI / 2.0);
	geoGroup.add(mesh);
})();

(() => {
	const pos = map.geo2pos(new Vector3(130, 40));
	const geo = new CylinderGeometry(200, 300, 300);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 150);
	mesh.rotateX(Math.PI / 2.0);
	geoGroup.add(mesh);
})();

(() => {
	const pos = map.geo2pos(new Vector3(80, 30));
	const geo = new CapsuleGeometry(150, 200);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 100);
	mesh.rotateX(Math.PI / 2.0);
	geoGroup.add(mesh);
})();

(() => {
	const pos = map.geo2pos(new Vector3(90, 30));
	const geo = new CircleGeometry(200);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 100);
	geoGroup.add(mesh);
})();

(() => {
	const pos = map.geo2pos(new Vector3(100, 30));
	const geo = new DodecahedronGeometry(200);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 100);
	geoGroup.add(mesh);
})();

(() => {
	const pos = map.geo2pos(new Vector3(110, 30));
	const geo = new TorusKnotGeometry(200, 50);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 100);
	geoGroup.add(mesh);
})();

(() => {
	const pos = map.geo2pos(new Vector3(120, 30));
	const geo = new OctahedronGeometry(200);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 100);
	geoGroup.add(mesh);
})();

(() => {
	const pos = map.geo2pos(new Vector3(130, 30));
	const geo = new TorusGeometry(200, 80);
	const mesh = new Mesh(geo, mat);
	mesh.position.set(pos.x, pos.y, 100);
	geoGroup.add(mesh);
})();

(() => {
	const geo = new PlaneGeometry(8000, 2000);
	const canvas = new OffscreenCanvas(2400, 600);
	const ctx = canvas.getContext("2d")!;
	ctx.fillStyle = "#0033ff88";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#ffffff";
	ctx.font = "bold 96px arial";
	ctx.textAlign = "center";
	ctx?.fillText("Three-Tile 几何体演示", 1200, 200);
	const mat = new MeshPhongMaterial({
		map: new CanvasTexture(canvas),
		transparent: true,
	});
	const mesh = new Mesh(geo, mat);
	mesh.position.set(center.x, center.y + 3000, 0);
	mesh.rotateX(Math.PI / 2.0);
	geoGroup.add(new BoxHelper(mesh));
	geoGroup.add(mesh);
})();

map.add(geoGroup);

//---------------------------------------------------------------
util.showLoadstate(map);
util.showLocation(viewer, map);
