module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:8081'
    }
  }
}
