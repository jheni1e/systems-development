import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    createdAt: Date;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    stock: { type: Number, required: false, default: 0 },
    category: { type: String, required: false },
    createdAt: { type: Date, required: false, default: Date.now }
});

const Product = mongoose.model<IProduct>('Product', productSchema, 'Product');

export default Product;
