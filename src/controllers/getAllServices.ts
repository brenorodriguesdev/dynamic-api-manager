import { Request, Response } from "express";
import { MongoHelper } from "../mongoHelper";
import { ObjectId } from 'mongodb'

class GetAllServicesController {

  async handle(request: Request, response: Response): Promise<Response> {

    const collection = await MongoHelper.getCollection('service')

    const result = await collection.find({}).toArray()

    return response.json(result)
  }

}

export const getAllServicesController = new GetAllServicesController()