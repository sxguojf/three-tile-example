import"./modulepreload-polyfill-3cfb730f.js";import{V as t,G as v,e as c,m as d,a as p}from"./mapSource-bbe48df7.js";import{C as w,a as S}from"./CSS2DRenderer-2507dd91.js";import{c as f,a as h,s as b,b as y}from"./util-5a34c843.js";const E=[{name:"沈阳市",value:["123.429092","41.796768"]},{name:"长春市",value:["125.324501","43.886841"]},{name:"哈尔滨市",value:["126.642464","45.756966"]},{name:"北京市",value:["116.405289","39.904987"]},{name:"天津市",value:["117.190186","39.125595"]},{name:"呼和浩特市",value:["111.751990","40.841490"]},{name:"银川市",value:["106.232480","38.486440"]},{name:"太原市",value:["112.549248","37.857014"]},{name:"石家庄市",value:["114.502464","38.045475"]},{name:"济南市",value:["117.000923","36.675808"]},{name:"郑州市",value:["113.665413","34.757977"]},{name:"西安市",value:["108.948021","34.263161"],about:"Guojf.SXMB"},{name:"武汉市",value:["114.298569","30.584354"]},{name:"南京市",value:["118.76741","32.041546"]},{name:"合肥市",value:["117.283043","31.861191"]},{name:"上海市",value:["121.472641","31.231707"]},{name:"长沙市",value:["112.982277","28.19409"]},{name:"南昌市",value:["115.892151","28.676493"]},{name:"杭州市",value:["120.15358","30.287458"]},{name:"福州市",value:["119.306236","26.075302"]},{name:"广州市",value:["113.28064","23.125177"]},{name:"台北市",value:["121.5200760","25.0307240"]},{name:"海口市",value:["110.199890","20.044220"]},{name:"南宁市",value:["108.320007","22.82402"]},{name:"重庆市",value:["106.504959","29.533155"]},{name:"昆明市",value:["102.71225","25.040609"]},{name:"贵阳市",value:["106.713478","26.578342"]},{name:"成都市",value:["104.065735","30.659462"]},{name:"兰州市",value:["103.834170","36.061380"]},{name:"西宁市",value:["101.777820","36.617290"]},{name:"拉萨市",value:["91.11450","29.644150"]},{name:"乌鲁木齐市",value:["87.616880","43.826630"]},{name:"香港",value:["114.165460","22.275340"]},{name:"澳门",value:["113.549130","22.198750"]}];const o=f(p,d),G=new t(108,34,0),g=new t(108,0,1e4),a=h("#map",o,G,g),l=new w;l.setSize(a.container.clientWidth,a.container.clientHeight);l.domElement.style.position="absolute";a.container.appendChild(l.domElement);a.addEventListener("update",()=>{l.render(a.scene,a.camera)});window.addEventListener("resize",()=>l.setSize(a.container.clientWidth,a.container.clientHeight));const s=new v;o.add(s);(()=>{const i=new t(0,0,1);E.forEach(e=>{const n=Number.parseFloat(e.value[0]),m=Number.parseFloat(e.value[1]),u=o.geo2pos(new t(n,m)),r=new c(i,new t(u.x,u.y,-2),20);r.name=e.name,r.userData=e,s.add(r)}),s.traverse(e=>{if(e instanceof c){const n=document.createElement("span");n.className="label",n.innerHTML=`${e.name}`,n.title=`${JSON.stringify(e.userData)}`;const m=new S(n);m.position.copy(e.position.clone().add(new t(0,0,1))),s.add(m)}})})();b(a,o);y(o);
