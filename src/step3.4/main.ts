import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import {
    AnimationMixer,
    CameraHelper,
    DirectionalLight,
    DirectionalLightHelper,
    Mesh,
    MeshPhongMaterial,
    PCFSoftShadowMap,
    Vector2,
    Vector3,
} from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import TWEEN, { Tween } from "three/examples/jsm/libs/tween.module";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as util from "../util";
import "./style.css";

// 创建地图
const map = util.createMap(util.mapboxImgSource, util.mapboxDemSource);
//-----------------------------------------------------------------------------------------------------
// 地图中心
const center = map.project(86, 30);
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -12, 8);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);

// 将地图加入三维场景
viewer.scene.add(map);

//-----------------------------------------------------------------------------------------------------
// 瓦片默认不接受阴影，监听瓦片创建事件给瓦片添加阴影
map.addEventListener("tile-created", (evt) => {
    evt.tile.receiveShadow = true;
    // evt.tile.castShadow = true;
});
viewer.renderer.shadowMap.enabled = true;
viewer.renderer.shadowMap.type = PCFSoftShadowMap;

viewer.ambLight.intensity = 0.3;
viewer.dirLight.intensity = 0.1;
//-----------------------------------------------------------------------------------------
const loader = new GLTFLoader();

// 加载模型并初始化
loader.loadAsync("../../model/Soldier.glb").then((gltf) => {
    initSoldier(gltf);
    initBird(gltf);
    initText(gltf);
    initLight(gltf);
    initGui(gltf);
});

//-----------------------------------------------------------------------------------------
// 模型上添加灯光
const initLight = (gltf: GLTF) => {
    const model = gltf.scene;
    const light = new DirectionalLight();
    light.target = model;
    light.position.set(5, 10, -5);
    light.castShadow = true;

    const shadowCamera = light.shadow.camera;
    shadowCamera.far = 30;
    shadowCamera.near = 0.1;
    shadowCamera.left = -2;
    shadowCamera.right = 2;
    shadowCamera.top = 2;
    shadowCamera.bottom = -2;
    model.add(light);
    viewer.scene.add(new DirectionalLightHelper(light));
    viewer.scene.add(new CameraHelper(light.shadow.camera));
};
//-----------------------------------------------------------------------------------------
const initSoldier = (gltf: GLTF) => {
    const model = gltf.scene;
    viewer.scene.add(model);
    model.traverse((child) => {
        child.receiveShadow = true;
        child.castShadow = true;
    });

    model.rotateX(Math.PI / 2);
    model.scale.setScalar(0.5);

    const mixer = new AnimationMixer(gltf.scene);
    mapclick(gltf, mixer);

    viewer.addEventListener("update", (evt) => {
        TWEEN.update();
        mixer.update(evt.delta);
    });
};

//-----------------------------------------------------------------------------------------
// 鸟模型
const initBird = (gltf: GLTF) => {
    const model = gltf.scene;
    loader.loadAsync("../../model/Stork.glb").then((stork) => {
        const bird = stork.scene;
        bird.rotateY(Math.PI);
        bird.scale.setScalar(0.005);
        bird.traverse((child) => {
            child.castShadow = true;
        });
        bird.position.set(0, 2, 2);
        model.add(bird);
        const mixer = new AnimationMixer(bird);
        mixer.clipAction(stork.animations[0]).play();
        viewer.addEventListener("update", (evt) => {
            TWEEN.update();
            mixer.update(evt.delta);
        });
    });
};
//-----------------------------------------------------------------------------------------
const initText = (gltf: GLTF) => {
    const loader = new FontLoader();

    loader.load(
        "../../fonts/helvetiker_regular.typeface.json",
        function (font) {
            const geometry = new TextGeometry("I'm a soldier", {
                font: font,
                size: 80,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelSegments: 5,
            });
            const materials = [
                new MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
                new MeshPhongMaterial({ color: 0xcccccc }), // side
            ];
            const textMesh = new Mesh(geometry, materials);
            textMesh.geometry.center();
            textMesh.scale.setScalar(0.002);
            textMesh.position.setY(2);
            textMesh.rotation.set(0, Math.PI, 0);
            gltf.scene.add(textMesh);
        }
    );
};
//-----------------------------------------------------------------------------------------
const mapclick = (gltf: GLTF, mixer: AnimationMixer) => {
    const model = gltf.scene;
    let tween = new Tween(model.position);
    viewer.container.addEventListener("click", (evt) => {
        const camera = viewer.camera;
        const pointer = new Vector2();
        // 鼠标点击的屏幕坐标（-0.5到+0.5范围）
        pointer.x = (evt.clientX / viewer.container.clientWidth) * 2 - 1;
        pointer.y = 1 - (evt.clientY / viewer.container.clientHeight) * 2;
        // 取得目标点坐标（光标处地面坐标）
        const endPostion = map.getLocationFromScreen(camera, pointer)?.point;
        if (!endPostion) {
            return;
        }
        // 开始点与目标点距离
        tween = runTo(gltf, mixer, endPostion, tween);
    });
};

