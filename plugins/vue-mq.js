import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    xs: 600,
    md: 770,
    lg: Infinity
  }
})
