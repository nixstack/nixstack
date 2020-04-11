import { ControlId, ControlItem } from './Types'

export * from './GUIControls'
export const controls = new Map<ControlId, ControlItem>()
export const controlsEmitter = { update: () => null }
