
import { Request, Response } from "express";
import { ListUserReceiverComplimentService } from "../services/ListUserReceiveComplimentService";


class createListUserReceiver {
    async handle(request: Request, response: Response){
        const { user_id } = request;
        const listUserReceiverComplimentsService = new ListUserReceiverComplimentService();
        const compliments = await listUserReceiverComplimentsService.execute(user_id)

        return response.json(compliments);
    }
}

export { createListUserReceiver };
