<template>
    <section class="section team">
        <article class="article">
            <article>
                <h2 class="sub-heading span2r">{{team.title}}</h2>
                <p v-for="paragraph in team.paragraphs" :key="paragraph.index" class="right">{{paragraph}}</p>
            </article>
            <div class="illustration">
                <div/>
            </div>
            <div class="illustration">
                <div/>
            </div>
            <article>
                <h3 class="sub-heading span2r">{{team.subtitle}}</h3>
                <p v-for="paragraph in team.paragraphs" :key="paragraph.index" class="right">{{paragraph}}</p>
            </article>
        </article>
    </section>
</template>

<script>
export default {
  name: 'Team',
  data: () => ({
    team: {
      title: 'Our team and values',
      subtitle: 'Join the family',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      ]
    }
  })
}
</script>
