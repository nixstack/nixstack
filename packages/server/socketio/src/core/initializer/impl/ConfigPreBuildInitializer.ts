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
    return new Promise<void>((resolve) => {
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
          type: shareConfig.DB_DIALECT as any,
          // database: shareConfig.DB_DATABASE as any,
          // username: shareConfig.DB_USERNAME as any,
          // password: shareConfig.DB_PASSWORD as any,
          // host: shareConfig.DB_HOST as any,
          // port: shareConfig.DB_PORT as any,
          url: shareConfig.DATABASE_URL,
        })
      })
      resolve()
    })
  }
}
