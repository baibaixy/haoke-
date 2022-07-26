import { getToken, setToken, getCity, setCity } from '@/utils'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getToken() || {},
    nowCity: getCity() || ['上海']
  },
  getters: {},
  mutations: {
    SetUser (state, payload) {
      state.user = payload
      setToken(payload)
    },
    SetNowCity (state, payload) {
      state.user = payload
      setCity(payload)
    }
  },
  actions: {},
  modules: {}
})
