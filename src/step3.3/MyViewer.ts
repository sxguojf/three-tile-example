/**
 *@description: threejs 3D scene initalize
 *@author: Guojf
 *@date: 2023-04-05
 */

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;
let prevTime = performance.now();
const velocity = new Vector3();
const direction = new Vector3();

import {
	AmbientLight,
	BaseEvent,
	Camera,
	Clock,
	Color,
	DirectionalLight,
	EventDispatcher,
	FogExp2,
	PerspectiveCamera,
	Scene,
	Vector3,
	WebGLRenderer,
} from "three";

import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

interface ViewerEventMap extends BaseEvent {
	update: BaseEvent | { delta: number };
}

/**
 * threejs scene viewer initialize class
 */
export class MyViewer extends EventDispatcher<ViewerEventMap> {
	public readonly scene: Scene;
	public readonly renderer: WebGLRenderer;
	public readonly camera: PerspectiveCamera;
	public readonly controls: PointerLockControls;
	public readonly ambLight: AmbientLight;
	public readonly dirLight: DirectionalLight;
	public readonly container: HTMLElement;
	private readonly _clock: Clock = new Clock();

	private _autoForward = false;
	public get autoForward() {
		return this._autoForward;
	}
	public set autoForward(value) {
		moveForward = value;
		this._autoForward = value;
	}

	cameraZ = 8;

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
			this.controls = this._createControls(this.camera, this.container);
			this.ambLight = this._createAmbLight();
			this.scene.add(this.ambLight);
			this.dirLight = this._createDirLight(options.centerPostion);
			this.scene.add(this.dirLight);
			this.container.appendChild(this.renderer.domElement);

			this.container.addEventListener("click", (evt) => {
				if (!this.controls.isLocked) {
					this.controls.lock();
				} else if (evt.button === 2) {
					this.controls.unlock();
				}
			});

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

	private _createControls(camera: Camera, domElement: HTMLElement) {
		const controls = new PointerLockControls(camera, domElement);
		controls.minPolarAngle = Math.PI / 2.2;
		controls.maxPolarAngle = Math.PI;

		const onKeyDown = function (event: KeyboardEvent) {
			switch (event.code) {
				case "ArrowUp":
				case "KeyW":
					moveForward = true;
					break;

				case "ArrowLeft":
				case "KeyA":
					moveLeft = true;
					break;

				case "ArrowDown":
				case "KeyS":
					moveBackward = true;
					break;

				case "ArrowRight":
				case "KeyD":
					moveRight = true;
					break;

				case "Space":
					if (canJump) velocity.y += 350;
					canJump = false;
					break;
			}
		};

		const onKeyUp = function (event: KeyboardEvent) {
			switch (event.code) {
				case "ArrowUp":
				case "KeyW":
					moveForward = false;
					break;

				case "ArrowLeft":
				case "KeyA":
					moveLeft = false;
					break;

				case "ArrowDown":
				case "KeyS":
					moveBackward = false;
					break;

				case "ArrowRight":
				case "KeyD":
					moveRight = false;
					break;
			}
		};
		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("keyup", onKeyUp);

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
		const time = performance.now();
		const controls = this.controls;

		if (controls.isLocked === true) {
			// raycaster.ray.origin.copy(controls.getObject().position);
			// raycaster.ray.origin.y -= 10;
			// const intersections = raycaster.intersectObjects(objects, false);
			// const onObject = intersections.length > 0;
			moveForward ||= this.autoForward;

			const delta = (time - prevTime) / 1000;

			velocity.x -= velocity.x * 10.0 * delta;
			velocity.z -= velocity.z * 10.0 * delta;

			velocity.y -= 9.8 * 300.0 * delta; // 100.0 = mass

			direction.z = Number(moveForward) - Number(moveBackward);
			direction.x = Number(moveRight) - Number(moveLeft);
			direction.normalize(); // this ensures consistent movements in all directions

			if (moveForward || moveBackward) velocity.z -= direction.z * this.cameraZ * 5 * delta;
			if (moveLeft || moveRight) velocity.x -= direction.x * this.cameraZ * 5 * delta;

			// if (onObject === true) {
			//     velocity.y = Math.max(0, velocity.y);
			//     canJump = true;
			// }

			controls.moveRight(-velocity.x * delta);
			controls.moveForward(-velocity.z * delta);

			controls.getObject().position.y += velocity.y * delta; // new behavior

			if (controls.getObject().position.y < this.cameraZ) {
				velocity.y = 0;
				controls.getObject().position.y = this.cameraZ;

				canJump = true;
			}
		}

		prevTime = time;

		this.renderer.render(this.scene, this.camera);
		this.dispatchEvent({ type: "update", delta: this._clock.getDelta() });
	}
}
