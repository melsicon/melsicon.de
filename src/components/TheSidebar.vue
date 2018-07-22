<template>
    <aside class="sidebar">
        <div class="circle"/>
        <scrollactive :offset="100" 
                      :modify-url="false"
                      class="sidebar-nav">
            <a v-for="(route, key) in $t('nav')" 
               :key="route.index" 
               :href="'#' + key"
               class="nav-link sb-nav-link scrollactive-item"
               @click="$emit('toggleSidebar')"
            >{{route}}</a>
        </scrollactive>
    </aside>
</template>

<script>
import TheLogo from '@/components/graphics/TheLogo'
export default {
  components: {
    TheLogo
  },
  props: {
    open: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>


<style lang="sass">
  .sidebar
    position: fixed
    top: 0
    left: 0
    display: flex
    flex-direction: column
    align-content: space-between
    background: $color-secondary-darker
    height: 100vh
    width: 40%
    z-index: 98

  .top
    display: flex
    justify-content: space-between
    padding: .5rem .8rem
    z-index: 5

  .logo
    max-height: 1.8rem
    fill: $color-primary

  .btn-close
    color: $color-white

  .sidebar-nav
    align-self: center
    display: flex
    flex-direction: column
    align-items: flex-start
    margin: auto
    z-index: 5

  .sb-nav-link
    position: relative
    font-size: 1.3rem
    color: $color-white
    margin-bottom: 1rem
    &::before
      position: absolute
      top: calc((100% - .5rem) / 2)
      left: -1rem
      content: ''
      height: .5rem
      width: .5rem
      background: $color-white
      border-radius: 50%
      transform: scale(0)
      transition: all .6s
  
  .is-active::before
    transform: scale(1)
  
  .socialmedia-list
    display: flex
    justify-content: space-between
    color: white
    margin: 2rem
    z-index: 5

  // Open-Close Transitions
  .open-enter-active, .open-leave-active
    transition: all .5s cubic-bezier(.645,.045,.355,1)
  
  .open-enter, .open-leave-to
    transform: translate3d(-100%, 0, 0)

</style>
