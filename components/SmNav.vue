<template>
  <div class="nav">
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
        id="menu"
        :offset="30"
        :duration="duration"
        :modify-url="false"
        class="sm-nav">
        <template v-if="$nuxt.$route.name === 'index'">
          <a
            v-for="(nav, key) in $t('nav')"
            :key="nav.index"
            :href="'/#' + key"
            class="nav-link scrollactive-item"
            @click="toggleOpen">{{ nav }}</a>
        </template>
        <template v-if="$nuxt.$route.name !== 'index'">
          <nuxt-link
            v-for="(nav, key) in $t('nav')"
            :key="nav.index"
            :to="'/#' + key"
            class="nav-link"
            @click="toggleOpen">{{ nav }}</nuxt-link>
        </template>
      </scrollactive>
    </transition>
  </div>
</template>

<script>
import TheLogo from '@/components/TheLogo'
export default {
  name: 'Navigation',
  components: {
    TheLogo
  },
  data: () => ({
    open: false,
    // How long scrolling to section takes, and after how long the open changes to false
    duration: 400
  }),
  methods: {
    toggleOpen() {
      setTimeout(() => {
        this.open = !this.open
      }, this.duration)
    }
  }
}
</script>

<style lang="sass" scoped>

  .nav
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

  .sm-nav
    display: flex
    flex-direction: column
    flex-basis: 100%
    text-align: center
    padding-top: 1.5em
    transition: opacity 1s .5s

  .nav-link
    display: block
    font-size: 1.2em
    color: $color-white
    margin-bottom: 1em

  // OPEN/CLOSE BUTTON
  .btn-toggle
    position: relative
    display: flex
    align-items: center
    color: $color-primary
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
    background: $color-primary
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

  // CIRCLE BACKGROUND
  .circle
    position: absolute
    top: 0
    right: 0
    height: 160vw
    width: 160vw
    background: $color-primary-darker
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

  // FADE IN TRANSITION
  .fade-in-enter-active
    transition: all 1s .5s

  .fade-in-leave-active
    transition: all .2s

  .fade-in-enter, .fade-in-leave-to
    opacity: 0

</style>
