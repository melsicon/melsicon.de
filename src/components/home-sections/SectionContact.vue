<template>
    <section
        id="contact"
        class="section section-contact">
        <article class="article article-contact">
            <!-- ILLUSTRATION ON MEDIUM SCREENS -->
            <illustration-contact
                v-if="$mq === 'md'"
                :class="{'illustration-medium': $mq === 'md'}"/>
            <!-- CONTACT US -->
            <h2 class="heading heading-contact">{{ $t('contact.heading') }}</h2>
            <p class="paragraph">{{ $t('contact.description[0]') }}</p>
            <i18n
                path="contact.description[1]"
                tag="p">
                <span
                    class="email inline-link"
                    place="email">{{ $t('contact.email') }}</span>
                <a
                    class="chat inline-link"
                    place="chat"
                    @click="openChat">{{ $t('contact.chat') }}</a>
            </i18n>
        </article>
        <!-- ILLUSTRATION ON LARGE & XSMALL SCREENS -->
        <illustration-contact v-if="$mq === 'lg' || $mq === 'xs'"/>
    </section>
</template>

<script>
import IllustrationContact from '@/components/graphics/illustrations/IllustrationContact'
export default {
  components: {
    IllustrationContact
  },
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
    padding: 8em 0
    @include small
      padding: 2em 0

  .illustration-contact
    padding: 0 4em
    margin: 2em 0
    @include small
      padding: 0 2em
</style>
