(function(e){function t(t){for(var n,r,o=t[0],s=t[1],u=t[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==c[o]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},c={app:0},i=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-32762fb6":"e90b3a07","chunk-6e914678":"303ea093","chunk-771fe318":"330bd2ec"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-32762fb6":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-32762fb6":"b1d0bb74","chunk-6e914678":"31d6cfe0","chunk-771fe318":"31d6cfe0"}[e]+".css",c=s.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],f.parentNode.removeChild(f),a(i)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var a=c[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/ARcam-fabric.js-test/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0c57":function(e,t,a){},1:function(e,t){},"10dd":function(e,t,a){"use strict";a.d(t,"d",(function(){return c}));var n=a("5502"),r=a("7a23");a.d(t,"c",(function(){return r["v"]})),a.d(t,"a",(function(){return r["r"]})),a.d(t,"b",(function(){return r["s"]}));var c=function(){var e=Object(n["b"])();return{state:e.state,get:e.getters,commit:e.commit,dispatch:e.dispatch}}},2:function(e,t){},"2b18":function(e,t,a){e.exports=a.p+"img/barcelona.d9bcbb54.jpg"},3:function(e,t){},"3a3a":function(e,t,a){},4538:function(e,t,a){e.exports=a.p+"img/sprite.3e29dc01.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={id:"nav"},c=Object(n["h"])("captureFabric"),i=Object(n["h"])(" | "),o=Object(n["h"])("captureFabricTest"),s=Object(n["h"])(" | "),u=Object(n["h"])("facingMode"),l=Object(n["h"])(" | "),d=Object(n["h"])("LandingPage");function f(e,t,a,f,m,b){var p=Object(n["y"])("router-link"),v=Object(n["y"])("router-view");return Object(n["t"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("div",r,[Object(n["i"])(p,{to:"/captureFabric"},{default:Object(n["D"])((function(){return[c]})),_:1}),i,Object(n["i"])(p,{to:"/captureFabricTest"},{default:Object(n["D"])((function(){return[o]})),_:1}),s,Object(n["i"])(p,{to:"/facingMode"},{default:Object(n["D"])((function(){return[u]})),_:1}),l,Object(n["i"])(p,{to:"/landing"},{default:Object(n["D"])((function(){return[d]})),_:1})]),Object(n["i"])(v)],64)}var m=a("10dd"),b={name:"Home",setup:function(){var e=Object(m["d"])(),t=(e.state,e.commit,e.dispatch),a=Object(m["c"])({}),n={};return Object(m["a"])((function(){t("init")})),{data:a,methods:n}}};a("d99c");b.render=f;var p=b,v=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),h={class:"home"};function g(e,t,a,r,c,i){var o=Object(n["y"])("CaptureFabric");return Object(n["t"])(),Object(n["e"])("div",h,[Object(n["i"])(o)])}a("7a94");var _=a("cd82"),j=a("6ce6"),O={name:"Home",components:{CaptureFabricTest:_["default"],CaptureFabric:j["default"]},setup:function(){var e=Object(n["v"])({}),t={};return Object(n["r"])((function(){})),{data:e,methods:t}}};O.render=g;var w=O,y=[{path:"/",name:"Home",component:w},{path:"/captureFabric",name:"captureFabric",component:function(){return Promise.resolve().then(a.bind(null,"6ce6"))}},{path:"/captureFabricTest",name:"captureFabricTest",component:function(){return Promise.resolve().then(a.bind(null,"cd82"))}},{path:"/facingMode",name:"facingMode",component:function(){return a.e("chunk-771fe318").then(a.bind(null,"1c31"))}},{path:"/landing",name:"landing",component:function(){return a.e("chunk-32762fb6").then(a.bind(null,"2e35"))}}],C=Object(v["a"])({history:Object(v["b"])("/ARcam-fabric.js-test/"),routes:y}),S=C,k=a("1da1"),I=(a("96cf"),a("5502")),x=Object(I["a"])({state:{stickers:[],userInfo:{userId:0,userImage:null,stickers:[{id:"0-0",width:null,height:null,left:null,top:null,scaleX:null,scaleY:null,angle:null},{id:"0-0",width:null,height:null,left:null,top:null,scaleX:null,scaleY:null,angle:null},{id:"0-0",width:null,height:null,left:null,top:null,scaleX:null,scaleY:null,angle:null}]}},mutations:{init:function(e,t){e.stickers=t.stickers},setStickersInfo:function(e,t){e.userInfo.stickers=t.stickersInfo,console.log("state.userInfo------------",e.userInfo)}},actions:{init:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,a.e("chunk-6e914678").then(a.bind(null,"cb47"));case 3:r=t.sent,n("init",{stickers:r.default.stickers});case 5:case"end":return t.stop()}}),t)})))()}}});Object(n["c"])(p).use(x).use(S).mount("#app")},"6ce6":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r={class:"camera"},c=Object(n["f"])("div",{class:"camera__video-wrap"},[Object(n["f"])("video",{class:"camera__video",playsinline:"",autoplay:""})],-1),i=Object(n["g"])('<div class="camera__canvas-wrap"><div class="camera__canvas-inr"><canvas class="camera__canvas camera__canvas--image"></canvas><canvas class="camera__canvas camera__canvas--video"></canvas><div class="camera__canvas"><canvas id="c" class="camera__canvas--fabric"></canvas></div></div></div>',1),o={class:"camera__btn-wrap"},s=["disabled"],u=["disabled"],l=["disabled"],d={class:"camera__stickers-wrap"},f={class:"camera__group-stickers"},m=["onClick","disabled"],b=["src"];function p(e,t,a,p,v,h){return Object(n["t"])(),Object(n["e"])("div",r,[c,i,Object(n["f"])("div",o,[Object(n["f"])("button",{class:"camera__btn",onClick:t[0]||(t[0]=function(){var e;return p.methods.playVideo&&(e=p.methods).playVideo.apply(e,arguments)}),disabled:p.data.captureState},"camera__start",8,s),Object(n["f"])("button",{class:"camera__btn",onClick:t[1]||(t[1]=function(){var e;return p.methods.captureImage&&(e=p.methods).captureImage.apply(e,arguments)})},"captureImage"),Object(n["f"])("button",{class:"camera__btn",onClick:t[2]||(t[2]=function(){var e;return p.methods.downloadImage&&(e=p.methods).downloadImage.apply(e,arguments)})},"downloadImage"),Object(n["f"])("button",{class:"camera__btn",onClick:t[3]||(t[3]=function(){var e;return p.methods.resetCanvas&&(e=p.methods).resetCanvas.apply(e,arguments)})},"resetCamera"),Object(n["f"])("button",{class:"camera__btn",onClick:t[4]||(t[4]=function(){var e;return p.methods.removeSvg&&(e=p.methods).removeSvg.apply(e,arguments)}),disabled:p.data.captureState},"remove stickers",8,u),Object(n["f"])("button",{class:Object(n["o"])(["camera__btn",{"camera__btn--hide":1==p.data.cameraLength}]),onClick:t[5]||(t[5]=function(){var e;return p.methods.switchCamera&&(e=p.methods).switchCamera.apply(e,arguments)}),disabled:p.data.captureState},"switchCamera",10,l),Object(n["f"])("button",{class:"camera__btn",onClick:t[6]||(t[6]=function(){var e;return p.methods.sendUserInfo&&(e=p.methods).sendUserInfo.apply(e,arguments)})},"sendUserInfo"),Object(n["f"])("button",{class:"camera__btn",onClick:t[7]||(t[7]=function(){var e;return p.methods.addAnimation&&(e=p.methods).addAnimation.apply(e,arguments)})},"addAnimation")]),Object(n["f"])("div",d,[(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(p.data.stickers,(function(e,a){return Object(n["t"])(),Object(n["e"])("div",{key:a,class:Object(n["o"])(["camera__group",{"camera__group--active":0==a}])},[Object(n["f"])("button",{class:"camera__group-name",onClick:t[8]||(t[8]=function(){var e;return p.methods.activeStickerG&&(e=p.methods).activeStickerG.apply(e,arguments)})},Object(n["A"])(e.group),1),Object(n["f"])("div",f,[(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(e.item,(function(e,t){return Object(n["t"])(),Object(n["e"])("button",{key:t,onClick:function(t){return p.methods.addSvg(e)},disabled:p.data.captureState,class:"camera__stickers"},[Object(n["f"])("img",{src:e.path,alt:""},null,8,b)],8,m)})),128))])],2)})),128))])])}var v=a("2909"),h=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("3f53")),g=a("b130"),_=a("e9da"),j=a("a250"),O=a("9bd2"),w=a("fb3c"),y=a("dd39"),C=a("27b3"),S=a("10dd"),k=a("7a94"),I=a("a1e9"),x={setup:function(e){var t=Object(S["d"])(),n=t.state,r=t.commit,c=(t.dispatch,Object(S["c"])({fabricCanvas:Object(I["c"])((function(){return new k["fabric"].Canvas("c")})),stickersInfo:[],userImage:null,facingMode:!0,captureState:!1,deleteState:!1,cameraLength:null,stickers:Object(I["c"])((function(){return n.stickers}))})),i={playVideo:function(){var e=document.querySelector(".camera__video-wrap").offsetWidth,t=document.querySelector(".camera__video");navigator.mediaDevices.getUserMedia({video:{width:e,height:e,facingMode:c.facingMode?"user":"environment"}}).then((function(e){t.srcObject=e})).catch((function(e){console.error("Can not get an access to a camera...",e)}))},addSvg:function(e){k["fabric"].loadSVGFromURL("".concat(e.path),(function(t,a){var n=k["fabric"].util.groupSVGElements(t,a);n["stickerId"]=e.id,c.fabricCanvas.add(n.scale(1)).setActiveObject(n).renderAll()}))},removeSvg:function(){var e;(e=c.fabricCanvas).remove.apply(e,Object(v["a"])(c.fabricCanvas.getObjects()))},resetCanvas:function(){var e=document.querySelector(".camera__video-wrap").offsetWidth,t=document.querySelector(".camera__canvas--image"),a=document.querySelector(".camera__canvas--video"),n=document.querySelectorAll(".camera__canvas--fabric"),r=t.getContext("2d"),o=a.getContext("2d");i.removeSvg(),r.clearRect(0,0,e,e),o.clearRect(0,0,e,e),h["a"]({display:"inline-block"},n[1]),c.captureState=!1},captureImage:function(){var e=document.querySelector(".camera__video-wrap").offsetWidth,t=document.querySelector(".camera__canvas--image"),a=document.querySelector(".camera__canvas--video"),n=document.querySelectorAll(".camera__canvas--fabric"),r=t.getContext("2d"),i=a.getContext("2d"),o=document.querySelector(".camera__video"),s=c.fabricCanvas.getZoom();c.fabricCanvas.discardActiveObject(),c.fabricCanvas.requestRenderAll(),setTimeout((function(){r.drawImage(o,0,0,e,e),r.drawImage(n[0],0,0,e,e),i.drawImage(o,0,0,e,e),a.toBlob((function(e){var t=window.URL.createObjectURL(e);k["fabric"].Image.fromURL(t,(function(e){c.fabricCanvas.add(e.scale(1/s).center().setCoords()).renderAll().sendToBack(e)}))})),h["a"]({display:"none"},n[1]),c.captureState=!0}),10)},downloadImage:function(){var e=document.querySelector(".camera__canvas--image"),t=document.createElement("a");t.setAttribute("download","capture-".concat((new Date).getTime(),".png")),e.toBlob((function(e){var a=window.URL.createObjectURL(e);t.setAttribute("href",a),t.click(),window.URL.revokeObjectURL(a)}))},sendUserInfo:function(){console.log("data.fabricCanvas.getZoom()",c.fabricCanvas.getZoom());var e=document.querySelector(".camera__video-wrap").offsetWidth,t=c.fabricCanvas.getObjects(),a=c.fabricCanvas.getZoom();y["a"](t,C["a"]((function(t){var n={id:t.stickerId,width:100*t.width*a/e,height:100*t.height*a/e,left:100*t.left*a/e,top:100*t.top*a/e,scaleX:t.scaleX,scaleY:t.scaleY,angle:t.angle};void 0!==n.id&&c.stickersInfo.push(n)}))),r("setStickersInfo",{stickersInfo:c.stickersInfo,userImage:c.userImage})},switchCamera:function(){c.facingMode=!c.facingMode,i.playVideo()},addAnimation:function(){k["fabric"].Sprite=k["fabric"].util.createClass(k["fabric"].Image,{type:"sprite",spriteWidth:50,spriteHeight:72,spriteIndex:0,frameTime:100,initialize:function(e,t){t||(t={}),t.width=this.spriteWidth,t.height=this.spriteHeight,this.callSuper("initialize",e,t),this.createTmpCanvas(),this.createSpriteImages()},createTmpCanvas:function(){this.tmpCanvasEl=k["fabric"].util.createCanvasElement(),this.tmpCanvasEl.width=this.spriteWidth||this.width,this.tmpCanvasEl.height=this.spriteHeight||this.height},createSpriteImages:function(){this.spriteImages=[];for(var e=this._element.width/this.spriteWidth,t=0;t<e;t++)this.createSpriteImage(t)},createSpriteImage:function(e){var t=this.tmpCanvasEl.getContext("2d");t.clearRect(0,0,this.tmpCanvasEl.width,this.tmpCanvasEl.height),t.drawImage(this._element,-e*this.spriteWidth,0);var a=this.tmpCanvasEl.toDataURL("image/png"),n=k["fabric"].util.createImage();n.src=a,this.spriteImages.push(n)},_render:function(e){e.drawImage(this.spriteImages[this.spriteIndex],-this.width/2,-this.height/2)},play:function(){var e=this;this.animInterval=setInterval((function(){e.onPlay&&e.onPlay(),e.dirty=!0,e.spriteIndex++,e.spriteIndex===e.spriteImages.length&&(e.spriteIndex=0)}),this.frameTime)},stop:function(){clearInterval(this.animInterval)}}),k["fabric"].Sprite.fromURL=function(e,t,a){k["fabric"].util.loadImage(e,(function(e){t(new k["fabric"].Sprite(e,a))}))},k["fabric"].Sprite.async=!0,k["fabric"].Sprite.fromURL(a("4538"),(function(e){c.fabricCanvas.add(e),e.set("dirty",!0),e.play()})),function e(){c.fabricCanvas.renderAll(),k["fabric"].util.requestAnimFrame(e)}()},activeStickerG:function(e){y["a"](g["a"](".camera__group"),C["a"]((function(e){_["a"]("camera__group--active",e)&&j["a"]("camera__group--active",e)}))),O["a"]("camera__group--active",w["a"](".camera__group",e.target))}},o=function(){navigator.mediaDevices.enumerateDevices().then((function(e){var t=[];y["a"](e,C["a"]((function(e){"videoinput"===e.kind&&t.push(e)}))),c.cameraLength=t.length,console.log("info",t.length)})).catch((function(e){console.log("error")}))},s=function(){var e=k["fabric"].Object.prototype,t=document.createElement("img"),n=a("f687");function r(e,t){c.deleteState=!0;var a=t.target,n=a.canvas;n.remove(a),n.requestRenderAll()}function i(e,a,n,r,c){var i=this.cornerSize;e.save(),e.translate(a,n),e.rotate(k["fabric"].util.degreesToRadians(c.angle)),e.drawImage(t,-i/2,-i/2,i,i),e.restore()}t.src=n,e.setControlsVisibility({mt:!1,mb:!1,ml:!1,mr:!1}),e.transparentCorners=!1,e.controls.deleteControl=new k["fabric"].Control({x:.5,y:-.5,offsetY:16,cursorStyle:"pointer",mouseUpHandler:r,render:i,cornerSize:24}),console.log("fabricObject.controls",e),console.log("fabricObject.controls",e.controls),console.log("img",t)},u=function(){var e=document.querySelector(".camera__video-wrap").offsetWidth,t=document.querySelector(".camera__canvas--image"),a=document.querySelector(".camera__canvas--video");t.setAttribute("width",e),t.setAttribute("height",e),a.setAttribute("width",e),a.setAttribute("height",e),l()},l=function(){i.playVideo(),console.log("data.fabricCanvas.getZoom()",c.fabricCanvas.getZoom());var e=document.querySelector(".camera__video-wrap").offsetWidth,t=e/c.fabricCanvas.getWidth(),a=c.fabricCanvas.getZoom()*t;c.fabricCanvas.setDimensions({width:e,height:e}),c.fabricCanvas.setViewportTransform([a,0,0,a,0,0])},d=function(){c.fabricCanvas.on("mouse:up",(function(e){if(e.target)return c.deleteState?c.deleteState=!1:void c.fabricCanvas.bringToFront(e.target)}))};return Object(S["a"])((function(){o(),i.playVideo(),d(),u(),s(),window.addEventListener("resize",l)})),Object(S["b"])((function(){window.removeEventListener("resize",l)})),{data:c,methods:i}}};a("8f70");x.render=p;t["default"]=x},"8f70":function(e,t,a){"use strict";a("0c57")},"962f":function(e,t,a){"use strict";a("a1c4")},a1c4:function(e,t,a){},c39b:function(e,t,a){e.exports=a.p+"img/sticker-0-1.5fefd5a3.svg"},cd82:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r=a("2b18"),c=a.n(r),i={class:"button-wrap"},o=Object(n["f"])("div",{class:"capture"},[Object(n["f"])("div",{class:"capture__video-wrap"},[Object(n["f"])("div",{class:"capture__video"},[Object(n["f"])("video",{class:"capture__player",autoplay:""}),Object(n["f"])("img",{class:"capture__img",src:c.a,alt:""})]),Object(n["f"])("button",{class:"capture__btn",title:"Take a picture"})]),Object(n["f"])("div",{class:"capture__canvas-wrap"},[Object(n["f"])("canvas",{id:"c",class:"capture__canvas",style:{border:"1px solid #ccc"}})]),Object(n["f"])("canvas",{class:"capture__output",width:"597",height:"597"})],-1);function s(e,t,a,r,c,s){return Object(n["t"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("div",i,[Object(n["f"])("button",{class:"button",onClick:t[0]||(t[0]=function(){var e;return r.methods.addSvg&&(e=r.methods).addSvg.apply(e,arguments)})},"add svg")]),o],64)}a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d");var u=a("10dd"),l=a("7a94"),d=a("a1e9"),f={setup:function(){var e,t=Object(u["c"])({fabricCanvas:Object(d["c"])((function(){return new l["fabric"].Canvas("c")})),canvasSize:""}),n={add:function(){var e=new l["fabric"].Rect({left:100,top:50,fill:"yellow",width:200,height:100,objectCaching:!1,stroke:"lightgreen",strokeWidth:4});t.fabricCanvas.add(e),t.fabricCanvas.setActiveObject(e)},addSvg:function(){console.log("addSvg ---------------"),l["fabric"].loadSVGFromURL(a("c39b"),(function(e,a){var n=l["fabric"].util.groupSVGElements(e,a);t.fabricCanvas.add(n.scale(1)),t.fabricCanvas.renderAll()}))}},r=function(){var a="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E",n=document.createElement("img");function r(){e=new l["fabric"].Rect({left:100,top:50,fill:"yellow",width:200,height:100,objectCaching:!1,stroke:"lightgreen",strokeWidth:4}),t.fabricCanvas.add(e)}function c(e,t){var a=t.target,n=a.canvas;n.remove(a),n.requestRenderAll()}function i(e,t,a,r,c){var i=this.cornerSize;e.save(),e.translate(t,a),e.rotate(l["fabric"].util.degreesToRadians(c.angle)),e.drawImage(n,-i/2,-i/2,i,i),e.restore()}n.src=a,l["fabric"].Object.prototype.transparentCorners=!1,l["fabric"].Object.prototype.cornerColor="blue",l["fabric"].Object.prototype.cornerStyle="circle",l["fabric"].Object.prototype.controls.deleteControl=new l["fabric"].Control({x:.5,y:-.5,offsetY:16,cursorStyle:"pointer",mouseUpHandler:c,render:i,cornerSize:24}),console.log("fabric.Object.prototype.controls",l["fabric"].Object.prototype),r()},c=function(){var e=document.getElementsByClassName("capture__player")[0],a=document.getElementsByClassName("capture__btn")[0],n=document.getElementsByClassName("capture__output")[0],r=document.getElementsByClassName("capture__canvas")[0];console.log("outputCanvas",n);r.getContext("2d");var c=n.getContext("2d");navigator.mediaDevices.getUserMedia({video:!0}).then((function(t){e.srcObject=t,console.log("stream ----")})).catch((function(e){console.error("Can not get an access to a camera...",e)})),a.addEventListener("click",(function(){e.offsetWidth,e.offsetHeight;c.drawImage(e,0,0,200,100),c.drawImage(r,0,0,300,150),console.log("data.fabricCanvas",t.fabricCanvas),console.log("fabric",l["fabric"]);var a=document.createElement("a");a.setAttribute("download","capture-".concat((new Date).getTime(),".png")),n.toBlob((function(e){var t=window.URL.createObjectURL(e);a.setAttribute("href",t),a.click(),window.URL.revokeObjectURL(t)}))}))};return Object(u["a"])((function(){var e=document.querySelector(".capture__video-wrap").offsetWidth;t.fabricCanvas.setDimensions({width:e,height:e}),r(),c()})),{data:t,methods:n}}};a("962f");f.render=s;t["default"]=f},d99c:function(e,t,a){"use strict";a("3a3a")},f687:function(e,t,a){e.exports=a.p+"img/cancel.c6ba33cc.svg"}});
//# sourceMappingURL=app.283c218a.js.map