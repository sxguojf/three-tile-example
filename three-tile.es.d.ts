import { AmbientLight } from 'three';
import { Box2 } from 'three';
import { BufferGeometry } from 'three';
import { Camera } from 'three';
import { Clock } from 'three';
import { Color } from 'three';
import { DirectionalLight } from 'three';
import { Event as Event_2 } from 'three';
import { EventDispatcher } from 'three';
import { Frustum } from 'three';
import { Intersection } from 'three';
import { Loader } from 'three';
import { LoadingManager } from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls';
import { Material } from 'three';
import { Mesh } from 'three';
import { MeshBasicMaterial } from 'three';
import type { NormalBufferAttributes } from 'three';
import { PerspectiveCamera } from 'three';
import type { PlaneGeometry } from 'three';
import { Raycaster } from 'three';
import { Scene } from 'three';
import { ShaderMaterial } from 'three';
import { Texture } from 'three';
import { Vector2 } from 'three';
import { Vector3 } from 'three';
import { WebGLRenderer } from 'three';

/**
 * 可中止下载的图像加载器
 *
 * 改写ImageLoader，使用fetch下载，在load函数中增加abortSignal参数，可通过外部中止下载
 *
 * 因fetch下载图像有一些问题，threej在r83回滚使用img加载图像，无法中止下载。
 * https://github.com/mrdoob/three.js/issues/10439#issuecomment-275785639
 */
export declare class AbortImageLoader extends Loader {
    load(url: string, onLoad?: (image: HTMLImageElement) => void, _onProgress?: (event: ProgressEvent) => void, onError?: (event: any) => void, abortSignal?: AbortSignal): HTMLImageElement;
}

export declare class ArcGisProvider extends ImgProvider {
    attribution: string;
    style: string;
    constructor(style?: string);
    getUrl(x: number, y: number, z: number): string;
}

export declare class BaiduProvider extends ImgProvider {
    attribution: string;
    style: string;
    constructor(style?: string);
    getUrl(x: number, y: number, z: number): string;
}

/**
 * https://learn.microsoft.com/en-us/bingmaps/articles/bing-maps-tile-system
 */
export declare class BingMapsProvider extends ImgProvider {
    attribution: string;
    style: string;
    constructor(style?: string);
    getUrl(x: number, y: number, z: number): string;
}

/**
 * 地形数据源基类
 */
export declare class DemProvider extends Provider implements IDemProvider {
    private imageLoader;
    static create(url?: string, options?: ProvideOptions): DemProvider;
    load(tile: Tile, projectCenterLon: number, onLoad: (geometry: BufferGeometry) => void): BufferGeometry;
    /**
     * 取出数据源最大级别瓦片和当前瓦片在最大瓦片中的位置
     *
     * 因为瓦片数据并未覆盖所有级别瓦片，如MapBox地形瓦片最高只到15级，如果要显示15级以上瓦片，只能从最高级别瓦片里截取一部分来显示
     * @param tile 瓦片
     * @param provider 数据源
     * @returns 最大瓦片和大小
     */
    private _getMaxLevelTileAndRect;
}

export declare class GDProvider extends ImgProvider {
    attribution: string;
    private style;
    constructor(style?: string);
    getUrl(x: number, y: number, z: number): string;
}

export declare class GeoqProvider extends Provider {
    attribution: string;
    style: string;
    constructor(style?: string);
    getUrl(x: number, y: number, z: number): string;
}

export declare function getAbortController(tile: Tile): any;

/**
 * 从图像指定区域取出点阵数据
 * @param image 图像
 * @param size 大小
 * @rect 要取出数据的区域
 * @returns 点阵数据
 */
export declare function getImageData(image: HTMLImageElement, size: number, rect: Box2): Uint8ClampedArray;

export declare function getUrl(provider: IProvider, x: number, y: number, level: number, projectCenterLon: number): string | undefined;

