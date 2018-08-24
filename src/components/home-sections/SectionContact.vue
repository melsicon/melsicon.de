<template>
    <section
        id="contact"
        class="section section-contact">
        <article class="article">
            <h2 class="heading">{{ $t('contact.heading') }}</h2>
            <p class="paragraph">{{ $t('contact.description') }}</p>
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
