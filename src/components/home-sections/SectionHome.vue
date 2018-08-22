<template>
    <section
        id="home"
        class="home">
        <article class="article article-hero">
            <h1 class="main-heading">{{ $t('home.heading') }}</h1>
            <p class="paragraph">{{ $t('home.description') }}</p>
        </article>
        <illustration-hero/>
    </section>
</template>

<script>
import IllustrationHero from '@/components/graphics/illustrations/IllustrationHero'
export default {
  name: 'Home',
  components: {
    IllustrationHero
  }
}
</script>

<style lang="sass" scoped>

  .home
    display: flex
    flex-wrap: wrap
    align-items: center
    min-height: 80vh
    @media screen and (max-width: 1000px)
      padding: 3em 0

  .article-hero
    flex-basis: 60%

  .illustration-hero
    flex-basis: 40%

  .main-heading
    font-size: 2.6em
    font-weight: 200
    margin: 0
    letter-spacing: 1px
    padding: .5em 0
    @media screen and (max-width: 1000px)
      font-size: 3.4em
      flex-basis: 100%


</style>
