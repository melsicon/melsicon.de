import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
// Pages
import Home from '@/views/Home'
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
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
