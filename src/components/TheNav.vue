<template>
    <div class="nav-wrapper">
        <scrollactive :offset="100" 
                      :modify-url="false"
                      class="nav">
            <a v-for="(route, key) in $t('nav')" 
               :key="route.index" 
               :href="'#' + key" 
               class="nav-link scrollactive-item"
            >{{route}}</a>
        </scrollactive>
        <div class="logo">
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
  }
}
</script>

<style lang="sass" scoped>

  .nav-wrapper
    display: flex
    align-items: center
    position: sticky
    top: 0
    min-height: 3rem
    max-width: 1200px
    margin: 0 auto
    background: white
    z-index: 99
    display: flex
    justify-content: space-between
    padding: .5rem .8rem
    @media only screen and (min-width: 1480px)
      max-width: 1400px
  
  .nav
    display: flex
    flex-basis: 50%
    justify-content: space-between
</style>

<style lang="sass">
  .nav-link
    color: $color-body
    font-size: 18px
    text-decoration: none
    text-transform: capitalize
    transition: transform .3s ease-in-out
  
  .is-active
    border-bottom: 1.5px solid $color-primary
    transform: scale(1.05)
</style>
