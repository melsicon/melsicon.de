<template>
    <section id="team" class="section profiles">
        <article class="article team">
            <h2 class="sub-heading">{{ $t('team-page.team.heading') }}</h2>
            <p>{{ $t('team-page.team.paragraphs')[0] }}</p>
        </article>
        <img src="" alt="" class="illustration">
        <article v-for="profile in $t('team-page.team.profiles')" 
                 :key="profile.index" 
                 class="article article-profile">
            <img src="" alt="" class="profile-img">
            <div>
                <h3 class="profile-name">{{ profile.name }}</h3>
                <h4 class="profile-heading">{{ profile.title }}</h4>
                <p class="profile-description">{{ profile.description }}</p>
            </div>
        </article>
    </section>
</template>

<style lang="sass" scoped>

  .team
    margin-bottom: 10rem

  .article-profile
    display: flex
    align-items: center
    flex: 1 0 auto
    margin-bottom: 3rem
    @media screen and (max-width: 1000px)
      flex-direction: column
      align-items: center
      justify-content: center

  .profile-img
    float: left
    flex-shrink: 0
    shape-outside: circle(50%)
    height: 150px
    width: 150px
    background: $color-primary
    border-radius: 50%
    margin-right: 2em
  
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
