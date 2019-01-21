<template>
   <div class="nav-wrapper">
     <nav v-if="navLinks" class="nav">
        <a
          v-if="nav.external"
          v-for="nav in navLinks"
          :key="nav.text"
          :href="nav.link"
          active-class="is-active"
          class="nav-link"
          v-text="nav.text"
        />
        <router-link
          v-if="!nav.external"
          v-for="nav in navLinks"
          :key="nav.text"
          :to="nav.link"
          active-class="is-active"
          class="nav-link"
          v-text="nav.text"
        />
      <the-logo/>
    </nav>
  </div>
</template>

<script>
  import TheLogo from './TheLogo'
  export default {
    components: {
      TheLogo
    },
    computed: {
      navLinks() {
        return this.$site.themeConfig.nav
      }
    }
  }
</script>

<style lang="sass" scoped>

.nav-wrapper
  position: sticky
  top: 0
  width: 100%
  margin: 0 auto
  padding: .5rem 1em
  align-items: center
  background: #fff

.nav
  display: flex
  max-width: 80rem
  margin: 0 auto

.logo-wrapper
  margin-left: auto

.nav-link
  margin-right: 5%
  padding-right: .5em
  color: #333
  font-size: .9em
  font-weight: 400
  letter-spacing: .5px
  text-decoration: none
  text-transform: uppercase
  transition: transform .3s ease-in
  border-bottom: 1px solid #fff
  transition: all .3s ease-in
  &:hover
    text-decoration: underline

.is-active
  color: #6464E1
  font-weight: 600

</style>