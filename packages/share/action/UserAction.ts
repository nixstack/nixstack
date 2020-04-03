import { action } from 'typesafe-actions'
// import { v4 as uuidv4 } from 'uuid'
import { EUserEvent } from '../constant'
// import { AbstractUser } from '../model'
import { EVENT_TYPES } from '../constant'

export const logIn = (username: string) =>
  action(
    EUserEvent.LOG_IN,
    {
      user: {
        username,
        email: 'admin@admin.com'
      }
    },
    { channel: EVENT_TYPES.SOCKET, remote: true }
  )

export const logInSuccess = () =>
  action(
    EUserEvent.LOG_SUCCESS,
    {},
    { channel: EVENT_TYPES.SOCKET, remote: false }
  )
