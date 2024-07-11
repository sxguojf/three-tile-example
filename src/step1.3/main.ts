import { MathUtils, Vector2, Vector3 } from "three";
import * as tt from "three-tile";
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

// 保存控制器参数，以便复位
viewer.controls.saveState();

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
			el.innerHTML = `经度:${info.location.x.toFixed(6)}°  
                            纬度:${info.location.y.toFixed(6)}°  
                            海拔:${info.location.z.toFixed(6)}km
                         	</br> `;
			el.innerHTML += `地图坐标:(${info.point.x.toFixed(6)},${info.point.x.toFixed(6)},${info.point.x.toFixed(
				6,
			)})`;

			if (info.normal) {
				el.innerHTML += `</br>法向量:(${info.normal.x.toFixed(1)},
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
                               ${viewer.camera.position.y.toFixed(6)},
                               ${viewer.camera.position.z.toFixed(6)}),
                               地理坐标:(${cameraGeo.x.toFixed(6)},
                               ${cameraGeo.y.toFixed(6)},
                               ${cameraGeo.z.toFixed(6)}),<br/>                        
                        控制器: 世界坐标(${viewer.controls.target.x.toFixed(6)},
                               ${viewer.controls.target.y.toFixed(6)},
                               ${viewer.controls.target.z.toFixed(6)}),
                               地理坐标:(${controlGeo.x.toFixed(6)},
                               ${controlGeo.y.toFixed(6)},
                               ${controlGeo.z.toFixed(6)}),<br/>                        
                        地图: 方位角:${MathUtils.radToDeg(viewer.controls.getAzimuthalAngle()).toFixed(6)}°, 
                        俯仰角:${MathUtils.radToDeg(viewer.controls.getPolarAngle()).toFixed(6)}°,
                        距离:${viewer.controls.getDistance().toFixed(6)}km`;
		}
	};
	viewer.controls.addEventListener("change", show);
	show();
}

showLocation(viewer, map);
showCameraInfo(viewer);
