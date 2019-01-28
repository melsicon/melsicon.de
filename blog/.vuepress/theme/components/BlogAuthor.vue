<template>
  <aside>
    <div class="info-basic">
      <img
        class="author-img author-img-single"
        :src="`/profiles/${author.img}`"
        :alt="author.name">
      <h3 class="author-name">{{ $page.frontmatter.author }}</h3>
      <p class="author-title">{{ author.title }}</p>
      <ul class="social-media-list">
        <li class="social-media-item" v-for="(link, key) in author.links">
          <a :href="link">
            <img class="social-icon" aria-hidden="true" :src="`/social/${key}.svg`">
          </a>
        </li>
      </ul>
    </div>
    <h4 id="author-posts-title">Ebenfalls von {{ firstName }}:</h4>
    <ul class="author-posts-list" aria-labelledby="author-posts-title">
      <li v-for="post in authorPosts">
        <router-link class="post-link" :to="post.path">{{post.title}}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
      default() {
        return false
      }
    }
  },
  computed: {
    firstName(){
      return this.author.name.match(/[^\s]+/)[0]
    },
    authorPosts(){
      return this.$site.pages
          .filter(x => x.path.startsWith('/posts/') && !x.frontmatter.template)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
          .filter(post => post.frontmatter.author === this.author.name && post.title !== this.$page.title)
    }
  }
}
</script>

<style lang="sass">
  .info-basic
    text-align: center
    border-bottom: 1px solid #eaecef
    padding-bottom: .5em
    margin-bottom: 1em

  .author-img-single
    margin-bottom: .5em

  .author-name
    font-size: 1.2em
    font-weight: 600
    margin: 0

  .author-title
    font-size: .9em

  .social-media-list
    list-style-type: none
    display: flex
    justify-content: center
    margin: 0
    padding: 0

    .social-media-item:not(:last-child)
      margin-right: 1em

  .social-icon
    color: #6464E1
    height: .9em

  #author-posts-title
    margin-top: .5em
    font-weight: normal

  .author-posts-list
    margin: 0

  .post-link
    color: #333
</style>


