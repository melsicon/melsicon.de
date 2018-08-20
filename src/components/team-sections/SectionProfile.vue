<template>
    <section
        id="team"
        class="section section-profiles">
        <article
            v-for="profile in $t('team.profiles')"
            :key="profile.index"
            class="article article-profile">
            <img
                src=""
                alt=""
                class="profile-img">
            <div>
                <h3 class="profile-name">{{ profile.name }}</h3>
                <span class="profile-heading">{{ profile.title }}</span>
                <p class="profile-description">{{ profile.description }}</p>
            </div>
        </article>
    </section>
</template>

<style lang="sass" scoped>

  .team
    margin-bottom: 10rem

  .article-profile:nth-child(2n+1)
    padding-right: 1em

  .profile-img
    float: left
    flex-shrink: 0
    shape-outside: circle(50%)
    height: 160px
    width: 160px
    background: $color-primary
    border-radius: 50%
    margin-right: 1em

  .profile-name
    margin: 0

  .profile-heading
    font-weight: 600

  @media screen and (max-width: 1000px)
    .profile-img
      margin: 0
      margin-bottom: 1em

    .profile-name, .profile-heading, .profile-description
      text-align: center
      margin-bottom: .2em

</style>
