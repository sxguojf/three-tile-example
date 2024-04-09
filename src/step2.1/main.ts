import { Vector3 } from "three";
import * as tt from "three-tile";
import * as util from "../util";
import * as ms from "../mapSource";
import "./style.css";

/*----------------------------------------创建地图----------------------------------------*/
const map = util.createMap(ms.mapBoxImgSource, ms.mapBoxDemSource);
// 地图中心经纬度，转换为场景坐标
const center = map.geo2pos(new Vector3(100.3, 37));
// 目标坐标（地图中心）
const centerPosition = new Vector3(center.x, center.y, 0);
// 摄像机相对于地图中心坐标的偏移量
const offset = new Vector3(-6, -100, 100);
// 创建viewer
const viewer = util.createViewer("#map", centerPosition, offset);
// 地图加入viewer
viewer.scene.add(map);

//----------------------------------------------------------------------------------

document.querySelector("#arcgis")?.addEventListener("click", () => {
    // 用Source的create方法创建数据源
    const imgSource = tt.BaseSource.create({
        dataType: "image",
        url: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    });
    imgSource.attribution = "ArcGIS";
    map.imgSource = imgSource;
    map.reload();
});

document.querySelector("#gd")?.addEventListener("click", () => {
    // 创建Source类实例生成数据源（跟工厂方法一样）
    const p1 = new tt.BaseSource({
        url: "https://webst04.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
        attribution: "GAODE",
        dataType: "image",
    });
    const p2 = new tt.BaseSource({
        url: "https://webst04.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",
        attribution: "GAODE",
        dataType: "image",
    });
    // map.imgSource可以是一个数组
    map.imgSource = [p1, p2];
    map.reload();
});

document.querySelector("#google")?.addEventListener("click", () => {
    // 继承Source写一个新类，对bing、百度等非google瓦片方案的数据建议用这种方式。
    class GoogleSource extends tt.BaseSource {
        public attribution = "Google";
        public dataType = "image";
        public getUrl(x: number, y: number, z: number): string {
            return `https://gac-geo.googlecnapps.cn/maps/vt?lyrs=y&x=${x}&y=${y}&z=${z}`;
        }
    }
    map.imgSource = new GoogleSource();
    map.reload();
});

document.querySelector("#debug")?.addEventListener("click", () => {
    map.imgSource = [
        ms.mapBoxImgSource,
        new tt.BaseSource({ attribution: "TileTest", dataType: "test" }),
    ];
    map.reload();
});

document.querySelector("#demdebug")?.addEventListener("click", () => {
    class DemImageSource extends tt.plugin.MapBoxSource {
        protected style = "mapbox.terrain-rgb";
        public dataType = "image";
    }
    map.imgSource = [
        new DemImageSource(),
        new tt.BaseSource({
            url: "https://webst04.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",
            attribution: "GAODE",
            dataType: "image",
        }),
    ];
    map.reload();
});

//--------------------------------------------------------------------
// 显示地图源的所有者信息
const showAttribution = () => {
    const dom = document.querySelector("#attribution");
    if (dom) {
        dom.innerHTML = "© " + map.attributions.join(" | © ");
    }
};
map.addEventListener("source-changed", () => showAttribution());
showAttribution();

//--------------------------------------------------------------------
util.addMapBackground(map);
util.showLocation(viewer, map);
util.showLoadstate(map);