export declare class GLViewer extends EventDispatcher<Event_2> {
    scene: Scene;
    renderer: WebGLRenderer;
    camera: PerspectiveCamera;
    controls: MapControls;
    ambLight: AmbientLight;
    dirLight: DirectionalLight;
    container: HTMLElement;
    _clock: Clock;
    constructor(dom: HTMLElement, centerPositon?: Vector3, cameraPosition?: Vector3);
    resize(): this;
    animate(): void;
}

export declare class GoogleProvider extends ImgProvider {
    attribution: string;
    type: ProviderDataType;
    style: string;
    maxLevel: number;
    constructor(style?: string);
    getUrl(x: number, y: number, z: number): string;
}

export declare interface IDemProvider extends IProvider {
    load(tile: Tile, projectCenterLon: number, onLoad: (geometry: BufferGeometry) => void): BufferGeometry;
}

export declare interface IImgProvider extends IProvider {
    load(tile: Tile, projectCenterLon: number, onLoad: (texture: Texture) => void): Texture;
}

/**
 * 影像数据源基类
 */
export declare class ImgProvider extends Provider implements IImgProvider {
    private loader;
    static create(url?: string, options?: ProvideOptions): ImgProvider;
    load(tile: Tile, projectCenterLon: number, onLoad: (texture: Texture) => void): Texture;
}

/**
 * 地图投影接口
 */
export declare interface IProjection {
    ID: ProjectionType;
    centerLon: number;
    mapWidth: number;
    mapHeight: number;
    mapDepth: number;
    isWGS: boolean;
    project(lon: number, lat: number): {
        x: number;
        y: number;
    };
    unProject(x: number, y: number): {
        lon: number;
        lat: number;
    };
}

export declare interface IProvider {
    attribution: string;
    type: ProviderDataType;
    minLevel: number;
    maxLevel: number;
    projection: ProjectionType;
    bounds?: [number, number, number, number];
    getUrl: (x: number, y: number, z: number) => string | undefined;
}

/**
 * 瓦片数据加载器接口
 */
export declare interface ITileLoader {
    isWGS: boolean;
    projectCenterLon: number;
    minLevel: number;
    maxLevel: number;
    showLoading: boolean;
    imgProvider: IImgProvider[];
    demProvider: IDemProvider | undefined;
    load(tile: Tile, onLoad: (data: TileData) => void): TileData;
}

declare type LoadState = "empty" | "loading" | "loaded";

declare interface LocationInfo extends Intersection {
    location: Vector3;
}

export declare class MapBoxDemProvider extends DemProvider {
    attribution: string;
    type: ProviderDataType;
    private token;
    format: string;
    style: string;
    maxLevel: number;
    constructor(token: string, style?: string, format?: string);
    getUrl(x: number, y: number, z: number): string;
}

export declare class MapBoxImgProvider extends ImgProvider {
    attribution: string;
    type: ProviderDataType;
    private token;
    format: string;
    style: string;
    maxLevel: number;
    constructor(token: string, style?: string, format?: string);
    getUrl(x: number, y: number, z: number): string;
}

/**
 * 地图构造函数参数
 */
export declare type MapContructParams = {
    loader: ITileLoader;
    projCenterLon?: 0 | 90 | -90;
    rootTile?: RootTile;
};

/**
 * 地图创建参数
 */
export declare type MapParams = {
    imgProvider: IImgProvider[] | IImgProvider;
    demProvider?: IDemProvider;
    minLevel?: number;
    maxLevel?: number;
    projCenterLon?: 0 | 90 | -90;
};

export declare class MapTilerDemProvider extends DemProvider {
    attribution: string;
    private token;
    private format;
    private style;
    maxLevel: number;
    constructor(token?: string, style?: string, format?: string);
    getUrl(x: number, y: number, z: number): string;
}

