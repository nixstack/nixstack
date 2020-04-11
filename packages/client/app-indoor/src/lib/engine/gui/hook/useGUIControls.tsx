import { ControlConfig, ControlItem } from '../Types'
import { defaultConfig, defaultValue } from '../util'
import { useRef, useState, useEffect } from 'react'
import { controls, controlsEmitter } from '..'

let uid = 0
export const useGUIControls = (
  name: string,
  config: ControlConfig = defaultConfig
) => {
  const id = useRef(uid++)
  const listener = useRef<Function>()
  let [value, set] = useState(defaultValue(config))

  if (config.state) {
    value = config.state[0]
    set = config.state[1]
  }

  useEffect(() => {
    const control: ControlItem = {
      id,
      name,
      set,
      value,
      config,
      addEventListener(fn: Function) {
        listener.current = fn
      },
    }
    controls.set(id, control)
    controlsEmitter.update()
    return () => {
      controls.delete(id)
      controlsEmitter.update()
    }
  }, [])

  useEffect(() => {
    listener.current && void listener.current(value)
    config.onChange && void config.onChange(value)
  }, [value])

  return value
}
