import { BufferGeometry, NormalBufferAttributes, TorusGeometry } from "three";
import * as tt from "../three-tile/three-tile.es";

export class MyGeometryLoader implements tt.ITileGeometryLoader {
    public dataType: string = "ball";
    public name: string = "ball loader";
    load(
        _tile: tt.Tile,
        _source: tt.ISource,
        _projectCenterLon: number,
        onLoad: (geometry: BufferGeometry<NormalBufferAttributes>) => void
    ): BufferGeometry<NormalBufferAttributes> {
        const geometry = new TorusGeometry(0.35, 0.15);
        setTimeout(() => onLoad(geometry), 1);
        return geometry;
    }
}
tt.LoaderFactory.registerGeometryLoader(new MyGeometryLoader());
