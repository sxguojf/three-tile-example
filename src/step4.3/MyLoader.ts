import {
    BufferGeometry,
    CanvasTexture,
    Material,
    MeshPhongMaterial,
    PlaneGeometry,
} from "three";
import * as tt from "../../src/three-tile";

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
    public loadGeometry(
        _tile: tt.Tile,
        onLoad: (geometry: BufferGeometry) => void
    ) {
        const geometry = new PlaneGeometry();
        setTimeout(() => onLoad(geometry), 1);
        return geometry;
    }

    /**
     * 加载纹理
     * @param tile 要加载数据的瓦片
     * @param onLoad 加载完成回调
     * @returns 纹理
     */
    public loadMaterial(tile: tt.Tile, onLoad: (material: Material[]) => void) {
        const material = new MeshPhongMaterial();
        // material.emissive = new Color("#222");
        // material.specular = new Color("#888");
        material.map = new CanvasTexture(drawTile(tile.x, tile.y, tile.level));
        setTimeout(() => onLoad([material]), 1);
        return [material];
    }
}

function drawTile(x: number, y: number, level: number) {
    const size = 256;
    const canvas = new OffscreenCanvas(size, size);
    const ctx = canvas.getContext("2d")!;
    // ctx.scale(1, -1);
    // ctx.translate(0, -size);
    if (ctx) {
        ctx.strokeStyle = "#ccc";
        ctx.lineWidth = 2;
        ctx.strokeRect(5, 5, size - 10, size - 10);
        ctx.fillStyle = "#ccc";
        ctx.shadowColor = "black";
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.font = "bold 20px arial";
        ctx.textAlign = "center";
        ctx.fillText(`一块瓦片`, size / 2, 60);
        ctx.fillText(`坐标(${x}, ${y}, ${level})`, size / 2, 100);
        ctx.fillText(`采用googles scheme`, size / 2, 140);
    }
    return canvas; //.transferToImageBitmap();
}
