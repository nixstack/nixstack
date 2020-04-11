import React, { useState, useEffect } from 'react'
import { defaultValue } from '../util'
import { ButtonControl } from '../controls/ButtonControl'
import { BooleanControl } from '../controls/BooleanControl'

const ControlType = {
  boolean: BooleanControl,
  button: ButtonControl,
}

export function ControlItem({ control }: any) {
  const Control =
    control.config.component || (ControlType as any)[control.config.type]
  const [value, setValue] = useState(defaultValue(control.config))
  useEffect(() => {
    control.addEventListener(setValue)
  }, [])
  if (!Control) return null
  return <Control key={control.id.current} control={control} value={value} />
}
