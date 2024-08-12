import {
	AmbientLight,
	BaseEvent,
	BufferGeometry,
	Camera,
	CameraHelper,
	Clock,
	Color,
	DepthFormat,
	DepthTexture,
	DirectionalLight,
	EventDispatcher,
	FloatType,
	FogExp2,
	Mesh,
	NearestFilter,
	OrthographicCamera,
	PerspectiveCamera,
	PlaneGeometry,
	Scene,
	ShaderMaterial,
	Vector3,
	WebGLRenderTarget,
	WebGLRenderer,
} from "three";

import { MapControls } from "three/examples/jsm/controls/MapControls";
// import frag from "./depth.frag.glsl?raw";
// import vert from "./depth.vert.glsl?raw";

interface ViewerEventMap extends BaseEvent {
	update: BaseEvent | { delta: number };
}

//Object3D.DEFAULT_UP.set(0, 0, 1);

// Object3D.DEFAULT_UP.set(0, 1, 0);

//3D场景初始化类
export class MyViewer extends EventDispatcher<ViewerEventMap> {
	scene: Scene;
	renderer: WebGLRenderer;
	camera: PerspectiveCamera;
	controls: MapControls;
	ambLight: AmbientLight;
	dirLight: DirectionalLight;
	container: HTMLElement;
	_clock: Clock = new Clock();

	get width() {
		return this.container.clientWidth;
	}
	get height() {
		return this.container.clientHeight;
	}

	depthRenderTarget!: WebGLRenderTarget;
	// depthTexture = new DepthTexture(300, 200); // = new FramebufferTexture(textureSize, textureSize, RGBAFormat);

	depthCamera!: OrthographicCamera;
	depthScene: Scene = new Scene();
	depthMesh: Mesh<BufferGeometry, ShaderMaterial>;
	depthPixelBuffer = new Uint8Array(100 * 100);

	depthCanvasContex: CanvasRenderingContext2D;

	currentRenderTarget!: WebGLRenderTarget;

	private _fogFactor = 1.0;
	public get fogFactor() {
		return this._fogFactor;
	}
	public set fogFactor(value) {
		this._fogFactor = value;
		this.controls.dispatchEvent({ type: "change" });
	}

	constructor(dom: HTMLElement, centerPositon = new Vector3(0, 3e3, 0), _cameraPosition = new Vector3(0, -1e3, 1e4)) {
		super();

		//容器
		this.container = dom;

		// 渲染器
		this.renderer = this._createRenderer();
		// 场景
		this.scene = this._createScene();

		// 摄像机
		this.camera = this._createCamera(centerPositon);
		//控制器
		this.controls = this._createControls(centerPositon, this.camera, dom);
		// 环境光
		this.ambLight = this._createAmbLight();
		this.scene.add(this.ambLight);
		// 直射光
		this.dirLight = this._createDirLight();
		this.scene.add(this.dirLight);

		// 创建深度图
		this.depthMesh = this.createDepth();

		// 加入容器
		this.container.appendChild(this.renderer.domElement);

		const canvasEl = document.querySelector("#depthcanvas") as HTMLCanvasElement;
		canvasEl.width = this.width;
		canvasEl.height = this.height;
		this.depthCanvasContex = canvasEl.getContext("2d")!;

		//窗口大小改变时调整canvas大小
		window.addEventListener("resize", this.resize.bind(this));

		this.resize();
		this.animate();
	}

	private _createDirLight() {
		const dirLight = new DirectionalLight(0xffffff, 0.5);
		dirLight.target.position.copy(this.controls.target);
		dirLight.position.set(-1e3, -2e3, 1e4);
		return dirLight;
	}

