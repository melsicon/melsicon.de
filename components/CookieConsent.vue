<template>
  <div class="cookie-consent">
    <h2 class="cookie-heading">Cookie Policy 🍪</h2>
    <p class="cookie-description">We use cookies to improve your user experience and for analytics purposes. By continuing to browse our site, you agree to our use of cookies.</p>
    <p class="cookie-description">Please see our 
      <nuxt-link 
        to="/datenschutz" 
        class="inline-link">Data Privacy Policy</nuxt-link> for more information and how to change your settings.</p>
    <button 
      class="btn btn-cookie btn-purple"
      @click="optIn">Got it!</button>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  methods: {
    optOut() {
      //console.log('cookie are yucky')
      this.$emit('cookie', false)
      this.$ga.disable()
    },
    optIn() {
      //console.log('cookies are yummy')
      this.$emit('cookie', true)
      document.cookie = 'cookie:accepted'
      this.$ga.enable()
    }
  }
}
</script>

<style lang="sass" scoped>

  .cookie-consent
    position: fixed
    bottom: 0
    left: 0
    max-width: 400px
    margin: 1.5em 2em
    border-radius: 2em
    background: $color-white
    box-shadow: 0px 3px 10px $box-shadow-white
    padding: 1.5em
    display: flex
    flex-wrap: wrap

  .cookie-heading
    font-size: 1.2em
    margin-bottom: .2em

  .btn-cookie
    margin: 0 auto

  .btn-optout
    color: $color-black
    opacity: .5
    margin: 0 auto
    min-width: 100px
    transition: opcaity .2s linear
    &:hover
      opacity: .7

</style>
