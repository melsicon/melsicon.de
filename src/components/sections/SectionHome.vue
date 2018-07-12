<template>
    <article class="article-section introduction">
        <h1 class="main-heading">{{title}}</h1>
        <p>{{description}}</p>
    </article>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    title: 'Draw the audience in with a fancy heading, like a baws',
    description:
      'Lorem ipsum dolor sit ame, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })
}
</script>

<style lang="sass">

  .introduction
    margin-top: 8rem

  .main-heading
    grid-column: 1 / -1
    font-size: 3.2rem
    margin-top: 2rem
    margin-bottom: 1.5rem
    max-width: 30ch

</style>
