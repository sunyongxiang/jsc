import Vue from 'vue'
import App from './App.vue'
import box from './components/box/index'
Vue.config.productionTip = false
Vue.use(box)
import './assets/css/reset.css'
new Vue({
  render: h => h(App),
}).$mount('#app')
