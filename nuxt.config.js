const pkg = require('./package')
const meta = {
  title: 'melsicon GmbH',
  description:
    'Spezialist für Softwareentwicklung im Banken- und Transportwesen im Rhein-Main-Gebiet. Agile Entwicklung, Testmanagement, DevOps, Cloud Engineering sowie alles rund um Java.',
  url: 'https://melsicon.de',
  img: 'melsicon.jpg',
  locale: 'de'
}

module.exports = {
  mode: 'universal',
  router: {
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vue-lazyload',
    '~/plugins/font-awesome',
    { src: '~plugins/vue-scrollactive', ssr: false },
    { src: '~plugins/ga', ssr: false },
    { src: '~/plugins/axe', ssr: false }
  ],
  generate: {
    routes: ['/', '/impressum', '/datenschutz', '/karriere']
  },
  head: {
    title: meta.name,
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: meta.description
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: ''
      },
      {
        name: 'google-site-verification',
        content: 'n3d7cpHVKog2a7HFkXVCLXTNHT0vyFUvicxq0quEE2Y'
      },
      // Fb
      { name: 'og:title', content: meta.title },
      { name: 'og:description', content: meta.description },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: meta.url },
      { name: 'og:image', content: 'https://melsicon.de/melsicon.jpg' },
      { name: 'og:locale', content: meta.locale },
      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@melsicon' },
      { name: 'twitter:creator', content: '@melsicon' },
      { name: 'twitter:title', content: meta.title },
      { name: 'twitter:description', content: meta.description },
      { name: 'twitter:image', content: 'https://melsicon.de/melsicon.jpg' },
      { name: 'twitter:image:alt', content: 'melsicon logo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600'
      }
    ]
  },
  manifest: {
    lang: 'de'
  },
  loading: { color: '#33f' },
  css: [],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          sm: 450,
          md: 1250,
          lg: Infinity
        }
      }
    ]
  ],
  styleResources: {
    sass: ['./assets/sass/*.sass']
  },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
