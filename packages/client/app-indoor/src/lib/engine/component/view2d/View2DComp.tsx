import React, { useEffect, useRef, useContext } from 'react'
// import { Canvas } from 'react-three-fiber'
// import { Box } from '../box/Box'
import * as Three from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './style.css'
import { LineSegments } from 'three'
import { Context } from '../../Context'
import { Floorplan } from '../../model/Floorplan'
import Room from '../../model/Room'
import Wall from '../../model/Wall'
import Corner from '../../model/Corner'
import ViewModel from './ViewModel'
import { Dimensioning } from '../../core/Dimensioning'
import { WallTypes } from '../../core/Constant'
import HalfEdge from '../../model/HalfEdge'
import * as Utils from '../../../util/Utils'
// import ThreeEngine from 'ThreeEngine'

interface IProps {
  // isVisible?: boolean
}

export const roomColor = '#fedaff66'
export const roomColorHover = '#008cba66'
export const roomColorSelected = '#00ba8c66'

export let wallWidth = 5
export let wallWidthHover = 7
export let wallWidthSelected = 9
export const wallColor = '#dddddd'
export const wallColorHover = '#008cba'
export const wallColorSelected = '#00ba8c'

export const deleteColor = '#ff0000'

export const edgeColor = '#888888'
export const edgeColorHover = '#008cba'
export const edgeWidth = 1

export const cornerRadius = 3
export const cornerRadiusHover = 6
export const cornerRadiusSelected = 9
export const cornerColor = '#cccccc'
export const cornerColorHover = '#008cba'
export const cornerColorSelected = '#00ba8c'

export const operationModes = { MOVE: 0, DRAW: 1, DELETE: 2 }

