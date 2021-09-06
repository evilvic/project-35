const { gql } = require("apollo-server")

const queries = gql`

  type Query {

    collection: String

  }

`

module.exports = queries