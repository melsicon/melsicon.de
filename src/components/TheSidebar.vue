<template>
    <aside class="sidebar">
        <div class="top">
            <button class="btn btn-close" @click="$emit('toggleSidebar')">{{ $t('buttons.close') }}</button>
            <the-logo/>
        </div>
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
        <ul class="socialmedia-list">
            <li class="socialmedia-item">Twitter</li>
            <li class="socialmedia-item">LinkedIn</li>
            <li class="socialmedia-item">XING</li>
        </ul>
    </aside>
</template>

<script>
import TheLogo from '@/components/graphics/TheLogo'
export default {
  components: {
    TheLogo
  }
}
</script>


<style lang="sass">
  .sidebar
    position: fixed
    top: 0
    left: 0
    overflow: hidden
    display: flex
    flex-direction: column
    align-content: space-between
    height: 100vh
    width: 100%
    z-index: 100
    background: $color-secondary-darker
    padding: .5rem .8rem

  .top
    display: flex
    justify-content: space-between

  .logo
    max-height: 1.8rem
    fill: $color-white

  .btn-close
    color: $color-white

  .sidebar-nav
    align-self: center
    display: flex
    flex-direction: column
    align-items: flex-start
    margin: auto

  .sb-nav-link
    font-size: 1.5rem
    color: $color-white
    margin-bottom: 1rem
  
  .socialmedia-list
    display: flex
    justify-content: space-between
    color: white
    margin: 2rem

</style>
