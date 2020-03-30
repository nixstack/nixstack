import * as _ from 'lodash'
import { ISocketIO, IProjectIO, IUserIO } from '@share/io'
import { IClientDto } from './IClientDto'
import { IProjectDto } from './IProjectDto'
import { IUserDto } from './IUserDto'

export const convertProjectIO2ProjectDto: (projectIo: IProjectIO) => IProjectDto = data => ({
  projectId: data.id,
  projectName: data.name,
  projectDesc: data.desc
})

export const convertUserIO2UserDto: (userIo: IUserIO) => IUserDto = data => ({
  userId: data.id,
  userName: data.name,
  projectList: data.projectList?.map(item => convertProjectIO2ProjectDto(item))
})

export const convertFromSocketIO: (socketIo: ISocketIO) => IClientDto = data => ({
  userId: _.isUndefined(data.userId) ? undefined : data.userId,
  user: _.isUndefined(data.user) ? undefined : convertUserIO2UserDto(data.user),
  projectList: _.isUndefined(data.ProjectList) ? undefined : data.ProjectList.map(item => convertProjectIO2ProjectDto(item))
})