<template>
    <nav class="nav-toggle">
        <button class="btn btn-open" @click="$emit('toggleSidebar')">{{ $t('buttons.open') }}</button>
        <the-logo/>
    </nav>
</template>

<script>
import TheLogo from '@/components/graphics/TheLogo'
export default {
  components: {
    TheLogo
  }
}
</script>

<style lang="sass" scoped>

  .nav-toggle
    position: sticky
    top: 0
    width: 100%
    display: flex
    justify-content: space-between
    background: $color-white
    min-height: 2rem
    z-index: 2
    opacity: 1
    padding: .5rem .8rem
    transition: opacity .5s ease-in-out
  
  .hide
    opacity: 0

  .btn-open
    color: $color-body
  
  .logo
    fill: $color-primary
    max-height: 1.8rem
</style>
