import AssetCache from './AssetCache'
import Model from './Model'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const modelCacheMaxSize = 20
export const textureCacheMaxSize = 20

export default class AssetManager {
  public modelCache!: AssetCache
  public textureCache!: AssetCache
  public downloadingModels!: { [key: string]: any }
  public downloadingMeshes!: { [key: string]: any }
  public downloadingImages!: { [key: string]: any }
  public callDownload!: { [key: string]: any }
  private static _instance: AssetManager

  private constructor() {
    this.modelCache = new AssetCache(modelCacheMaxSize)
    this.textureCache = new AssetCache(textureCacheMaxSize)
    this.downloadingModels = {}
    this.downloadingMeshes = {}
    this.downloadingImages = {}
    this.callDownload = {}
  }

  public static getInstance(): AssetManager {
    if (!this._instance) {
      return (this._instance = new AssetManager())
    }

    return this._instance
  }

  public callOnDownload() {}

  public getModel(id: any, callback: (model: any) => void) {
    const model = this.modelCache.getAsset(id)

    if (model) {
      callback(model)
    } else if (this.callDownload[id]) {
      const originCallback = this.callDownload[id]

      this.callDownload[id] = (model: any) => {
        originCallback(model)
        callback(model)
      }
    } else {
      this.downloadModel(id, callback)
    }
  }

  public downloadModel(id: any, callback: (model: any) => void) {
    const download = new GLTFLoader().load(
      `/files/geometry/${id}.glb`,
      (gltf) => {
        const model = new Model(id, gltf)

        this.modelCache.addAsset(id, model)

        const originCall = this.callDownload[id]
        delete this.callDownload[id]
        originCall(model)
      }
    )

    this.downloadingModels[id] = download
    this.callDownload[id] = callback

    return download
  }
}
