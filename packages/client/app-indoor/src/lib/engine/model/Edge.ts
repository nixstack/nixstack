import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Event from '../event/Event'
import {
  Scene,
  MeshBasicMaterial,
  FrontSide,
  DoubleSide,
  Vector2,
  Vector3,
  Mesh,
  Shape,
  Path,
  ShapeGeometry,
  Matrix4,
  Material,
  TextureLoader,
  Texture,
  Geometry,
  Face3,
  // BackSide,
} from 'three'
import HalfEdge from './HalfEdge'
import * as Utils from '../../util/Utils'

export default class Edge extends Event {
  public name!: string
  public scene: Scene
  public edge: HalfEdge
  public controls: OrbitControls

  public wall: any
  public front: any

  public planes: Mesh[] = []
  public basePlanes: Mesh[] = []

  private texture!: Texture
  private aoMap!: Texture

  private fillerColor = 0xdddddd
  private sideColor = 0xcccccc
  // private baseColor = 0xdddddd

  private visible = false

  constructor(scene: THREE.Scene, edge: HalfEdge, controls: OrbitControls) {
    super()

    this.scene = scene
    this.edge = edge
    this.controls = controls

    this.wall = edge.wall
    this.front = edge.front

    this.planes = []

    this.init()
  }

  init() {
    // 侦听相机移动事件
    this.controls.addEventListener(
      'EVENT_CAMERA_MOVED',
      this.visibilityevent.bind(this)
    )

    this.updateTexture()
    this.updatePlanes()
    this.addToScene()
  }

  visibilityevent() {
    this.updateVisibility()
  }

  updateVisibility() {
    var scope = this
    // 从边找到法线
    var start = scope.edge.interiorStart()
    var end = scope.edge.interiorEnd()
    var x = end.x - start.x
    var y = end.y - start.y
    // 旋转90度
    var normal = new Vector3(-y, 0, x)
    normal.normalize()

    // 设置相机: scope.controls.object 引用到场景中的相机
    var position = scope.controls.object.position.clone()
    var focus = new Vector3((start.x + end.x) / 2.0, 0, (start.y + end.y) / 2.0)
    var direction = position.sub(focus).normalize()

    // 找到点
    var dot = normal.dot(direction)
    // 更新可见性
    scope.visible = dot >= 0
    // 显示或隐藏平面
    scope.planes.forEach((plane) => {
      ;(plane.material as any).transparent = !scope.visible as any
      ;(plane.material as any).opacity = scope.visible ? 1.0 : 0.3
      //			plane.visible = scope.visible;
    })
    scope.updateObjectVisibility()
  }

  updateObjectVisibility() {
    //		var scope = this;
    //		this.wall.items.forEach((item) => {
    //			item.updateEdgeVisibility(scope.visible, scope.front);
    //		});
    //		this.wall.onItems.forEach((item) => {
    //			item.updateEdgeVisibility(scope.visible, scope.front);
    //		});
  }

  updateTexture(cb?: () => void) {
    if (!cb) {
      cb = (): void => {
        ;(this.scene as any).needsUpdate = true
      }
    }
    const textureData = this.edge.getTexture()
    this.texture = new TextureLoader().load(textureData.url, cb)

    this.aoMap = new TextureLoader().load('files/texture/walllightmap.png')
  }

  updatePlanes() {
    const extStartCorner = this.edge.getStart()
    const extEndCorner = this.edge.getEnd()

    if (extStartCorner == null || extEndCorner == null) {
      return
    }

    const color = 0xffffff
    const wallMaterial = new MeshBasicMaterial({
      color: color,
      side: FrontSide,
      map: this.texture,
      transparent: true,
      aoMap: this.aoMap,
      opacity: 1.0,
      wireframe: false,
    })
    const fillerMaterial = new MeshBasicMaterial({
      color: this.fillerColor,
      side: DoubleSide,
      map: this.texture,
      transparent: true,
      opacity: 1.0,
      wireframe: false,
    })

    // 外部平面
    if (
      this.edge.wall.start.getAttachedRooms().length < 2 ||
      this.edge.wall.end.getAttachedRooms().length < 2
    ) {
      this.planes.push(
        this.makeWall(
          this.edge.exteriorStart(),
          this.edge.exteriorEnd(),
          this.edge.exteriorTransform,
          this.edge.invExteriorTransform,
          fillerMaterial
        )
      )
    }

    // 内部平面
    this.planes.push(
      this.makeWall(
        this.edge.interiorStart(),
        this.edge.interiorEnd(),
        this.edge.interiorTransform,
        this.edge.invInteriorTransform,
        wallMaterial
      )
    )

    // bottom
    // this.basePlanes.push(
    //   this.buildFillerUniformHeight(this.edge, 0, BackSide, this.baseColor)
    // )
    // if (
    //   this.edge.wall.start.getAttachedRooms().length < 2 ||
    //   this.edge.wall.end.getAttachedRooms().length < 2
    // ) {
    //   this.planes.push(
    //     this.buildFillerVaryingHeights(this.edge, DoubleSide, this.fillerColor)
    //   )
    // }

    // sides
    this.planes.push(
      this.buildSideFillter(
        this.edge.interiorStart(),
        this.edge.exteriorStart(),
        extStartCorner.elevation,
        this.sideColor
      )
    )
    this.planes.push(
      this.buildSideFillter(
        this.edge.interiorEnd(),
        this.edge.exteriorEnd(),
        extEndCorner.elevation,
        this.sideColor
      )
    )
  }

