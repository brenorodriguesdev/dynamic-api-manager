import { Request, Response } from "express";
import { MongoHelper } from "../mongoHelper";
import { ObjectId } from 'mongodb'

class UpdateController {

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
          return response.status(400).json({ message: 'O serviço com a id ' + serviceCalled + ' não existe!' })
        }

      }
    }

    const controllerCollection = await MongoHelper.getCollection('controller')


    const dataResult = await controllerCollection.findOne({
      _id: new ObjectId(data.id)
    })

    if (!dataResult) {
      return response.status(400).json({ message: 'O controlador com a id ' + data.id + ' não existe!' })
    }

    const result = await controllerCollection.updateOne({ _id: new ObjectId(data?.id) }, { $set: data })

    return response.json(result)
  }

}

export const updateController = new UpdateController()