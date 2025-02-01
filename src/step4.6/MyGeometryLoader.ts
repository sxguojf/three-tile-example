import { BufferGeometry, NormalBufferAttributes, TorusGeometry } from "three";
import * as tt from "three-tile";

export class MyGeometryLoader implements tt.ITileGeometryLoader {
	public dataType: string = "ball";
	public name: string = "ball loader";
	load(
		_source: tt.ISource,
		_x: number,
		_y: number,
		_z: number,
		onLoad: () => void,
	): BufferGeometry<NormalBufferAttributes> {
		const geometry = new TorusGeometry(0.35, 0.15);
		setTimeout(onLoad);
		return geometry;
	}
}
tt.LoaderFactory.registerGeometryLoader(new MyGeometryLoader());
