import React from 'react'
// import { Canvas } from 'react-three-fiber'
// import { Box } from '../box/Box'
import * as Three from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './style.css'
import { LineSegments } from 'three'

export class View2D extends React.Component {
  private container!: HTMLDivElement | null
  private renderer!: Three.WebGLRenderer
  private scene: Three.Scene
  private camera!: Three.Camera
  private width!: number
  private height!: number
  private aspect!: number
  private pos: number[] = []
  private matMarkerL!: Three.MeshBasicMaterial
  private matMarkerR!: Three.MeshBasicMaterial
  // private markersL = []
  // private markersR = []
  private geoReticle!: any
  private reticle!: LineSegments
  private reticleM!: LineSegments

  private matLineL!: Three.LineBasicMaterial
  private geoLineL!: any
  private gridLineL!: any
  private matLineR!: Three.LineBasicMaterial
  private geoLineR!: any
  private gridLineR!: any
  private linePosCount = 200

  private markerSize = 0
  private markerX!: number
  private markerY!: number

  private markersL: any = []
  private markersR: any = []
  private markerCountL = -1
  private markerCountR = -1

  // private sizeFactorL!: number
  // private sizeFactorR!: number

  private idxHitL = -1
  private idxHitR = -1
  private idx3HitL!: number // idxHitL / 3
  private idx3HitR!: number // idxHitR / 3
  private idxMoveL!: number
  private idxMoveR!: number

  private key = ''
  private ref: React.RefObject<HTMLDivElement>
  private pointerRef: React.RefObject<HTMLDivElement>

  constructor(props: any) {
    super(props)
    this.scene = new Three.Scene()
    this.scene.background = new Three.Color(0xeeeeee)
    this.ref = React.createRef()
    this.pointerRef = React.createRef()
  }

  componentDidMount() {
    this.container = this.ref.current
    this.int()

    // 动画循环渲染
    this.renderer.setAnimationLoop(() => this.threeRender())
  }

  render() {
    return (
      <>
        <div className="canvas" ref={this.ref}></div>
        <div className="pointer" ref={this.pointerRef}></div>
      </>
    )
  }

  private threeRender() {
    this.renderer.render(this.scene, this.camera)
  }

  private int() {
    this.width = this.container!.clientWidth
    this.height = this.container!.clientHeight

    if (this.width > 2 * this.height) {
      this.width = 2 * this.height
    } else {
      this.height = this.width / 2
    }

    // 设置相机
    this.aspect = this.width / this.height
    this.camera = new Three.OrthographicCamera(
      -this.aspect,
      this.aspect,
      1,
      -1,
      0.01,
      10
    )
    this.camera.position.set(0, 0, 0.1)

    // render
    this.renderer = new Three.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.width, this.height)
    this.container?.appendChild(this.renderer.domElement)

    this.createDesignArea()
    this.createReticles()
    this.createLinesLR()

