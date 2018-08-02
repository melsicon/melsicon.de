<template>
    <section id="services" class="section section-services">
        <img src="" alt="" class="illustration service-illustration">
        <article class="article">
            <h2 class="sub-heading">{{ $t('services.about.heading') }}</h2>
            <p v-for="p in $t('services.about.paragraphs')" :key="p.index">{{p}}</p>
            <ul class="list service-list">
                <li v-for="service in $t('services.services.list')" :key="service.index" class="list-item service">{{service}}</li>
            </ul>
            <h3 class="sub-heading">{{ $t('services.clients.heading') }}</h3>
            <p v-for="p in $t('services.clients.paragraphs')" :key="p.index" >{{p}}</p>
        </article>

        <article class="article article-bank">
            <h3 class="sub-heading">{{ $t('services.bank.heading') }}</h3>
            <p v-for="p in $t('services.bank.paragraphs')" :key="p.index" >{{p}}</p>
        </article>
        <ul class="list client-list">
            <li class="client">
                <the-deutschebank/>
            </li>
            <li class="client">
                <the-commerzbank/>
            </li>
        </ul>
        <img src="" alt="" class="illustration">
        <article class="article article-transport">
            <h3 class="sub-heading">{{ $t('services.transport.heading') }}</h3>
            <p v-for="p in $t('services.transport.paragraphs')" :key="p.index" >{{p}}</p>
            <ul class="list client-list">
                <li class="client">
                    <the-db/>
                </li>
            </ul>
        </article>
        
    </section>
</template>

<script>
import TheCommerzbank from '@/components/graphics/clients/TheCommerzbank'
import TheDeutschebank from '@/components/graphics/clients/TheDeutschebank'
import TheDb from '@/components/graphics/clients/TheDb'
export default {
  components: {
    TheCommerzbank,
    TheDeutschebank,
    TheDb
  }
}
</script>

<style lang="sass">

  .section-services
    grid-row-gap: 1.5em

  .service-illustration
    grid-row: 1

  .client-list
    flex-direction: column
    justify-content: space-around
    margin: 0 auto

    .client
      margin: 1em 0
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
    height: 4em

</style>
