<template>
    <section
        id="services"
        class="section section-services">
        <!-- ILLUSTRATION ON LARGE SCREENS -->
        <illustration-services v-if="$mq === 'lg'"/>
        <article class="article article-intro">
            <!-- INTRO TO OUR SERVICES -->
            <h2 class="heading">{{ $t('services.heading') }}</h2>
            <p
                v-for="p in $t('services.description')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
        </article>
        <article class="article article-industry">
            <!-- ILLUSTRATION ON MEDIUM SCREENS -->
            <illustration-services
                v-if="$mq === 'md'"
                :class="{'illustration-medium': $mq === 'md'}"/>
            <!-- ABOUT OUR BANK INDUSTRY EXPERTISE -->
            <h3 class="sub-heading">{{ $t('services.bank.heading') }}</h3>
            <p
                v-for="p in $t('services.bank.description')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
            <!-- ABOUT OUR TRANSPORTATION INDUSTRY EXPERTISE -->
            <h3 class="sub-heading">{{ $t('services.transport.heading') }}</h3>
            <p
                v-for="p in $t('services.transport.description')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
        </article>
        <!-- OUR CLIENTS -->
        <ul class="list client-list">
            <li
                v-for="client in $t('services.clients')"
                :key="client.index"
                class="client">
                <img
                    v-lazy="client.src"
                    :class="client.title"
                    :alt="client.title">
            </li>
        </ul>
    </section>
</template>

<script>
import IllustrationServices from '@/components/graphics/illustrations/IllustrationServices'
export default {
  components: {
    IllustrationServices
  }
}
</script>

<style lang="sass">

  .section-services
    align-items: center

  .client-list
    text-align: center
    margin: auto
    flex-basis: 50%
    width: 100%
    height: 100%
    @include small
      flex-basis: 100%

    .client
      margin: 1.5em 0

  .commerzbank
    max-height: 2.3em

  .deutschebank
    max-height: 3.5em

  .deutschebahn
    max-height: 4em

  .amadeus
    max-height: 2em

</style>
