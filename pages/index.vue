<template>
  <main class="wrapper">
    <section-home/>
    <section-services/>
    <section-about/>
    <section-careers/>
    <section-contact/>
  </main>
</template>

<script>
import SectionHome from '@/components/home-sections/SectionHome'
import SectionServices from '@/components/home-sections/SectionServices'
import SectionAbout from '@/components/home-sections/SectionAbout'
import SectionCareers from '@/components/home-sections/SectionCareers'
import SectionContact from '@/components/home-sections/SectionContact'

export default {
  name: 'Home',
  components: {
    SectionHome,
    SectionServices,
    SectionAbout,
    SectionCareers,
    SectionContact
  },
  head() {
    return {
      title: 'melsicon'
    }
  }
}
</script>
