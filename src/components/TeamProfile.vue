<template>
    <div class="profiles">
        <div
            v-for="profile in profiles"
            :key="profile.index"
            class="profile">
            <img
                v-lazy="profile.img"
                :alt="profile.name"
                class="profile-img">
            <h4 class="profile-name">{{ profile.name }}</h4>
            <p class="profile-title">{{ profile.title }}</p>
            <p class="profile-subtitle">{{ profile.subtitle }}</p>
            <ul class="list list-social">
                <li
                    v-for="(item, key) in profile.social"
                    :key="item.index"
                    class="social-item">
                    <a
                        :href="item"
                        class="profile-social-link">
                        <font-awesome-icon
                            :icon="['fab', key]"
                            aria-role="img"
                            aria-hidden="true"
                            class="profile-social-icon"/>{{ key }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    profiles: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass">

  .profiles
    flex-basis: 100%
    display: flex
    flex-wrap: wrap
    justify-content: center
    @include x-large
      margin-top: 3em
    @include small
      margin-top: 1em

  .profile
    display: flex
    flex-direction: column
    flex-basis: 33.3%
    align-items: center
    margin-top: 0
    margin-bottom: 2em
    text-align: center
    &:last-child
      margin-bottom: 0
    @include x-large
      flex-basis: 25%
      padding: 0 1em
    @include medium
      flex-basis: 50%
    @include small
      padding: 0
      margin-bottom: 1em
    @include x-small
      flex-basis: 100%

  .profile-name
    font-size: 1.6em
    font-weight: 300

  p.profile-title
    font-size: 1em
    font-weight: 600
    text-align: center
    margin: 0

  .profile-img
    display: flex
    align-items: center
    justify-content: center
    height: 9em
    width: 9em
    border-radius: 50%
    margin-bottom: .5em
    box-shadow: -.7em .2em 0 $color-secondary

  p.profile-subtitle
    margin: 0

  .list-social
    display: flex
    flex-wrap: wrap
    margin: .3em 1em 0
    justify-content: center
    @include x-large
      margin: .3em 0 0
    @include small
      margin: .3em 0

  .social-item
    display: flex
    align-items: center
    margin: 0 .6em
    margin-bottom: .5em
    @include small
      margin: 0 .4em
      margin-bottom: .5em

  .profile-social-link
    display: flex
    align-items: center
    color: $color-primary
    font-size: .75em
    font-weight: 700
    text-transform: uppercase
    letter-spacing: 1px

  .profile-social-icon
    color: $color-primary
    font-size: 1.3em
    margin-right: .4em

</style>
