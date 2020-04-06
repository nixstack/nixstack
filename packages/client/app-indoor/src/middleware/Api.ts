import { Store } from 'redux'
import { Actions } from '@share/action'
import { EVENT_TYPES } from '@share/constant'
import axios from 'axios'
import shareConfig from '@share/config'

export const createApiMiddleware = (store: Store) => (
  next: (action: Actions) => Actions
) => async (action: Actions) => {
  if (action.meta.channel === EVENT_TYPES.API) {
    const key = Object.keys(action.payload)[0]
    const { url = '', method = 'get' } = (action.payload as any)[key]
    try {
      const result = await axios({ url: shareConfig + url, method })
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  } else {
    next(action)
  }
}
