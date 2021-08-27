<template>
  <div class="stacks">
    <div class="stacks__title">Stack List</div>
    <div class="stacks__wrapper">
      <div class="stacks__items">
        <div class="stacks__item" v-for="(stack, idx) in data.stacksList" :key="idx">
          <div class="stacks__item-sticker" v-for="(info, idx) in stack.stackInfo" :key="idx">
            <DisplaySticker :id="info.id" :angle="info.angle" :height="info.height" :left="info.left" :scaleX="info.scaleX"
            :scaleY="info.scaleY" :top="info.top" :width="info.width"></DisplaySticker>
          </div>
          <div class="stacks__item-bg">
            <img v-if="stack.imgSrc" :src="stack.imgSrc" alt="stack-image">
          </div>
        </div>
      </div>
    </div>
    <button class="stacks__btn" @click="methods.loadMore">Load More</button>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import * as $ from "fxdom";
import * as _ from "fxjs";
import axios from 'axios';
import StacksData from '../store/data-stacks';
import DisplaySticker from './DisplaySticker.vue';

export default {
  name: 'StackList',
  components: { 
    DisplaySticker
  },
  props: {      
  },
  setup() {
    const data = reactive({
      stacksList: null,
      pageCount: 1,
    })

    const methods = {
      loadMore: async () => {
        // data.pageCount = data.pageCount + 1;
        // const res = await axios.get(`http://localhost:3000/stacks?_page=${data.pageCount}&_limit=12`);
        // const newData = res.data;
        // newData.map((i) => {
        //   data.stacksList.push(i)
        // })
        // console.log(data.pageCount, data.stacksList, res.data);
      }
    } 

    onMounted(async () => {
      // const res = await axios.get(`http://localhost:3000/stacks?_page=${data.pageCount}&_limit=12`)
      data.stacksList = StacksData
      // console.log(data.stacksList);
    })

    return {
      data,
      methods
    }
  }
}
</script>

<style lang="scss" src="@/css/landingPage.scss"></style>