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
    background: $color-secondary-darker

  body
    position: relative
    background: $color-white
    font-family: $font-body
    font-size: 19px
    height: 100%
    line-height: 1.4
    color: $color-black
    overflow-x: hidden
    @media screen and (max-width: 768px)
      font-size: 18px
    @media screen and (max-width: 400px)
      font-size: 16px

  *
    box-sizing: border-box
    margin: 0
    padding: 0

  ::-webkit-scrollbar-thumb, ::-webkit-scrollbar
    display: none

  a, a:visited
    text-decoration: none
    color: $color-secondary

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

  // MAIN WRAPPER
  .wrapper
    position: relative
    max-width: $width-full
    width: 100vw
    min-height: 100vh
    margin: auto
    padding: 0
    background: $color-white
    @media only screen and (min-width: 1480px)
      max-width: 1400px
    @media only screen and (max-width: 1200px)
      max-width: 1000px
    @media only screen and (max-width: 1000px)
      padding: 0 1em
      max-width: 850px
    @media screen and (max-width: 900px)
      max-width: 750px

  // SECTIONS
  .section
    display: flex
    flex-wrap: wrap
    margin: 3em 0
    @media screen and (max-width: 1000px)
      margin: 1em 0

  // HEADINGS
  .heading
    color: $color-black
    font-size: 2.4em
    font-weight: 300
    margin-bottom: .2em
    @media screen and (max-width: 768px)
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
    padding: 1em
    @media only screen and (max-width: 1000px)
      flex-basis: 100%
      padding: .5em 0

  .article
    margin: 1em 0
    @media screen and (max-width: 1000px)
      margin: 0

  .paragraph
    margin: 1em 0
    &:last-child
      margin-bottom: 0

  .illustration-services, .illustration-contact, .illustration-team
    padding: 0 4em
    @media screen and (max-width: 768px)
      padding: 0 2em

  // BUTTON STYLES
  button
    background: 0
    border: 0
    color: $color-black
    font-family: $font-body
    font-size: 1em
    cursor: pointer

  .btn-cta
    display: flex
    align-items: center
    color: $color-secondary
    background: $color-white
    border-radius: .1em
    font-weight: 600
    padding: .5em 1em
    font-size: 1em
    letter-spacing: 1px
    text-transform: uppercase
    transition: all .1s ease-in
    &:hover
      transform: translate3d(2px, 2px, 0)
      box-shadow: 1px 1px 0 $color-primary
    &:active
      transform: translate3d(3px, 3px, 0)
      box-shadow: 1px 1px 0 $color-white

    .social-icon
      font-size: 1em


  // LINK STYLES
  .inline-link
    color: $color-secondary
    font-weight: 600
    text-decoration: none

</style>
