import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { response } from "express"
getCustomRepository

interface IAuthenticateRequest{
    email: string;
    password: string;
}
class AuthenticateUserService{
    async execute({email, password} :  IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories)
        
        //Verificar se o email do usuario existe
        const user = await usersRepositories.findOne({
            email
        });
        if(!user){
            throw new Error("Email/Password incorrect!")
        }

        //Verificar senha do usuario
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect!")
        }

        //Gerar token
        const token = sign(
        {
            email: user.email,
        }, 
        "d75690915150a8295e8fc09028e0b9fa", 
        {
            subject: user.id,
            expiresIn: "1d"
        }
    );
        return token;
    }
    
}

export { AuthenticateUserService }