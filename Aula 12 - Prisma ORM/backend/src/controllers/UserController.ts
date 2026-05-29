import { Request, Response } from "express";
import { registerUserDto } from "../dtos/userDTO";
import { registerUser } from "../services/user.service";

export default class UserController {
    static async register(req: Request, res: Response){
        const data: registerUserDto = req.body
        try{
            await registerUser(data)
            res.status(200).send({ response: "Registrado com sucesso"})
        }
        catch{
            return res.status(500).send({ response: "Erro"})
        }
    }
    static async login(req: Request, res: Response) {

    }
}
