import {
	AmbientLight,
	Camera,
	Clock,
	Color,
	DirectionalLight,
	Event,
	EventDispatcher,
	FogExp2,
	Object3D,
	PerspectiveCamera,
	Scene,
	Vector3,
	WebGLRenderer,
} from "three";

import { MapControls } from "three/examples/jsm/controls/MapControls";

// Object3D.DEFAULT_UP.set(0, 0, 1);
Object3D.DEFAULT_UP.set(0, 1, 0);

//3D场景初始化类
export class GLViewer extends EventDispatcher<Event> {
	scene: Scene;
	renderer: WebGLRenderer;
	camera: PerspectiveCamera;
	controls: MapControls;
	ambLight: AmbientLight;
	dirLight: DirectionalLight;
	container: HTMLElement;
	_clock: Clock = new Clock();

	private _fogFactor = 1.0;
	public get fogFactor() {
		return this._fogFactor;
	}
	public set fogFactor(value) {
		this._fogFactor = value;
		this.controls.dispatchEvent({ type: "change", target: this.controls });
	}

	constructor(dom: HTMLElement, centerPositon = new Vector3(0, 3e3, 0), cameraPosition = new Vector3(0, -1e3, 1e4)) {
		super();
		//容器
		this.container = dom;
		// 渲染器
		this.renderer = this._createRenderer();
		// 场景
		this.scene = this._createScene();
		// 摄像机
		this.camera = this._createCamera(cameraPosition);
		//控制器
		this.controls = this._createControls(centerPositon, this.camera, dom);
		// 环境光
		this.ambLight = this._createAmbLight();
		this.scene.add(this.ambLight);
		// 直射光
		this.dirLight = this._createDirLight();
		this.scene.add(this.dirLight);
		// 加入容器
		this.container.appendChild(this.renderer.domElement);
		//窗口大小改变时调整canvas大小
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
		this.animate();
	}

	private _createDirLight() {
		const dirLight = new DirectionalLight(0xffffff, 1.5);
		dirLight.target.position.copy(this.controls.target);
		dirLight.position.set(-1e3, -2e3, 1e4);
		return dirLight;
	}

	private _createAmbLight() {
		const ambLight = new AmbientLight(0xffffff, 2);
		return ambLight;
	}

	private _createControls(centerPositon: Vector3, camera: Camera, domElement: HTMLElement) {
		const controls = new MapControls(camera, domElement);
		controls.target.copy(centerPositon);
		controls.minDistance = 0.1;
		controls.maxDistance = 15000;
		controls.zoomSpeed = 3;
		controls.maxPolarAngle = 1.2;
		controls.enableDamping = true;

		controls.listenToKeyEvents(window);
		controls.addEventListener("change", () => {
			// 摄像机仰角
			const polar = Math.max(this.controls.getPolarAngle(), 0.1);
			// 摄像机到焦点的距离
			const dist = Math.max(this.controls.getDistance(), 0.1);
			// 根据摄像机距离调整缩放速度
			controls.zoomSpeed = Math.max(Math.log(dist), 1.8);
			// 根据摄像机仰角、距离调整雾摄像机远剪裁面
			this.camera.far = Math.max(Math.min((dist / polar) * 8, 50000), 100);
			this.camera.near = this.camera.far / 1000;
			this.camera.updateProjectionMatrix();
		});
		controls.saveState();
		return controls;
	}

	private _createCamera(cameraPosition: Vector3) {
		const camera = new PerspectiveCamera(80, 1, 0.1, 50000);
		camera.position.copy(cameraPosition);
		// const cameraHelper = new CameraHelper(this.camera);
		// this.scene.add(cameraHelper);
		return camera;
	}

	private _createScene() {
		const backColor = 0xdbf0ff;
		const scene = new Scene();
		scene.background = new Color(backColor);
		scene.fog = new FogExp2(backColor, 0);
		return scene;
	}

	private _createRenderer() {
		const renderer = new WebGLRenderer({
			antialias: true,
			alpha: true,
			logarithmicDepthBuffer: true,
			precision: "highp",
		});
		renderer.sortObjects = true;
		renderer.setPixelRatio(window.devicePixelRatio);
		return renderer;
	}

	//浏览器窗口大小变化重置状态
	resize() {
		const width = this.container.clientWidth,
			height = this.container.clientHeight;
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(width, height);
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
		return this;
	}

	animate() {
		this.renderer.render(this.scene, this.camera);
		this.controls.update();
		this.dispatchEvent({ type: "update", delta: this._clock.getDelta() });
		requestAnimationFrame(this.animate.bind(this));
	}
}
