<template>
    <section
        id="home"
        class="home">
        <article class="article article-hero">
            <h1 class="main-heading">{{ $t('hero.heading') }}</h1>
            <p class="paragraph">{{ $t('hero.description') }}</p>
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
    padding-top: 3em
    padding-bottom: 3em

  .main-heading
    font-size: 3em
    font-weight: 200
    letter-spacing: 1px
    margin-bottom: .3em
    @media screen and (max-width: 1000px)
      font-size: 2.5em
      flex-basis: 100%
    @media screen and (max-width: 320px)
      font-size: 2em


</style>
