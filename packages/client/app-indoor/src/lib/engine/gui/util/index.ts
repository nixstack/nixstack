import { ControlConfig } from '../Types'

export const defaultConfig = {
  type: 'number' as 'number',
  value: 0,
}

export const defaultValue = (config: ControlConfig) => {
  if (typeof config.value !== 'undefined') {
    return config.value
  }
  switch (config.type) {
    case 'number':
      return 0
    case 'string':
      return ''
    case 'select':
      return (config.items || [''])[0]
    case 'boolean':
      return false
  }
  return 0
}

export const clamp = (num: number, clamp: number, higher: number) =>
  higher ? Math.min(Math.max(num, clamp), higher) : Math.min(num, clamp)

export const map = (
  value: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2
