<template>
  <div id="app">
    <sm-nav v-if="$mq === 'sm' || $mq === 'md'"/>
    <lg-nav v-if="$mq === 'lg'"/>
    <nuxt/>
    <transition name="page">
      <cookie-consent
        v-if="cookieOpen"
        ref="modal"
        @updateConsent="updateConsent"/>
    </transition>
    <the-footer/>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import CookieConsent from '@/components/CookieConsent'
const SmNav = () => import('@/components/SmNav')
const LgNav = () => import('@/components/LgNav')
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheFooter,
    LgNav,
    SmNav,
    CookieConsent
  },
  data: () => ({
    cookieOpen: false,
    cookieStatus: undefined
  }),
  head() {
    return {
      title: 'melsicon GmbH'
    }
  },
  mounted() {
    // Disable tracking until consent is given
    this.setFocus()
    // Cookies.remove('melsicon_cookie')
    this.setTracking(false)
    this.cookieStatus = Cookies.getJSON('melsicon_cookie')
    this.checkConsent()
  },
  methods: {
    setFocus() {
      setTimeout(() => {
        this.$refs.modal.$el.focus()
      }, 150)
    },
    checkConsent() {
      if (this.cookieStatus === undefined) this.cookieOpen = true // If no melsicon_cookie, show the cookie banner
      if (this.cookieStatus) this.setTracking(true) // If cookie is true, start tracking
    },
    updateConsent(consent) {
      this.setCookie(consent) // Update consent according to user response
      this.cookieOpen = false // Hide banner
      this.setTracking(consent) // Set tracking based on response
    },
    setCookie(consent) {
      Cookies.set('melsicon_cookie', consent, { expires: 90 }) // Cookie to track consent
    },
    setTracking(consent) {
      window['ga-disable-UA-59119788-4'] = !consent // Set consent
      window.ga('send', 'pageview') // Reload google analytics with new setting
    }
  }
}
</script>

<style lang="sass">

  /* GLOBAL/RESET STYLES */

  html
    background: $color-primary-darker

  body
    position: relative
    background: $color-white
    font-family: $font-body
    font-size: 20px
    line-height: 1.4
    color: $color-black
    text-size-adjust: none
    @include x-large
      font-size: 22px
    @include x-small
      font-size: 18px

  a, a:visited
    text-decoration: none
    color: $color-primary
    font-weight: semi-bold
    transition: transform .5s ease-in-out
    outline: 0
    border-bottom: 2px solid transparent
    align-self: flex-start
    &:hover, &:focus
      border-bottom: 2px solid $color-secondary

  ul
    list-style-type: none

  *, * + *
    margin: 0
    padding: 0
    box-sizing: border-box

  button
    background: 0
    border: 0
    box-shadow: 0
    font-size: 1em
    font-family: $font-body
    outline: 0
    &:focus
      border: 2px solid $color-secondary

  .btn-purple
    color: $color-white
    background: $color-primary
    font-size: 1em
    font-weight: bold
    padding: .5em 2rem
    border-radius: 2em
    min-width: 150px
    margin: .5em auto
    box-shadow: 0px 3px 10px $box-shadow-purple
    transition: all .1s linear
    &:active
      transform: translateY(1px)
      box-shadow: 0px 2px 5px $box-shadow-purple, inset 0px 0px 5px $box-shadow-purple

  // MAIN WRAPPER
  .wrapper
    position: relative
    max-width: $normal-width
    margin: auto
    min-height: 100vh
    @include x-large
      max-width: $large-width

  // MAIN SECTIONS
  .section
    display: flex
    flex-wrap: wrap
    padding: 4em 1em 1em
    margin: 0 auto
    @include small
      padding-top: 3em

  // HEADINGS
  .heading
    color: $color-black
    font-size: 2.4em
    font-weight: 300
    margin-bottom: .2em
    hyphens: auto
    @include small
      font-size: 2.1em

  .sub-heading
    font-weight: 600
    margin-top: 1em
    margin-bottom: .2em
    hyphens: auto

  // CONTENT
  .article, .illustration
    flex-basis: 50%
    @include small
      flex-basis: 100%

  p:not(:last-child)
    margin-bottom: 1em

  // ILLUSTRATIONS
  .illustration
    padding: 0 4em
    align-self: center
    @include small
      padding: 0 1em

  .illustration-medium
    float: right
    shape-outside: circle(50%)
    svg
      height: 300px

  .illustration svg
    width: 100%
    max-height: 600px

  // LINK STYLES
  .inline-link
    color: $color-primary
    font-weight: 600
    text-decoration: none
    cursor: pointer

  img[lazy=loading]
    opacity: 0
    height: 500px

  img[lazy=loading].profile-img
    height: 9em

  img[lazy=loaded]
    opacity: 1
    transition: all .5s ease-in

  .page-enter-active, .page-leave-active
    transition: 0.5s

  .page-enter, .page-leave-active
    opacity: 0

</style>
