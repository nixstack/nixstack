import { TAGS } from './../../../constant/Tags'
import { SocketIOEventManager } from './../../event/manger/provider/SocketIOEventManager'
import { EVENT_TYPES } from '@share/constant'
import { IEventListener } from './../../event/manger/IEventListener'
import {
  IEventManager,
  IEventManagerProvider
} from './../../event/manger/IEventManager'
import { IPostInstantiateInitializer } from '../IPostInstantiateInitializer'
import { inject } from 'inversify'
import { TYPES } from '../../../constant'
import {
  provideSingleton,
  multiInject,
  named,
  lazyMultiInject
} from '../../ioc'

@provideSingleton(TYPES.PostInstantiateInitializer)
export class EvenManagerInitializer implements IPostInstantiateInitializer {
  // @multiInject(TYPES.IEventManagerProvider) public _eventManager: IEventManager
  // @lazyMultiInject(TYPES.IEventManagerProvider)
  // private _eventManager: IEventManager
  private _eventManager: IEventManager
  private _eventProviders!: IEventManagerProvider[]
  private _eventListeners: IEventListener[]
  private _socketIO: SocketIO.Server

  constructor(
    @inject(TYPES.IEventManager) eventManager: IEventManager,
    // single inject
    // @inject(TYPES.IEventManagerProvider)
    // @named(TAGS.SocketEventManagerProvider)
    // eventProviders: IEventManagerProvider[],
    // inversify-inject-decorators
    // https://github.com/inversify/InversifyJS/issues/342
    @multiInject(TYPES.IEventManagerProvider)
    eventProviders: IEventManagerProvider[],
    @multiInject(TYPES.IEventListener) eventListeners: IEventListener[],
    @inject(TYPES.SocketIO) socketIO: SocketIO.Server
  ) {
    this._eventManager = eventManager
    this._eventProviders = eventProviders
    this._eventListeners = eventListeners
    this._socketIO = socketIO
  }
  applyTo(server: import('http').Server): Promise<void> {
    return new Promise<void>(resolve => {
      this._eventManager.initProviders(this._eventProviders)
      this._eventManager.initListeners(this._eventListeners)
      this._socketIO.on('connect', (socket: SocketIO.Socket) => {
        console.log('Socket connected...')
        ;(<SocketIOEventManager>(
          this._eventManager.getRegisteredEventProvider(EVENT_TYPES.socket)
        )).initSocketListener(socket, this._eventListeners)
      })

      resolve()
    })
  }
}
