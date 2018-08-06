<template>
    <section id="home" class="home">
        <h1 class="main-heading">{{ $t('home.heading') }}</h1>
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
    padding: 8em 0

  .main-heading
    font-size: 3.5em
    font-weight: 200
    color: $color-black
    margin: 0
    letter-spacing: 1px
    max-width: 70%
    padding: .5em 0
    @media screen and (max-width: 768px)
      font-size: 2.2em

  .illustration-heading
    padding: 0
    width: 40%

</style>
