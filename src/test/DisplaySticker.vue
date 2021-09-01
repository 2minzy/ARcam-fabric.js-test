<template>
  <img ref="self" class="i-sticker" :src="require(`@/assets/stickers/sticker-${id}.svg`)"  alt="" />
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import * as $ from "fxdom";
import * as _ from "fxjs";
import Stickers from './stickers';

export default {
  props: {
    angle: Number,
    height: Number,
    id: String,
    left: Number,
    scaleX: Number,
    scaleY: Number,
    top: Number,
    width: Number
  },
  setup(props) {
    const self = ref();
    const data = reactive({
      stickers: Stickers.stickers,
      src: ''
    })

    const methods = {
    }
    
    onMounted(() => {
      // const res = await axios.get(`http://localhost:3000/stacks?_page=${data.loadCount}&_limit=12`)
      // data.stacksList = StacksData
      // console.log(data.stacksList);
        // gsap.to(chatbotEl, 0.3, { x: 0 , y: 0, ease: 'power1' });

      $.setCss({
        transform: `scale(${props.scaleX}, ${props.scaleY}) rotate(${props.angle}deg)`,
        top: `${props.top}%`,
        left: `${props.left}%`,
        width: `${props.width}%`,
        height: `${props.height}%`
        // transform: `scale(${props.scaleX}, ${props.scaleY})`,
      }, self.value.parentElement)
    })

    return {
      data,
      self,
      methods
    }
  }
}
</script>

<style lang="scss" src="@/css/landingPage.scss"></style>