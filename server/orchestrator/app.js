const { ApolloServer } = require("apollo-server");
const shipsResolvers = require("./resolvers/shipsResolvers");
const shipmentResolvers = require("./resolvers/shipmentsResolvers");
const usersResolvers = require("./resolvers/usersResolvers");
const shipsTypeDefs = require("./typeDefs/shipsTypeDefs");
const shipmentsTypeDefs = require("./typeDefs/shipmentsTypeDefs");
const usersTypeDefs = require("./typeDefs/usersTypeDefs");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: [shipsTypeDefs.typeDefs, , shipmentsTypeDefs.typeDefs, usersTypeDefs.typeDefs],
  resolvers: [shipsResolvers.resolvers, shipmentResolvers.resolvers, usersResolvers.resolvers],
});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
