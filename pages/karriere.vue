<template>
  <main class="wrapper">
    <section class="section section-careers-intro">
      <article class="article article-career-intro">
        <h1 class="job-page-heading">{{ $t('jobs.heading') }}</h1>
        <p>{{ $t('jobs.desc') }}</p>
        <h2
          id="job-list-heading"
          class="sub-heading job-heading">Stellenangebote</h2>
        <p>{{ $t('about.careers.desc') }}</p>
      </article>
      <div
        :class="{'illustration-medium': $mq === 'md'}"
        class="illustration illustration-careers">
        <img
          v-lazy="$t('illustrations.careers.src')"
          :alt="$t('illustrations.careers.desc')">
      </div>
    </section>
    <section
      id="jobs"
      class="section section-jobs">
      <ul 
        class="job-list" 
        aria-labelledby="job-list-heading">
        <li 
          v-for="job in $t('jobs.list')" 
          :key="job.index"
          :id="job.title"
          class="job-item">
          <h3 class="sub-heading job-title-heading">{{ job.title }}</h3>
          <p>{{ job.description }}</p>
          <h4 class="list-heading">{{ job.profile.heading }}</h4>
          <ul class="item-list">
            <li 
              v-for="item in job.profile.list" 
              :key="item.index">{{ item }}</li>
          </ul>
          <h4 class="list-heading">{{ job.tasks.heading }}</h4>
          <ul class="item-list">
            <li 
              v-for="item in job.tasks.list" 
              :key="item.index">{{ item }}</li>
          </ul>
          <a 
            :href="`mailto:karriere@melsicon.de?subject=Job Application: ${job.title}&body=Please attach your CV and cover letter.`"
            class="apply-link">
            <button class="btn btn-purple">Apply now</button>
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  scrollToTop: true,
  head() {
    return {
      title: 'melsicon - Karrieren'
    }
  }
}
</script>


<style lang="sass">

  .job-page-heading
    font-size: 3em
    font-weight: 200
    letter-spacing: 1px
    margin-bottom: .3em
    @include medium
      padding-top: 1em
      font-size: 2.5em
    @include x-small
      font-size: 2em
  
  .job-heading
    font-size: 1.2em

  .section-jobs
    padding-top: 1em

  .listing-heading
    margin-top: .5em

  .job-list
    display: flex
    flex-wrap: wrap

    .job-item
      flex-basis: 50%
      @include small
        flex-basis: 100%

  .job-item
    margin-bottom: 2em
    padding-right: 1rem
    @include small
      padding: 0

  .job-title-heading
    margin-top: 0

  .job-item:nth-child(2n)
    padding-left: 0

  .item-list
    list-style-type: disc
    margin-left: 2em

  .list-heading
    margin-top: 1em

  .section-careers-intro
    align-items: center

</style>
