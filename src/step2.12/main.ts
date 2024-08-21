import { Loader3DTiles, Runtime, Shading } from "three-loader-3dtiles";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import {
	Clock,
	GridHelper,
	LinearSRGBColorSpace,
	MeshLambertMaterial,
	PerspectiveCamera,
	Scene,
	Vector2,
	WebGLRenderer,
} from "three";

import "./style.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const scene = new Scene();

const gridHelper = new GridHelper(1000, 10);
scene.add(gridHelper);

const camera = new PerspectiveCamera();
camera.position.set(0, 0, 100);

const renderer = new WebGLRenderer();
renderer.outputColorSpace = LinearSRGBColorSpace;

const clock = new Clock();
const controls = new OrbitControls(camera, renderer.domElement);

const canvasParent = document.querySelector("#map")!;

canvasParent.appendChild(renderer.domElement);

let tilesRuntime: Runtime | undefined = undefined;

const viewportSize = new Vector2();

async function loadTileset() {
	const result = await Loader3DTiles.load({
		// url: "https://int.nyt.com/data/3dscenes/ONA360/TILESET/0731_FREEMAN_ALLEY_10M_A_36x8K__10K-PN_50P_DB/tileset_tileset.json",
		url: "../3dtiles/qx-dyt/tileset.json",
		// url: "http://gisbg.scyttx.com.cn/gisdata/9171/tileset.json",
		viewport: getViewport(),
		options: {
			dracoDecoderPath: "https://unpkg.com/browse/three@0.165.0/examples/jsm/libs/draco",
			basisTranscoderPath: "https://unpkg.com/browse/three@0.165.0/examples/jsm/libs/basis",
			resetTransform: true,
			debug: true,
			// gltfLoader: new GLTFLoader(),
			shading: Shading.ShadedTexture,
			wireframe: true,
		},
	});
	const { model, runtime } = result;
	scene.add(model);
	scene.add(runtime.getTileBoxes());

	tilesRuntime = runtime;

	model.rotation.set(-Math.PI / 2, 0, 0);
}

function render() {
	const dt = clock.getDelta();
	controls.update();
	if (tilesRuntime) {
		tilesRuntime.update(dt, camera);
	}
	renderer.render(scene, camera);
	window.requestAnimationFrame(render);
}

function onWindowResize() {
	renderer.setSize(canvasParent.clientWidth, canvasParent.clientHeight);
	tilesRuntime?.setViewport(getViewport());
	camera.aspect = canvasParent.clientWidth / canvasParent.clientHeight;
	camera.updateProjectionMatrix();
}
window.addEventListener("resize", onWindowResize);

function getViewport() {
	return {
		width: canvasParent.clientWidth,
		height: canvasParent.clientHeight,
		devicePixelRatio: window.devicePixelRatio,
	};
}

loadTileset();
onWindowResize();
render();
