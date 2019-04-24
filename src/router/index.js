import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Update from '@/components/Update'
import Contrast from '../components/contrast'
import Stream from '../components/stream'
import Course from '../components/course'
import Home from '../components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/',
      name: 'Course',
      component: Course
    },
    {
      path: '/contrast',
      name: 'contrast',
      component: Contrast
    },
    {
      path: '/stream',
      name: 'stream',
      component: Stream
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