    this.initEvent()
  }

  private initEvent() {
    window.addEventListener('keydown', this.onWindowKeyDown.bind(this))
    window.addEventListener('keyup', this.onWindowKeyUp.bind(this))

    this.ref.current?.addEventListener('mousedown', this.onMouseDown.bind(this))
    this.ref.current?.addEventListener('mouseup', this.onMouseUp.bind(this))
    this.ref.current?.addEventListener('mousemove', this.onMouseMove.bind(this))
  }

  private createDesignArea() {
    // 小网格
    const geoBuffer2 = new Three.BufferGeometry() as any
    this.pos = []
    for (let i = 0; i < 10; i++) {
      let j = (i + 0.5) / 10
      this.rasterPosPush(j)
    }

    geoBuffer2.lineCount = 60
    geoBuffer2.positions = new Float32Array(geoBuffer2.lineCount * 6)
    for (let i = 0; i < this.pos.length; i++)
      geoBuffer2.positions[i] = this.pos[i]
    geoBuffer2.setAttribute(
      'position',
      new Three.BufferAttribute(geoBuffer2.positions, 3)
    )
    const mat2 = new Three.LineBasicMaterial({ color: 0xdddddd })
    const grid2 = new Three.LineSegments(geoBuffer2, mat2)
    this.scene.add(grid2)

    // 大网格
    const geoBuffer1 = new Three.BufferGeometry() as any
    this.pos = []
    for (let i = 1; i < 10; i++) {
      let j = i / 10
      this.rasterPosPush(j)
    }

    geoBuffer1.lineCount = 54
    geoBuffer1.positions = new Float32Array(geoBuffer1.lineCount * 6)
    for (let i = 0; i < this.pos.length; i++)
      geoBuffer1.positions[i] = this.pos[i]
    geoBuffer1.setAttribute(
      'position',
      new Three.BufferAttribute(geoBuffer1.positions, 3)
    )
    const mat1 = new Three.LineBasicMaterial({ color: 0xcccccc })
    const grid1 = new Three.LineSegments(geoBuffer1, mat1)
    this.scene.add(grid1)

    // 左右网格各自的中心十字线
    const geoBuffer0 = new Three.BufferGeometry() as any
    this.pos = []

    this.pos.push(-2, 0, 0, -0.02, 0, 0) // horizontal
    this.pos.push(0.02, 0, 0, 2, 0, 0)
    this.pos.push(-1, -1, 0, -1, 1, 0) // vertical
    this.pos.push(1, -1, 0, 1, 1, 0)

    geoBuffer0.lineCount = 4
    geoBuffer0.positions = new Float32Array(geoBuffer0.lineCount * 6)
    for (let i = 0; i < this.pos.length; i++)
      geoBuffer0.positions[i] = this.pos[i]
    geoBuffer0.setAttribute(
      'position',
      new Three.BufferAttribute(geoBuffer0.positions, 3)
    )
    const mat0 = new Three.LineBasicMaterial({ color: 0x888888 })
    const grid0 = new Three.LineSegments(geoBuffer0, mat0)
    this.scene.add(grid0)

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
    this.scene.add(gridSplit)

    //.....
    const markerCenterL = new Three.Sprite(
      new Three.MeshBasicMaterial({ color: 0x333333 }) as any
    )

    // 画线的点的材质
    this.matMarkerL = new Three.MeshBasicMaterial({
      color: 0x0000aa,
      transparent: true,
      opacity: 0.5
    })
    this.matMarkerR = new Three.MeshBasicMaterial({
      color: 0x009900,
      transparent: true,
      opacity: 0.5
    })

    this.markerSize = 0.015
    markerCenterL.rotation.z = Math.PI / 4
    markerCenterL.scale.x = this.markerSize
    markerCenterL.scale.y = this.markerSize
    markerCenterL.position.set(-1, 0, 0)
    this.scene.add(markerCenterL) // grid0的交叉点

    const markerCenterR = markerCenterL.clone() // clone from L
    markerCenterR.position.set(1, 0, 0)
    this.scene.add(markerCenterR) // grid0的交叉点
  }

  private rasterPosPush(j: number) {
    this.pos.push(-2, j, 0, 2, j, 0) // horizontal
    this.pos.push(-2, -j, 0, 2, -j, 0)
    this.pos.push(-2 + j, -1, 0, -2 + j, 1, 0) // vertical
    this.pos.push(-1 + j, -1, 0, -1 + j, 1, 0)
    this.pos.push(1 - j, -1, 0, 1 - j, 1, 0)
    this.pos.push(2 - j, -1, 0, 2 - j, 1, 0)
  }

  private createReticles() {
    this.geoReticle = new Three.BufferGeometry()
    this.geoReticle.positions = new Float32Array(4 * 3)

    this.geoReticle.positions[0] = 0
    this.geoReticle.positions[1] = -0.02
    this.geoReticle.positions[2] = 0

    this.geoReticle.positions[3] = 0
    this.geoReticle.positions[4] = 0.02
    this.geoReticle.positions[5] = 0

    this.geoReticle.positions[6] = -0.02
    this.geoReticle.positions[7] = 0
    this.geoReticle.positions[8] = 0

    this.geoReticle.positions[9] = 0.02
    this.geoReticle.positions[10] = 0
    this.geoReticle.positions[11] = 0

    this.geoReticle.setAttribute(
      'positon',
      new Three.BufferAttribute(this.geoReticle.positions, 3)
    )
    const matReticle = new Three.LineBasicMaterial({ color: 0xff0000 })
    this.reticle = new Three.LineSegments(this.geoReticle, matReticle)
    this.reticle.scale.set(2, 2, 0)
    this.scene.add(this.reticle)
    // Cannot read property 'BYTES_PER_ELEMENT' of undefined
    // this.reticle.visible = true
    this.reticle.visible = false

    const matReticleM = new Three.LineBasicMaterial({ color: 0x444444 })
    this.reticleM = new Three.LineSegments(this.geoReticle, matReticleM)
    this.scene.add(this.reticleM)
    this.reticleM.visible = true
  }

  /**
   * 画线
   */
  private createLinesLR() {
    this.matLineL = new Three.LineBasicMaterial({ color: 0x0000aa })
    this.geoLineL = new Three.BufferGeometry() as any
    this.geoLineL.positions = new Float32Array(this.linePosCount * 3)
    // this.geoLineL.positions = new Float32Array(this.linePosCount * 3)
    this.geoLineL.setAttribute(
      'position',
      new Three.BufferAttribute(this.geoLineL.positions, 3).setUsage(
        Three.DynamicDrawUsage
      )
    )
    this.gridLineL = new Three.Line(this.geoLineL, this.matLineL)
    this.scene.add(this.gridLineL)

    this.gridLineL.geometry.setDrawRange(0, 0)

    // ...
    this.matLineR = new Three.LineBasicMaterial({ color: 0x0099000 })
    this.geoLineR = new Three.BufferGeometry()
    this.geoLineR.positions = new Float32Array(this.linePosCount * 3)
    this.geoLineR.setAttribute(
      'position',
      new Three.BufferAttribute(this.geoLineR.positions, 3).setUsage(
        Three.DynamicDrawUsage
      )
    )
    this.gridLineR = new Three.Line(this.geoLineR, this.matLineR)
    this.scene.add(this.gridLineR)

    this.gridLineR.geometry.setDrawRange(0, 0)
  }

  private onWindowKeyDown(event: KeyboardEvent) {
    // 按键d
    switch (event.keyCode) {
      case 68:
        this.key = 'delete'
        break
      case 73:
        this.key = 'insert'
        break
      case 77:
        this.key = 'move'
        break
    }
  }

  private onWindowKeyUp(event: KeyboardEvent) {
    this.key = ''
  }

  private onMouseDown(event: MouseEvent) {
    event.preventDefault()
    let xNew, yNew

    this.getMarkerXY(event.clientX, event.clientY)

    if (this.markerX < 0) {
      // left
      if (this.key === '') {
        this.markerCountL++

        this.markersL[this.markerCountL] = new Three.Sprite(
          this.matMarkerL as any
        )
        this.markersL[this.markerCountL].position.x = this.markerX
        this.markersL[this.markerCountL].position.y = this.markerY
        this.markersL[this.markerCountL].scale.x = this.markerSize
        this.markersL[this.markerCountL].scale.y = this.markerSize

        this.scene.add(this.markersL[this.markerCountL])
        this.geoLineL.setDrawRange(0, this.markerCountL + 1)

        this.geoLineL.positions[this.markerCountL * 3] = this.markerX
        this.geoLineL.positions[this.markerCountL * 3 + 1] = this.markerY
        this.geoLineL.positions[this.markerCountL * 3 + 2] = 0
      } else if (this.key === 'insert') {
        this.idxHitL = this.hitMarkerL(-1, this.markerX, this.markerY)
        this.idx3HitL = this.idxHitL / 3

        if (this.idxHitL !== -1) {
          if (this.idxHitL < this.markerCountL * 3) {
            for (let i = this.markerCountL; i > this.idx3HitL; i--) {
              this.markersL[i + 1] = this.markersL[i]
              this.markersL[i + 1].position.x = this.markersL[i].position.x
              this.markersL[i + 1].position.y = this.markersL[i].position.y
            }

            this.markerCountL++

            this.markersL[this.idx3HitL + 1] = new Three.Sprite(
              this.matMarkerL as any
            )

            xNew =
              Math.round(
                (100 *
                  (this.markersL[this.idx3HitL].position.x +
                    this.markersL[this.idx3HitL + 2].position.x)) /
                  2
              ) / 100
            yNew =
              Math.round(
                (100 *
                  (this.markersL[this.idx3HitL].position.y +
                    this.markersL[this.idx3HitL + 2].position.y)) /
                  2
              ) / 100

            this.markersL[this.idx3HitL + 1].position.x = xNew
            this.markersL[this.idx3HitL + 1].position.y = yNew
            this.markersL[this.idx3HitL + 1].scale.x = this.markerSize
            this.markersL[this.idx3HitL + 1].scale.y = this.markerSize

            this.scene.add(this.markersL[this.idx3HitL + 1])
            this.geoLineL.setDrawRange(0, this.markerCountL + 1)

            for (let i = this.markerCountL * 3; i > this.idxHitL; i -= 3) {
              this.geoLineL.positions[i + 3] = this.geoLineL.positions[i]
              this.geoLineL.positions[i + 3 + 1] = this.geoLineL.positions[
                i + 1
              ]
              this.geoLineL.positions[i + 3 + 2] = this.geoLineL.positions[
                i + 2
              ]
            }

            this.geoLineL.positions[this.idxHitL + 3] = xNew
            this.geoLineL.positions[this.idxHitL + 3 + 1] = yNew
            this.geoLineL.positions[this.idxHitL + 3 + 2] = 0
          }
        }
      } else if (this.key === 'delete') {
        this.idxHitL = this.hitMarkerL(-1, this.markerX, this.markerY)
        this.idx3HitL = this.idxHitL / 3

        if (this.idxHitL !== -1) {
          for (let j = this.idxHitL; j < this.markersL.length * 3 - 3; j += 3) {
            this.geoLineL.positions[j] = this.geoLineL.positions[j + 3]
            this.geoLineL.positions[j + 1] = this.geoLineL.positions[j + 4]
          }

          this.geoLineL.remove(this.markersL[this.idx3HitL])
          this.markersL[this.idx3HitL].geometry.dispose()

          for (let j = this.idx3HitL; j < this.markersL.length - 1; j++) {
            this.markersL[j] = this.markersL[j + 1]
          }

          this.markerCountL--

          this.geoLineL.setDrawRange(0, this.markerCountL + 1)
        }
      } else if (this.key === 'move') {
        this.idxMoveL = this.hitMarkerL(-1, this.markerX, this.markerY)
      }
      this.geoLineL.attributes.position.needsUpdate = true
      // this.redrawView3D()
    } else if (this.markerX > 0) {
      // right
      if (this.key === '') {
        this.markerCountR++

        this.markersR[this.markerCountR] = new Three.Sprite(
          this.matMarkerR as any
        )
        this.markersR[this.markerCountR].position.x = this.markerX
        this.markersR[this.markerCountR].position.y = this.markerY
        this.markersR[this.markerCountR].scale.x = this.markerSize
        this.markersR[this.markerCountR].scale.y = this.markerSize

        this.scene.add(this.markersR[this.markerCountR])
        this.geoLineR.setDrawRange(0, this.markerCountR + 1)

        this.geoLineR.positions[this.markerCountR * 3] = this.markerX
        this.geoLineR.positions[this.markerCountR * 3 + 1] = this.markerY
        this.geoLineR.positions[this.markerCountR * 3 + 2] = 0
      } else if (this.key === 'insert') {
        this.idxHitR = this.hitMarkerR(-1, this.markerX, this.markerY)
        this.idx3HitR = this.idxHitR / 3

        if (this.idxHitR !== -1) {
          if (this.idxHitR < this.markerCountR * 3) {
            for (let i = this.markerCountR; i > this.idx3HitR; i--) {
              this.markersR[i + 1] = this.markersR[i]
              this.markersR[i + 1].position.x = this.markersR[i].position.x
              this.markersR[i + 1].position.y = this.markersR[i].position.y
            }

            this.markerCountR++

            this.markersR[this.idx3HitR + 1] = new Three.Sprite(
              this.matMarkerR as any
            )

            xNew =
              Math.round(
                (100 *
                  (this.markersR[this.idx3HitR].position.x +
                    this.markersR[this.idx3HitR + 2].position.x)) /
                  2
              ) / 100
            yNew =
              Math.round(
                (100 *
                  (this.markersR[this.idx3HitR].position.y +
                    this.markersR[this.idx3HitR + 2].position.y)) /
                  2
              ) / 100

            this.markersR[this.idx3HitR + 1].position.x = xNew
            this.markersR[this.idx3HitR + 1].position.y = yNew
            this.markersR[this.idx3HitR + 1].scale.x = this.markerSize
            this.markersR[this.idx3HitR + 1].scale.y = this.markerSize

            this.scene.add(this.markersR[this.idx3HitR + 1])
            this.geoLineR.setDrawRange(0, this.markerCountR + 1)

            for (let i = this.markerCountR * 3; i > this.idxHitR; i -= 3) {
              this.geoLineR.positions[i + 3] = this.geoLineR.positions[i]
              this.geoLineR.positions[i + 3 + 1] = this.geoLineR.positions[
                i + 1
              ]
              this.geoLineR.positions[i + 3 + 2] = this.geoLineR.positions[
                i + 2
              ]
            }

            this.geoLineR.positions[this.idxHitR + 3] = xNew
            this.geoLineR.positions[this.idxHitR + 3 + 1] = yNew
            this.geoLineR.positions[this.idxHitR + 3 + 2] = 0
          }
        }
      } else if (this.key === 'delete') {
        this.idxHitR = this.hitMarkerR(-1, this.markerX, this.markerY)
        this.idx3HitR = this.idxHitR / 3

        if (this.idxHitR !== -1) {
          for (let j = this.idxHitR; j < this.markersR.length * 3 - 3; j += 3) {
            this.geoLineR.positions[j] = this.geoLineR.positions[j + 3]
            this.geoLineR.positions[j + 1] = this.geoLineR.positions[j + 4]
          }

          this.scene.remove(this.markersR[this.idx3HitR])
          this.markersR[this.idx3HitR].geometry.dispose()

          for (let j = this.idx3HitR; j < this.markersR.length - 1; j++) {
            this.markersR[j] = this.markersR[j + 1]
          }

          this.markerCountR--

          this.geoLineR.setDrawRange(0, this.markerCountR + 1)
        }
      } else if (this.key === 'move') {
        this.idxMoveR = this.hitMarkerR(-1, this.markerX, this.markerY)
      }
      this.geoLineR.attributes.position.needsUpdate = true
      // this.redrawView3D()
    }
  }

  private onMouseUp(event: MouseEvent) {
    event.preventDefault()

    this.idxMoveL = -1
    this.idxMoveR = -1
    this.key = ''
    // this.redrawView3D()
  }

  private onMouseMove(event: MouseEvent) {
    event.preventDefault()

    this.getMarkerXY(event.clientX, event.clientY)

    this.reticle.position.set(this.markerX, this.markerY, 0)

    this.pointerRef.current!.style.left = event.clientX + 10 + 'px'
    this.pointerRef.current!.style.top = event.clientY - 10 + 'px'

    if (this.markerX === 0) {
      this.reticleM.visible = false
    }

    if (this.markerX < 0) {
      // left
      // this.pointerRef.current?.innerHTML = Math.round( 10000 *( this.markerX + 1 ) * this.sizeFactorL ) / 10000 + " ▪ " + Math.round( 10000 * this.markerY * this.sizeFactorL ) / 10000

      if (this.hitMarkerL(this.idxMoveL, this.markerX, this.markerY) === -1) {
        this.reticleM.visible = true
        this.reticle.visible = false
        this.reticleM.position.set(this.markerX, this.markerY, 0)
        this.pointerRef.current!.style.color = '#666600'
      } else {
        this.reticleM.visible = false
        this.reticle.visible = true
        this.reticle.position.set(this.markerX, this.markerY, 0)
        this.pointerRef.current!.style.color = '#ff0000'
      }

      if (this.key === 'move' && this.idxMoveL !== -1) {
        if (
          !this.checkHitL(this.idxMoveL - 3) &&
          !this.checkHitL(this.idxMoveL + 3)
        ) {
          this.markersL[this.idxMoveL / 3].position.x = this.markerX
          this.markersL[this.idxMoveL / 3].position.y = this.markerY

          this.geoLineL.positions[this.idxMoveL] = this.markerX
          this.geoLineL.positions[this.idxMoveL + 1] = this.markerY

          this.geoLineL.attributes.position.needsUpdate = true
        }
      }
    } else if (this.markerX > 0) {
      // right
      // this.pointerRef.current!.innerHTML = Math.round( 10000 *( this.markerX - 1 )  * this.sizeFactorR ) / 10000  + " ▪ " + Math.round( 10000 * this.markerY * this.sizeFactorR ) / 10000;

      if (this.hitMarkerR(this.idxMoveR, this.markerX, this.markerY) === -1) {
        this.reticleM.visible = true
        this.reticle.visible = false
        this.reticleM.position.set(this.markerX, this.markerY, 0)
        this.pointerRef.current!.style.color = '#666600'
      } else {
        this.reticleM.visible = false
        this.reticle.visible = true
        this.reticle.position.set(this.markerX, this.markerY, 0)
        this.pointerRef.current!.style.color = '#ff0000'
      }

      if (this.key === 'move' && this.idxMoveR !== -1) {
        if (
          !this.checkHitR(this.idxMoveR - 3) &&
          !this.checkHitR(this.idxMoveR + 3)
        ) {
          this.markersR[this.idxMoveR / 3].position.x = this.markerX
          this.markersR[this.idxMoveR / 3].position.y = this.markerY

          this.geoLineR.positions[this.idxMoveR] = this.markerX
          this.geoLineR.positions[this.idxMoveR + 1] = this.markerY

          this.geoLineR.attributes.position.needsUpdate = true
        }
      }
    }
  }

  private getMarkerXY(ecX: number, ecY: number) {
    this.markerX = Math.round(100 * ((ecX / this.width) * 4 - 2)) / 100
    this.markerY = Math.round(100 * ((-ecY / this.height) * 2 + 1)) / 100
  }

  private hitMarkerL(idx: number, markerX: any, markerY: any) {
    let hitL = false

    let j = this.markerCountL * 3 + 3

    while (!hitL && j > 2) {
      j -= 3

      if (j !== idx) {
        hitL = this.checkHitL(j)
      }
    }

    return hitL && j !== idx ? j : -1 // idxHitL
  }

  private hitMarkerR(idx: number, markerX: number, markerY: number) {
    let hitR = false

    let j = this.markerCountR * 3 + 3

    while (!hitR && j > 2) {
      j -= 3

      if (j !== idx) {
        hitR = this.checkHitR(j)
      }
    }

    return hitR && j !== idx ? j : -1 // idxHitR
  }

  private checkHitL(j: number) {
    const epsilon = 0.004

    let x0 = this.geoLineL.positions[j] - epsilon
    let x1 = this.geoLineL.positions[j] + epsilon
    let y0 = this.geoLineL.positions[j + 1] - epsilon
    let y1 = this.geoLineL.positions[j + 1] + epsilon

    return (
      this.markerX > x0 &&
      this.markerX < x1 &&
      this.markerY > y0 &&
      this.markerY < y1
    )
  }

  private checkHitR(j: number) {
    const epsilon = 0.004

    let x0 = this.geoLineR.positions[j] - epsilon
    let x1 = this.geoLineR.positions[j] + epsilon
    let y0 = this.geoLineR.positions[j + 1] - epsilon
    let y1 = this.geoLineR.positions[j + 1] + epsilon

    return (
      this.markerX > x0 &&
      this.markerX < x1 &&
      this.markerY > y0 &&
      this.markerY < y1
    )
  }
}
