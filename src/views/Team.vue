<template>
    <main class="wrapper">
        <section-description/>
        <section-profile/>
        <section class="section section-contact">
            <h2 class="heading">{{ $t('team.join') }}</h2>
        </section>
    </main>
</template>

<script>
import SectionProfile from '@/components/team-sections/SectionProfile'
import SectionDescription from '@/components/team-sections/SectionDescription'
export default {
  components: {
    SectionProfile,
    SectionDescription
  }
}
</script>
