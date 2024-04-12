import { MeshBasicMaterial, Texture as CanvasTexture, Texture } from "three";
import * as tt from "three-tile";
/**
 * Watermark tile Material loader
 */
export class WaterMarkLoader implements tt.ITileMaterialLoader {
	public readonly dataType: string = "watermark";

	private _texture: Texture | undefined;

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
		if (!this._texture) {
			this._texture = new Texture(this.drawWaterMark(source.attribution));
			this._texture.needsUpdate = true;
		}
		const material = new MeshBasicMaterial({
			transparent: true,
			map: this._texture,
			opacity: source.opacity,
		});
		setTimeout(onLoad);
		return material;
	}

	/**
	 * draw watermark
	 * @param text watermark text
	 * @returns bitmap
	 */
	public drawWaterMark(text: string) {
		const size = 256;
		const canvas = new OffscreenCanvas(size, size);
		const ctx = canvas.getContext("2d")!;
		ctx.scale(1, -1);
		ctx.translate(0, -size);
		if (ctx) {
			ctx.fillStyle = "white";
			ctx.shadowColor = "black";
			ctx.shadowBlur = 5;
			ctx.shadowOffsetX = 1;
			ctx.shadowOffsetY = 1;
			ctx.font = "bold 14px arial";
			ctx.textAlign = "center";
			ctx.translate(size / 2, size / 2);
			ctx.rotate((30 * Math.PI) / 180);
			ctx.fillText(`${text}`, 0, 0);
		}
		return canvas.transferToImageBitmap();
	}
}
