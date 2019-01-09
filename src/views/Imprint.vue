<template>
    <main class="wrapper">
        <section
            id="services"
            class="section section-imprint">
            <!-- IMPRINT -->
            <h2 class="heading heading-imprint">{{ $t('imprint.heading') }}</h2>
            <article class="article article-imprint">
                <!-- COMPANY DETAILS -->
                <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.main.heading') }}</h3>
                <p>{{ $t('imprint.main.company') }}</p>
                <address class="address">
                    <template v-for="content in $t('imprint.main.address')">{{ content }}<br :key="content.index"></template>
                </address>
                <div
                    v-for="content in $t('imprint.main.contact')"
                    :key="content.index">{{ content }}</div>
                <!-- FOUNDERS -->
                <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.responsible.heading') }}</h3>
                <p>
                    <span
                        v-for="content in $t('imprint.responsible.people')"
                        :key="content.index"
                        class="imprint-p">{{ content }}</span>
                </p>
                <!-- COMPANY REGISTRATION -->
                <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.register.heading') }}</h3>
                <p>{{ $t('imprint.register.desc') }}</p>
                <!-- TAX ID NUMBER -->
                <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.USt-IdNr.heading') }}</h3>
                <p>{{ $t('imprint.USt-IdNr.desc') }}</p>
                <!-- COPYRIGHT -->
                <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.copyright.heading') }}</h3>
                <p>{{ $t('imprint.copyright.desc') }}</p>
            </article>
            <article class="article article-imprint">
                <!-- CONTENT DISCLAIMER -->
                <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.content.heading') }}</h3>
                <p>{{ $t('imprint.content.desc') }}</p>
                <!-- EXTERNAL LINKS DISCLAIMER -->
                <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.links.heading') }}</h3>
                <p>{{ $t('imprint.links.desc') }}</p>
            </article>
        </section>
    </main>
</template>

<script>
export default {
  name: 'Imprint'
}
</script>

<style lang="sass">

  .section-imprint
    min-height: 50vh
    padding: 5em 0

  .article-imprint
    @include medium
      flex-basis: 100%

  .heading-imprint
    flex-basis: 100%
    padding: 1rem 0
    @include small
      padding: 0

</style>
