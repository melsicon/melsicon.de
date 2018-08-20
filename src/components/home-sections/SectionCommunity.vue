<template>
    <section
        id="industry"
        class="section section-industry">
        <article class="article article-bank">
            <p
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
            </ul>
        </article>
    </section>
</template>

<script>
import TheCommerzbank from '@/components/graphics/clients/TheCommerzbank'
import TheDeutschebank from '@/components/graphics/clients/TheDeutschebank'
import TheDb from '@/components/graphics/clients/TheDb'
import IllustrationServices from '@/components/graphics/illustrations/IllustrationServices'
import IllustrationIndustry from '@/components/graphics/illustrations/IllustrationIndustry'
export default {
  components: {
    TheCommerzbank,
    TheDeutschebank,
    TheDb,
    IllustrationServices,
    IllustrationIndustry
  }
}
</script>

<style lang="sass">

  .section-services
    margin-bottom: 20vh

  .client-list
    display: flex
    text-align: center
    flex-direction: column
    margin: auto

    .client
      margin: .5em 0
      @media screen and (max-width: 768px)
        margin: .5em 0

  .commerzbank, .deutschebank, .db
    fill: $color-grey
    margin: .5em 0

  .commerzbank
    height: 2.3em

  .deutschebank
    height: 3.5em

  .db
    height: 3em

</style>
