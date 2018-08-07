<template>
    <main class="wrapper">
        <section-home/>
        <section-services/>
        <section-industry/>
        <section-about/>
        <section-contact/>
    </main>
</template>

<script>
import SectionHome from '@/components/home-sections/SectionHome'
import SectionServices from '@/components/home-sections/SectionServices'
import SectionIndustry from '@/components/home-sections/SectionIndustry'
import SectionAbout from '@/components/home-sections/SectionAbout'
import SectionContact from '@/components/home-sections/SectionContact'

export default {
  name: 'home',
  components: {
    SectionHome,
    SectionServices,
    SectionIndustry,
    SectionAbout,
    SectionContact
  }
}
</script>

<style lang="sass">

  .home
    margin-bottom: 1em
    @media only screen and (max-width: 768px)
      margin-top: 3em

</style>
