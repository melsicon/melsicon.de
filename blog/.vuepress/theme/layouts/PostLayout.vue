<template>
  <main class="blog-content">
    <article class="blog-post blog-post-single">
      <div class="author-info">
        <img
          class="author-img author-img-single"
          :src="`/profiles/${author.img}`"
          alt="">
        <h3 class="author-name">{{ $page.frontmatter.author }}</h3>
        <p class="author-title">{{ author.title }}</p>
        <ul class="social-media-list">
          <li class="social-media-item" v-for="(link, key) in author.links">
            <a :href="link">
              <img class="social-icon" aria-hidden="true" :src="`/social/${key}.svg`">
            </a>
          </li>
        </ul>
        <!-- TODO: Add list of other posts by same author -->
      </div>
      <div class="main-content">
        <h1 class="single-post-heading">{{ $page.frontmatter.title }}</h1>
        <div class="post-tags">
          tags: <span>{{ $page.frontmatter.tags }}</span>
        </div>
        <time>{{ $page.frontmatter.date }}</time>
        <Content/>
      </div>
      <!-- TODO: add next + preview post links -->
    </article>
  </main>
</template>

<script>
  export default {
    name: 'PostLayout',
    data: () => ({
      author: {}
    }),
    mounted(){
      this.findAuthor()
    },
    methods: {
      findAuthor(){
        const authorMatch = this.authors.find(author => author.name === this.$page.frontmatter.author)
        this.author = authorMatch
      }
    },
    computed: {
      authors(){
        return this.$site.themeConfig.authors
      }
    }
  }
</script>

<style lang="sass" scoped>

.blog-post-single
  max-width: 1000px
  margin: 0 auto
  @media screen and (max-width: 768px)
    flex-wrap: wrap

.author-info
  display: flex
  flex-direction: column
  text-align: center
  margin-right: 2em
  min-width: 250px
  @media screen and (max-width: 768px)
    margin: 0 auto

  .author-img-single
    margin: 0 auto
    height: 6em
    width: 6em

.single-post-heading
  font-weight: 300
  font-size: 2.4em

.author-name
  font-size: 1.2em
  font-weight: 600
  margin-top: .5em
  margin-bottom: 0

.social-media-list
  list-style-type: none
  display: flex
  justify-content: center
  margin: 0
  padding: .5em 0

.social-icon
  color: blue
  height: .9em
  margin: 0 .5em

</style>