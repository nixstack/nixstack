import Room from './Room'
import Wall from './Wall'
import {
  Vector2,
  Geometry,
  Vector3,
  Face3,
  Mesh,
  MeshBasicMaterial,
  Matrix4,
  Box3,
} from 'three'
import * as Utils from '../../util/Utils'

interface IPlane extends Mesh {
  edge: any
}

export default class HalfEdge {
  public room: Room
  public wall: Wall
  public front: boolean
  public next!: HalfEdge | null
  public offset = 0.0
  public prev = null
  public plane!: IPlane

  public interiorTransform = new Matrix4()
  public invInteriorTransform = new Matrix4()
  public exteriorTransform = new Matrix4()
  public invExteriorTransform = new Matrix4()
  public min!: Vector3
  public max!: Vector3
  public center!: Vector3

  constructor(room: Room, wall: Wall, front: boolean = false) {
    this.room = room
    this.wall = wall
    this.front = front

    if (this.front) {
      this.wall.frontEdge = this
    } else {
      this.wall.backEdge = this
    }
  }

  interiorStart(): Vector2 {
    let vec = this.halfAngleVector(this.prev, this)
    return new Vector2(this.getStart().x + vec.x, this.getStart().y + vec.y)
  }

  interiorEnd() {
    let vec = this.halfAngleVector(this, this.next)
    return new Vector2(this.getEnd().x + vec.x, this.getEnd().y + vec.y)
  }

  halfAngleVector(v1: any, v2: any) {
    let v1startX = 0.0,
      v1startY = 0.0,
      v1endX = 0.0,
      v1endY = 0.0
    let v2startX = 0.0,
      v2startY = 0.0,
      v2endX = 0.0,
      v2endY = 0.0

    // make the best of things if we dont have prev or next
    if (!v1) {
      v1startX = v2.getStart().x - (v2.getEnd().x - v2.getStart().x)
      v1startY = v2.getStart().y - (v2.getEnd().y - v2.getStart().y)

      v1endX = v2.getStart().x
      v1endY = v2.getStart().y
    } else {
      v1startX = v1.getStart().x
      v1startY = v1.getStart().y
      v1endX = v1.getEnd().x
      v1endY = v1.getEnd().y
    }

    if (!v2) {
      v2startX = v1.getEnd().x
      v2startY = v1.getEnd().y
      v2endX = v1.getEnd().x + (v1.getEnd().x - v1.getStart().x)
      v2endY = v1.getEnd().y + (v1.getEnd().y - v1.getStart().y)
    } else {
      v2startX = v2.getStart().x
      v2startY = v2.getStart().y
      v2endX = v2.getEnd().x
      v2endY = v2.getEnd().y
    }

    // CCW angle between edges
    let theta = Utils.angle2pi(
      new Vector2(v1startX - v1endX, v1startY - v1endY),
      new Vector2(v2endX - v1endX, v2endY - v1endY)
    )

    // cosine and sine of half angle
    let cs = Math.cos(theta / 2.0)
    let sn = Math.sin(theta / 2.0)

    // rotate v2
    let v2dx = v2endX - v2startX
    let v2dy = v2endY - v2startY

    let vx = v2dx * cs - v2dy * sn
    let vy = v2dx * sn + v2dy * cs

    // normalize
    let mag = Utils.distance(new Vector2(0, 0), new Vector2(vx, vy))
    let desiredMag = this.offset / sn
    let scalar = desiredMag / mag

    let halfAngleVector = { x: vx * scalar, y: vy * scalar } //new Vector2(vx * scalar, vy * scalar);
    return halfAngleVector
  }

  getStart() {
    if (this.front) {
      return this.wall.getStart()
    } else {
      return this.wall.getEnd()
    }
  }

  getEnd() {
    if (this.front) {
      return this.wall.getEnd()
    } else {
      return this.wall.getStart()
    }
  }

  generatePlane() {
    let geometry = new Geometry()
    let v1 = this.transformCorner(this.interiorStart())
    let v2 = this.transformCorner(this.interiorEnd())
    let v3 = v2.clone()
    let v4 = v1.clone()

    // v3.y = this.wall.height;
    // v4.y = this.wall.height;

    v3.y = this.wall.startElevation
    v4.y = this.wall.endElevation

    geometry.vertices = [v1, v2, v3, v4]
    geometry.faces.push(new Face3(0, 1, 2))
    geometry.faces.push(new Face3(0, 2, 3))
    geometry.computeFaceNormals()
    geometry.computeBoundingBox()

    this.plane = new Mesh(
      geometry,
      new MeshBasicMaterial({ visible: true })
    ) as IPlane
    this.plane.visible = true
    this.plane.edge = this // js monkey patch

    this.computeTransforms(
      this.interiorTransform,
      this.invInteriorTransform,
      this.interiorStart(),
      this.interiorEnd()
    )
    this.computeTransforms(
      this.exteriorTransform,
      this.invExteriorTransform,
      this.exteriorStart(),
      this.exteriorEnd()
    )

    let b3 = new Box3()
    b3.setFromObject(this.plane)
    this.min = b3.min.clone()
    this.max = b3.max.clone()
    this.center = this.max
      .clone()
      .sub(this.min)
      .multiplyScalar(0.5)
      .add(this.min)
  }

  transformCorner(corner: Vector2) {
    return new Vector3(corner.x, 0, corner.y)
  }

  computeTransforms(transform: any, invTransform: any, start: any, end: any) {
    let v1 = start
    let v2 = end

    let angle = Utils.angle(
      new Vector2(1, 0),
      new Vector2(v2.x - v1.x, v2.y - v1.y)
    )

    let tt = new Matrix4()
    let tr = new Matrix4()

    tt.makeTranslation(-v1.x, 0, -v1.y)
    tr.makeRotationY(-angle)
    transform.multiplyMatrices(tr, tt)
    invTransform.getInverse(transform)
  }

  exteriorEnd() {
    let vec = this.halfAngleVector(this, this.next)
    return new Vector2(this.getEnd().x - vec.x, this.getEnd().y - vec.y)
  }

  exteriorStart() {
    let vec = this.halfAngleVector(this.prev, this)
    return new Vector2(this.getStart().x - vec.x, this.getStart().y - vec.y)
  }

  getTexture() {
    if (this.front) {
      return this.wall.frontTexture
    } else {
      return this.wall.backTexture
    }
  }
}
