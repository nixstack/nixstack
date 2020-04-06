import { action } from 'typesafe-actions'
import { v4 as uuidv4 } from 'uuid'
import { AbstractProject } from '../model'
import { EProjectEvent, EVENT_TYPES } from '../constant'

export const addProject = (userId: string, name: string) =>
  action(
    EProjectEvent.ADD_PROJECT,
    {
      project: {
        id: uuidv4(),
        userId,
        name,
        status: 1,
        createdTime: new Date(),
      } as AbstractProject,
    },
    { channel: EVENT_TYPES.API, remote: false }
  )
