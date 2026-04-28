import { Request, Response } from "express";
import Step from "../models/step.ts";

class StepController {
    static async listByProject(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const steps = await Step.find({ projectId: id }).select("-__v");

            return res.status(200).json(steps);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar etapas/missões por projeto.', error });
        }
    }

    static async create(req: Request, res: Response) {
        const { title, xp, level, progress, status } = req.body;

        try {
            const step = new Step({ title, xp, level, progress, status });
            await step.save();
            res.status(201).json(step);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar etapa/missão.', error });
        }
    }

    static async updateStatus(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const updatedStepStatus = await Step.findByIdAndUpdate(
                id,
                { status },
                { new: true }
            ).select("-__v");

            if (!updatedStepStatus) {
                return res.status(404).json({ message: "Etapa/missão não encontrado." });
            }

            return res.status(200).json(updatedStepStatus);

        } catch (error) {
            return res.status(400).json({ message: "Erro ao atualizar etapa/missão.", error });
        }
    }

    static async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const deletedStep = await Step.findByIdAndDelete(id);

            if (!deletedStep) {
                return res.status(404).json({ message: "Etapa/missão não encontrado." });
            }

            return res.status(200).json({ message: "Etapa/missão deletado com sucesso!" });

        } catch (error) {
            return res.status(400).json({ message: "Erro ao deletar etapa/missão.", error });
        }
    }
}

export default StepController;