export declare class MapTilerImgProvider extends ImgProvider {
    attribution: string;
    private token;
    private format;
    private style;
    maxLevel: number;
    constructor(token?: string, style?: string, format?: string);
    getUrl(x: number, y: number, z: number): string;
}

/**
 * 地图投影抽象类
 */
export declare abstract class Projection {
    centerLon: number;
    isWGS: boolean;
    constructor(centerLon?: number);
    static createFromID(id?: ProjectionType, centerLon?: number): IProjection;
    static createFromProvider(provider?: IProvider[] | IProvider, centerLon?: number): IProjection;
}

export declare type ProjectionType = "3857" | "4326";

export declare class ProjMCT extends Projection implements IProjection {
    readonly ID = "3857";
    readonly isWGS = false;
    static earthRad: number;
    mapWidth: number;
    mapHeight: number;
    mapDepth: number;
    /**
     * 经纬度转投影坐标
     * @param lon 经度
     * @param lat 纬度
     * @returns 投影坐标
     */
    project(lon: number, lat: number): {
        x: number;
        y: number;
    };
    /**
     * 投影坐标转经纬度
     * @param x
     * @param y
     * @returns
     */
    unProject(x: number, y: number): {
        lon: number;
        lat: number;
    };
    private _getOffsetX;
}

export declare class ProjWGS extends Projection implements IProjection {
    readonly ID = "4326";
    readonly isWGS = true;
    mapWidth: number;
    mapHeight: number;
    mapDepth: number;
    project(lon: number, lat: number): {
        x: number;
        y: number;
    };
    unProject(x: number, y: number): {
        lon: number;
        lat: number;
    };
}

export declare type ProvideOptions = {
    attribution?: string;
    type?: ProviderDataType;
    minLevel?: number;
    maxLevel?: number;
    projection?: ProjectionType;
    bounds?: [number, number, number, number];
    [name: string]: any;
};

/**
 * 瓦片图数据源，绘制调试瓦片
 * 可继承此类，重写getUrl方法实现自定义地图加载
 */
export declare class Provider implements IProvider {
    urlTemplate: string;
    attribution: string;
    type: ProviderDataType;
    minLevel: number;
    maxLevel: number;
    projection: ProjectionType;
    bounds: [number, number, number, number];
    static loadingManager: LoadingManager;
    constructor(url?: string, options?: ProvideOptions);
    getProjectionUrl(x: number, y: number, z: number, projectCenterLon: number): string | undefined;
    /**
     * 根据瓦片坐标取得瓦片url，子类重载此方法实现瓦片坐标到url的映射，
     * todo：可判断请求坐标在是否在地图范围，在地图范围内返回url，否则返回undefined
     * @param _z 瓦片级别
     * @param _x 瓦片x坐标（投影后）
     * @param _y 瓦片y坐标
     * @returns 瓦片url，返回'test'，将绘制测试瓦片
     */
    getUrl(x: number, y: number, z: number): string | undefined;
    inBounds(_z: number, _x: number, _y: number): void;
}

export declare type ProviderDataType = "img" | "dem" | "test";

/**
 * Root of QuadTree
 * update the QuadTree in update function
 *
 * 根瓦片，继承自Tile，完成瓦片的update操作
 * 在update函数中实现瓦片树的更新、数据加载、调度等功能
 */
