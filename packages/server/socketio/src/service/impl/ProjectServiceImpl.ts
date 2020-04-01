import { TYPES } from '../../constant'
import { injectable, inject } from 'inversify'
import { IProjectService } from './../IProjectService'
import { provide } from 'inversify-binding-decorators'

@provide(TYPES.ProjectService)
export class ProjectServiceImpl implements IProjectService {
  getAll(): any[] {
    return [
      {
        id: 1,
        name: 'test'
      }
    ]
  }
}
