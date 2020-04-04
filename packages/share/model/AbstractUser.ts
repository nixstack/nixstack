interface IUser {
  id: string
  name: string
}

export abstract class AbstractUser {
  readonly id?: string
  readonly name?: string

  constructor(props: IUser) {
    this.id = props.id
    this.name = props.name
  }

  static create(props: IUser) {}
}
