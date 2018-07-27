<template>
    <div :class="{'sm-nav-opened': open}" class="nav-wrapper sm-nav">
        <the-logo :class="{'logo-white': open}"/>
        <div class="btn-toggle-wrapper" @click="open = !open">
            <button v-if="!open" class="btn btn-toggle btn-open">
                {{ $t('buttons.open') }}
            </button>
            <button v-if="open" class="btn btn-toggle btn-close" >
                {{ $t('buttons.close') }}
            </button>
            <div :class="{close: open}" class="icon-toggle">
                <span class="line"/>
                <span class="line"/>
            </div>
        </div>
        <transition name="fade-in">
            <scrollactive v-if="open" :offset="50" :modify-url="false" class="sm-nav-list" >
                <a v-for="(route, key) in $t('nav.home')" 
                   v-if="$route.name === 'home'" 
                   :key="route.index" 
                   :href="'#' + key"
                   class="nav-link sm-nav-link scrollactive-item"
                   @click="open = !open"
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
    height: 2.5rem
    flex-wrap: wrap
    margin: auto
    overflow: hidden
    padding: .5rem .8rem
    position: fixed
    top: 0
    transition: all .6s
    width: 100%
    z-index: 9999

  .sm-nav-opened
    background: $color-secondary-darker
    height: 50vh
  
  .logo
    fill: $color-primary
    height: 1.5rem

  .logo-white
    fill: $color-white
    transition: all 1s
  
  .btn-toggle-wrapper
    align-items: center
    align-self: flex-start
    display: flex
    margin-left: auto
    min-width: 4rem
    cursor: pointer
    height: 1.5rem

  .btn-toggle
    align-self: center
    color: $color-secondary
    font-size: 1rem
    font-weight: 600
    text-transform: uppercase
    transition: all 1s
    margin-left: auto

  .btn-close
    color: $color-white
  
  .icon-toggle
    position: relative
    height: 8px
    margin-left: .5rem
    width: 15px

  .line
    display: block;
    height: 1.5px;
    background: $color-secondary
    width: 100%
    position: absolute
    left: 0
    right: 0
    transition: all .25s cubic-bezier(.645, .045, .355, 1)
    &:first-child
      top: 0
    &:last-child
      bottom: 0

  .close .line
    background: $color-white
    top: 3px
    &:first-child
      transform: rotate(45deg)
    &:last-child
      transform: rotate(-45deg)

  .sm-nav-list
    align-items: center
    display: flex
    flex-basis: 100%
    flex-direction: column
    transition: opacity 1s .5s

  .nav-link
    color: $color-white
    font-size: 1.5rem
    margin-bottom: .5rem

  // Active menu item style
  .is-active
    border-bottom: 1.8px solid $color-white

  .fade-in-enter-active
    transition: all 1s .5s
  
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
