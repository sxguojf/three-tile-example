import {
    CubeTextureLoader,
    Matrix4,
    Mesh,
    MeshBasicMaterial,
    PlaneGeometry,
    SRGBColorSpace,
    TextureLoader,
    Vector2,
    Vector3,
} from "three";
import * as tt from "./three-tile/three-tile.es";

// const MAPBOXKEY =
//     "pk.eyJ1IjoiZ3VvamYiLCJhIjoiY2tlZzBkbDh4MGdwZTJ4cnpweTE5a3A1ayJ9.mQnCskKBn7ni_C7zdSO8Gw";
export const MAPBOXKEY =
    "pk.eyJ1Ijoiemhhbmdjb29raWUiLCJhIjoiY2tyMngybmVvMGl3cTJvcGRrNzNna2FxcyJ9.Abt7my-eFxMOmgxGXwVknA";
export const mapboxImgSource = new tt.MapBoxImgSource(MAPBOXKEY);
export const mapboxDemSource = new tt.MapBoxDemSource(MAPBOXKEY);

export const googleImgSource = new tt.GoogleSource("y");
export const bingImgSource = new tt.BingSource();

export const MAPTILERKEY = "get_your_own_key_QmavnBrQwNGsQ8YvPzZg";
export const mapTilerDemSource = new tt.MapTilerDemSource(MAPTILERKEY);

export const ZKXTKEY =
    // "82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f";
    "e3b2af83e1611acc0273002ef80b418eacf3630e11f2901c6b2ff9bb152c24d6";
// "4ea7bc4e9a2efc4e76be33d9511600dfa3b4f24bb81cb69561ab0b833d9b482c";
export const zkxtCiaSource = new tt.ZKXTImgSource(ZKXTKEY, "cia");
export const zkxtImgSource = new tt.ZKXTImgSource(ZKXTKEY, "img");
export const zkxtDemSource = new tt.ZKXtDemSource(ZKXTKEY);

// 创建地图
export const createMap = (
    imgSource: tt.ISource | tt.ISource[] = mapboxImgSource,
    demSource?: tt.ISource
) => {
    return tt.TileMap.create({
        // 影像数据源
        imgSource: imgSource,
        // 地形数据源
        demSource: demSource,
        // 地图投影中心经度
        projCenterLon: 90,
        // 最小缩放级别
        minLevel: 2,
        // 最大缩放级别
        maxLevel: 18,
    });
};

// 创建vie
export const createViewer = (id: string, center: Vector3, offset: Vector3) => {
    // 取得地图dom容器
    const glContainer = document.querySelector<HTMLElement>(id);
    if (!glContainer) {
        throw new Error(`Element ${id} is not found!`);
    }
    // 初始化三维场景(调用three-tile内置的初始化类)
    return new tt.GLViewer(
        // 地图容器
        glContainer,
        // 目标坐标（地图中心）
        center,
        // 观察者坐标（摄像机位置）
        center.clone().add(offset)
    );
};

// 显示正在加载的瓦片
export const showLoadingTile = (
    map: tt.TileMap,
    id: string = "#show-loading-tile"
) => {
    const el = document.querySelector(id) as HTMLInputElement;
    el?.addEventListener("click", () => (map.loader.showLoading = el.checked));
};

// 显示地图加载进度
export const showLoadstate = (map: tt.TileMap, id: string = "#load-state") => {
    const el = document.querySelector(id);
    if (el) {
        map.addEventListener("loading-start", (evt) => {
            el.innerHTML =
                "Started: " +
                evt.itemsLoaded +
                " of " +
                evt.itemsTotal +
                " files.";
        });
        map.addEventListener("loading-progress", (evt) => {
            el.innerHTML =
                "Loading: " +
                evt.itemsLoaded +
                " of " +
                evt.itemsTotal +
                " files.";
        });
        map.addEventListener("loading-complete", () => {
            el.innerHTML = "Loading complete!";
        });
        map.addEventListener("loading-error", (url) => {
            el.innerHTML = "There was an error loading " + url;
        });
    }
};

// 显示摄像机信息
export const showCameraInfo = (viewer: tt.GLViewer, id: string = "#camera") => {
    const el = document.querySelector(id);
    if (el) {
        viewer.controls.addEventListener("change", () => {
            el.innerHTML = `摄像机:(${viewer.camera.position.x.toFixed(2)},
                               ${viewer.camera.position.y.toFixed(2)},
                               ${viewer.camera.position.z.toFixed(2)}) 
                           焦点:(${viewer.controls.target.x.toFixed(2)},
                                ${viewer.controls.target.y.toFixed(2)},
                                ${viewer.controls.target.z.toFixed(2)}) 
                          方位角:${viewer.controls
                              .getAzimuthalAngle()
                              .toFixed(2)}° 
                          俯仰角:${viewer.controls
                              .getPolarAngle()
                              .toFixed(2)}°`;
        });
    }
};

// 显示地理位置信息
export const showLocation = (
    viewer: tt.GLViewer,
    map: tt.TileMap,
    id: string = "#location"
) => {
    const el = document.querySelector(id);
    if (el) {
        const pointer = new Vector2();
        viewer.container.addEventListener("pointermove", (evt) => {
            // 计算屏幕坐标（-0.5到+0.5范围）
            pointer.x = (evt.clientX / viewer.container.clientWidth) * 2 - 1;
            pointer.y = -(evt.clientY / viewer.container.clientHeight) * 2 + 1;
            // 取得该坐标的信息
            const info = map.getLocationFromScreen(viewer.camera, pointer);
            if (info) {
                el.innerHTML = `经度:${info.location.x.toFixed(3)}°  
                            纬度:${info.location.y.toFixed(3)}°  
                            海拔:${(info.location.z * 1000).toFixed(1)}m
                            视距:${info.distance.toFixed(3)}km `;
            }
        });
    }
};

// 显示地图源的所有者信息
export const showAttribution = (
    map: tt.TileMap,
    id: string = "#attribution"
) => {
    const dom = document.querySelector(id);
    if (dom) {
        const show = () =>
            (dom.innerHTML = "© " + map.attributions.join(" | © "));
        map.addEventListener("provider-changed", show);
        show();
    }
};

// 显示天空盒子
export const addSky = (viewer: tt.GLViewer) => {
    const bk = new CubeTextureLoader()
        .setPath("../../image/skybox/")
        .load([
            "skybox_nx.png",
            "skybox_px.png",
            "skybox_ny.png",
            "skybox_py.png",
            "skybox_nz.png",
            "skybox_pz.png",
        ]);
    viewer.scene.background = bk;
};

// 添加地图背景图
export const addMapBackground = (map: tt.TileMap) => {
    const backGround = new Mesh(
        new PlaneGeometry(),
        new MeshBasicMaterial({
            map: new TextureLoader().load(
                "../../image/tile0.png",
                (texture) => (texture.colorSpace = SRGBColorSpace)
            ),
        })
    );
    backGround.name = "background";
    backGround.material.polygonOffsetFactor = 10;
    backGround.material.polygonOffsetUnits = 1;
    backGround.material.polygonOffset = true;
    backGround.renderOrder = -1;
    backGround.translateZ(-0.1);
    backGround.applyMatrix4(map.rootTile.matrix);
    map.add(backGround);
};

// 根据地理范围的西南、东北角经纬度，计算模型变换矩阵
export const getMatrixFromBounds = (
    map: tt.TileMap,
    sw: Vector2,
    ne: Vector2,
    alt: number
) => {
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
