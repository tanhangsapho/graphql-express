const Client = require("../models/client.model");
const Project = require("../models/project.model");

const resolvers = {
  Query: {
    projects: async () => {
      return await Project.find();
    },
    project: async (_parent, { id }) => {
      return await Project.findById(id);
    },
    clients: async () => {
      return await Client.find();
    },
    client: async (_parent, { id }) => {
      return await Client.findById(id);
    },
  },
  Mutation: {
    //Client
    addClient: async (_parent, { name, email, phone }) => {
      const client = new Client({ name, email, phone });
      return await client.save();
    },
    deleteClient: async (_parent, { id }) => {
      return await Client.findByIdAndDelete(id);
    },
    updateClient: async (_parent, { id, name, email, phone }) => {
      const updatedFields = { name, email, phone };
      return await Client.findByIdAndUpdate(id, updatedFields, { new: true });
    },
    //Project
    addProject: async (_parent, { name, description, status, clientId }) => {
      if (!["NOT_STARTED", "IN_PROGRESS", "COMPLETED"].includes(status)) {
        throw new Error("Invalid status value");
      }
      const project = new Project({ name, description, status, clientId });
      return await project.save();
    },
    deleteProject: async (_parent, { id }) => {
      return await Project.findByIdAndDelete(id);
    },
    updateProject: async (_parent, { id, name, description, status }) => {
      const updatedFields = { name, description, status };
      return await Project.findByIdAndUpdate(id, updatedFields, { new: true });
    },
  },
  Project: {
    client: async (parent) => {
      return await Client.findById(parent.clientId);
    },
  },
};

module.exports = resolvers;
