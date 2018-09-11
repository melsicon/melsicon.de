module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/variables.sass";'
      }
    },
    sourceMap: true
  },

  lintOnSave: true,

  pluginOptions: {
    i18n: {
      locale: 'de',
      fallbackLocale: 'de',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  pwa: {
    name: 'melsicon',
    themeColor: '#6464E1',
    msTileColor: '#fff',
    appleMobileWebAppStatusBarStyle: '#6464E1'
  }
}
