import { WallTypes } from './../core/Constant'
import Corner from './Corner'
import HalfEdge from './HalfEdge'
import { Vector2 } from 'three'
import { Config, configWallThickness } from '../core/Config'

export const defaultWallTexture = {
  url: '/files/texture/wallmap.png',
  stretch: true,
  scale: 0,
}
export default class Wall {
  public name = ''
  public start!: Corner
  public end!: Corner
  public startElevation: any
  public endElevation: any

  public frontTexture = defaultWallTexture
  public backTexture = defaultWallTexture

  public frontEdge!: HalfEdge
  public backEdge!: HalfEdge

  public items = []

  private _walltype: string

  private _a: Vector2
  private _b: Vector2

  public thickness = Config.getNumericValue(configWallThickness)

  constructor(start: Corner, end: Corner, aa?: Vector2, bb?: Vector2) {
    this.start = start
    this.end = end

    if (!aa && !bb) {
      this._walltype = WallTypes.STRAIGHT // 直墙
    } else {
      this._walltype = WallTypes.CURVED // 曲墙
    }

    const o = new Vector2(0, 0)
    const abvector = end.location
      .clone()
      .sub(start.location)
      .multiplyScalar(0.5)
    const ab135plus = abvector.clone().rotateAround(o, Math.PI * 0.75)
    const ab45plus = abvector.clone().rotateAround(o, Math.PI * 0.25)

    if (aa) {
      this._a = new Vector2(0, 0)
      this._a.x = aa.x
      this._a.y = aa.y
    } else {
      this._a = start.location.clone().add(ab45plus)
    }

    if (bb) {
      this._b = new Vector2(0, 0)
      this._b.x = bb.x
      this._b.y = bb.y
    } else {
      this._b = end.location.clone().add(ab135plus)
    }

    this.start.attachStart(this)
    this.end.attachEnd(this)
  }

  get a() {
    return this._a
  }

  set a(location) {
    this._a.x = location.x
    this._a.y = location.y
  }

  get b() {
    return this._b
  }

  set b(location) {
    this._b.x = location.x
    this._b.y = location.y
  }

  getStartX() {
    return this.start.getX()
  }

  getEndX() {
    return this.end.getX()
  }

  getStartY() {
    return this.start.getY()
  }

  getEndY() {
    return this.end.getY()
  }

  public getStart() {
    return this.start
  }

  public getEnd() {
    return this.end
  }

  get wallType() {
    return this._walltype
  }
}
