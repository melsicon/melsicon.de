<template>
  <main class="blog-content content post-layout">
    <blog-author class="blog-author" :author="author"/>
    <blog-post class="blog-post" :title="$page.frontmatter.title"/>
    <div class="blog-footer"></div>
  </main>
</template>

<script>
  import BlogAuthor from '../components/BlogAuthor'
  import BlogPost from '../components/BlogPost'
  export default {
    name: 'PostLayout',
    components: {
      BlogAuthor,
      BlogPost
    },
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

<style lang="sass">

  .post-layout
    display: grid
    grid-template-columns: minmax(min-content,300px) auto
    grid-template-areas: 'author content' 'author footer'
    gap: 1em
    @media screen and (max-width: 768px)
      grid-template-columns: 1fr
      grid-template-areas: 'author' 'content' 'footer'

  .breadcrumbs
    grid-area: breadcrumbs

  .blog-post
    max-width: 800px

  .blog-footer
    height: 200px

</style>


