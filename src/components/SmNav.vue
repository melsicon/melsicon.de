<template>
    <div class="nav-wrapper sm-nav-wrapper">
        <the-logo :class="{'logo-white': open}"/>
        <!-- NAV BACKGROUND CIRCLE -->
        <transition name="circle">
            <div
                v-if="open"
                class="circle"/>
        </transition>
        <!-- OPEN/CLOSE BUTTON FOR SMALL NAV -->
        <button
            id="menubutton"
            :class="open ? 'btn-close' : 'btn-open'"
            class="btn btn-toggle"
            aria-haspopup="true"
            aria-controls="menu"
            @click="open = !open">
            <span v-if="!open">{{ $t('buttons.open') }}</span>
            <span v-else>{{ $t('buttons.close') }}</span>
            <div
                :class="{close: open}"
                class="icon-toggle">
                <span class="line"/>
                <span class="line"/>
            </div>
        </button>
        <!-- NAV MENU WHEN MENU IS OPENED -->
        <transition name="fade-in">
            <scrollactive
                v-if="open"
                :offset="50"
                class="sm-nav" >
                <ul
                    id="menu"
                    class="nav-list"
                    role="menu"
                    aria-labelledby="menubutton">
                    <li
                        class="nav-item"
                        role="none">
                        <router-link
                            class="nav-link scrollactive-item"
                            to="/#home"
                            role="menuitem"
                            @click.native="open = !open">{{ $t('nav.home') }}</router-link>
                    </li>

                    <li
                        class="nav-item"
                        role="none">
                        <router-link
                            class="nav-link scrollactive-item"
                            to="/#services"
                            role="menuitem"
                            @click.native="open = !open">{{ $t('nav.services') }}</router-link>
                    </li>
                    <li
                        class="nav-item with-dropdown"
                        role="none">
                        <router-link
                            class="nav-link scrollactive-item"
                            to="/#about"
                            role="menuitem"
                            @click.native="open = !open">{{ $t('nav.about') }}</router-link>
                    </li>
                    <li
                        class="nav-item"
                        role="none">
                        <router-link
                            class="nav-link scrollactive-item"
                            to="/#contact"
                            role="menuitem"
                            @click.native="open = !open">{{ $t('nav.contact') }}</router-link>
                    </li>
                </ul>
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
  }),
  methods: {
    toggleLocale() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'de'
      } else {
        this.$i18n.locale = 'en'
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  // SMALL NAV WRAPPER
  .sm-nav-wrapper
    background: $color-white
    display: flex
    height: 2.5em
    flex-wrap: wrap
    margin: auto
    padding: .5em .8em
    position: fixed
    top: 0
    transition: all .6s
    width: 100%
    z-index: 9999

  .nav-item
    font-size: 1.2em
    margin-bottom: .5em

  .nav-dropdown
    padding: .5em .5em 0

  .nav-dropdown .dropdown-item:hover .nav-link scrollactive-item
    border-bottom: .2em solid $color-white

  .nav-dropdown li
    margin-bottom: .5em

  // OPEN/CLOSE BUTTON
  .btn-toggle
    position: relative
    display: flex
    align-items: center
    color: $color-secondary
    font-size: 1em
    font-weight: 600
    text-transform: uppercase
    transition: all 1s
    margin-left: auto
    min-height: 1.5em

  .btn-close
    color: $color-white

  .icon-toggle
    position: relative
    margin-left: .5em
    height: 8px
    width: 1em

  .line
    display: block;
    height: .1em;
    background: $color-secondary
    width: 80%
    position: absolute
    left: 0
    right: 0
    transition: all .25s cubic-bezier(.645, .045, .355, 1)
    &:first-child
      top: 0
    &:last-child
      bottom: 0

  .close .line
    position: absolute
    background: $color-white
    top: 3px
    &:first-child
      transform: rotate(45deg)
    &:last-child
      transform: rotate(-45deg)

  // SMALL NAV
  .sm-nav
    align-items: center
    display: flex
    flex-basis: 100%
    flex-direction: column
    padding-top: 1.5em
    transition: opacity 1s .5s

  .nav-link scrollactive-item
    color: $color-white
    font-size: 1.2em
    @media screen and (max-width: 400px)
      font-size: 1.1em

  // ACTIVE NAV ITEM
  .is-active
    border-bottom: 1.8px solid $color-white

  .fade-in-enter-active
    transition: all 1s .5s

  .fade-in-leave-active
    transition: all .2s

  .fade-in-enter, .fade-in-leave-to
    opacity: 0

  // CIRCLE BACKGROUND
  .circle
    position: absolute
    top: 0
    right: 0
    height: 160vw
    width: 160vw
    background: $color-secondary-darker
    border-radius: 50%
    transform: translate3d(20%,-40%,0)
    z-index: -1
    transform-origin: 100% 0%
    @media screen and (max-width: 768px)
      transform: translate3d(20%,-55%,0)
    @media screen and (max-width: 400px)
      transform: translate3d(20%,-40%,0)
    @media screen and (max-width: 320px)
      transform: translate3d(20%,-30%,0)

  .circle-enter-active, .circle-leave-active
    transition: all 1s

  .circle-enter, .circle-leave-to
    transform: translate3d(4%,-2%,0) scale(0.005)


</style>

<style lang="sass">

  // GLOBAL MENU ITEMS
  .nav-link scrollactive-item
    color: $color-black
    font-size: 1em
    text-decoration: none
    text-transform: capitalize
    transition: transform .3s ease-in

</style>
