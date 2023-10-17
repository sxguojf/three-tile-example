import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import {
    CubeTextureLoader,
    Group,
    Mesh,
    MeshPhongMaterial,
    SphereGeometry,
    TextureLoader,
    Vector2,
    Vector3,
} from "three";
import TWEEN, { Tween } from "three/examples/jsm/libs/tween.module";
import * as util from "../util";
import { MyViewer } from "./MyViewer";
import "./style.css";

// 创建地图
const map = util.createMap(util.googleImgSource, util.mapboxDemSource);
// 为了与PointLockControls适配，需要将地图旋转-90°
map.rotateX(-Math.PI / 2);
//-----------------------------------------------------------------------------------------------------
// 取得地图dom容器
const glContainer = document.querySelector<HTMLElement>("#map");
// 地图中心
const center = map.project(85.7, 28.3);
// 使用自定义类初始化三维场景
const viewer = new MyViewer(
    glContainer!,
    new Vector3(center.x - 2, 8, -center.y - 6)
);
viewer.camera.lookAt(center.x, 5, -center.y);
// 将地图加入三维场景
viewer.scene.add(map);

//-----------------------------------------------------------------------------------------------------
// 瓦片默认不接受阴影，监听瓦片创建事件给瓦片添加阴影
map.addEventListener("tile-created", (evt) => {
    evt.tile.receiveShadow = true;
    // evt.tile.castShadow = true;
});

//-----------------------------------------------------------------------------------------
// const gun = new Mesh(
//     new CapsuleGeometry(0.1, 1, 16, 16),
//     new MeshPhongMaterial({ color: 0, shininess: 10 })
// );
// gun.position.set(0, -1, -1);
// gun.rotateX(Math.PI / 2);
// viewer.camera.add(gun);
//-----------------------------------------------------------------------------------------
const bombGroup = new Group();
map.add(bombGroup);

const ball = new Mesh(
    new SphereGeometry(),
    new MeshPhongMaterial({
        map: new TextureLoader().load("../../image/test.jpg"),
        // shininess: 3,
        transparent: true,
    })
);
ball.castShadow = true;
ball.receiveShadow = true;

//----------------------------------射击-----------------------------------------------------
viewer.container.addEventListener("click", (evt) => {
    const camera = viewer.controls.getObject();
    if (!viewer.controls.isLocked || evt.button != 0) {
        return;
    }

    // 取得目标点坐标（光标处地面坐标）
    const endPostion = map.getLocationFromScreen(
        camera,
        new Vector2(0, 0)
    )?.point;
    if (!endPostion) {
        return;
    }

    const aBall = ball.clone();
    aBall.scale.setScalar(viewer.cameraZ / 40);
    bombGroup.add(aBall);
    // 摄像机坐标转换为地图坐标
    const startPosition = camera.position
        .clone()
        .applyMatrix4(map.matrixWorld.clone().invert());
    aBall.position.copy(startPosition);

    // 球飞行动画
    const delay = 1000;
    new Tween(aBall.position)
        .to({ x: endPostion.x, y: endPostion.y }, delay)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();
    new Tween(aBall.position)
        .to({ z: endPostion.z }, delay)
        .easing(TWEEN.Easing.Quadratic.In)
        .start()
        .onComplete(() => {
            setTimeout(() => {
                aBall.removeFromParent();
                aBall.geometry.dispose();
                aBall.material.dispose();
            }, 10 * delay);
        });
    new Tween(aBall.rotation)
        .to({ x: Math.PI, y: Math.PI, z: Math.PI }, delay)
        .start();

    // 后坐力动画
    const cameraY = camera.position.y;
    new Tween(camera.position)
        .to({ y: cameraY + 1 }, 100)
        .repeat(1)
        .yoyo(true)
        .start(1);
});

viewer.container.addEventListener("mousewheel", (evt) => {
    if (viewer.controls.isLocked) {
        if (evt instanceof WheelEvent) {
            viewer.cameraZ += evt.deltaY / 500;
        }
    }
});

viewer.addEventListener("update", (_evt) => {
    TWEEN.update();

    viewer.dirLight.position.set(1, 3, 0);
    viewer.dirLight.position.applyMatrix4(viewer.camera.matrixWorld);
    viewer.dirLight.updateMatrixWorld();

    viewer.dirLight.target.position.set(0, 2, -5);
    viewer.dirLight.target.position.applyMatrix4(viewer.camera.matrixWorld);
    viewer.dirLight.target.updateMatrixWorld();
});

//--------------------------------------位置------------------------------------------------------
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
        viewer.camera.position.set(pos.x, 2, -pos.y + 5);
        viewer.cameraZ = 2;
        viewer.camera.rotation.set(-0.46, 0, 0);
    },
    toXiangGang: () => {
        const pos = map.project(114.18, 22.3);
        viewer.camera.position.set(pos.x, 2, -pos.y);
        viewer.cameraZ = 2;
        viewer.camera.rotation.set(-0.46, 0, 0);
    },
    toFushishan: () => {
        const pos = map.project(138.7322, 35.35356);
        viewer.camera.position.set(pos.x, 5, -pos.y + 5);
        viewer.cameraZ = 5;
        viewer.camera.rotation.set(-0.46, 0, 0);
    },
};
//--------------------------------------gui------------------------------------------------------
(() => {
    const gui = new GUI();

    const mapSetupFolder = gui.addFolder("环境");
    mapSetupFolder
        .add(viewer.scene.fog!, "density", 0.0001, 0.01, 0.0001)
        .name("能见度系数");
    mapSetupFolder
        .add(viewer.ambLight, "intensity", 0.1, 2.0, 0.1)
        .name("环境光强度");
    mapSetupFolder
        .add(viewer.dirLight, "intensity", 0.1, 2.0, 0.1)
        .name("直射光强度");

    const mapPorviderFolder = gui.addFolder("地图源");
    mapPorviderFolder.add(vm, "mapbox");
    mapPorviderFolder.add(vm, "google").name("google(有偏移)");
    mapPorviderFolder.add(vm, "bing").name("bing(有偏移)");

    const locationFolder = gui.addFolder("定位");
    locationFolder.add(vm, "toXian").name("西安");
    locationFolder.add(vm, "toXiangGang").name("香港");
    locationFolder.add(vm, "toFushishan").name("富士山");

    const controlFolder = gui.addFolder("控制");
    controlFolder
        .add(viewer, "cameraZ", 0, 10, 0.1)
        .name("飞行海拔高度km")
        .listen()
        .onChange((value: number) => viewer.camera.position.setY(value));
    controlFolder.add(viewer, "autoForward").name("自动前进");
})();
//--------------------------------------------------------------------------------------
const showSky = (viewer: MyViewer) => {
    const bk = new CubeTextureLoader()
        .setPath("../../image/skybox/")
        // 左右上下前后
        .load([
            "skybox_py.png",
            "skybox_py.png",
            "skybox_px.png",
            "skybox_px.png",
            "skybox_pz.png",
            "skybox_pz.png",
        ]);
    // bk.rotation = -Math.PI / 2;
    // bk.flipY = true;
    viewer.scene.background = bk;
};

showSky(viewer as any);
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer as any, map);
