import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany
} from 'typeorm'
import { Project } from './Project'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column()
  public username!: string

  @Column()
  public email!: string

  @Column({ nullable: true })
  public age!: number

  // @OneToMany(
  //   type => Project,
  //   project => project.user
  // )
  // public projects!: Project[]
}

// import { AbstractUser } from "@share/model";
// import { IUserDto } from '../dto'

// export class User extends AbstractUser {
//   id: string
//   name: string

//   constructor(props: IUserDto) {
//     super(props)
//     this.id = props.id
//     this.name = props.name
//   }

//   static create(props: IUserDto) {
//     return new User(Object.assign({}, props, {

//     }))
//   }
// }
