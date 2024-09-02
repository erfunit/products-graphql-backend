import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
const cors = require("cors");

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000/graphql");
});
