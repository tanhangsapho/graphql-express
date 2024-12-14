const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./schema");
const resolvers = require("./resolve");
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
