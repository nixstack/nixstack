import socketIo from 'socket.io-client'

// https://github.com/socketio/socket.io-client/issues/883
// Transport unknown
const socketIoInst = socketIo('http://192.168.0.50', { transports: ['websocket'] })

socketIoInst.on('connection', () => {
  console.log('Client socket connected...')
})

socketIoInst.on('event', (data: any) => {
  console.log(data)
})

socketIoInst.on('disconnect', () => {
  console.log('Client socket disconnected...')
})