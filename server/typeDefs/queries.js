const { gql } = require("apollo-server")

const queries = gql`

  type Query {

    collection(db: String!): Collection

  }

`

module.exports = queries