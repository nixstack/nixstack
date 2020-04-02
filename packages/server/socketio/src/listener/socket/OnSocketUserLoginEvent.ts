import { UserServiceImpl } from '../../service/impl/UserServiceImpl'
import { action } from 'typesafe-actions'
import { IEventListener } from '../../core/event/IEventListener'
import { provideNamed, provide, inject } from '../../core/ioc'
import { TYPES } from '../../constant'
import { Actions } from '@share/action'
import { EUserEvent, EVENT_TYPES } from '@share/constant'

// @provideNamed(TYPES.IEventListener, EVENT_NAME_MAP.onSocketUserLogin)
@provide(TYPES.IEventListener)
export class OnSocketUserLoginEvent implements IEventListener {
  @inject(TYPES.UserService) private _userService!: UserServiceImpl
  type(): string {
    return EVENT_TYPES.socket
  }
  name(): string {
    return EUserEvent.LOG_IN
  }
  handlers(): Function[] {
    return [
      (action: Actions) => {
        this._userService.list().then(data => console.log(data))
        console.log(action)
      }
    ]
  }
}
