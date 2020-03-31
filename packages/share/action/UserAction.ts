import { action } from 'typesafe-actions'
import uuid from 'uuid'
import { EUserActionType } from '../constant'
import { AbstractUser } from '../model'

export const logIn = (name: string) =>
  action(
    EUserActionType.LOG_IN,
    {
      user: {
        id: uuid(),
        name
      } as AbstractUser
    },
    { remote: true }
  )