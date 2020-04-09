import { Floorplan } from './../../model/Floorplan'
import { Dimensioning } from '../../core/Dimensioning'

export default class ViewModel {
  public activeRoom = null
  // 坐标系原点
  public originX = 0
  public originY = 0

  private _clickedRoom = null

  public canvasElement: HTMLCanvasElement
  public floorplan: Floorplan

  constructor(canvasElement: HTMLCanvasElement, floorplan: Floorplan) {
    this.canvasElement = canvasElement
    this.floorplan = floorplan
  }

  get selectedRoom() {
    return this._clickedRoom
  }

  /** 从THREE坐标转换到 CANVAS坐标 */
  convertX(x: any) {
    return Dimensioning.cmToPixel(x - Dimensioning.pixelToCm(this.originX))
  }

  /** 从THREE坐标转换到 CANVAS坐标 */
  convertY(y: any) {
    return Dimensioning.cmToPixel(y - Dimensioning.pixelToCm(this.originY))
  }

  /**
   * 重设坐标系原点，使平面图居中
   */
  resetOrigin() {
    const centerX = this.canvasElement.width / 2.0
    const centerY = this.canvasElement.height / 2.0

    const centerFloorplan = this.floorplan.getCenter()
    this.originX = Dimensioning.cmToPixel(centerFloorplan.x) - centerX
    this.originY = Dimensioning.cmToPixel(centerFloorplan.z) - centerY
  }
}
