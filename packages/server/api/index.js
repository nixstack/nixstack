const fs = require('fs')

// let ngnix know we want to start serving from the proxy
fs.openSync('/tmp/app-initialized', 'w')

const server2 = require('http').createServer(function(req, res) {
  res.writeHead(200)
  res.end('hello world2')
})

// socket.io setup
const io2 = require('socket.io').listen(server2)
io2.set('transports', ['websocket2'])

// listen to ngnix socket
server2.listen('/tmp/nginx.socket2', function() {
  console.info(`server up2`)
})

io2.on('connect_error', function(err) {
  console.error(err)
})

io2.on('connect_timeout', function(err) {
  console.error(err)
})

io2.on('connection', function(socket) {
  console.info(`socket: ${socket.id} connected2`)

  socket.on('disconnect', function() {
    console.info('disconnected2')
  })

  socket.on('login', message => {
    socket.emit('login', { message: message })
  })
})
