<template>
  <section
    id="contact"
    class="section section-contact">
    <article class="article article-contact">
      <!-- ILLUSTRATION ON MEDIUM SCREENS -->
      <div
        v-if="$mq === 'md'"
        :class="{'illustration-medium': $mq === 'md'}"
        class="illustration illustration-contact">
        <img
          v-lazy="$t('illustrations.contact.src')"
          :alt="$t('illustrations.contact.desc')">
      </div>
      <!-- CONTACT US -->
      <h2 class="heading heading-contact">{{ $t('contact.heading') }}</h2>
      <i18n
        path="contact.desc[0]"
        tag="p">
        <a
          href="mailto:hallo@melsicon.de"
          class="email inline-link"
          place="email">{{ $t('contact.email') }}</a>
      </i18n>
      <p>{{ $t('contact.desc[1]') }}</p>
    </article>
    <!-- ILLUSTRATION ON LARGE & XSMALL SCREENS -->
    <div
      v-if="$mq === 'lg' || $mq === 'xs'"
      :class="{'illustration-medium': $mq === 'md'}"
      class="illustration illustration-contact">
      <img
        v-lazy="$t('illustrations.contact.src')"
        :alt="$t('illustrations.contact.desc')">
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openChat() {
      window.drift.on('ready', api => {
        api.showWelcomeOrAwayMessage()
      })
    }
  }
}
</script>

<style lang="sass">

  .section-contact
    align-items: center
    padding: 5em 1em

  .heading-contact
    hyphens: none

  .illustration-contact
    padding: 0 4em
    margin: 2em 0
    @include small
      padding: 0 2em
</style>
