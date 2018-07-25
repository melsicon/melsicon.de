<template>
    <section id="contact" class="section contact">
        <article class="article">
            <h2 class="sub-heading span2">{{ $t('contact.heading') }}</h2>
            <p v-for="p in $t('contact.paragraphs')" :key="p.index">{{p}}</p>
            <span class="btn-wrap"><button class="btn btn-cta">{{ $t('buttons.contact') }}</button></span>
        </article>
        <div class="illustration"/>
    </section>
</template>
