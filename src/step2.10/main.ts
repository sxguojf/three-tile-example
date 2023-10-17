import { AnimationMixer, Group, Vector3 } from "three";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as util from "../util";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap();
// 地图中心经纬度，转换为场景坐标
const center = map.project(108.9507, 34.1915);
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量(观察点位于中心偏西400m,偏南400m处)
const offset = new Vector3(-0.4, -0.4, 0);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

//---------------------------------------------------------------
viewer.ambLight.intensity = 0.5;
viewer.dirLight.intensity = 0.5;
// 调整大仰角控制
viewer.controls.maxPolarAngle = Math.PI / 2.4;
viewer.controls.saveState();

//---------------------------------------------------------------
// 加载gltf模型，使用threejs示例里的建筑物模型，西安南三环找了块工地放上去
(() => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("../../lib/draco/gltf/");
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    let model: Group;

    loader.load("../../model/LittlestTokyo.glb", function (gltf) {
        model = gltf.scene;
        viewer.scene.add(model);
        const mixer = new AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();
        map.addEventListener("update", (evt) => {
            mixer.update(evt.delta);
        });
        initGui(model);
    });
})();

//---------------------------------------------------------------
// 创建模型编辑控制器
const createTransControl = (model: Group) => {
    const modelControls = new TransformControls(
        viewer.camera,
        viewer.renderer.domElement
    );
    modelControls.attach(model);
    modelControls.addEventListener("dragging-changed", function (event) {
        viewer.controls.enabled = !event.value;
    });
    modelControls.enabled = false;
    modelControls.visible = false;
    viewer.scene.add(modelControls);
    return modelControls;
};

/*----------------------------------------选项gui----------------------------------------*/
const initGui = (model: Group) => {
    const vm = {
        initModel: () => {
            model.scale.setScalar(5e-4);
            model.position.set(center.x, center.y, 0.1);
            model.rotation.set(Math.PI / 2, 0, 0);
            viewer.controls.reset();
        },
    };
    vm.initModel();

    const modelControls = createTransControl(model);

    const gui = new GUI();
    gui.add(viewer, "fogFactor", 0.1, 5, 0.1).listen().name("雾(能见度系数)");
    gui.add(modelControls, "enabled")
        .onChange((value: boolean) => (modelControls.visible = value))
        .name("模型编辑");
    gui.add(modelControls, "mode", {
        平移: "translate",
        旋转: "rotate",
        缩放: "scale",
    }).name("编辑方式");
    gui.add(vm, "initModel").name("复位");
};

//---------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer, map);
util.showAttribution(map);
util.showCameraInfo(viewer);
util.addSky(viewer);
