<template>
  <main class="blog-content blog-home">
    <header class="header">
      <Content/>
    </header>
    <div class="blog-list">
      <h2 class="list-heading">Latest News</h2>
      <article class="blog-post" v-for="post in posts" :key="post.index">
      <img
        class="author-img"
        :src="`/profiles/${post.author.img}`"
        :alt="post.author.name">
      <div class="post-content">
        <h3 class="post-heading">{{ post.frontmatter.title }}</h3>
        <div class="meta-info">{{ post.frontmatter.author }} <time>{{ post.frontmatter.date | dateFormat }}</time></div>
        <p>{{ post.frontmatter.excerpt }}</p>
        <router-link :to="post.path" class="read-more">Read more...</router-link>
      </div>
    </article>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'ListLayout',
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
        return withAuthor
      }
    }
  }
</script>

<style lang="sass" scoped>

.header
  margin: 2em 0

.blog-list
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 1em
  @media screen and (max-width: 768px)
    grid-template-columns: 1fr

.read-more
  display: inline-block
  margin: .5em 0

.list-heading
  grid-column: 1/-1
  font-size: 2.3em
  font-weight: 300

.post-heading
  font-size: 1.2em
  margin: 0

</style>