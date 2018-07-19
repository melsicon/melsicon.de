<template>
    <section id="contact" class="section contact">
        <article class="article">
            <h2 class="sub-heading span2">{{ $t('contact.heading') }}</h2>
            <div>
                <p v-for="p in $t('contact.paragraphs')" :key="p.index">{{p}}</p>
                <span class="btn-wrap"><button>{{ $t('buttons.contact') }}</button></span>
            </div>
            <div class="illustration">
                <temp-illustration/>
            </div>
        </article>
    </section>
</template>

<script>
import TempIllustration from '@/components/TempIllustration'
export default {
  components: {
    TempIllustration
  }
}
</script>
