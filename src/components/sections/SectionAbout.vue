<template>
    <section id="services" class="section services">
        <article class="article">
            <div class="illustration">
                <temp-illustration/>
            </div>
            <article>
                <h2 class="sub-heading">{{ $t('services.about.heading') }}</h2>
                <p v-for="p in $t('services.about.paragraphs')" :key="p.index" class="right">{{p}}</p>
                <h3 class="sub-heading">{{ $t('services.services.heading') }}</h3>
                <p v-for="p in $t('services.services.paragraphs')" :key="p.index" class="right">{{p}}</p>
            </article>
            <ul class="list service-list span2">
                <li v-for="service in $t('services.services.list')" :key="service.index" class="service">
                    <h4>{{service}}</h4>
                </li>
            </ul>
        </article>
        <article class="article clients">
            <h3 class="sub-heading span2">{{ $t('services.clients.heading') }}</h3>
            <p v-for="p in $t('services.clients.paragraphs')" :key="p.index">{{p}}</p>
            <ul class="list client-list span2">
                <li v-for="client in $t('services.clients.list')" :key="client.index" class="client">
                    <p>{{client}}</p>
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
import TempIllustration from '@/components/TempIllustration'
export default {
  components: {
    TempIllustration
  }
}
</script>
