import { action } from 'typesafe-actions'
import { EVENT_TYPE_MAP, EVENT_NAME_MAP } from './../../../../constant/Events'
import { IEventListener } from '../../manger/IEventListener'
import { provideNamed, provide } from '../../../../core/ioc'
import { TYPES } from '../../../../constant'
import { Actions } from '@share/action'

// @provideNamed(TYPES.IEventListener, EVENT_NAME_MAP.onSocketUserLogin)
@provide(TYPES.IEventListener)
export class OnSocketUserLoginEvent implements IEventListener {
  type(): string {
    return EVENT_TYPE_MAP.socket
  }
  name(): string {
    return EVENT_NAME_MAP.onSocketUserLogin
  }
  handlers(): Function[] {
    return [
      (action: Actions) => {
        console.log(action)
      }
    ]
  }
}
