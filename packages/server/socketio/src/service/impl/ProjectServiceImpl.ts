import { injectable, inject } from 'inversify'
import { IProjectService } from './../IProjectService'

@injectable()
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
