import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('validator')
export class Validator {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  param: string
}