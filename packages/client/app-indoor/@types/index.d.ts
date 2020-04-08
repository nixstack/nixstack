declare module 'ThreeEngine' {
  import * as _THREE from 'three'
  namespace THREE {
    // 从'three'重新导出定义
    // export import WebGLBufferRendere = _THREE.WebGLBufferRenderer
    // export import Camera = _THREE.Camera
    // export import Scene = _THREE.Scene
    export * from 'three'
  }

  class Mesh<
    G extends _THREE.Geometry,
    M extends _THREE.Material
  > extends _THREE.Mesh {
    geometry: G
    material: M
    positions: any
    constructor(geometry: G, material: M)
  }
}

declare module 'ThreeEngine' {
  export namespace MAIN_LOOP_EVENTS {
    const BEFORE_RENDER: string
    const UPDATE_END: string
    const UPDATE_START: string
  }
}

// declare module 'ThreeEngine' {
//   class Mesh<
//     G extends _THREE.Geometry,
//     M extends _THREE.Material
//   > extends _THREE.Mesh {
//     geometry: G
//     material: M
//     constructor(geometry: G, material: M)
//   }
// }
