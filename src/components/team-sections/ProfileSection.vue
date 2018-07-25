<template>
    <section class="section profiles">
        <article class="article team">
            <h2 class="sub-heading">{{ $t('team-page.team.heading') }}</h2>
            <p>{{ $t('team-page.team.paragraphs')[0] }}</p>
        </article>
        <img src="" alt="" class="illustration">
        <article v-for="profile in $t('team-page.team.profiles')" 
                 :key="profile.index" 
                 class="article profile">
            <img src="" alt="" class="profile-img">
            <h3 class="sub-heading">{{ profile.name }}</h3>
            <h4 class="sub-heading">{{ profile.title }}</h4>
            <p>{{ profile.description }}</p>
            <!-- Add APPLY NOW button here -->
        </article>
    </section>
</template>

<style lang="sass" scoped>

  .team
    margin-bottom: 10rem

  .profile
    margin-bottom: 3rem

  .profile-img
    float: left
    shape-outside: circle(50%)
    height: 150px
    width: 150px
    background: $color-primary
    border-radius: 50%
    margin-right: 2em
</style>
