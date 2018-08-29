<template>
    <section
        id="contact"
        class="section section-contact">
        <article class="article article-contact">
            <illustration-contact 
                v-if="$mq === 'md'" 
                :class="{'illustration-medium': $mq === 'md'}"/>
            <h2 class="heading">{{ $t('contact.heading') }}</h2>
            <p class="paragraph">{{ $t('contact.description1') }}</p>
            <i18n
                path="contact.description2"
                tag="p">
                <span
                    class="email"
                    place="email">{{ $t('contact.email') }}</span>
            </i18n>
            <button
                class="btn btn-cta"
                type="button"
                title="Contact us">
                {{ $t('buttons.contact') }}</button>
        </article>
        <illustration-contact v-if="$mq === 'lg' || $mq === 'xs'"/>
    </section>
</template>

<script>
import IllustrationContact from '@/components/graphics/illustrations/IllustrationContact'
export default {
  components: {
    IllustrationContact
  }
}
</script>

<style lang="sass" scoped>
  .section-contact
    align-items: center
    margin: 10em 0
    @include small
      margin: 3em 0

  .illustration-contact
    padding: 0 1em
    @include x-large
      padding: 0 5em
    @include small
      padding: 0 3em

  .email
    color: $color-primary
    font-weight: 600

</style>
