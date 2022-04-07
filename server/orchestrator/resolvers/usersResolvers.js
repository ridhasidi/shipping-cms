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
        return error.response.data;
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
        return error.response.data;
      }
    },
  },
};

module.exports = { resolvers };
