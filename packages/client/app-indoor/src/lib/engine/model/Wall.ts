import { WallTypes } from './../core/Constant'
import Corner from './Corner'
import HalfEdge from './HalfEdge'
import { Vector2 } from 'three'

export const defaultWallTexture = {
  url: 'files/texture/wallmap.png',
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

  constructor(start: Corner, end: Corner, aa?: Vector2, bb?: Vector2) {
    this.start = start
    this.end = end

    if (!aa && !bb) {
      this._walltype = WallTypes.STRAIGHT // 直墙
    } else {
      this._walltype = WallTypes.CURVED // 曲墙
    }

    this.start.attachStart(this)
    this.end.attachEnd(this)
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
