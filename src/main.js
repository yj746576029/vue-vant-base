import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import 'amfe-flexible'
import './icons'
import Vant from 'vant'
import 'vant/lib/index.css'
import './utils/vConsole'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
