const { ApolloError } = require("apollo-server");
const axios = require("axios");
const resolvers = {
  Query: {
    getShipments: async (_, args) => {
      try {
        const { search, access_token } = args;
        let baseUrl = "http://localhost:4001/shipments";
        if (search) {
          baseUrl = `${baseUrl}?search=${search}`;
        }
        const { data } = await axios({
          method: "GET",
          url: baseUrl,
          headers: {
            access_token,
          },
        });
        return data;
      } catch (error) {
        return new ApolloError(error?.response.data.message);
      }
    },
  },
};

module.exports = { resolvers };
