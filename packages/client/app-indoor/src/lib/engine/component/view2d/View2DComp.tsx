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
// import ThreeEngine from 'ThreeEngine'

interface IProps {
  // isVisible?: boolean
}

export const View2DComp = (props: IProps) => {
  let container!: HTMLDivElement | null
  let renderer!: Three.WebGLRenderer
  let scene: Three.Scene
  let camera!: Three.Camera
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
  let pointerRef = useRef<HTMLDivElement>(null)

  scene = new Three.Scene()
  scene.background = new Three.Color(0xeeeeee)

  // const context = useContext(Context)
  // let floorplan = context.floorplan

  const { state } = useContext(Context as any)
  let floorplan: Floorplan = state.floorplan

  // console.log(props.floorplan)
  floorplan.on('UPDATED_EVENT', redraw)

  useEffect(() => {
    container = ref.current
    int()
    // 动画循环渲染
    renderer.setAnimationLoop(() => threeRender())
  }, [])

  function threeRender() {
    renderer.render(scene, camera)
  }

  function redraw() {
    floorplan.getRooms().forEach((room) => {
      drawRoom(room)
    })

    floorplan.getWalls().forEach((wall) => {
      drawWall(wall)
    })

    floorplan.getCorners().forEach((corner: Corner) => {
      drawCorner(corner)
    })
  }

  function drawRoom(room: Room) {}

  function drawWall(wall: Wall) {}

  function drawCorner(corner: Corner) {}

  function int() {
    width = container!.clientWidth
    height = container!.clientHeight

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
    renderer.setSize(width, height)
    container?.appendChild(renderer.domElement)

    createDesignArea()
    createReticles()
    createLinesLR()

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

  return (
    <div className={state.viewType === 2 ? 'show' : 'hide'}>
      <div className="canvas" ref={ref}></div>
      <div className="pointer" ref={pointerRef}></div>
    </div>
  )
}
