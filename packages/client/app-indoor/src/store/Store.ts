import { createStore, applyMiddleware } from 'redux'
import socketIoClient from 'socket.io-client'
import socketIoWildcard from 'socketio-wildcard'
import { rootReducer } from '../reducer'
import { createLoggerMiddleware, createSocketMiddleware } from '../middleware'
import { User, Project } from 'src/model'

export interface IRootState {
  user: User
  projectList: Project[]
}

const socketIOProtocal =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:${process.env.SOCKETIO_SERVER_PORT}`
    : '/'

// https://github.com/socketio/socket.io-client/issues/883
// Transport unknown
const socket: SocketIOClient.Socket = socketIoClient(socketIOProtocal, {
  transports: ['websocket']
})
const path = socketIoWildcard(socketIoClient.Manager)
path(socket)

export const store = createStore(
  rootReducer,
  applyMiddleware(
    createLoggerMiddleware as any,
    createSocketMiddleware(socket) as any
  )
)
