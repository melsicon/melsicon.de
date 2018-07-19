import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueScrollactive from 'vue-scrollactive'
import VueMq from 'vue-mq'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(VueScrollactive)

Vue.config.lang = 'en'

Vue.use(VueMq, {
  breakpoints: {
    sm: 800,
    md: 1250,
    lg: Infinity
  }
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
