import { IEvent } from './IEvent'

export interface IEventListener {
  type(): string
  name(): string
  handlers(): Function[]
}

// export declare type EventHandler = (event: IEvent) => void
