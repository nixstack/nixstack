import { IUserDto } from "./IUserDto";
import { IProjectDto } from "./IProjectDto";

export interface IServerDto {
  user?: IUserDto
  userId?: string
  projectList?: IProjectDto[]
}