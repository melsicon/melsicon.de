<template>
  <main class="blog-content">
    <!-- TODO: add current active filter here, and option to remove -->
    <p v-if="typeof(byAuthor) !== 'boolean'">Showing posts by: {{ byAuthor }}</p>
    <p v-if="typeof(byAuthor) !== 'boolean'" @click="byAuthor = false">Remove filter</p>
    <!-- TODO: Add twitter timeline -->
    <twitter-timeline class="twitter-timeline"/>
    <div class="blog-post-previews">
      <blog-preview
        v-for="post in posts"
        :key="post.index"
        :post="post"
        @filter-author="filterAuthor"/>
    </div>

  </main>
</template>

<script>
  import TwitterTimeline from '../components/TwitterTimeline'
  import BlogPreview from '../components/BlogPreview'
  export default {
    name: 'ListLayout',
    components: {
      TwitterTimeline,
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

<style lang="sass" scoped>

  .blog-content
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-areas: 'twitter blog'
    gap: 2em
    margin: 0 auto
    padding: 0 1em
    padding-bottom: 4em
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
