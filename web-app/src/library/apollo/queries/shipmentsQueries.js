import { gql } from "@apollo/client";

export const GET_SHIPMENTS = gql`
  query GetShipments($search: String, $accessToken: String) {
    getShipments(search: $search, access_token: $accessToken) {
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