export const View2DComp = (props: IProps) => {
  // let container!: HTMLDivElement | null
  let renderer!: Three.WebGLRenderer
  let scene: Three.Scene
  let camera!: Three.Camera
  let canvas: HTMLCanvasElement
  let ctx: CanvasRenderingContext2D
  let width!: number
  let height!: number
  let pos: number[] = []
  let matMarkerL!: Three.MeshBasicMaterial
  let matMarkerR!: Three.MeshBasicMaterial
  // let  markersL = []
  // let  markersR = []
  let geoReticle!: any
  let reticle!: LineSegments
  let reticleM!: LineSegments

  let matLineL!: Three.LineBasicMaterial
  let geoLineL!: any
  let gridLineL!: any
  let matLineR!: Three.LineBasicMaterial
  let geoLineR!: any
  let gridLineR!: any
  let linePosCount = 200

  let markerSize = 0
  let markerX!: number
  let markerY!: number

  let markersL: any = []
  let markersR: any = []
  let markerCountL = -1
  let markerCountR = -1

  let sizeFactorL = 1
  let sizeFactorR = 1

  let idxHitL = -1
  let idxHitR = -1
  let idx3HitL!: number // idxHitL / 3
  let idx3HitR!: number // idxHitR / 3
  let idxMoveL!: number
  let idxMoveR!: number

  let key = ''
  let ref = useRef<HTMLDivElement>(null)
  let refCanvas = useRef<HTMLCanvasElement>(null)
  let pointerRef = useRef<HTMLDivElement>(null)
  let viewmodel: ViewModel

  scene = new Three.Scene()
  scene.background = new Three.Color(0xeeeeee)

  // const context = useContext(Context)
  // let floorplan = context.floorplan

  const { state } = useContext(Context as any)
  let floorplan: Floorplan = state.floorplan

  // console.log(props.floorplan)
  floorplan.on('UPDATED_EVENT', redraw)
  floorplan.on('EVENT_LOADED', reset)

  useEffect(() => {
    // 实例化
    viewmodel = new ViewModel(refCanvas.current as HTMLCanvasElement, floorplan)

    // container = ref.current
    int()

    // 动画循环渲染
    renderer.setAnimationLoop(() => threeRender())
  }, [])

  function threeRender() {
    renderer.render(scene, camera)

    // 把renderer.domElement渲染到ctx中
    // ctx?.drawImage(renderer.domElement, 0, 0)
    // canvas.style.width = width + ''
    // canvas.style.height = height + ''
  }

  function redraw() {
    // 清空画布
    ctx.clearRect(0, 0, width, height)

    // 画网格
    drawGrid()

    // 画中心点
    drawCircle(window.innerWidth / 2, window.innerHeight / 2, 3, '#FFFF00')

    /**
     * 坐标系原点
     */
    drawOriginCross()

    /**
     * 房间
     */
    floorplan.getRooms().forEach((room) => {
      drawRoom(room)
    })

    /**
     * 墙
     */
    floorplan.getWalls().forEach((wall) => {
      drawWall(wall)
    })

    /**
     * 拐角
     */
    floorplan.getCorners().forEach((corner: Corner) => {
      drawCorner(corner)
    })
  }

  function reset() {
    viewmodel.resetOrigin()
    redraw()
  }

  /**
   * 画圆点
   * @param centerX
   * @param centerY
   * @param radius
   * @param fillColor
   */
  function drawCircle(
    centerX: number,
    centerY: number,
    radius: number,
    fillColor: string
  ) {
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
    ctx.closePath()
    ctx.fillStyle = fillColor
    ctx.fill()
  }

  /**
   * 画坐标系原点交叉轴
   */
  function drawOriginCross() {
    const _x = viewmodel.convertX(0)
    const _y = viewmodel.convertY(0)

    ctx.fillStyle = '#00FFFF'
    ctx.fillRect(_x - 2, _y - 7.5, 4, 15)
    ctx.fillRect(_x - 7.5, _y - 2, 15, 4)
    ctx.strokeStyle = '#FF0000'
    ctx.fillRect(_x - 1.25, _y - 5, 2.5, 10)
    ctx.fillRect(_x - 5, _y - 1.25, 10, 2.5)
  }

  function drawGrid() {
    createDesignArea()
    createReticles()
    createLinesLR()

    ctx?.drawImage(renderer.domElement, 0, 0)
    canvas.style.width = width + ''
    canvas.style.height = height + ''
  }

  function drawRoom(room: Room) {
    let selected = room === viewmodel.selectedRoom
    let hover = room === viewmodel.activeRoom && room != viewmodel.selectedRoom
    let color = roomColor
    if (hover) {
      color = roomColorHover
    } else if (selected) {
      color = roomColorSelected
    }

    let polygonPoints = []

    for (let i = 0; i < room.roomCornerPoints.length; i++) {
      polygonPoints.push([room.roomCornerPoints[i]])
    }

    drawPolygonCurved(polygonPoints, true, color)

    drawTextLabel(
      Dimensioning.cmToMeasure(room.area, 2) + String.fromCharCode(178),
      viewmodel.convertX(room.areaCenter.x),
      viewmodel.convertY(room.areaCenter.y),
      '#0000FF',
      '#00FF0000',
      'bold'
    )
    drawTextLabel(
      room.name,
      viewmodel.convertX(room.areaCenter.x),
      viewmodel.convertY(room.areaCenter.y + 30),
      '#363636',
      '#00FF0000',
      'bold italic'
    )
  }

  function drawWall(wall: Wall) {
    let selected = wall === viewmodel.selectedWall
    let hover = wall === viewmodel.activeWall && wall != viewmodel.selectedWall
    let color = wallColor

    if (hover && viewmodel.mode == operationModes.DELETE) {
      color = deleteColor
    } else if (hover) {
      color = wallColorHover
    } else if (selected) {
      color = wallColorSelected
    }
    let isCurved = wall.wallType == WallTypes.CURVED
    if (wall.wallType == WallTypes.CURVED && selected) {
      drawLine(
        viewmodel.convertX(wall.getStartX()),
        viewmodel.convertY(wall.getStartY()),
        viewmodel.convertX(wall.a.x),
        viewmodel.convertY(wall.a.y),
        5,
        '#006600'
      )
      drawLine(
        viewmodel.convertX(wall.a.x),
        viewmodel.convertY(wall.a.y),
        viewmodel.convertX(wall.b.x),
        viewmodel.convertY(wall.b.y),
        5,
        '#006600'
      )
      drawLine(
        viewmodel.convertX(wall.b.x),
        viewmodel.convertY(wall.b.y),
        viewmodel.convertX(wall.getEndX()),
        viewmodel.convertY(wall.getEndY()),
        5,
        '#06600'
      )

      drawLine(
        viewmodel.convertX(wall.getStartX()),
        viewmodel.convertY(wall.getStartY()),
        viewmodel.convertX(wall.a.x),
        viewmodel.convertY(wall.a.y),
        1,
        '#00FF00'
      )
      drawLine(
        viewmodel.convertX(wall.a.x),
        viewmodel.convertY(wall.a.y),
        viewmodel.convertX(wall.b.x),
        viewmodel.convertY(wall.b.y),
        1,
        '#00FF00'
      )
      drawLine(
        viewmodel.convertX(wall.b.x),
        viewmodel.convertY(wall.b.y),
        viewmodel.convertX(wall.getEndX()),
        viewmodel.convertY(wall.getEndY()),
        1,
        '#00FF00'
      )

      drawCircle(
        viewmodel.convertX(wall.a.x),
        viewmodel.convertY(wall.a.y),
        10,
        '#D7D7D7'
      )
      drawCircle(
        viewmodel.convertX(wall.b.x),
        viewmodel.convertY(wall.b.y),
        10,
        '#D7D7D7'
      )
    }

    if (wall.wallType == WallTypes.STRAIGHT) {
      drawLine(
        viewmodel.convertX(wall.getStartX()),
        viewmodel.convertY(wall.getStartY()),
        viewmodel.convertX(wall.getEndX()),
        viewmodel.convertY(wall.getEndY()),
        hover ? wallWidthHover : selected ? wallWidthSelected : wallWidth,
        color
      )
    } else {
      drawCurvedLine(
        viewmodel.convertX(wall.getStartX()),
        viewmodel.convertY(wall.getStartY()),

        viewmodel.convertX(wall.a.x),
        viewmodel.convertY(wall.a.y),

        viewmodel.convertX(wall.b.x),
        viewmodel.convertY(wall.b.y),

        viewmodel.convertX(wall.getEndX()),
        viewmodel.convertY(wall.getEndY()),
        hover ? wallWidthHover : selected ? wallWidthSelected : wallWidth,
        color
      )

      //			drawLine(viewmodel.convertX(project.x),viewmodel.convertY(project.y),viewmodel.convertX(p.x),viewmodel.convertY(p.y), 1, '#ff0000');
    }

    if (!hover && !selected && wall.frontEdge) {
      drawEdge(wall.frontEdge, hover, isCurved)
    }
    if (!hover && !selected && wall.backEdge) {
      drawEdge(wall.backEdge, hover, isCurved)
    }

    if (selected) {
      if (wall.wallType != WallTypes.CURVED) {
        drawCornerAngles(wall.start)
        drawCornerAngles(wall.end)
      }
    }
    drawCircle(
      viewmodel.canvasElement.width / 2.0,
      viewmodel.canvasElement.height / 2.0,
      3,
      '#FF0000'
    )
  }

  function drawCorner(corner: Corner) {
    let cornerX = viewmodel.convertX(corner.x)
    let cornerY = viewmodel.convertY(corner.y)
    let hover =
      corner === viewmodel.activeCorner && corner != viewmodel.selectedCorner
    let selected = corner === viewmodel.selectedCorner
    let color = cornerColor
    if (hover && viewmodel.mode == operationModes.DELETE) {
      color = deleteColor
    } else if (hover) {
      color = cornerColorHover
    } else if (selected) {
      color = cornerColorSelected
    }

    if (selected) {
      drawCornerAngles(corner)
      corner.adjacentCorners().forEach((neighbour) => {
        drawCornerAngles(neighbour)
      })
    }

    drawCircle(
      cornerX,
      cornerY,
      hover
        ? cornerRadiusHover
        : selected
        ? cornerRadiusSelected
        : cornerRadius,
      color
    )
  }

  function int() {
    canvas = refCanvas.current as HTMLCanvasElement
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    // width = container!.clientWidth
    // height = container!.clientHeight
    width = window.innerWidth
    height = window.innerHeight
    let devicePixelRatio = window.devicePixelRatio
    canvas.style.width = width * devicePixelRatio + ''
    canvas.style.height = height * devicePixelRatio + ''
    canvas.width = width * devicePixelRatio
    canvas.height = height * devicePixelRatio

    // if (width > 2 * height) {
    //   width = 2 * height
    // } else {
    //   height = width / 2
    // }

    // 正交相机
    const aspect = width / height
    camera = new Three.OrthographicCamera(-aspect, aspect, 1, -1, 0.01, 10)
    camera.position.set(0, 0, 0.1)

    // render
    renderer = new Three.WebGLRenderer()
    // renderer.setPixelRatio(devicePixelRatio)
    renderer.setSize(width, height)
    // container?.appendChild(renderer.domElement)
    // setTimeout(() => {
    //   ctx?.drawImage(renderer.domElement, 0, 0)
    //   canvas.style.width = width + ''
    //   canvas.style.height = height + ''
    // }, 0)

    drawGrid()
    // createDesignArea()
    // createReticles()
    // createLinesLR()

    initEvent()
  }

  function initEvent() {
    window.addEventListener('keydown', onWindowKeyDown)
    window.addEventListener('keyup', onWindowKeyUp)

    ref.current?.addEventListener('mousedown', onMouseDown)
    ref.current?.addEventListener('mouseup', onMouseUp)
    ref.current?.addEventListener('mousemove', onMouseMove)
  }

  function createDesignArea() {
    // 小网格
    const geoBuffer2 = new Three.BufferGeometry() as any
    pos = []
    for (let i = 0; i < 10; i++) {
      let j = (i + 0.5) / 10
      rasterPosPush(j)
    }

    geoBuffer2.lineCount = 60
    geoBuffer2.positions = new Float32Array(geoBuffer2.lineCount * 6)
    for (let i = 0; i < pos.length; i++) geoBuffer2.positions[i] = pos[i]
    geoBuffer2.setAttribute(
      'position',
      new Three.BufferAttribute(geoBuffer2.positions, 3)
    )
    const mat2 = new Three.LineBasicMaterial({ color: 0xdddddd })
    const grid2 = new Three.LineSegments(geoBuffer2, mat2)
    scene.add(grid2)

    // 大网格
    const geoBuffer1 = new Three.BufferGeometry() as any
    pos = []
    for (let i = 1; i < 10; i++) {
      let j = i / 10
      rasterPosPush(j)
    }

    geoBuffer1.lineCount = 54
    geoBuffer1.positions = new Float32Array(geoBuffer1.lineCount * 6)
    for (let i = 0; i < pos.length; i++) geoBuffer1.positions[i] = pos[i]
    geoBuffer1.setAttribute(
      'position',
      new Three.BufferAttribute(geoBuffer1.positions, 3)
    )
    const mat1 = new Three.LineBasicMaterial({ color: 0xcccccc })
    const grid1 = new Three.LineSegments(geoBuffer1, mat1)
    scene.add(grid1)

    // 左右网格各自的中心十字线
    const geoBuffer0 = new Three.BufferGeometry() as any
    pos = []

    pos.push(-2, 0, 0, -0.02, 0, 0) // horizontal
    pos.push(0.02, 0, 0, 2, 0, 0)
    pos.push(-1, -1, 0, -1, 1, 0) // vertical
    pos.push(1, -1, 0, 1, 1, 0)

    geoBuffer0.lineCount = 4
    geoBuffer0.positions = new Float32Array(geoBuffer0.lineCount * 6)
    for (let i = 0; i < pos.length; i++) geoBuffer0.positions[i] = pos[i]
    geoBuffer0.setAttribute(
      'position',
      new Three.BufferAttribute(geoBuffer0.positions, 3)
    )
    const mat0 = new Three.LineBasicMaterial({ color: 0x888888 })
    const grid0 = new Three.LineSegments(geoBuffer0, mat0)
    scene.add(grid0)

    // 原点基准
    const geoBufferSplit: any = new Three.BufferGeometry()
    geoBufferSplit.positions = new Float32Array(6)
    geoBufferSplit.positions[0] = geoBufferSplit.positions[2] = geoBufferSplit.positions[3] = geoBufferSplit.positions[5] = 0
    geoBufferSplit.positions[1] = -1
    geoBufferSplit.positions[4] = 1
    geoBufferSplit.setAttribute(
      'position',
      new Three.BufferAttribute(geoBufferSplit.positions, 3)
    )

    // 中心分隔线
    const matSplit = new Three.LineBasicMaterial({ color: 0xffffff })
    const gridSplit = new Three.LineSegments(geoBufferSplit, matSplit)
    scene.add(gridSplit)

    //.....
    const markerCenterL = new Three.Sprite(
      new Three.MeshBasicMaterial({ color: 0x333333 }) as any
    )

    // 画线的点的材质
    matMarkerL = new Three.MeshBasicMaterial({
      color: 0x0000aa,
      transparent: true,
      opacity: 0.5,
    })
    matMarkerR = new Three.MeshBasicMaterial({
      color: 0x009900,
      transparent: true,
      opacity: 0.5,
    })

    markerSize = 0.015
    markerCenterL.rotation.z = Math.PI / 4
    markerCenterL.scale.x = markerSize
    markerCenterL.scale.y = markerSize
    markerCenterL.position.set(-1, 0, 0)
    scene.add(markerCenterL) // grid0的交叉点

    const markerCenterR = markerCenterL.clone() // clone from L
    markerCenterR.position.set(1, 0, 0)
    scene.add(markerCenterR) // grid0的交叉点
  }

  function rasterPosPush(j: number) {
    pos.push(-2, j, 0, 2, j, 0) // horizontal
    pos.push(-2, -j, 0, 2, -j, 0)
    pos.push(-2 + j, -1, 0, -2 + j, 1, 0) // vertical
    pos.push(-1 + j, -1, 0, -1 + j, 1, 0)
    pos.push(1 - j, -1, 0, 1 - j, 1, 0)
    pos.push(2 - j, -1, 0, 2 - j, 1, 0)
  }

  function createReticles() {
    geoReticle = new Three.BufferGeometry()
    geoReticle.positions = new Float32Array(4 * 3)

    geoReticle.positions[0] = 0
    geoReticle.positions[1] = -0.02
    geoReticle.positions[2] = 0

    geoReticle.positions[3] = 0
    geoReticle.positions[4] = 0.02
    geoReticle.positions[5] = 0

    geoReticle.positions[6] = -0.02
    geoReticle.positions[7] = 0
    geoReticle.positions[8] = 0

    geoReticle.positions[9] = 0.02
    geoReticle.positions[10] = 0
    geoReticle.positions[11] = 0

    geoReticle.setAttribute(
      'positon',
      new Three.BufferAttribute(geoReticle.positions, 3)
    )
    const matReticle = new Three.LineBasicMaterial({ color: 0xff0000 })
    reticle = new Three.LineSegments(geoReticle, matReticle)
    reticle.scale.set(2, 2, 0)
    scene.add(reticle)
    // Cannot read property 'BYTES_PER_ELEMENT' of undefined
    // reticle.visible = true
    reticle.visible = false

    const matReticleM = new Three.LineBasicMaterial({ color: 0x444444 })
    reticleM = new Three.LineSegments(geoReticle, matReticleM)
    scene.add(reticleM)
    reticleM.visible = true
  }

  /**
   * 画线
   */
  function createLinesLR() {
    matLineL = new Three.LineBasicMaterial({ color: 0x0000aa })
    geoLineL = new Three.BufferGeometry() as any
    geoLineL.positions = new Float32Array(linePosCount * 3)
    // geoLineL.positions = new Float32Array(linePosCount * 3)
    geoLineL.setAttribute(
      'position',
      new Three.BufferAttribute(geoLineL.positions, 3).setUsage(
        Three.DynamicDrawUsage
      )
    )
    gridLineL = new Three.Line(geoLineL, matLineL)
    scene.add(gridLineL)

    gridLineL.geometry.setDrawRange(0, 0)

    // ...
    matLineR = new Three.LineBasicMaterial({ color: 0x0099000 })
    geoLineR = new Three.BufferGeometry()
    geoLineR.positions = new Float32Array(linePosCount * 3)
    geoLineR.setAttribute(
      'position',
      new Three.BufferAttribute(geoLineR.positions, 3).setUsage(
        Three.DynamicDrawUsage
      )
    )
    gridLineR = new Three.Line(geoLineR, matLineR)
    scene.add(gridLineR)

    gridLineR.geometry.setDrawRange(0, 0)
  }

  function onWindowKeyDown(event: KeyboardEvent) {
    // 按键d
    switch (event.keyCode) {
      case 68:
        key = 'delete'
        break
      case 73:
        key = 'insert'
        break
      case 77:
        key = 'move'
        break
    }
  }

  function onWindowKeyUp(event: KeyboardEvent) {
    key = ''
  }

  function onMouseDown(event: MouseEvent) {
    event.preventDefault()
    let xNew, yNew

    getMarkerXY(event.clientX, event.clientY)

    if (markerX < 0) {
      // left
      if (key === '') {
        markerCountL++

        markersL[markerCountL] = new Three.Sprite(matMarkerL as any)
        markersL[markerCountL].position.x = markerX
        markersL[markerCountL].position.y = markerY
        markersL[markerCountL].scale.x = markerSize
        markersL[markerCountL].scale.y = markerSize

        scene.add(markersL[markerCountL])
        geoLineL.setDrawRange(0, markerCountL + 1)

        geoLineL.positions[markerCountL * 3] = markerX
        geoLineL.positions[markerCountL * 3 + 1] = markerY
        geoLineL.positions[markerCountL * 3 + 2] = 0
      } else if (key === 'insert') {
        idxHitL = hitMarkerL(-1, markerX, markerY)
        idx3HitL = idxHitL / 3

        if (idxHitL !== -1) {
          if (idxHitL < markerCountL * 3) {
            for (let i = markerCountL; i > idx3HitL; i--) {
              markersL[i + 1] = markersL[i]
              markersL[i + 1].position.x = markersL[i].position.x
              markersL[i + 1].position.y = markersL[i].position.y
            }

            markerCountL++

            markersL[idx3HitL + 1] = new Three.Sprite(matMarkerL as any)

            xNew =
              Math.round(
                (100 *
                  (markersL[idx3HitL].position.x +
                    markersL[idx3HitL + 2].position.x)) /
                  2
              ) / 100
            yNew =
              Math.round(
                (100 *
                  (markersL[idx3HitL].position.y +
                    markersL[idx3HitL + 2].position.y)) /
                  2
              ) / 100

            markersL[idx3HitL + 1].position.x = xNew
            markersL[idx3HitL + 1].position.y = yNew
            markersL[idx3HitL + 1].scale.x = markerSize
            markersL[idx3HitL + 1].scale.y = markerSize

            scene.add(markersL[idx3HitL + 1])
            geoLineL.setDrawRange(0, markerCountL + 1)

            for (let i = markerCountL * 3; i > idxHitL; i -= 3) {
              geoLineL.positions[i + 3] = geoLineL.positions[i]
              geoLineL.positions[i + 3 + 1] = geoLineL.positions[i + 1]
              geoLineL.positions[i + 3 + 2] = geoLineL.positions[i + 2]
            }

            geoLineL.positions[idxHitL + 3] = xNew
            geoLineL.positions[idxHitL + 3 + 1] = yNew
            geoLineL.positions[idxHitL + 3 + 2] = 0
          }
        }
      } else if (key === 'delete') {
        idxHitL = hitMarkerL(-1, markerX, markerY)
        idx3HitL = idxHitL / 3

        if (idxHitL !== -1) {
          for (let j = idxHitL; j < markersL.length * 3 - 3; j += 3) {
            geoLineL.positions[j] = geoLineL.positions[j + 3]
            geoLineL.positions[j + 1] = geoLineL.positions[j + 4]
          }

          scene.remove(markersL[idx3HitL])
          markersL[idx3HitL].geometry.dispose()

          for (let j = idx3HitL; j < markersL.length - 1; j++) {
            markersL[j] = markersL[j + 1]
          }

          markerCountL--

          geoLineL.setDrawRange(0, markerCountL + 1)
        }
      } else if (key === 'move') {
        idxMoveL = hitMarkerL(-1, markerX, markerY)
      }
      geoLineL.attributes.position.needsUpdate = true
      // redrawView3D()
    } else if (markerX > 0) {
      // right
      if (key === '') {
        markerCountR++

        markersR[markerCountR] = new Three.Sprite(matMarkerR as any)
        markersR[markerCountR].position.x = markerX
        markersR[markerCountR].position.y = markerY
        markersR[markerCountR].scale.x = markerSize
        markersR[markerCountR].scale.y = markerSize

        scene.add(markersR[markerCountR])
        geoLineR.setDrawRange(0, markerCountR + 1)

        geoLineR.positions[markerCountR * 3] = markerX
        geoLineR.positions[markerCountR * 3 + 1] = markerY
        geoLineR.positions[markerCountR * 3 + 2] = 0
      } else if (key === 'insert') {
        idxHitR = hitMarkerR(-1, markerX, markerY)
        idx3HitR = idxHitR / 3

        if (idxHitR !== -1) {
          if (idxHitR < markerCountR * 3) {
            for (let i = markerCountR; i > idx3HitR; i--) {
              markersR[i + 1] = markersR[i]
              markersR[i + 1].position.x = markersR[i].position.x
              markersR[i + 1].position.y = markersR[i].position.y
            }

            markerCountR++

            markersR[idx3HitR + 1] = new Three.Sprite(matMarkerR as any)

            xNew =
              Math.round(
                (100 *
                  (markersR[idx3HitR].position.x +
                    markersR[idx3HitR + 2].position.x)) /
                  2
              ) / 100
            yNew =
              Math.round(
                (100 *
                  (markersR[idx3HitR].position.y +
                    markersR[idx3HitR + 2].position.y)) /
                  2
              ) / 100

            markersR[idx3HitR + 1].position.x = xNew
            markersR[idx3HitR + 1].position.y = yNew
            markersR[idx3HitR + 1].scale.x = markerSize
            markersR[idx3HitR + 1].scale.y = markerSize

            scene.add(markersR[idx3HitR + 1])
            geoLineR.setDrawRange(0, markerCountR + 1)

            for (let i = markerCountR * 3; i > idxHitR; i -= 3) {
              geoLineR.positions[i + 3] = geoLineR.positions[i]
              geoLineR.positions[i + 3 + 1] = geoLineR.positions[i + 1]
              geoLineR.positions[i + 3 + 2] = geoLineR.positions[i + 2]
            }

            geoLineR.positions[idxHitR + 3] = xNew
            geoLineR.positions[idxHitR + 3 + 1] = yNew
            geoLineR.positions[idxHitR + 3 + 2] = 0
          }
        }
      } else if (key === 'delete') {
        idxHitR = hitMarkerR(-1, markerX, markerY)
        idx3HitR = idxHitR / 3

        if (idxHitR !== -1) {
          for (let j = idxHitR; j < markersR.length * 3 - 3; j += 3) {
            geoLineR.positions[j] = geoLineR.positions[j + 3]
            geoLineR.positions[j + 1] = geoLineR.positions[j + 4]
          }

          scene.remove(markersR[idx3HitR])
          markersR[idx3HitR].geometry.dispose()

          for (let j = idx3HitR; j < markersR.length - 1; j++) {
            markersR[j] = markersR[j + 1]
          }

          markerCountR--

          geoLineR.setDrawRange(0, markerCountR + 1)
        }
      } else if (key === 'move') {
        idxMoveR = hitMarkerR(-1, markerX, markerY)
      }
      geoLineR.attributes.position.needsUpdate = true
      // redrawView3D()
    }
  }

  function onMouseUp(event: MouseEvent) {
    event.preventDefault()

    idxMoveL = -1
    idxMoveR = -1
    key = ''
    // redrawView3D()
  }

  function onMouseMove(event: MouseEvent) {
    event.preventDefault()

    getMarkerXY(event.clientX, event.clientY)

    reticle.position.set(markerX, markerY, 0)

    pointerRef.current!.style.left = event.clientX + 10 + 'px'
    pointerRef.current!.style.top = event.clientY - 10 + 'px'

    if (markerX === 0) {
      reticleM.visible = false
    }

    if (markerX < 0) {
      // left
      pointerRef.current!.innerHTML =
        Math.round(10000 * (markerX + 1) * sizeFactorL) / 10000 +
        ' ▪ ' +
        Math.round(10000 * markerY * sizeFactorL) / 10000

      if (hitMarkerL(idxMoveL, markerX, markerY) === -1) {
        reticleM.visible = true
        reticle.visible = false
        reticleM.position.set(markerX, markerY, 0)
        pointerRef.current!.style.color = '#666600'
      } else {
        reticleM.visible = false
        reticle.visible = true
        reticle.position.set(markerX, markerY, 0)
        pointerRef.current!.style.color = '#ff0000'
      }

      if (key === 'move' && idxMoveL !== -1) {
        if (!checkHitL(idxMoveL - 3) && !checkHitL(idxMoveL + 3)) {
          markersL[idxMoveL / 3].position.x = markerX
          markersL[idxMoveL / 3].position.y = markerY

          geoLineL.positions[idxMoveL] = markerX
          geoLineL.positions[idxMoveL + 1] = markerY

          geoLineL.attributes.position.needsUpdate = true
        }
      }
    } else if (markerX > 0) {
      // right
      pointerRef.current!.innerHTML =
        Math.round(10000 * (markerX - 1) * sizeFactorR) / 10000 +
        ' ▪ ' +
        Math.round(10000 * markerY * sizeFactorR) / 10000

      if (hitMarkerR(idxMoveR, markerX, markerY) === -1) {
        reticleM.visible = true
        reticle.visible = false
        reticleM.position.set(markerX, markerY, 0)
        pointerRef.current!.style.color = '#666600'
      } else {
        reticleM.visible = false
        reticle.visible = true
        reticle.position.set(markerX, markerY, 0)
        pointerRef.current!.style.color = '#ff0000'
      }

      if (key === 'move' && idxMoveR !== -1) {
        if (!checkHitR(idxMoveR - 3) && !checkHitR(idxMoveR + 3)) {
          markersR[idxMoveR / 3].position.x = markerX
          markersR[idxMoveR / 3].position.y = markerY

          geoLineR.positions[idxMoveR] = markerX
          geoLineR.positions[idxMoveR + 1] = markerY

          geoLineR.attributes.position.needsUpdate = true
        }
      }
    }
  }

  function getMarkerXY(ecX: number, ecY: number) {
    markerX = Math.round(100 * ((ecX / width) * 4 - 2)) / 100
    markerY = Math.round(100 * ((-ecY / height) * 2 + 1)) / 100
  }

  function hitMarkerL(idx: number, markerX: any, markerY: any) {
    let hitL = false

    let j = markerCountL * 3 + 3

    while (!hitL && j > 2) {
      j -= 3

      if (j !== idx) {
        hitL = checkHitL(j)
      }
    }

    return hitL && j !== idx ? j : -1 // idxHitL
  }

  function hitMarkerR(idx: number, markerX: number, markerY: number) {
    let hitR = false

    let j = markerCountR * 3 + 3

    while (!hitR && j > 2) {
      j -= 3

      if (j !== idx) {
        hitR = checkHitR(j)
      }
    }

    return hitR && j !== idx ? j : -1 // idxHitR
  }

  function checkHitL(j: number) {
    const epsilon = 0.004

    let x0 = geoLineL.positions[j] - epsilon
    let x1 = geoLineL.positions[j] + epsilon
    let y0 = geoLineL.positions[j + 1] - epsilon
    let y1 = geoLineL.positions[j + 1] + epsilon

    return markerX > x0 && markerX < x1 && markerY > y0 && markerY < y1
  }

  function checkHitR(j: number) {
    const epsilon = 0.004

    let x0 = geoLineR.positions[j] - epsilon
    let x1 = geoLineR.positions[j] + epsilon
    let y0 = geoLineR.positions[j + 1] - epsilon
    let y1 = geoLineR.positions[j + 1] + epsilon

    return markerX > x0 && markerX < x1 && markerY > y0 && markerY < y1
  }

  function drawPolygonCurved(
    pointsets: any,
    fill = true,
    fillColor = '#FF00FF',
    stroke = false,
    strokeColor = '#000000',
    strokeWidth = 5
  ) {
    // fillColor is a hex string, i.e. #ff0000
    fill = fill || false
    stroke = stroke || false
    ctx.beginPath()

    for (let i = 0; i < pointsets.length; i++) {
      let pointset = pointsets[i]
      //			The pointset represents a straight line if there are only 1 point in the pointset
      if (pointset.length == 1) {
        if (i == 0) {
          ctx.moveTo(
            viewmodel.convertX(pointset[0].x),
            viewmodel.convertY(pointset[0].y)
          )
        } else {
          ctx.lineTo(
            viewmodel.convertX(pointset[0].x),
            viewmodel.convertY(pointset[0].y)
          )
        }
      }
      //			If the pointset contains 3 points then it represents a bezier curve, ap1, ap2, cp2
      else if (pointset.length == 3) {
        ctx.bezierCurveTo(
          viewmodel.convertX(pointset[0].x),
          viewmodel.convertY(pointset[0].y),
          viewmodel.convertX(pointset[1].x),
          viewmodel.convertY(pointset[1].y),
          viewmodel.convertX(pointset[2].x),
          viewmodel.convertY(pointset[2].y)
        )
      }
    }

    ctx.closePath()
    if (fill) {
      ctx.fillStyle = fillColor
      ctx.fill()
    }
    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = strokeColor
      ctx.stroke()
    }
  }

  function drawTextLabel(
    label: string,
    x: number,
    y: number,
    textcolor = '#000000',
    strokecolor = '#ffffff',
    style = 'normal'
  ) {
    ctx.font = `${style} 12px Arial`
    ctx.fillStyle = textcolor
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.strokeStyle = strokecolor
    ctx.lineWidth = 4
    ctx.strokeText(label, x, y)
    ctx.fillText(label, x, y)
  }

  function drawLine(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    width: number,
    color: string
  ) {
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.closePath()
    ctx.lineWidth = width
    ctx.strokeStyle = color
    ctx.stroke()
  }

  function drawCurvedLine(
    startX: number,
    startY: number,
    aX: number,
    aY: number,
    bX: number,
    bY: number,
    endX: number,
    endY: number,
    width: number,
    color: string
  ) {
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.bezierCurveTo(aX, aY, bX, bY, endX, endY)

    ctx.lineWidth = width + 3
    ctx.strokeStyle = '#999999'
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.bezierCurveTo(aX, aY, bX, bY, endX, endY)
    ctx.lineWidth = width
    ctx.strokeStyle = color
    ctx.stroke()
  }

  function drawEdge(edge: HalfEdge, hover: boolean, curved = false) {
    let color = edgeColor
    if (hover && viewmodel.mode == operationModes.DELETE) {
      color = deleteColor
    } else if (hover) {
      color = edgeColorHover
    }
    let corners = edge.corners()
    if (!curved) {
      drawPolygon(
        Utils.map(corners, function (corner: Corner) {
          return viewmodel.convertX(corner.x)
        }),
        Utils.map(corners, function (corner: Corner) {
          return viewmodel.convertY(corner.y)
        }),
        false,
        null,
        true,
        color,
        edgeWidth
      )
    }
  }

  function drawPolygon(
    xArr: any[],
    yArr: any[],
    fill: boolean,
    fillColor: string | null,
    stroke: boolean,
    strokeColor: string,
    strokeWidth: number
  ) {
    // fillColor is a hex string, i.e. #ff0000
    fill = fill || false
    stroke = stroke || false
    ctx.beginPath()
    ctx.moveTo(xArr[0], yArr[0])
    for (let i = 1; i < xArr.length; i++) {
      ctx.lineTo(xArr[i], yArr[i])
    }
    ctx.closePath()
    if (fill) {
      ctx.fillStyle = fillColor as string
      ctx.fill()
    }
    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = strokeColor
      ctx.stroke()
    }
  }

  function drawCornerAngles(corner: Corner) {
    let ox = viewmodel.convertX(corner.location.x)
    let oy = viewmodel.convertY(corner.location.y)
    let offsetRatio = 2.0
    for (let i = 0; i < corner.angles.length; i++) {
      let direction = corner.angleDirections[i] as any
      let location = direction.clone().add(corner.location)
      let sAngle = (corner.startAngles[i] * Math.PI) / 180
      let eAngle = (corner.endAngles[i] * Math.PI) / 180
      let angle = corner.angles[i]
      let lx = viewmodel.convertX(location.x)
      let ly = viewmodel.convertY(location.y)
      let radius = direction.length() * offsetRatio * 0.5
      if (angle > 130 || angle == 0) {
        continue
      }
      let ccwise = Math.abs(corner.startAngles[i] - corner.endAngles[i]) > 180
      ctx.strokeStyle = '#000000'
      ctx.lineWidth = 4
      ctx.beginPath()
      if (angle == 90) {
        let location2 = direction
          .clone()
          .multiplyScalar(offsetRatio)
          .add(corner.location)
        let lxx = viewmodel.convertX(location2.x)
        let lyy = viewmodel.convertY(location2.y)
        let b = { x: lxx, y: oy }
        let c = { x: lxx, y: lyy }
        let d = { x: ox, y: lyy }
        drawLine(b.x, b.y, c.x, c.y, ctx.lineWidth, ctx.strokeStyle)
        drawLine(c.x, c.y, d.x, d.y, ctx.lineWidth, ctx.strokeStyle)
      } else {
        ctx.arc(
          ox,
          oy,
          radius,
          Math.min(sAngle, eAngle),
          Math.max(sAngle, eAngle),
          ccwise
        )
      }

      ctx.stroke()
      drawTextLabel(`${angle}°`, lx, ly)
    }
  }

  return (
    <div
      className={state.viewType === 2 ? 'show' : 'hide'}
      style={{ position: 'fixed' }}
    >
      {/* <div className="canvas" ref={ref}></div> */}
      <canvas ref={refCanvas}></canvas>
      <div className="pointer" ref={pointerRef}></div>
    </div>
  )
}
