import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) {
      access_token
    }
  }
`;

export const Register = gql`
  mutation Register($input: UserInput) {
    register(input: $input) {
      message
    }
  }
`;
