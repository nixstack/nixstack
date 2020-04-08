import Corner from './Corner'
import Room from './Room'
import { Vector2 } from 'three'
import { Dimensioning } from '../core/Dimensioning'
import Wall from './Wall'
import * as Utils from '../../util/Utils'
import Event from '../event/Event'

export class Floorplan extends Event {
  public walls: Wall[] = []
  public corners: Corner[] = []
  public rooms: Room[] = []
  public newFloorTextures: any
  public floorTextures = {}
  public metaroomsdata = {}

  public loadFloorplan(floorplan: Floorplan) {
    let corners: any = {}
    if (
      floorplan == null ||
      !('corners' in floorplan) ||
      !('walls' in floorplan)
    ) {
      return
    }
    for (let id in floorplan.corners) {
      let corner = floorplan.corners[id]
      corners[id] = this.newCorner(
        Dimensioning.cmFromMeasureRaw(corner.x),
        Dimensioning.cmFromMeasureRaw(corner.y),
        id
      )
      if (corner.elevation) {
        corners[id].elevation = Dimensioning.cmFromMeasureRaw(corner.elevation)
      }
    }
    let scope = this
    floorplan.walls.forEach((wall) => {
      let newWall = scope.newWall(
        corners[(wall as any).corner1],
        corners[(wall as any).corner2]
      )

      if (wall.frontTexture) {
        newWall.frontTexture = wall.frontTexture
      }
      if (wall.backTexture) {
        newWall.backTexture = wall.backTexture
      }
    })

    if ('newFloorTextures' in floorplan) {
      this.floorTextures = floorplan.newFloorTextures
    }
    this.metaroomsdata = floorplan.rooms
    this.update()

    // this.dispatchEvent({ type: EVENT_LOADED, item: this })
    // this.roomLoadedCallbacks.fire();
  }

  newCorner(x: any, y: any, id: any) {
    // let scope = this
    let corner = new Corner(this, x, y, id)

    // for (let i = 0; i < this.corners.length; i++) {
    //   let existingCorner = this.corners[i]
    //   if (existingCorner.distanceFromCorner(corner) < 20) {
    //     return existingCorner
    //   }
    // }

    this.corners.push(corner)
    // corner.addEventListener(EVENT_DELETED, function (o) {
    //   scope.removeCorner(o.item)
    // })
    // corner.addEventListener(EVENT_CORNER_ATTRIBUTES_CHANGED, function (o) {
    //   scope.dispatchEvent(o)
    //   let updatecorners = o.item.adjacentCorners()
    //   updatecorners.push(o.item)
    //   scope.update(false, updatecorners)
    //   //			scope.update(false);//For debug reasons
    // })
    // corner.addEventListener(EVENT_MOVED, function (o) {
    //   scope.dispatchEvent(o)
    //   let updatecorners = o.item.adjacentCorners()
    //   updatecorners.push(o.item)
    //   scope.update(false, updatecorners)
    //   //			scope.update(false);//For debug reasons
    // })

    // this.dispatchEvent({ type: EVENT_NEW, item: this, newItem: corner })

    this.update()

    return corner
  }

  newWall(start: any, end: any) {
    // let scope = this;
    let wall = new Wall(start, end)

    this.walls.push(wall)
    // wall.addEventListener(EVENT_DELETED, function(o){scope.removeWall(o.item);});
    // wall.addEventListener(EVENT_WALL_ATTRIBUTES_CHANGED, function(o){
    // 	scope.dispatchEvent(o);
    // });

    // this.dispatchEvent({type: EVENT_NEW, item: this, newItem: wall});
    this.update()
    return wall
  }

  update(
    updateroomconfiguration = true,
    updatecorners = [] //Should include for , updatewalls=null, updaterooms=null
  ) {
    if (updatecorners.length > 0) {
      //			console.log('UPDATE CORNER ANGLES ::: ', updatecorners.length);
      updatecorners!.forEach((corner) => {})
    }

    if (!updateroomconfiguration) {
      // this.dispatchEvent({type: EVENT_UPDATED, item: this});
      return
    }

    //		console.log('UPDATE ROOM WITH NEW ENTRIES ::: ');

    let scope = this

    // this.rooms.forEach((room)=>{room.removeEventListener(EVENT_ROOM_NAME_CHANGED,
    // scope.roomNameChanged)});

    let roomCorners = this.findRooms(this.corners)
    this.rooms = []

    this.corners.forEach((corner) => {
      corner.clearAttachedRooms()
      //			corner.updateAngles();
    })

    roomCorners.forEach((corners) => {
      // new Room(scope, corners)
      let room = new Room(scope as any, corners)
      room.updateArea()
      this.rooms.push(room)

      // room.addEventListener(EVENT_ROOM_NAME_CHANGED, (e) => {
      //   scope.roomNameChanged(e)
      // })
      // room.addEventListener(EVENT_ROOM_ATTRIBUTES_CHANGED, function (o) {
      //   let room = o.item
      //   scope.dispatchEvent(o)
      //   if (scope.metaroomsdata[room.roomByCornersId]) {
      //     scope.metaroomsdata[room.roomByCornersId]['name'] = room.name
      //   } else {
      //     scope.metaroomsdata[room.roomByCornersId] = {}
      //     scope.metaroomsdata[room.roomByCornersId]['name'] = room.name
      //   }
      // })

      // if (scope.metaroomsdata) {
      //   if (scope.metaroomsdata[room.roomByCornersId]) {
      //     room.name = scope.metaroomsdata[room.roomByCornersId]['name']
      //   }
      // }
    })
    // this.assignOrphanEdges()
    // this.updateFloorTextures()
    this.dispatch('UPDATED_EVENT')
    // console.log('TOTAL WALLS ::: ', this.walls.length);
  }

