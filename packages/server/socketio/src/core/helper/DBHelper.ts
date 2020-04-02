import { Connection, createConnection } from 'typeorm'

import { User } from '../../model/User'
import { Project } from '../../model/Project'

export interface DBConfiguration {
  type: 'postgres' | 'mysql' | 'mongodb'
  host: string
  port: number
  username: string
  password: string
  database: string
  ssl?: boolean
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
      type,
      host,
      port,
      username,
      password,
      database,
      ssl
    } = DBProvider.configuration

    DBProvider.connection = await createConnection({
      type,
      host,
      port,
      username,
      password,
      database,
      extra: { ssl },
      entities: [User, Project],
      synchronize: true
    })

    return DBProvider.connection
  }
}
