// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

//全局引入css文件
import './assets/style/reset.css'
//轮播css
import 'swiper/dist/css/swiper.css'

//引入vuex文件
import store from './store/store.js'

//使用轮播 
Vue.use(VueAwesomeSwiper)

//引入弹窗组件
import popupToast from './popup/popup.js'

Vue.use(popupToast)

//全局使用拦截器
import './axios';
import Axios from 'axios';
Vue.prototype.$http = Axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
