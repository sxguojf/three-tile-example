import {
    BoxGeometry,
    BoxHelper,
    Color,
    DoubleSide,
    Group,
    Matrix4,
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
const map = util.createMap(
    [util.mapboxImgSource, util.zkxtCiaSource],
    util.zkxtDemSource
);
// 地图中心经纬度，转换为场景坐标
const center = map.project(105, 28);
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(0, -2e3, 3e3);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

/*----------------------------------------------------------------*/
viewer.scene.background = new Color(0);
// 调暗地图以突出图片
map.addEventListener("tile-loaded", (evt) => {
    evt.tile.material.forEach((mat: any) =>
        mat.color?.set(new Color(0x888888))
    );
});
//---------------------------------------------------------------

// 根据图片西南、东北角经纬度，计算图片的变换矩阵
const getMatrix = (sw: Vector2, ne: Vector2, alt: number) => {
    // 经纬度转换为场景坐标
    const p1 = map.project(sw.x, sw.y);
    const p2 = map.project(ne.x, ne.y);
    // 计算缩放和位置
    const scale = new Vector3(p2.x - p1.x, p2.y - p1.y, 1);
    const pos = new Vector3(p1.x + scale.x / 2, p2.y - scale.y / 2, alt);

    const matrix = new Matrix4();
    matrix.setPosition(pos);
    matrix.scale(scale);
    return matrix;
};

const dataGroup = ((sw: Vector2, ne: Vector2) => {
    const group = new Group();
    group.applyMatrix4(getMatrix(sw, ne, 1));
    group.scale.setZ(200);
    group.translateZ(100);
    group.renderOrder = 10;
    const box = new Mesh(new BoxGeometry());
    const helper = new BoxHelper(box, 0xff00ff);
    group.add(helper);
    return group;
})(new Vector2(67, 11), new Vector2(140, 57));

// 卫星云图
const cloud = (() => {
    const cloudMesh = new Mesh<PlaneGeometry, MeshLambertMaterial>(
        new PlaneGeometry(1, 1, 1058 / 2, 840 / 2),
        createShader({ scale: 0.5 })
    );
    loadCloudImage(
        cloudMesh,
        "../image/SATE_L1_F2G_VISSR_MWB_NOM_FDI-202107241900.HDF.png"
    );
    return cloudMesh;
})();

dataGroup.add(cloud);
viewer.scene.add(dataGroup);
//-------------------------------------------
const gui = new GUI();
const cloudFolder = gui.addFolder("卫星云图");
cloudFolder
    .add(dataGroup.scale, "z", 100, 500, 1)
    .name("垂直拉伸")
    .onChange((value: number) => (dataGroup.position.z = value / 2));
cloudFolder.addColor(cloud.material, "color").name("颜色");
cloudFolder.add(cloud.material, "opacity", 0.1, 1, 0.1).name("透明度");
cloudFolder.add(cloud.material, "wireframe").name("网格");

const envFolder = gui.addFolder("环境设置");
envFolder.addColor(viewer.ambLight, "color").name("环境光颜色");
envFolder.add(viewer.ambLight, "intensity", 0, 1, 0.1).name("环境光强度");
envFolder.addColor(viewer.dirLight, "color").name("直射光颜色");
envFolder.add(viewer.dirLight, "intensity", 0, 1, 0.1).name("直射光强度");

//-------------------------------------------
function loadCloudImage(
    cloud: Mesh<PlaneGeometry, MeshLambertMaterial>,
    fn: string
) {
    cloud.material.map?.dispose();
    cloud.material.map = new TextureLoader().load(fn, (texture) => {
        texture.needsUpdate = true;
    });

    return cloud;
}

// 将MeshLambertMaterial的alpha通道作为高度，实现二维图片拉伸成三维
function createShader(options = { scale: 1 }) {
    const material = new MeshPhongMaterial({
        displacementMap: new Texture(),
        transparent: true,
        displacementScale: options.scale, //垂直拉伸系数
        displacementBias: 0, //垂直位移
        side: DoubleSide,
        opacity: 0.6,
        color: new Color(0xcccccc),
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
        shader.fragmentShader = shader.fragmentShader.replace(
            "#include <alphamap_fragment>",
            `
            #include <alphamap_fragment>
            float h = texture2D(map, vMapUv ).a;
            diffuseColor.rgb *= h;
            diffuseColor.a = clamp(diffuseColor.a * 2.0, 0.0, 1.0);
            `
        );
        // console.log(shader.fragmentShader);
    };

    return material;
}

//-------------------------------------------
util.addMapBackground(map);
util.showLocation(viewer, map);
util.showLoadstate(map);
