import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import { ACESFilmicToneMapping, MathUtils, Vector3 } from "three";
import { Sky } from "three/examples/jsm/objects/Sky";
import * as ms from "../mapSource";
import * as util from "../util";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.geo2pos(new Vector3(109, 35));
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -10, 4);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

viewer.controls.maxPolarAngle = Math.PI;

viewer.scene.fog?.color.set(0x888888);
viewer.renderer.useLegacyLights = false;
viewer.renderer.toneMapping = ACESFilmicToneMapping;
viewer.renderer.toneMappingExposure = 0.7;

initSky();

//-----------------------------------------------------------------------------------------

function initSky() {
	// Add Sky
	const sky = new Sky();
	sky.material.uniforms["up"].value = new Vector3(0, 0, 1);
	sky.scale.setScalar(450000);
	viewer.scene.add(sky);

	const sun = new Vector3();

	/// GUI

	const effectController = {
		turbidity: 10,
		rayleigh: 3,
		mieCoefficient: 0.005,
		mieDirectionalG: 0.7,
		elevation: 85,
		azimuth: 15,
		exposure: viewer.renderer.toneMappingExposure,
	};

	function guiChanged() {
		const uniforms = sky.material.uniforms;
		uniforms["turbidity"].value = effectController.turbidity;
		uniforms["rayleigh"].value = effectController.rayleigh;
		uniforms["mieCoefficient"].value = effectController.mieCoefficient;
		uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;

		// const phi = MathUtils.degToRad(90 - effectController.elevation);
		// const theta = MathUtils.degToRad(effectController.azimuth);
		const phi = MathUtils.degToRad(effectController.azimuth);
		const theta = MathUtils.degToRad(effectController.elevation);
		sun.setFromSphericalCoords(1e4, phi, theta);
		uniforms["sunPosition"].value.copy(sun);
		viewer.renderer.toneMappingExposure = effectController.exposure;
		viewer.renderer.render(viewer.scene, viewer.camera);
	}

	const gui = new GUI();

	gui.add(effectController, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);
	gui.add(effectController, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);
	gui.add(effectController, "mieCoefficient", 0.0, 0.1, 0.001).onChange(guiChanged);
	gui.add(effectController, "mieDirectionalG", 0.0, 1, 0.001).onChange(guiChanged);
	gui.add(effectController, "elevation", 0, 100, 1).onChange(guiChanged);
	gui.add(effectController, "azimuth", -180, 180, 1).onChange(guiChanged);
	gui.add(effectController, "exposure", 0, 1, 0.0001).onChange(guiChanged);

	gui.addColor(viewer.scene.fog!, "color").name("FogColor");

	guiChanged();
}

//-----------------------------------------------------------------------------
util.showLoadstate(map);
util.showLocation(viewer, map);
