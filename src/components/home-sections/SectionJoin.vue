<template>
    <section
        id="join"
        class="section section-join">
        <illustration-join/>
        <article class="article article-join">
            <h2 class="heading">{{ $t('about.join.heading') }}</h2>
            <p class="paragraph">{{ $t('about.join.description') }}</p>
        </article>
        <article class="article article-benefits">
            <h3 class="sub-heading">{{ $t('about.join.benefits.heading') }}</h3>
            <p class="paragraph">{{ $t('about.join.benefits.description') }}</p>
        </article>
        <article class="article article-community">
            <div class="community">
                <h3 class="sub-heading">{{ $t('about.join.community.heading') }}</h3>
                <p class="paragraph">{{ $t('about.join.community.description') }}</p>
            </div>
            <ul class="list meetup-list">
                <li
                    v-for="(meetup, key) in $t('about.join.community.meetups')"
                    :key="meetup.index"
                    class="meetup">
                    <a
                        :href="meetup"
                        class="meetup-link">{{ key }}</a>
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
import IllustrationJoin from '@/components/graphics/illustrations/IllustrationJoin'
export default {
  components: {
    IllustrationJoin
  }
}
</script>

<style lang="sass" scoped>

  .article-join
    align-self: center

  .illustration-join
    padding: 0 5em
    @media screen and (max-width: 500px)
      padding: 0 2em

  .meetup-list
    display: flex
    flex-wrap: wrap
    margin-top: 1em

  .meetup
    margin-right: 1em

  .meetup-link
    display: block
    color: $color-black
    padding: 0 .1em
    border-bottom: .1em solid $color-secondary

  @media screen and (max-width: 1000px)
    .article-join
      order: 0

    .illustration-join
      order: 1

    .article-benefits
      order: 2

    .article-community
      order: 3

</style>
