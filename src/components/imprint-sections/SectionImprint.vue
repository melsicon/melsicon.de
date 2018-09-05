<template>
    <section
        id="services"
        class="section section-imprint">
        <!-- IMPRINT -->
        <h2 class="heading heading-imprint">{{ $t('imprint.heading') }}</h2>
        <article class="article article-imprint">
            <!-- COMPANY DETAILS -->
            <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.main.heading') }}</h3>
            <p>{{ $t('imprint.main.company') }}</p>
            <p>
                <span
                    v-for="content in $t('imprint.main.address')"
                    :key="content.index"
                    class="imprint-p">{{ content }}</span>
            </p>
            <p>
                <span
                    v-for="content in $t('imprint.main.contact')"
                    :key="content.index"
                    class="imprint-p">{{ content }}</span>
            </p>
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
            <p>{{ $t('imprint.register.info') }}</p>
            <!-- TAX ID NUMBER -->
            <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.USt-IdNr.heading') }}</h3>
            <p>{{ $t('imprint.USt-IdNr.info') }}</p>
        </article>
        <article class="article article-imprint">
            <!-- CONTENT DISCLAIMER -->
            <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.content.heading') }}</h3>
            <p>{{ $t('imprint.content.info') }}</p>
            <!-- EXTERNAL LINKS DISCLAIMER -->
            <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.links.heading') }}</h3>
            <p>{{ $t('imprint.links.info') }}</p>
            <!-- COPYRIGHT -->
            <h3 class="sub-heading sub-heading-imprint">{{ $t('imprint.copyright.heading') }}</h3>
            <p>{{ $t('imprint.copyright.info') }}</p>
        </article>
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

  .section-imprint
    min-height: 50vh
    padding: 5em 0

  .article-imprint
    @include medium
      flex-basis: 100%

  .heading-imprint
    flex-basis: 100%
    padding: 1rem
    @include small
      padding: 0

  .sub-heading-imprint
    margin-top: 2rem
    @include small
      margin-top: 0

  .imprint-p
    display: block

</style>
