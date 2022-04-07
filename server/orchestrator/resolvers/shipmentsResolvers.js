const axios = require("axios");
const resolvers = {
  Query: {
    getShipments: async (_, args) => {
      try {
        const { search } = args;
        let baseUrl = "http://localhost:4001/shipments";
        if (search) {
          baseUrl = `${baseUrl}?search=${search}`;
        }
        const { data } = await axios({
          method: "GET",
          url: baseUrl,
        });
        return data;
      } catch (error) {
        return error.response.data;
      }
    },
  },
};

module.exports = { resolvers };
