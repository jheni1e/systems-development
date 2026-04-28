import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { title, xp, level, progress, status } = req.body;

    if (!title) {
        return res.status(400).send({ response: "Título é um campo obrigatório." })
    }

    next();
}
