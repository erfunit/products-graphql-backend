import { makeExecutableSchema } from "graphql-tools";
import { productTypeDefs } from "./product.schema";
import { productResolvers } from "../resolvers";

export const schema = makeExecutableSchema({
  typeDefs: [productTypeDefs],
  resolvers: [productResolvers],
});
