import { User } from './../../model/User'
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
  @inject(TYPES.SocketIO) private _socketIo!: SocketIO.Server
  @inject(TYPES.UserService) private _userService!: UserServiceImpl
  type(): string {
    return EVENT_TYPES.SOCKET
  }
  name(): string {
    return EUserEvent.LOG_IN
  }
  handlers(): Function[] {
    return [
      async (action: Actions) => {
        // this._userService.list().then(data => console.log(data))
        const user = await this._userService.create(
          (action.payload as any).user
        )
        console.log(action)
        this._socketIo.emit(this.name(), {
          type: this.name(),
          payload: { user }
          // meta: { channel: this.type() }
        })
      }
    ]
  }
}
