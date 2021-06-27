import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";


class ListUserSenderComplimentService  {
    async execute(user_id:string){
        const complimentsRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentsRepositories.find({
            where:{
                user_sender: user_id
            }
        })

        return compliments
    }
}

export { ListUserSenderComplimentService }