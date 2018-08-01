<template>
    <section id="about" class="section about">
        <article class="article article-about">
            <h2 class="sub-heading">{{ $t('team.about.heading') }}</h2>
            <p v-for="p in $t('team.about.paragraphs')" :key="p.index">{{p}}</p>
            <router-link class="link-more" to="/team">{{ $t('buttons.more') }}</router-link>
            <h3 class="sub-heading">{{ $t('team.careers.heading') }}</h3>
            <p v-for="p in $t('team.careers.paragraphs')" :key="p.index">{{p}}</p>
            <router-link class="link-more" to="/jobs">{{ $t('buttons.jobs') }}</router-link>
        </article>

        <article class="article article-community">
            <h3 class="sub-heading span-full">{{ $t('community.heading') }}</h3>
            <p v-for="p in $t('community.paragraphs')" :key="p.index">{{p}}</p>
            <ul class="list meetup-list">
                <li v-for="meetup in $t('community.list')" :key="meetup.index" class="meetup">
                    {{meetup}}
                </li>
            </ul>
        </article>

        <img src="" alt="" class="illustration illustration-team-community">

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

<style lang="sass" scoped>
  .illustration-team-community
    grid-column: 2
    grid-row: 1 / 4
</style>
