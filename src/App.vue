<template>
    <div id="app">
        <sm-nav v-if="$mq === 'sm'"/>
        <lg-nav v-if="$mq !== 'sm'"/>
        <router-view/>
        <the-footer/>
    </div>
</template>

<script>
import LgNav from '@/components/LgNav'
import SmNav from '@/components/SmNav'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    LgNav,
    SmNav,
    TheFooter
  },
  computed: {
    locale() {
      return this.$i18n.locale
    }
  },
  metaInfo: {
    title: 'melsicon',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        name: 'description',
        content:
          'melsicon beratet Unternhemen aus dem Bereich Transportwesen und Banking in Frankfurt und Umgebung.'
      },
      {property: 'og:site_name', content: 'melsicon'}
    ]
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
    font-size: 19px
    height: 100%
    line-height: 1.4
    color: $color-black
    overflow-x: hidden
    @include medium
      font-size: 18px
    @include x-small
      font-size: 16px

  *
    box-sizing: border-box
    margin: 0
    padding: 0

  ::-webkit-scrollbar-thumb, ::-webkit-scrollbar
    display: none

  a, a:visited
    text-decoration: none
    color: $color-primary

  ul
    width: 100%
    list-style-type: none

  * + *
    margin: 0
    padding: 0

  #app
    height: 100%
    background: white
    @include medium
      overflow-x: hidden

  // MAIN WRAPPER
  .wrapper
    position: relative
    max-width: $large
    width: 100vw
    min-height: 100vh
    margin: auto
    padding: 0 1em
    background: $color-white

  // SECTIONS
  .section
    display: flex
    flex-wrap: wrap
    margin: 3em 0
    @include medium
      margin: 1em 0

  // HEADINGS
  .heading
    color: $color-black
    font-size: 2.4em
    font-weight: 300
    margin-bottom: .2em
    @include small
      font-size: 1.9em

  .sub-heading
    font-weight: 400
    margin-top: 1em
    margin-bottom: .2em
    text-transform: uppercase
    letter-spacing: 1px

  // CONTENT
  .article, .illustration
    flex-basis: 50%
    @include small
      flex-basis: 100%
      padding: .5em 0

  .article
    padding: 1em
    margin: 1em 0
    @include medium
      margin: 0
    @include small
      padding: 1em 0

  .illustration svg
    width: 100%
    max-height: 500px

  .paragraph:not(:last-child)
    margin-bottom: 1em

  // BUTTON STYLES
  button
    background: 0
    border: 0
    color: $color-black
    font-family: $font-body
    font-size: 1em
    cursor: pointer

  .btn-cta
    color: $color-white
    font-weight: 600
    padding: .5em 1.5em
    background: $color-primary
    border-radius: .3em
    margin: 1em 0
    box-shadow: .15em .15em 0 $color-primary-darker
    &:active
      box-shadow: .1em .1em 0 $color-white
      transform: translate3d(.15em, .15em, 0)

  // LINK STYLES
  .inline-link
    color: $color-primary
    font-weight: 600
    text-decoration: none

  iframe#drift-widget.drift-widget-welcome-online div
    border: 2px solid red !important

</style>
