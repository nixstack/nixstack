import { IProjectDto } from "./IProjectDto";

export interface IUserDto {
  userId: string
  userName: string
  projectList?: IProjectDto[]
}