import { Color, MathUtils, Vector2, Vector3 } from "three";
import * as tt from "three-tile";
import * as util from "../util";
import * as ms from "../mapSource";
import "./style.css";

/*------------------------------------创建自定义区域数据源------------------------------------*/
// 未处理半块瓦片情况，需要自行裁切瓦片

// 地图范围
const bounds: [number, number, number, number] = [
	108.60157012939453, 30.64670562744141, 108.65313291549683, 30.69008231163025,
];
// mapbox 影像数据源
const imgSource = new tt.plugin.MapBoxSource({
	token: ms.MAPBOXKEY,
	dataType: "image",
	style: "mapbox.satellite",
	bounds,
});

// mapbox 高程数据源
const demSource = new tt.plugin.MapBoxSource({
	token: ms.MAPBOXKEY,
	dataType: "terrain-rgb",
	style: "mapbox.terrain-rgb",
	maxLevel: 15,
	bounds,
});

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap([imgSource, ms.testSource], demSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108.627984, 30.66284, 0.0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108.627139, 30.64138, 3.309163);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);
// 背景色改为黑色
viewer.scene.background = new Color(0);

/*----------------------------------------------------------------*/
// 显示地理位置信息
function showLocation(viewer: tt.plugin.GLViewer, map: tt.TileMap): void {
	const pointer = new Vector2();
	viewer.container.addEventListener("pointermove", (evt) => {
		// 计算屏幕坐标（-0.5到+0.5范围）
		pointer.x = (evt.clientX / viewer.renderer.domElement.clientWidth) * 2 - 1;
		pointer.y = -(evt.clientY / viewer.renderer.domElement.clientHeight) * 2 + 1;
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
			const cameraGeo = map.pos2geo(map.worldToLocal(viewer.camera.position.clone()));
			const controlGeo = map.pos2geo(map.worldToLocal(viewer.controls.target.clone()));
			el.innerHTML = `摄像机: 世界坐标(${viewer.camera.position.x.toFixed(1)},
                               ${viewer.camera.position.y.toFixed(1)},
                               ${viewer.camera.position.z.toFixed(1)}),
                               地理坐标:(${cameraGeo.x.toFixed(6)},
                               ${cameraGeo.y.toFixed(6)},
                               ${cameraGeo.z.toFixed(6)}),<br/>                        
                        控制器: 世界坐标(${viewer.controls.target.x.toFixed(1)},
                               ${viewer.controls.target.y.toFixed(1)},
                               ${viewer.controls.target.z.toFixed(1)}),
                               地理坐标:(${controlGeo.x.toFixed(6)},
                               ${controlGeo.y.toFixed(6)},
                               ${controlGeo.z.toFixed(6)}),<br/>                        
                        地图: 方位角:${MathUtils.radToDeg(viewer.controls.getAzimuthalAngle()).toFixed(1)}°, 
                        俯仰角:${MathUtils.radToDeg(viewer.controls.getPolarAngle()).toFixed(1)}°,
                        距离:${viewer.controls.getDistance().toFixed(1)}km`;
		}
	};
	viewer.controls.addEventListener("change", show);
	show();
}

showLocation(viewer, map);
showCameraInfo(viewer);
