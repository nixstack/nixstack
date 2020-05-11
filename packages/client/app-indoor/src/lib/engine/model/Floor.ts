import { Floorplan } from './Floorplan'
import Room from './Room'
import Event from '../event/Event'
import {
  Vector2,
  TextureLoader,
  RepeatWrapping,
  MeshPhongMaterial,
  DoubleSide,
  Shape,
  ShapeGeometry,
  Mesh,
  MeshBasicMaterial,
  Geometry,
  Vector3,
  Face3,
  FrontSide,
} from 'three'

export default class Floor extends Event {
  public scene: THREE.Scene
  public room: Room
  public floorplane!: Floorplan
  public roofplane: any

  constructor(scene: THREE.Scene, room: Room) {
    super()
    this.scene = scene
    this.room = room

    this.init()

    this.on('CHANGED_EVENT', () => this.redraw())
  }

  init() {
    this.floorplane = this.buildFloor()
    this.roofplane = this.buildRoofVaryingHeight()
  }
  buildRoofVaryingHeight(): any {
    // setup texture
    let roofMaterial = new MeshBasicMaterial({
      side: FrontSide,
      color: 0xe5e5e5,
    })
    let geometry = new Geometry()

    this.room.corners.forEach((corner) => {
      let vertex = new Vector3(corner.x, corner.elevation, corner.y)
      geometry.vertices.push(vertex)
    })
    for (let i = 2; i < geometry.vertices.length; i++) {
      let face = new Face3(0, i - 1, i)
      geometry.faces.push(face)
    }
    let roof = new Mesh(geometry, roofMaterial)
    // roof.rotation.set(Math.PI / 2, 0, 0);
    // roof.position.y = Configuration.getNumericValue(configWallHeight);
    return roof
  }
  buildFloor(): any {
    let textureSettings = this.room.getTexture()
    let floorTexture = new TextureLoader().load(textureSettings.url)
    floorTexture.wrapS = RepeatWrapping
    floorTexture.wrapT = RepeatWrapping
    floorTexture.repeat.set(1, 1)
    let floorMaterialTop = new MeshPhongMaterial({
      map: floorTexture,
      side: DoubleSide,
      // ambient: 0xffffff, TODO_Ekki
      color: 0xcccccc,
      specular: 0x0a0a0a,
    })
    let textureScale = textureSettings.scale

    let points: any = []
    this.room.interiorCorners.forEach((corner) => {
      points.push(new Vector2(corner.x / textureScale, corner.y / textureScale))
    })
    let shape = new Shape(points)
    let geometry = new ShapeGeometry(shape)
    let floor = new Mesh(geometry, floorMaterialTop)

    floor.rotation.set(Math.PI / 2, 0, 0)
    floor.scale.set(textureScale, textureScale, textureScale)
    floor.receiveShadow = true
    floor.castShadow = false
    return floor
  }

  redraw() {}

  removeFromScene() {
    this.scene.remove(this.floorplane as any)
    this.scene.remove(this.roofplane as any)
    this.scene.remove(this.room.floorplane as any)
    this.scene.remove(this.room.roofplane)
  }

  /**
   * 增加地板和天花板到场景
   */
  addToScene() {
    this.scene.add(this.floorplane as any)
    // this.scene.add(this.roofplane)
  }
}
