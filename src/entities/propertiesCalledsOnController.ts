import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Controller } from './controller'
import { Property } from './property'

@Entity('propertiesCalledsOnController')
export class PropertiesCalledsOnController {
  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToOne(() => Controller)
  @JoinColumn({ name: 'id_controller' })
  controller: Controller

  @OneToOne(() => Property)
  @JoinColumn({ name: 'id_property' })
  property: Property
}