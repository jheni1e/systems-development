import { Request, Response } from "express";
import Product from "../models/product.ts";

class ProductController {
    static async findAll(req: Request, res: Response) {
        try {
            const { name, category, minPrice, maxPrice, inStock } = req.query;

            const filters: any = {};

            if (name) {
                filters.name = { $regex: name, $options: "i" };
            }

            if (category) {
                filters.category = category;
            }

            if (minPrice || maxPrice) {
                filters.price = {};

                if (minPrice) {
                    filters.price.$gte = Number(minPrice);
                }

                if (maxPrice) {
                    filters.price.$lte = Number(maxPrice);
                }
            }

            if (inStock === "true") {
                filters.stock = { $gt: 0 };
            }

            const products = await Product.find(filters).select("-__v");

            return res.status(200).json(products);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar produtos.', error });
        }
    }

    static async create(req: Request, res: Response) {
        const { name, description, price, stock, category, createdAt } = req.body;

        try {
            const product = new Product({ name, description, price, stock, category, createdAt });
            await product.save();
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar produto.', error });
        }
    }

    static async findById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const product = await Product.findById(id).select("-__v");

            if (!product) {
                return res.status(404).json({ message: "Produto não encontrado." });
            }

            return res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar produto.', error });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, description, price, stock, category, createdAt } = req.body;

            const updatedProduct = await Product.findByIdAndUpdate(
                id,
                { name, description, price, stock, category, createdAt },
                { new: true }
            ).select("-__v");

            if (!updatedProduct) {
                return res.status(404).json({ message: "Produto não encontrado." });
            }

            return res.status(200).json(updatedProduct);

        } catch (error) {
            return res.status(400).json({ message: "Erro ao atualizar produto.", error });
        }
    }

    static async remove(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const deletedProduct = await Product.findByIdAndDelete(id);

            if (!deletedProduct) {
                return res.status(404).json({ message: "Produto não encontrado." });
            }

            return res.status(200).json({ message: "Produto deletado com sucesso!" });

        } catch (error) {
            return res.status(400).json({ message: "Erro ao deletar produto.", error });
        }
    }
}

export default ProductController;
