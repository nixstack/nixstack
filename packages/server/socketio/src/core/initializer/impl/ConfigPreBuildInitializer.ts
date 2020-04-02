import { provideSingleton } from '../../ioc'
import { IPreBuildInitializer } from '../IPreBuildInitializer'
import { InversifyExpressServer } from 'inversify-express-utils'
import express from 'express'
import bodyParser from 'body-parser'
import { TYPES } from '../../../constant'
import shareConfig from '@share/config'
import { DBProvider } from '../../helper/DBHelper'

@provideSingleton(TYPES.PreBuildInitializer)
export class ConfigPreBuildInitializer implements IPreBuildInitializer {
  applyTo(expressServer: InversifyExpressServer): Promise<void> {
    return new Promise<void>(resolve => {
      expressServer.setConfig((app: express.Application) => {
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        // Webpack-Dev-Server
        // app.use(
        //   '/',
        //   express.static(shareConfig.APP_INDOOR_STATIC_FILE as string)
        // )

        // DB
        DBProvider.configure({
          type: 'postgres',
          database: 'app_indoor',
          username: 'postgres',
          password: 'root',
          host: 'localhost',
          port: 5432
        })
      })
      resolve()
    })
  }
}
