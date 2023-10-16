import {
    AmbientLight,
    Clock,
    Color,
    DirectionalLight,
    DirectionalLightHelper,
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
import Stats from "three/examples/jsm/libs/stats.module.js";

Object3D.DEFAULT_UP.set(0, 0, 1);

//3D场景初始化类
export class MyViewer extends EventDispatcher<Event> {
    public scene = new Scene();
    public renderer = new WebGLRenderer({
        antialias: true,
        logarithmicDepthBuffer: true,
    });
    public camera = new PerspectiveCamera(50, 1, 0.1, 1000);
    public controls: MapControls;
    public ambLight = new AmbientLight(0xffffff, 0);
    public dirLight = new DirectionalLight(0xffffff, 0);
    public container: HTMLElement;
    public flash = true;
    public rain = true;

    private _stats = new Stats();
    private _clock: Clock = new Clock();

    constructor(dom: HTMLElement, center: Vector3) {
        super();

        //容器
        this.container = dom;

        // 渲染器
        this.renderer.sortObjects = false;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        const backColor = 0;
        this.scene.background = new Color(backColor);
        // 雾
        this.scene.fog = new FogExp2(backColor);

        // 摄像机
        this.camera = new PerspectiveCamera(50, 1, 0.1, 1000);
        this.camera.position.set(center.x, center.y - 30, center.z);

        // 环境光
        this.scene.add(this.ambLight);

        // 直射光
        this.dirLight.target.position.set(0, 5e3, 0);
        this.dirLight.position.set(-1e3, 1e4, 1e4);
        this.scene.add(this.dirLight);
        this.scene.add(new DirectionalLightHelper(this.dirLight));

        // 性能指示器
        this._stats.dom.style.left = "";
        this._stats.dom.style.top = "";
        this._stats.dom.style.right = "0px";
        this._stats.dom.style.bottom = "0px";
        this._stats.dom.style.zIndex = "100";
        dom.appendChild(this._stats.dom);

        //控制器
        this.controls = this.createControls(center);

        //窗口大小改变时调整canvas大小
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        this.animate();
    }

    private createControls(center: Vector3) {
        const controls = new MapControls(this.camera, this.container);
        controls.domElement = this.container;
        controls.target.set(center.x, center.y, 3);
        controls.minDistance = 0.1;
        controls.maxDistance = 100;
        controls.zoomSpeed = 3;
        controls.minPolarAngle = 1.0;
        controls.maxPolarAngle = 1.4;
        controls.enableDamping = true;
        controls.listenToKeyEvents(window);
        controls.addEventListener("change", () => {
            // 摄像机仰角
            const polar = Math.max(controls.getPolarAngle(), 0.2);
            // 摄像机到焦点的距离
            const dist = Math.max(controls.getDistance(), 1);

            // 根据摄像机距离调整缩放速度
            controls.zoomSpeed = Math.max(Math.log(dist), 1.2);
            // 根据摄像机仰角、距离调整雾密度
            if (this.scene.fog instanceof FogExp2) {
                this.scene.fog.density = polar / dist / 4;
            }
            // 根据摄像机仰角、距离调整雾摄像机远剪裁面
            this.camera.far = Math.min((dist / polar) * 8, 60000);
            this.camera.near = Math.min(
                Math.max(this.camera.far / 100, 0.1),
                1
            );
            this.camera.updateProjectionMatrix();
        });
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
        this.controls.update();
        this._stats.update();
        this.renderer.render(this.scene, this.camera);
        const delta = this._clock.getDelta();
        this.dispatchEvent({ type: "update", delta });

        // // 模拟闪电效果
        // if (this.flash) {
        //     let color = new Color("black");
        //     if (Math.round(delta * 1000) % 10 === 0) {
        //         color = new Color(0xaabbdd);
        //     }
        //     this.scene.fog?.color.set(color);
        //     this.scene.background = new Color(color);
        // }

        requestAnimationFrame(this.animate.bind(this));
    }
}
