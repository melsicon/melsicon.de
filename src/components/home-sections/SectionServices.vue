<template>
    <section id="services" class="section services">
        <img src="" alt="" class="illustration">
        <article class="article">
            <h2 class="sub-heading col2">{{ $t('services.about.heading') }}</h2>
            <p v-for="p in $t('services.about.paragraphs')" :key="p.index" class="col2">{{p}}</p>
            <ul class="list service-list col1 row2">
                <li v-for="service in $t('services.services.list')" :key="service.index" class="list-item service">
                    <h4>{{service}}</h4>
                </li>
            </ul>
        </article>
        <article class="article">
            <h3 class="sub-heading">{{ $t('services.clients.heading') }}</h3>
            <p v-for="p in $t('services.clients.paragraphs')" :key="p.index" class="col2">{{p}}</p>
            <ul class="list client-list">
                <li class="client">Deutsche Bahn</li>
                <li class="client">Commerzbank</li>
                <li class="client">Deutsche Bank</li>
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

<style lang="sass" scoped>
  .client 
    display: flex
    align-items: center
    justify-content: center

    svg
      max-height: 3em
      opacity: .8
</style>
