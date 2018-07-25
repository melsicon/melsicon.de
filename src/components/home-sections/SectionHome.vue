<template>
    <section id="home" class="section home">
        <article class="article d-contents">
            <h1 class="main-heading span-full">{{ $t('home.heading') }}</h1>
            <p v-for="p in $t('home.paragraphs')" :key="p.index">{{p}}</p>
            <span class="span2 btn-wrap"><button class="btn btn-more">Learn more</button></span>
        </article>
    </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>
