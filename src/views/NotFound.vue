<template>
    <main class="wrapper wrapper-404">
        <section class="section section-404">
            <h2 class="error-heading">{{ $t('error.heading') }}</h2>
            <p class="error-description">{{ $t('error.description') }}</p>
            <!-- <button class="btn btn-back">{{ $t('error.back') }}</button> -->
            <i18n
                path="error.action"
                tag="p">
                <router-link
                    class="inline-link"
                    place="back"
                    to="/#home">{{ $t('error.back') }}</router-link>
            </i18n>
        </section>
    </main>
</template>

<script>
export default {
  name: '404'
}
</script>

<style lang="sass" scoped>

  .wrapper-404
    display: flex
    margin: auto
    min-height: 70vh

  .section-404
    display: flex
    text-align: center
    margin: auto;
    flex-direction: column
    padding-bottom: 3em

  .error-heading
    color: $color-black
    font-size: 4.5em
    font-weight: 200
    margin: 0
    margin-bottom: 0

</style>
