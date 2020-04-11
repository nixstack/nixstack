import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

export default class Model {
  public id: any
  public gltf: GLTF

  constructor(id: any, gltf: GLTF) {
    this.id = id
    this.gltf = gltf
  }
}
