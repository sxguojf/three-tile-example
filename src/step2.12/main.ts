import { Vector3 } from "three";
import * as ms from "../mapSource";
import * as util from "../util";
import { MyViewer } from "./MyViewer";
import "./style.css";

import { Loader3DTiles, PointCloudColoring, Runtime } from "../lib/three-loader-3dtiles";

// 创建地图
//-----------------------------------------------------------------------------------------------------
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
map.scale.setScalar(1000);
// 地图中心
const centerPostion = map.localToWorld(map.geo2pos(new Vector3(108, 34, 0)));
const cameraPosition = map.localToWorld(map.geo2pos(new Vector3(108, 30, 1000)));
// 使用自定义类初始化三维场景
const viewer = new MyViewer("#map", { centerPostion, cameraPosition });
// 将地图加入三维场景
viewer.scene.add(map);

//---------------------------------------------------------------
let tilesRuntime: Runtime | undefined = undefined;

viewer.addEventListener("update", (evt: any) => {
	if (tilesRuntime) {
		tilesRuntime.update(evt.delta, viewer.camera);
	}
});

//---------------------------------------------------------------

async function loadTileset() {
	const result = await Loader3DTiles.load({
		url: "https://assets.ion.cesium.com/69380/tileset.json",
		viewport: {
			width: viewer.width,
			height: viewer.height,
			devicePixelRatio: window.devicePixelRatio,
		},
		options: {
			cesiumIONToken:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NjEwMjA4Ni00YmVkLTQyMjgtYjRmZS1lY2M3ZWFiMmFmNTYiLCJpZCI6MjYxMzMsImlhdCI6MTY3NTM2ODY4NX0.chGkGL6DkDNv5wYJQDMzWIvi9iDoVa27dgng_5ARDmo",
			dracoDecoderPath: "../lib/draco",
			resetTransform: true,
			// debug: true,
			// maximumScreenSpaceError: 10,
			memoryAdjustedScreenSpaceError: true,
			pointCloudColoring: PointCloudColoring.RGB,
		},
	});
	const { model, runtime } = result;
	tilesRuntime = runtime;

	const tileset = runtime.getTileset();
	const long = tileset.cartographicCenter[0];
	const lat = tileset.cartographicCenter[1];
	const height = tileset.cartographicCenter[2];

	const center = map.localToWorld(map.geo2pos(new Vector3(long, lat, 0)));
	model.position.copy(center);
	model.position.setY(200);
	model.scale.setScalar(1.3);
	model.rotation.set(-Math.PI / 2, 0, 0);
	viewer.scene.add(model);
	viewer.scene.add(runtime.getTileBoxes());

	const cameraPosition = new Vector3(center.x - 400, 250, center.z - 200);
	viewer.camera.position.copy(cameraPosition);
	viewer.controls.target.copy(center);

	console.log(long, lat, height);
}

loadTileset();

//---------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer as any, map);
util.showAttribution(map);
util.showCameraInfo(viewer as any);
util.addSky(viewer as any);
