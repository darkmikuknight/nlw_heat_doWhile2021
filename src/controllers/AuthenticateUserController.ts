import { request, Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle(resquest: Request, response: Response) {

        const { code } = request.body;

        const service = new AuthenticateUserService();
        const result = await service.execute(code );

        return response.json(result);
    }
}

export { AuthenticateUserController };