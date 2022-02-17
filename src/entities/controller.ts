import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('controller')
export class Controller {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  route: string

  @Column()
  method: string

  @Column()
  tag: string

  @Column()
  description: number

  @Column()
  descriptionResult: number
}