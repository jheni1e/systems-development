import express, { Router } from 'express';
import ProductController from '../controllers/productController.ts';
import { validateObjectId, validateRegister } from '../middlewares/productMiddleware.ts';

const router: Router = express.Router();

router
    .post("/products", validateRegister, ProductController.create)
    .get("/products", validateObjectId, ProductController.findAll)
    .get("/products/:id", validateObjectId, ProductController.findById)
    .put("/products/:id", validateObjectId, ProductController.update)
    .delete("/products/:id", validateObjectId, ProductController.remove);

export default router;
