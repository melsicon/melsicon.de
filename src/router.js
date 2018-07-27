import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
import Home from './views/Home'
import Team from './views/Team'

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
      component: Team,
      meta: {
        scrollToTop: true
      }
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
