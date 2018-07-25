<template>
    <section id="community" class="section community">
        <article class="article d-contents">
            <h2 class="sub-heading span-full center">{{ $t('community.heading') }}</h2>
            <p v-for="p in $t('community.paragraphs')" :key="p.index">{{p}}</p>
            <ul class="list meetup-list span-full">
                <li v-for="meetup in $t('community.list')" :key="meetup.index" class="meetup">
                    <p>{{meetup}}</p>
                </li>
            </ul>
        </article>
        <div class="illustration span2">
            <temp-illustration/>
        </div>
    </section>
</template>

<script>
import TempIllustration from '@/components/TempIllustration'
export default {
  components: {
    TempIllustration
  }
}
</script>
