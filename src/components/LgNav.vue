<template>
    <div class="nav-wrapper">
        <scrollactive v-if="!sidebar" 
                      :offset="100"
                      :modify-url="false"
                      class="nav lg-nav">
            <a v-for="(route, key) in $t('nav')" 
               :key="route.index" 
               :href="'#' + key" 
               class="nav-link scrollactive-item"
            >{{route}}</a>
            <the-logo/>
        </scrollactive>
    </div>
</template>

<script>
import TheLogo from '@/components/graphics/TheLogo'
export default {
  name: 'Navigation',
  components: {
    TheLogo
  },
  props: {
    open: {
      type: Boolean,
      required: true,
      default: false
    },
    sidebar: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>

  // LARGE NAV STYLES

  .nav-wrapper
    position: sticky
    top: 0
    display: flex
    width: 100%
    background: white
    z-index: 9999
    margin: auto

  .lg-nav
    display: flex
    position: relative
    width: 100%
    max-width: 1200px
    margin: auto
    padding: .5rem .8rem
    align-items: center
    @media only screen and (min-width: 1480px)
      max-width: 1400px

  .logo
    fill: $color-primary
    margin-left: auto
    max-height: 2rem
    
  .nav-link
    color: $color-black
    font-size: 1rem
    text-decoration: none
    margin-right: 5rem
    text-transform: capitalize
    transition: transform .3s ease-in

  .is-active
    transform: translate3d(0, -1px, 0)
    border-bottom: 1px solid $color-black


</style>
