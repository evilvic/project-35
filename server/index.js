const { ApolloServer } = require('apollo-server')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const NotionAPI = require('./dataSources/notion')

console.log("TEST LOG!!!")

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      notion: new NotionAPI()
    }
  }
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`{ ^_^}/ Server ready at: ${url}`)
})