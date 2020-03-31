import { EActionType } from '@share/constant'
import { IRootState } from "../store/Store";
import { Actions } from '@share/action'
import { AbstractProject } from '@share/model';


const initState: IRootState = {
  user: {
    id: '0',
    name: 'Anonymity'
  },
  projectList: []
}

export const rootReducer = (state: IRootState = initState, action: Actions) => {
  let project: AbstractProject | undefined
  let projectList: AbstractProject[]

  switch (action.type) {
    case EActionType.LOG_IN:
      return Object.assign({}, state, { user: action.payload.user })
    case EActionType.ADD_PROJECT:
      projectList = [...state.projectList]
      project = state.projectList.find((item) => item.id === action.payload.project.id)

      if (!project) return Object.assign({}, state)

      return Object.assign({}, state, { projectList })
    case EActionType.UPDATE_PROJECT:
      projectList = [...state.projectList]
      project = state.projectList.find((item) => item.id === action.payload.project.id)

      if (!project) return Object.assign({}, state)

      return Object.assign({}, state, { projectList })
    default:
      return Object.assign({}, state);
  }
}
