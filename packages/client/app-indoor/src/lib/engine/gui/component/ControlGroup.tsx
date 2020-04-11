import React from 'react'
import { ControlItem } from './ControlItem'

export const ControlGroup = ({ title, controls }: any) => {
  return (
    <div>
      {Array.from(controls).map(([id, control]: any) => (
        <ControlItem key={id.current} control={control} />
      ))}
    </div>
  )
}
