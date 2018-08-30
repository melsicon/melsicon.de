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
    @include x-large
      font-size: 22px
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
    list-style-type: none

  * + *
    margin: 0
    padding: 0

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

  // SECTIONS
  .section
    display: flex
    flex-wrap: wrap
    padding-bottom: 5em
    @include small
      padding-bottom: 1em

  // HEADINGS
  .heading
    color: $color-black
    font-size: 2.4em
    font-weight: 300
    margin-bottom: .2em
    @include small
      font-size: 1.9em

  .sub-heading
    font-weight: 600
    margin-top: 1em
    margin-bottom: .2em
    text-transform: uppercase
    letter-spacing: 1px

  // CONTENT
  .article, .illustration
    flex-basis: 50%
    @include small
      flex-basis: 100%

  .article
    padding: 1em
    margin: 1em 0
    @include medium
      margin: 0
    @include small
      flex-basis: 100%
      padding: 1em 0

  .illustration-medium
    float: right
    shape-outside: circle(50%)
    svg
      height: 300px

  .illustration svg
    width: 100%
    max-height: 600px

  p:not(:last-child)
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

</style>
