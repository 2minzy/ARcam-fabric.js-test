<template>
  capture fabric
  <div class="camera">
    <button class="camera__start" @click="methods.playVideo">camera__start</button>
    <div class="camera__video-wrap">
      <video class="camera__video" autoplay></video>
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
      <button class="camera__btn" @click="methods.captureImage">captureImage</button>
      <button class="camera__btn" @click="methods.downloadImage">downloadImage</button>
      <button class="camera__btn" @click="methods.resetCanvas">resetCanvas</button>
      <button class="camera__btn" @click="methods.removeSvg">removeSvg</button>
      <button class="camera__btn" @click="methods.sendUserInfo">sendUserInfo</button>
      <button class="camera__btn" @click="methods.setFacingMode">facingMode</button>
      <button class="camera__btn" @click="methods.testBtn">testBtn</button>
      <button class="camera__btn" @click="methods.switchCam">switchCam</button>
    </div>
    <div class="camera__stickers-wrap">
      <div v-for="(stickerG, index) in data.stickers" :key="index" class="camera__group">
        <div class="camera__group-name">{{ stickerG.group }}</div>
        <div class="camera__group-stickers">
          <button v-for="(sticker, index) in stickerG.item" :key="index" @click="methods.addSvg(sticker)" class="camera__stickers">
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
      svgShape: [],
      usedSvgInfo: [],
      stickers: computed(() => state.stickers),
      // stickers: state.stickers,
    })
    const methods = {
      playVideo: () => {
        const canvasW = document.querySelector(".camera__video-wrap").offsetWidth;
        const video = document.querySelector(".camera__video");
        console.log("navigator.mediaDevices", navigator.mediaDevices);
        navigator.mediaDevices.getUserMedia({ video: { width: canvasW, height: canvasW } }).
        then(stream => {
          // 카메라 허용 클릭했을 때
          video.srcObject = stream;
          // console.log("stream ----", stream);
        }).catch(error => {
          console.error("Can not get an access to a camera...", error);
        });
      },
      addSvg: (sticker) => {
        fabric.loadSVGFromURL(`${sticker.path}`, function(objects, options) {
          const shapeIndex = data.svgShape.length;
          console.log("objects, options", objects, options);
          options['testId'] = sticker.id;
          data.svgShape[shapeIndex] = {id: sticker.id, shape: fabric.util.groupSVGElements(objects, options)};
          // data.svgShape[shapeIndex] = fabric.util.groupSVGElements(objects, options);
          data.fabricCanvas.add(data.svgShape[shapeIndex].shape.scale(2));
          data.fabricCanvas.setActiveObject(data.svgShape[shapeIndex].shape);
          data.fabricCanvas.renderAll();
          console.log("data.svgShape", data.svgShape);


          // data.fabricCanvas.forEachObject(function(obj) {
          //   var setCoords = obj.setCoords.bind(obj);
          //   obj.on({
          //     moving: setCoords,
          //     scaling: setCoords,
          //     rotating: setCoords
          //   });
          // })
        });
      },
      removeSvg: () => {
        data.fabricCanvas.remove(...data.fabricCanvas.getObjects());
        data.svgShape = [];
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
      },
      setUsedSvgInfo: () => {
        
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

          console.log("data.svgShape", data.svgShape);
        }, 10);
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
        const videoCanvas = document.querySelector('.camera__canvas--video')
        videoCanvas.toBlob(blob => {
          // commit
          // blob 그대로 사용 혹은 file 이용해서 store 저장, 서버로 전송
          // const file = new File([blob], "name");
        });
      },
      setFacingMode: () => {
        const facingMode = navigator.mediaDevices.getSupportedConstraints().facingMode;
        // console.log("navigator.userAgent ", navigator.userAgent );
        console.log("test11", facingMode);
      },
      testBtn: () => {
        const objects = data.fabricCanvas.getObjects()
        // getObjects로 스티커 id 체크 가능한지
        console.log("objects", objects);

      },
      switchCam: () => {}
    }

    const setfabricControl = () => {
      const fabricObject = fabric.Object.prototype;
      const img = document.createElement('img');
      // const deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
      const deleteIcon = require('@/assets/cancel.svg');
      img.src = deleteIcon;

      fabricObject.setControlsVisibility({ mt: false, mb: false, ml: false, mr: false, });
      console.log("fabricObject.controls", fabricObject.controls);

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
        console.log("transform", transform);
        const target = transform.target;
        const canvas = target.canvas;
        console.log("canvas", canvas);
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
      const canvasW = document.querySelector(".camera__video-wrap").offsetWidth;
      const imageCanvas = document.querySelector('.camera__canvas--image') // 사용자 device에 저장
      const videoCanvas = document.querySelector('.camera__canvas--video') // 사용자 비디오 캡쳐
      data.fabricCanvas.setDimensions({width:canvasW, height:canvasW});
      imageCanvas.setAttribute("width", canvasW);
      imageCanvas.setAttribute("height", canvasW);
      videoCanvas.setAttribute("width", canvasW);
      videoCanvas.setAttribute("height", canvasW);
    }

    onMounted(() => {
      console.log("navigator.mediaDevices.getUserMedia", navigator.mediaDevices.getUserMedia);
      methods.playVideo(); // 테스트 중에만
      setCanvasSize();
      setfabricControl();
    })

    return {
      data,
      methods
    }
  }
}
</script>

<style lang="scss" src="@/css/captureFabric.scss"></style>