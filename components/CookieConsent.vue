<template>
  <div class="cookie-consent">
    <h2 class="cookie-heading">Cookie Policy 🍪</h2>
    <p class="cookie-description">We use cookies to improve your user experience and for analytics purposes.</p>
    <p class="cookie-description">Please see our
      <nuxt-link
        to="/datenschutz"
        class="inline-link">Data Privacy Policy</nuxt-link> for more information and how to update your settings.</p>
    <button
      class="btn btn-optin btn-purple"
      @click="optIn">Accept Cookies!</button>
    <button
      class="btn btn-cookie btn-optout"
      @click="optOut">No, thank you.</button>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  methods: {
    optOut() {
      this.$emit('cookieConsent', false)
    },
    optIn() {
      this.$emit('cookieConsent', true)
    }
  }
}
</script>

<style lang="sass" scoped>

  .cookie-consent
    position: fixed
    bottom: 0
    left: 0
    max-width: 350px
    margin: 1.5em 2em
    border-radius: 2em
    background: $color-white
    box-shadow: 0px 3px 10px $box-shadow-white
    padding: 1.5em 1em 1em
    display: flex
    flex-direction: column
    flex-wrap: wrap

  .cookie-description
    margin-bottom: .5em

  .cookie-heading
    font-size: 1.2em
    margin-bottom: .2em

  .btn-optin
    margin-top: .5em

  .btn-optout
    color: $color-black
    opacity: .7
    font-size: .8em
    align-self: center
    min-width: 100px
    transition: opcaity .2s linear
    &:hover
      opacity: .9

</style>
