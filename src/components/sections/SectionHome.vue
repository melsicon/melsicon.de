<template>
    <section class="section intro">
        <article class="article">
            <h1 class="main-heading">{{title}}</h1>
            <p>{{description}}</p>
            <span class="span2 btn-wrap"><button>Contact us</button></span>
        </article>
    </section>
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
