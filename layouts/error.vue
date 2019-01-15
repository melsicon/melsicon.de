<template>
  <section class="section section-error">
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
