const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
      // ws: true, // proxy websockets
      router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        // 'dev.localhost:3000': 'http://localhost:8000'
      }
      // pathRewrite: {
      //   '^/api/user': '/api/user', // rewrite path
      //   '^/api/remove/path': '/path' // remove base path
      // }
    })
  )
}
