import express, { Router } from 'express';
import { validateRegister } from '../middlewares/projectMiddleware.ts';
import ProjectController from '../controllers/projectController.ts';

const router: Router = express.Router();

router
    .post("/project", validateRegister, ProjectController.create)
    .get("/project", ProjectController.listAll)
    .get("/project/:id", ProjectController.findById)
    .put("/project/:id", ProjectController.update)
    .delete("/project/:id", ProjectController.remove);

export default router;
