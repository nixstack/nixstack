import { RefObject, Dispatch, SetStateAction } from 'react'

export type ControlId = RefObject<number>

export type ControlItem = {
  id: ControlId
  name: string
  set: any
  value: any
  config: ControlConfig
  addEventListener: any
}

type ControlConfigBase = {
  value?: any
  group?: string
  state?: [any, Dispatch<SetStateAction<any>>]
  onChange?(value: any): void
}

type ControlConfigCustom = {
  type: 'custom'
  component?: any
}

type ControlConfigNumber = {
  type: 'number'
  min?: number
  max?: number
  value?: number
  distance?: number
  scrub?: boolean
}

type ControlConfigString = {
  type: 'string'
  value?: string
}

type ControlConfigButton = {
  type: 'button'
  onClick?(): void
}

type ControlConfigBoolean = {
  type: 'boolean'
  value?: boolean
}
type ControlConfigSelect = {
  type: 'select'
  items: string[]
  value?: string
}

export type ControlConfig = ControlConfigBase &
  (
    | ControlConfigCustom
    | ControlConfigNumber
    | ControlConfigBoolean
    | ControlConfigString
    | ControlConfigButton
    | ControlConfigSelect
  )
