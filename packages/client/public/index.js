const fs = require('fs')
var http = require('http')
const express = require('express')

// let ngnix know we want to start serving from the proxy
fs.openSync('/tmp/app-initialized', 'w')

const app = express()

app.use(express.static('static'))

app.get('/', function(req, res) {
  // res.redirect('web/index.html')
  res.sendFile('web/index.html')
})

var server = http.createServer(app)

// socket.io setup
const io = require('socket.io').listen(server)
io.set('transports', ['websocket'])

// listen to ngnix socket
app.listen('/tmp/nginx.socket', function() {
  console.info(`[Web] server up`)
})

io.on('connect_error', function(err) {
  console.error(`[Web] ${err}`)
})

io.on('connect_timeout', function(err) {
  console.error(`[Web] ${err}`)
})

io.on('connection', function(socket) {
  console.info(`[Web] socket: ${socket.id} connected`)

  socket.on('disconnect', function() {
    console.info('[Web] disconnected')
  })

  socket.on('login', message => {
    socket.emit('login', { message: message })
  })
})
