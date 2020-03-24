const fs = require('fs')
const express = require('express')

// let ngnix know we want to start serving from the proxy
fs.openSync('/tmp/app-initialized', 'w')

const app = express()

app.use(express.static('static'))

app.get('/', function(req, res) {
  res.redirect('web/index.html')
})

// socket.io setup
const io = require('socket.io').listen(app)
io.set('transports', ['websocket2'])

// listen to ngnix socket
app.listen('/tmp/nginx.socket2', function() {
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
