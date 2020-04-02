import { IProjectService } from './../IProjectService'
import { injectable, inject } from 'inversify'
import { IUserService } from '../IUserService'
import { TYPES } from '../../constant'
import { provideSingleton, provide } from '../../core/ioc'

// @injectable()
// @provideSingleton(TYPES.IUserService)
@provide(TYPES.UserService)
// @injectable()
export class UserServiceImpl implements IUserService {
  // private _project: IProjectService

  @inject(TYPES.ProjectService)
  private _project!: IProjectService

  // public constructor(@inject(TYPES.IProjectService) project: IProjectService) {
  //   this._project = project
  // }
  sayHello(): string {
    return 'Hello World!' + JSON.stringify(this._project.getAll())
  }
}
