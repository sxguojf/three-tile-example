import { Color, PointLight, TextureLoader } from "three";
import { Vector3 } from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import {
    Lensflare,
    LensflareElement,
} from "three/examples/jsm/objects/Lensflare";
import * as util from "../util";

import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(util.googleImgSource, util.mapboxDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.project(100, 35);
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -1e4, 3e3);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

//---------------------------------------------------------------------------------------
viewer.ambLight.intensity = 0.1;
viewer.dirLight.intensity = 0.1;

const backColor = new Color(0);
// viewer.renderer.outputColorSpace = LinearSRGBColorSpace;
viewer.scene.background = backColor;
viewer.scene.fog!.color = backColor;

//----------------------------------------太阳--------------------------------------------

const lensflare = (() => {
    const textureLoader = new TextureLoader();
    const textureFlare0 = textureLoader.load(
        "../../image/lensflare/lensflare0.png"
    );
    const textureFlare1 = textureLoader.load(
        "../../image/lensflare/lensflare1.png"
    );
    const textureFlare3 = textureLoader.load(
        "../../image/lensflare/lensflare3.png"
    );
    const lensflare = new Lensflare();
    lensflare.addElement(new LensflareElement(textureFlare0, 512));
    lensflare.addElement(new LensflareElement(textureFlare1, 256, 0));
    lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.4));
    lensflare.addElement(new LensflareElement(textureFlare3, 100, 0.6));
    lensflare.addElement(new LensflareElement(textureFlare3, 200, 0.8));
    lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.9));
    lensflare.position.set(5000, 20000, 3000);
    lensflare.frustumCulled = false;
    return lensflare;
})();
viewer.scene.add(lensflare);

//---------------------------------------------------------------------------------------
// 添加灯光
const pointLight = (() => {
    const spotLight = new PointLight(new Color(0xffffff), 3);
    spotLight.position.copy(lensflare.position);
    spotLight.frustumCulled = false;
    return spotLight;
})();
viewer.scene.add(pointLight);
// viewer.scene.add(new PointLightHelper(pointLight, 1000));

//---------------------------------------------------------------------------------------

const gui = new GUI();
const envFolder = gui.addFolder("环境设置");
envFolder.addColor(viewer.ambLight, "color").name("环境光颜色");
envFolder.add(viewer.ambLight, "intensity", 0, 1, 0.1).name("环境光强度");
envFolder.addColor(viewer.dirLight, "color").name("直射光颜色");
envFolder.add(viewer.dirLight, "intensity", 0, 1, 0.1).name("直射光强度");
envFolder.addColor(viewer.scene, "background").name("天空颜色");

//---------------------------------------------------------------
util.showLoadingTile(map);
util.showLoadstate(map);
util.showLocation(viewer, map);
