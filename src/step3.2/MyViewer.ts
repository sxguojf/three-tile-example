import {
	AmbientLight,
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

// import { MapControls } from "three/examples/jsm/controls/MapControls";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import Stats from "three/examples/jsm/libs/stats.module.js";

Object3D.DEFAULT_UP.set(0, 0, 1);
//3D场景初始化类
export class MyViewer extends EventDispatcher<Event> {
	public scene = new Scene();
	public renderer = new WebGLRenderer({
		antialias: true,
		logarithmicDepthBuffer: true,
	});
	public camera = new PerspectiveCamera(80, 1, 0.1, 1000);
	public controls: FlyControls; // MapControls;
	public ambLight = new AmbientLight(0xffffff, 0.5);
	public dirLight = new DirectionalLight(0xffffff, 1.5);
	public container: HTMLElement;

	private _stats = new Stats();
	private _clock: Clock = new Clock();

	constructor(dom: HTMLElement, center: Vector3) {
		super();

		//容器
		this.container = dom;

		// 渲染器
		this.renderer.sortObjects = true;
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.container.appendChild(this.renderer.domElement);

		const backColor = 0xdbf0ff;
		this.scene.background = new Color(backColor);
		// 雾
		this.scene.fog = new FogExp2(backColor, 0.003);
		this.renderer.shadowMap.enabled = true;

		// 摄像机
		this.camera = new PerspectiveCamera(50, 1, 0.1, 1000);
		this.camera.position.set(center.x, center.y + 20, center.z + 10);
		this.camera.lookAt(center.x, center.y, center.z);

		// 环境光
		this.scene.add(this.ambLight);

		// 性能指示器
		this._stats.dom.style.left = "";
		this._stats.dom.style.top = "";
		this._stats.dom.style.right = "0px";
		this._stats.dom.style.bottom = "0px";
		this._stats.dom.style.zIndex = "100";
		dom.appendChild(this._stats.dom);

		//控制器
		this.controls = this.createControls();

		//窗口大小改变时调整canvas大小
		window.addEventListener("resize", this.resize.bind(this));
		this.resize();
		this.animate();
	}

	private createControls() {
		const controls = new FlyControls(this.camera, this.container);
		controls.domElement = this.container;
		controls.autoForward = false;
		controls.movementSpeed = 2;
		controls.rollSpeed = 0.05;

		return controls;
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
		this._stats.update();
		const delta = this._clock.getDelta();
		this.controls.update(delta);
		this.renderer.render(this.scene, this.camera);
		this.dispatchEvent({ type: "update", delta });
		requestAnimationFrame(this.animate.bind(this));
	}
}
