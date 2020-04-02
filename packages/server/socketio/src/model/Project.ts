import { User } from './User'
import { PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm'

export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column()
  public project_name!: string

  @Column()
  public project_desc!: string

  // @ManyToOne(
  //   type => User,
  //   user => user.projects,
  //   {
  //     cascade: true
  //   }
  // )
  // public user!: User
}
