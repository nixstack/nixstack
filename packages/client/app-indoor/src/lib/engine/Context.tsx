import { Floorplan } from './model/Floorplan'
import React from 'react'

export const defaultContext = {
  floorplan: new Floorplan(),
}

export const Context = React.createContext(defaultContext)
