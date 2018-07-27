<template>
    <div class="nav-wrapper">
        <scrollactive :offset="50"
                      :modify-url="false"
                      class="nav lg-nav">
            <a v-for="(route, key) in $t('nav.home')" 
               v-if="$route.name === 'home'" 
               :key="route.index" 
               :href="'#' + key"
               class="nav-link scrollactive-item"
            >{{route}}</a>

            <router-link v-if="$route.name === 'team'"
                         to="/"
                         class="nav-link">
                {{ $t('nav.home.home') }}
            </router-link>
            <a v-for="(route, key) in $t('nav.team')" 
               v-if="$route.name === 'team'" 
               :key="route.index" 
               :href="'#' + key"
               class="nav-link scrollactive-item"
            >{{route}}</a>

            <div class="logo"><the-logo/></div>
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
    @media only screen and (max-width: 1200px)
      max-width: 1000px
    @media only screen and (max-width: 1000px)
      max-width: 850px
    @media screen and (max-width: 900px)
      max-width: 750px

  .logo
    fill: $color-primary
    margin-left: auto
    height: 2rem
    
  .nav-link
    color: $color-black
    font-size: 1rem
    letter-spacing: .5px
    margin-right: 5%
    text-decoration: none
    text-transform: uppercase
    transition: transform .3s ease-in
    border-bottom: 1px solid $color-white
    transition: all .3s ease-in
    @media only screen and (max-width: 1000px)
      //margin-right: 2rem

  .is-active
    border-bottom: 1px solid $color-black


</style>
