<template>
    <section id="community" class="section community">
        <article class="article">
            <h2 class="sub-heading span2 center">{{ $t('community.heading') }}</h2>
            <p v-for="p in $t('community.paragraphs')" :key="p.index">{{p}}</p>
            <ul class="list meetup-list span2">
                <li v-for="meetup in $t('community.list')" :key="meetup.index" class="meetup">
                    <p>{{meetup}}</p>
                </li>
            </ul>
            <div class="illustration span2">
                <div/>
            </div>
        </article>
    </section>
</template>
