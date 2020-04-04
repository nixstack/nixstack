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
    this.on(type, function() {
      return function() {
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
}
