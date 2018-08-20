<template>
    <section
        id="team"
        class="section section-profiles">
        <article
            v-for="profile in $t('team.profiles')"
            :key="profile.index"
            class="article article-profile">
            <img
                :src="profile.img"
                alt=""
                class="profile-img">
            <div class="profile-info">
                <h3 class="profile-name">{{ profile.name }}</h3>
                <h4 class="profile-title">{{ profile.title }}</h4>
                <p class="profile-description">{{ profile.description }}</p>
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
        </article>
    </section>
</template>

<style lang="sass" scoped>

  .team
    margin-bottom: 10rem

  .article-profile
    display: flex
    &:nth-child(2n+1)
      padding-right: 1em
      @media screen and (max-width: 1000px)
        padding: 0

  .profile-info
    width: 100%

  .profile-name
    font-size: 1.5em
    font-weight: 300

  .profile-img
    flex-shrink: 1
    max-height: 7em
    max-width: 7em
    border-radius: 50%
    margin-right: 1em
    box-shadow: -.4em 0 0 $color-primary

  .profile-name
    margin: 0

  .list-social
    display: flex
    flex-wrap: wrap
    margin-top: .5em

  .social-item
    display: flex
    align-items: center
    margin-right: 1em
    transition: transform .5s ease-in-out
    &:hover
      transform: scale(1.05)

  .social-link
    color: $color-secondary
    font-size: .75em
    font-weight: 700
    text-transform: uppercase
    letter-spacing: 1px

  .social-icon
    color: $color-secondary
    font-size: 1.3em
    margin-right: .4em

</style>
