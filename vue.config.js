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
    enableInSFC: false
  }
}
