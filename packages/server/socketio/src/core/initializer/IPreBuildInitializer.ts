import { InversifyExpressServer } from 'inversify-express-utils'
export interface IPreBuildInitializer {
  applyTo(express: InversifyExpressServer): Promise<void>
}
