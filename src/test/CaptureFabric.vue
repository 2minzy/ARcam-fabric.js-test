<template>
  capture fabric
  <div class="camera">
    <div class="camera__video-wrap">
      <video class="camera__video" playsinline autoplay></video>
    </div>
    <div class="camera__canvas-wrap">
      <div class="camera__canvas-inr">
        <canvas class="camera__canvas camera__canvas--image"></canvas>
        <canvas class="camera__canvas camera__canvas--video"></canvas>
        <div class="camera__canvas">
          <canvas id="c" class="camera__canvas--fabric"></canvas>
        </div>
      </div>
    </div>
    <div class="camera__btn-wrap">
      <button class="camera__btn" @click="methods.playVideo" :disabled="data.captureState">camera__start</button>
      <button class="camera__btn" @click="methods.captureImage">captureImage</button>
      <button class="camera__btn" @click="methods.downloadImage">downloadImage</button>
      <button class="camera__btn" @click="methods.resetCanvas">resetCamera</button>
      <button class="camera__btn" @click="methods.removeSvg" :disabled="data.captureState">remove stickers</button>
      <button class="camera__btn" @click="methods.switchCamera" :disabled="data.captureState">switchCamera</button>
      <button class="camera__btn" @click="methods.sendUserInfo">sendUserInfo</button>
    </div>
    <div class="camera__stickers-wrap">
      <div v-for="(stickerG, index) in data.stickers" :key="index" class="camera__group">
        <div class="camera__group-name">{{ stickerG.group }}</div>
        <div class="camera__group-stickers">
          <button v-for="(sticker, index) in stickerG.item" :key="index" @click="methods.addSvg(sticker)" :disabled="data.captureState" class="camera__stickers">
            <img :src="sticker.path" alt="">
          </button>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>
import * as $ from "fxdom";
import * as _ from "fxjs";
import { reactive, useStore, onMounted } from "@/helper/vue.js";
import { fabric } from 'fabric';
import { computed } from '@vue/reactivity';
// import { ref, reactive, onMounted, onBeforeUnmount, onUnmounted, computed, useStore, watch } from "@/helper/vue.js";

// 1. 스티커 데이터 정리
// 1. 스티커 -> 버튼 만들기

