<template>
  <main class="wrapper wrapper-error">
    <nuxt/>
  </main>
</template>

<script>
const SmNav = () => import('@/components/SmNav')
const LgNav = () => import('@/components/LgNav')
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheFooter,
    LgNav,
    SmNav
  }
}
</script>

<style lang="sass">

  .wrapper-error
    display: flex
    margin: auto
    min-height: 100vh
    background: $color-white

  .section-error
    display: flex
    text-align: center
    margin: auto;
    flex-direction: column
    padding-bottom: 3em
    padding: 5em 0

  .error-heading
    color: $color-black
    font-size: 4em
    font-weight: 200
    margin: 0
    margin-bottom: 0

  .error-link
    color: $color-primary-darker

  .paragraph-error
    color: $color-black

</style>
