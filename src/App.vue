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

  body
    font-family: $font-body
    font-size: 18px
    line-height: 1.3
    color: $color-body
    
  *
    box-sizing: border-box

  h1, h2, h3
    font-family: $font-heading
    margin: 0

  ul
    list-style-type: none

  p:not(:last-child)
    margin-bottom: 1rem

  * + *
    margin: 0
    padding: 0

  /* GENERAL ELEMENTS */

  .illustration 
    align-self: flex-start
    margin: 1.5rem auto

    div
      height: 100px
      width: 100px
      background: $color-primary-lighter

  section
    display: grid
    grid-template-columns: repeat(2, 1fr) 
    flex-wrap: wrap
    grid-gap: 1rem
    grid-column: 1 / -1
    margin-top: 3rem

  h1
    grid-column: 1 / -1
    font-size: 3.5rem
    margin-top: 2rem
    margin-bottom: 1rem

  h2
    margin-bottom: 1rem
    font-size: 2.5rem

  h3
    margin-top: 1rem
    margin-bottom: .5rem
    font-size: 1.5rem
</style>
