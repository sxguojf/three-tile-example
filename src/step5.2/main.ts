import {
    BoxGeometry,
    BoxHelper,
    Color,
    DoubleSide,
    Group,
    Mesh,
    MeshLambertMaterial,
    MeshPhongMaterial,
    PlaneGeometry,
    Texture,
    TextureLoader,
    Vector2,
    Vector3,
} from "three";
// import * as tt from "../dist/three-tile";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import "./style.css";

import * as util from "../util";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(util.mapboxImgSource, util.zkxtDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.project(105, 34);
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -3e3, 4e3);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

viewer.scene.background = new Color(0);

//---------------------------------------------------------------

const dataGroup = ((sw: Vector2, ne: Vector2) => {
    const group = new Group();
    group.applyMatrix4(util.getMatrixFromBounds(map, sw, ne, 1));
    group.scale.setZ(200);
    group.translateZ(100);
    group.renderOrder = 10;
    const box = new Mesh(new BoxGeometry());
    const helper = new BoxHelper(box, 0xff00ff);
    group.add(helper);
    return group;
})(new Vector2(67, 11), new Vector2(140, 57));

// 雷达图
const radar = (() => {
    const radarMesh = new Mesh<PlaneGeometry, MeshLambertMaterial>(
        new PlaneGeometry(1, 1, 1058 / 2, 840 / 2),
        createShader({ scale: 0.5 })
        // new MeshLambertMaterial({ transparent: true })
    );
    loadRadarImage(radarMesh, "../image/ACHN_QREF_20210725_100000.png");
    radarMesh.renderOrder = 10;
    return radarMesh;
})();

dataGroup.add(radar);
viewer.scene.add(dataGroup);

//-------------------------------------------
function loadRadarImage(
    radar: Mesh<PlaneGeometry, MeshLambertMaterial>,
    fn: string
) {
    radar.material.map?.dispose();
    radar.material.map = new TextureLoader().load(fn, (texture) => {
        texture.needsUpdate = true;
    });
    return radar;
}

// 将MeshLambertMaterial的alpha通道作为高度，实现二维图片拉伸成三维
function createShader(options = { scale: 1 }) {
    const material = new MeshPhongMaterial({
        displacementMap: new Texture(),
        transparent: true,
        displacementScale: options.scale, //垂直拉伸系数
        displacementBias: 0, //垂直位移
        side: DoubleSide,
        // wireframe: true,
        // blending: AdditiveBlending,
    });
    // 未重新计算法向量，无法实现凹凸阴影
    material.onBeforeCompile = (shader) => {
        shader.vertexShader =
            `uniform sampler2D map;
        ` + shader.vertexShader;

        shader.vertexShader = shader.vertexShader.replace(
            "#include <displacementmap_vertex>",
            `transformed += normalize( objectNormal ) * ( texture2D(map, vMapUv ).a * displacementScale + displacementBias );`
        );
        // console.log(shader.vertexShader);
        // shader.fragmentShader = shader.fragmentShader.replace(
        //     "#include <alphamap_fragment>",
        //     `
        //     #include <alphamap_fragment>
        //     float h = texture2D(map, vMapUv ).a-0.2;
        //     diffuseColor.rgb = vec3(h);
        //     diffuseColor.a = clamp(diffuseColor.a * 2.0, 0.0, 1.0);
        //     `
        // );
        // console.log(shader.fragmentShader);
    };

    return material;
}

//-------------------------------------------
const gui = new GUI();
gui.add(dataGroup.scale, "z", 100, 500, 1)
    .name("雷达图垂直拉伸")
    .onChange((value: number) => (dataGroup.position.z = value / 2));
gui.add(radar.material, "wireframe").name("雷达图网格");
const envFolder = gui.addFolder("环境设置");
envFolder.addColor(viewer.ambLight, "color").name("环境光颜色");
envFolder.add(viewer.ambLight, "intensity", 0, 1, 0.1).name("环境光强度");
envFolder.addColor(viewer.dirLight, "color").name("直射光颜色");
envFolder.add(viewer.dirLight, "intensity", 0, 1, 0.1).name("直射光强度");

//-------------------------------------------
// util.addMapBackground(map);
util.showLocation(viewer, map);
util.showLoadstate(map);
