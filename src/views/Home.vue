<template>
    <main class="wrapper">
        <section-home/>
        <section-about/>
        <section-community/>
        <section-team/>
        <section-contact/>
    </main>
</template>

<script>
import SectionHome from '@/components/sections/SectionHome'
import SectionAbout from '@/components/sections/SectionAbout'
import SectionCommunity from '@/components/sections/SectionCommunity'
import SectionTeam from '@/components/sections/SectionTeam'
import SectionContact from '@/components/sections/SectionContact'

export default {
  name: 'home',
  components: {
    SectionHome,
    SectionAbout,
    SectionCommunity,
    SectionTeam,
    SectionContact
  }
}
</script>

<style lang="sass">

  .wrapper
    position: relative
    max-width: 1200px
    width: 100vw
    min-height: 100vh
    margin: auto
    padding: 0 .8rem
    background: $color-white
    transition: all .5s cubic-bezier(.645,.045,.355,1)
    @media only screen and (min-width: 1480px)
      max-width: 1400px
    @media only screen and (min-width: 1000px)
      background: none

  .section
    min-height: 70vh
    display: flex
    justify-content: center
    flex-direction: column
    margin-bottom: 5rem
    @media screen and (max-width: 768px)
      margin-bottom: 1rem

  .home
    margin-bottom: 1rem
    @media only screen and (max-width: 768px)
      margin: 2rem 0

  .contact
    min-height: 55vh

  .article
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-auto-flow: dense
    grid-column-gap: 1rem
    @media screen and (max-width: 768px)
      grid-template-columns: 1fr

  .span2
    grid-column: 1 / -1

  .center
    text-align: center
    @media screen and (max-width: 768px)
      text-align: left

  .list
    margin: 3rem 0
    display: flex
    justify-content: space-between
    @media screen and (max-width: 768px)
      margin: 1.5rem 0
      flex-direction: column

</style>
