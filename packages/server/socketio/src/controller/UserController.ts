import { UserServiceImpl } from './../service/impl/UserServiceImpl'
import { provide, inject, provideNamed } from '../ioc'
import { TYPES } from '../constant'
import { controller, httpGet, interfaces, TYPE } from 'inversify-express-utils'
import { IUserService } from '../service'

// @provide(TYPES.IUserService, true)
// @provideNamed(TYPE.Controller, 'UserController')
@controller('/user')
export class UserController implements interfaces.Controller {
  // @inject(TYPES.UserService)
  // private _userService!: IUserService
  constructor(
    @inject(TYPES.UserService) private _userService: UserServiceImpl
  ) {}

  @httpGet('/')
  public get(): string {
    return this._userService.sayHello()
  }
}
