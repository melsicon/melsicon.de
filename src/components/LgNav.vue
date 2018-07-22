<template>
    <div class="nav-wrapper">
        <scrollactive :offset="100"
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
  data: () => ({
    open: false
  })
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
    height: 2rem
    
  .nav-link
    color: $color-black
    font-size: 1rem
    letter-spacing: .5px
    margin-right: 5rem
    text-decoration: none
    text-transform: uppercase
    transition: transform .3s ease-in

  .is-active
    border-bottom: 1.8px solid $color-secondary


</style>
