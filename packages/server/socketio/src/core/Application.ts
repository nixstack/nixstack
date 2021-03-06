import { provide } from 'inversify-binding-decorators'
import { IPostInstantiateInitializer } from './initializer/IPostInstantiateInitializer'
import { TYPES } from '../constant'
import { IPreBuildInitializer } from './initializer/IPreBuildInitializer'
import http from 'http'
import { InversifyExpressServer } from 'inversify-express-utils'
import { multiInject, interfaces as inversifyInterfaces } from 'inversify'
import shareConfig from '@share/config'
import express from 'express'
import io from 'socket.io'
import { provideSingleton } from './ioc'
import fs from 'fs'

@provideSingleton(TYPES.Application)
export class Application {
  private _express!: InversifyExpressServer
  private _httpServer!: http.Server
  private _preBuildInitializers: IPreBuildInitializer[]
  private _postInstantiateInitializers!: IPostInstantiateInitializer[]
  private _app!: express.Application

  public constructor(
    @multiInject(TYPES.PreBuildInitializer)
    preBuildInitializers: IPreBuildInitializer[]
  ) {
    this._preBuildInitializers = preBuildInitializers
  }

  public setExpress(express: InversifyExpressServer) {
    this._express = express
  }

  public getHttpServer(): http.Server {
    return this._httpServer
  }

  public run(container: inversifyInterfaces.Container): void {
    this.preBuildInit(this._express)
      .then(() => this.instantiate(container))
      .then(() => {
        this._postInstantiateInitializers = container.getAll<
          IPostInstantiateInitializer
        >(TYPES.PostInstantiateInitializer)
      })
      .then(() => {
        this.postInitialized()
      })
      .catch((err: Error) => console.log(err))
  }

  protected instantiate(
    container: inversifyInterfaces.Container
  ): Promise<void> {
    return new Promise<void>((resolve) => {
      this._app = this._express.build()
      const port = shareConfig.SOCKETIO_SERVER_PORT

      let comunication: any
      if (shareConfig.NODE_ENV === 'development') {
        comunication = port
      } else {
        fs.openSync('/tmp/app-initialized', 'w')
        comunication = '/tmp/nginx.socket'
        // FIX: address in used
        if (comunication && fs.existsSync(comunication))
          fs.unlinkSync(comunication)
      }

      this._httpServer = this._app.listen(comunication, () => {
        // FIX: Permission denied
        if (comunication && fs.existsSync(comunication))
          fs.chmodSync(comunication, 755)
        console.log(`Server started at ${comunication}`)
      })

      const socketIO: any = io(this.getHttpServer())
      socketIO.set('transports', ['websocket'])
      container.bind<SocketIO.Server>(TYPES.SocketIO).toConstantValue(socketIO)
      resolve()
    })
  }

  protected preBuildInit(express: InversifyExpressServer): Promise<void[]> {
    return Promise.all(
      this._preBuildInitializers.map((initializer: IPreBuildInitializer) =>
        initializer.applyTo(express)
      )
    )
  }

  protected postInitialized(): Promise<void[]> {
    return Promise.all(
      this._postInstantiateInitializers.map(
        (initializer: IPostInstantiateInitializer) =>
          initializer.applyTo(this._httpServer)
      )
    )
  }
}
