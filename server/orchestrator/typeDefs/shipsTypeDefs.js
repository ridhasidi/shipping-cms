const { gql } = require("apollo-server");

const typeDefs = gql`
  type Ship {
    id: ID
    ship: String
    length: Int
    direction: String
    displacement: Int
  }

  type Query {
    getShips(search: String): [Ship]
  }
`;

module.exports = { typeDefs };
