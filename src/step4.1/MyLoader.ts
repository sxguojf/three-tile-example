import { Material, MeshBasicMaterial } from "three";
import * as tt from "three-tile";

/**
 * 自定义加载器1，瓦片使用wireframe材质
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
	 * 重载，返回wirframe材质
	 * @param tile 要加载数据的瓦片
	 * @param onLoad 加载完成回调
	 * @returns 材质
	 */
	public loadMaterial(_tile: tt.Tile, onLoad: (material: Material[]) => void) {
		const material = [new MeshBasicMaterial({ wireframe: true, color: 0xffff00 })];
		setTimeout(() => onLoad(material));
		return material;
	}
}
