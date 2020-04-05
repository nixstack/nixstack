import React from 'react'
// import { Canvas } from 'react-three-fiber'
// import { Box } from '../box/Box'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './style.css'

interface IProps {
  isVisible?: boolean
}

export class View3D extends React.Component<IProps> {
  private renderer!: THREE.WebGLRenderer
  private camera!: THREE.PerspectiveCamera
  private scene!: THREE.Scene
  private ref = React.createRef<HTMLDivElement>()

  constructor(props: any) {
    super(props)
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    this.camera.position.set(0, 0, 5)
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x333333)

    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  // shouldComponentUpdate() {
  //   if (this.ref.current!.childNodes.length > 0) {
  //     return true
  //   }
  //   return false
  // }

  componentWillUpdate(nextProps: IProps) {
    console.log(nextProps)
  }

  // static getDerivedStateFromProps(props: any) {
  //   console.log(props)
  // }

  // componentDidUpdate(nextProps: IProps) {
  //   console.log('componentDidUpdate' + nextProps)
  // }

  componentDidMount() {
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cue = new THREE.Mesh(geometry, material)
    this.scene.add(cue)
    this.init()
  }

  render() {
    return (
      <div
        className={this.props.isVisible ? 'show' : 'hide'}
        ref={this.ref}
      ></div>
    )
  }

  private init() {
    this.ref.current?.appendChild(this.renderer.domElement)
    // controls
    new OrbitControls(this.camera, this.ref.current as any)
    // 动画循环渲染
    this.renderer.setAnimationLoop(() => this.threeRender())
  }

  private threeRender() {
    this.renderer.render(this.scene, this.camera)
  }
}
