import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";


class ListUserReceiverComplimentService  {
    async execute(user_id:string){
        const complimentsRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentsRepositories.find({
            where:{
                user_receiver: user_id
            }, relations:["userSender", "userReceiver", "tag"]
        });

        return compliments
    }
}

export { ListUserReceiverComplimentService }