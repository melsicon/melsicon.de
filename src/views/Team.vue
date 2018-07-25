<template>
    <main class="wrapper">
        <profile-section/>
        <job-section/>
    </main>
</template>

<script>
import ProfileSection from '@/components/team-sections/ProfileSection'
import JobSection from '@/components/team-sections/JobSection'
export default {
  components: {
    ProfileSection,
    JobSection
  }
}
</script>
