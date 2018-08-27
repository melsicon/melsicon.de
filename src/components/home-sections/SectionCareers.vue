<template>
    <section
        id="careers"
        class="section section-careers">
        <illustration-careers/>
        <article class="article article-careers">
            <h2 class="heading">{{ $t('about.careers.heading') }}</h2>
            <p class="paragraph">{{ $t('about.careers.description') }}</p>
            <ul class="list job-list">
                <li
                    v-for="job in $t('about.careers.open')"
                    :key="job.index"
                    class="job">
                    <a
                        :href="job.url"
                        class="item-link">
                        <font-awesome-icon
                            :icon="['fas', 'angle-right']"
                            aria-role="img"
                            aria-hidden="true"
                            fixed-width
                            class="item-icon"/>
                        {{ job.title }}

                    </a>
                </li>
            </ul>
            <h3 class="sub-heading">{{ $t('about.careers.benefits.heading') }}</h3>
            <p class="paragraph">{{ $t('about.careers.benefits.description') }}</p>
            <!-- <h3 class="sub-heading">{{ $t('about.careers.community.heading') }}</h3> -->
            <p class="paragraph">{{ $t('about.careers.community.description') }}</p>
            <ul class="list meetup-list">
                <li
                    v-for="(meetup, key) in $t('about.careers.community.meetups')"
                    :key="meetup.index"
                    class="meetup">
                    <a
                        :href="meetup"
                        class="item-link">
                        <font-awesome-icon
                            :icon="['fas', 'angle-right']"
                            aria-role="img"
                            aria-hidden="true"
                            fixed-width
                            class="item-icon"/>
                        {{ key }}
                    </a>
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
import IllustrationCareers from '@/components/graphics/illustrations/IllustrationCareers'
export default {
  components: {
    IllustrationCareers
  }
}
</script>

<style lang="sass" scoped>

  .section-careers
    margin-top: 0

  .article-careers
    align-self: center

  .illustration-careers
    align-self: center
    padding: 0 3em
    @include medium
      padding: 0 3em
    @include small
      padding: 0 2em

  .job-list
    display: block
    margin-bottom: 1em

  .meetup-list
    display: flex
    flex-wrap: wrap
    margin-top: 1em

  .meetup, .job
    margin-right: 1em

  .item-link
    display: flex
    align-items: center
    color: $color-primary
    font-weight: 600
    transition: all .3s ease-in-out
    &:hover
      color: $color-primary

  .item-icon
    font-size: .8em
    margin-top: .15em

  @include small
    .article-careers
      order: 0

    .illustration-careers
      order: 1

    .article-benefits
      order: 2

    .article-community
      order: 3

</style>
