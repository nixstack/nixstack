import { ActionType } from 'typesafe-actions'
import * as userAction from './UserAction'
import * as projectAction from './ProjectAction'

const actions = {
  user: userAction,
  project: projectAction
}

export default actions

export type Actions = ActionType<typeof actions>
