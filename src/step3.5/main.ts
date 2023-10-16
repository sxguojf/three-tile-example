import {
    ACESFilmicToneMapping,
    MathUtils,
    PlaneGeometry,
    RepeatWrapping,
    TextureLoader,
    Vector3,
} from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import { Sky } from "three/examples/jsm/objects/Sky";
import { Water } from "three/examples/jsm/objects/Water";
import * as util from "../util";
import { GLViewer } from "./GLViewer";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(
    [util.mapboxImgSource, util.zkxtCiaSource],
    util.mapboxDemSource
);
// 地图中心经纬度，转换为场景坐标
// const center = map.project(98.35, 29.65);
// const center = map.project(100.3, 37);
const center = map.project(89.4, 42.7);
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, 0, -center.y);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, 10, 50);

// 创建viewer
const viewer = new GLViewer(
    document.querySelector("#map")!,
    centerPosition,
    centerPosition.clone().add(offset)
);
map.loader.showLoading = false;
map.rotateX(-Math.PI / 2);
// 地图加入viewer
viewer.scene.add(map);

viewer.controls.maxPolarAngle = Math.PI;

viewer.scene.fog = null;
viewer.renderer.toneMapping = ACESFilmicToneMapping;
viewer.renderer.toneMappingExposure = 0.7;
viewer.dirLight.intensity = 0.5;
viewer.ambLight.intensity = 0.5;

//-----------------------------------------------------------------------------------------
const sky = initSky();
const water = initWater();
gui();

//-----------------------------------------------------------------------------------------
function initWater() {
    const waterGeometry = new PlaneGeometry(300, 300);

    const water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new TextureLoader().load(
            "../image/waternormals.jpg",
            function (texture) {
                texture.wrapS = texture.wrapT = RepeatWrapping;
            }
        ),
        sunDirection: new Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 1,
        // side: DoubleSide,
        alpha: 1,
    });
    water.material.transparent = true;
    water.material.uniforms["size"].value = 6;
    water.position.set(center.x, center.y + 5, 0.2);

    // water模型内部渲染前会修改camer属性做离屛渲染，这会触发地图的LOD，
    // 所以需要在water渲染前禁止地图更新，渲染后再放开.
    const before = water.onBeforeRender;
    const after = water.onAfterRender;
    water.onBeforeRender = (
        renderer,
        scene,
        camera,
        geometry,
        material,
        group
    ) => {
        map.autoUpdate = false;
        before.call(water, renderer, scene, camera, geometry, material, group);
    };
    water.onAfterRender = (
        renderer,
        scene,
        camera,
        geometry,
        material,
        group
    ) => {
        map.autoUpdate = true;
        after.call(water, renderer, scene, camera, geometry, material, group);
    };
    map.add(water);

    viewer.addEventListener("update", () => {
        water.material.uniforms["time"].value += 1.0 / 60.0;
    });

    return water;
}
//-----------------------------------------------------------------------------------------

function initSky() {
    // Add Sky
    const sky = new Sky();
    sky.scale.setScalar(450000);
    map.add(sky);
    return sky;
}

function gui() {
    const sun = new Vector3();
    /// GUI
    const effectController = {
        turbidity: 10,
        rayleigh: 3,
        mieCoefficient: 0.005,
        mieDirectionalG: 0.7,
        elevation: 0.5,
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

        viewer.dirLight.position.copy(sun);
        water.material.uniforms["sunDirection"].value.copy(sun).normalize();

        viewer.renderer.toneMappingExposure = effectController.exposure;
        viewer.renderer.render(viewer.scene, viewer.camera);
    }
    const gui = new GUI();

    const guiEnv = gui.addFolder("环境");
    guiEnv.add(viewer.ambLight, "intensity", 0, 5).name("环境光");
    guiEnv.add(viewer.dirLight, "intensity", 0, 5).name("直射光");

    const guiSky = gui.addFolder("天空");
    guiSky.add(sky, "visible");
    guiSky
        .add(effectController, "turbidity", 0.0, 20.0, 0.1)
        .onChange(guiChanged);
    guiSky
        .add(effectController, "rayleigh", 0.0, 4, 0.001)
        .onChange(guiChanged);
    guiSky
        .add(effectController, "mieCoefficient", 0.0, 0.1, 0.001)
        .onChange(guiChanged);
    guiSky
        .add(effectController, "mieDirectionalG", 0.0, 1, 0.001)
        .onChange(guiChanged);
    guiSky.add(effectController, "elevation", 0, 90, 0.1).onChange(guiChanged);
    guiSky
        .add(effectController, "azimuth", -180, 180, 0.1)
        .onChange(guiChanged);
    guiSky.add(effectController, "exposure", 0, 1, 0.0001).onChange(guiChanged);

    const guiWater = gui.addFolder("水体");
    guiWater.add(water, "visible");
    guiWater.add(water.position, "z", -1, 5, 0.01).name("水面高度");
    guiWater.add(water.scale, "x", 0.1, 10).name("东西宽度");
    guiWater.add(water.scale, "y", 0.1, 10).name("南北宽度");
    guiWater
        .add(water.material.uniforms.size, "value", 0.1, 10, 0.1)
        .name("size");
    guiWater
        .add(water.material.uniforms.alpha, "value", 0.1, 1, 0.1)
        .name("alpha");

    guiChanged();
}
//-----------------------------------------------------------------------------
// util.addSky(viewer as any);
util.showLoadstate(map);
util.showLocation(viewer as any, map);
