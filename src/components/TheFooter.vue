<template>
    <footer class="footer">
        <div class="footer-wrapper">
            <the-logo class="logo-white"/>
            <div class="footer-content">
                <div class="contact">
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

                <div class="social">
                    <h3 class="footer-heading">{{ $t('footer.social.heading') }}</h3>
                    <ul class="list social-list">
                        <li class="social-item">
                            <a
                                href="https://twitter.com/melsicon"
                                class="social-link">
                                <font-awesome-icon
                                    :icon="['fab', 'twitter']"
                                    aria-role="img"
                                    aria-hidden="true"
                                    class="social-icon"
                                    fixed-width/> Twitter
                            </a>
                        </li>
                        <li class="social-item">
                            <a
                                href=""
                                class="social-link">
                                <font-awesome-icon
                                    :icon="['fab', 'github']"
                                    aria-role="img"
                                    aria-hidden="true"
                                    class="social-icon"
                                    fixed-width/> GitHub
                            </a>
                        </li>
                        <li class="social">
                            <a
                                href="https://www.xing.com/companies/melsicongmbh"
                                class="social-link">
                                <font-awesome-icon
                                    :icon="['fab', 'xing']"
                                    aria-role="img"
                                    aria-hidden="true"
                                    class="social-icon"
                                    fixed-width/> XING
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="legal">
                    <h3 class="footer-heading">{{ $t('footer.legal.heading') }}</h3>
                    <router-link
                        class="footer-link"
                        to="/imprint">{{ $t('footer.legal.imprint') }}</router-link>
                    <router-link
                        class="footer-link"
                        to="/privacy">{{ $t('footer.legal.data') }}</router-link>
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
    max-width: $width-full
    margin: auto
    height: 100%
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-gap: 1em
    padding: 0 .8rem
    @media only screen and (min-width: 1480px)
      max-width: 1400px
    @media only screen and (max-width: 1200px)
      max-width: 1000px
    @media only screen and (max-width: 1000px)
      max-width: 850px
      grid-template-columns: 1fr
    @media screen and (max-width: 900px)
      max-width: 750px

    .footer-content
      display: grid
      grid-template-columns: 1fr 1fr
      grid-row-gap: 1em
      @media only screen and (max-width: 768px)
        grid-template-columns: 1fr

  .contact, .social, .legal
    margin-bottom: 1em

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

    .social-icon
      font-size: 1.2em
      color: $color-white
      margin-right: .5em

  .footer-link, .footer-link:visited
    color: $color-white
    display: block

</style>
