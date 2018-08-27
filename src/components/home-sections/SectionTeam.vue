<template>
    <section
        id="about"
        class="section section-team">
        <article class="article article-team">
            <h2 class="heading">{{ $t('about.heading') }}</h2>
            <p
                v-for="p in $t('about.paragraphs')"
                :key="p.index"
                class="paragraph">{{ p }}</p>
        </article>
        <illustration-team/>
        <div class="profiles">
            <div
                v-for="profile in $t('team.profiles')"
                :key="profile.index"
                class="profile">
                <img
                    :src="profile.img"
                    alt=""
                    class="profile-img">
                <h3 class="profile-name">{{ profile.name }}</h3>
                <h4 class="profile-title">{{ profile.title }}</h4>
                <ul class="list-social">
                    <li
                        v-for="(item, key) in profile.social"
                        :key="item.index"
                        class="social-item">
                        <a
                            :href="item"
                            class="social-link">
                            <font-awesome-icon
                                :icon="['fab', key]"
                                aria-role="img"
                                aria-hidden="true"
                                class="social-icon"/>{{ key }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import IllustrationTeam from '@/components/graphics/illustrations/IllustrationTeam'
export default {
  components: {
    IllustrationTeam
  }
}
</script>

<style lang="sass" scoped>

  .article-team
    align-self: center
    margin-bottom: 5em
    @media screen and (max-width: 500px)
      margin-bottom: 0

  .illustration-team
    padding-bottom: 2em
    @media screen and (max-width: 1000px)
      order: -1

  .meetup-list
    display: flex
    flex-wrap: wrap
    margin-top: 1em

  .meetup
    margin-right: 1em

  .meetup-link
    display: block
    color: $color-black
    padding: 0 .1em
    border-bottom: .1em solid $color-secondary

  .profiles
    flex-basis: 100%
    display: flex
    flex-wrap: wrap
    margin-top: 2em
    @media screen and (max-width: 500px)
      margin-top: 1em

  .profile
    display: flex
    flex-direction: column
    flex-basis: 33.3%
    align-items: center
    margin-top: 0
    margin-bottom: 2em
    @media screen and (max-width: 1000px)
      flex-basis: 50%
    @media screen and (max-width: 550px)
      flex-basis: 100%
    &:nth-child(2n+1)
      padding-right: 1em
      @media screen and (max-width: 1000px)
        padding: 0

  .profile-name
    font-size: 1.5em
    font-weight: 300

  .profile-title
    font-weight: 400
    text-align: center

  .profile-img
    max-height: 9em
    max-width: 9em
    border-radius: 50%
    margin-bottom: .5em
    box-shadow: -.8em .2em 0 $color-primary

  .list-social
    display: flex
    flex-wrap: wrap
    margin-top: .5em
    justify-content: center

  .social-item
    display: flex
    align-items: center
    transition: transform .5s ease-in-out
    &:not(:last-child)
      margin-right: 1em
    &:hover
      transform: scale(1.05)

  .social-link
    color: $color-secondary
    font-size: .75em
    font-weight: 700
    text-transform: uppercase
    letter-spacing: 1px
    @media screen and (max-width: 768px)
      font-size: 1em

  .social-icon
    color: $color-secondary
    font-size: 1.3em
    margin-right: .4em
</style>
