const { GraphQLServer } = require("graphql-yoga");

// Type definitions

const typeDefs = `
  type Query {
    hello: String!
  }
`;

// Resolvers

const resolvers = {
  Query: {
    hello: function () {
      return String(Math.random());
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("server is running");
});
