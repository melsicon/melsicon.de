<template>
    <section
        id="team"
        class="section section-about">
        <illustration-team v-if="$mq === 'xs'"/>
        <article class="article article-about">
            <!-- ABOUT COMPANY -->
            <h2 class="heading">{{ $t('about.company.heading') }}</h2>
            <!-- ILLUSTRATION ON MEDIUM SCREENS -->
            <illustration-team
                v-if="$mq === 'md'"
                :class="{'illustration-medium': $mq === 'md'}"/>
            <p
                v-for="p in $t('about.company.description')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
            <!-- ABOUT TEAM -->
            <h3 class="sub-heading">{{ $t('about.team.heading') }}</h3>
            <p class="paragraph">{{ $t('about.team.description') }}</p>
        </article>
        <!-- ILLUSTRATION ON LARGE SCREENS -->
        <illustration-team v-if="$mq === 'lg'"/>
        <!-- TEAM PROFILES -->
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

<style lang="sass">

  .article-about
    align-self: center
    margin-bottom: 2em
    @include small
      margin-bottom: 0

  .illustration-team
    padding: 0 3em
    align-self: center
    @include small
      padding: 0 1em
</style>
