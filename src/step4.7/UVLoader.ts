import { MeshBasicMaterial, TextureLoader } from "three";
import * as tt from "three-tile";
/**
 * UV image tile Material loader
 */
export class UVLoader implements tt.ITileMaterialLoader {
	public readonly dataType: string = "uv";

	private _texture = new TextureLoader().load("../image/test.jpg");

	/**
	 * 加载材质
	 * @param source 数据源
	 * @param tile 瓦片
	 * @param onLoad 加载完成回调
	 * @returns 材质
	 */
	public load(
		source: tt.ISource,
		_tile: tt.Tile,
		onLoad: () => void,
		_onError: (err: any) => void,
	): MeshBasicMaterial {
		const material = new MeshBasicMaterial({
			transparent: true,
			map: this._texture,
			opacity: source.opacity,
		});
		setTimeout(onLoad);
		return material;
	}
}

tt.LoaderFactory.registerMaterialLoader(new UVLoader());
