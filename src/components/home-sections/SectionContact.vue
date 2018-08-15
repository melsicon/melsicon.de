<template>
    <section id="contact" class="section section-contact">
        <article class="article">
            <h2 class="heading" tabindex="0">{{ $t('contact.heading') }}</h2>
            <p v-for="p in $t('contact.paragraphs')" :key="p.index" class="paragraph" tabindex="0">{{p}}</p>
            <button class="btn btn-cta">{{ $t('buttons.contact') }}</button>
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
