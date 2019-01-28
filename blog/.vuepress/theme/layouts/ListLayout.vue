<template>
  <main class="blog-list">
    <!-- TODO: add current active filter here, and option to remove -->
    <p v-if="typeof(byAuthor) !== 'boolean'">Showing posts by: {{ byAuthor }}</p>
    <p v-if="typeof(byAuthor) !== 'boolean'" @click="byAuthor = false">Remove filter</p>
    <blog-preview v-for="post in posts" :key="post.index" :post="post" @filter-author="filterAuthor"/>
  </main>
</template>

<script>
  import BlogPreview from '../components/BlogPreview'
  export default {
    name: 'ListLayout',
    components: {
      BlogPreview
    },
    data() {
      return {
        byAuthor: false
      }
    },
    watch: {
      posts(){
        return this.posts
      }
    },
    computed: {
      posts(){
        const posts = this.$site.pages
          .filter(x => x.path.startsWith('/posts/') && !x.frontmatter.template)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
        const withAuthor = posts.map(post => {
          const author = this.$site.themeConfig.authors
                  .find(author => author.name === post.frontmatter.author)
          return {...post, author}
        })
        return typeof(this.byAuthor) === 'boolean' ? withAuthor : withAuthor.filter(post => post.author.name === this.byAuthor)
      }
    },
    methods: {
      filterAuthor(author) {
        this.byAuthor = author
      }
    }
  }
</script>

<style lang="sass">

  .blog-list
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 1em
    max-width: 1000px
    margin: 0 auto
    padding: 5em 0
    @media screen and (max-width: 768px)
      grid-template-columns: 1fr

  .blog-excerpt
    margin: 0

  .meta-info
    font-size: .9em

  .read-more
    display: inline-block

  .list-heading
    grid-column: 1/-1
    font-size: 2.4em
    font-weight: 300

  .post-heading
    font-size: 2em
    margin: 0
    font-weight: 300


</style>
