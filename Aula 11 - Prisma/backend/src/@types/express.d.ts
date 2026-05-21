import * as product from "../src/models/product";

declare global {
    namespace Express {
        interface Request {
            product?: product.IProduct;
        }
    }
}