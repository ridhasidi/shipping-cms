const { ApolloError } = require("apollo-server");
const axios = require("axios");
const resolvers = {
  Mutation: {
    register: async (_, args) => {
      try {
        const baseUrl = "http://localhost:4001/register";
        const { input } = args;
        const { data } = await axios({
          method: "POST",
          url: baseUrl,
          data: input,
        });
        return data;
      } catch (error) {
        return new ApolloError(error?.response.data.message);
      }
    },
    login: async (_, args) => {
      try {
        const baseUrl = "http://localhost:4001/login";
        const { input } = args;
        const { data } = await axios({
          method: "POST",
          url: baseUrl,
          data: input,
        });
        return data;
      } catch (error) {
        return new ApolloError(error?.response.data.message);
      }
    },
  },
};

module.exports = { resolvers };
