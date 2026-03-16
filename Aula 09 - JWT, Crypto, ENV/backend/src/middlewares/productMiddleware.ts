import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, description, price, stock, category, createdAt } = req.body;

    if (!name || price === undefined) {
        return res.status(400).send({ response: "Nome e preço são campos obrigatórios." })
    }

    next();
}

export const validateObjectId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    //mudar middleware

    next();
};
