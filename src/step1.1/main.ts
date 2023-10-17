import * as tt from "../three-tile/three-tile.es";
import "./style.css";
import * as util from "../util";

/*------------------------------初始化三维环境并创建地图加入场景-------------------------------*/
// 取得地图dom容器
const glContainer = document.querySelector<HTMLElement>("#map");
// 初始化三维场景(调用three-tile内置的初始化类)
const viewer = new tt.GLViewer(glContainer!);

// MapBoxToken 请更换为你自己申请的key
const MAPBOXKEY = util.MAPBOXKEY;

// 创建地图
const map = tt.TileMap.create({
    // 影像数据源
    imgSource: new tt.MapBoxImgSource(MAPBOXKEY),
    // 地形数据源
    demSource: new tt.MapBoxDemSource(MAPBOXKEY),
    // 地图投影中心经度
    projCenterLon: 90,
    // 最小缩放级别
    minLevel: 2,
    // 最大缩放级别
    maxLevel: 18,
});

// 将地图加入三维场景
viewer.scene.add(map);

/*-----------------------切换数据源-------------------------------*/

document.querySelector("#mapbox")!.addEventListener("click", () => {
    map.imgSource = new tt.MapBoxImgSource(MAPBOXKEY);
    map.reload();
});
document.querySelector("#google")!.addEventListener("click", () => {
    map.imgSource = new tt.GoogleSource("y");
    map.reload();
});
document.querySelector("#bing")!.addEventListener("click", () => {
    map.imgSource = new tt.BingSource();
    map.reload();
});
document.querySelector("#gd")!.addEventListener("click", () => {
    map.imgSource = [new tt.GDSource("6"), new tt.GDSource("8")];
    map.reload();
});
document.querySelector("#tx")!.addEventListener("click", () => {
    map.imgSource = [new tt.TXSource(), new tt.GDSource("8")];
    map.reload();
});
