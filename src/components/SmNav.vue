<template>
    <div class="nav-wrapper sm-nav">
        <the-logo :class="{'logo-white': open}"/>
        <div class="btn-toggle-wrapper" @click="open = !open">
            <button v-if="!open" class="btn btn-toggle btn-open">
                {{ $t('buttons.open') }}
            </button>
            <transition name="circle">
                <div v-if="open" class="circle"/>
            </transition>
            <button v-if="open" class="btn btn-toggle btn-close" >
                {{ $t('buttons.close') }}
            </button>
            <div :class="{close: open}" class="icon-toggle">
                <span class="line"/>
                <span class="line"/>
            </div>
        </div>
        <transition name="fade-in">
            <scrollactive v-if="open" :offset="50" class="sm-nav-list" >
                <ul class="nav-list">
                    <li class="nav-item">
                        <router-link :class="{'scrollactive-item': $route.name === 'home'}" class="nav-link" to="/#home" @click.native="open = !open">{{ $t('nav.home.home') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{'scrollactive-item': $route.name === 'home'}" class="nav-link" to="/#services" @click.native="open = !open">{{ $t('nav.home.services') }}</router-link>
                    </li>
                    <li class="nav-item with-dropdown">
                        <router-link :class="{'scrollactive-item': $route.name === 'home'}" class="nav-link" to="/#about" aria-haspopup="true" @click.native="open = !open">{{ $t('nav.home.about.about') }}</router-link>
                        <ul class="list nav-dropdown" aria-label="submenu">
                            <li class="dropdown-item">
                                <router-link class="nav-link" to="/team" @click.native="open = !open">- {{ $t('nav.home.about.team') }}</router-link>
                            </li>
                            <li class="dropdown-item">
                                <router-link class="nav-link" to="/jobs" @click.native="open = !open">- {{ $t('nav.home.about.jobs') }}</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{'scrollactive-item': $route.name === 'home'}" class="nav-link" to="/#contact" @click.native="open = !open">{{ $t('nav.home.contact') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <button class="btn-lang nav-link" @click="toggleLocale">
                            {{$t('buttons.locale')}}
                        </button>
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

  // SMALL NAV STYLES
  .sm-nav
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

  .nav-dropdown .dropdown-item:hover .nav-link
    border-bottom: .2em solid $color-white

  .nav-dropdown li
    margin-bottom: .5em

  .btn-toggle-wrapper
    position: relative
    align-items: center
    align-self: flex-start
    display: flex
    margin-left: auto
    min-width: 4em
    cursor: pointer
    height: 1.5em

  .btn-toggle
    align-self: center
    color: $color-secondary
    font-size: 1em
    font-weight: 600
    //text-transform: uppercase
    transition: all 1s
    margin-left: auto

  .btn-close
    color: $color-white

  // OPEN/CLOSE ICON

  .icon-toggle
    position: relative
    height: 8px
    margin-left: .5em
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
    padding-top: 1.5em
    transition: opacity 1s .5s

  .nav-link
    color: $color-white
    font-size: 1.2em
    @media screen and (max-width: 400px)
      font-size: 1.1em

  // Active menu item style
  .is-active
    border-bottom: 1.8px solid $color-white

  .fade-in-enter-active
    transition: all 1s .5s

  .fade-in-leave-active
    transition: all .2s

  .fade-in-enter, .fade-in-leave-to
    opacity: 0

  // Circle Transition
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

  .circle-enter-active, .circle-leave-active
    transition: all 1s

  .circle-enter, .circle-leave-to
    transform: translate3d(4%,-2%,0) scale(0.005)


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
