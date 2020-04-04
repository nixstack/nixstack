export interface IEventListeners {
  [key: string]: Function[]
}

/**
 * 事件接口定义
 */
export interface IEvent {
  on(type: string, fn: Function): void
  once(type: string, fn: Function): void
  has(type: string, fn: Function): void
  off(type: string, fn: Function): boolean
}
