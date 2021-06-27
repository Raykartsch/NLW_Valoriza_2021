import { Request, Response } from "express";
import { ListUserSenderComplimentService } from "../services/ListUserSenderComplimentService";

class createListUserSender {
    async handle(request: Request, response: Response){
        const { user_id } = request;
        const listUserSendComplimentsService = new ListUserSenderComplimentService();
        const compliments = await listUserSendComplimentsService.execute(user_id)

        return response.json(compliments);
    }
}

export { createListUserSender }
