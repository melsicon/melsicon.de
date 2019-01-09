<template>
    <section
        id="home"
        class="section section-home">
        <article class="article article-hero">
            <h1 class="main-heading">{{ $t('hero.heading') }}</h1>
        </article>
        <!-- HERO ILLUSTRATION -->
        <div class="illustration illustration-hero">
            <img
                v-lazy="$t('illustrations.hero.src')"
                :alt="$t('illustrations.hero.desc')">
        </div>
    </section>
</template>

<style lang="sass">

  .section-home
    flex-wrap: nowrap
    align-items: center
    @include small
      flex-wrap: wrap

  .main-heading
    font-size: 3em
    font-weight: 200
    letter-spacing: 1px
    margin-bottom: .3em
    @include medium
      padding-top: .5em
      font-size: 2em
    @include x-small
      font-size: 1.5em

  .illustration-hero
    padding: 0 2em
    @include small
      padding: 0 .5em

</style>
