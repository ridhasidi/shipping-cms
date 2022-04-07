const { gql } = require("apollo-server");

const typeDefs = gql`
  type Shipment {
    id: ID
    shipmentId: Int
    shipmentDate: String
    truckId: String
    truckType: String
    productId: String
    productType: String
    quantity: Int
  }

  extend type Query {
    getShipments(search: String): [Shipment]
  }
`;

module.exports = { typeDefs };
