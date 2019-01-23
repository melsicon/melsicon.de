<template>
  <section class="section section-error">
    <!-- TODO: Insert 404 illustration -->
    <h2 class="error-heading">{{ $t('error.heading') }}</h2>
    <p>{{ $t('error.desc') }}
      <i18n
        path="error.action"
        tag="div"
        class="paragraph-error">
        <nuxt-link
          class="inline-link error-link"
          place="back"
          to="/">{{ $t('error.back') }}</nuxt-link>
      </i18n>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: 'ErrorLayout'
}
</script>

<style lang="sass" scoped>

.section-error
  display: flex
  min-height: 100vh
  text-align: center
  margin: auto;
  flex-direction: column
  padding-bottom: 3em
  padding: 5em 0

.error-heading
  color: $color-black
  font-size: 4em
  font-weight: 200
  margin: 0
  margin-bottom: 0

.error-link
  color: $color-primary-darker

.paragraph-error
  color: $color-black

</style>
