<template>
  <article class="blog-post-preview">
    <img
      class="author-img"
      :src="`/profiles/${post.author.img}`"
      :alt="post.author.name">
      <div class="post-content">
        <h2 class="post-heading">{{ post.frontmatter.title }}</h2>
        <!-- TODO: Add link to show all posts by author -->
        <div class="meta-info">
          von <span class="meta-author" @click="$emit('filter-author', post.frontmatter.author)">{{ post.frontmatter.author }}</span> am <time :datetime="post.frontmatter.date">{{new Date(post.frontmatter.date).toLocaleDateString('de-DE')}}</time>
        </div>
        <p class="blog-excerpt">{{ post.frontmatter.excerpt }}</p>
        <router-link :to="post.path" class="read-more">Mehr lesen...</router-link>
      </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default(){
        return
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  .blog-post-preview
    display: flex
    align-items: center
    margin-bottom: 1.5em

  .post-heading
    margin: 0
    font-size: 2.4rem
    font-weight: 300

  .meta-author
    font-weight: 600
    cursor: pointer

  .blog-excerpt
    margin: 0

  .author-img
    height: 4.5em
    width: 4.5em
    margin-top: .5em
    margin-bottom: .5em
    margin-right: 1em

</style>


