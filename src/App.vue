<template>
    <div id="app">
        <transition name="open">
            <the-sidebar v-if="sidebar && open" :open="open" v-on:toggleSidebar="toggleSidebar"/>
        </transition>
        <the-nav :sidebar="sidebar" :open="open" v-on:toggleSidebar="toggleSidebar"/>
        <router-view :class="{opened: open}"/>
        <the-footer :class="{opened: open}"/>
    </div>
</template>

<script>
import TheNav from '@/components/TheNav'
import TheFooter from '@/components/TheFooter'
import SidebarToggle from '@/components/SidebarToggle'
import TheSidebar from '@/components/TheSidebar'

export default {
  components: {
    TheNav,
    TheFooter,
    TheSidebar,
    SidebarToggle
  },
  data: () => ({
    open: false
  }),
  computed: {
    sidebar() {
      // If screen size is 'sm' or less, sidebar will be true
      if (this.$mq === 'sm') return true
      else return false
    }
  },
  methods: {
    toggleSidebar() {
      // Open and close the sidebar
      this.open = !this.open
      /* if (
        !document.body.style.overflow ||
        document.body.style.overflow === 'auto'
      ) {
        // If body overflow is set to 'auto' or does not have the property, apply 'hidden'
        document.body.style.overflow = 'hidden'
      } else if (document.body.style.overflow === 'hidden') {
        // If overflow is set to 'hidden', apply 'auto'
        document.body.style.overflow = 'auto'
      } */
    }
  }
}
</script>


<style lang="sass">

  html
    background: $color-secondary-darker

  body
    position: relative
    font-family: $font-body
    font-size: 20px
    line-height: 1.3
    color: $color-body
    background: $color-white
    overflow-x: hidden
    @media only screen and (min-width: 1000px)
      background-image: url(assets/bg.svg)
      background-size: cover
    @media screen and (max-width: 768px)
      font-size: 16px
  *
    box-sizing: border-box
    margin: 0
    padding: 0

  ::-webkit-scrollbar-thumb, ::-webkit-scrollbar
      display: none

  h1, h2
    font-weight: 300
    margin: 0

  ul
    list-style-type: none

  * + *
    margin: 0
    padding: 0

  /* GENERAL ELEMENTS */
  
  #app
    @media only screen and (max-width: 768px)
      overflow-x: hidden

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
    background: 0
    border: 0
    font-size: 1rem
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

  .opened
    transform: translate3d(40%, 0, 0)

</style>
