import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import { ACESFilmicToneMapping, MathUtils, Vector3 } from "three";
import { Sky } from "three/examples/jsm/objects/Sky";
import * as ms from "../mapSource";
import * as util from "../util";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(87.4, 27.8, 3);
// 摄像机经纬度高度
const cameraGeo = new Vector3(87.35, 27.7, 8);

// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

viewer.scene.fog?.color.set(0x888888);
viewer.renderer.toneMapping = ACESFilmicToneMapping;
viewer.renderer.toneMappingExposure = 0.5;

initSky();

//-----------------------------------------------------------------------------------------

function initSky() {
	// Add Sky
	const sky = new Sky();
	sky.scale.setScalar(450000);
	viewer.scene.add(sky);

	const sun = new Vector3();

	/// GUI

	const effectController = {
		turbidity: 10,
		rayleigh: 0.5,
		mieCoefficient: 0.005,
		mieDirectionalG: 0.7,
		elevation: 2,
		azimuth: 180,
		exposure: viewer.renderer.toneMappingExposure,
	};

	function guiChanged() {
		const uniforms = sky.material.uniforms;
		uniforms["turbidity"].value = effectController.turbidity;
		uniforms["rayleigh"].value = effectController.rayleigh;
		uniforms["mieCoefficient"].value = effectController.mieCoefficient;
		uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;

		const phi = MathUtils.degToRad(90 - effectController.elevation);
		const theta = MathUtils.degToRad(effectController.azimuth);

		sun.setFromSphericalCoords(1, phi, theta);

		uniforms["sunPosition"].value.copy(sun);

		viewer.renderer.toneMappingExposure = effectController.exposure;
		viewer.renderer.render(viewer.scene, viewer.camera);
	}

	const gui = new GUI();

	gui.add(effectController, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);
	gui.add(effectController, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);
	gui.add(effectController, "mieCoefficient", 0.0, 0.1, 0.001).onChange(guiChanged);
	gui.add(effectController, "mieDirectionalG", 0.0, 1, 0.001).onChange(guiChanged);
	gui.add(effectController, "elevation", 0, 90, 0.1).onChange(guiChanged);
	gui.add(effectController, "azimuth", -180, 180, 0.1).onChange(guiChanged);
	gui.add(effectController, "exposure", 0, 1, 0.0001).onChange(guiChanged);

	guiChanged();
}

//-----------------------------------------------------------------------------
util.showLoadstate(map);
util.showLocation(viewer, map);
