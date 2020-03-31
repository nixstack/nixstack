import { Store, AnyAction, createStore, applyMiddleware } from 'redux'
import socketIoClient from 'socket.io-client'
import socketIoWildcard from 'socketio-wildcard'
import { AbstractUser, AbstractProject } from "@share//model";
import { rootReducer } from '../reducer'
import { createLoggerMiddleware, createSocketMiddleware } from '../middleware';

export interface IRootState {
  user: AbstractUser
  projectList: AbstractProject[]
}

// https://github.com/socketio/socket.io-client/issues/883
// Transport unknown
const socket: SocketIOClient.Socket = socketIoClient('/', { transports: ['websocket'] })
const path = socketIoWildcard(socketIoClient.Manager)
path(socket)

export const store: Store<IRootState, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(createLoggerMiddleware as any, createSocketMiddleware(socket) as any)
)