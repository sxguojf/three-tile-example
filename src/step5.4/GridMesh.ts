import { Float32BufferAttribute, Mesh, PlaneGeometry } from "three";
import { Lut } from "three/examples/jsm/math/Lut.js";
import { craetGridShader } from "./gridShader";
/**
 * 高度场模型
 */
export default class HighMesh extends Mesh {
    _hScale: number = 5;
    width: number = 1;
    height: number = 1;
    data: number[] = [];
    max: number = -999999;
    min: number = 999999;

    // material = new MeshLambertMaterial({
    //     transparent: true,
    //     opacity: 0.8,
    //     vertexColors: true,
    //     side: DoubleSide,
    // });

    material = craetGridShader();

    constructor(data?: number[][]) {
        super();
        if (data) {
            this.setData(data);
        }
    }

    setData(data: number[][]) {
        this.width = data[0].length;
        this.height = data.length;
        this.data = data.flat();
        this.max = Math.max(...this.data);
        this.min = Math.min(...this.data);
        this.geometry?.dispose();
        // this.material?.dispose();
        this.geometry = new PlaneGeometry(1, 1, this.width - 1, this.height - 1);
        this.hScale = 1;
        return this;
    }

    get hScale() {
        return this._hScale;
    }

    set hScale(value) {
        this._hScale = value;
        const position = this.geometry.attributes.position;
        // const colors = this.geometry.attributes.colors;
        const colors: number[] = [];
        let lut = new Lut("rainbow", 512);
        lut.setMax(100);
        lut.setMin(0);
        for (let i = 0, l = position.count; i < l; i++) {
            const v = (this.data[i] - this.min) / (this.max - this.min);
            position.setZ(i, v * value);
            const color = lut.getColor(v * 100);
            colors.push(color.r, color.g, color.b);
        }
        this.geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
        this.geometry.attributes.color.needsUpdate = true;
        this.geometry.computeVertexNormals();
        this.geometry.attributes.position.needsUpdate = true;
    }
}
