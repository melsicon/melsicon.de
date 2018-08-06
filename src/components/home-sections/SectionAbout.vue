<template>
    <section id="about" class="section about">
        <div>
            <article class="article article-about">
                <h2 class="sub-heading">{{ $t('about.team.heading') }}</h2>
                <p v-for="p in $t('about.team.paragraphs')" :key="p.index">{{p}}</p>
                <i18n path="about.team.more" tag="p">
                    <router-link place="team" class="link-more" to="/team">{{ $t("about.team.team") }}</router-link>
                    <router-link place="jobs" class="link-more" to="/jobs">{{ $t("about.team.jobs") }}</router-link>
                </i18n>
            </article>

            <article class="article article-community">
                <p v-for="p in $t('about.community.paragraphs')" :key="p.index">{{p}}</p>
                <ul class="list meetup-list">
                    <li v-for="meetup in $t('about.community.list')" :key="meetup.index" class="meetup">
                        {{meetup}}
                    </li>
                </ul>
            </article>
        </div>

        <illustration-team/>

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

  .meetup
    margin: .5em 0

</style>
