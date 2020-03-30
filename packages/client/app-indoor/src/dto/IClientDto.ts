import { IUserDto } from "./IUserDto";
import { IProjectDto } from "./IProjectDto";

export interface IClientDto {
  user?: IUserDto
  userId?: string
  projectList?: IProjectDto[]
}