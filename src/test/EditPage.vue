<template>
  <div class="edit">
    <div class="edit__preview">
      <div class="card">
        <div class="card__header">
          <figure class="card__figure">
            <img src="@/assets/barcelona.jpg" alt="" class="card__image">
          </figure>
        </div>

        <div class="card__body">
          <div class="card__desc">
            <div class="card__desc-left">
              <div class="card-desc--item">{{ data.name ? data.name : 'SDC Developer' }}</div>
              <div class="card-desc--item">{{ data.message ? data.message : 'Welcome to the SDC21' }}</div>
            </div>

            <div class="card-desc-right">
              <img src="@/assets/qr-temp.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="edit__ip">
      <div class="edit__ip-box">
        <div class="edit__ip-title">Name</div>
        <input type="text" placeholder="Enter your name" @input="methods.updateName">
      </div>
      <div class="edit__ip-box">
        <div class="edit__ip-title">Message</div>
        <input type="text" placeholder="Enter your message" @input="methods.updateMsg">
      </div>

      <div class="edit__ip-box--btn">
        <div class="edit__ip__btn">No</div>
        <div class="edit__ip__btn">Yes</div>
      </div>
    </div>


  </div>
</template>

<script>
import * as $ from "fxdom";
import * as _ from "fxjs";
import { reactive, onMounted, onUnmounted, computed, useStore } from "@/helper/vue.js";
import { fabric } from 'fabric';

export default {
  setup(props) {
    const { state, commit, dispatch } = useStore();

    const data = reactive({
      name: computed(() => state.inputInfo.name),
      message: computed(() => state.inputInfo.message),
    })

    const methods = {
      updateName: (e) => {
        commit('updateName', e.target.value)
      },
      updateMsg: (e) => {
        commit('updateMessage', e.target.value)
      }
    }

    onMounted(() => {
    })
    
    return {
      data,
      methods
    }
  }

}
</script>

<style lang="scss" src="@/css/editPage.scss"></style>
