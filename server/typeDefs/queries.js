const { gql } = require("apollo-server")

const queries = gql`

  type Query {

    getUnknow: Unknow

  }

`

module.exports = queries