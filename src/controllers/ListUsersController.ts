
import { Request, Response } from "express"
import { ListUsersService } from "../services/ListUsersService"

class createListUsers{
    async handle(request: Request, response: Response){
        const listUsersService = new ListUsersService();
        const users = listUsersService.execute();
        return response.json(users);

    }
}

export { createListUsers };