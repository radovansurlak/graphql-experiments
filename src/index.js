const { GraphQLServer } = require("graphql-yoga");

// Type definitions

const typeDefs = `
  type Query {
    hello: String!
    name: String!
  }
`;

// Resolvers

const resolvers = {
  Query: {
    hello: function () {
      return String(Math.random());
    },
    name: function () {
      const nameArray = ["Name1", "Name2", "Name3"];
      const randomIndex = Math.floor(Math.random() * nameArray.length);
      return nameArray[randomIndex];
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
