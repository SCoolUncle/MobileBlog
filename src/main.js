import Vue from 'vue'
import App from './App.vue'
import router from './plugin/router'
import store from './store'
import  './assets/css/common.css'
import './plugin/axios'

Vue.config.productionTip = false

let vm = new Vue({
  router,
  store,
  data:{
    bNav:true,
    bFoot:true,
    loadingShow:false,
    homedisplay:true,
    mydisplay:false
  },
  render: h => h(App)
}).$mount('#app')
export default vm;
