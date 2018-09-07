<template>
    <footer class="footer">
        <div class="footer-wrapper">
            <the-logo class="logo-white footer-logo"/>
            <!-- QUICK LINKS -->
            <div class="footer-content footer-quick">
                <h3 class="footer-heading">{{ $t('footer.quick.heading') }}</h3>
                <a
                    v-for="(meetup, key) in $t('about.careers.community.meetups')"
                    :key="meetup.index"
                    :href="meetup"
                    class="footer-link">{{ key }}
                </a>
            </div>
            <!-- CONTACT INFO -->
            <div class="footer-content footer-contact">
                <h3 class="footer-heading">{{ $t('footer.contact.heading') }}</h3>
                <address class="address">
                    {{ $t('footer.contact.address.line-1') }}<br>
                    {{ $t('footer.contact.address.line-2') }}<br>
                    {{ $t('footer.contact.address.line-3') }}<br>
                    <br>
                    {{ $t('footer.contact.phone.label') }}: {{ $t('footer.contact.phone.data') }}<br>
                    {{ $t('footer.contact.email.label') }}: {{ $t('footer.contact.email.data') }}
                </address>
            </div>
            <!-- SOCIAL MEDIA -->
            <div class="footer-content footer-social">
                <h3 class="footer-heading">{{ $t('footer.social.heading') }}</h3>
                <ul class="list social-list">
                    <li
                        v-for="(item, key) in $t('footer.social.social')"
                        :key="item.index"
                        class="footer-social-item">
                        <a
                            :href="item"
                            class="footer-social-link">
                            <font-awesome-icon
                                :icon="['fab', key]"
                                aria-role="img"
                                aria-hidden="true"
                                class="footer-social-icon"
                                fixed-width/> {{ key }}
                        </a>
                    </li>
                </ul>
            </div>
            <!-- LEGAL -->
            <div class="footer-content legal">
                <h3 class="footer-heading">{{ $t('footer.legal.heading') }}</h3>
                <router-link
                    class="footer-link"
                    to="/imprint">{{ $t('footer.legal.imprint') }}</router-link>
            </div>
        </div>
    </footer>
</template>

<script>
import TheLogo from '@/components/graphics/TheLogo'
export default {
  name: 'Footer',
  components: {
    TheLogo
  }
}
</script>

<style lang="sass">

  .footer
    min-height: 20rem
    background: $color-primary-darker
    color: $color-white
    font-size: 17px
    padding: 2em 0

  .footer-wrapper
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    max-width: $normal-width
    margin: auto
    height: 100%
    padding: 0 2em
    @include x-large
      max-width: $large-width
    @include small
      padding: 0 1em

  .footer-logo
    flex-basis: 100%
    margin-bottom: 1em

  .footer-content
    flex-basis: calc(100% / 4)
    @include small
      flex-basis: 50%

  @include small
    .footer-contact, .footer-legal
      order: 1
      flex-basis: 100%


  .footer-heading
    font-size: 0.8em
    margin-top: 1.5em
    margin-bottom: .5em
    text-transform: uppercase
    letter-spacing: .5px

  .address
    font-style: normal

  .footer-social-item
    margin-bottom: .5em
    color: $color-white
    font-size: 1em
    text-transform: capitalize
    @include small
      margin-left: 0

  .footer-social-link, .footer-social-link:visited
    color: $color-white
    display: flex
    align-items: center

    .footer-social-icon
      color: $color-white
      margin-right: .4em

  .footer-link, .footer-link:visited
    color: $color-white
    display: block

</style>
