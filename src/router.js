import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
// Pages
import Home from '@/views/Home'
const Team = () => import('@/views/Team')
const Jobs = () => import('@/views/Jobs')
const NotFound = () => import('@/views/NotFound')

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
