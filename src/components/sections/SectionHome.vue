<template>
    <section id="home" class="section home">
        <article class="article">
            <h1 class="main-heading">{{ $t('home.heading') }}</h1>
            <p v-for="p in $t('home.paragraphs')" :key="p.index">{{p}}</p>
            <span class="span2 btn-wrap"><button>Contact us</button></span>
        </article>
    </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>
