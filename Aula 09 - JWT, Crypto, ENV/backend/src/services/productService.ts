import { findProductsDTO, registerProductDTO, updateProductDTO } from "../dtos/productDTO.ts";
import Product from "../models/product.ts";

export async function create(data: registerProductDTO) {
    const { name, description, price, stock, category } = data;
    const createdAt = new Date();
    const product = new Product({ name, description, price, stock, category, createdAt });
    return await product.save();
}

export async function getAllProducts(filters: findProductsDTO) {
    const query: any = {};

    if (filters.name) {
        query.name = { $regex: filters.name, $options: "i" };
    }

    if (filters.category) {
        query.category = filters.category;
    }

    if (filters.minPrice || filters.maxPrice) {
        query.price = {};
        if (filters.minPrice !== undefined) query.price.$gte = filters.minPrice;
        if (filters.maxPrice !== undefined) query.price.$lte = filters.maxPrice;
    }

    if (filters.inStock) {
        query.stock = { $gt: 0 };
    }

    return await Product.find(query).select("-__v");
}

export async function getProductById(id: string) {
    return await Product.findById(id).select("-__v");
}

export async function updateProduct(id: string, data: updateProductDTO) {
    return await Product.findByIdAndUpdate(id, data, { new: true }).select("-__v");
}

export async function deleteProduct(id: string) {
    return await Product.findByIdAndDelete(id);
}