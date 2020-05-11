import React from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Color3, Vector3 } from '@babylonjs/core'
import { EngineScene } from '../engine-scene/EngineScene'

const BridgedContext = () => (
  <ThemeContext.Provider
    value={{
      color: Color3.FromHexString('#FFAF00'),
      position: new Vector3(0, 1, 0),
      name: 'testing',
    }}
  >
    <EngineScene />
  </ThemeContext.Provider>
)

export { BridgedContext }
