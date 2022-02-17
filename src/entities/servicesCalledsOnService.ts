import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Service } from './service'

@Entity('servicesCalledsOnService')
export class ServicesCalledsOnService {
  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToOne(() => Service)
  @JoinColumn({ name: 'id_service' })
  service: Service

  @OneToOne(() => Service)
  @JoinColumn({ name: 'id_service_called' })
  serviceCalled: Service
}