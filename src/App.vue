<template>
    <div id="app">
        <the-nav/>
        <router-view/>
        <the-footer/>
    </div>
</template>

<script>
import TheNav from '@/components/TheNav'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheNav,
    TheFooter
  }
}
</script>


<style lang="sass">

  html
    background: $color-secondary-darker

  body
    font-family: $font-body
    font-size: 20px
    line-height: 1.3
    color: $color-body
    background: white
    @media only screen and (min-width: 1000px)
      background-image: url(assets/bg.svg)
      background-size: cover
    @media screen and (max-width: 768px)
      font-size: 16px
    
  *
    box-sizing: border-box
    margin: 0
    padding: 0

  h1, h2
    font-weight: 300
    margin: 0

  ul
    list-style-type: none

  * + *
    margin: 0
    padding: 0

  /* GENERAL ELEMENTS */

  .illustration
    display: flex
    justify-content: center
    align-items: center

    svg
      max-width: 50%

  p
    margin: 0
    &:not(:last-child)
      margin-bottom: 1rem

  h1
    grid-column: 1 / -1
    font-size: 3.5rem
    //max-width: 35ch
    margin-bottom: 1rem
    @media screen and (max-width: 768px)
      font-size: 2.5rem

  h2
    margin: 1rem 0
    font-size: 2.5rem
    @media screen and (max-width: 768px)
      font-size: 2rem

  h3
    margin-top: 1rem
    margin-bottom: .5rem
    font-size: 1.5rem
    @media screen and (max-width: 768px)
      font-size: 1.2rem

  h4
    font-size: .9rem
    text-transform: uppercase
    letter-spacing: .05rem

  button
    min-height: 35px
    background: $color-secondary
    border: 0
    color: white
    font-size: 1rem
    padding: 0 1rem
    border-radius: .2rem
    font-weight: bold
    text-transform: uppercase
  
  .btn-wrap
    grid-column: 1
</style>
