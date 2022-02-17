import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('service')
export class Service {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  type: string

  @Column()
  entity: string

  @Column()
  hasReturn: boolean

  @Column()
  numberOrder: number
}