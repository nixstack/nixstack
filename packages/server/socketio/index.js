const fs = require('fs')
var http = require('http')
const express = require('express')

const unixSocket = '/tmp/nginx.socket'
const protocol = unixSocket || process.env.PORT || 80

// let ngnix know we want to start serving from the proxy
fs.openSync('/tmp/app-initialized', 'w')

const app = express()

// app.use(express.static('static/web'))

app.all('/data', function (req, res, next) {
  res.json({ code: 4001, message: 'Not Found!', data: {} })
})

app.all('/mock', function (req, res, next) {
  res.json({ code: 4002, message: 'Not Found!', data: {} })
})

// app.get('/', function(req, res) {
//   res.redirect('web/index.html')
//   res.sendFile('web/index.html')
// })

var server = http.createServer(app)

// socket.io setup
const io = require('socket.io').listen(server)
io.set('transports', ['websocket'])

if (unixSocket && fs.existsSync(unixSocket)) fs.unlinkSync(unixSocket)

// listen to ngnix socket
app.listen(protocol, function () {
  if (unixSocket) fs.chmodSync(unixSocket, 755)
  console.info(`[Web] erver running at ${protocol}`)
})

io.on('connect_error', function (err) {
  console.error(`[Web] ${err}`)
})

io.on('connect_timeout', function (err) {
  console.error(`[Web] ${err}`)
})

io.on('connection', function (socket) {
  console.info(`[Web] socket: ${socket.id} connected`)

  socket.on('disconnect', function () {
    console.info('[Web] disconnected')
  })

  socket.on('login', message => {
    socket.emit('login', { message: message })
  })
})
