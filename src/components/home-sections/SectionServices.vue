<template>
    <section
        id="services"
        class="section section-services">
        <illustration-services/>
        <article class="article">
            <h2 class="heading">{{ $t('services.heading') }}</h2>
            <p
                v-for="p in $t('services.paragraphs')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
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
    grid-row-gap: 1.5em

  .client-list
    display: flex
    text-align: center
    flex-direction: column
    margin: auto

    .client
      margin: .5em 0

  .commerzbank, .deutschebank, .db
    fill: $color-grey
    margin: .5em 0

  .commerzbank
    height: 2.3em

  .deutschebank
    height: 3.5em

  .db
    height: 4em

  @media screen and (max-width: 1000px)
    .client
      margin: .5em 0

    .illustration-services
      order: 2

</style>
