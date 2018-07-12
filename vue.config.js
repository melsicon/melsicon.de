module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        data: `@import "@/variables.sass";`
      }
    }
  },
  lintOnSave: true,
  pluginOptions: {
    enableInSFC: false
  }
}
