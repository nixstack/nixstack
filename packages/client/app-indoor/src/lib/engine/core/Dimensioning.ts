import { Config, configDimUnit } from './Config'

/** 标注单位 in Inch. */
export const dimInch = 'inch'

/** 标注单位  in Inch. */
export const dimFeetAndInch = 'feetAndInch'

/** 标注单位 in Meter. */
export const dimMeter = 'm'

/** 标注单位 in Centi Meter. */
export const dimCentiMeter = 'cm'

/** 标注单位 in Milli Meter. */
export const dimMilliMeter = 'mm'

export const decimals = 1000

export const cmPerFoot = 30.48
export const pixelsPerFoot = 15.0
export const cmPerPixel = cmPerFoot * (1.0 / pixelsPerFoot)
export const pixelsPerCm = 1.0 / cmPerPixel

export class Dimensioning {
  /**
   * 从标注中转换成cm
   * @param measure
   */
  static cmFromMeasureRaw(measure: number) {
    switch (Config.getStringValue(configDimUnit)) {
      case dimFeetAndInch:
        return (
          Math.round(decimals * (measure * 30.480016459203095991)) / decimals
        )
      case dimInch:
        return (
          Math.round(decimals * (measure * 2.5400013716002578512)) / decimals
        )
      case dimMilliMeter:
        return (
          Math.round(decimals * (measure * 0.10000005400001014955)) / decimals
        )
      case dimCentiMeter:
        return measure
      case dimMeter:
      default:
        return Math.round(decimals * 100 * measure) / decimals
    }
  }

  static cmToPixel(cm: any, apply_scale = true) {
    if (apply_scale) {
      return cm * pixelsPerCm * Config.getNumericValue('scale')
    }
    return cm * pixelsPerCm
  }

  static pixelToCm(pixel: any, apply_scale = true) {
    if (apply_scale) {
      return pixel * cmPerPixel * (1.0 / Config.getNumericValue('scale'))
    }
    return pixel * cmPerPixel
  }

  /**
   * 转cm到标注
   * @param cm
   * @param power
   */
  static cmToMeasureRaw(cm: number, power = 1) {
    switch (Config.getStringValue(configDimUnit)) {
      case dimFeetAndInch: // dimFeetAndInch returns only the feet
        var allInFeet = cm * Math.pow(0.032808416666669996953, power)
        return allInFeet
      case dimInch:
        var inches =
          Math.round(decimals * (cm * Math.pow(0.3937, power))) / decimals
        return inches
      case dimMilliMeter:
        var mm = Math.round(decimals * (cm * Math.pow(10, power))) / decimals
        return mm
      case dimCentiMeter:
        return Math.round(decimals * cm) / decimals
      case dimMeter:
      default:
        var m = Math.round(decimals * (cm * Math.pow(0.01, power))) / decimals
        return m
    }
  }

  /**
   *
   * @param cm
   * @param power
   */
  static cmToMeasure(cm: number, power = 1) {
    switch (Config.getStringValue(configDimUnit)) {
      case dimFeetAndInch:
        var allInFeet = cm * Math.pow(0.032808416666669996953, power)
        var floorFeet = Math.floor(allInFeet)
        var remainingFeet = allInFeet - floorFeet
        var remainingInches = Math.round(remainingFeet * 12)
        return floorFeet + "'" + remainingInches + '"'
      case dimInch:
        var inches =
          Math.round(decimals * (cm * Math.pow(0.3937, power))) / decimals
        return inches + "'"
      case dimMilliMeter:
        var mm = Math.round(decimals * (cm * Math.pow(10, power))) / decimals
        return '' + mm + 'mm'
      case dimCentiMeter:
        return '' + Math.round(decimals * cm) / decimals + 'cm'
      case dimMeter:
      default:
        var m = Math.round(decimals * (cm * Math.pow(0.01, power))) / decimals
        return '' + m + 'm'
    }
  }
}
