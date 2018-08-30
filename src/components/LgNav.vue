<template>
    <div class="nav">
        <div class="lg-nav-wrapper">
            <scrollactive
                :offset="50"
                :modify-url="false"
                class="lg-nav"
                role="navigation">
                <a
                    v-for="(nav, key) in $t('nav')"
                    :class="{'scrollactive-item': $route.name === 'home'}"
                    :href="'#' + key"
                    :key="nav.index"
                    class="nav-link"
                    role="menuitem">{{ nav }}</a>
            </scrollactive>
            <the-logo/>
        </div>
    </div>
</template>

<script>
import TheLogo from '@/components/graphics/TheLogo'
export default {
  name: 'Navigation',
  components: {
    TheLogo
  },
  data: () => ({
    open: false
  }),
  methods: {
    returnHome() {
      if (this.$route.name !== 'home') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  // LARGE NAV STYLES

  .nav
    position: fixed
    top: 0
    display: flex
    width: 100%
    background: white
    z-index: 9999
    margin: 0 auto

  .lg-nav-wrapper
    display: flex
    position: relative
    width: 100%
    max-width: $normal-width
    margin: auto
    padding: .5rem 2em
    align-items: center
    @include x-large
      max-width: $large-width

  .lg-nav
    display: flex
    width: 100%

  .logo
    fill: $color-primary
    margin-left: auto

  .nav-list
    display: flex
    width: 100%

  .nav-link
    margin-right: 5%
    padding-right: .5em
    color: $color-black
    font-size: .9em
    letter-spacing: .5px
    text-decoration: none
    text-transform: uppercase
    transition: transform .3s ease-in
    border-bottom: 1px solid $color-white
    transition: all .3s ease-in
    @media only screen and (max-width: 1000px)
      //margin-right: 2rem

  .is-active
    color: $color-primary
    font-weight: 600


</style>