export declare class RootTile extends Tile {
    private _treeReadyCount;
    private _updateDataEnable;
    /**
     * get whether to allow tile data to be updated
     * 是否允许更新瓦片数据
     */
    get updateDataEnable(): boolean;
    /**
     * set whether to allow tile data to be updated
     */
    set updateDataEnable(value: boolean);
    /**
     * constructor
     * 构造函数
     * @param level 瓦片级别 tile level
     * @param x 瓦片x坐标 X-coordinate
     * @param y 瓦片y坐标 X-coordinate
     */
    constructor(level?: number, x?: number, y?: number);
    /**
     * update the QuadTree
     * 更新瓦片树并加载数据（每帧渲染前调用）
     * @param camera 摄像机
     * @param frustum 视椎体
     * @param loader 地图数据加载器
     */
    update(camera: Camera, frustum: Frustum, loader: ITileLoader): this;
    /**
     * reload data, Called to take effect after provider is modified
     * 重新加载瓦片数据
     */
    reload(): this;
    /**
     * 更新瓦片树
     * @param cameraWorldPosition 摄像机世界坐标
     * @param frustum 视椎体
     * @returns 瓦片树是否改变
     */
    private _updateTileTree;
    /**
     *  更新瓦片树数据
     * @param loader 地图数据加载器
     */
    private _updateTileData;
    /**
     * 清理瓦片树
     * 检查所有瓦片是否都下载完成，全部完成显示所有叶子瓦片，释放所有非叶子瓦片
     */
    private _checkTileTree;
}

declare type Style = "img" | "cia" | "terrain_rgb";

declare type Style_2 = "img_w" | "cia_w" | "cva_w" | "ibo_w" | "ter_w" | "vec_w" | "img_c" | "cia_c";

export declare class TDTProvider extends ImgProvider {
    attribution: string;
    token: string;
    style: Style_2;
    constructor(token: string, style?: Style_2);
    getUrl(x: number, y: number, z: number): string;
}

/**
 * 测试加载器，仅用于测试，不加载实际数据
 */
export declare class TestLoader extends TileLoader {
    /**
     * 加载几何体
     * @param tile 要加载数据的瓦片
     * @param onLoad 加载完成回调
     * @returns 几何体
     */
    /**
     * 加载纹理
     * @param tile 要加载数据的瓦片
     * @param onLoad 加载完成回调
     * @returns 纹理
     */
    loadMaterial(_tile: Tile, onLoad: (material: Material) => void): MeshBasicMaterial;
}

export declare class TestProvider extends ImgProvider {
    attribution: string;
    maxLevel: number;
    load(tile: Tile, _projectCenterLon: number, onLoad: (texture: Texture) => void): Texture;
}

/**
 * A Tile Mesh can LOD
 *
 * 瓦片类，继承Mesh，实现瓦片LOD、加载数据等功能
 */
export declare class Tile extends Mesh<BufferGeometry, Material> {
    readonly level: number;
    readonly x: number;
    readonly y: number;
    /**
     * tile's parent，a tile have at most one parent.
     */
    readonly parent: this | null;
    /**
     * Array with tile's children，a tile have four children
     */
    readonly children: this[];
    /**
     * get the index in it's Indicates it's position at the parent tile
     * (0:left-bottom, 1:right-bottom, 2:left-top, 3:right-top, -1:no parent)
     */
    get index(): number;
    private _loadedTime;
    private _loadState;
    /**
     * get the tile load state
     */
    get loadState(): LoadState;
    private _toLoad;
    /**
     * get Whether tile needs to be loaded
     */
    private get needLoad();
    private _inFrustum;
    /**
     * get whether the tile is in the frustum
     */
    get inFrustum(): boolean;
    /**
     * set whether the tile is in the frustum
     */
    set inFrustum(value: boolean);
    /**
     * get Whether the tile is leaf and is inFrustm
     */
    get isLeafInFrustum(): boolean;
    /**
     * set the tile to temp (transparent)
     */
    set temp(isTemp: boolean);
    /**
     * get the tile is a leaf
     */
    get isLeaf(): boolean;
    /**
     * constructor
     * 构造函数
     * @param level 瓦片级别 tile level
     * @param x 瓦片x坐标 X-coordinate
     * @param y 瓦片y坐标 X-coordinate
     */
    constructor(level?: number, x?: number, y?: number);
    /**
     * overwrite Obejct3D.traverse, Modified the callback function param's type to Tile
     * 覆盖Obejct3D.traverse，修改了参数类型
     * @param callback 回调函数，参数改为了this
     */
    traverse(callback: (object: this) => void): void;
    /**
     * orverwrit Mesh.raycast to only loaded tile to checked
     * 重载mesh的raycast，仅检测已加载的瓦片
     * @param raycaster
     * @param intersects
     */
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    /**
     * reloade tile data
     * 重新加载瓦片数据
     */
    protected _reload(): this;
    /**
     * 瓦片LOD
     * @param cameraWorldPosition
     * @param loader
     * @returns 新创建的瓦片
     */
    protected _lod(cameraWorldPosition: Vector3, loader: ITileLoader): Tile[] | null;
    /**
     * load the tile data, include geometry and material
     * 加载瓦片数据
     * @param loader tile data loader
     * @returns data loaded. Promise<boolean>
     */
    protected _load(loader: ITileLoader): Promise<boolean>;
    /**
     * 瓦片数据加载完成回调函数
     * @param data 瓦片数据
     * @returns 是否需要清理瓦片树
     */
    private onLoad;
    private _brotherLoaded;
    /**
     * free the tile resource. include geometry/material/texture
     * 释放瓦片资源
     * @param removeChildren 是否移除子瓦片
     */
    dispose(removeChildren: boolean): this;
}

