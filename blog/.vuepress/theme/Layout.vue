<template>
  <div class="wrapper">
    <navbar/>
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
  import ListLayout from './layouts/ListLayout'
  import PostLayout from './layouts/PostLayout'
  import TheFooter from './components/TheFooter'
  export default {
    components: {
      Navbar,
      ListLayout,
      PostLayout,
      TheFooter
      },
    computed: {
      layout() {
        return `${this.$page.frontmatter.layout}-layout`
      }
    }
  }
</script>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>

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
