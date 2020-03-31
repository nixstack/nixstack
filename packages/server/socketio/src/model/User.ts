import { AbstractUser } from "@share/model";
import { IUserDto } from '../dto'


export class User extends AbstractUser {
  id: string
  name: string

  constructor(props: IUserDto) {
    super(props)
    this.id = props.id
    this.name = props.name
  }

  static create(props: IUserDto) {
    return new User(Object.assign({}, props, {

    }))
  }
}