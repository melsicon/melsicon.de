<template>
    <footer class="footer">
        <div class="footer-wrapper">
            <the-logo/>
        </div>
    </footer>
</template>

<script>
import TheLogo from '@/components/graphics/TheLogo'
export default {
  name: 'Footer',
  components: {
    TheLogo
  }
}
</script>

<style lang="sass">

  .footer
      height: 20rem
      background: $color-secondary-darker
      color: white
      padding: 1rem 0

  .footer-wrapper
    max-width: 1200px
    margin: auto
    height: 100%
    display: grid
    grid-template-columns: repeat(2, 1fr)
    @media only screen and (min-width: 1480px)
      max-width: 1400px

    .logo
      fill: white

</style>
