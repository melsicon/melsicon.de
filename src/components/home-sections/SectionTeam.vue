<template>
    <section
        id="about"
        class="section about">
        <illustration-team/>
        <article class="article article-about">
            <h2 class="heading">{{ $t('about.team.heading') }}</h2>
            <p
                v-for="p in $t('about.team.paragraphs')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
            <router-link
                place="team"
                class="inline-link"
                to="/team">{{ $t("about.team.team") }}</router-link>

        </article>
        <article class="article">
            <h3 class="sub-heading">{{ $t('services.heading') }}</h3><p
                v-for="p in $t('about.community.paragraphs')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
            <ul class="list meetup-list">
                <li
                    v-for="(meetup, key) in $t('about.community.list')"
                    :key="meetup.index"
                    class="meetup">
                    <a
                        :href="meetup"
                        class="meetup-link">{{ key }}</a>
                </li>
        </ul></article>
        <article class="article">
            <h3 class="sub-heading">{{ $t('services.heading') }}</h3>
            <p
                v-for="p in $t('about.community.paragraphs')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
            <router-link
                place="jobs"
                class="inline-link"
                to="/jobs">{{ $t("about.team.jobs") }}
                <font-awesome-icon
                    :icon="['fas', 'caret-right']"
                    aria-role="img"
                    aria-hidden="true"
                    class="social-icon"/>
        </router-link></article>
    </section>
</template>

<script>
import IllustrationTeam from '@/components/graphics/illustrations/IllustrationTeam'
export default {
  components: {
    IllustrationTeam
  }
}
</script>

<style lang="sass" scoped>

  .meetup-list
    display: flex
    flex-wrap: wrap
    margin-top: 2em

  .meetup
    margin-right: 1.5em

  .meetup-link
    display: block
    color: $color-secondary
    font-weight: 700

  @media screen and (max-width: 1000px)
    .illustration-team
      order: 2

</style>
