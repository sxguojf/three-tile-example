import { Vector3 } from "three";
import * as ms from "../mapSource";
import * as util from "../util";
import { MyViewer } from "./MyViewer";
import "./style.css";

import { Loader3DTiles, PointCloudColoring, Runtime } from "three-loader-3dtiles";

// 创建地图
//-----------------------------------------------------------------------------------------------------
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
map.scale.setScalar(1000);
// 地图中心
const centerPostion = map.localToWorld(map.geo2pos(new Vector3(144.94345786971536, -37.812765742471754, 0)));
const cameraPosition = map.localToWorld(map.geo2pos(new Vector3(144.94345786971536, -37.82, 2)));
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
		// url: "https://int.nyt.com/data/3dscenes/ONA360/TILESET/0731_FREEMAN_ALLEY_10M_A_36x8K__10K-PN_50P_DB/tileset_tileset.json",
		// url: "../3dtiles/qx-dyt/tileset.json",
		// url: "http://gisbg.scyttx.com.cn/gisdata/9171/tileset.json",
		url: "https://assets.ion.cesium.com/43978/tileset.json",
		viewport: getViewport(),
		options: {
			cesiumIONToken:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NjEwMjA4Ni00YmVkLTQyMjgtYjRmZS1lY2M3ZWFiMmFmNTYiLCJpZCI6MjYxMzMsImlhdCI6MTY3NTM2ODY4NX0.chGkGL6DkDNv5wYJQDMzWIvi9iDoVa27dgng_5ARDmo",
			dracoDecoderPath: "https://unpkg.com/browse/three@0.165.0/examples/jsm/libs/draco",
			basisTranscoderPath: "https://unpkg.com/browse/three@0.165.0/examples/jsm/libs/basis",
			resetTransform: true,
			// debug: true,
			// maximumScreenSpaceError: 10,
			memoryAdjustedScreenSpaceError: true,
			pointCloudColoring: PointCloudColoring.RGB,
		},
	});
	const { model, runtime } = result;

	// runtime.orientToGeocoord({
	// 	long: runtime.getTileset().cartographicCenter[0],
	// 	lat: runtime.getTileset().cartographicCenter[1],
	// 	height: runtime.getTileset().cartographicCenter[2],
	// });

	// const coords = runtime.getWebMercatorCoord({
	// 	long: runtime.getTileset().cartographicCenter[0],
	// 	lat: runtime.getTileset().cartographicCenter[1],
	// 	height: 0,
	// });

	// map.position.set(coords.x, -200, coords.y);

	model.position.copy(centerPostion);
	model.position.setY(200);
	// model.scale.setScalar(0.001);
	viewer.scene.add(model);
	viewer.scene.add(runtime.getTileBoxes());

	tilesRuntime = runtime;
	model.rotation.set(-Math.PI / 2, 0, 0);

	const long = runtime.getTileset().cartographicCenter[0];
	const lat = runtime.getTileset().cartographicCenter[1];
	const height = runtime.getTileset().cartographicCenter[2];

	console.log(long, lat, height);
}

function getViewport() {
	return {
		width: viewer.width,
		height: viewer.height,
		devicePixelRatio: window.devicePixelRatio,
	};
}

//---------------------------------------------------------------
loadTileset();
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer as any, map);
util.showAttribution(map);
util.showCameraInfo(viewer as any);
util.addSky(viewer as any);