	private _createAmbLight() {
		const ambLight = new AmbientLight(0xffffff, 0.7);
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
			this.camera.far = Math.max(Math.min((dist / polar) * 8, 50000), 10);
			this.camera.near = this.camera.far / 1000;
			this.camera.updateProjectionMatrix();

			// 根据摄像机仰角、距离调整雾密度
			if (this.scene.fog instanceof FogExp2) {
				this.scene.fog.density = (polar / (dist + 5) / 4) * this.fogFactor;
			}
		});
		controls.saveState();
		return controls;
	}

	private _createCamera(centerPositon: Vector3) {
		const camera = new PerspectiveCamera(80, 1, 0.1, 5e4);
		camera.position.set(centerPositon.x - 10, centerPositon.y - 20, centerPositon.z);
		// camera.position.set(
		//     centerPositon.x - 10,
		//     centerPositon.z,
		//     -centerPositon.y + 20
		// );
		return camera;
	}

	private _createScene() {
		const backColor = 0xdbf0ff;
		const scene = new Scene();
		scene.background = new Color(backColor);
		// scene.fog = new FogExp2(backColor, 0);
		return scene;
	}

	private _createRenderer() {
		const renderer = new WebGLRenderer({
			antialias: true,
			alpha: true,
			logarithmicDepthBuffer: false,
			precision: "highp",
			depth: true,
		});
		renderer.sortObjects = true;
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.autoClear = false;

		return renderer;
	}

	//浏览器窗口大小变化重置状态
	resize() {
		const width = this.width,
			height = this.height;
		this.currentRenderTarget && this.currentRenderTarget.dispose();
		this.currentRenderTarget = new WebGLRenderTarget(width, height);

		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(width, height);
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();

		return this;
	}

	animate() {
		requestAnimationFrame(this.animate.bind(this));

		this.camera;

		this.depthMesh.material.uniforms["cameraNear"].value = this.camera.near;
		this.depthMesh.material.uniforms["cameraFar"].value = this.camera.far;
		this.depthMesh.material.uniforms["cameraMatrixInverse"].value = this.camera.matrixWorldInverse;

		// this.depthMesh.material.uniforms["cameraProjectionMatrix"].value =
		//     this.camera.matrixWorld;
		// this.depthMesh.material.uniforms[
		//     "cameraInverseProjectionMatrix"
		// ].value = this.camera.projectionMatrixInverse;
		// this.depthMesh.material.uniforms["cameraInverseMatrix"].value =
		//     this.camera.matrixWorld;

		//  渲染深度
		this.renderer.setRenderTarget(this.depthRenderTarget);
		this.renderer.render(this.scene, this.camera);

		// 深度渲染到主窗口的plane Mesh
		this.renderer.setRenderTarget(this.currentRenderTarget);
		this.renderer.render(this.depthScene, this.depthCamera);

		// this.depthMesh.material.uniforms["depthTexture"].value =
		//     this.depthRenderTarget;

		this.renderer.setRenderTarget(null);
		this.renderer.render(this.depthScene, this.depthCamera);

		// 深度像素信息写入数组
		this.renderer.readRenderTargetPixels(
			this.currentRenderTarget,
			0,
			0,
			this.currentRenderTarget.width,
			this.currentRenderTarget.height,
			this.depthPixelBuffer,
		);

		const imageData = new ImageData(
			new Uint8ClampedArray(this.depthPixelBuffer),
			this.depthRenderTarget.width,
			this.depthRenderTarget.height,
		);
		this.depthCanvasContex.putImageData(imageData, 0, 0);

		this.controls.update();

		this.dispatchEvent({ type: "update", delta: this._clock.getDelta() });
	}

	//-----------------------------------depth-------------------------------------------------

	private createDepth() {
		const width = this.container.clientWidth;
		const height = this.container.clientHeight;

		const depthTexture = new DepthTexture(width, height);
		const target = new WebGLRenderTarget(width, height);
		this.depthPixelBuffer = new Uint8Array(width * height * 4);

		target.texture.minFilter = NearestFilter;
		target.texture.magFilter = NearestFilter;
		target.texture.generateMipmaps = false;

		target.depthTexture = depthTexture;
		target.depthTexture.format = DepthFormat;
		target.depthTexture.type = FloatType;

		this.depthRenderTarget = target;

		this.depthCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

		// const material = new ShaderMaterial({
		//     vertexShader: vert,
		//     fragmentShader: frag,
		//     defines: {
		//         PERSPECTIVE_CAMERA: 1,
		//         DEPTH_PACKING: 0,
		//     },
		//     uniforms: {
		//         cameraNear: { value: this.camera.near },
		//         cameraFar: { value: this.camera.far },
		//         cameraInverseMatrix: { value: this.camera.matrixWorld },
		//         cameraProjectionMatrix: { value: this.camera.projectionMatrix },
		//         cameraInverseProjectionMatrix: {
		//             value: this.camera.projectionMatrixInverse,
		//         },
		//         tDiffuse: { value: target.texture },
		//         tDepth: { value: depthTexture },
		//     },
		// });

		// 创建一个着色器材质
		const material = new ShaderMaterial({
			uniforms: {
				depthTexture: { value: depthTexture },
				tDiffuse: { value: target.texture },
				cameraNear: { value: this.camera.near },
				cameraFar: { value: this.camera.far },
				cameraMatrixInverse: { value: this.camera.matrixWorldInverse },
				scale: { value: 1 },
			},
			vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
			fragmentShader: `

        uniform sampler2D depthTexture;
        uniform sampler2D tDiffuse;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform mat4 cameraMatrixInverse;
        uniform float scale;
        varying vec2 vUv;

        #include <packing>
        #include <common>

        
        float readDepth( sampler2D depthSampler, vec2 coord ) {
            // fragCoordZ:0.0-1.0
            float fragCoordZ = texture2D( depthSampler, coord ).x;	
            // 透视深度Z转换为摄像机坐标系的Z
            float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar );
            // 将摄像机坐标系的Z映射到0-1范围
            return viewZToOrthographicDepth(viewZ, cameraNear, cameraFar );
        }

        void main() {
            float depth =  readDepth(depthTexture, vUv);
            vec4 diffuse = texture2D(tDiffuse,vUv);
            // 使用线性深度值重建世界坐标
            //float z = cameraNear * cameraFar / ((cameraFar - cameraNear) * depth*100.0 - cameraFar);

            vec4 cameraSpacePosition = vec4(vUv, depth, 1.0);
            vec4 worldSpacePosition = cameraMatrixInverse * cameraSpacePosition;// * scale;
            worldSpacePosition = normalize(worldSpacePosition);
            

            gl_FragColor = vec4(worldSpacePosition.xyz, 1.0);
            gl_FragColor = vec4(worldSpacePosition.z,worldSpacePosition.z,worldSpacePosition.z, 1.0);
            gl_FragColor = vec4(vUv,depth,1.0);
        }
    `,
		});

		const geometry = new PlaneGeometry(2, 2);
		const mesh = new Mesh(geometry, material);
		this.depthScene.add(mesh);

		this.depthScene.add(new CameraHelper(this.depthCamera));

		return mesh;
	}
}
