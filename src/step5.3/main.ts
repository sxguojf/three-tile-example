import {
    Group,
    Mesh,
    MeshLambertMaterial,
    MeshPhongMaterial,
    OctahedronGeometry,
    PCFSoftShadowMap,
    SpotLight,
    SpotLightHelper,
    Vector3,
} from "three";
// import * as tt from "../dist/three-tile";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as util from "../util";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(
    [util.mapboxImgSource, util.zkxtCiaSource],
    util.mapboxDemSource
);
// 地图中心经纬度，转换为场景坐标
const center = map.project(105, 35);
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -6e3, 5e3);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

//---------------------------------------------------------------
// 调暗默认灯光使用聚光灯
viewer.ambLight.intensity = 0.1;
viewer.dirLight.intensity = 0.1;

//---------------------------------------------------------------
// 开启阴影
viewer.renderer.shadowMap.enabled = true;
viewer.renderer.shadowMap.type = PCFSoftShadowMap;
(() => {
    const el = document.querySelector("#shadow") as HTMLInputElement;
    el.addEventListener("click", () => {
        viewer.renderer.shadowMap.enabled = el.checked;
        viewer.renderer.shadowMap.needsUpdate = true;
        map.rootTile.traverse((tile) => {
            tile.material.forEach((mat) => {
                mat.needsUpdate = true;
            });
        });
    });
})();

// 添加灯光以产生阴影
const spotLight = (() => {
    const spotLight = new SpotLight(0xffffff, 3, 3e4, Math.PI / 3.5);
    const pos = map.project(105, 30);
    spotLight.position.set(pos.x, pos.y - 3e3, 6e3);
    spotLight.target.position.set(pos.x, pos.y, 0);
    spotLight.castShadow = true;
    return spotLight;
})();

viewer.scene.add(spotLight);
viewer.scene.add(new SpotLightHelper(spotLight));

//---------------------------------------------------------------
// 添加卫星
const statellite = new Mesh(
    new OctahedronGeometry(100),
    new MeshPhongMaterial({ color: 0x8888ff })
);
statellite.position.copy(spotLight.position);
statellite.lookAt(spotLight.target.position);
viewer.scene.add(statellite);

// 瓦片默认接受阴影，监听瓦片创建事件给瓦片添加阴影
map.addEventListener("tile-created", (evt) => {
    evt.tile.receiveShadow = true;
});

//---------------------------------------------------------------
// 加载模型
const mat = new MeshLambertMaterial({
    color: 0xbbbbbb,
    transparent: true,
    opacity: 0.9,
});

let cloud: Group;
new GLTFLoader().load("../../model/cloud09.glb", (gltf) => {
    cloud = gltf.scene;
    const pos = map.project(60, 0);
    cloud.position.set(pos.x, pos.y, 2);
    cloud.scale.setScalar(50);
    cloud.rotation.set(Math.PI / 2.0, Math.PI / 2.0, 0);
    cloud.traverse((child) => {
        if (child instanceof Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material = mat;
        }
    });

    viewer.scene.add(cloud);
});

//---------------------------------------------------------------
util.addMapBackground(map);
util.showLoadstate(map);
util.showLocation(viewer, map);
// showSky(viewer);
