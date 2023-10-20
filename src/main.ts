let exampleList = {
    "step1.1": {
        label: "1.1 起步-地图创建",
    },
    "step1.2": {
        label: "1.2 起步-调整地图位置和缩放",
    },
    "step1.3": {
        label: "1.3 起步-获取地理位置信息",
    },
    "step1.4": {
        label: "1.4 起步-显示地图数据加载状态",
    },
    "step1.5": {
        label: "1.5 起步-坐标转换",
    },
    "step1.6": {
        label: "1.6 起步-添加地名",
    },
    "step1.7": {
        label: "1.7 起步-添加图片",
    },
    "step1.8": {
        label: "1.8 起步-添加几何体",
    },

    "step2.1": {
        label: "2.1 基础-自定义地图数据源",
    },
    "step2.2": {
        label: "2.2 基础-地形参数调整",
    },
    "step2.3": {
        label: "2.3 基础-地图和环境控制",
    },
    "step2.4": {
        label: "2.4 基础-自定义场景",
    },
    "step2.5": {
        label: "2.5 基础-太阳耀斑",
    },
    "step2.6": {
        label: "2.6 基础-雾和大气效果",
    },
    "step2.7": {
        label: "2.7 基础-蓝天白云",
    },
    "step2.8": {
        label: "2.8 基础-开场动画",
    },
    "step2.9": {
        label: "2.9 基础-动画和阴影",
    },
    "step2.10": {
        label: "2.10 基础-加载建筑物模型",
    },
    "step2.11": {
        label: "2.11 基础-天空太阳大气",
    },

    "step3.1": {
        label: "3.1 进阶-雷雨天气模拟",
    },
    "step3.2": {
        label: "3.2 进阶-第三人称飞行",
    },
    "step3.3": {
        label: "3.3 进阶-第一人称射击",
    },
    "step3.4": {
        label: "3.4 进阶-人物地面行走",
    },
    "step3.5": {
        label: "3.5 进阶-水面模拟",
    },

    "step4.1": {
        label: "4.1 扩展-自定义瓦片材质",
    },
    "step4.2": {
        label: "4.2 扩展-自定义瓦片几何体",
    },
    "step4.3": {
        label: "4.3 扩展-绘制瓦片坐标",
    },
    "step4.4": {
        label: "4.4 扩展-绘制瓦片影像",
    },
    "step4.5": {
        label: "4.5 扩展-显示瓦片法向量",
    },
    "step4.6": {
        label: "4.6 扩展-自定义地形加载器",
    },
    "step4.7": {
        label: "4.7 扩展-自定义影像加载器",
    },
    "step4.8": {
        label: "4.8 扩展-深度纹理取高程",
    },

    "step5.1": {
        label: "5.1 应用-伪三维卫星云图",
    },
    "step5.2": {
        label: "5.2 应用-伪三维天气雷达图",
    },
    "step5.3": {
        label: "5.3 应用-三维云量模型",
    },
    "step5.4": {
        label: "5.4 应用-等高面及等高线",
    },
    "step5.5": {
        label: "5.5 应用-流场动画",
    },
    "step5.6": {
        label: "5.6 应用-高空天气图",
    },
    "step5.7": {
        label: "5.7 应用-地面天气图",
    },
    "step5.8": {
        label: "5.8 应用-三维格点体渲染",
    },
    "step5.9": {
        label: "5.9 应用-三维格点等值面",
    },
    "step5.10": {
        label: "5.10 应用-PM2.5体渲染",
    },
    "step5.11": {
        label: "5.11 应用-三维格点切片",
    },
    "step5.12": {
        label: "5.12 应用-三维闪电定位",
    },
    "step5.13": {
        label: "5.13 应用-火点监测",
    },
    "step5.14": {
        label: "5.14 应用-淹没模型",
    },
};

function createSideList(exampleList: any) {
    const frame = document.querySelector("#frame") as HTMLIFrameElement;
    const elExample = document.querySelector("#example")!;
    for (let key in exampleList) {
        const el = document.createElement("li");
        el.innerText = (exampleList as any)[key].label;
        el.onclick = function (evt: MouseEvent) {
            const src = `src/${key}/index.html`;
            console.log(`load ${src}`);
            frame.src = src;
            setFocus(evt.currentTarget as HTMLLIElement);
        };
        elExample.appendChild(el);
    }
    document.querySelector("#title")?.addEventListener("click", () => {
        frame.src = "src/readme/index.html";
        setFocus(null);
    });
}

function setFocus(el: HTMLLIElement | null) {
    const lis = document.querySelectorAll("#example li");
    for (let i = 0; i < lis.length; i++) {
        const li = lis[i];
        if (el === li) {
            li.className = "current";
        } else {
            li.className = "";
        }
    }
}

createSideList(exampleList);
