<template>
    <section
        id="services"
        class="section section-services">
        <illustration-services v-if="$mq === 'lg'"/>
        <article class="article article-intro">
            <h2 class="heading">{{ $t('services.heading') }}</h2>
            <p
                v-for="p in $t('services.paragraphs')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
        </article>
        <article class="article article-industry">
            <illustration-services 
                v-if="$mq === 'md'" 
                :class="{'illustration-medium': $mq === 'md'}"/>
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
            <li class="client"><the-amadeus/></li>
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
    margin-bottom: 5em
    @include small
      margin-bottom: 2em

  .illustration-services
    padding: 0 2em

  .client-list
    text-align: center
    margin: auto
    flex-basis: 50%
    width: 100%
    height: 100%
    @include small
      flex-basis: 100%

    .client
      margin: .5em 0

  .client-logo
    fill: $color-grey
    margin: .5em 0

  .commerzbank
    max-height: 2.3em

  .deutschebank
    max-height: 3.5em

  .db
    max-height: 4em

  .amadeus
    max-height: 2em

</style>
