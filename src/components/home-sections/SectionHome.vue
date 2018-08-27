<template>
    <section
        id="home"
        class="section section-home">
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

  .section-home
    flex-wrap: nowrap
    align-items: center
    padding: 3em 0
    @include medium
      padding-top: 1em
    @include small
      flex-wrap: wrap
      padding: 0
      padding-top: 2em

  .main-heading
    font-size: 3em
    font-weight: 200
    letter-spacing: 1px
    margin-bottom: .3em
    @include medium
      font-size: 2.5em
      flex-basis: 100%
    @include x-small
      font-size: 2em

</style>
