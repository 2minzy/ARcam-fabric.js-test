<template>
  <div ref="self" class="edit">
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
        <input class="i-name" type="text" placeholder="Enter your name" @input="methods.updateName">
        <div v-if="data.errorName">Please type your name</div>
      </div>
      <div class="edit__ip-box">
        <div class="edit__ip-title">Message</div>
          <div>
            <input type="checkbox" name="check" id="type-0" value="0" v-model="data.checkedType">
            <label for="type-0"> Direct Input</label>
            <input class="i-text" type="text" placeholder="Enter your message" @input="methods.updateMsg">
            <div v-if="data.errorText">Please type your text</div>
          </div>
          <div>
            <input type="checkbox" name="check" id="type-1" value="1" v-model="data.checkedType">
            <label for="type-1"> (Type1) Welcome to the SDC21</label>
          </div>
          <div>
            <input type="checkbox" name="check" id="type-2" value="2" v-model="data.checkedType">
            <label for="type-2"> (Type2) Welcome to the SDC21</label>
          </div>
          <div>
            <input type="checkbox" name="check" id="type-3" value="3" v-model="data.checkedType">
            <label for="type-3"> (Type3) Welcome to the SDC21</label>
          </div>
      </div>

      <div class="edit__ip-box--btn">
        <div class="edit__ip__btn">No</div>
        <div class="edit__ip__btn" @click="methods.onSubmit">Yes</div>
      </div>
    </div>

  </div>
</template>

<script>
import * as $ from "fxdom";
import * as _ from "fxjs";
import { reactive, onMounted, onUnmounted, computed, useStore, ref } from "@/helper/vue.js";
import { fabric } from 'fabric';

export default {
  setup(props) {
    const { state, commit, dispatch } = useStore();
    const self = ref();

    const data = reactive({
      name: computed(() => state.inputInfo.name),
      message: computed(() => state.inputInfo.message),
      checkedType: computed({
        get: () => state.inputInfo.type,
        set: (val) => {
          const box = $.qsa('.edit__ip-box', self.value)
          $.removeClass("edit__ip-box--validation", box[1])
          if (val.length > 1) {
            val = [val.pop()]
          } 
          commit('updateType', val) 
        }
      }),
      errorName: false,
      errorText: false
    })

    const methods = {
      updateName: (e) => {
        const box = $.qsa('.edit__ip-box', self.value)
        $.removeClass("edit__ip-box--validation", box[0])
        data.errorName = false;
        commit('updateName', e.target.value)
      },
      updateMsg: (e) => {
        const box = $.qsa('.edit__ip-box', self.value)
        $.removeClass("edit__ip-box--validation", box[1])
        data.errorText = false;
        commit('updateMessage', e.target.value)
      },
      checkVali: () => {
        const box = $.qsa('.edit__ip-box', self.value)
          const name = $.qs('.i-name');
          const text = $.qs('.i-text');
          if (name.value == '') {
            $.addClass("edit__ip-box--validation", box[0])
            data.errorName = true;
          }
          if (text.value == '' && data.checkedType == '0') {
            $.addClass("edit__ip-box--validation", box[1])
            data.errorText = true;
          }
          if (data.checkedType.length === 0) {
            $.addClass("edit__ip-box--validation", box[1])
          }
      },
      onSubmit: (e) => {
        methods.checkVali();
      },
    }

    onMounted(() => {
    })
    
    return {
      data,
      self,
      methods
    }
  }

}
</script>

<style lang="scss" src="@/css/editPage.scss"></style>
