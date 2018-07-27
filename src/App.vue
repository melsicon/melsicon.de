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

  /* GLOBAL STYLES */

  html
    background: $color-secondary-darker

  body
    position: relative
    background: $color-white
    font-family: $font-body
    font-size: 19px
    height: 100%
    line-height: 1.3
    color: $color-black
    overflow-x: hidden
    @media screen and (max-width: 768px)
      font-size: 18px

  *
    box-sizing: border-box
    margin: 0
    padding: 0

  ::-webkit-scrollbar-thumb, ::-webkit-scrollbar
      display: none

  a
    text-decoration: none
    color: $color-secondary
    &:visited
      color: $color-secondary-darker

  ul
    list-style-type: none

  * + *
    margin: 0
    padding: 0

  #app
    height: 100%
    background: white
    @media only screen and (max-width: 768px)
      overflow-x: hidden

  p
    margin: 0
    &:not(:last-child)
      margin-bottom: 1rem

  // HEADINGS
  h1
    font-size: 3em
    font-weight: 200
    margin: 0
    margin-bottom: 1rem
    @media screen and (max-width: 768px)
      font-size: 2.5rem

  h2
    font-size: 2em
    font-weight: 300
    margin: 1rem 0
    @media screen and (max-width: 768px)
      font-size: 2em

  h3
    font-size: 1.5em
    font-weight: 300
    margin-top: 1em
    margin-bottom: 0
    @media screen and (max-width: 768px)
      font-size: 1.8em

  // BUTTON STYLE
  button
    background: 0
    border: 0
    font-family: $font-body
    font-size: 1em
    cursor: pointer

  .btn-cta
    min-height: 35px
    background: $color-secondary
    color: white
    padding: 0 1rem
    border-radius: .2rem
    font-weight: bold
    text-transform: uppercase

  .btn-wrap
    grid-column: 1
    text-align: center

  .link-more
    color: $color-secondary
    font-weight: 700
    text-decoration: none
</style>
