<template>
    <section class="section section-description">
        <article class="article">
            <h2 class="heading">{{ $t('team.heading') }}</h2>
            <p class="paragraph">{{ $t('team.description') }}</p>
        </article>
        <illustration-team/>
    </section>
</template>

<script>
import IllustrationTeam from '@/components/graphics/illustrations/IllustrationTeam'
export default {
  components: {
    IllustrationTeam
  }
}
</script>
