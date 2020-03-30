export interface IProject {
  id: string
  name: string
  desc: string
}

export abstract class AbstractProject {
  readonly id: string
  readonly name: string
  readonly desc: string

  constructor(props: IProject) {
    this.id = props.id
    this.name = props.name
    this.desc = props.desc
  }

  static create(props: IProject) { }

}