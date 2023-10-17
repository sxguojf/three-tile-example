import { Texture, TextureLoader } from "three";
import * as tt from "../three-tile/three-tile.es";

export class MyTextureLoader implements tt.ITileTextureLoader {
    public dataType: string = "uv";
    public name: string = "uv loader";
    private uvTexture = new TextureLoader().load("../image/test.jpg");

    load(
        _tile: tt.Tile,
        _source: tt.ISource,
        _projectCenterLon: number,
        onLoad: (texture: Texture) => void
    ): Texture {
        setTimeout(() => onLoad(this.uvTexture), 0);
        return this.uvTexture;
    }
}
tt.LoaderFactory.registerTextureLoader(new MyTextureLoader());
