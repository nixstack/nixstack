import { Model } from './../../model/Model'
import { Connection, createConnection } from 'typeorm'

import { User } from '../../model/User'
import { Project } from '../../model/Project'

export interface DBConfiguration {
  type: 'postgres' | 'mysql' | 'mongodb'
  host?: string
  port?: number
  username?: string
  password?: string
  database?: string
  ssl?: boolean
  url?: string
}

export class DBProvider {
  private static connection: Connection
  private static configuration: DBConfiguration

  public static configure(databaseConfiguration: DBConfiguration): void {
    DBProvider.configuration = databaseConfiguration
  }

  public static async getConnection(): Promise<Connection> {
    if (DBProvider.connection) {
      return DBProvider.connection
    }

    if (!DBProvider.configuration) {
      throw new Error('Please configure.')
    }

    const {
      type = 'postgres',
      // host,
      // port,
      // username,
      // password,
      // database,
      url,
    } = DBProvider.configuration

    try {
      DBProvider.connection = await createConnection({
        type,
        // host,
        // port,
        // username,
        // password,
        // database,
        extra: {
          ssl: {
            // https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: url?.includes('localhost') ? false : false,
          },
        },
        url,
        entities: [User, Project, Model],
        subscribers: [],
        synchronize: true,
      })
    } catch (error) {
      throw error
    }

    return DBProvider.connection
  }
}
