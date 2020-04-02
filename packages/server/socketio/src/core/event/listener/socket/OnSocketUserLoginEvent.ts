import { action } from 'typesafe-actions'
import { IEventListener } from '../../manger/IEventListener'
import { provideNamed, provide } from '../../../../core/ioc'
import { TYPES } from '../../../../constant'
import { Actions } from '@share/action'
import { EUserEvent, EVENT_TYPES } from '@share/constant'

// @provideNamed(TYPES.IEventListener, EVENT_NAME_MAP.onSocketUserLogin)
@provide(TYPES.IEventListener)
export class OnSocketUserLoginEvent implements IEventListener {
  type(): string {
    return EVENT_TYPES.socket
  }
  name(): string {
    return EUserEvent.LOG_IN
  }
  handlers(): Function[] {
    return [
      (action: Actions) => {
        console.log(action)
      }
    ]
  }
}
