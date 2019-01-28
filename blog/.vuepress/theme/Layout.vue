<template>
  <div class="wrapper">
    <navbar/>
    <!-- TODO: Add header. Show only on list view. -->
    <the-header v-if="layout !== 'post-layout'"/>
    <transition name="page" mode="out-in">
      <component
        :is="layout"
        :key="$route.fullPath"/>
    </transition>
    <the-footer/>
  </div>
</template>
<script>
  import Navbar from './components/Navbar'
  import TheHeader from './components/TheHeader'
  import ListLayout from './layouts/ListLayout'
  import PostLayout from './layouts/PostLayout'
  import TheFooter from './components/TheFooter'
  export default {
    components: {
      Navbar,
      TheHeader,
      ListLayout,
      PostLayout,
      TheFooter
      },
    computed: {
      layout() {
        return `${this.$page.frontmatter.layout}-layout`
      },
      latestPost(){
         const posts = this.$site.pages
          .filter(x => x.path.startsWith('/posts/') && !x.frontmatter.template)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
          return posts[posts.length - 1]
      }
    }
  }
</script>
<style src="./styles/fonts.sass" lang="sass"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
<style src="./styles/blog-global.sass" lang="sass"></style>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
