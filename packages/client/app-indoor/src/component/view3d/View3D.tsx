import React from 'react'
import { Canvas } from 'react-three-fiber'
import { Box } from '../box/Box'

export class View3D extends React.Component {
  render() {
    return (
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    )
  }
}
