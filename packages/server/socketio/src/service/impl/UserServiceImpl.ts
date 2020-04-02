import { DBProvider } from './../../core/helper/DBHelper'
import { IProjectService } from './../IProjectService'
import { injectable, inject } from 'inversify'
import { IUserService } from '../IUserService'
import { TYPES } from '../../constant'
import { provideSingleton, provide } from '../../core/ioc'
import { User } from '../../model/User'

// @injectable()
// @provideSingleton(TYPES.IUserService)
@provide(TYPES.UserService)
// @injectable()
export class UserServiceImpl implements IUserService {
  public async create(user: User): Promise<User> {
    const newUser = new User()

    newUser.username = user.username
    newUser.email = user.email

    const connection = await DBProvider.getConnection()
    return await connection.getRepository(User).save(newUser)
  }
  public async list(): Promise<User[]> {
    const connection = await DBProvider.getConnection()
    return await connection.getRepository(User).find()
  }
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
