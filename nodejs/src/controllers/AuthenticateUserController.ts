import {Request, Response} from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserSevice";


class AuthenticateUserController{
  async handle(request, response){

    const {code} = request.body;

    const service = new AuthenticateUserService();
    try{
      const result = await service.execute(code);
      return response.json(result);
    }catch(err){
      return response.json({error: err.message});
    }
    
  }
}

export { AuthenticateUserController }