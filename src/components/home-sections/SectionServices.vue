<template>
    <section id="services" class="section services">
        <img src="" alt="" class="illustration service-illustration">
        <article class="article">
            <h2 class="sub-heading">{{ $t('services.about.heading') }}</h2>
            <p v-for="p in $t('services.about.paragraphs')" :key="p.index">{{p}}</p>
            <ul class="list service-list">
                <li v-for="service in $t('services.services.list')" :key="service.index" class="list-item service">{{service}}</li>
            </ul>
            <p v-for="p in $t('services.clients.paragraphs')" :key="p.index" >{{p}}</p>
        </article>
        <div/>
        <article class="article article-bank">
            <h3 class="sub-heading">{{ $t('services.bank.heading') }}</h3>
            <p v-for="p in $t('services.bank.paragraphs')" :key="p.index" >{{p}}</p>
        </article>
        <ul class="list client-list">
            <li class="client">Commerzbank</li>
            <li class="client">Deutsche Bank</li>
        </ul>
        <img src="" alt="" class="illustration">
        <article class="article article-transport">
            <h3 class="sub-heading">{{ $t('services.transport.heading') }}</h3>
            <p v-for="p in $t('services.transport.paragraphs')" :key="p.index" >{{p}}</p>
            <ul class="list client-list">
                <li class="client">Deutsche Bahn</li>
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

  .article-bank, .article-transport
    padding: 2em 0

  .service-illustration
    grid-row: 1 / -3
  
  .client-list
    justify-content: space-around
    margin: auto

    .client
      margin: 0 1em

</style>
