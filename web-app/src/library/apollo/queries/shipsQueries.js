import { gql } from "@apollo/client";

export const GET_SHIPS = gql`
  query GetShips($search: String) {
    getShips(search: $search) {
      id
      ship
      length
      direction
      displacement
    }
  }
`;
