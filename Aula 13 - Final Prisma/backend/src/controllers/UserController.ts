import { Request, Response } from "express";
import { registerUserDto, updateUserDto } from "../dtos/userDTO";
import { registerUser } from "../services/user.service";

export default class UserController {
    static async create(req: Request, res: Response){
        const data: registerUserDto = req.body
        try{
        }
        catch(e){
        }
    }

    static async show(req: Request, res: Response){
        const {id} = req.params
        try{
        }
        catch(e){
        }
    }

    static async update(req: Request, res: Response){
        const {id} = req.params
        const data: updateUserDto = req.body
        try{
        }
        catch(e){
        }
    }

    static async delete(req: Request, res: Response){
        const data: registerUserDto = req.body
        try{
        }
        catch(e){
        }
    }
}
