import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Update from '@/components/Update'
import Contrast from '../components/contrast'
import Stream from '../components/stream'
import Course from '../components/course'
import Home from '../components/home'
import First from '../components/first'
import Left from '../components/left'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/update',
    //   name: 'Update',
    //   component: Update
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: "/left",
      children:[
        {
          path:'/',
          name:'first',
          component:First
        },
        {
          path:'/left',
          name:'left',
          component:Left,
          // redirect: "/main/course",
          children:[
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
            }
          ]
        }
      ]
    },
  ]
})
