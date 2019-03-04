// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import course from './components/course'
import contrast from './components/contrast'
import stream from './components/stream'

Vue.config.productionTip = false
Vue.component('course', course)
Vue.component('contrast', contrast)
Vue.component('stream', stream)

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
