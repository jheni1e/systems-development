import express, { Router } from 'express';
import StepController from '../controllers/stepController.ts';

const router: Router = express.Router();

router
    .post("/step", StepController.create)
    .get("/step/:id", StepController.listByProject)
    .put("/step/:id", StepController.updateStatus)
    .delete("/step/:id", StepController.remove);

export default router;
