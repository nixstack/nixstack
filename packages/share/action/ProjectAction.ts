import { action } from 'typesafe-actions'
import { v4 as uuidv4 } from 'uuid'
import { AbstractProject } from "../model";
import { EProjectActionType } from '../constant';

export const addProject = (userId: string, name: string) =>
  action(
    EProjectActionType.ADD_PROJECT,
    {
      project: {
        id: uuidv4(),
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
    {
      remote: false
    }
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
    {
      remote: false
    }
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
    {
      remote: false
    }
  )
}