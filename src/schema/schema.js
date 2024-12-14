const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }

  type Project {
    id: ID!
    name: String!
    description: String!
    status: String!
    client: Client
  }

  type Query {
    projects: [Project!]
    project(id: ID!): Project
    clients: [Client!]
    client(id: ID!): Client
  }

  type Mutation {
    addClient(name: String!, email: String!, phone: String!): Client
    deleteClient(id: ID!): Client
    updateClient(id: ID!, name: String, email: String, phone: String): Client
    addProject(name: String!, description: String!, status: String!, clientId: ID!): Project
    deleteProject(id: ID!): Project
    updateProject(id: ID!, name: String, description: String, status: String, clientId: ID): Project
  }
`);

module.exports = schema;

// const {
//   GraphQLObjectType,
//   GraphQLID,
//   GraphQLString,
//   GraphQLSchema,
//   GraphQLList,
//   GraphQLNonNull,
//   GraphQLEnumType,
// } = require("graphql");

// const Client = require("../models/client.model");
// const Project = require("../models/project.model");

// //Client Type
// const ClientType = new GraphQLObjectType({
//   name: "Client",
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     email: { type: GraphQLString },
//     phone: { type: GraphQLString },
//   }),
// });

// // Project Type
// const ProjectType = new GraphQLObjectType({
//   name: "Project",
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     description: { type: GraphQLString },
//     status: { type: GraphQLString },
//     client: {
//       type: ClientType,
//       resolve(parent, args) {
//         return Client.findById(parent.clientId);
//       },
//     },
//   }),
// });

// const RootQuery = new GraphQLObjectType({
//   name: "RootQuery",
//   fields: {
//     projects: {
//       type: new GraphQLList(ProjectType),
//       resolve(parent, args) {
//         return Project.find();
//       },
//     },
//     project: {
//       type: ProjectType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return Project.findById(args.id);
//       },
//     },
//     clients: {
//       type: new GraphQLList(ClientType),
//       resolve(parent, args) {
//         return Client.find();
//       },
//     },
//     client: {
//       type: ClientType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return Client.findById(args.id);
//       },
//     },
//   },
// });

// // Mutations
// const mutations = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     addClient: {
//       type: ClientType,
//       args: {
//         name: { type: new GraphQLNonNull(GraphQLString) },
//         email: { type: new GraphQLNonNull(GraphQLString) },
//         phone: { type: new GraphQLNonNull(GraphQLString) },
//       },
//       resolve(parent, args) {
//         const client = new Client({
//           name: args.name,
//           email: args.email,
//           phone: args.phone,
//         });
//         return client.save();
//       },
//     },
//     deleteClient: {
//       type: ClientType,
//       args: { id: { type: new GraphQLNonNull(GraphQLID) } },
//       resolve(parent, args) {
//         return Client.findByIdAndDelete(args.id);
//       },
//     },
//     updateClient: {
//       type: ClientType,
//       args: {
//         id: { type: new GraphQLNonNull(GraphQLID) },
//         name: { type: GraphQLString },
//         email: { type: GraphQLString },
//         phone: { type: GraphQLString },
//       },
//       resolve(parent, args) {
//         return Client.findByIdAndUpdate(args.id, args, { new: true });
//       },
//     },
//   },
// });
// module.exports = new GraphQLSchema({ query: RootQuery, mutation: mutations });
