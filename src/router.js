import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profiles from './views/Profiles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: Profiles
    }
  ]
})
