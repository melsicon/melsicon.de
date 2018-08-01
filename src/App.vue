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

  p
    margin: 0
    &:not(:last-child)
      margin-bottom: 1em

  // HEADINGS
  h1
    font-size: 2.8em
    font-weight: 200
    margin: 0
    margin-bottom: .5em
    @media screen and (max-width: 768px)
      font-size: 2.1em

  h2
    font-size: 2em
    font-weight: 300
    margin-top: 1em
    margin-bottom: .3em
    @media screen and (max-width: 768px)
      font-size: 1.7em

  h3
    font-size: 1.5em
    font-weight: 300
    margin-top: 1em
    margin-bottom: .3em
    @media screen and (max-width: 768px)
      font-size: 1.2em

  // MAIN WRAPPER
  .wrapper
    position: relative
    max-width: $width-full
    width: 100vw
    min-height: 100vh
    margin: auto
    padding: 0 .8rem
    background: $color-white
    @media only screen and (min-width: 1480px)
      max-width: 1400px
    @media only screen and (max-width: 1200px)
      max-width: 1000px
    @media only screen and (max-width: 1000px)
      max-width: 850px
    @media screen and (max-width: 900px)
      max-width: 750px
  
  .illustration
    background: $color-secondary-darker
    height: 100%
    width: 100%
    clip-path: polygon(6% 5%, 32% 7%, 53% 4%, 79% 10%, 88% 33%, 76% 43%, 90% 58%, 92% 79%, 83% 89%, 44% 96%, 17% 80%, 6% 47%, 15% 23%)

  /* SECTIONS */

  .d-contents
      display: contents

  // Grid

  @supports (display: grid)
    .section
      position: relative
      display: grid
      grid-template-columns: 1fr 1fr
      grid-column-gap: 1em
      padding: 4em 0
      @media screen and (max-width: 1000px)
        margin-bottom: 1em
        grid-template-columns: 1fr
      @media screen and (max-width: 400px)
        padding-top: 2em
    
    .span-full
      grid-column: 1 / -1

  .center
    text-align: center
    @media screen and (max-width: 768px)
      text-align: left

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
    padding: 0 1em
    border-radius: .2em
    font-weight: bold
    text-transform: uppercase

  .btn-wrap
    grid-column: 1
    text-align: center

  .link-more
    color: $color-secondary
    font-weight: 600
    text-decoration: none
</style>
