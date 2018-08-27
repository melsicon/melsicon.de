<template>
    <footer class="footer">
        <div class="footer-wrapper">
            <the-logo class="logo-white footer-logo"/>
            <div class="footer-content contact">
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
            <div class="footer-content social">
                <h3 class="footer-heading">{{ $t('footer.social.heading') }}</h3>
                <ul class="list social-list">
                    <li
                        v-for="(item, key) in $t('footer.social.social')"
                        :key="item.index"
                        class="social-item">
                        <a
                            :href="item"
                            class="social-link">
                            <font-awesome-icon
                                :icon="['fab', key]"
                                aria-role="img"
                                aria-hidden="true"
                                class="social-icon"
                                fixed-width/> {{ key }}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer-content legal">
                <h3 class="footer-heading">{{ $t('footer.legal.heading') }}</h3>
                <router-link
                    class="footer-link"
                    to="/imprint">{{ $t('footer.legal.imprint') }}</router-link>
                <router-link
                    class="footer-link"
                    to="/privacy">{{ $t('footer.legal.data') }}</router-link>
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
    color: white
    padding: 2em 0

  .footer-wrapper
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    max-width: $large
    margin: auto
    height: 100%
    padding: 0 2em
    @include small
      padding: 0 1em

  .footer-logo
    flex-basis: 100%
    margin-bottom: 1em

  .footer-content
    width: 33.3%
    margin-bottom: 1em
    @include small
      width: 100%

  .footer-heading
    font-size: 0.8em
    margin-bottom: .5em
    text-transform: uppercase
    letter-spacing: .5px
    opacity: .9

  .address
    font-style: normal

  .social-item
    margin-bottom: .5em

  .social-link
    display: flex
    align-items: center

  .social-link, .social-link:visited, .social-link:focus
    color: $color-white

  .social-link
    font-size: 1em
    text-transform: capitalize

  .social-icon
    color: $color-white
    font-size: 1.3em
    margin-right: .4em

  .footer-link, .footer-link:visited
    color: $color-white
    display: block

</style>
