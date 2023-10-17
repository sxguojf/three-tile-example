import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import {
    AnimationMixer,
    DirectionalLight,
    Group,
    Vector2,
    Vector3,
} from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as util from "../util";
import TWEEN from "three/examples/jsm/libs/tween.module";
import { MyViewer } from "./MyViewer";
import "./style.css";

// 创建地图
const map = util.createMap(util.mapboxImgSource, util.mapboxDemSource);
//-----------------------------------------------------------------------------------------------------
// 取得地图dom容器
const glContainer = document.querySelector<HTMLElement>("#map");
// 地图中心
const center = map.project(86.92, 28.5);
// 使用自定义类初始化三维场景
const viewer = new MyViewer(glContainer!, new Vector3(center.x, center.y, 10));
// 将地图加入三维场景
viewer.scene.add(map);

//-----------------------------------------------------------------------------------------------------

// 瓦片默认不接受阴影，监听瓦片创建事件给瓦片添加阴影
map.addEventListener("tile-created", (evt) => {
    evt.tile.receiveShadow = true;
    // evt.tile.castShadow = true;
});

//-----------------------------------加载模型------------------------------------------------------
const loader = new GLTFLoader();
loader.loadAsync("../model/Flamingo.glb").then((gltf) => {
    const model = gltf.scene;
    model.scale.setScalar(0.01);
    viewer.scene.add(model);
    model.traverse((child) => {
        child.receiveShadow = true;
        child.castShadow = true;
    });
    initLight(model);
    intiGui(model);
    update(gltf);
});

const initLight = (model: Group) => {
    const dirLight = new DirectionalLight();
    dirLight.target = model;
    dirLight.position.set(-2, 3, -10);
    dirLight.castShadow = true;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 1000;
    dirLight.shadow.camera.left = -10;
    dirLight.shadow.camera.right = 10;
    dirLight.shadow.camera.top = 10;
    dirLight.shadow.camera.bottom = -10;
    dirLight.shadow.mapSize.setScalar(1024);
    model.add(dirLight);
    // viewer.scene.add(new CameraHelper(dirLight.shadow.camera));
};

//--------------------------------------模型位置更新--------------------------------------------------
const update = (gltf: GLTF) => {
    const model = gltf.scene;
    const mixer = new AnimationMixer(model);
    mixer.clipAction(gltf.animations[0]).play();
    viewer.addEventListener("update", (evt) => {
        // 固定位置
        model.position.set(0, -0.5, -3);
        model.applyMatrix4(viewer.camera.matrixWorld);

        // 地面高度
        const groundAltition =
            map.getLocalInfoFromWorld(
                new Vector2(model.position.x, model.position.y)
            )?.location.z || 0;
        vm.modelHeight = model.position.z - groundAltition;

        // 撞地死了
        if (vm.modelHeight <= 0.2) {
            model.rotateZ(evt.delta * Math.PI);
            viewer.controls.movementSpeed = 0;
        } else {
            const target = new Vector3(0, 0, -10).applyMatrix4(
                viewer.camera.matrixWorld
            );
            model.lookAt(target);
            viewer.controls.movementSpeed = 2;
            mixer.update(evt.delta);
        }

        TWEEN.update();
    });
};

//--------------------------------------位置------------------------------------------------------
const vm = {
    modelHeight: 0,
    // rotate: 0,

    mapbox: () => {
        map.imgSource = util.mapboxImgSource;
        map.reload();
    },
    google: () => {
        map.imgSource = util.googleImgSource;
        map.reload();
    },
    bing: () => {
        map.imgSource = util.bingImgSource;
        map.reload();
    },
    toXmly: () => {
        const pos = map.project(86.92, 28.4);
        viewer.camera.position.set(pos.x, pos.y, 15);
    },
    toXian: () => {
        const pos = map.project(109, 34.7);
        viewer.camera.position.set(pos.x, pos.y, 8);
    },
    toBeijing: () => {
        const pos = map.project(116.4, 40);
        viewer.camera.position.set(pos.x, pos.y, 10);
    },
    toXiangGang: () => {
        const pos = map.project(114.18, 22.3);
        viewer.camera.position.set(pos.x, pos.y, 5);
    },
};

//--------------------------------------gui------------------------------------------------------
const intiGui = (model: Group) => {
    const gui = new GUI();

    const mapSetupFolder = gui.addFolder("环境");
    mapSetupFolder
        .add(viewer.scene.fog!, "density", 0.0001, 0.01, 0.0001)
        .name("能见度系数");
    mapSetupFolder
        .add(viewer.ambLight, "intensity", 0.1, 2.0, 0.1)
        .name("环境光强度");
    const mapPorviderFolder = gui.addFolder("地图源");
    mapPorviderFolder.add(vm, "mapbox");
    mapPorviderFolder.add(vm, "google").name("google(有偏移)");
    mapPorviderFolder.add(vm, "bing").name("bing(有偏移)");

    const modelFolder = gui.addFolder("小鸟");
    modelFolder.add(model, "visible").name("显示");
    modelFolder.add(viewer.controls, "autoForward").name("自动前进");
    modelFolder.add(model.position, "z").listen().name("飞行海拔高度km");
    modelFolder.add(vm, "modelHeight").listen().name("飞行距地高度km");

    const locationFolder = gui.addFolder("定位");
    locationFolder.add(vm, "toXian").name("西安");
    locationFolder.add(vm, "toBeijing").name("北京");

    locationFolder.add(vm, "toXmly").name("喜马拉雅");
};
//--------------------------------------------------------------------------------------
util.addSky(viewer as any);
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer as any, map);
