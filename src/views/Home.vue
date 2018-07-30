<template>
    <main class="wrapper">
        <section-home/>
        <section-services/>
        <section-team/>
        <section-community/>
        <section-contact/>
    </main>
</template>

<script>
import SectionHome from '@/components/home-sections/SectionHome'
import SectionServices from '@/components/home-sections/SectionServices'
import SectionCommunity from '@/components/home-sections/SectionCommunity'
import SectionTeam from '@/components/home-sections/SectionTeam'
import SectionContact from '@/components/home-sections/SectionContact'

export default {
  name: 'home',
  components: {
    SectionHome,
    SectionServices,
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
    @media only screen and (min-width: 1480px)
      max-width: 1400px
    @media only screen and (max-width: 1200px)
      max-width: 1000px
    @media only screen and (max-width: 1000px)
      max-width: 850px
    @media screen and (max-width: 900px)
      max-width: 750px

  .home
    margin-bottom: 1rem
    @media only screen and (max-width: 768px)
      margin-top: 4rem
  
  /* LISTS */

  .client-list, .service-list, .meetup-list
    display: flex
    text-align: center
    justify-content: space-between
    @media screen and (max-width: 1000px)
      margin: 1.5rem 0
      flex-direction: column
  
  .list-item.service
    flex-basis: 33.33%

</style>
