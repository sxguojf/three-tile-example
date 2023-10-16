import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
// import * as tt from "../dist/three-tile";
import { Mesh, MeshPhongMaterial, TorusKnotGeometry, Vector3 } from "three";
import * as util from "../util";

import "./style.css";

// 自定义场景初始化类
import { MyViewer } from "./MyViewer";

// 创建地图
const map = util.createMap(util.mapboxImgSource, util.mapboxDemSource);
// map.rotateX(-Math.PI / 2);
//-----------------------------------------------------------------------------------------------------
// 取得地图dom容器
const glContainer = document.querySelector<HTMLElement>("#map");
// 地图中心
const center = map.project(86.92, 27.95);
// 使用自定义类初始化三维场景
const viewer = new MyViewer(glContainer!, new Vector3(center.x, center.y, 10));
// 将地图加入三维场景
viewer.scene.add(map);

//-----------------------------------------------------------------------------------------------------

// 瓦片默认不接受阴影，监听瓦片创建事件给瓦片添加阴影
// map.addEventListener("tile-created", (evt) => {
//     evt.tile.receiveShadow = true;
//     evt.tile.castShadow = true;
// });
//-----------------------------------------------------------------------------------------------------
const ball = (() => {
    const mesh = new Mesh(
        new TorusKnotGeometry(1, 0.3, 128, 16),
        new MeshPhongMaterial({
            color: 0x333333,
            shininess: 30,
            specular: 0xcccccc,
            emissive: 0,
        })
    );
    mesh.position.set(center.x, center.y - 5, 8);
    mesh.castShadow = true;
    return mesh;
})();
map.add(ball);

//--------------------------------------地图控制gui------------------------------------------------------
(() => {
    const gui = new GUI();

    gui.add(viewer.camera, "near", 0.1, 100, 0.1).listen();
    gui.add(viewer.camera, "far", 0.1, 1e4, 0.1).listen();

    // gui.add(viewer.depthPlane, "visible");
})();
//--------------------------------------------------------------------------------------
util.showLocation(viewer as any, map);
util.addMapBackground(map);
util.showLoadstate(map);
