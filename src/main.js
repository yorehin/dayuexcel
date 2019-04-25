// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import course from './components/course'
import home from './components/home'
import first from './components/first'
import contrast from './components/contrast'
import stream from './components/stream'
import Element from 'element-ui'

Vue.config.productionTip = false
Vue.component('first', first)
Vue.component('home', home)
Vue.component('course', course)
Vue.component('contrast', contrast)
Vue.component('stream', stream)
Vue.use (Element)

// for auto update
import { checkUpdate } from '@/utils/update.js'


checkUpdate()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
