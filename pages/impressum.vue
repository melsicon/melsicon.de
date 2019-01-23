<template>
  <main class="wrapper">
    <section
      id="imprint"
      class="section section-imprint">
      <!-- IMPRINT -->
      <h1 class="heading heading-imprint">{{ $t('imprint.heading') }}</h1>
      <!-- COMPANY DETAILS -->
      <article>
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.main.heading') }}</h2>
        <p>{{ $t('imprint.main.company') }}</p>
        <address class="address">
          <template v-for="content in $t('imprint.main.address')">{{ content }}<br :key="content.index"></template>
        </address>
        <div
          v-for="content in $t('imprint.main.contact')"
          :key="content.index">{{ content }}</div>
      </article>

      <!-- FOUNDERS -->
      <article>
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.responsible.heading') }}</h2>
        <p>
          <span
            v-for="content in $t('imprint.responsible.people')"
            :key="content.index"
            class="imprint-p">{{ content }}</span>
        </p>
      </article>
      <!-- COMPANY REGISTRATION -->
      <article>
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.register.heading') }}</h2>
        <p>{{ $t('imprint.register.desc') }}</p>
        <!-- TAX ID NUMBER -->
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.USt-IdNr.heading') }}</h2>
        <p>{{ $t('imprint.USt-IdNr.desc') }}</p>
        <!-- COPYRIGHT -->
        <h2 class="sub-heading sub-heading-imprint">{{ $t('imprint.copyright.heading') }}</h2>
        <p>{{ $t('imprint.copyright.desc') }}</p>
      </article>
      <!-- CONTENT DISCLAIMER -->
      <article>
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

  #imprint
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-flow: dense
    gap: 1em
    min-height: 50vh
    padding-top: 5em
    padding-bottom: 3em
    @include small
      grid-template-columns: 1fr

  .heading-imprint
    grid-column: 1/-1

</style>
