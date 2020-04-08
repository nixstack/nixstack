import { controller, httpGet, interfaces } from 'inversify-express-utils'
import { Request, Response } from 'express'

@controller('/files')
export class FileController implements interfaces.Controller {
  @httpGet('/**/*')
  public async get(req: Request, res: Response): Promise<void> {
    console.log(req)
    res.send('haah')
  }
}
