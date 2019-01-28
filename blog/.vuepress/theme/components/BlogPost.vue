<template>
  <article>
    <h1 class="single-post-heading">{{ title }}</h1>
    <Content/>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

