import { ActionType } from 'typesafe-actions'
import * as userAction from './UserAction'
import * as projectAction from './ProjectAction'
import * as modelAction from './ModelAction'

const actions = {
  user: userAction,
  project: projectAction,
  model: modelAction,
}

export default actions

export type Actions = ActionType<typeof actions>
