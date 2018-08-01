<template>
    <div class="nav-wrapper">
        <scrollactive :offset="50"
                      class="nav lg-nav">
            <ul class="nav-list">
                <li class="nav-item">
                    <router-link :class="{'scrollactive-item': $route.name === 'home'}" class="nav-link" to="/#home">{{ $t('nav.home.home') }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link :class="{'scrollactive-item': $route.name === 'home'}" class="nav-link" to="/#services">{{ $t('nav.home.services') }}</router-link>
                </li>
                <li class="nav-item with-dropdown">
                    <router-link :class="{'scrollactive-item': $route.name === 'home'}" class="nav-link" to="/#about" aria-haspopup="true">{{ $t('nav.home.about.about') }}</router-link>
                    <ul class="list nav-dropdown" aria-label="submenu">
                        <li class="dropdown-item">
                            <router-link class="nav-link" to="/team">- {{ $t('nav.home.about.team') }}</router-link>
                        </li>
                        <li class="dropdown-item">
                            <router-link class="nav-link" to="/jobs#jobs">- {{ $t('nav.home.about.jobs') }}</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a :class="{'scrollactive-item': $route.name === 'home'}" href="#contact" class="nav-link">{{$t('nav.home.contact')}}</a>
                </li>
            </ul>
            <div class="logo-wrapper"><the-logo/></div>
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
    max-width: $width-full
    margin: auto
    padding: .5rem .8rem
    align-items: center
    @media only screen and (min-width: 1480px)
      max-width: 1400px
    @media only screen and (max-width: 1200px)
      max-width: 1000px
    @media only screen and (max-width: 1000px)
      max-width: 850px

  .logo
    fill: $color-primary
    margin-left: auto

  .nav-list
    display: flex
    width: 100%
  
  .nav-item
    margin-right: 5%
    padding: 0 .5em
  
  .nav-dropdown
    background: $color-white
    display: hidden
    transition: all .3s ease-in-out
    padding: .5em
    position: absolute
    opacity: 0
    visibility: hidden

  .nav-list .nav-item:hover > .nav-dropdown, .nav-list .nav-item:focus-within > .nav-dropdown, .nav-list .nav-item .nav-dropdown:hover
    display: block
    opacity: 1
    visibility: visible
  
  .nav-dropdown .dropdown-item:hover .nav-link
    border-bottom: 1px solid $color-black
  
  .nav-dropdown li
    margin-bottom: .5em

  .nav-link
    color: $color-black
    font-size: 1rem
    letter-spacing: .5px
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
