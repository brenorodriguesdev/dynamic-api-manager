import { Request, Response } from "express";
import { MongoHelper } from "../mongoHelper";
import { ObjectId } from 'mongodb'

class DeleteController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.query
    const collection = await MongoHelper.getCollection('controller')

    const result = await collection.deleteOne({ _id: new ObjectId(id.toString()) })

    return response.json(result)
  }

}

export const deleteController = new DeleteController()