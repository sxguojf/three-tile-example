import { FileLoader } from "three";

export async function loadMd4(url: string) {
    const ret = await new FileLoader().loadAsync(url);
    return parse(ret as any);
}
class Md4Head {
    diamond: string = "";
    type: number = 4;
    name: string = "";
    year: number = 2000;
    month: number = 1;
    day: number = 1;
    hour: number = 0;
    span: number = 0;
    level: number = 0;
    lonSpan: number = 1;
    latSpan: number = 1;
    beginLon: number = -180;
    endLon: number = 180;
    beginLat: number = -90;
    endLat: number = 90;
    countLon: number = 360;
    countLat: number = 180;
    levelSpan: number = 10;
    levelBegin: number = 0;
    levelEnd: number = 100;
    smoothingCoefficient: number = 0;
    boldValue: number = 0;
}
export type Md4Result = {
    data: number[][];
    head: Md4Head;
    levels: number[];
};
export function parse(text: string): Md4Result {
    const values: Array<any> = text.split(/[\s+\n+]+/);
    //文件头
    const head = new Md4Head();
    let index = 0;
    const anyHead = head as any;
    for (let k in head) {
        anyHead[k] = typeof anyHead[k] === "number" ? parseFloat(values[index]) : values[index];
        index++;
    }

    if (head.diamond != "diamond" || head.type != 4) {
        throw "无法解析数据文件，不是Micaps第4类文件格式";
    }

    //等值线值列表
    const levels: Array<number> = [];
    for (let i = head.levelBegin; i <= head.levelEnd; i += head.levelSpan) {
        levels.push(i);
    }

    //格点二维数组
    const gridData: Array<Array<number>> = new Array(head.countLat);
    //将数据写入格点数组
    for (let i = 0; i < head.countLat; i++) {
        let row = new Array(head.countLon);
        for (let j = 0; j < head.countLon; j++) {
            row[j] = parseFloat(values[index++]);
        }
        gridData[i] = row;
    }

    return {
        data: gridData,
        head,
        levels,
    };
}
