const { gql } = require("apollo-server");

const typeDefs = gql`
  type Token {
    access_token: String
  }

  input UserInput {
    name: String
    email: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Message {
    message: String
  }

  type Mutation {
    register(input: UserInput): Message
    login(input: LoginInput): Token
  }
`;

module.exports = { typeDefs };
