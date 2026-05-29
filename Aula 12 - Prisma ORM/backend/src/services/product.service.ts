import { registerProductDTO } from "../dtos/productDTO";
import Product from "../models/product";

export async function register(data: registerProductDTO){
    const { name, description, price, stock, category } = data
    const createdAt = new Date()
    const product = new Product({name, description, price, stock, category, createdAt } )
    return await product.save()
}