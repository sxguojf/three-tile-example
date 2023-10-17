import {
    Color,
    Matrix4,
    Mesh,
    MeshLambertMaterial,
    PlaneGeometry,
    TextureLoader,
    Vector2,
    Vector3,
} from "three";
import "./style.css";

import * as util from "../util";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap([util.mapboxImgSource, util.zkxtCiaSource]);
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

/*----------------------------------------------------------------*/
// 调暗地图以突出图片
map.addEventListener("tile-loaded", (evt) => {
    evt.tile.material.forEach((mat: any) =>
        mat.color?.set(new Color(0x888888))
    );
});
/*----------------------------------------------------------------*/

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

// 加载图片
(() => {
    const mesh = new Mesh(
        new PlaneGeometry(),
        new MeshLambertMaterial({
            map: new TextureLoader().load(
                "../../image/ACHN_QREF_20210725_100000.png"
            ),
            transparent: true,
            // alphaTest: 0.2,
        })
    );
    const sw = new Vector2(67, 11);
    const ne = new Vector2(140, 57);
    mesh.applyMatrix4(getMatrix(sw, ne, 6));
    mesh.renderOrder = 10;
    viewer.scene.add(mesh);
})();

//-------------------------------------------
util.showLocation(viewer, map);
util.showLoadstate(map);
