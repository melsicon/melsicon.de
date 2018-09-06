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
            <p class="paragraph">{{ $t('about.company.description[0]') }}</p>
            <i18n
                path="about.company.description[1]"
                tag="p">
                <q
                    class="quote"
                    place="melsi">{{ $t('about.company.melsi') }}</q>
                <q
                    class="quote"
                    place="con">{{ $t('about.company.con') }}</q>
                <q
                    class="quote"
                    place="solution">{{ $t('about.company.solution') }}</q>
            </i18n>
            <!-- <p class="paragraph">{{ $t('about.company.description') }}</p> -->
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

  .quote
    color: $color-primary
    font-weight: 600
</style>
