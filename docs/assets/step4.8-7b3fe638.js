var C=Object.defineProperty;var M=(a,s,e)=>s in a?C(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var i=(a,s,e)=>(M(a,typeof s!="symbol"?s+"":s,e),e);import"./modulepreload-polyfill-3cfb730f.js";import{g as S}from"./lil-gui.module.min-a1e98589.js";import{E as T,v as D,w as g,V as d,H as P,z as y,F,y as R,s as L,W as b,aP as u,bN as _,aQ as f,bO as z,ax as E,bl as B,aJ as A,P as U,f as w,ae as Z,o as I,i as N,d as k,m as W,a as H}from"./mapSource-8cec7301.js";import{c as V,s as j,d as q,b as G}from"./util-202ae443.js";import{M as O}from"./MapControls-6968b072.js";class $ extends T{constructor(e,r=new d(0,3e3,0),o=new d(0,-1e3,1e4)){super();i(this,"scene");i(this,"renderer");i(this,"camera");i(this,"controls");i(this,"ambLight");i(this,"dirLight");i(this,"container");i(this,"_clock",new D);i(this,"depthRenderTarget");i(this,"depthCamera");i(this,"depthScene",new g);i(this,"depthMesh");i(this,"depthPixelBuffer",new Uint8Array(100*100));i(this,"depthCanvasContex");i(this,"currentRenderTarget");i(this,"_fogFactor",1);this.container=e,this.renderer=this._createRenderer(),this.scene=this._createScene(),this.camera=this._createCamera(r),this.controls=this._createControls(r,this.camera,e),this.ambLight=this._createAmbLight(),this.scene.add(this.ambLight),this.dirLight=this._createDirLight(),this.scene.add(this.dirLight),this.depthMesh=this.createDepth(),this.container.appendChild(this.renderer.domElement);const t=document.querySelector("#depthcanvas");t.width=this.width,t.height=this.height,this.depthCanvasContex=t.getContext("2d"),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.animate()}get width(){return this.container.clientWidth}get height(){return this.container.clientHeight}get fogFactor(){return this._fogFactor}set fogFactor(e){this._fogFactor=e,this.controls.dispatchEvent({type:"change"})}_createDirLight(){const e=new P(16777215,.5);return e.target.position.copy(this.controls.target),e.position.set(-1e3,-2e3,1e4),e}_createAmbLight(){return new y(16777215,.7)}_createControls(e,r,o){const t=new O(r,o);return t.target.copy(e),t.minDistance=.1,t.maxDistance=15e3,t.zoomSpeed=3,t.maxPolarAngle=1.2,t.enableDamping=!0,t.listenToKeyEvents(window),t.addEventListener("change",()=>{const m=Math.max(this.controls.getPolarAngle(),.1),c=Math.max(this.controls.getDistance(),.1);t.zoomSpeed=Math.max(Math.log(c),1.8),this.camera.far=Math.max(Math.min(c/m*8,5e4),10),this.camera.near=this.camera.far/1e3,this.camera.updateProjectionMatrix(),this.scene.fog instanceof F&&(this.scene.fog.density=m/(c+5)/4*this.fogFactor)}),t.saveState(),t}_createCamera(e){const r=new R(80,1,.1,5e4);return r.position.set(e.x-10,e.y-20,e.z),r}_createScene(){const r=new g;return r.background=new L(14414079),r}_createRenderer(){const e=new b({antialias:!0,alpha:!0,logarithmicDepthBuffer:!1,precision:"highp",depth:!0});return e.sortObjects=!0,e.setPixelRatio(window.devicePixelRatio),e.autoClear=!1,e}resize(){const e=this.width,r=this.height;return this.currentRenderTarget&&this.currentRenderTarget.dispose(),this.currentRenderTarget=new u(e,r),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,r),this.camera.aspect=e/r,this.camera.updateProjectionMatrix(),this}animate(){requestAnimationFrame(this.animate.bind(this)),this.camera,this.depthMesh.material.uniforms.cameraNear.value=this.camera.near,this.depthMesh.material.uniforms.cameraFar.value=this.camera.far,this.depthMesh.material.uniforms.cameraMatrixInverse.value=this.camera.matrixWorldInverse,this.renderer.setRenderTarget(this.depthRenderTarget),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.currentRenderTarget),this.renderer.render(this.depthScene,this.depthCamera),this.renderer.setRenderTarget(null),this.renderer.render(this.depthScene,this.depthCamera),this.renderer.readRenderTargetPixels(this.currentRenderTarget,0,0,this.currentRenderTarget.width,this.currentRenderTarget.height,this.depthPixelBuffer);const e=new ImageData(new Uint8ClampedArray(this.depthPixelBuffer),this.depthRenderTarget.width,this.depthRenderTarget.height);this.depthCanvasContex.putImageData(e,0,0),this.controls.update(),this.dispatchEvent({type:"update",delta:this._clock.getDelta()})}createDepth(){const e=this.container.clientWidth,r=this.container.clientHeight,o=new _(e,r),t=new u(e,r);this.depthPixelBuffer=new Uint8Array(e*r*4),t.texture.minFilter=f,t.texture.magFilter=f,t.texture.generateMipmaps=!1,t.depthTexture=o,t.depthTexture.format=z,t.depthTexture.type=E,this.depthRenderTarget=t,this.depthCamera=new B(-1,1,1,-1,0,1);const m=new A({uniforms:{depthTexture:{value:o},tDiffuse:{value:t.texture},cameraNear:{value:this.camera.near},cameraFar:{value:this.camera.far},cameraMatrixInverse:{value:this.camera.matrixWorldInverse},scale:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`

        uniform sampler2D depthTexture;
        uniform sampler2D tDiffuse;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform mat4 cameraMatrixInverse;
        uniform float scale;
        varying vec2 vUv;

        #include <packing>
        #include <common>

        
        float readDepth( sampler2D depthSampler, vec2 coord ) {
            // fragCoordZ:0.0-1.0
            float fragCoordZ = texture2D( depthSampler, coord ).x;	
            // 透视深度Z转换为摄像机坐标系的Z
            float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar );
            // 将摄像机坐标系的Z映射到0-1范围
            return viewZToOrthographicDepth(viewZ, cameraNear, cameraFar );
        }

        void main() {
            float depth =  readDepth(depthTexture, vUv);
            vec4 diffuse = texture2D(tDiffuse,vUv);
            // 使用线性深度值重建世界坐标
            //float z = cameraNear * cameraFar / ((cameraFar - cameraNear) * depth*100.0 - cameraFar);

            vec4 cameraSpacePosition = vec4(vUv, depth, 1.0);
            vec4 worldSpacePosition = cameraMatrixInverse * cameraSpacePosition;// * scale;
            worldSpacePosition = normalize(worldSpacePosition);
            

            gl_FragColor = vec4(worldSpacePosition.xyz, 1.0);
            gl_FragColor = vec4(worldSpacePosition.z,worldSpacePosition.z,worldSpacePosition.z, 1.0);
            gl_FragColor = vec4(vUv,depth,1.0);
        }
    `}),c=new U(2,2),p=new w(c,m);return this.depthScene.add(p),this.depthScene.add(new Z(this.depthCamera)),p}}const h=V(H,W),K=document.querySelector("#map"),l=h.geo2pos(new d(86.92,27.95)),n=new $(K,new d(l.x,l.y,10)),J=(()=>{const a=new w(new I(1,.3,128,16),new N({color:3355443,shininess:30,specular:13421772,emissive:0}));return a.position.set(l.x,l.y-5,8),a.castShadow=!0,a})();h.add(J);(()=>{const a=new S;a.add(n.camera,"near",.1,100,.1).listen(),a.add(n.camera,"far",.1,1e4,.1).listen(),a.add(n.depthMesh.material.uniforms.scale,"value",0,10,1e-6)})();j(n,h);q(h);G(h);const x=new k(new d,n.camera.position);x.setLength(100);h.add(x);const v=document.querySelector("#depth");n.container.addEventListener("pointermove",a=>{n.camera.updateMatrixWorld();const s=(n.height-a.clientY)*n.width+a.clientX;if(v){const e=n.depthPixelBuffer[s*4+0],r=n.depthPixelBuffer[s*4+1],o=n.depthPixelBuffer[s*4+2];v.innerHTML=`${e},${r},${o}`}});
