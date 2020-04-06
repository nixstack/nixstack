import { Model } from '../../model/Model'
import { TYPES } from '../../constant'
import { provide } from 'inversify-binding-decorators'
import { DBProvider } from '../../core/helper/DBHelper'

@provide(TYPES.SearchService)
export class SearchServiceImpl {
  public async searchModel(): Promise<Model[]> {
    const connection = await DBProvider.getConnection()
    return await connection.getRepository(Model).find()
  }
}
