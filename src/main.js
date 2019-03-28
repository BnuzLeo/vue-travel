// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*initialized*/
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
Vue.config.productionTip = false

/*vue-awesome-swiper*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

/*fastclick*/
import fastClick from 'fastclick'
import store from './store/index'
fastClick.attach(document.body)

/*vue-video-player*/
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