const runTo = (
    gltf: GLTF,
    mixer: AnimationMixer,
    endPostion: Vector3,
    tween: Tween<Vector3>
) => {
    const model = gltf.scene;
    const anim = gltf.animations;

    tween.stop();
    tween = new Tween(model.position);

    // 修改模型朝向
    const lookPos = endPostion.clone();
    lookPos.setZ(model.position.z);
    model.lookAt(lookPos);
    model.rotateY(Math.PI);

    // 离目标点距离
    const dist = endPostion.distanceTo(model.position);
    // 距离近走过去，太远直接跳转
    if (dist < 30) {
        const speed = dist < 3 ? 3 : 1;
        tween
            .to(endPostion, dist * speed * 400)
            .start()
            .onStart(() => {
                mixer.stopAllAction();
                mixer.clipAction(anim[speed]).play();
            })
            .onUpdate((currentPositon, _elapsed) => {
                const pos = map.getLocalInfoFromWorld(
                    new Vector2(currentPositon.x, currentPositon.y)
                )?.point;
                if (pos) {
                    model.position.copy(pos);
                }
            })
            .onComplete(() => {
                mixer.stopAllAction();
                mixer.clipAction(anim[0]).play();
            });
    } else {
        model.position.copy(endPostion);
        mixer.stopAllAction();
    }
    return tween;
};
//--------------------------------------位置gui.vm------------------------------------------------------
const vm = {
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
    toXian: () => {
        const pos = map.project(108.94, 34.3);
        viewer.camera.position.set(pos.x, pos.y - 3, 2);
        viewer.controls.target.set(pos.x, pos.y, 0);
    },
    toFushishan: () => {
        const pos = map.project(138.7322, 35.35356);
        viewer.camera.position.set(pos.x, pos.y + 10, 8);
        viewer.controls.target.set(pos.x, pos.y, 0);
    },
    modelSize: 0.5,
};
//--------------------------------------gui------------------------------------------------------
const initGui = (gltf: GLTF) => {
    const gui = new GUI();

    const mapSetupFolder = gui.addFolder("环境");
    mapSetupFolder
        .add(viewer.ambLight, "intensity", 0.1, 2.0, 0.1)
        .name("环境光强度");
    mapSetupFolder
        .add(viewer.dirLight, "intensity", 0.1, 2.0, 0.1)
        .name("直射光强度");
    // mapSetupFolder
    //     .add(viewer, "cameraZ", 0, 10, 0.1)
    //     .name("观察者海拔高度km")
    //     .listen()
    //     .onChange((value: number) => viewer.camera.position.setY(value));
    const mapPorviderFolder = gui.addFolder("地图源");
    mapPorviderFolder.add(vm, "mapbox");
    mapPorviderFolder.add(vm, "google").name("google(有偏移)");
    mapPorviderFolder.add(vm, "bing").name("bing(有偏移)");

    const locationFolder = gui.addFolder("定位");
    locationFolder.add(vm, "toXian").name("西安");
    locationFolder.add(vm, "toFushishan").name("富士山");
    const controlFolder = gui.addFolder("控制");
    controlFolder
        .add(vm, "modelSize", 0.01, 2, 0.01)
        .name("模型大小")
        .onChange((value: number) => gltf.scene.scale.setScalar(value));
};
//--------------------------------------------------------------------------------------
util.addSky(viewer);
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer as any, map);