  findRooms(corners: Corner[]) {
    function _calculateTheta(
      previousCorner: Corner,
      currentCorner: Corner,
      nextCorner: Corner
    ) {
      let theta = Utils.angle2pi(
        new Vector2(
          previousCorner.x - currentCorner.x,
          previousCorner.y - currentCorner.y
        ),
        new Vector2(
          nextCorner.x - currentCorner.x,
          nextCorner.y - currentCorner.y
        )
      )
      return theta
    }

    function _removeDuplicateRooms(roomArray: any) {
      let results = []
      let lookup: any = {}
      let hashFunc = function (corner: any) {
        return corner.id
      }
      let sep = '-'
      for (let i = 0; i < roomArray.length; i++) {
        // rooms are cycles, shift it around to check uniqueness
        let add = true
        let room = roomArray[i]
        let str
        for (let j = 0; j < room.length; j++) {
          let roomShift = Utils.cycle(room, j)
          str = Utils.map(roomShift, hashFunc).join(sep)
          if (lookup.hasOwnProperty(str)) {
            add = false
          }
        }
        if (add) {
          results.push(roomArray[i])
          lookup[str as string] = true
        }
      }
      return results
    }

    function _findTightestCycle(firstCorner: any, secondCorner: any) {
      let stack: any[] = []
      let next = { corner: secondCorner, previousCorners: [firstCorner] }
      let visited: any = {}
      visited[firstCorner.id] = true

      while (next) {
        // update previous corners, current corner, and visited corners
        let currentCorner = next.corner
        visited[currentCorner.id] = true

        // did we make it back to the startCorner?
        if (next.corner === firstCorner && currentCorner !== secondCorner) {
          return next.previousCorners
        }

        let addToStack = []
        let adjacentCorners = next.corner.adjacentCorners()
        for (let i = 0; i < adjacentCorners.length; i++) {
          let nextCorner = adjacentCorners[i]

          // is this where we came from?
          // give an exception if its the first corner and we aren't
          // at the second corner
          if (
            nextCorner.id in visited &&
            !(nextCorner === firstCorner && currentCorner !== secondCorner)
          ) {
            continue
          }

          // nope, throw it on the queue
          addToStack.push(nextCorner)
        }

        let previousCorners = next.previousCorners.slice(0)
        previousCorners.push(currentCorner)
        if (addToStack.length > 1) {
          // visit the ones with smallest theta first
          let previousCorner =
            next.previousCorners[next.previousCorners.length - 1]
          addToStack.sort(function (a, b) {
            return (
              _calculateTheta(previousCorner, currentCorner, b) -
              _calculateTheta(previousCorner, currentCorner, a)
            )
          })
        }

        if (addToStack.length > 0) {
          // add to the stack
          addToStack.forEach((corner) => {
            stack.push({ corner: corner, previousCorners: previousCorners })
          })
        }

        // pop off the next one
        next = stack.pop()
      }
      return []
    }

    let loops: any[] = []

    corners.forEach((firstCorner) => {
      firstCorner.adjacentCorners().forEach((secondCorner) => {
        loops.push(_findTightestCycle(firstCorner, secondCorner))
      })
    })

    // remove duplicates
    let uniqueLoops = _removeDuplicateRooms(loops)
    // remove CW loops
    let uniqueCCWLoops = Utils.removeIf(uniqueLoops, Utils.isClockwise)
    return uniqueCCWLoops
  }

  getRooms() {
    return this.rooms
  }

  wallEdges() {
    let edges: any = []
    this.walls.forEach((wall) => {
      if (wall.frontEdge) {
        edges.push(wall.frontEdge)
      }
      if (wall.backEdge) {
        edges.push(wall.backEdge)
      }
    })
    return edges
  }

  getFloorTexture(uuid: any) {
    if (uuid in this.floorTextures) {
      return (this.floorTextures as any)[uuid]
    }
    return null
  }
}