/**
 * 瓦片材质加载器
 */
declare class TileCanvasMaterialLoader extends Loader {
    load(tile: Tile, providers: IImgProvider[], projectCenterLon: number, onLoad: (material: Material) => void): TileMaterial;
    private _loadAsync;
}

export declare type TileData = {
    geometry: BufferGeometry;
    material: Material;
};

export declare class TileDEMGeometry extends TileGeometry {
    protected build(tileSize: number): void;
    setDemData(dem: Uint8ClampedArray): this;
}

/**
 * 简单瓦片几何体类，不带裙边瓦片有接缝
 */
export declare abstract class TileGeometry extends BufferGeometry {
    protected _min: number;
    get min(): number;
    protected _max: number;
    get max(): number;
    protected _avg: number;
    get avg(): number;
    constructor();
    protected build(tileSize: number): void;
    protected getZ(imgData: Uint8ClampedArray, i: number): number;
    setDemData(dem: Uint8ClampedArray): this;
}

/**
 * 瓦片几何体加载器
 */
export declare class TileGeometryLoader extends Loader {
    load(tile: Tile, provider: IDemProvider, projectCenterLon: number, onLoad: (geometry: BufferGeometry) => void): BufferGeometry<NormalBufferAttributes>;
}

/**
 * 瓦片地图数据加载器
 *
 */
/**
 * 瓦片数据加载器
 */
export declare class TileLoader extends Loader implements ITileLoader {
    static readonly defaultGeometry: PlaneGeometry;
    static readonly defaultMaterial: MeshBasicMaterial;
    isWGS: boolean;
    projectCenterLon: number;
    private _minLevel;
    set minLevel(value: number);
    get minLevel(): number;
    private _maxLevel;
    get maxLevel(): number;
    set maxLevel(value: number);
    private _showLoading;
    get showLoading(): boolean;
    set showLoading(value: boolean);
    private _imgProvider;
    get imgProvider(): IImgProvider[];
    set imgProvider(value: IImgProvider[]);
    private _demProvider;
    get demProvider(): IDemProvider | undefined;
    set demProvider(value: IDemProvider | undefined);
    geometryLoader: TileGeometryLoader;
    materialLoader: TileCanvasMaterialLoader;
    /**
     *
     * @param imgProvider 影像数据源
     * @param demProvider 地形数据源
     */
    constructor(imgProvider: IImgProvider[], demProvider?: IDemProvider, minLevel?: number, maxLevel?: number);
    /**
     * 加载瓦片几何体和纹理
     * @param tile 瓦片
     * @param onLoad 加载完成回调函数
     * @returns
     */
    load(tile: Tile, onLoad: (data: TileData) => void): {
        geometry: BufferGeometry<NormalBufferAttributes>;
        material: Material;
    };
    /**
     * 加载几何体
     * @param tile 要加载数据的瓦片
     * @param onLoad 加载完成回调
     * @returns 几何体
     */
    protected loadGeometry(tile: Tile, onLoad: (geometry: BufferGeometry) => void): BufferGeometry;
    /**
     * 加载纹理
     * @param tile 要加载数据的瓦片
     * @param onLoad 加载完成回调
     * @returns 纹理
     */
    protected loadMaterial(tile: Tile, onLoad: (material: Material) => void): Material;
}

