import { Floorplan } from './Floorplan'
import {
  Vector2,
  Shape,
  ShapeGeometry,
  Mesh,
  MeshBasicMaterial,
  DoubleSide,
  Box3,
  Vector3,
  Geometry,
  Face3,
} from 'three'
import Corner from './Corner'
import HalfEdge from './HalfEdge'
import * as Utils from 'src/lib/util/Utils'

export default class Room {
  public name = ''
  public floorplane!: Floorplan
  public roofplane: any
  public corners: Corner[] = []
  public interiorCorners: Vector2[] = []
  public roomByCornersId = ''
  public min!: Vector3
  public max!: Vector3
  public center!: Vector3

  public edgePointer!: HalfEdge | null

  public area = 0.0
  public areaCenter!: Vector2
  // private _polygonPoints!: any[]

  constructor(floorplane: Floorplan, corners: Corner[]) {
    this.floorplane = floorplane
    this.corners = corners
    this.updateWalls()
    this.updateInteriorCorners()
    this.generatePlane()
    this.generateRoofPlane()

    const cornerids = []
    for (let i = 0; i < this.corners.length; i++) {
      let corner = this.corners[i]
      corner.attachRoom(this)
      cornerids.push(corner.id)
    }

    this.roomByCornersId = cornerids.join(',')
  }

  public updateWalls() {
    let prevEdge = null
    let firstEdge = null

    for (let i = 0; i < this.corners.length; i++) {
      let firstCorner = this.corners[i]
      let secondCorner = this.corners[(i + 1) % this.corners.length]

      let wallTo = firstCorner.wallTo(secondCorner)
      let wallFrom = firstCorner.wallFrom(secondCorner)
      let edge: any
      if (wallTo) {
        edge = new HalfEdge(this, wallTo, true)
      } else if (wallFrom) {
        edge = new HalfEdge(this, wallFrom, false)
      } else {
        console.log('corners arent connected by a wall')
        return
      }

      if (i == 0) {
        firstEdge = edge
      } else {
        edge!.prev = prevEdge
        prevEdge!.next = edge
        if (i + 1 == this.corners.length) {
          firstEdge!.prev = edge
          edge.next = firstEdge
        }
      }
      prevEdge = edge
    }

    this.edgePointer = firstEdge
  }

  public updateInteriorCorners() {
    let edge = this.edgePointer
    let iterateWhile = true
    while (iterateWhile) {
      this.interiorCorners.push(edge!.interiorStart())
      edge!.generatePlane()
      if (edge!.next === this.edgePointer) {
        break
      } else {
        edge = edge!.next
      }
    }
  }

  public generatePlane() {
    const points: Vector2[] = []

    this.interiorCorners.forEach((item: any) => {
      points.push(new Vector2(item.x, item.y))
    })

    const shape = new Shape(points)
    const gemometry = new ShapeGeometry(shape)

    this.floorplane = new Mesh(
      gemometry,
      new MeshBasicMaterial({ side: DoubleSide, visible: false })
    ) as any
    ;(this.floorplane as any).visible = true
    ;(this.floorplane as any).rotation.set(Math.PI / 2, 0, 0)
    ;(this.floorplane as any).userData.room = this

    const box3 = new Box3()
    box3.setFromObject(this.floorplane as any)
    this.min = box3.min.clone()
    this.max = box3.max.clone()
    this.center = this.max
      .clone()
      .sub(this.min)
      .multiplyScalar(0.5)
      .add(this.min)
  }

  public generateRoofPlane() {
    if (this.roofplane && this.roofplane != null) {
      if (this.roofplane.parent != null) {
        this.roofplane.parent.remove(this.roofplane)
      }
    }
    // setup texture
    var geometry = new Geometry()

    this.corners.forEach((corner) => {
      var vertex = new Vector3(corner.x, corner.elevation, corner.y)
      geometry.vertices.push(vertex)
    })
    for (var i = 2; i < geometry.vertices.length; i++) {
      var face = new Face3(0, i - 1, i)
      geometry.faces.push(face)
    }
    this.roofplane = new Mesh(
      geometry,
      new MeshBasicMaterial({ side: DoubleSide, visible: false })
    )
    this.roofplane.room = this
  }

  updateArea() {
    // let oldarea = this.area
    let points = []
    let allpoints = []
    this.areaCenter = new Vector2()
    // this._polygonPoints = []

    let corner, region
    // let wall
    // let firstCorner
    // let secondCorner

    for (let i = 0; i < this.corners.length; i++) {
      corner = this.corners[i]
      // firstCorner = this.corners[i]
      // secondCorner = this.corners[(i + 1) % this.corners.length]
      // wall = firstCorner.wallToOrFrom(secondCorner)

      allpoints.push(corner.location.clone())
    }

    points = allpoints
    region = new Utils.Region(points)
    this.area = Math.abs(region.area())
    this.areaCenter = region.centroid()
    // this._polygonPoints = points
    // this.dispatchEvent({
    //   type: EVENT_ROOM_ATTRIBUTES_CHANGED,
    //   item: this,
    //   info: { from: oldarea, to: this.area },
    // })
  }

  getTexture() {
    // let uuid = this.getUuid()
    // let tex = this.floorplane.getFloorTexture(uuid)
    // return tex || defaultRoomTexture
    return defaultRoomTexture
  }

  getUuid() {
    let cornerUuids = Utils.map(this.corners, function (c: any) {
      return c.id
    })
    cornerUuids.sort()
    return cornerUuids.join()
  }
}

export const defaultRoomTexture = {
  url: 'files/texture/hardwood.png',
  scale: 400,
}
