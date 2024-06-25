import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import {
	BufferGeometry,
	Color,
	Float32BufferAttribute,
	Points,
	PointsMaterial,
	SRGBColorSpace,
	Sprite,
	SpriteMaterial,
	TextureLoader,
	Vector3,
} from "three";
import * as util from "../util";
import * as ms from "../mapSource";
import "./style.css";

// 自定义场景初始化类
import { MyViewer } from "./MyViewer";

// 创建地图
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 取得地图dom容器（div）
const glContainer = document.querySelector<HTMLElement>("#map");
// 地图中心
const center = map.geo2pos(new Vector3(94.8, 29.6));
// 使用自定义类初始化三维场景
const viewer = new MyViewer(glContainer!, new Vector3(center.x, center.y, 8));

// 将地图加入三维场景
viewer.scene.add(map);

//--------------------------------------------------------------------------------------
//下雨
const rain = (() => {
	const texture = new TextureLoader().load("../image/rain.png");
	texture.rotation = 0.2;
	const material = new PointsMaterial({
		size: 10,
		map: texture,
		transparent: true,
		depthTest: false,
		fog: false,
		sizeAttenuation: false,
	});

	const positions: number[] = [];
	const geom = new BufferGeometry();
	const count = 5000;

	for (let i = 0; i < count; i++) {
		positions.push(0);
		positions.push(0);
		positions.push(-Math.random() * 10);
	}
	geom.setAttribute("position", new Float32BufferAttribute(positions, 3));
	const rain = new Points(geom, material);
	rain.renderOrder = 10;
	rain.userData.speed = 25;
	viewer.scene.add(rain);

	map.addEventListener("update", (evt) => {
		if (viewer.rain) {
			const positions = geom.attributes.position;
			for (let i = 0; i < positions.count; i++) {
				if (positions.getZ(i) < 0) {
					positions.setXYZ(
						i,
						center.x + Math.random() * 100 - 50,
						center.y + Math.random() * 100 - 80,
						Math.random() * 30,
					);
				} else {
					positions.setXYZ(
						i,
						positions.getX(i) + 0.1,
						positions.getY(i), // + 0.1,
						positions.getZ(i) - evt.delta * rain.userData.speed,
					);
				}
			}
			geom.attributes.position.needsUpdate = true;
		}
	});
	return rain;
})();

//--------------------------------------------------------------------------------------
// 闪电
(() => {
	const texture = new TextureLoader().load("../image/thunder.png");
	texture.colorSpace = SRGBColorSpace;
	const thunder = new Sprite(new SpriteMaterial({ map: texture, fog: false, depthTest: false }));
	thunder.position.set(center.x, center.y + 30, 15);
	thunder.scale.setScalar(20);
	viewer.scene.add(thunder);
	map.addEventListener("update", (_evt) => {
		if (viewer.flash) {
			let color = new Color(0x001122);
			thunder.visible = false;
			viewer.ambLight.intensity = 0.5;
			viewer.dirLight.intensity = 0.5;
			if (Math.round(Math.random() * 10) % 20 === 0) {
				color = new Color(0x002266);
				thunder.position.setX(center.x + Math.random() * 100 - 50);
				thunder.visible = true;
				viewer.ambLight.intensity = 5.0;
				viewer.dirLight.intensity = 3.0;
			}
			viewer.scene.fog?.color.set(color);
			viewer.scene.background = new Color(color);
		}
	});
})();

//--------------------------------------------------------------------------------------
const gui = new GUI();
const mapSetupFolder = gui.addFolder("地图控制");
mapSetupFolder.add(map.scale, "z", 1, 10, 0.1).name("高度拉伸倍数");
mapSetupFolder.add(map.position, "z", -1, 1, 0.01).name("高度偏移");
mapSetupFolder.add(viewer.controls, "minPolarAngle", Math.PI / 4, Math.PI / 2, 0.1).name("最小倾角限制");
mapSetupFolder.add(viewer.controls, "maxPolarAngle", Math.PI / 4, Math.PI / 2, 0.1).name("最大倾角限制");
mapSetupFolder.add(viewer.controls, "enableDamping").name("惯性控制");
mapSetupFolder.add(viewer.controls, "autoRotate").name("自动旋转");
mapSetupFolder.add(map, "reload").name("重建瓦片树");
const envFolder = gui.addFolder("环境设置");
envFolder.addColor(viewer.ambLight, "color").name("环境光颜色");
envFolder.addColor(viewer.dirLight, "color").name("直射光光颜色");
envFolder.add(viewer, "flash").name("闪电特效");
envFolder
	.add(viewer, "rain")
	.name("下雨特效")
	.onChange((value: boolean) => (rain.visible = value));
envFolder.add(rain.material, "size", 5, 20, 0.1).name("雨滴大小");
envFolder.add(rain.userData, "speed", 2, 100, 1).name("雨滴速度");

//--------------------------------------------------------------------------------------
util.showLoadstate(map);
util.showLocation(viewer as any, map);
