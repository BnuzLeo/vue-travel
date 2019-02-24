import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  actions: {
    initCity(context, city) {
      context.commit('initCity', city);
    }
  },
  mutations: {
    initCity(state, city) {
      state.city = city
    }
  }
})
