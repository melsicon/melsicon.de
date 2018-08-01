<template>
    <main class="wrapper">
        <section-home/>
        <section-services/>
        <section-about/>
        <section-contact/>
    </main>
</template>

<script>
import SectionHome from '@/components/home-sections/SectionHome'
import SectionServices from '@/components/home-sections/SectionServices'
import SectionAbout from '@/components/home-sections/SectionAbout'
import SectionContact from '@/components/home-sections/SectionContact'

export default {
  name: 'home',
  components: {
    SectionHome,
    SectionServices,
    SectionAbout,
    SectionContact
  }
}
</script>

<style lang="sass">

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
