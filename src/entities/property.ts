import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('property')
export class Property {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  type: string

  @Column()
  required: boolean
}