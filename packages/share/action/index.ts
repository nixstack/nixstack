import { ActionType } from 'typesafe-actions'
import * as userAction from './UserAction'
import * as projectAction from './ProjectAction'

const rootAction = {
  user: userAction,
  project: projectAction
}

export default rootAction

export type Actions = ActionType<typeof rootAction>
