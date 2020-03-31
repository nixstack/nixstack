import { action } from 'typesafe-actions'
import uuid from 'uuid'
import { AbstractProject } from "../model";
import { EProjectActionType } from '../constant';

export const addProject = (userId: string, name: string) =>
  action(
    EProjectActionType.ADD_PROJECT,
    {
      project: {
        id: uuid(),
        userId,
        name,
        status: 1,
        createdTime: new Date()
      } as AbstractProject,
    },
    { remote: true }
  )

export const updateProject = (projectId: string, userId: string, name: string) =>
  action(EProjectActionType.UPDATE_PROJECT,
    {
      project: {
        id: projectId,
        userId,
        name,
        updatedTime: new Date()
      } as AbstractProject
    },
    {}
  )

export const delProject = (projectId: string, userId: string) => {
  action(
    EProjectActionType.DEL_PROJECT,
    {
      project: {
        id: projectId,
        userId,
        status: 0
      }
    },
    {}
  )
}

export const listProject = (projectId: string, userId: string) => {
  action(
    EProjectActionType.LIST_PROJECT,
    {
      project: {
        id: projectId,
        userId
      }
    },
    {}
  )
}