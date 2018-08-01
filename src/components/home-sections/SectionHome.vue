<template>
    <section id="home" class="section home">
        <article class="article d-contents">
            <h1 class="main-heading span-full">{{ $t('home.heading') }}</h1>
            <p v-for="p in $t('home.paragraphs')" :key="p.index">{{p}}</p>
            <a href="#services" class="link-more">{{ $t('buttons.more') }}</a>
            <img src="" alt="" class="illustration illustration-home">
        </article>
    </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="sass" scoped>

  .home
    padding: 5em 0

  .link-more
    grid-column: 1

</style>