/**
 * Map Mesh
 * 地图模型
 */
export declare class TileMap extends Mesh {
    private readonly _clock;
    readonly isLOD = true;
    readonly autoUpdate = true;
    /**
     * root tile
     * 根瓦片
     */
    readonly rootTile: RootTile;
    /**
     * 地图数据加载器
     * map data loader
     */
    readonly loader: ITileLoader;
    /**
     * get whether to allow tile data to be updated
     * 取得是否允许更新瓦片数据
     */
    get loadeEnable(): boolean;
    /**
     * set whether to allow tile data to be updated
     * 设置是否允许更新瓦片数据
     */
    set loadEnable(value: boolean);
    private _projection;
    /**
     * 取得地图投影对象
     * set the map projection object
     */
    get projection(): IProjection;
    /**
     * 设置地图投影对象
     * get the map projection object
     */
    set projection(value: IProjection);
    /**
     * 取得影像数据源
     * get the image data provider object
     */
    get imgProvider(): IImgProvider | IImgProvider[] | undefined;
    /**
     * 设置影像数据源
     * set the image data provider object
     */
    set imgProvider(value: IImgProvider | IImgProvider[] | undefined);
    /**
     * get the terrain data provider
     * 设置地形数据源
     */
    get demProvider(): IDemProvider | undefined;
    /**
     * set the terrain data provider
     * 取得地形数据源
     */
    set demProvider(value: IDemProvider | undefined);
    /**
     * map create factory
     * create a map map from params
     *
     * 地图创建工厂函数
     @param params 地图参数 {@link MapParams}
     @returns 地图模型
     @example
     ``` typescript
     TileMap.create({
     // 影像数据源
     imgProvider: [source.mapBoxImgProvider, new TestProvider()],
     // 高程数据源
     demProvider: source.mapBoxDemProvider,
     // 地图投影中心经度
     projCenterLon: 90,
     // 最小缩放级别
     minLevel: 1,
     // 最大缩放级别
     maxLevel: 18,
     });
     ```
     */
    static create(params: MapParams): TileMap;
    /**
     * map mesh constructor
     *
     * 构造函数
     * @param params 地图构造参数 {@link MapContructParams}     *
     * @example
     * ``` typescript
     *  const imgProvider = [source.mapBoxImgProvider, new tt.TestProvider()];
     *  const demProvider = source.mapBoxDemProvider;
     *  const loader = new tt.TileLoader(imgProvider, demProvider, 2, 18);
     *  const map = new TileMap({ loader, projCenterLon: 90 });
     * ```
     */
    constructor(params: MapContructParams);
    /**
     * update the map, It is automatically called after adding a scene
     * 模型更新回调函数，地图加入场景后会在每帧更新时被调用
     * @param camera 摄像机
     */
    update(camera: Camera): void;
    /**
     * reload the map data
     * call this after the provider has changed
     * 重新加载地图，在改变地图数据源后调用它才能生效
     */
    reload(): void;
    /**
     * rebuild th map
     * It is generally used when changing the projection of a map
     * 重新构建瓦片树，一般在改变投影时用它
     */
    rebuild(): void;
    /**
     * get map data attributions information
     * 取得地图数据归属信息
     * @returns Attributions 版权信息数组
     */
    get attributions(): string[];
    /**
     * Latitude and longitude (4326) converted to scene projection coordinates (3857)
     * 经纬度(4326)转换为场景投影坐标(3857)
     * @param lon 经度
     * @param lat 纬度
     * @returns 投影坐标
     */
    project(lon: number, lat: number): {
        x: number;
        y: number;
    };
    /**
     * Scene projection coordinates (3857) converted to latitude and longitude (4326)
     * 场景投影坐标（3857）转换为经纬度(4326)
     * @param x 投影x坐标
     * @param y 投影y坐标
     * @returns 经纬度
     */
    unProject(x: number, y: number): {
        lon: number;
        lat: number;
    };
    /**
     * get the ground elevation for the specified latitude and longitude
     * 获取指定经纬度的地面信息（法向量、高度等）
     * @param lon 经度
     * @param lat 纬度
     * @returns 海拔高度（km）
     */
    getLocalInfoFromLocation(lon: number, lat: number): LocationInfo | null;
    /**
     * get the loacation infomation from screen point
     * @param camera 摄像机
     * @param pointer 点的屏幕坐标（-0.5~0.5）
     * @returns 位置信息（经纬度、高度等）
     */
    getLocationFromScreen(camera: Camera, pointer: Vector2): LocationInfo | null;
    /**
     * get map tiles statistics to debug
     * @returns 取得瓦片统计信息，用于调试性能
     */
    getTileCount(): {
        sum: number;
        visible: number;
        leaf: number;
        maxLevle: number;
    };
    /**
     * 监听将瓦片数据加载事件
     */
    private _attachEvent;
}

