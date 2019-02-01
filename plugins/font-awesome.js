import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faXing,
  faGithub,
  faLinkedin,
  faMeetup
} from '@fortawesome/free-brands-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faGithub, faXing, faLinkedin, faMeetup, faAngleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
