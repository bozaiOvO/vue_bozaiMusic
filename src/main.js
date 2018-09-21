// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
// import FastClick from 'fastclick'
import store from './store/index'
import './common/css/index.styl'
import './common/css/font/iconfont.styl'
// FastClick.attach(document.body);
// Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// require styles
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)
 
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif',
  loading:'@/assets/loading.gif',
  attempt: 1.5
})

import axios from 'axios'
Vue.prototype.$http= axios

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
