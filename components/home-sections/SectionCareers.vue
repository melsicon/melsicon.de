<template>
  <section
    id="careers"
    class="section section-careers">
    <div
      v-if="$mq === 'lg'"
      class="illustration illustration-careers">
      <img
        v-lazy="$t('illustrations.careers.src')"
        :alt="$t('illustrations.careers.desc')">
    </div>
    <article class="article article-careers">
      <!-- INTRO TO CAREERS AT MELSICON -->
      <h2 class="heading">{{ $t('about.careers.heading') }}</h2>
      <p>{{ $t('about.careers.desc') }}</p>
      <!-- CURRENT/MOST RECENT OPENINGS -->
      <ul class="list job-list">
        <li
          v-for="job in $t('about.careers.open')"
          :key="job.index"
          class="job">
          <a
            :href="job.url"
            class="item-link">
            <font-awesome-icon
              :icon="['fas', 'angle-right']"
              aria-role="img"
              aria-hidden="true"
              fixed-width
              class="item-icon"/>
            {{ job.title }}

          </a>
        </li>
      </ul>
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
  </section>
</template>

<style lang="sass">

  .article-careers
    align-self: center

  .job-list
    display: block
    margin-bottom: 1em

  .meetup-list
    display: flex
    flex-wrap: wrap
    margin-top: 1em

  .meetup, .job
    margin-right: 1em

  .job
    @include small
      margin-right: 0

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

</style>
