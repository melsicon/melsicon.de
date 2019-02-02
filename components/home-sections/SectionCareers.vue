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
        class="inline-link job-page-link"
        to="/karriere">
        <font-awesome-icon
          :icon="['fas', 'angle-right']"
          aria-role="img"
          aria-hidden="true"
          fixed-width
          class="item-icon"/>{{ $t('about.careers.link') }}</nuxt-link>
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

  .job-page-link
    margin-bottom: 1.2em

</style>