export default {
  setup(props) {
    const { state, commit, dispatch } = useStore();
    const data = reactive({
      fabricCanvas: computed(() => new fabric.Canvas('c')),
      // svgShape: [],
      stickersInfo: [],
      facingMode: true,
      captureState: false,
      stickers: computed(() => state.stickers),
      // stickers: state.stickers,
    })
    const methods = {
      playVideo: () => {
        const canvasW = document.querySelector(".camera__video-wrap").offsetWidth;
        const video = document.querySelector(".camera__video");
        // console.log("navigator.mediaDevices", navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia({ video: { width: canvasW, height: canvasW, facingMode: data.facingMode ? 'user' : 'environment' } }).
        then(stream => {
          // 카메라 허용 클릭했을 때
          video.srcObject = stream;
          console.log("stream ----", stream);
        }).catch(error => {
          console.error("Can not get an access to a camera...", error);
        });
      },
      addSvg: (sticker) => {
        fabric.loadSVGFromURL(`${sticker.path}`, function(objects, options) {
          const shape = fabric.util.groupSVGElements(objects, options);
          shape['stickerId'] = sticker.id;
          
          data.fabricCanvas.add(shape.scale(1)).setActiveObject(shape).renderAll();
          // data.fabricCanvas.add(shape.scale(1));
          // // data.fabricCanvas.add(shape.scale(2));
          // data.fabricCanvas.setActiveObject(shape);
          // data.fabricCanvas.renderAll();
        });
      },
      removeSvg: () => {
        data.fabricCanvas.remove(...data.fabricCanvas.getObjects());
        // data.svgShape = [];
      },
      resetCanvas: () => {
        const canvasW = document.querySelector(".camera__video-wrap").offsetWidth;
        const imageCanvas = document.querySelector('.camera__canvas--image')
        const videoCanvas = document.querySelector('.camera__canvas--video')
        const fabricCanvas = document.querySelectorAll('.camera__canvas--fabric')
        const imageContext = imageCanvas.getContext("2d");
        const videoContext = videoCanvas.getContext("2d");
        methods.removeSvg();
        imageContext.clearRect(0, 0, canvasW, canvasW);
        videoContext.clearRect(0, 0, canvasW, canvasW);
        $.setCss({ display: 'inline-block' }, fabricCanvas[1]);
        data.captureState = false;
      },
      captureImage: () => {
        const canvasW = document.querySelector(".camera__video-wrap").offsetWidth;
        const imageCanvas = document.querySelector('.camera__canvas--image')
        const videoCanvas = document.querySelector('.camera__canvas--video')
        const fabricCanvas = document.querySelectorAll('.camera__canvas--fabric')
        const imageContext = imageCanvas.getContext("2d");
        const videoContext = videoCanvas.getContext("2d");
        const video = document.querySelector(".camera__video");
        // 스티커 active해제
        data.fabricCanvas.discardActiveObject();
        data.fabricCanvas.requestRenderAll();
        setTimeout(() => {
          imageContext.drawImage(video, 0, 0, canvasW, canvasW);
          imageContext.drawImage(fabricCanvas[0], 0, 0, canvasW, canvasW);
          videoContext.drawImage(video, 0, 0, canvasW, canvasW);
          $.setCss({ display: 'none' }, fabricCanvas[1]);
          data.captureState = true;
          setTimeout(() => {
            methods.captureTest();
          }, 20);
        }, 10);
      },
      captureTest: () => {
        // console.log("captureTest ------------");
        const videoCanvas = document.querySelector('.camera__canvas--video')
        videoCanvas.toBlob(blob => {
          const blobUrl = window.URL.createObjectURL(blob)
          // console.log("blobUrl", data.fabricCanvas);
          var img = new fabric.Image(blobUrl);
          // img.scale(1).center().setCoords();
          data.fabricCanvas.add(img).renderAll();
        });
        // console.log("getObjects", data.fabricCanvas.getObjects());
        
      },
      downloadImage: () => {
        const imageCanvas = document.querySelector('.camera__canvas--image')
        const downloadLink = document.createElement("a");
        downloadLink.setAttribute("download", `capture-${new Date().getTime()}.png`);
        imageCanvas.toBlob(blob => {
          const blobUrl = window.URL.createObjectURL(blob)
          downloadLink.setAttribute("href", blobUrl);
          downloadLink.click();
          window.URL.revokeObjectURL(blobUrl);
        });
      },
      sendUserInfo: () => {
        const canvasW = document.querySelector(".camera__video-wrap").offsetWidth;
        const fabricStickers = data.fabricCanvas.getObjects();
        const zoom = data.fabricCanvas.getZoom();
        _.go(fabricStickers,
          _.each(sticker => {
            const info = {
              id: sticker.stickerId,
              width: (sticker.width * 100 * zoom)/canvasW,
              height: (sticker.height * 100 * zoom)/canvasW,
              left: (sticker.left * 100 * zoom)/canvasW,
              top: (sticker.top * 100 * zoom)/canvasW,
              scaleX: sticker.scaleX,
              scaleY: sticker.scaleY,
              angle: sticker.angle,
            }
            data.stickersInfo.push(info);
          })
        )
        const videoCanvas = document.querySelector('.camera__canvas--video')
        videoCanvas.toBlob(blob => {
          // commit
          // blob 그대로 사용 혹은 file 이용해서 store 저장, 서버로 전송
          // const file = new File([blob], "name");
        });
      
        commit('setStickersInfo', {'stickersInfo': data.stickersInfo})
      },
      switchCamera: () => {
        data.facingMode = !data.facingMode;
        methods.playVideo();
      },
    }

    const setfabricControl = () => {
      const fabricObject = fabric.Object.prototype;
      const img = document.createElement('img');
      // const deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
      const deleteIcon = require('@/assets/cancel.svg');
      img.src = deleteIcon;

      fabricObject.setControlsVisibility({ mt: false, mb: false, ml: false, mr: false });
      // console.log("fabricObject.controls", fabricObject.controls);

      fabricObject.transparentCorners = false;
      fabricObject.cornerColor = 'blue';
      fabricObject.cornerStyle = 'circle';

      fabricObject.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        offsetY: 16,
        cursorStyle: 'pointer',
        mouseUpHandler: deleteObject,
        render: renderIcon,
        cornerSize: 24
      });

      function deleteObject(eventData, transform) {
        // console.log("transform", transform);
        const target = transform.target;
        const canvas = target.canvas;
        // console.log("canvas", canvas);
        canvas.remove(target);
        canvas.requestRenderAll();
      }

      function renderIcon(ctx, left, top, styleOverride, fabricObject) {
        // console.log("this", this);
        // console.log("fabricObject", fabricObject);
        const size = this.cornerSize;
        ctx.save();
        ctx.translate(left, top);
        ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
        ctx.drawImage(img, -size/2, -size/2, size, size);
        ctx.restore();
      }
    }

    const setCanvasSize = () => { // resize
      // const canvasW = document.querySelector(".camera__video-wrap").offsetWidth;
      // const imageCanvas = document.querySelector('.camera__canvas--image') // 사용자 device에 저장
      // const videoCanvas = document.querySelector('.camera__canvas--video') // 사용자 비디오 캡쳐
      // data.fabricCanvas.setDimensions({width:canvasW, height:canvasW});
      // imageCanvas.setAttribute("width", canvasW);
      // imageCanvas.setAttribute("height", canvasW);
      // videoCanvas.setAttribute("width", canvasW);
      // videoCanvas.setAttribute("height", canvasW);

      const canvasW = document.querySelector(".camera__video-wrap").offsetWidth;
      const imageCanvas = document.querySelector('.camera__canvas--image') // 사용자 device에 저장
      const videoCanvas = document.querySelector('.camera__canvas--video') // 사용자 비디오 캡쳐
      
      imageCanvas.setAttribute("width", canvasW);
      imageCanvas.setAttribute("height", canvasW);
      videoCanvas.setAttribute("width", canvasW);
      videoCanvas.setAttribute("height", canvasW);

      // 캡쳐 후 resize하고 다운로드하면 이상함
      // resize 하면 캔버스 비워짐
    }
    const resizeTest = () => { // resize
      // const canvasW = document.querySelector(".camera__video-wrap").offsetWidth;
      // const imageCanvas = document.querySelector('.camera__canvas--image') // 사용자 device에 저장
      // const videoCanvas = document.querySelector('.camera__canvas--video') // 사용자 비디오 캡쳐
      // data.fabricCanvas.setDimensions({width:canvasW, height:canvasW});
      // imageCanvas.setAttribute("width", canvasW);
      // imageCanvas.setAttribute("height", canvasW);
      // videoCanvas.setAttribute("width", canvasW);
      // videoCanvas.setAttribute("height", canvasW);

      // console.log("data.fabricCanvas.getZoom() ------", data.fabricCanvas.getZoom());
      const canvasW = document.querySelector(".camera__video-wrap").offsetWidth;
      const videoCanvas = document.querySelector('.camera__canvas--video') // 사용자 비디오 캡쳐

      
      const scale = canvasW / data.fabricCanvas.getWidth();
      const zoom  = data.fabricCanvas.getZoom() * scale;
      data.fabricCanvas.setDimensions({width: canvasW, height: canvasW});
      data.fabricCanvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
      // videoCanvas.setAttribute("width", canvasW);
      // videoCanvas.setAttribute("height", canvasW);

    }

    onMounted(() => {
      methods.playVideo(); // 테스트 중에만
      setCanvasSize();
      setfabricControl();
      resizeTest();
      
      // console.log("data.fabricCanvas.getZoom()", data.fabricCanvas.getZoom());
      window.addEventListener("resize", resizeTest);
    })

    return {
      data,
      methods
    }
  }
}
</script>

<style lang="scss" src="@/css/captureFabric.scss"></style>