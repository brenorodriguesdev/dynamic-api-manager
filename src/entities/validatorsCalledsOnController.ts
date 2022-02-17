import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Controller } from './controller'
import { Validator } from './validator'

@Entity('ValidatorsCalledsOnController')
export class ValidatorsCalledsOnController {
  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToOne(() => Controller)
  @JoinColumn({ name: 'id_controller' })
  controller: Controller

  @OneToOne(() => Validator)
  @JoinColumn({ name: 'id_validator' })
  property: Validator
}