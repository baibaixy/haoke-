import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.min.js'
import './assets/icons/iconfont.css'

Vue.use(Lazyload)
Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
