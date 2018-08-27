<template>
    <section
        id="about"
        class="section section-team">
        <article class="article article-team">
            <h2 class="heading">{{ $t('about.company.heading') }}</h2>
            <p 
                v-for="p in $t('about.company.description')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
            <h3 class="sub-heading">{{ $t('about.team.heading') }}</h3>
            <p class="paragraph">{{ $t('about.team.description') }}</p>
        </article>
        <illustration-team/>
        <team-profile :profiles="$t('about.team.profiles')"/>
    </section>
</template>

<script>
import IllustrationTeam from '@/components/graphics/illustrations/IllustrationTeam'
import TeamProfile from '@/components/TeamProfile'
export default {
  components: {
    IllustrationTeam,
    TeamProfile
  }
}
</script>

<style lang="sass" scoped>

  .section-team
    margin-bottom: 0

  .article-team
    align-self: center
    margin-bottom: 2em
    @include small
      margin-bottom: 0

  .illustration-team
    padding: 0 3em
    align-self: center
</style>
