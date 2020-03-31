// import socketIo from 'socket.io-client'
import { Store } from 'redux'
import { Actions } from '@share/action'

// https://github.com/socketio/socket.io-client/issues/883
// Transport unknown
// const socketIoInst = socketIo('/', { transports: ['websocket'] })

// socketIoInst.on('connection', (message: any) => {
//   console.log('Client socket connected...')
//   console.log(message)
// })

// socketIoInst.on('event', (data: any) => {
//   console.log(data)
// })

// socketIoInst.on('disconnect', () => {
//   console.log('Client socket disconnected...')
// })

// setInterval(() => {
//   socketIoInst.emit('login')
// }, 3000)

// socketIoInst.on('login', (message: any) => {
//   console.log(message)
// })

interface ISocktAction {
  type: number
  nsp: string,
  data: [string, Actions]
}

export const createSocketMiddleware = (socket: SocketIOClient.Socket) => (store: Store) => {
  socket.on('*', (socketAction: ISocktAction) => {
    const action: Actions = socketAction.data[1]
    delete action.meta
    store.dispatch(action)
  })

  return (next: (action: Actions) => Actions) => (action: Actions) => {
    if (action.meta && (<any>action.meta).remote) {
      socket.emit(action.type, action)
      return
    }

    return next(action)
  }
}
