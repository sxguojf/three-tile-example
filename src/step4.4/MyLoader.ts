import { CanvasTexture, Material, SRGBColorSpace, Texture } from "three";
import * as tt from "../three-tile/three-tile.es";

/**
 * 测试加载器，仅用于测试，不加载实际数据
 */
export class MyLoader extends tt.TileLoader {
    /**
     * 加载几何体
     * @param tile 要加载数据的瓦片
     * @param onLoad 加载完成回调
     * @returns 几何体
     */
    // public loadGeometry(_tile: tt.Tile, onLoad: (geometry: BufferGeometry) => void) {
    //     const geometry = new PlaneGeometry();
    //     setTimeout(() => onLoad(geometry), 1);
    //     return geometry;
    // }

    /**
     * 加载纹理
     * @param tile 要加载数据的瓦片
     * @param onLoad 加载完成回调
     * @returns 纹理
     */
    // public loadMaterial(tile: tt.Tile, onLoad: (material: Material) => void) {
    //     // const material = new tt.TileMaterial({ wireframe: true, map: new Texture() });
    //     // const url = tt.getUrl(this.imgProvider[0], tile.x, tile.y, tile.level, 90);
    //     // if (url) {
    //     //     new ImageLoader(this.manager).load(url, (img) => {
    //     //         const size = 256;
    //     //         const canvas = new OffscreenCanvas(size, size);
    //     //         const image = drawTile(canvas, img);
    //     //         material.map = new CanvasTexture(image);
    //     //         material.map.colorSpace = SRGBColorSpace;
    //     //         material.wireframe = false;
    //     //         onLoad(material);
    //     //     });
    //     // }
    //     return material;
    // }

    public loadMaterial(tile: tt.Tile, onLoad: (material: Material[]) => void) {
        let source = this.imgSource[0];
        const loader = tt.LoaderFactory.getTextureLoader(source);

        const texture1 = loader.load(
            tile,
            source,
            this.projectCenterLon,
            (texture: Texture) => {
                texture.needsUpdate = true;
                material.wireframe = false;
                onLoad([material]);
            }
        );
        texture1.colorSpace = SRGBColorSpace;

        const size = 256;
        const canvas = new OffscreenCanvas(size, size);
        const image = drawTile(canvas);

        const material = new tt.TileMaterial({
            map: texture1,
            map1: new CanvasTexture(image),
            wireframe: true,
        });

        return [material];
    }
}

function drawTile(canvas: OffscreenCanvas) {
    const size = canvas.width;
    const ctx = canvas.getContext("2d")!;
    if (ctx) {
        ctx.strokeStyle = "#ccc";
        ctx.lineWidth = 2;
        ctx.strokeRect(5, 5, size - 10, size - 10);

        ctx.fillStyle = "#ccc";
        ctx.shadowColor = "black";
        ctx.shadowBlur = 2;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.font = "bold 20px arial";
        ctx.textAlign = "center";
        ctx.fillText(`一块瓦片`, size / 2, 50);
        ctx.fillText(`可以在瓦片上画点东西...`, size / 2, 100);
    }
    return canvas; //.transferToImageBitmap();
}
