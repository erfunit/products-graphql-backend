import { IResolvers } from "@graphql-tools/utils";
import { ProductService, Product } from "../services/product.service";

interface CreateProductInput {
  name: string;
  description: string;
  price: number;
}

interface UpdateProductInput {
  id: string;
  name?: string;
  description?: string;
  price?: number;
}

const productService = new ProductService();

export const productResolvers: IResolvers = {
  Query: {
    getProduct: (_, { id }: { id: string }): Product | undefined => {
      return productService.getProduct(id);
    },
    getProducts: (): Product[] => {
      return productService.getProducts();
    },
  },
  Mutation: {
    createProduct: (
      _,
      { name, description, price }: CreateProductInput
    ): Product => {
      return productService.createProduct({ name, description, price });
    },
    updateProduct: (
      _,
      { id, name, description, price }: UpdateProductInput
    ): Product | undefined => {
      return productService.updateProduct(id, { name, description, price });
    },
    deleteProduct: (_, { id }: { id: string }): boolean => {
      return productService.deleteProduct(id);
    },
  },
};
