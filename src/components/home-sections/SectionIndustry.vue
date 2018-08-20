<template>
    <section
        id="industry"
        class="section section-industry">
        <article class="article article-bank">
            <h2 class="heading">{{ $t('services.bank.heading') }}</h2>
            <p
                v-for="p in $t('services.bank.paragraphs')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
            <ul class="list client-list">
                <li class="client"><the-deutschebank/></li>
                <li class="client"><the-commerzbank/></li>
                <li class="client"><the-db/></li>
            </ul>
        </article>
        <illustration-industry/>
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
