import React from 'react'
import { BaseControl } from './BaseControl'
import { Checkbox } from '@material-ui/core'

export function BooleanControl({ control, value }: any) {
  const htmlFor = `Control${control.id.current}`
  return (
    <BaseControl flexLabel label={control.name} htmlFor={htmlFor}>
      <Checkbox
        id={htmlFor}
        checked={value}
        onChange={(e) => control.set(e.currentTarget.checked)}
      />
      <label htmlFor={htmlFor} />
    </BaseControl>
  )
}
