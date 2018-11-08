<template>
    <div
        id="app"
        :class="{'error404': $route.name === 'error404'}">
        <template v-if="$route.name !== 'error404'">
            <sm-nav v-if="$mq === 'xs' || $mq === 'md'"/>
            <lg-nav v-if="$mq === 'lg'"/>
        </template>
        <router-view/>
        <the-footer/>
        <drift-comp app-id="a4bzgnvsk28w"/>
    </div>
</template>

<script>
const LgNav = () => import('@/components/LgNav')
const SmNav = () => import('@/components/SmNav')
import TheFooter from '@/components/TheFooter'
import DriftComp from '@/components/DriftComp'

export default {
  components: {
    LgNav,
    SmNav,
    TheFooter,
    DriftComp
  },
  computed: {
    locale() {
      return this.$i18n.locale
    }
  },
  metaInfo: {
    title: 'melsicon GmbH',
    htmlAttrs: {
      lang: 'de'
    }
  }
}
</script>


<style lang="sass">

  /* GLOBAL/RESET STYLES */

  html
    background: $color-primary-darker

  body
    position: relative
    background: $color-white
    font-family: $font-body
    font-size: 20px
    height: 100%
    line-height: 1.4
    color: $color-black
    text-size-adjust: none
    @include x-large
      font-size: 22px
    @include x-small
      font-size: 18px

  a, a:visited
    text-decoration: none
    color: $color-primary
    transition: transform .5s ease-in-out
    &:hover
      transform: scale(1.02)
      @include small
        transform: scale(1.01)

  ul
    list-style-type: none

  *, * + *
    margin: 0
    padding: 0
    box-sizing: border-box

  button
    background: 0
    border: 0
    box-shadow: 0
    font-size: 1rem

  a::-moz-focus-inner, a::-moz-focus-outer, button::-moz-focus-outer, button::-moz-focus-inner, button:-moz-focusring, span.inline-link::-moz-focus-outer
    outline-color: $color-primary
    outline-style: dashed
    outline-width: 1.5px
    outline-offset: 1px

  a:focus, a.nav-link:focus, button:focus, span.inline-link:focus
    outline-color: $color-primary
    outline-style: dashed
    outline-width: 1.5px
    outline-offset: 1px

  .footer-link:focus, .footer-social-link:focus
    outline-color: $color-white
    outline-style: dashed
    outline-width: 1.5px
    outline-offset: 1px

  #app
    height: 100%

  .error404
    background: $color-primary-darker

  // MAIN WRAPPER
  .wrapper
    position: relative
    max-width: $normal-width
    width: 100vw
    margin: 0 auto
    padding: 0 1em
    @include x-large
      max-width: $large-width
    @include x-small
      padding: 0 .6em

  // MAIN SECTIONS
  .section
    display: flex
    flex-wrap: wrap
    padding-top: 5em
    @include small
      padding-top: 2em

  // HEADINGS
  .heading
    color: $color-black
    font-size: 2.4em
    font-weight: 300
    margin-bottom: .2em
    hyphens: auto
    @include small
      font-size: 2.1em

  .sub-heading
    font-weight: 600
    margin-top: 1em
    margin-bottom: .2em
    hyphens: auto

  // CONTENT
  .article, .illustration
    flex-basis: 50%
    @include small
      flex-basis: 100%

  p:not(:last-child)
    margin-bottom: 1em

  // ILLUSTRATIONS
  .illustration
    padding: 0 4em
    align-self: center
    @include small
      padding: 0 1em

  .illustration-medium
    float: right
    shape-outside: circle(50%)
    svg
      height: 300px

  .illustration svg
    width: 100%
    max-height: 600px

  // LINK STYLES
  .inline-link
    color: $color-primary
    font-weight: 600
    text-decoration: none
    cursor: pointer

  img[lazy=loading]
    opacity: 0

  img[lazy=loaded]
    opacity: 1
    transition: all .5s ease-in


</style>
