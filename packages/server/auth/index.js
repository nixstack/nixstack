const fs = require('fs')

// let ngnix know we want to start serving from the proxy
fs.openSync('/tmp/app-initialized', 'w')

const server2 = require('http').createServer(function(req, res) {
  res.writeHead(200)
  res.end('Log in...')
})

// socket.io setup
const io2 = require('socket.io').listen(server2)
io2.set('transports', ['websocket3'])

// listen to ngnix socket
server2.listen('/tmp/nginx.socket3', function() {
  console.info(`[auth] server up`)
})

io2.on('connect_error', function(err) {
  console.error(err)
})

io2.on('connect_timeout', function(err) {
  console.error(err)
})

io2.on('connection', function(socket) {
  console.info(`[auth] socket: ${socket.id} connected`)

  socket.on('disconnect', function() {
    console.info('[auth] disconnected')
  })

  socket.on('login', message => {
    socket.emit('login', { message: message })
  })
})
