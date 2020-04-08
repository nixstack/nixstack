import { UserServiceImpl } from './../service/impl/UserServiceImpl'
import { provide, inject, provideNamed } from '../core/ioc'
import { TYPES } from '../constant'
import {
  controller,
  httpGet,
  interfaces,
  TYPE,
  httpPost,
} from 'inversify-express-utils'
import { IUserService } from '../service'
import { Request, Response } from 'express'

// @provide(TYPES.IUserService, true)
// @provideNamed(TYPE.Controller, 'UserController')
@controller('/user')
export class UserController implements interfaces.Controller {
  // @inject(TYPES.UserService)
  // private _userService!: IUserService
  constructor(
    @inject(TYPES.UserService) private _userService: UserServiceImpl
  ) {}

  @httpPost('/')
  private async create(req: Request, res: Response): Promise<void> {
    res.send(await this._userService.create(req.body))
  }

  @httpGet('/')
  public async list(req: Request, res: Response): Promise<void> {
    res.send(await this._userService.list())
  }
}
