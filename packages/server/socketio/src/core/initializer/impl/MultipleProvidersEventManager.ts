import { IEventListener } from '../../event/IEventListener'
// import { EventHandler } from '../../../core/event/manger/IEventListener'
import forEach from 'lodash/forEach'
import { IEventManager, IEventManagerProvider } from '../../event/IEventManager'
import { provideSingleton } from '../../../core/ioc'
import { TYPES } from '../../../constant'

@provideSingleton(TYPES.IEventManager)
export class MultipleProvidersEventManager implements IEventManager {
  protected providers: { [type: string]: IEventManagerProvider } = {}
  initProviders(
    providers: import('../../event/IEventManager').IEventManagerProvider[]
  ): this {
    forEach(providers, this.registerProvider.bind(this))
    return this
  }
  initListeners(
    eventListeners: import('../../event/IEventListener').IEventListener[]
  ): this {
    eventListeners.forEach((eventListener: IEventListener) =>
      eventListener
        .handlers()
        .forEach((eventHandler: any) =>
          this.getRegisteredEventProvider(eventListener.type()).on(
            eventListener.name(),
            eventHandler
          )
        )
    )
    return this
  }
  registerProvider(
    provider: import('../../event/IEventManager').IEventManagerProvider
  ): void {
    if (this.providers[provider.type()]) {
      throw new Error('Event Manager provider already registered!')
    }

    this.providers[provider.type()] = provider
  }
  getRegisteredEventProvider(
    eventType: string
  ): import('../../event/IEventManager').IEventManagerProvider {
    if (!this.providers[eventType]) {
      throw new Error('Unknown event provider requested.')
    }
    return this.providers[eventType]
  }
  emit(event: import('../../event/IEvent').IEvent): void {
    if (!this.providers.hasOwnProperty(event.type())) {
      throw new Error('Invalid event type!')
    }
    this.providers[event.type()].emit(event)
  }
}
