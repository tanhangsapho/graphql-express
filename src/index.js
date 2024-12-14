const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/index");
const colors = require("colors");
const connectionDb = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();

//connect Db
connectionDb();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}/graphql`)
);
