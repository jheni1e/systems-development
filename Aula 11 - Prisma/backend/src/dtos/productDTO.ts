export interface registerProductDTO {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
}

export interface findProductsDTO {
    name?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    inStock?: boolean;
}

export interface updateProductDTO {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    category?: string;
}