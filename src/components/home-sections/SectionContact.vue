<template>
    <section
        id="contact"
        class="section section-contact">
        <article class="article article-contact">
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
        <illustration-contact/>
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
    margin: 3em 0

  .illustration-contact
    padding: 0 2em

  .email
    color: $color-primary
    font-weight: 600

</style>
