/**
 *@description: threejs 3D scene initalize
 *@author: Guojf
 *@date: 2023-04-05
 */

import {
	AmbientLight,
	Clock,
	Color,
	DirectionalLight,
	Event,
	EventDispatcher,
	FogExp2,
	PerspectiveCamera,
	Scene,
	Vector3,
	WebGLRenderer,
} from "three";

import { FlyControls } from "three/examples/jsm/controls/FlyControls";

/**
 * threejs scene viewer initialize class
 */
export class MyViewer extends EventDispatcher<Event> {
	public readonly scene: Scene;
	public readonly renderer: WebGLRenderer;
	public readonly camera: PerspectiveCamera;
	public readonly controls: FlyControls;
	public readonly ambLight: AmbientLight;
	public readonly dirLight: DirectionalLight;
	public readonly container: HTMLElement;
	private readonly _clock: Clock = new Clock();

	public get width() {
		return this.container.clientWidth;
	}

	public get height() {
		return this.container.clientHeight;
	}

	constructor(
		container: HTMLElement | string,
		options = { centerPostion: new Vector3(0, 0, -3000), cameraPosition: new Vector3(0, 30000, 0) },
	) {
		super();
		const el = typeof container === "string" ? document.querySelector(container) : container;
		if (el instanceof HTMLElement) {
			this.container = el;
			this.renderer = this._createRenderer();
			this.scene = this._createScene();
			this.camera = this._createCamera(options.cameraPosition);
			this.controls = this._createControls();
			this.ambLight = this._createAmbLight();
			this.scene.add(this.ambLight);
			this.dirLight = this._createDirLight(options.centerPostion);
			this.scene.add(this.dirLight);
			this.container.appendChild(this.renderer.domElement);
			window.addEventListener("resize", this.resize.bind(this));
			this.resize();
			this.renderer.setAnimationLoop(this.animate.bind(this));
		} else {
			throw `${container} not found!}`;
		}
	}

	private _createScene() {
		const scene = new Scene();
		const backColor = 0xdbf0ff;
		scene.background = new Color(backColor);
		scene.fog = new FogExp2(backColor, 0.003);
		return scene;
	}

	private _createRenderer() {
		const renderer = new WebGLRenderer({
			antialias: false,
			alpha: true,
			logarithmicDepthBuffer: true,
			precision: "highp",
		});
		renderer.debug.checkShaderErrors = true;
		// renderer.toneMapping = 3;
		// renderer.toneMappingExposure = 1;

		renderer.sortObjects = true;
		renderer.setPixelRatio(window.devicePixelRatio);

		return renderer;
	}

	private _createCamera(pos: Vector3) {
		const camera = new PerspectiveCamera(70, 1, 0.1, 50000);
		camera.position.copy(pos);
		return camera;
	}

	private _createControls() {
		const controls = new FlyControls(this.camera, this.container);
		controls.domElement = this.container;
		controls.autoForward = false;
		controls.movementSpeed = 2;
		controls.rollSpeed = 0.05;
		return controls;
	}

	private _createAmbLight() {
		const ambLight = new AmbientLight(0xffffff, 1);
		return ambLight;
	}

	private _createDirLight(center: Vector3) {
		const dirLight = new DirectionalLight(0xffffff, 1);
		dirLight.position.set(0, 2e3, 1e3);
		dirLight.target.position.copy(center);
		return dirLight;
	}

	public resize() {
		const width = this.width;
		const height = this.height;
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(width, height);
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
		return this;
	}

	private animate() {
		const delta = this._clock.getDelta();
		this.controls.update(delta);
		this.renderer.render(this.scene, this.camera);

		this.dispatchEvent({ type: "update", delta });
	}
}
