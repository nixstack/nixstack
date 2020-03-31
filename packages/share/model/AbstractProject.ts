export interface IProject {
  id: string
  name: string
  desc: string
  userId: string
  status: number
  createdTime?: Date
  updatedTime?: Date
}

export abstract class AbstractProject {
  readonly id: string
  readonly name: string
  readonly desc: string
  readonly userId: string
  readonly status: number
  readonly createdTime?: Date
  readonly updatedTime?: Date

  constructor(props: IProject) {
    this.id = props.id
    this.name = props.name
    this.desc = props.desc
    this.userId = props.userId
    this.status = props.status
    this.createdTime = props.createdTime
    this.updatedTime = props.updatedTime
  }

  static create(props: IProject) { }

}