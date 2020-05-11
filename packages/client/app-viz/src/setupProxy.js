const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    ['/files'],
    createProxyMiddleware({
      target: process.env.FILE_SYS_URL,
      changeOrigin: true,
    })
  )
}
