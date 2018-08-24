<template>
    <main class="wrapper">
        <section-home/>
        <section-services/>
        <section-team/>
        <section-join/>
        <section-contact/>
    </main>
</template>

<script>
import SectionHome from '@/components/home-sections/SectionHome'
import SectionServices from '@/components/home-sections/SectionServices'
import SectionTeam from '@/components/home-sections/SectionTeam'
import SectionJoin from '@/components/home-sections/SectionJoin'
import SectionContact from '@/components/home-sections/SectionContact'

export default {
  name: 'Home',
  components: {
    SectionHome,
    SectionServices,
    SectionTeam,
    SectionJoin,
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
