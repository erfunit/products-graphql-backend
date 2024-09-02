export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
}

export class ProductService {
  private products: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  createProduct(productData: Omit<Product, "id">): Product {
    const product: Product = { id: Date.now().toString(), ...productData };
    this.products.push(product);
    return product;
  }

  updateProduct(
    id: string,
    productData: Partial<Omit<Product, "id">>
  ): Product | undefined {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...productData };
      return this.products[index];
    }
    return undefined;
  }

  deleteProduct(id: string): boolean {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}
