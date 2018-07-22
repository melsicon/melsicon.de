<template>
    <div :class="{'sm-nav-opened': open}" class="nav-wrapper sm-nav">
        <the-logo :class="{'logo-white': open}"/>
        <button v-if="!open" class="btn btn-toggle btn-open" @click="open = !open">
            {{ $t('buttons.open') }}
        </button>
        <button v-if="open" class="btn btn-toggle btn-close" @click="open = !open">
            {{ $t('buttons.close') }}
        </button>
        <transition name="fade-in">
            <scrollactive v-if="open" :offset="100" :modify-url="false" class="sm-nav-list" >
                <a v-for="(route, key) in $t('nav')" 
                   :key="route.index" 
                   :href="'#' + key" 
                   class="nav-link sm-nav-link scrollactive-item"
                   @click="open = !open"
                >{{route}}</a>
            </scrollactive>
        </transition>
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

  // SMALL NAV STYLES
  .sm-nav
    background: $color-white
    display: flex
    height: 2.3rem
    flex-wrap: wrap
    margin: auto
    overflow: hidden
    padding: .5rem .8rem
    position: fixed
    top: 0
    transition: all 1s
    width: 100%
    z-index: 9999

  .sm-nav-opened
    background: $color-secondary-darker
    height: 40vh
  
  .logo
    fill: $color-secondary-darker
    height: 1.5rem

  .logo-white
    fill: $color-white
    transition: all 1s

  .btn-toggle
    align-self: flex-start
    color: $color-black
    font-size: .8rem
    margin-left: auto
    text-transform: uppercase
    transition: all 1s
    padding-top: .3rem

  .btn-close
    color: $color-white

  .sm-nav-list
    align-items: center
    display: flex
    flex-basis: 100%
    flex-direction: column
    transition: opacity 1s .5s

  .nav-link
    color: $color-white
    margin-bottom: .5rem

  // Active menu item style
  .is-active
    border-bottom: 2px solid $color-primary
    transform: scale(1.02)

  .fade-in-enter-active
    transition: all 1s
  
  .fade-in-leave-active
    transition: all .2s
  
  .fade-in-enter, .fade-in-leave-to
    opacity: 0

</style>

<style lang="sass">

  // Global menu item style

  .nav-link
    color: $color-black
    font-size: 18px
    text-decoration: none
    text-transform: capitalize
    transition: transform .3s ease-in

</style>
