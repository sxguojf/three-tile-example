import {
    BoxGeometry,
    BoxHelper,
    Color,
    Group,
    Mesh,
    Vector2,
    Vector3,
} from "three";
// import * as tt from "../dist/three-tile";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min";
import "./style.css";

import * as util from "../util";
import GridMesh from "./GridMesh";
import { loadMd4 } from "./gridLoader";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(
    [util.zkxtImgSource, util.zkxtCiaSource],
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

const highGrid = (() => {
    const high = new GridMesh();
    loadMd4("../data/md4/10112608.000").then((data) => {
        high.setData(data.data);
    });
    high.scale.setZ(0.5);
    return high;
})();

dataGroup.add(highGrid);
viewer.scene.add(dataGroup);
dataGroup.visible = false;
//-------------------------------------------
const gui = new GUI();
const gridFolder = gui.addFolder("500hpa高度场");
gridFolder
    .add(dataGroup.scale, "z", 100, 1000, 1)
    .name("垂直拉伸")
    .onChange((value: number) => (dataGroup.position.z = value / 2));
gridFolder.add(highGrid.material, "opacity", 0.1, 1, 0.1).name("透明度");
gridFolder.add(highGrid.material, "wireframe").name("网格");

//-------------------------------------------
// util.addMapBackground(map);
util.showLocation(viewer, map);
util.showLoadstate(map);
