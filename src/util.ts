import {
	Color,
	CubeTextureLoader,
	Matrix4,
	Mesh,
	MeshBasicMaterial,
	PlaneGeometry,
	SRGBColorSpace,
	TextureLoader,
	Vector2,
	Vector3,
} from "three";
import * as tt from "three-tile";
import * as ms from "./mapSource";

// 创建地图
export const createMap = (imgSource: tt.ISource | tt.ISource[] = ms.mapBoxImgSource, demSource?: tt.ISource) => {
	// 创建地图对象
	const map = new tt.TileMap({
		// 影像数据源
		imgSource: imgSource,
		// 高程数据源
		demSource: demSource,
		// 地图投影中央经线经度
		lon0: 90,
		// 最小缩放级别
		minLevel: 2,
		// 最大缩放级别
		maxLevel: 20,
	});

	// 地图旋转到xz平面
	map.rotateX(-Math.PI / 2);
	return map;
};

// 创建vie
export const createViewer = (
	id: string,
	map: tt.TileMap,
	centerGeo = new Vector3(110, 30, 0),
	camersGeo = new Vector3(110, 0, 10000),
) => {
	// 地图中心转为世界坐标
	const centerPostion = map.localToWorld(map.geo2pos(centerGeo));
	// 摄像机转为世界坐标
	const cameraPosition = map.localToWorld(map.geo2pos(camersGeo));
	// 初始化场景
	const viewer = new tt.plugin.GLViewer(id, { centerPostion, cameraPosition });
	// 地图添加到场景
	viewer.scene.add(map);
	return viewer;
};

// 显示地图加载进度
export const showLoadstate = (map: tt.TileMap, id: string = "#load-state") => {
	const el = document.querySelector(id);
	if (el) {
		map.addEventListener("loading-start", (evt) => {
			el.innerHTML = "Started: " + evt.itemsLoaded + " of " + evt.itemsTotal + " files.";
		});
		map.addEventListener("loading-progress", (evt) => {
			el.innerHTML = "Loading: " + evt.itemsLoaded + " of " + evt.itemsTotal + " files.";
		});
		map.addEventListener("loading-complete", () => {
			el.innerHTML = "Loading complete!";
		});
		map.addEventListener("loading-error", (url) => {
			el.innerHTML = "There was an error loading " + url;
		});
	}
};

// 显示摄像机信息
export const showCameraInfo = (viewer: tt.plugin.GLViewer, id: string = "#camera") => {
	const el = document.querySelector(id);
	if (el) {
		viewer.controls.addEventListener("change", () => {
			el.innerHTML = `摄像机:(${viewer.camera.position.x.toFixed(2)},
                               ${viewer.camera.position.y.toFixed(2)},
                               ${viewer.camera.position.z.toFixed(2)}) 
                           焦点:(${viewer.controls.target.x.toFixed(2)},
                                ${viewer.controls.target.y.toFixed(2)},
                                ${viewer.controls.target.z.toFixed(2)}) 
                          方位角:${viewer.controls.getAzimuthalAngle().toFixed(2)}° 
                          俯仰角:${viewer.controls.getPolarAngle().toFixed(2)}°`;
		});
	}
};

// 显示地理位置信息
export const showLocation = (viewer: tt.plugin.GLViewer, map: tt.TileMap, id: string = "#location") => {
	const el = document.querySelector(id);
	if (el) {
		const pointer = new Vector2();
		viewer.container.addEventListener("pointermove", (evt) => {
			// 计算屏幕坐标（-0.5到+0.5范围）
			pointer.x = (evt.clientX / viewer.container.clientWidth) * 2 - 1;
			pointer.y = -(evt.clientY / viewer.container.clientHeight) * 2 + 1;
			// 取得该坐标的信息
			const info = map.getLocalInfoFromScreen(viewer.camera, pointer);
			if (info) {
				el.innerHTML = `经度:${info.location.x.toFixed(3)}°  
                            纬度:${info.location.y.toFixed(3)}°  
                            海拔:${(info.location.z * 1000).toFixed(1)}m
                            离摄像机距离:${info.distance.toFixed(3)}km `;
			} else {
				el.innerHTML = "";
			}
		});
	}
};

// 显示地图源的所有者信息
export const showAttribution = (map: tt.TileMap, id: string = "#attribution") => {
	const dom = document.querySelector(id);
	if (dom) {
		const show = () => (dom.innerHTML = "© " + map.attributions.join(" | © "));
		map.addEventListener("source-changed", show);
		show();
	}
};

// 显示天空盒子
export const addSky = (viewer: tt.plugin.GLViewer) => {
	viewer.scene.background = new CubeTextureLoader()
		.setPath("../image/skybox/")
		.load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
};

// 添加地图背景图
export const addMapBackground = (map: tt.TileMap) => {
	const backGround = new Mesh(
		new PlaneGeometry(),
		new MeshBasicMaterial({
			map: new TextureLoader().load("../image/tile0.png", (texture) => (texture.colorSpace = SRGBColorSpace)),
		}),
	);
	backGround.name = "background";
	backGround.material.polygonOffsetFactor = 10;
	backGround.material.polygonOffsetUnits = 1;
	backGround.material.polygonOffset = true;
	backGround.renderOrder = -1;
	backGround.translateZ(-0.1);
	backGround.applyMatrix4(map.rootTile.matrix);
	map.add(backGround);
};

export function addFakeEarth(viewer: tt.plugin.GLViewer, map: tt.TileMap) {
	const fakeEarth = new tt.plugin.FakeEarth(viewer.scene.fog?.color || new Color(0));
	fakeEarth.name = "fakeearth";
	fakeEarth.applyMatrix4(map.rootTile.matrix);

	viewer.controls.addEventListener("change", () => {
		// 地图距摄像机较远时再显示遮罩
		fakeEarth.visible = viewer.controls.getDistance() > 3000;
	});

	map.add(fakeEarth);
}

export function updateCompass(viewer: tt.plugin.GLViewer) {
	viewer.addEventListener("update", () => {
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

// 根据地理范围的西南、东北角经纬度，计算模型变换矩阵
export const getMatrixFromBounds = (map: tt.TileMap, sw: Vector2, ne: Vector2, alt: number) => {
	// 经纬度转换为场景坐标
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
