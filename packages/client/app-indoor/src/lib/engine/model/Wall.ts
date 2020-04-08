import Corner from './Corner'
import HalfEdge from './HalfEdge'

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

  constructor(start: Corner, end: Corner) {
    this.start = start
    this.end = end

    this.start.attachStart(this)
    this.end.attachEnd(this)
  }

  public getStart() {
    return this.start
  }

  public getEnd() {
    return this.end
  }
}
