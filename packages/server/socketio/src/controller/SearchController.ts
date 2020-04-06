import { SearchServiceImpl } from '../service/impl/SearchService'
import { controller, httpGet, interfaces } from 'inversify-express-utils'
import { Request, Response } from 'express'
import { inject } from '../core/ioc'
import { TYPES } from '../constant'

@controller('/search')
export class SearchController implements interfaces.Controller {
  // @inject(TYPES.UserService)
  @inject(TYPES.SearchService) private _modelService!: SearchServiceImpl

  @httpGet('/model')
  public async list(req: Request, res: Response): Promise<void> {
    res.send({
      flag: 1,
      code: 2000,
      data: await this._modelService.searchModel(),
    })
  }
}
