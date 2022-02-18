import { Request, Response } from "express";
import { MongoHelper } from "../mongoHelper";
import { ObjectId } from 'mongodb'

class CreateServiceController {

  async handle(request: Request, response: Response): Promise<Response> {

    const data = request.body

    const requiredFields = [
      'type',
      'entity',
      'name',
      'callOrder'
    ]

    for (let requiredField of requiredFields) {
      if (!data[requiredField]) {
        return response.status(400).json({ message: 'O campo ' + requiredField + ' é obrigatório!' })
      }
    }

    const collection = await MongoHelper.getCollection('service')

    if (data.servicesCalleds) {
      for (let serviceCalled of data.servicesCalleds) {

        const dataResult = await collection.findOne({
          _id: new ObjectId(serviceCalled)
        })

        if (!dataResult) {
          return response.status(400).json({ message: 'O serviço com a id ' + dataResult + ' não existe!' })
        }

      }
    }


    const result = await collection.insertOne(data)

    return response.json(result)
  }

}

export const createServiceController = new CreateServiceController()