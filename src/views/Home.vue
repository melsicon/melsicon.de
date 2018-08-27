<template>
    <main class="wrapper">
        <section-home/>
        <section-services/>
        <section-team/>
        <section-careers/>
        <section-contact/>
    </main>
</template>

<script>
import SectionHome from '@/components/home-sections/SectionHome'
import SectionServices from '@/components/home-sections/SectionServices'
import SectionTeam from '@/components/home-sections/SectionTeam'
import SectionCareers from '@/components/home-sections/SectionCareers'
import SectionContact from '@/components/home-sections/SectionContact'

export default {
  name: 'Home',
  components: {
    SectionHome,
    SectionServices,
    SectionTeam,
    SectionCareers,
    SectionContact
  }
}
</script>

<style lang="sass">

  .home
    margin-bottom: 1em
    @include small
      margin-top: 3em

</style>
