import { Request, Response } from "express";
import { MongoHelper } from "../mongoHelper";
import { ObjectId } from 'mongodb'

class UpdateServiceController {

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
          return response.status(400).json({ message: 'O serviço com a id ' + serviceCalled + ' não existe!' })
        }

      }
    }


    const dataResult = await collection.findOne({
      _id: new ObjectId(data.id)
    })

    if (!dataResult) {
      return response.status(400).json({ message: 'O serviço com a id ' + data.id + ' não existe!' })
    }

    const result = await collection.updateOne({ _id: new ObjectId(data?.id) }, { $set: data })

    return response.json(result)
  }

}

export const updateServiceController = new UpdateServiceController()