import { IEvent } from './IEvent'
import { IEventListener } from './IEventListener'

export interface IEventManager extends IEventEmitter {
  initProviders(providers: IEventManagerProvider[]): IEventManager
  initListeners(eventListeners: IEventListener[]): IEventManager
  registerProvider(provider: IEventManagerProvider): void
  getRegisteredEventProvider(eventType: string): IEventManagerProvider
}

export interface IEventEmitter {
  emit(event: IEvent): void
}

export interface IEventRegistrar {
  on(eventName: string, callback: Function): void
}

export interface IType {
  type(): string
}

export interface IEventManagerProvider
  extends IType,
    IEventEmitter,
    IEventRegistrar {}
