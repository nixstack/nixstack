import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from 'typeorm'

@Entity()
export class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: string

  @Column()
  public uuid!: string

  @Column()
  public name!: string

  @Column()
  public desc!: string
}
