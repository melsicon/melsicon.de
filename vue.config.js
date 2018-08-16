module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/dev/' : '/',
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
    enableInSFC: false
  }
}
