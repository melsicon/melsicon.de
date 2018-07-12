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
    margin: 0
    padding: 0

  h1, h2, h3
    font-family: $font-heading
    margin: 0

  ul
    list-style-type: none

  * + *
    margin: 0
    padding: 0

  /* GENERAL ELEMENTS */

  .illustration
    background: $color-primary-lighter
    height: 300px
    margin: 1rem 0

  .article-section
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-auto-rows: max-content
    flex-wrap: wrap
    grid-gap: .5rem 1rem
    grid-column: 1 / -1
    margin: 3rem 0

    section
      display: grid
      grid-template-columns: repeat(2, 1fr)
      grid-auto-rows: max-content
      grid-gap: 0 1rem

  p
    margin: 0
    grid-column: span 1
    &:not(:last-child)
      margin-bottom: 1rem

  .span-2
    grid-column: 1 / -1

  h2
    grid-column: 1 / -1
    margin-bottom: 1rem
    font-size: 2.2rem

  h3
    grid-column: 1 / -1
    margin-top: 1rem
    margin-bottom: .5rem
    font-size: 1.8rem
</style>
