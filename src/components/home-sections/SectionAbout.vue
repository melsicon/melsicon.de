<template>
    <section
        id="team"
        class="section section-about">
        <illustration-team v-if="$mq === 'xs'"/>
        <article class="article article-about">
            <!-- ABOUT COMPANY -->
            <h2 class="heading">{{ $t('about.company.heading') }}</h2>
            <!-- ILLUSTRATION ON MEDIUM SCREENS -->
            <div
                v-if="$mq === 'md'"
                :class="{'illustration-medium': $mq === 'md'}"
                class="illustration illustration-team">
                <img
                    v-lazy="$t('illustrations.team.src')"
                    :alt="$t('illustrations.team.desc')">
            </div>
            <p>{{ $t('about.company.desc[0]') }}</p>
            <i18n
                path="about.company.desc[1]"
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
            <!-- <p>{{ $t('about.company.desc') }}</p> -->
            <!-- ABOUT TEAM -->
            <h3 class="sub-heading">{{ $t('about.team.heading') }}</h3>
            <p>{{ $t('about.team.desc') }}</p>
        </article>
        <!-- ILLUSTRATION ON LARGE SCREENS -->
        <illustration-team v-if="$mq === 'lg'"/>
        <div
            v-if="$mq === 'lg'"
            class="illustration illustration-team">
            <img
                v-lazy="$t('illustrations.team.src')"
                :alt="$t('illustrations.team.desc')">
        </div>
        <!-- TEAM PROFILES -->
        <team-profile :profiles="$t('about.team.profiles')"/>
    </section>
</template>

<script>
import TeamProfile from '@/components/TeamProfile'
export default {
  components: {
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
