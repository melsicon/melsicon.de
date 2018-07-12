<template>
    <main class="wrapper">
        <section-home/>
        <section-about/>
    </main>
</template>

<script>
import SectionHome from '@/components/sections/SectionHome'
import SectionAbout from '@/components/sections/SectionAbout'
export default {
  name: 'home',
  components: {
    SectionHome,
    SectionAbout
  }
}
</script>

<style lang="sass">

.wrapper
  max-width: 1440px
  min-height: 100vh
  margin: auto
  display: grid
  grid-template-columns: repeat(10, 1fr)
  grid-template-rows: repeat(5, auto)
  grid-gap: 1rem
  padding: 0 1rem

</style>
