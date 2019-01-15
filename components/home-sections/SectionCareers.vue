<template>
  <section
    id="careers"
    class="section section-careers">
    <div
      v-if="$mq === 'lg'"
      class="illustration illustration-careers">
      <img
        v-lazy="$t('illustrations.careers.src')"
        :alt="$t('illustrations.careers.desc')">
    </div>
    <article class="article article-careers">
      <!-- INTRO TO CAREERS AT MELSICON -->
      <h2 class="heading">{{ $t('about.careers.heading') }}</h2>
      <p>{{ $t('about.careers.desc') }}</p>
      <!-- CURRENT/MOST RECENT OPENINGS -->
      <nuxt-link 
        class="inline-link" 
        to="/jobs">To the jobs page</nuxt-link>
      <!-- ILLUSTRATION ON SMALL AND MEDIUM SCREENS -->
      <div
        v-if="$mq === 'xs' || $mq === 'md'"
        :class="{'illustration-medium': $mq === 'md'}"
        class="illustration illustration-careers">
        <img
          v-lazy="$t('illustrations.careers.src')"
          :alt="$t('illustrations.careers.desc')">
      </div>
    </article>
  </section>
</template>

<style lang="sass">

  .article-careers
    align-self: center

</style>
