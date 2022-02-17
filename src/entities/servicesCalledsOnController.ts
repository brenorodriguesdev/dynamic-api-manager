import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Controller } from './controller'
import { Service } from './service'

@Entity('servicesCalledsOnController')
export class PropertiesCalledsOnController {
  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToOne(() => Controller)
  @JoinColumn({ name: 'id_controller' })
  controller: Controller

  @OneToOne(() => Service)
  @JoinColumn({ name: 'id_service_called' })
  service: Service
}