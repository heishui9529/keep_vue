import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "axios"
//引用axios插件
Vue.config.productionTip = false
axios.defaults.withCredentials=true
axios.defaults.baseURL="http://127.0.0.1:3000/"
Vue.prototype.axios=axios;
//引用element ui 插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引用视频插件
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
