import { gql } from "@apollo/client";

export const GET_SHIPS = gql`
  query GetShips($search: String, $accessToken: String) {
    getShips(search: $search, access_token: $accessToken) {
      id
      ship
      length
      direction
      displacement
    }
  }
`;
