import"./modulepreload-polyfill-3cfb730f.js";import{q as o,Y as c,M as n}from"./mapSource-6ce90261.js";const a=document.querySelector("#map"),m=new o.GLViewer(a),r=n,t=new o.MapBoxSource({token:r,dataType:"image",style:"mapbox.satellite"}),l=new o.MapBoxSource({token:r,dataType:"terrain-rgb",style:"mapbox.terrain-rgb",maxLevel:15}),e=c.create({imgSource:t,demSource:l,lon0:90,minLevel:2,maxLevel:18});m.scene.add(e);document.querySelector("#mapbox").addEventListener("click",()=>{e.imgSource=t,e.reload()});document.querySelector("#bing").addEventListener("click",()=>{e.imgSource=new o.BingSource,e.reload()});document.querySelector("#gd").addEventListener("click",()=>{e.imgSource=[new o.GDSource({style:"6"}),new o.GDSource({style:"8"})],e.reload()});document.querySelector("#tx").addEventListener("click",()=>{e.imgSource=[new o.TXSource,new o.GDSource({style:"8"})],e.reload()});