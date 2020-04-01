import http from 'http'
import util from 'util'
import httpProxy from 'http-proxy'
import HttpProxyRules from 'http-proxy-rules'
import body from 'body'
import forwarded from 'forwarded-for'
import serveStatic from 'serve-static'
import finalhandler from 'finalhandler'
import config from './config'
import shareConfig from '@share/config'

const proxy = httpProxy.createProxy()

const proxyRules = new HttpProxyRules(config.proxyRules)

// const serve = serveStatic(shareConfig.appIndoorHost)
const serve = serveStatic(process.env.APP_INDOOR_STATIC_FILE as string)

http
  .createServer((req, res) => {
    // webpacke-dev-server
    if (req.url!.indexOf('/sockjs-node') !== -1) {
      http.request(
        {
          method: req.method,
          path: req.url,
          host: '0.0.0.0',
          protocol: 'http:',
          port: shareConfig.APP_INDOOR_PORT
        },
        r => {
          r.pipe(res)
        }
      )

      return
    }

    ;(req as any).hasSocketIO = req.url!.indexOf('/socket.io/') !== -1
    if ((req as any).hasSocketIO) {
      body(req, (err: any, bodyInfo: any) => {
        console.info(`[SOCKETIO] { url: ${req.url}, body: ${bodyInfo} }`)
      })
    }

    const target = proxyRules.match(req)
    if (target) {
      return proxy.web(req, res, {
        changeOrigin: true,
        followRedirects: true,
        target
      })
    }

    serve(req as any, res as any, finalhandler(req, res))

    // res.writeHead(500, {
    //   'Content-Type': 'text/plain; charset=utf-8'
    // })
    // res.end('请求url或路径不匹配任何规则！')
  })
  .listen(process.env.PORT, () => {
    console.log(`反向代理服务器已启动，端口：${process.env.PORT}！`)
  })

proxy.on('proxyRes', (proxyRes, req, res) => {
  const address = forwarded(req, req.headers)

  console.info(
    util.format(
      '[proxyRes] %s %s %s %s',
      req.method,
      proxyRes.statusCode,
      address.ip,
      req.url
    )
  )
})

proxy.on('error', (err: any, req, res) => {
  const address = forwarded(req, req.headers)
  let json

  if (err.code) {
    console.error(
      util.format(
        '[proxy error] %s | %s %s %s',
        address.ip,
        req.method,
        req.url,
        err.message
      )
    )
  }

  if (!res.headersSent) {
    res.writeHead(500, {
      'content-type': 'application/json'
    })
  }

  json = {
    error: 'proxy_error',
    reason: err.message
  }

  console.error(
    util.format(
      '[proxy error] %s %s %s %s',
      req.method,
      res.statusCode,
      address.ip,
      req.url
    )
  )
  res.end(JSON.stringify(json))
})
