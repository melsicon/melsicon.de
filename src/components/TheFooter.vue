<template>
    <footer class="footer">
        <div class="footer-wrapper">
            <div class="logo"><the-logo/></div>
            <div class="footer-content">
                <div class="contact">
                    <h4 class="footer-heading">{{ $t('footer.contact.heading') }}</h4>
                    <address class="address">
                        {{ $t('footer.contact.address.line-1') }}<br>
                        {{ $t('footer.contact.address.line-2') }}<br>
                        {{ $t('footer.contact.address.line-3') }}<br>
                        <br>
                        {{ $t('footer.contact.phone.label') }}: {{ $t('footer.contact.phone.data') }}<br>
                        {{ $t('footer.contact.email.label') }}: {{ $t('footer.contact.email.data') }}
                    </address>
                </div>

                <div class="social">
                    <h4 class="footer-heading">{{ $t('footer.social.heading') }}</h4>
                    <ul class="list social-list">
                        <li class="social-item">
                            <a href="https://twitter.com/melsicon" class="social-link">
                                <font-awesome-icon :icon="['fab', 'twitter']" aria-role="img" aria-hidden="true" class="social-icon" fixed-width/> Twitter
                            </a>
                        </li>
                        <li class="social-item">
                            <a href="" class="social-link">
                                <font-awesome-icon :icon="['fab', 'github']" aria-role="img" aria-hidden="true" class="social-icon" fixed-width/> GitHub
                            </a>
                        </li>
                        <li class="social">
                            <a href="https://www.xing.com/companies/melsicongmbh" class="social-link">
                                <font-awesome-icon :icon="['fab', 'xing']" aria-role="img" aria-hidden="true" class="social-icon" fixed-width/> XING
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="legal">
                    <h4 class="footer-heading">{{ $t('footer.legal.heading') }}</h4>
                    <router-link class="footer-link" to="/imprint">{{ $t('footer.legal.imprint') }}</router-link>
                    <router-link class="footer-link" to="/privacy">{{ $t('footer.legal.data') }}</router-link>
                </div>
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
      background: $color-secondary-darker
      color: white
      padding: 2em 0

  .footer-wrapper
    max-width: 1200px
    margin: auto
    height: 100%
    display: grid
    grid-template-columns: repeat(2, 1fr)
    @media only screen and (min-width: 1480px)
      max-width: 1400px

    .logo
      fill: white
      max-height: 1.8em
    
    .footer-content
      display: grid
      grid-template-columns: 1fr 1fr
      grid-row-gap: 1em

  .footer-heading
    font-size: 0.9em
    margin-bottom: .5em
    text-transform: uppercase
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

    .social-icon
      font-size: 1.2em
      color: $color-white
      margin-right: .5em

  .footer-link
    color: $color-white
    display: block

</style>
