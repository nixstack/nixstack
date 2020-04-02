import { TAGS } from './../../../../constant/Tags'
import { IEventListener } from '../IEventListener'
import { EVENT_TYPE_MAP } from '../../../../constant/Events'
import { IEventManagerProvider } from '../IEventManager'
import { TYPES } from '../../../../constant'
import {
  provideNamedSingleton,
  inject,
  provideSingleton
} from '../../../../core/ioc'

// @provideNamedSingleton(
//   TYPES.IEventManagerProvider,
//   TAGS.SocketEventManagerProvider
// )
@provideSingleton(TYPES.IEventManagerProvider)
export class SocketIOEventManager implements IEventManagerProvider {
  protected _socketServer: SocketIO.Server
  protected _socket!: SocketIO.Socket

  public constructor(@inject(TYPES.SocketIO) socketServer: SocketIO.Server) {
    this._socketServer = socketServer
  }

  public set socket(socket: SocketIO.Socket) {
    this._socket = socket
  }
  type(): string {
    return EVENT_TYPE_MAP.socket
  }
  emit(event: import('../IEvent').IEvent): void {
    this._socketServer.emit(event.name(), event.data())
  }
  on(eventName: string, callback: Function): void {
    // this._socketServer.on(eventName, callback)
  }

  public initSocketListener(
    socket: SocketIO.Socket,
    eventListeners: IEventListener[]
  ): void {
    eventListeners
      .filter(
        (eventListener: IEventListener) => eventListener.type() === this.type()
      )
      .forEach((eventListener: IEventListener) =>
        eventListener.handlers().forEach((eventHander: Function) =>
          ((hander: Function) => {
            socket.on(eventListener.name(), (action: any) => {
              // hander.apply(null, payload)
              hander(action)
            })
          })(eventHander)
        )
      )
  }
}
