import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";
import { router } from "./routes";

import './database';


const app = express();

app.use(express.json());

app.use(router);

//middlewares
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
    })
})

// app.get("/test", (request, response) => {
//     //Request => Entrando
//     //Response => Saindo
//     response.send("Olá Método Get");
// });

// app.post("/test-post", (request, response) => {
//     return response.send("Olá Método Post");
// })

app.listen(3000, () => console.log("Server is running"))