import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueScrollactive from 'vue-scrollactive'
import VueMq from 'vue-mq'
import i18n from './i18n'
// Icons
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faXing,
  faGithub,
  faLinkedin,
  faMeetup
} from '@fortawesome/free-brands-svg-icons'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

library.add(faTwitter, faGithub, faXing, faLinkedin, faMeetup, faAngleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueScrollactive)

Vue.config.lang = 'en'

Vue.use(VueMq, {
  breakpoints: {
    xs: 600,
    md: 770,
    lg: Infinity
  }
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
