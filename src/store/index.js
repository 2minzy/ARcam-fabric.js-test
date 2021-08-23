import * as _ from "fxjs";
import * as $ from "fxdom";
import { createStore } from 'vuex'

export const store = createStore({
  state: {
    stickers: [],
  },
  mutations: {
    init(state, items) {
      state.stickers = items.stickers;
    },
  },
  actions: {
    async init({ commit }, payload) {
      const stickers = await import('../test/stickers.js');
      // console.log("stickers ------store", stickers.default);
      commit('init', {'stickers': stickers.default.stickers});
    },
    // getSelectedItem({ commit, rootState }, payload) {
    //   commit('getSelectedItem', {'dataName': payload.dataName, 'currId': payload.currId, 'contents': payload.contents, 'selectedItemIndex': payload.selectedItemIndex, 'lang': rootState.isLangKr ? 'KR' : 'ENG' });
    // },
  },
  modules: {
  }
})