  addToScene() {
    this.planes.forEach((plane) => {
      this.scene.add(plane)
    })

    this.basePlanes.forEach((plane) => {
      this.scene.add(plane)
    })
  }

  makeWall(
    start: Vector2,
    end: Vector2,
    transform: Matrix4,
    invTransform: Matrix4,
    material: Material
  ): Mesh {
    var v1 = this.toVec3(start)
    var v2 = this.toVec3(end)
    var v3 = v2.clone()
    var v4 = v1.clone()

    v3.y = this.edge.getEnd().elevation
    v4.y = this.edge.getStart().elevation

    var points = [v1.clone(), v2.clone(), v3.clone(), v4.clone()]

    points.forEach((p) => {
      p.applyMatrix4(transform)
    })

    var spoints = [
      new Vector2(points[0].x, points[0].y),
      new Vector2(points[1].x, points[1].y),
      new Vector2(points[2].x, points[2].y),
      new Vector2(points[3].x, points[3].y),
    ]
    var shape = new Shape(spoints)

    // 加洞
    this.wall.items.forEach((item: any) => {
      var pos = item.position.clone()
      pos.applyMatrix4(transform)
      var halfSize = item.halfSize
      var min = halfSize.clone().multiplyScalar(-1)
      var max = halfSize.clone()
      min.add(pos)
      max.add(pos)

      var holePoints = [
        new Vector2(min.x, min.y),
        new Vector2(max.x, min.y),
        new Vector2(max.x, max.y),
        new Vector2(min.x, max.y),
      ]
      shape.holes.push(new Path(holePoints))
    })

    var geometry = new ShapeGeometry(shape)
    geometry.vertices.forEach((v) => {
      v.applyMatrix4(invTransform)
    })

    // make UVs
    var totalDistance = Utils.distance(
      new Vector2(v1.x, v1.z),
      new Vector2(v2.x, v2.z)
    )
    var height = this.wall.height
    geometry.faceVertexUvs[0] = []

    geometry.faces.forEach((face) => {
      var vertA = geometry.vertices[face.a]
      var vertB = geometry.vertices[face.b]
      var vertC = geometry.vertices[face.c]
      geometry.faceVertexUvs[0].push([
        vertexToUv(vertA),
        vertexToUv(vertB),
        vertexToUv(vertC),
      ])
    })

    geometry.faceVertexUvs[1] = geometry.faceVertexUvs[0]
    geometry.computeFaceNormals()
    geometry.computeVertexNormals()

    function vertexToUv(vertex: Vector3) {
      var x =
        Utils.distance(
          new Vector2(v1.x, v1.z),
          new Vector2(vertex.x, vertex.z)
        ) / totalDistance
      var y = vertex.y / height
      return new Vector2(x, y)
    }

    var mesh = new Mesh(geometry, material)
    mesh.name = 'wall'
    return mesh
  }

  toVec3(pos: Vector2, height?: number) {
    height = height || 0
    return new Vector3(pos.x, height, pos.y)
  }

  toVec2(pos: any) {
    return new Vector2(pos.x, pos.y)
  }

  buildSideFillter(p1: any, p2: any, height: any, color: any) {
    var points = [
      this.toVec3(p1),
      this.toVec3(p2),
      this.toVec3(p2, height),
      this.toVec3(p1, height),
    ]

    var geometry = new Geometry()
    points.forEach((p) => {
      geometry.vertices.push(p)
    })
    geometry.faces.push(new Face3(0, 1, 2))
    geometry.faces.push(new Face3(0, 2, 3))

    var fillerMaterial = new MeshBasicMaterial({
      color: color,
      side: DoubleSide,
    })
    var filler = new Mesh(geometry, fillerMaterial)
    return filler
  }

  buildFillerUniformHeight(edge: HalfEdge, height: any, side: any, color: any) {
    var points = [
      this.toVec2(edge.exteriorStart()),
      this.toVec2(edge.exteriorEnd()),
      this.toVec2(edge.interiorEnd()),
      this.toVec2(edge.interiorStart()),
    ]

    var fillerMaterial = new MeshBasicMaterial({ color: color, side: side })
    var shape = new Shape(points)
    var geometry = new ShapeGeometry(shape)
    var filler = new Mesh(geometry, fillerMaterial)
    filler.rotation.set(Math.PI / 2, 0, 0)
    filler.position.y = height
    return filler
  }

  buildFillerVaryingHeights(edge: any, side: any, color: any) {
    var a = this.toVec3(edge.exteriorStart(), this.edge.getStart().elevation)
    var b = this.toVec3(edge.exteriorEnd(), this.edge.getEnd().elevation)
    var c = this.toVec3(edge.interiorEnd(), this.edge.getEnd().elevation)
    var d = this.toVec3(edge.interiorStart(), this.edge.getStart().elevation)

    var fillerMaterial = new MeshBasicMaterial({ color: color, side: side })

    var geometry = new Geometry()
    geometry.vertices.push(a, b, c, d)
    geometry.faces.push(new Face3(0, 1, 2))
    geometry.faces.push(new Face3(0, 2, 3))

    var filler = new Mesh(geometry, fillerMaterial)
    return filler
  }

  remove() {}
}
