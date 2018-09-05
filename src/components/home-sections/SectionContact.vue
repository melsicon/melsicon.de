<template>
    <section
        id="contact"
        class="section section-contact">
        <article class="article article-contact">
            <illustration-contact
                v-if="$mq === 'md'"
                :class="{'illustration-medium': $mq === 'md'}"/>
            <h2 class="heading heading-contact">{{ $t('contact.heading') }}</h2>
            <p class="paragraph">{{ $t('contact.description1') }}</p>
            <i18n
                path="contact.description2"
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
        api.sidebar.toggle()
      })
    }
  }
}
</script>

<style lang="sass">

  .section-contact
    align-items: center
    padding-top: 5em
    padding-bottom: 10em
    @include small
      padding: 2em 0

  .illustration-contact
    padding: 0 5em
    @include small
      padding: 0 3em

  .heading-contact
    hyphens: none

</style>
