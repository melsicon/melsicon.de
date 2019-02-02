<template>
  <div
    class="cookie-consent"
    tabindex="1"
    aria-labelledby="cookie-heading">
    <h2
      id="cookie-heading"
      class="cookie-heading">{{ $t('cookie.heading') }}</h2>
    <p class="cookie-description">{{ $t('cookie.desc[0]') }}</p>
    <i18n
      class="cookie-description"
      path="cookie.desc[1]"
      tag="p">
      <router-link
        to="/datenschutz"
        class="inline-link"
        place="link">{{ $t('cookie.link') }}</router-link>
    </i18n>
    <button
      tabindex="1"
      class="btn btn-optin btn-purple"
      @click="optIn">{{ $t('cookie.accept') }}</button>
    <button
      tabindex="1"
      class="btn btn-cookie btn-optout"
      @click="optOut">{{ $t('cookie.decline') }}</button>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  methods: {
    optOut() {
      this.$emit('updateConsent', false)
    },
    optIn() {
      this.$emit('updateConsent', true)
    }
  }
}
</script>

<style lang="sass" scoped>

  .cookie-consent
    position: sticky
    bottom: 1em
    left: 0
    max-width: 380px
    margin: 0 2em
    border-radius: 2em
    background: $color-white
    box-shadow: 0px 3px 15px 2px $box-shadow-white
    padding: 1.2em 1em 1.2em
    display: flex
    flex-direction: column
    flex-wrap: wrap
    &:focus
      outline: 0
      box-shadow: 0px 3px 15px 2px rgba(0,0,0,0.15)
    @include x-small
      margin: 0 auto
      bottom: .5em

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
