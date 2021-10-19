import { GetLast3MessagesService } from "../services/GetLast3MessagesService"
import { Request, Response } from "express"

class Get3LastMessagesController{
  async handle(request, response){

    const service = new GetLast3MessagesService();

    const result = await service.execute();

    return response.json(result);

  }
}

export { Get3LastMessagesController }