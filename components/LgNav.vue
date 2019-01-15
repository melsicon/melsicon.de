<template>
  <div class="nav">
    <div class="lg-nav-wrapper">
      <scrollactive
        :offset="0"
        :modify-url="false"
        class="lg-nav"
        role="navigation">
        <template v-if="$nuxt.$route.name === 'index'">
          <a
            v-for="(nav, key) in $t('nav')"
            :href="'#' + key"
            :key="nav.index"
            :class="{'scrollactive-item': $nuxt.$route.name === 'index'}"
            class="nav-link">{{ nav }}</a>
        </template>
        <template v-if="$nuxt.$route.name !== 'index'">
          <nuxt-link
            v-for="(nav, key) in $t('nav')"
            :to="'/#' + key"
            :key="nav.index"
            class="nav-link">{{ nav }}</nuxt-link>
        </template>
      </scrollactive>
      <the-logo/>
    </div>
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
    open: false
  })
}
</script>

<style lang="sass" scoped>

  .nav
    position: fixed
    top: 0
    display: flex
    width: 100%
    background: white
    z-index: 9999
    margin: 0 auto

  .lg-nav-wrapper
    display: flex
    position: relative
    width: 100%
    max-width: $normal-width
    margin: auto
    padding: .5rem 1em
    align-items: center
    @include x-large
      max-width: $large-width

  .lg-nav
    display: flex
    width: 100%

  .logo
    fill: $color-primary
    margin-left: auto

  .nav-list
    display: flex
    width: 100%

  .nav-link
    margin-right: 5%
    padding-right: .5em
    color: $color-black
    font-size: .9em
    letter-spacing: .5px
    text-decoration: none
    text-transform: uppercase
    transition: transform .3s ease-in
    border-bottom: 1px solid $color-white
    transition: all .3s ease-in

  .is-active
    color: $color-primary
    font-weight: 600

</style>
