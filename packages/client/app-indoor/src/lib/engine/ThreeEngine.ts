import Three from 'three'
import Event from './event/Event'

export interface IConfiguration {
  view2DCanvasElem: HTMLCanvasElement
  view3DCanvasElem: HTMLCanvasElement
}

export default class ThreeEngine extends Event {
  public renderer: Three.WebGLRenderer
  public scene: Three.Scene
  public camera: Three.PerspectiveCamera

  private _configuration!: IConfiguration
  constructor(configuration: IConfiguration) {
    super()
    this._configuration = Object.assign(this._configuration, configuration)

    this.renderer = new Three.WebGLRenderer({
      canvas: this._configuration.view2DCanvasElem,
      antialias: true
    })
    this.camera = new Three.PerspectiveCamera(45, 1, 0.1, 200)
    this.camera.position.z = 15
    this.scene = new Three.Scene()
    // this._scene.background = new Three.TextureLoader().load('')

    this.onWindowResize()
  }

  public onWindowResize(
    width = window.innerWidth,
    height = window.innerHeight
  ): void {
    this.renderer.setSize(width, height)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  public update(time: number): void {
    this.renderer.render(this.scene, this.camera)
  }
}
