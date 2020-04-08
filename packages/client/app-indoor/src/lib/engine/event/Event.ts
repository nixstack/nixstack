import { IEvent, IEventListeners } from './IEvent'
/**
 * Event
 */
export default class Event implements IEvent {
  private _listeners: IEventListeners = {}

  on(type: string, fn: Function): void {
    if (type === void 0 || fn === void 0) {
      return
    }

    if (this._listeners[type] === void 0) {
      this._listeners[type] = []
    }

    if (this._listeners[type].indexOf(fn) === -1) {
      this._listeners[type].push(fn)
    }
  }
  once(type: string, fn: Function): void {
    if (type === void 0 || fn === void 0) {
      return
    }
    const _this = this
    this.on(type, function () {
      return function () {
        fn.apply(_this, arguments)
        _this.off(type, fn)
      }
    })
  }
  has(type: string, fn: Function): boolean {
    if (type === void 0) {
      return false
    }

    return (
      this._listeners[type] !== void 0 &&
      this._listeners[type].indexOf(fn) !== -1
    )
  }
  off(type: string, fn: Function): any {
    if (type === void 0) {
      return
    }

    if (fn === void 0) {
      this._listeners[type] = []
      return
    }

    const index = this._listeners[type].indexOf(fn)
    this._listeners[type].splice(index, 1)
  }

  dispatch(type: string, payload?: any) {
    if (this._listeners === void 0) {
      return
    }
    const listeners = this._listeners
    const listenerArr = listeners[type]

    if (listenerArr !== void 0) {
      const arr = listenerArr.slice(0)

      for (let i = 0; i < arr.length; i++) {
        arr[i].call(this, payload)
      }
    }
  }
}
