module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/variables.sass";'
      }
    },
    sourceMap: true
  },

  lintOnSave: undefined,

  pluginOptions: {
    enableInSFC: false
  }
}
