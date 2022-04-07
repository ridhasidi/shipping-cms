import { gql } from "@apollo/client";

export const GET_SHIPMENTS = gql`
  query GetShipments($search: String) {
    getShipments(search: $search) {
      id
      shipmentId
      shipmentDate
      truckId
      truckType
      productId
      productType
      quantity
    }
  }
`;
