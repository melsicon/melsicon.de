<template>
    <section id="home" class="home">
        <h1 class="main-heading" tabindex="0">{{ $t('home.heading') }}</h1>
        <illustration-heading/>
    </section>
</template>

<script>
import IllustrationHeading from '@/components/graphics/illustrations/IllustrationHeading'
export default {
  name: 'Home',
  components: {
    IllustrationHeading
  }
}
</script>

<style lang="sass" scoped>

  .home
    display: flex
    flex-wrap: wrap
    padding: 8em 0
    align-items: center
    min-height: 80vh
    @media screen and (max-width: 1000px)
      padding: 3em 0

  .main-heading
    font-size: 3.6em
    font-weight: 200
    flex-basis: 65%
    color: $color-black
    margin: 0
    letter-spacing: 1px
    padding: .5em 0
    @media screen and (max-width: 1000px)
      font-size: 3.4em
      flex-basis: 100%

  .illustration-heading
    flex-basis: 35%
    padding: 0
    @media screen and (max-width: 1000px)
      flex-basis: 100%


</style>
