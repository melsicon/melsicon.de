<template>
    <section
        id="services"
        class="section section-services">
        <illustration-services/>
        <article class="article article-intro">
            <h2 class="heading">{{ $t('services.heading') }}</h2>
            <p
                v-for="p in $t('services.paragraphs')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
            <!-- TO DO: ADD ICONS FOR EACH SERVICE? -->
            <ul class="list client-list">
                <li class="service">Idee & Konzept</li>
                <li class="service">Planung & Umsetzung</li>
                <li class="service">Service & Betrieb</li>
            </ul>
        </article>
        <article class="article article-industry">
            <h3 class="sub-heading">{{ $t('services.bank.heading') }}</h3>
            <p
                v-for="p in $t('services.bank.paragraphs')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
            <h3 class="sub-heading">{{ $t('services.transport.heading') }}</h3>
            <p
                v-for="p in $t('services.transport.paragraphs')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
        </article>
        <ul class="list client-list">
            <li class="client"><the-deutschebank/></li>
            <li class="client"><the-commerzbank/></li>
            <!-- <li class="client"><the-amadeus/></li> -->
            <li class="client"><the-db/></li>
        </ul>
    </section>
</template>

<script>
import TheCommerzbank from '@/components/graphics/clients/TheCommerzbank'
import TheDeutschebank from '@/components/graphics/clients/TheDeutschebank'
import TheDb from '@/components/graphics/clients/TheDb'
import TheAmadeus from '@/components/graphics/clients/TheAmadeus'
import IllustrationServices from '@/components/graphics/illustrations/IllustrationServices'
export default {
  components: {
    TheCommerzbank,
    TheDeutschebank,
    TheDb,
    TheAmadeus,
    IllustrationServices
  }
}
</script>

<style lang="sass">

  .section-services
    align-items: center
    margin-bottom: 10em

  .client-list
    display: flex
    text-align: center
    flex-direction: column
    margin: auto

    .client
      margin: .5em 0

  .commerzbank, .deutschebank, .db, .amadeus
    fill: $color-grey
    margin: .5em 0

  .commerzbank
    height: 2.3em

  .deutschebank
    height: 3.5em

  .db
    height: 4em

  .amadeus
    height: 2em

  @media screen and (max-width: 1000px)
    .article-intro
      order: 1

    .article-industry
      order: 3

    .client-list
      order: 4

    .client
      margin: .5em 0

    .illustration-services
      order: 2

</style>
