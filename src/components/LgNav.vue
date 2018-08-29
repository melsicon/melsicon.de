<template>
    <div class="nav-wrapper">
        <scrollactive
            :offset="100"
            class="nav lg-nav">
            <ul
                class="nav-list"
                role="menu">
                <li
                    class="nav-item"
                    role="none">
                    <router-link
                        class="nav-link scrollactive-item"
                        to="/#home"
                        role="menuitem">{{ $t('nav.home') }}</router-link>
                </li>
                <li
                    class="nav-item"
                    role="none">
                    <router-link
                        class="nav-link scrollactive-item"
                        to="/#services"
                        role="menuitem">{{ $t('nav.services') }}</router-link>
                </li>
                <li class="nav-item with-dropdown">
                    <router-link
                        class="nav-link scrollactive-item"
                        to="/#about"
                        role="menuitem"
                        aria-haspopup="true">{{ $t('nav.about') }}</router-link>
                </li>
                <li
                    class="nav-item"
                    role="none">
                    <a
                        href="#careers"
                        class="nav-link scrollactive-item"
                        role="menuitem">{{ $t('nav.careers') }}</a>
                </li>
                <li
                    class="nav-item"
                    role="none">
                    <a
                        href="#contact"
                        class="nav-link scrollactive-item"
                        role="menuitem">{{ $t('nav.contact') }}</a>
                </li>
            </ul>
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
    position: fixed
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
    max-width: $normal-width
    margin: auto
    padding: .5rem 2em
    align-items: center
    @include x-large
      max-width: $large-width

  .logo
    fill: $color-primary
    margin-left: auto

  .nav-list
    display: flex
    width: 100%

  .nav-item
    margin-right: 5%
    padding-right: .5em

  .scrollactive-item
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
    border-bottom: 1px solid $color-black


</style>