/**
 * 着色器瓦片图材质，使用自定义调色器实现多重纹理加载、dem高程变换
 */
export declare class TileMaterial extends ShaderMaterial {
    constructor(parameters: TileMaterialParameters);
    dispose(): void;
    /**
     * 设置高程数据
     * @param dem 高程数据
     * @returns
     */
    defineProperty(propertyName: string): void;
}

export declare interface TileMaterialParameters {
    map?: Texture | null | undefined;
    map1?: Texture | null | undefined;
    transparent?: boolean;
    wireframe?: boolean;
    diffuse?: Color;
}

/**
 * 带裙边的瓦片几何体
 * Mapbox Terrain-RGB v1
 * https://docs.mapbox.com/data/tilesets/reference/mapbox-terrain-rgb-v1/
 *
 */
export declare class TileRGBGeometry extends TileGeometry {
    readonly type = "TileRGBGeometry";
    protected build(tileSize: number): void;
    setDemData(dem: Uint8ClampedArray): this;
    computeVertexNormals(): void;
}

/**
 * 瓦片材质加载器
 */
export declare class TileShaderMaterialLoader extends Loader {
    load(tile: Tile, providers: IImgProvider[], projectCenterLon: number, onLoad: (material: Material) => void): TileMaterial;
}

export declare class TXProvider extends ImgProvider {
    attribution: string;
    constructor();
    getUrl(x: number, y: number, z: number): string;
}

/**
 * 测试加载器，仅用于测试，不加载实际数据
 */
export declare class WireframeLoader extends TileLoader {
    /**
     * 加载纹理
     * @param tile 要加载数据的瓦片
     * @param onLoad 加载完成回调
     * @returns 纹理
     */
    loadMaterial(_tile: Tile, onLoad: (material: Material) => void): MeshBasicMaterial;
}

export declare class ZKXtDemProvider extends DemProvider {
    token: string;
    style: Style;
    maxLevel: number;
    attribution: string;
    format: string;
    constructor(token: string);
    getUrl(x: number, y: number, z: number): string;
}

export declare class ZKXTImgProvider extends ImgProvider {
    attribution: string;
    type: ProviderDataType;
    token: string;
    style: Style;
    format: string;
    constructor(token: string, style?: Style);
    getUrl(x: number, y: number, z: number): string;
}

export { }
