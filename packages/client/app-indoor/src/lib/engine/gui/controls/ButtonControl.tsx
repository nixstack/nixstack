import React from 'react'
import { Button } from '@material-ui/core'

export function ButtonControl({ control }: any) {
  return (
    <div style={{ paddingTop: 8, paddingBottom: 8 }}>
      <Button
        onClick={() => {
          if (control.config.onClick) {
            control.config.onClick()
          }
        }}
      >
        {control.name}
      </Button>
    </div>
  )
}
