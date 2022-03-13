const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:pass@localhost:27017', {
  useNewUrlParser: true,
  dbName: 'graphqlnode'
});

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start();
