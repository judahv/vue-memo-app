import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: [
      // { id: 0, memo: "ご飯食べる" }
    ],
    id: 0
  },
  getters: {
    list(state) {
      return state.list;
    }
  },
  mutations: {
    setMemo(state, payload) {
      state.id++;
      state.list.push({ id: state.id, memo: payload.memo });
    }
  },
  actions: {
    addMemo({ commit }, memo) {
      commit("setMemo", { memo });
    }
  }
});
export default store;
