<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <the-logo class="logo-white footer-logo"/>
    </div>
  </footer>
</template>

<script>
import TheLogo from './TheLogo'
export default {
  name: 'Footer',
  components: {
    TheLogo
  }
}
</script>

<style lang="sass">

  .footer
    min-height: 15rem
    background: #4B4BA9
    color: #fff
    font-size: 17px
    padding: 1em 0

  .footer-wrapper
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    max-width: 800px
    margin: auto
    height: 100%
    padding: 0 2em

  .footer-logo
    flex-basis: 100%
    margin-bottom: 1em

    svg
      min-height: 2em

  .footer-content
    flex-basis: calc(100% / 4)

  .footer-heading
    font-size: 0.9em
    margin-top: .5em
    text-transform: uppercase
    letter-spacing: .5px

  .address
    font-style: normal
    margin-bottom: 1em

  .footer-social-item
    margin-bottom: .5em
    color: #fff
    font-size: 1em
    text-transform: capitalize

  .footer-social-link, .footer-social-link:visited
    color: #fff
    display: flex
    align-items: center

    .footer-social-icon
      color: #fff
      margin-right: .4em

  .footer-link, .footer-link:visited
    color: #fff
    display: block

</style>
