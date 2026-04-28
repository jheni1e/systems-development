import { Request, Response } from "express";
import Project from "../models/project.ts";

class ProjectController {
    static async listAll(req: Request, res: Response) {
        try {
            const { title, xp, level, progress, status } = req.query;

            const filters: any = {};

            if (title) {
                filters.title = { $regex: title, $options: "i" };
            }

            if (level) {
                filters.level = { $regex: level, $options: "i" };
            }

            if (status) {
                filters.status = { $regex: status, $options: "i" };
            }

            const projects = await Project.find(filters).select("-__v");

            return res.status(200).json(projects);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar projetos.', error });
        }
    }

    static async create(req: Request, res: Response) {
        const { title, xp, level, progress, status } = req.body;

        try {
            const project = new Project({ title, xp, level, progress, status });
            await project.save();
            res.status(201).json(project);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar projeto.', error });
        }
    }

    static async findById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const project = await Project.findById(id).select("-__v");

            if (!project) {
                return res.status(404).json({ message: "Projeto não encontrado." });
            }

            return res.status(200).json(project);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar projeto.', error });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, xp, level, progress, status } = req.body;

            const updatedProject = await Project.findByIdAndUpdate(
                id,
                { title, xp, level, progress, status },
                { new: true }
            ).select("-__v");

            if (!updatedProject) {
                return res.status(404).json({ message: "Projeto não encontrado." });
            }

            return res.status(200).json(updatedProject);

        } catch (error) {
            return res.status(400).json({ message: "Erro ao atualizar projeto.", error });
        }
    }

    static async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const deletedProject = await Project.findByIdAndDelete(id);

            if (!deletedProject) {
                return res.status(404).json({ message: "Projeto não encontrado." });
            }

            return res.status(200).json({ message: "Projeto deletado com sucesso!" });

        } catch (error) {
            return res.status(400).json({ message: "Erro ao deletar projeto.", error });
        }
    }
}

export default ProjectController;
