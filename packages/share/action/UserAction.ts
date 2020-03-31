import { action } from 'typesafe-actions'
import { v4 as uuidv4 } from 'uuid'
import { EUserActionType } from '../constant'
import { AbstractUser } from '../model'

export const logIn = (name: string) =>
  action(
    EUserActionType.LOG_IN,
    {
      user: {
        id: uuidv4(),
        name
      } as AbstractUser
    },
    { remote: true }
  )