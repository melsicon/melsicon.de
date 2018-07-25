<template>
    <section id="team" class="section team">
        <article class="article">
            <h2 class="sub-heading">{{ $t('team.about.heading') }}</h2>
            <p v-for="p in $t('team.about.paragraphs')" :key="p.index">{{p}}</p>
            <router-link to="/profiles">Learn more</router-link>
            <h3 class="sub-heading">{{ $t('team.careers.heading') }}</h3>
            <p v-for="p in $t('team.careers.paragraphs')" :key="p.index">{{p}}</p>
            <span class="btn-wrap"><button class="btn btn-more">Our vacancies</button></span>
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
