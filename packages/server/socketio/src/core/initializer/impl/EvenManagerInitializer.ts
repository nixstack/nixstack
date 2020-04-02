import { IPostInstantiateInitializer } from '../IPostInstantiateInitializer'
import { inject } from 'inversify'
import { TYPES } from '../../../constant'
import { provideSingleton } from '../../ioc'

@provideSingleton(TYPES.PostInstantiateInitializer)
export class EvenManagerInitializer implements IPostInstantiateInitializer {
  private _socketIO: SocketIO.Server

  constructor(@inject(TYPES.SocketIO) socketIO: SocketIO.Server) {
    this._socketIO = socketIO
  }
  applyTo(server: import('http').Server): Promise<void> {
    return new Promise<void>(resolve => {
      this._socketIO.on('connect', (socket: SocketIO.Socket) => {
        console.log('Socket connected...')
      })

      resolve()
    })
  }
}
