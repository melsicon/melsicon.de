<template>
  <main class="wrapper">
    <section
      id="imprint"
      class="section section-imprint">
      <!-- IMPRINT -->
      <h1 class="heading heading-imprint">{{ $t('imprint.heading') }}</h1>
      <article class="article article-imprint">
        <!-- COMPANY DETAILS -->
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.main.heading') }}</h2>
        <p>{{ $t('imprint.main.company') }}</p>
        <address class="address">
          <template v-for="content in $t('imprint.main.address')">{{ content }}<br :key="content.index"></template>
        </address>
        <div
          v-for="content in $t('imprint.main.contact')"
          :key="content.index">{{ content }}</div>
        <!-- FOUNDERS -->
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.responsible.heading') }}</h2>
        <p>
          <span
            v-for="content in $t('imprint.responsible.people')"
            :key="content.index"
            class="imprint-p">{{ content }}</span>
        </p>
        <!-- COMPANY REGISTRATION -->
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.register.heading') }}</h2>
        <p>{{ $t('imprint.register.desc') }}</p>
        <!-- TAX ID NUMBER -->
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.USt-IdNr.heading') }}</h2>
        <p>{{ $t('imprint.USt-IdNr.desc') }}</p>
        <!-- COPYRIGHT -->
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.copyright.heading') }}</h2>
        <p>{{ $t('imprint.copyright.desc') }}</p>
      </article>
      <article class="article article-imprint">
        <!-- CONTENT DISCLAIMER -->
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.content.heading') }}</h2>
        <p>{{ $t('imprint.content.desc') }}</p>
        <!-- EXTERNAL LINKS DISCLAIMER -->
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.links.heading') }}</h2>
        <p>{{ $t('imprint.links.desc') }}</p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Imprint',
  head() {
    return {
      title: 'melsicon - Impressum'
    }
  }
}
</script>

<style lang="sass" scoped>
  .sub-heading
    font-size: 1.2em
</style>


<style lang="sass">

  .section-imprint
    min-height: 50vh
    padding: 5em 0

  .article-imprint
    @include small
      flex-basis: 100%

  .article-imprint:first-of-type
    padding-right: 1rem
    @include small
      padding: 0

  .article-imprint:last-of-type
    padding-left: 1rem
    @include small
      padding: 0

  .heading-imprint
    flex-basis: 100%
    padding: 1rem 0
    @include small
      padding: 0

</style>
