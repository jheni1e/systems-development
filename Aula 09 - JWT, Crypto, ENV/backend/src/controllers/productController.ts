import { Request, Response } from "express";
import Product from "../models/product.ts";
import { findProductsDTO, registerProductDTO, updateProductDTO } from "../dtos/productDTO.ts";
import { create, deleteProduct, getAllProducts, getProductById, updateProduct } from "../services/productService.ts";

class ProductController {
    static async findAll(req: Request, res: Response) {
        try {
            const filters: findProductsDTO = req.query as any;
            const products = await getAllProducts(filters);
            return res.status(200).json(products);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar produtos.', error });
        }
    }

    static async create(req: Request, res: Response) {
        const data: registerProductDTO = req.body;

        try {
            const result = await create(data);

            return res.status(201).json({ message: 'Produto cadastrado com sucesso.'});
        } catch (error) {
            return res.status(400).json({ message: 'Erro ao criar produto.', error });
        }
    }

    static async findById(req: Request, res: Response) {
        try {
            const product = await getProductById(req.params.id[0]);
            if (!product) return res.status(404).json({ message: "Produto não encontrado." });
            return res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar produto.', error });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const data: updateProductDTO = req.body;
            const updatedProduct = await updateProduct(req.params.id[0], data);

            if (!updatedProduct) return res.status(404).json({ message: "Produto não encontrado." });
            return res.status(200).json(updatedProduct);

        } catch (error) {
            return res.status(400).json({ message: "Erro ao atualizar produto.", error });
        }
    }

    static async remove(req: Request, res: Response) {
        try {
            const deletedProduct = await deleteProduct(req.params.id[0]);

            if (!deletedProduct) return res.status(404).json({ message: "Produto não encontrado." });

            return res.status(200).json({ message: "Produto deletado com sucesso!" });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao deletar produto.", error });
        }
    }
}

export default ProductController;
