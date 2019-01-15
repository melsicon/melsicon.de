<template>
  <main class="wrapper">
    <section
      id="jobs"
      class="section section-jobs">
      <article class="article article-careers">
        <!-- INTRO TO CAREERS AT MELSICON -->
        <h2 class="heading">{{ $t('jobs.heading') }}</h2>
        <p>{{ $t('jobs.desc') }}</p>
        <!-- ILLUSTRATION ON SMALL AND MEDIUM SCREENS -->
        <div
          v-if="$mq === 'xs' || $mq === 'md'"
          :class="{'illustration-medium': $mq === 'md'}"
          class="illustration illustration-careers">
          <img
            v-lazy="$t('illustrations.careers.src')"
            :alt="$t('illustrations.careers.desc')">
        </div>
        <!-- OUR BENEFITS & COMMUNITY -->
        <h3 class="sub-heading">{{ $t('about.careers.benefits.heading') }}</h3>
        <p>{{ $t('about.careers.benefits.desc') }}</p>
        <p>{{ $t('about.careers.community.desc') }}</p>
        <!-- OUR MEETUPS -->
        <ul class="list meetup-list">
          <li
            v-for="(meetup, key) in $t('about.careers.community.meetups')"
            :key="meetup.index"
            class="meetup">
            <a
              :href="meetup"
              class="item-link">
              <font-awesome-icon
                :icon="['fas', 'angle-right']"
                aria-role="img"
                aria-hidden="true"
                fixed-width
                class="item-icon"/>
              {{ key }}
            </a>
          </li>
        </ul>
      </article>
      <div
        v-if="$mq === 'lg'"
        class="illustration illustration-careers">
        <img
          v-lazy="$t('illustrations.careers.src')"
          :alt="$t('illustrations.careers.desc')">
      </div>
      <h2 class="heading listing-heading">Unsere Stellenangebote</h2>
      <ul class="job-list">
        <li 
          v-for="job in $t('jobs.list')" 
          :key="job" 
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
          <button class="btn btn-apply">Apply now</button>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="sass">
  .meetup-list
    display: flex
    flex-wrap: wrap
    margin-top: 1em

  .meetup
    margin-right: 1em

  .item-link
    display: flex
    align-items: center
    color: $color-primary
    font-weight: 600
    transition: all .3s ease-in-out
    &:hover
      color: $color-primary

  .item-icon
    font-size: .8em
    margin-top: .15em
  
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

  .btn-apply
    color: $color-white
    background: $color-primary
    font-size: 1em
    font-weight: bold
    padding: .5em 1rem
    border-radius: 5px
    margin: 1em auto

</style>
