import { Request, Response } from "express";
import { MongoHelper } from "../mongoHelper";

class GetAllControllers {

  async handle(request: Request, response: Response): Promise<Response> {

    const collection = await MongoHelper.getCollection('controller')

    const result = await collection.find({}).toArray()

    return response.json(result)
  }

}

export const getAllControllers = new GetAllControllers()