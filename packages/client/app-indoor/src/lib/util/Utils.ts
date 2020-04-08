// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-mix-in-classes

import { Vector2, MathUtils } from 'three'

// https://codeburst.io/multiple-inheritance-with-typescript-mixins-d92d01198907
export function applyMixins(derivedConstructor: any, baseConstructors: any[]) {
  baseConstructors.forEach((baseConstructor) => {
    Object.getOwnPropertyNames(baseConstructor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedConstructor.prototype,
        name,
        (Object as any).getOwnPropertyDescriptor(
          baseConstructor.prototype,
          name
        )
      )
    })
  })
}

export function angle2pi(start: any, end: any) {
  let tTheta = angle(start, end)
  if (tTheta < 0) {
    tTheta += 2.0 * Math.PI
  }
  return tTheta
}

export function angle(start: any, end: any) {
  let tDot = start.x * end.x + start.y * end.y
  let tDet = start.x * end.y - start.y * end.x
  let tAngle = -Math.atan2(tDet, tDot)
  return tAngle
}

export function distance(start: any, end: any) {
  return Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2))
}

export function getCyclicOrder(points: any, start: any) {
  if (!start) {
    start = new Vector2(0, 0)
  }
  let angles = []
  for (let i = 0; i < points.length; i++) {
    let point = points[i]
    let vect = point.clone().sub(start)
    let radians = Math.atan2(vect.y, vect.x)
    let degrees = MathUtils.radToDeg(radians)
    degrees = degrees > 0 ? degrees : (degrees + 360) % 360
    angles.push(degrees)
  }
  let indices = argsort(angles)
  let sortedAngles = []
  let sortedPoints = []
  for (let i = 0; i < indices.length; i++) {
    sortedAngles.push(angles[indices[i]])
    sortedPoints.push(points[indices[i]])
  }
  return { indices: indices, angles: sortedAngles, points: sortedPoints }
}

export function argsort(numericalValues: any, direction = 1) {
  let indices = Array.from(
    new Array(numericalValues.length),
    (val, index) => index
  )
  return indices
    .map((item, index) => [numericalValues[index], item]) // add the clickCount to sort by
    .sort(([count1], [count2]) => (count1 - count2) * direction) // sort by the clickCount data
    .map(([, item]) => item) // extract the sorted items
}

export function cycle(arr: any, shift: any) {
  let tReturn = arr.slice(0)
  for (let tI = 0; tI < shift; tI++) {
    let tmp = tReturn.shift()
    tReturn.push(tmp)
  }
  return tReturn
}

export function map(array: any, func: any) {
  let tResult: any[] = []
  array.forEach((element: any) => {
    tResult.push(func(element))
  })
  return tResult
}

export function removeIf(array: any, func: any) {
  let tResult: any[] = []
  array.forEach((element: any) => {
    if (!func(element)) {
      tResult.push(element)
    }
  })
  return tResult
}

export function isClockwise(points: any) {
  // make positive
  let tSubX = Math.min(
    0,
    Math.min.apply(
      null,
      map(points, function (p: any) {
        return p.x
      })
    )
  )
  let tSubY = Math.min(
    0,
    Math.min.apply(
      null,
      map(points, function (p: any) {
        return p.x
      })
    )
  )

  let tNewPoints = map(points, function (p: any) {
    return {
      x: p.x - tSubX,
      y: p.y - tSubY,
    }
  })

  let tSum = 0
  for (let tI = 0; tI < tNewPoints.length; tI++) {
    let tC1 = tNewPoints[tI]
    let tC2
    if (tI == tNewPoints.length - 1) {
      tC2 = tNewPoints[0]
    } else {
      tC2 = tNewPoints[tI + 1]
    }
    tSum += (tC2.x - tC1.x) * (tC2.y + tC1.y)
  }
  return tSum >= 0
}

export class Region {
  public points: any[]
  public length: number
  constructor(points: any[]) {
    this.points = points || []
    this.length = points.length
  }

  area() {
    let area = 0,
      i,
      j,
      point1,
      point2

    for (i = 0, j = this.length - 1; i < this.length; j = i, i += 1) {
      point1 = this.points[i]
      point2 = this.points[j]
      area += point1.x * point2.y
      area -= point1.y * point2.x
    }
    area *= 0.5

    return area
  }

  centroid() {
    let x = 0,
      y = 0,
      i,
      j,
      f,
      point1,
      point2

    for (i = 0, j = this.length - 1; i < this.length; j = i, i += 1) {
      point1 = this.points[i]
      point2 = this.points[j]
      f = point1.x * point2.y - point2.x * point1.y
      x += (point1.x + point2.x) * f
      y += (point1.y + point2.y) * f
    }

    f = this.area() * 6

    return new Vector2(x / f, y / f)
  }
}
