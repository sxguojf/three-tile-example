import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import {
	AdditiveBlending,
	BackSide,
	CubeTextureLoader,
	CylinderGeometry,
	DecrementWrapStencilOp,
	DoubleSide,
	ExtrudeGeometry,
	FrontSide,
	Group,
	IncrementWrapStencilOp,
	Mesh,
	MeshBasicMaterial,
	NotEqualStencilFunc,
	Shape,
	Vector2,
	Vector3,
	ZeroStencilOp,
} from "three";
import * as tt from "three-tile";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as ms from "../mapSource";
import * as util from "../util";
import { GLViewer } from "./GLViewer";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心
const centerPostion = map.geo2world(new Vector3(86, 28, 0));
// 摄像机坐标
const cameraPosition = map.geo2world(new Vector3(86, 27.8, 10));
// 使用自定义类初始化三维场景（打开renderer的stencil）
const viewer = new GLViewer("#map", { centerPostion, cameraPosition });
// 将地图加入三维场景
viewer.scene.add(map);
// 调暗灯光
viewer.ambLight.intensity = 0.5;
viewer.dirLight.intensity = 0.5;

//--------------------------------贴地材质------------------------------------------------
const groundMaterials = {
	backMat: new MeshBasicMaterial({
		side: BackSide,
		transparent: true,
		depthWrite: false,
		colorWrite: false,
		stencilWrite: true,
		stencilZFail: IncrementWrapStencilOp, // 背面深度测试失败+1
		fog: false,
	}),

	frontMat: new MeshBasicMaterial({
		side: FrontSide,
		transparent: true,
		depthWrite: false,
		colorWrite: false,
		stencilWrite: true,
		stencilZFail: DecrementWrapStencilOp, // 正面深度测试失败-1
		fog: false,
	}),

	surfaceMat: new MeshBasicMaterial({
		color: 0xffff00,
		opacity: 0.2,
		transparent: true,
		side: DoubleSide,
		depthTest: false,
		// depthFunc: GreaterDepth,
		stencilWrite: true,
		stencilRef: 0,
		stencilFunc: NotEqualStencilFunc,
		stencilFail: ZeroStencilOp,
		stencilZFail: ZeroStencilOp,
		stencilZPass: ZeroStencilOp,
		blending: AdditiveBlending,
		fog: false,
	}),
};

//--------------------------添加随鼠标贴地的圆----------------------------------------

const mouseGeo = new CylinderGeometry(3, 3, 10);
mouseGeo.rotateX(Math.PI / 2);
const backMouseMesh = new Mesh(mouseGeo, groundMaterials.backMat);
const frontMouseMesh = new Mesh(mouseGeo, groundMaterials.frontMat);
const surfaceMouseMesh = new Mesh(mouseGeo, groundMaterials.surfaceMat);

const mouseMesh = new Group();
mouseMesh.add(backMouseMesh, frontMouseMesh, surfaceMouseMesh);
mouseMesh.renderOrder = 14;
map.add(mouseMesh);

const pointer = new Vector2();
viewer.container.addEventListener("pointermove", (evt) => {
	// 计算屏幕坐标（-0.5到+0.5范围）
	pointer.x = (evt.clientX / viewer.renderer.domElement.clientWidth) * 2 - 1;
	pointer.y = -(evt.clientY / viewer.renderer.domElement.clientHeight) * 2 + 1;
	// 取得该坐标的信息
	const info = map.getLocalInfoFromScreen(viewer.camera, pointer);
	if (info) {
		const pos = map.worldToLocal(info.point);
		mouseMesh.position.set(pos.x, pos.y, pos.z);
	}
});

//--------------------------------添加陕西地图------------------------------------------------

function createGroundPolyGeometry(points: Vector2[]) {
	const line = new Shape(points);
	// 根据路径挤出几何体
	const geometry = new ExtrudeGeometry(line, {
		steps: points.length * 2,
		bevelEnabled: false,
		depth: 10,
	});
	return geometry;
}

function createGroundPolyMesh(lonlat: Vector2[]) {
	const geometry = createGroundPolyGeometry(lonlat);
	geometry.rotateX(Math.PI);
	geometry.scale(2.43, 2.43, 1);
	geometry.translate(690, 5200, 9);
	const { backMat, frontMat, surfaceMat } = groundMaterials;
	const backMesh = new Mesh(geometry, backMat);
	backMesh.renderOrder = 10;
	const frontMesh = new Mesh(geometry, frontMat);
	frontMesh.renderOrder = 11;
	const surfaceMesh = new Mesh(geometry, surfaceMat);
	surfaceMesh.renderOrder = 12;
	const group = new Group();
	group.add(backMesh, frontMesh, surfaceMesh);
	return group;
}

export function loadSvg(url: string, map: tt.TileMap) {
	const loader = new SVGLoader();

	loader.load(url, function (data) {
		const points = data.paths[0].subPaths[0].getPoints();
		const polyMesh = createGroundPolyMesh(points);
		polyMesh.renderOrder = 13;
		map.add(polyMesh);
	});
}

loadSvg("../image/shanxi.svg", map);

//-----------------------------------------------------------------------------

const bk = new CubeTextureLoader()
	.setPath("../image/skybox/")
	.load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
viewer.scene.background = bk;

const vm = {
	sky: true,
};

const gui = new GUI();
const envFolder = gui.addFolder("环境设置");
envFolder.add(viewer.ambLight, "intensity", 0, 5, 0.1).name("环境光强度");
envFolder.addColor(viewer.ambLight, "color").name("环境光颜色");
envFolder.add(viewer.dirLight, "intensity", 0, 5, 0.1).name("直射光强度");
envFolder.addColor(viewer.dirLight, "color").name("直射光光颜色");
envFolder.add(viewer, "fogFactor", 0.1, 3, 0.1).listen().name("雾(能见度系数)");
envFolder
	.add(vm, "sky")
	.name("云")
	.onChange((value: boolean) => {
		viewer.scene.background = value ? bk : viewer.scene.fog!.color;
	});

//-----------------------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer as any, map);
