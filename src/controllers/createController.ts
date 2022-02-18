import { Request, Response } from "express";
import { MongoHelper } from "../mongoHelper";
import { ObjectId } from 'mongodb'

class CreateController {

  async handle(request: Request, response: Response): Promise<Response> {

    const data = request.body

    const requiredFields = [
      'route',
      'tag',
      'description',
      'descriptionResult',
      'method'

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

    const controllerCollection = await MongoHelper.getCollection('controller')


    const result = await controllerCollection.insertOne(data)

    return response.json(result)
  }

}

export const createController = new CreateController()