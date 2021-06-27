import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticate(
    request: Request, 
    response: Response, 
    next: NextFunction){
    // Receber o token
    const authToken = request.headers.authorization
    console.log(authToken);

    //Validar se authToken está preenchido
    if (!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");
    console.log(token)
    //Validar se authToken está ativo
    try {
        const { sub } = verify(
            token,
            "d75690915150a8295e8fc09028e0b9fa"
            ) as IPayload

        request.user_id = sub;
        return next();
    } catch(err){
        return response.status(401).end();
    }
    

    //Recuperar informações do usuario

    return next();
}