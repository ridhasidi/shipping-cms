const { gql } = require("apollo-server");

const typeDefs = gql`
  type UserDetail {
    id: ID
    name: String
    role: String
    message: String
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
    login(input: LoginInput): UserDetail
  }
`;

module.exports = { typeDefs };
