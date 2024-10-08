import { gql } from "graphql-tag";

export const productTypeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
  }

  type Query {
    getProduct(id: ID!): Product
    getProducts: [Product!]!
  }

  type Mutation {
    createProduct(name: String!, description: String, price: Float!): Product
    updateProduct(
      id: ID!
      name: String
      description: String
      price: Float
    ): Product
    deleteProduct(id: ID!): Boolean
  }
`;
