import { getRepository } from "typeorm"

export class BaseRepository<T> {
    constructor (private readonly entity: any) {}
    async getAll (): Promise<T[]> {
        const repository = getRepository<T>(this.entity)
        return await repository.find()
      }
    
      async getById (id: number): Promise<T> {
        const repository = getRepository<T>(this.entity)
        return await repository.findOne(id)
      }
    
      async get (where: any): Promise<T[]> {
        const repository = getRepository<T>(this.entity)
        return await repository.find({ where })
      }
    
      async deleteById (id: number): Promise<void> {
        const repository = getRepository<T>(this.entity)
        await repository.delete(id)
      }
    
      async save (data: T): Promise<T> {
        const repository = getRepository(this.entity)
        return await repository.save(data)
      }
    
      async update (data: T): Promise<void> {
        const repository = getRepository(this.entity)
        const id = data['id']
        await repository.update({ id }, data)
      }
}