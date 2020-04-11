export default class AssetCache {
  public cache: { [key: string]: any }
  public maxSize: number

  constructor(maxSize: number) {
    this.cache = {}
    this.maxSize = maxSize
  }

  public getAsset(id: string) {
    if (this.cache.hasOwnProperty(id)) {
      return this.cache[id].asset
    } else {
      return null
    }
  }

  public addAsset(id: any, asset: any, size?: number) {
    if (this.cache.hasOwnProperty(id)) {
      return
    }

    size = size || 1
    this.cache[id] = this.makeCacheEntry(id, asset, size)
  }

  public makeCacheEntry(id: any, asset: any, size?: number) {
    return {
      id,
      asset,
      size,
      timestamp: Date.now(),
    }
  }
}
