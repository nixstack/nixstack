import { Model } from '../model'

export interface ISearchService {
  searchModel: Promise<Model[]>
}
