import { dimCentiMeter } from './Dimensioning'

/** 2D视图的测量单位 */
export var configDimUnit = 'dimUnit'

/** 墙的初始高度 cm */
export const configWallHeight = 'wallHeight'
/** 墙的初始厚度 cm */
export const configWallThickness = 'wallThickness'

export const configSystemUI = 'systemUI'

export const scale = 'scale'

export const gridSpacing = 'gridSpacing'
export const snapToGrid = 'snapToGrid'
export const snapTolerance = 'snapTolerance' //In CMS

export const config = {
  // dimUnit: dimCentiMeter,
  dimUnit: dimCentiMeter || 'cm',
  wallHeight: 250,
  wallThickness: 10,
  systemUI: false,
  scale: 1,
  snapToGrid: false,
  snapTolerance: 25,
  gridSpacing: 25,

  modelCacheMaxSize: 20,
}

export class Config {
  static getData() {
    return config
  }
  static getNumericValue(key: string) {
    switch (key) {
      case configSystemUI:
      case configWallHeight:
      case configWallThickness:
      case scale:
      case snapToGrid:
      case snapTolerance:
      case gridSpacing:
        return Number(Config.getData()[key])
      default:
        throw new Error('无效的配置参数: ' + key)
    }
  }

  static getStringValue(key: string) {
    switch (key) {
      case configDimUnit:
        return String((Config.getData() as any)[key] + '')
      default:
        throw new Error('无效的配置参数: ' + key)
    }
  }
}
