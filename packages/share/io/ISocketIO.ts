import { IUserIO } from "./IUserIO";
import { IProjectIO } from "./IProjectIO";

export interface ISocketIO {
  user?: IUserIO
  userId?: string
  ProjectList?: IProjectIO[]
}