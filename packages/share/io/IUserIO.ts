import { IProjectIO } from "./IProjectIO";

export interface IUserIO {
  id: string
  name: string
  projectList?: IProjectIO[]
}