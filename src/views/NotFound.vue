<template>
    <main class="wrapper wrapper-404">
        <section class="section section-404">
            <h2 class="error-heading">{{ $t('error.heading') }}</h2>
            <p class="paragraph-error">{{ $t('error.desc') }}</p>
            <i18n
                path="error.action"
                tag="p"
                class="paragraph-error">
                <router-link
                    class="inline-link error-link"
                    place="back"
                    to="/">{{ $t('error.back') }}</router-link>
            </i18n>
        </section>
    </main>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style lang="sass" scoped>

  .wrapper-404
    display: flex
    margin: auto
    min-height: 60vh

  .section-404
    display: flex
    text-align: center
    margin: auto;
    flex-direction: column
    padding-bottom: 3em
    padding: 5em 0

  .error-heading
    color: $color-white
    font-size: 4.5em
    font-weight: 200
    margin: 0
    margin-bottom: 0

  .error-link
    color: $color-white

  .paragraph-error
    color: $color-white

</style>
