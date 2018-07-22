<template>
    <section id="team" class="section team">
        <article class="article">
            <article>
                <h2 class="sub-heading span2r">{{ $t('team.about.heading') }}</h2>
                <p v-for="p in $t('team.about.paragraphs')" :key="p.index" class="right">{{p}}</p>
            </article>
            <div class="illustration">
                <temp-illustration/>
            </div>
            <div class="illustration">
                <temp-illustration/>
            </div>
            <article>
                <h3 class="sub-heading span2r">{{ $t('team.careers.heading') }}</h3>
                <p v-for="p in $t('team.careers.paragraphs')" :key="p.index" class="right">{{p}}</p>
            </article>
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
