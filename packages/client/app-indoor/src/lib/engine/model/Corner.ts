import { Floorplan } from './Floorplan'
import uuid from 'uuid'
import Wall from './Wall'
import { Vector2 } from 'three'
import * as Utils from '../../util/Utils'
import Room from './Room'
export default class Corner {
  public id: string
  public wallStarts: Wall[] = []
  public wallEnds: Wall[] = []
  public floorplan: Floorplan
  public x: number
  public y: number

  private _co = new Vector2(this.x, this.y)

  public elevation = 4

  public attachedRooms: Room[] = []

  constructor(floorplan: Floorplan, x: number, y: number, id = uuid.v4()) {
    this.floorplan = floorplan
    this.x = x
    this.y = y
    this.id = id
  }

  get location() {
    return this._co
  }

  set location(xy) {
    this._co.x = xy.x
    this._co.y = xy.y
    this.x = xy.x
    this.y = xy.y
  }

  public attachStart(wall: Wall) {
    this.wallStarts.push(wall)
  }

  public attachEnd(wall: Wall) {
    this.wallEnds.push(wall)
  }

  attachRoom(room: Room) {
    if (room) {
      this.attachedRooms.push(room)
    }
  }

  public wallTo(corner: Corner) {
    for (let i = 0; i < this.wallStarts.length; i++) {
      if (this.wallStarts[i].getEnd() === corner) {
        return this.wallStarts[i]
      }
    }
    return null
  }
  public wallFrom(corner: Corner) {
    for (let i = 0; i < this.wallEnds.length; i++) {
      if (this.wallEnds[i].getStart() === corner) {
        return this.wallEnds[i]
      }
    }
    return null
  }

  distanceFromCorner(corner: Corner) {
    return this.distanceFrom(new Vector2(corner.x, corner.y))
  }

  distanceFrom(point: any) {
    let distance = Utils.distance(point, new Vector2(this.x, this.y))
    //console.log('x,y ' + x + ',' + y + ' to ' + this.getX() + ',' + this.getY() + ' is ' + distance);
    return distance
  }

  wallToOrFrom(corner: Corner) {
    return this.wallTo(corner) || this.wallFrom(corner)
  }

  updateAngles() {}

  adjacentCorners() {
    let retArray = []
    let i = 0
    for (i = 0; i < this.wallStarts.length; i++) {
      retArray.push(this.wallStarts[i].getEnd())
    }
    for (i = 0; i < this.wallEnds.length; i++) {
      retArray.push(this.wallEnds[i].getStart())
    }
    return retArray
  }

  clearAttachedRooms() {
    this.attachedRooms = []
  }

  getAttachedRooms() {
    return this.attachedRooms
  }
}
