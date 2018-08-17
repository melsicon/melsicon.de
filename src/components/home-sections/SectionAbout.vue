<template>
    <section id="about" class="section about">
        <illustration-team/>
        <article class="article article-about">
            <h2 class="heading" >{{ $t('about.team.heading') }}</h2>
            <p v-for="p in $t('about.team.paragraphs')" :key="p.index" class="paragraph" >{{p}}</p>
            <i18n path="about.team.more" tag="p">
                <router-link place="team" class="inline-link" to="/team">{{ $t("about.team.team") }}</router-link>
                <router-link place="jobs" class="inline-link" to="/jobs">{{ $t("about.team.jobs") }}</router-link>
            </i18n>
            <!-- <h3 class="sub-heading">{{ $t('about.community.heading') }}</h3> -->
            <p v-for="p in $t('about.community.paragraphs')" :key="p.index" class="paragraph" >{{p}}</p>
            <ul class="list meetup-list" >
                <li v-for="(meetup, key) in $t('about.community.list')" :key="meetup.index" class="meetup">
                    <a :href="meetup" class="meetup-link">{{key}}</a>
                </li>
            </ul>
        </article>
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
    justify-content: center

  .meetup
    margin-right: 2em
    margin-bottom: 1em
    border-radius: .2em
    background: $color-white
    border: .1em solid $color-secondary
    box-shadow: 3px 3px 0 $color-primary
    &:hover
      transform: translate3d(2px, 2px, 0)
      box-shadow: 1px 1px 0 $color-primary
    &:active
      transform: translate3d(3px, 3px, 0)
      box-shadow: 1px 1px 0 $color-white

  .meetup-link
    display: block
    color: $color-secondary
    font-weight: 700
    padding: .15em 1em

  @media screen and (max-width: 1000px)
    .illustration-team
      order: 2

</style>
