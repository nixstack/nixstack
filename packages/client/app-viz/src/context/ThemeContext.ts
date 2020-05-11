import React from 'react'
import { Color3, Vector3 } from '@babylonjs/core'

export const ThemeContext = React.createContext({
  color: Color3.Red(),
  position: Vector3.Zero(),
  name: 'default context',
})
