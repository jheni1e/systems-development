import { Request, Response } from "express";
import { registerUserDto, updateUserDto } from "../dtos/userDTO";
import { deleteUser, registerUser, showUsers, updateUser } from "../services/user.service";

export default class UserController {
    static async create(req: Request, res: Response) {
        const data: registerUserDto = req.body;
        try {
            await registerUser(data);

            return res.status(200).send({ response: 'Usuário registrado com sucesso!' });
        }
        catch (e) {
            return res.status(500).send({ response: 'Ocorreu algum erro no servidor.' });
        }
    }

    static async show(req: Request, res: Response) {
        try {
            const users = await showUsers();

            return res.status(200).send(users);
        }
        catch (e) {
            return res.status(500).send({ response: 'Ocorreu algum erro no servidor.' });
        }
    }

    static async update(req: Request, res: Response) {
        const { id } = req.params;
        const data: updateUserDto = req.body;
        try {
            await updateUser(data);

            return res.status(200).send({ response: 'Usuário atualizado com sucesso!' });
        }
        catch (e) {
            return res.status(500).send({ response: 'Ocorreu algum erro no servidor.' });
        }
    }

    static async delete(req: Request, res: Response) {
        const id = parseInt(req.params[0], 10);
        
        try {
            await deleteUser(id);

            return res.status(200).send({ response: 'Usuário deletado com sucesso!' });
        }
        catch (e) {
            return res.status(500).send({ response: 'Ocorreu algum erro no servidor.' });
        }
    }
}
