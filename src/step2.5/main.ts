import { Color, PointLight, TextureLoader } from "three";
// import * as tt from "../dist/three-tile";
import { Vector3 } from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import { Lensflare, LensflareElement } from "three/examples/jsm/objects/Lensflare";
import * as util from "../util";
import * as ms from "../mapSource";

import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度高度
const centerGeo = new Vector3(108, 34, 0);
// 摄像机经纬度高度
const cameraGeo = new Vector3(108, -10, 3000);
// 创建viewer
const viewer = util.createViewer("#map", map, centerGeo, cameraGeo);

//---------------------------------------------------------------------------------------

const backColor = new Color(0);
viewer.scene.background = backColor;
viewer.scene.fog!.color = backColor;

//----------------------------------------太阳--------------------------------------------

const lensflare = (() => {
	const textureLoader = new TextureLoader();
	const textureFlare0 = textureLoader.load("../image/lensflare/lensflare0.png");
	const textureFlare1 = textureLoader.load("../image/lensflare/lensflare1.png");
	const textureFlare3 = textureLoader.load("../image/lensflare/lensflare3.png");
	const lensflare = new Lensflare();
	lensflare.addElement(new LensflareElement(textureFlare0, 512));
	lensflare.addElement(new LensflareElement(textureFlare1, 256, 0));
	lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.4));
	lensflare.addElement(new LensflareElement(textureFlare3, 100, 0.6));
	lensflare.addElement(new LensflareElement(textureFlare3, 200, 0.8));
	lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.9));
	lensflare.position.set(5000, 3000, -20000);
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

//---------------------------------------------------------------------------------------

util.addFakeEarth(viewer, map);

//---------------------------------------------------------------------------------------
const gui = new GUI();
const envFolder = gui.addFolder("环境设置");
envFolder.addColor(viewer.ambLight, "color").name("环境光颜色");
envFolder.add(viewer.ambLight, "intensity", 0, 5, 0.1).name("环境光强度");
envFolder.addColor(viewer.dirLight, "color").name("直射光颜色");
envFolder.add(viewer.dirLight, "intensity", 0, 4, 0.1).name("直射光强度");
envFolder.addColor(viewer.scene, "background").name("天空颜色");

//---------------------------------------------------------------
util.showLoadstate(map);
util.showLocation(viewer, map);
