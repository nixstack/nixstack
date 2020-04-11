import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '8px 0',
    },

    label: {
      flex: 1,
      textAlign: 'left',
      userSelect: 'none',
    },
  })
)

type BaseControlProps = {
  label?: string
  flexLabel?: boolean
  value?: string
  children?: any
  htmlFor?: any
}

export function BaseControl({
  htmlFor,
  label,
  value,
  children,
}: BaseControlProps) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.label}>
        <label htmlFor={htmlFor}>{label}</label>
      </div>
      <div>{children}</div>
      {typeof value !== 'undefined' && <div>{value}</div>}
    </div>
  )
}
