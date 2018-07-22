<template>
    <div class="nav-wrapper">
        <div>
            <scrollactive v-if="!sidebar" 
                          :offset="100"
                          :modify-url="false"
                          class="nav">
                <a v-for="(route, key) in $t('nav')" 
                   :key="route.index" 
                   :href="'#' + key" 
                   class="nav-link scrollactive-item"
                >{{route}}</a>
            </scrollactive>
            <scrollactive v-if="sidebar" 
                          :offset="100"
                          :modify-url="false"
                          class="nav"
                          active-class="none">
                <a href="#home" 
                   class="nav-link scrollactive-item">
                    <the-logo/>
                </a>
                <button v-if="sidebar && !open" class="btn btn-toggle" @click="$emit('toggleSidebar')">{{ $t('buttons.open') }}</button>
                <button v-if="sidebar && open" class="btn btn-toggle" @click="$emit('toggleSidebar')">{{ $t('buttons.close') }}</button>
            </scrollactive>
            
        </div>
    </div>
</template>

<script>
import TheLogo from '@/components/graphics/TheLogo'
export default {
  name: 'Navigation',
  components: {
    TheLogo
  },
  props: {
    open: {
      type: Boolean,
      required: true,
      default: false
    },
    sidebar: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>

  .nav-wrapper
    position: sticky
    top: 0
    width: 100%
    min-height: 3rem
    background: white
    z-index: 99
    transition: all .6s ease-in
    @media only screen and (max-width: 768px)
      position: fixed
      min-height: auto

  .nav-wrapper > div
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    max-width: 1200px
    margin: auto
    padding: .5rem .8rem
    @media only screen and (min-width: 1480px)
      max-width: 1400px

  .nav
    display: flex
    flex-basis: 50%
    justify-content: space-between
    @media screen and (max-width: 768px)
      flex-basis: 100%

  .logo
    height: 1.5rem

  .btn-toggle
    color: $color-secondary-darker
    text-transform: uppercase
    font-size: .8rem
    border-bottom: 2px solid $color-secondary-darker

  .is-active
    border-bottom: 2px solid $color-primary
    transform: scale(1.05)
  
  .none
    border-bottom: 0
    transform: scale(1)


</style>

<style lang="sass">
  .nav-link
    color: $color-body
    font-size: 18px
    text-decoration: none
    text-transform: capitalize
    transition: transform .3s ease-in-out

</style>
