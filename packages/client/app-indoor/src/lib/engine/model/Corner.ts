import { Floorplan } from './Floorplan'
import uuid from 'uuid'
import Wall from './Wall'
import { Vector2 } from 'three'
import * as Utils from '../../util/Utils'
import Room from './Room'
import Event from '../event/Event'
export default class Corner extends Event {
  public id: string
  public wallStarts: Wall[] = []
  public wallEnds: Wall[] = []
  public floorplan: Floorplan
  private _x: number
  private _y: number
  private _hasChanged: boolean = false

  private _co: Vector2

  public elevation = 4

  public attachedRooms: Room[] = []

  constructor(floorplan: Floorplan, x: number, y: number, id = uuid.v4()) {
    super()
    this.floorplan = floorplan
    this.id = id

    this._x = x
    this._y = y
    this._co = new Vector2(x, y)
  }

  get x() {
    return this._x
  }

  set x(value) {
    var oldvalue = this._x
    if (Math.abs(value - this._x) > 1e-6) {
      this._hasChanged = true
    }
    this._x = value
    if (this._hasChanged) {
      this._co.x = this._x
      this.updateAttachedRooms()
      //			this.floorplan.update(false);
      this.dispatch('EVENT_CORNER_ATTRIBUTES_CHANGED', {
        target: this,
        info: { from: oldvalue, to: this._x },
      })
    }
  }

  get y() {
    return this._y
  }

  set y(value) {
    var oldvalue = this._y
    if (Math.abs(value - this._y) > 1e-6) {
      this._hasChanged = true
    }
    this._y = value
    if (this._hasChanged) {
      this._co.y = this._y
      this.updateAttachedRooms()
      //			this.floorplan.update(false);
      this.dispatch('EVENT_CORNER_ATTRIBUTES_CHANGED', {
        target: this,
        info: { from: oldvalue, to: this._y },
      })
    }
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

  /**
   * 当移动一个角的时候，它将会影响跟它相连接的房间形状，因此要更新房间
   * @param explicit
   */
  updateAttachedRooms(explicit = false) {
    if (!this._hasChanged && !explicit) {
      return
    }
    this.attachedRooms.forEach((room) => {
      room.updateArea()
    })
    this._hasChanged = false
  }
}
