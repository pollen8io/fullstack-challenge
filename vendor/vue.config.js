module.exports = {
  outputDir: '../public/dist',
  devServer: {
    proxy: {
      '/api': 'http://localhost:8081'
    }
  }
}
