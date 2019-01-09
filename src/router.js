import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
// Pages
const Home = () => import('@/views/Home')
const Imprint = () => import('@/views/Imprint')
const DataPrivacy = () => import('@/views/DataPrivacy')
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
      path: '/imprint',
      name: 'imprint',
      component: Imprint
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: DataPrivacy
    },
    {
      path: '*',
      name: 'error404',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
